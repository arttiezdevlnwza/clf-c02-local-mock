const sets = window.QUIZ_SETS || [];
const $ = id => document.getElementById(id);
let activeSet = null;
let currentIndex = 0;
let reviewWrongOnly = false;
let summaryFilter = 'all';
let vocabOpen = false;
let pendingImportPayload = null;

const STORAGE_PREFIX = 'clf-c02-local-mock:v1:';
const PROGRESS_FORMAT = 'clf-c02-local-mock-progress';
const PROGRESS_VERSION = 1;
const PROGRESS_CODE_PREFIX = 'CLFPROGRESS1:';

function storageKey(setId){ return `${STORAGE_PREFIX}${setId}`; }
function blankState(){ return { answers:{}, checked:{}, choiceOrders:{}, orderDrafts:{}, orderTouched:{}, matchOrders:{}, explainMore:{}, currentIndex:0 }; }
function loadState(setId){
  try {
    const parsed=JSON.parse(localStorage.getItem(storageKey(setId)) || '{}');
    return {...blankState(), ...parsed, answers:parsed.answers||{}, checked:parsed.checked||{}, choiceOrders:parsed.choiceOrders||{}, orderDrafts:parsed.orderDrafts||{}, orderTouched:parsed.orderTouched||{}, matchOrders:parsed.matchOrders||{}, explainMore:parsed.explainMore||{}};
  } catch { return blankState(); }
}
function saveState(){
  if(!activeSet) return;
  const st = state(); st.currentIndex = currentIndex;
  localStorage.setItem(storageKey(activeSet.id), JSON.stringify(st));
}
function state(){
  if(!activeSet._state) activeSet._state = loadState(activeSet.id);
  return activeSet._state;
}
function needsExplanation(q,st=state()){ return !!(st.explainMore && st.explainMore[q.id]); }
function setNeedsExplanation(value){
  const q=activeSet.questions[currentIndex], st=state();
  st.explainMore[q.id]=!!value;
  $('reviewFlagLabel').classList.toggle('active',!!value);
  renderQuestionGrid(); saveState();
}
function sameAnswer(a,b){
  const x=[...(a||[])].sort(), y=[...(b||[])].sort();
  return x.length===y.length && x.every((v,i)=>v===y[i]);
}
function isCorrect(q,answer){
  if(q.type==='ordering'){
    const a=answer||[];
    return a.length===q.answer.length && a.every((v,i)=>v===q.answer[i]);
  }
  return sameAnswer(answer,q.answer);
}
function shuffled(arr){
  const out=[...arr];
  for(let i=out.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [out[i],out[j]]=[out[j],out[i]];
  }
  return out;
}
function choiceOrder(q){
  const st=state(), keys=Object.keys(q.choices);
  let order=st.choiceOrders[q.id];
  if(!Array.isArray(order) || order.length!==keys.length || order.some(k=>!keys.includes(k))){
    order=shuffled(keys); st.choiceOrders[q.id]=order;
  }
  return order;
}
function orderDraft(q){
  const st=state(), keys=Object.keys(q.choices);
  let order=st.orderDrafts[q.id];
  if(!Array.isArray(order) || order.length!==keys.length || order.some(k=>!keys.includes(k))){
    order=shuffled(keys); st.orderDrafts[q.id]=order;
  }
  return order;
}
function matchOrder(q){
  const st=state(), keys=Object.keys(q.matches||{});
  let order=st.matchOrders[q.id];
  if(!Array.isArray(order) || order.length!==keys.length || order.some(k=>!keys.includes(k))){
    order=shuffled(keys); st.matchOrders[q.id]=order;
  }
  return order;
}
function currentAnswer(q,st=state()){
  if(q.type==='ordering') return st.orderDrafts[q.id]||[];
  return st.answers[q.id]||[];
}
function hasResponse(q,st=state()){
  if(q.type==='ordering') return !!st.orderTouched[q.id] || !!st.checked[q.id];
  if(q.type==='matching') return (st.answers[q.id]||[]).length>0;
  return (st.answers[q.id]||[]).length>0;
}
function displayMap(q){
  const labels='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const map={};
  choiceOrder(q).forEach((canonicalKey,index)=>{ map[canonicalKey]=labels[index]; });
  return map;
}
function explanationWithChoices(q,text){
  let out=(text||'').replace(/\u00a0/g,' ');
  if(q.type!=='single' && q.type!=='multiple') return out.replace(/\s{2,}/g,' ').trim();
  const map=displayMap(q);
  const describe=raw=>raw.split(/\s*[,/&]\s*/).filter(Boolean).map(k=>{
    const shown=map[k]||k, name=q.choices[k]||'';
    return name?`${shown} (${name})`:shown;
  }).join(', ');
  const ref='([A-E](?:\\s*[,/&]\\s*[A-E])*)(?![A-Za-z0-9])';

  // Hard Set 3 explanations use "ตอบ B — ...". Remap the canonical key after choices are shuffled.
  out=out.replace(/ตอบ\s*([A-E])(?![A-Za-z0-9])/g,(_,key)=>`ตอบ ${describe(key)}`);

  // Hard Set 4 explanations use "A ✗ ... | B ✓ ...". Remap every displayed label after shuffling.
  out=out.replace(/(^|\|)\s*([A-E])\s*([✓✗])/g,(_,sep,key,mark)=>`${sep}${sep?' ':' '}${describe(key)} ${mark}`);

  // Set 2 multiple-response explanations can mark correct choices as "✅ A" and "· C".
  out=out.replace(new RegExp(`✅\\s*${ref}\\s*(?:=|—|-)?\\s*`,'g'),(_,keys)=>`✅ ${describe(keys)} — `);

  // Set 1/2 style distractor references. Require a standalone option key so words such as Canvas/CloudTrail are not corrupted.
  out=out.replace(new RegExp(`❌\\s*${ref}\\s*(?:=|—|-)?\\s*`,'g'),(_,keys)=>`❌ ${describe(keys)} — `);
  out=out.replace(new RegExp(`([·;])\\s*${ref}\\s*(?:=|—|-)?\\s*`,'g'),(_,sep,keys)=>`${sep} ${describe(keys)} — `);

  return out.replace(/\s{2,}/g,' ').trim();
}
function summary(set){
  if(!set._state) set._state=loadState(set.id);
  const st=set._state;
  let answered=0, checked=0, correct=0;
  set.questions.forEach(q=>{
    if(hasResponse(q,st)) answered++;
    if(st.checked[q.id]){ checked++; if(isCorrect(q,currentAnswer(q,st))) correct++; }
  });
  return {answered,checked,correct};
}
function effectiveSummary(set){
  const s=summary(set);
  if(s.checked===set.questionCount) return {answered:set.questionCount,checked:set.questionCount,correct:s.correct,source:'current'};
  if(Number.isFinite(set.historicalAnswered) && Number.isFinite(set.historicalScore)) return {answered:set.historicalAnswered,checked:set.historicalAnswered,correct:set.historicalScore,source:'history'};
  return {answered:s.checked,checked:s.checked,correct:s.correct,source:'current'};
}
function storedStateForSet(set){
  try {
    const raw=localStorage.getItem(storageKey(set.id));
    if(!raw) return null;
    const parsed=JSON.parse(raw);
    return parsed && typeof parsed==='object' ? parsed : null;
  } catch { return null; }
}
function localProgressStats(){
  let setsWithData=0, checked=0, answered=0, flagged=0;
  sets.forEach(set=>{
    const st=storedStateForSet(set);
    if(!st) return;
    setsWithData++;
    const normalized={...blankState(),...st,answers:st.answers||{},checked:st.checked||{},orderDrafts:st.orderDrafts||{},orderTouched:st.orderTouched||{},explainMore:st.explainMore||{}};
    set.questions.forEach(q=>{
      if(hasResponse(q,normalized)) answered++;
      if(normalized.checked[q.id]) checked++;
      if(normalized.explainMore[q.id]) flagged++;
    });
  });
  return {setsWithData,checked,answered,flagged};
}
function renderProgressToolStatus(){
  const el=$('progressToolStatus'); if(!el) return;
  const s=localProgressStats();
  el.textContent=`Local save เครื่องนี้: ${s.setsWithData} ชุด · ตอบแล้ว ${s.answered} ข้อ · ตรวจแล้ว ${s.checked} ข้อ${s.flagged?` · 🟡 ${s.flagged} ข้อ`:''}`;
}
function collectProgressPayload(){
  if(activeSet) saveState();
  const states={};
  sets.forEach(set=>{
    const st=storedStateForSet(set);
    if(st) states[set.id]=st;
  });
  return {
    format:PROGRESS_FORMAT,
    version:PROGRESS_VERSION,
    appVersion:'8.51',
    exportedAt:new Date().toISOString(),
    storagePrefix:STORAGE_PREFIX,
    states
  };
}
function bytesToBase64Url(bytes){
  let binary='';
  const chunk=0x8000;
  for(let i=0;i<bytes.length;i+=chunk) binary+=String.fromCharCode(...bytes.subarray(i,i+chunk));
  return btoa(binary).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}
function base64UrlToBytes(value){
  const normalized=value.replace(/-/g,'+').replace(/_/g,'/');
  const padded=normalized+'='.repeat((4-normalized.length%4)%4);
  const binary=atob(padded), out=new Uint8Array(binary.length);
  for(let i=0;i<binary.length;i++) out[i]=binary.charCodeAt(i);
  return out;
}
function encodeProgressCode(payload){
  return PROGRESS_CODE_PREFIX+bytesToBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
}
function decodeProgressCode(code){
  const trimmed=String(code||'').trim();
  if(!trimmed.startsWith(PROGRESS_CODE_PREFIX)) throw new Error('Progress Code ต้องขึ้นต้นด้วย CLFPROGRESS1:');
  const json=new TextDecoder().decode(base64UrlToBytes(trimmed.slice(PROGRESS_CODE_PREFIX.length)));
  return JSON.parse(json);
}
function validateProgressPayload(payload){
  if(!payload || typeof payload!=='object') throw new Error('ข้อมูล Import ไม่ใช่ Progress ที่ถูกต้อง');
  if(payload.format!==PROGRESS_FORMAT) throw new Error('รูปแบบ Progress ไม่ตรงกับ CLF-C02 Local Mock');
  if(Number(payload.version)!==PROGRESS_VERSION) throw new Error(`Progress version ${payload.version} ยังไม่รองรับ`);
  if(!payload.states || typeof payload.states!=='object' || Array.isArray(payload.states)) throw new Error('ไม่พบข้อมูลชุดข้อสอบใน Progress');
  return payload;
}
function parseProgressInput(text){
  const trimmed=String(text||'').trim();
  if(!trimmed) throw new Error('กรุณาวาง Progress Code หรือเลือกไฟล์ JSON');
  const payload=trimmed.startsWith(PROGRESS_CODE_PREFIX)?decodeProgressCode(trimmed):JSON.parse(trimmed);
  return validateProgressPayload(payload);
}
function validArray(value,allowed){
  if(!Array.isArray(value)) return [];
  const allow=new Set(allowed);
  return value.filter((x,i,a)=>typeof x==='string' && allow.has(x) && a.indexOf(x)===i);
}
function sanitizeImportedState(set,incoming){
  const src=incoming && typeof incoming==='object'?incoming:{};
  const out=blankState();
  const srcAnswers=src.answers&&typeof src.answers==='object'?src.answers:{};
  const srcChecked=src.checked&&typeof src.checked==='object'?src.checked:{};
  const srcChoiceOrders=src.choiceOrders&&typeof src.choiceOrders==='object'?src.choiceOrders:{};
  const srcOrderDrafts=src.orderDrafts&&typeof src.orderDrafts==='object'?src.orderDrafts:{};
  const srcOrderTouched=src.orderTouched&&typeof src.orderTouched==='object'?src.orderTouched:{};
  const srcMatchOrders=src.matchOrders&&typeof src.matchOrders==='object'?src.matchOrders:{};
  const srcExplain=src.explainMore&&typeof src.explainMore==='object'?src.explainMore:{};
  set.questions.forEach(q=>{
    const id=q.id, choiceKeys=Object.keys(q.choices||{}), matchKeys=Object.keys(q.matches||{});
    if(q.type==='matching'){
      const left=new Set(choiceKeys), right=new Set(matchKeys), seenLeft=new Set(), seenRight=new Set();
      const pairs=[];
      (Array.isArray(srcAnswers[id])?srcAnswers[id]:[]).forEach(pair=>{
        const [l,r]=String(pair).split(':');
        if(left.has(l)&&right.has(r)&&!seenLeft.has(l)&&!seenRight.has(r)){ seenLeft.add(l); seenRight.add(r); pairs.push(`${l}:${r}`); }
      });
      if(pairs.length) out.answers[id]=pairs;
      const mo=validArray(srcMatchOrders[id],matchKeys);
      if(mo.length===matchKeys.length) out.matchOrders[id]=mo;
    } else {
      const ans=validArray(srcAnswers[id],choiceKeys);
      if(ans.length) out.answers[id]=ans;
    }
    const co=validArray(srcChoiceOrders[id],choiceKeys);
    if(co.length===choiceKeys.length) out.choiceOrders[id]=co;
    if(q.type==='ordering'){
      const od=validArray(srcOrderDrafts[id],choiceKeys);
      if(od.length===choiceKeys.length) out.orderDrafts[id]=od;
      if(srcOrderTouched[id]) out.orderTouched[id]=true;
    }
    if(srcChecked[id]) out.checked[id]=true;
    if(srcExplain[id]) out.explainMore[id]=true;
  });
  const idx=Number(src.currentIndex);
  out.currentIndex=Number.isFinite(idx)?Math.max(0,Math.min(set.questions.length-1,Math.trunc(idx))):0;
  return out;
}
function questionHasData(st,q){
  const id=q.id;
  return !!st.checked[id] || !!st.orderTouched[id] || !!st.explainMore[id] || (Array.isArray(st.answers[id])&&st.answers[id].length>0);
}
function mergeSetStates(set,localState,importedState){
  const local=sanitizeImportedState(set,localState), incoming=sanitizeImportedState(set,importedState), merged=sanitizeImportedState(set,local);
  set.questions.forEach(q=>{
    const id=q.id, localHas=questionHasData(local,q), incomingHas=questionHasData(incoming,q);
    const takeIncoming=(!localHas&&incomingHas) || (!local.checked[id]&&incoming.checked[id]);
    if(takeIncoming){
      ['answers','checked','choiceOrders','orderDrafts','orderTouched','matchOrders'].forEach(field=>{
        if(Object.prototype.hasOwnProperty.call(incoming[field],id)) merged[field][id]=incoming[field][id];
        else delete merged[field][id];
      });
    }
    if(local.explainMore[id]||incoming.explainMore[id]) merged.explainMore[id]=true;
  });
  const localChecked=Object.values(local.checked).filter(Boolean).length;
  const incomingChecked=Object.values(incoming.checked).filter(Boolean).length;
  if(incomingChecked>localChecked) merged.currentIndex=incoming.currentIndex;
  return merged;
}
function importPayload(payload,mode){
  const valid=validateProgressPayload(payload);
  let importedSets=0, ignoredSets=0;
  if(mode==='replace') sets.forEach(set=>localStorage.removeItem(storageKey(set.id)));
  Object.entries(valid.states).forEach(([setId,raw])=>{
    const set=sets.find(s=>s.id===setId);
    if(!set){ ignoredSets++; return; }
    const incoming=sanitizeImportedState(set,raw);
    const finalState=mode==='replace'?incoming:mergeSetStates(set,loadState(setId),incoming);
    localStorage.setItem(storageKey(setId),JSON.stringify(finalState));
    importedSets++;
  });
  sets.forEach(set=>{ delete set._state; });
  if(activeSet) activeSet._state=loadState(activeSet.id);
  return {importedSets,ignoredSets};
}
async function copyText(text){
  try { if(navigator.clipboard && window.isSecureContext){ await navigator.clipboard.writeText(text); return true; } } catch {}
  const ta=document.createElement('textarea'); ta.value=text; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.focus(); ta.select();
  let copied=false; try { copied=document.execCommand('copy'); } catch {} ta.remove(); return copied;
}
async function copyProgressCode(){
  const btn=$('copyProgressBtn'), old=btn.textContent;
  try {
    const code=encodeProgressCode(collectProgressPayload());
    const copied=await copyText(code);
    btn.textContent=copied?`✅ Copied (${Math.ceil(code.length/1000)} KB)`:'Copy ไม่สำเร็จ';
  } catch(err){ btn.textContent='Copy ไม่สำเร็จ'; alert(`สร้าง Progress Code ไม่สำเร็จ: ${err.message}`); }
  setTimeout(()=>btn.textContent=old,1800);
}
function exportProgressJson(){
  try {
    const payload=collectProgressPayload();
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json;charset=utf-8'});
    const url=URL.createObjectURL(blob), a=document.createElement('a');
    const stamp=new Date().toISOString().replace(/[:.]/g,'-');
    a.href=url; a.download=`CLF-C02-Local-Mock-Progress-${stamp}.json`; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  } catch(err){ alert(`Export ไม่สำเร็จ: ${err.message}`); }
}
function setImportMessage(message,type='info'){
  const el=$('progressImportMessage'); el.textContent=message; el.className=`progress-import-message ${type}`;
}
function clearImportMessage(){ $('progressImportMessage').className='progress-import-message hidden'; $('progressImportMessage').textContent=''; }
function payloadPreview(payload){
  const known=Object.keys(payload.states||{}).filter(id=>sets.some(s=>s.id===id));
  let checked=0,answered=0,flagged=0;
  known.forEach(id=>{
    const set=sets.find(s=>s.id===id), st=sanitizeImportedState(set,payload.states[id]);
    set.questions.forEach(q=>{ if(hasResponse(q,st)) answered++; if(st.checked[q.id]) checked++; if(st.explainMore[q.id]) flagged++; });
  });
  return {knownSets:known.length,checked,answered,flagged,exportedAt:payload.exportedAt||''};
}
function refreshImportPreview(){
  clearImportMessage(); pendingImportPayload=null;
  const value=$('progressCodeInput').value.trim();
  if(!value){ $('progressImportPreview').textContent='ยังไม่มีข้อมูลสำหรับ Import'; $('mergeProgressBtn').disabled=true; $('replaceProgressBtn').disabled=true; return; }
  try {
    const payload=parseProgressInput(value), p=payloadPreview(payload);
    pendingImportPayload=payload;
    const when=p.exportedAt?` · Export ${new Date(p.exportedAt).toLocaleString()}`:'';
    $('progressImportPreview').textContent=`พร้อม Import: ${p.knownSets} ชุด · ตอบแล้ว ${p.answered} · ตรวจแล้ว ${p.checked}${p.flagged?` · 🟡 ${p.flagged}`:''}${when}`;
    $('mergeProgressBtn').disabled=false; $('replaceProgressBtn').disabled=false;
  } catch(err){
    $('progressImportPreview').textContent='ข้อมูลยังใช้ Import ไม่ได้';
    $('mergeProgressBtn').disabled=true; $('replaceProgressBtn').disabled=true;
    setImportMessage(err.message,'error');
  }
}
function openProgressModal(){
  pendingImportPayload=null; $('progressCodeInput').value=''; $('progressFileInput').value=''; $('progressFileName').textContent='ยังไม่ได้เลือกไฟล์'; clearImportMessage();
  $('progressImportPreview').textContent='ยังไม่มีข้อมูลสำหรับ Import'; $('mergeProgressBtn').disabled=true; $('replaceProgressBtn').disabled=true;
  $('progressModal').classList.remove('hidden'); document.body.classList.add('modal-open'); setTimeout(()=>$('progressCodeInput').focus(),0);
}
function closeProgressModal(){ $('progressModal').classList.add('hidden'); document.body.classList.remove('modal-open'); pendingImportPayload=null; }
async function importProgressFile(file){
  if(!file) return;
  $('progressFileName').textContent=file.name;
  try { $('progressCodeInput').value=await file.text(); refreshImportPreview(); }
  catch(err){ setImportMessage(`อ่านไฟล์ไม่สำเร็จ: ${err.message}`,'error'); }
}
function applyProgressImport(mode){
  if(!pendingImportPayload) return;
  if(mode==='replace' && !confirm('Replace จะล้าง Local Mock progress ของเครื่องนี้ก่อน Import ต่อหรือไม่?')) return;
  try {
    const result=importPayload(pendingImportPayload,mode);
    closeProgressModal(); renderHome();
    const ignored=result.ignoredSets?` · ข้าม ${result.ignoredSets} ชุดที่ไม่รู้จัก`:'';
    alert(`${mode==='replace'?'Replace':'Merge'} สำเร็จ ${result.importedSets} ชุด${ignored}`);
  } catch(err){ setImportMessage(`Import ไม่สำเร็จ: ${err.message}`,'error'); }
}

function renderOverallProgress(){
  const total=sets.reduce((n,s)=>n+s.questionCount,0);
  const items=sets.map(effectiveSummary);
  const done=items.reduce((n,s)=>n+s.checked,0);
  const correct=items.reduce((n,s)=>n+s.correct,0);
  const pct=done?((correct/done)*100).toFixed(1):'0.0';
  const completion=total?Math.round(done/total*100):0;
  $('overallProgress').innerHTML=`
    <div class="overall-copy"><div class="eyebrow">OVERALL PROGRESS</div><h2>${done}/${total} ข้อ</h2><p>นับแบบ Unique Questions — การทำซ้ำชุดเดิมไม่บวกจำนวนข้อซ้ำ</p></div>
    <div class="overall-stats">
      <div class="overall-stat"><strong>${correct}</strong><span>ถูกทั้งหมด</span></div>
      <div class="overall-stat"><strong>${pct}%</strong><span>Accuracy รวม</span></div>
      <div class="overall-stat"><strong>${total-done}</strong><span>เหลือ</span></div>
    </div>
    <div class="overall-bar-wrap"><div class="overall-bar" style="width:${completion}%"></div></div>`;
}
function renderHome(){
  $('homeView').classList.remove('hidden'); $('quizView').classList.add('hidden'); $('summaryView').classList.add('hidden');
  renderOverallProgress();
  renderProgressToolStatus();
  $('setCards').innerHTML='';
  sets.forEach(set=>{
    const current=summary(set), e=effectiveSummary(set), historical=e.source==='history';
    const card=document.createElement('div'); card.className='set-card';
    const status=historical?`<span class="history-pill">ผลเดิม ${e.correct}/${set.questionCount}</span>`:'';
    card.innerHTML=`<div class="set-card-title"><h2>${escapeHtml(set.title)}</h2>${status}</div><div class="meta">${escapeHtml(set.subtitle)} · ${set.questionCount} ข้อ</div>
      <div class="set-stats"><div class="stat"><strong>${current.answered}</strong><span>Attempt นี้</span></div><div class="stat"><strong>${historical?e.correct:current.correct}</strong><span>${historical?'คะแนนเดิม':'ถูก'}</span></div><div class="stat"><strong>${current.checked}</strong><span>ตรวจแล้ว</span></div></div>
      <button class="primary">${current.answered ? 'ทำต่อ' : historical?'ทำใหม่':'เริ่มทำ'}</button>`;
    card.querySelector('button').onclick=()=>openSet(set.id);
    $('setCards').appendChild(card);
  });
}
function openSet(id){
  activeSet=sets.find(s=>s.id===id); if(!activeSet) return;
  activeSet._state=loadState(activeSet.id); currentIndex=Math.min(activeSet._state.currentIndex||0,activeSet.questions.length-1); vocabOpen=false;
  reviewWrongOnly=false; $('incorrectBtn').textContent='ดูข้อที่ผิด';
  $('homeView').classList.add('hidden'); $('summaryView').classList.add('hidden'); $('quizView').classList.remove('hidden');
  renderQuiz();
}
function renderVocabulary(q){
  const items=Array.isArray(q.vocab)?q.vocab:[];
  if(!items.length){ $('vocabBtn').classList.add('hidden'); $('vocabPanel').className='vocab-panel hidden'; $('vocabPanel').innerHTML=''; return; }
  $('vocabBtn').classList.remove('hidden');
  $('vocabBtn').textContent=`? Vocabulary (${items.length})`;
  $('vocabBtn').classList.toggle('active',vocabOpen);
  $('vocabPanel').className=`vocab-panel ${vocabOpen?'':'hidden'}`;
  $('vocabPanel').innerHTML=`<div class="vocab-title">ศัพท์ช่วยอ่านโจทย์</div><div class="vocab-grid">${items.map(x=>`<div class="vocab-item"><strong>${escapeHtml(x.term)}</strong><span>${escapeHtml(x.th)}</span></div>`).join('')}</div><div class="vocab-note">ชื่อ AWS service/feature จะไม่แปล เพื่อฝึกจำชื่อจริง</div>`;
}
function renderQuiz(){
  const st=state(), q=activeSet.questions[currentIndex], s=summary(activeSet);
  $('setTitle').textContent=`${activeSet.title} — ${activeSet.subtitle}`;
  $('setMeta').textContent=`${activeSet.questionCount} ข้อ · Progress ${s.answered}/${activeSet.questionCount} · ตัวเลือกสุ่มต่อ Attempt`;
  $('progressBar').style.width=`${Math.round(s.answered/activeSet.questionCount*100)}%`;
  $('domainBadge').textContent=`Domain ${q.domain}: ${q.domainName}`;
  $('questionCounter').textContent=`ข้อ ${q.id} / ${activeSet.questionCount}`;
  $('questionText').textContent=q.question;
  renderVocabulary(q);
  $('choices').innerHTML='';
  $('explainMoreCheck').checked=needsExplanation(q,st);
  $('reviewFlagLabel').classList.toggle('active',needsExplanation(q,st));

  const checked=!!st.checked[q.id];
  $('multiHint').classList.add('hidden');
  if(q.type==='multiple'){
    $('multiHint').textContent=`ข้อนี้เลือก ${q.answer.length} คำตอบ`;
    $('multiHint').classList.remove('hidden');
    renderChoiceQuestion(q,checked,true);
  } else if(q.type==='ordering'){
    $('multiHint').textContent='Ordering — เรียงรายการจากต้น → ปลาย แล้วกดตรวจคำตอบ';
    $('multiHint').classList.remove('hidden');
    renderOrdering(q,checked);
  } else if(q.type==='matching'){
    $('multiHint').textContent='Matching — จับคู่ให้ครบทุกแถว แล้วกดตรวจคำตอบ';
    $('multiHint').classList.remove('hidden');
    renderMatching(q,checked);
  } else {
    renderChoiceQuestion(q,checked,false);
  }

  const answer=currentAnswer(q,st);
  let canCheck=false;
  if(q.type==='multiple') canCheck=answer.length===q.answer.length;
  else if(q.type==='matching') canCheck=answer.length===Object.keys(q.choices).length;
  else if(q.type==='ordering') canCheck=answer.length===q.answer.length;
  else canCheck=answer.length===1;
  $('checkBtn').disabled=checked || !canCheck;
  $('checkBtn').textContent=checked?'ตรวจแล้ว':'ตรวจคำตอบ';

  if(checked){ renderFeedback(q,answer); }
  else $('feedback').className='feedback hidden';

  $('scoreText').textContent=`ตรวจแล้ว ${s.checked} · ถูก ${s.correct}`;
  const completed=s.checked===activeSet.questionCount;
  $('summaryBtn').classList.toggle('hidden',!completed);
  $('prevBtn').disabled=currentIndex===0;
  if(currentIndex===activeSet.questions.length-1){
    $('nextBtn').disabled=!completed;
    $('nextBtn').textContent=completed?'Summary →':'ข้อถัดไป →';
  } else {
    $('nextBtn').disabled=false;
    $('nextBtn').textContent='ข้อถัดไป →';
  }
  renderQuestionGrid(); saveState();
}
function renderChoiceQuestion(q,checked,isMultiple){
  const st=state(), order=choiceOrder(q), map=displayMap(q), selected=st.answers[q.id]||[];
  order.forEach((canonicalKey,index)=>{
    const text=q.choices[canonicalKey], displayKey='ABCDEFGHIJKLMNOPQRSTUVWXYZ'[index];
    const label=document.createElement('label'); label.className='choice';
    if(selected.includes(canonicalKey)) label.classList.add('selected');
    if(checked){
      if(q.answer.includes(canonicalKey)) label.classList.add('correct');
      else if(selected.includes(canonicalKey)) label.classList.add('wrong');
    }
    const inputType=isMultiple?'checkbox':'radio';
    label.innerHTML=`<input type="${inputType}" name="answer" value="${canonicalKey}" ${selected.includes(canonicalKey)?'checked':''} ${checked?'disabled':''}><span class="choice-key">${displayKey}</span><span>${escapeHtml(text)}</span>`;
    label.querySelector('input').onchange=e=>choose(canonicalKey,e.target.checked,isMultiple?'multiple':'single');
    $('choices').appendChild(label);
  });
}
function renderOrdering(q,checked){
  const order=orderDraft(q);
  const wrap=document.createElement('div'); wrap.className='order-list';
  order.forEach((key,index)=>{
    const row=document.createElement('div'); row.className='order-row';
    if(checked){
      const expected=q.answer[index];
      row.classList.add(key===expected?'correct':'wrong');
    }
    row.innerHTML=`<span class="order-num">${index+1}</span><span class="order-text">${escapeHtml(q.choices[key])}</span><div class="order-actions"><button type="button" class="mini" ${checked||index===0?'disabled':''}>↑</button><button type="button" class="mini" ${checked||index===order.length-1?'disabled':''}>↓</button></div>`;
    const btns=row.querySelectorAll('button');
    btns[0].onclick=()=>moveOrder(index,-1);
    btns[1].onclick=()=>moveOrder(index,1);
    wrap.appendChild(row);
  });
  $('choices').appendChild(wrap);
}
function moveOrder(index,delta){
  const q=activeSet.questions[currentIndex], st=state(); if(st.checked[q.id]) return;
  const order=[...orderDraft(q)], target=index+delta;
  if(target<0||target>=order.length) return;
  [order[index],order[target]]=[order[target],order[index]];
  st.orderDrafts[q.id]=order; st.orderTouched[q.id]=true; renderQuiz();
}
function renderMatching(q,checked){
  const st=state(), selectedPairs=st.answers[q.id]||[], selected={};
  selectedPairs.forEach(pair=>{ const [l,r]=pair.split(':'); if(l&&r) selected[l]=r; });
  const optionOrder=matchOrder(q);
  const wrap=document.createElement('div'); wrap.className='match-list';
  Object.keys(q.choices).forEach((leftKey,index)=>{
    const row=document.createElement('div'); row.className='match-row';
    if(checked){
      const expected=(q.answer.find(x=>x.startsWith(`${leftKey}:`))||'').split(':')[1];
      row.classList.add(selected[leftKey]===expected?'correct':'wrong');
    }
    const left=document.createElement('div'); left.className='match-left'; left.innerHTML=`<span class="match-key">${leftKey}</span><span>${escapeHtml(q.choices[leftKey])}</span>`;
    const select=document.createElement('select'); select.className='match-select'; select.disabled=checked;
    select.innerHTML='<option value="">เลือกคู่ที่ตรงกัน…</option>'+optionOrder.map(k=>`<option value="${k}" ${selected[leftKey]===k?'selected':''}>${escapeHtml(q.matches[k])}</option>`).join('');
    select.onchange=e=>chooseMatch(leftKey,e.target.value);
    row.appendChild(left); row.appendChild(select); wrap.appendChild(row);
  });
  $('choices').appendChild(wrap);
}
function chooseMatch(leftKey,rightKey){
  const q=activeSet.questions[currentIndex], st=state(); if(st.checked[q.id]) return;
  const map={}; (st.answers[q.id]||[]).forEach(pair=>{const [l,r]=pair.split(':'); if(l&&r) map[l]=r;});
  if(rightKey){
    Object.keys(map).forEach(k=>{ if(k!==leftKey && map[k]===rightKey) delete map[k]; });
    map[leftKey]=rightKey;
  } else delete map[leftKey];
  st.answers[q.id]=Object.keys(map).map(k=>`${k}:${map[k]}`); renderQuiz();
}
function choose(key,isChecked,type){
  const q=activeSet.questions[currentIndex], st=state();
  if(st.checked[q.id]) return;
  if(type==='single') st.answers[q.id]=[key];
  else {
    const arr=new Set(st.answers[q.id]||[]); isChecked?arr.add(key):arr.delete(key); st.answers[q.id]=[...arr];
  }
  renderQuiz();
}
function checkCurrent(){
  const q=activeSet.questions[currentIndex], st=state(), answer=currentAnswer(q,st);
  if(q.type==='multiple' && answer.length!==q.answer.length) return;
  if(q.type==='matching' && answer.length!==Object.keys(q.choices).length) return;
  if(q.type==='ordering'){
    if(answer.length!==q.answer.length) return;
    st.answers[q.id]=[...answer]; st.orderTouched[q.id]=true;
  }
  if(q.type==='single' && answer.length!==1) return;
  st.checked[q.id]=true; renderQuiz();
}
function renderFeedback(q,answer){
  const ok=isCorrect(q,answer);
  $('feedback').className=`feedback ${ok?'good':'bad'}`;
  let answerHtml='';
  if(q.type==='ordering'){
    answerHtml='<ol class="answer-seq">'+q.answer.map(k=>`<li>${escapeHtml(q.choices[k])}</li>`).join('')+'</ol>';
  } else if(q.type==='matching'){
    answerHtml='<div class="answer-match">'+q.answer.map(pair=>{const [l,r]=pair.split(':');return `<div><strong>${l}. ${escapeHtml(q.choices[l])}</strong> → ${escapeHtml(q.matches[r])}</div>`;}).join('')+'</div>';
  } else {
    const map=displayMap(q);
    const displayed=q.answer.map(k=>map[k]).sort(); answerHtml=escapeHtml(displayed.join(', '));
  }
  const label=(q.type==='ordering'||q.type==='matching')?'คำตอบที่ถูก':'คำตอบ';
  $('feedback').innerHTML=`<strong>${ok?'✅ ถูกต้อง':'❌ ยังไม่ถูก'} — ${label}: ${q.type==='single'||q.type==='multiple'?answerHtml:''}</strong>${q.type==='ordering'||q.type==='matching'?answerHtml:''}<div class="explanation">${escapeHtml(explanationWithChoices(q,q.explanation))}</div>`;
}
function renderQuestionGrid(){
  const st=state(); $('questionGrid').innerHTML='';
  activeSet.questions.forEach((q,idx)=>{
    const b=document.createElement('button'); b.className='qnav'; b.textContent=q.id;
    if(idx===currentIndex) b.classList.add('current');
    if(hasResponse(q,st)) b.classList.add('answered');
    if(st.checked[q.id]) b.classList.add(isCorrect(q,currentAnswer(q,st))?'correct':'wrong');
    if(needsExplanation(q,st)) b.classList.add('needs-explain');
    if(reviewWrongOnly && !(st.checked[q.id] && !isCorrect(q,currentAnswer(q,st)))) b.classList.add('hidden');
    b.onclick=()=>{currentIndex=idx;vocabOpen=false;renderQuiz()}; $('questionGrid').appendChild(b);
  });
}
function go(delta){
  if(!reviewWrongOnly){ currentIndex=Math.max(0,Math.min(activeSet.questions.length-1,currentIndex+delta)); vocabOpen=false; renderQuiz(); return; }
  const st=state(), indices=activeSet.questions.map((q,i)=>({q,i})).filter(x=>st.checked[x.q.id]&&!isCorrect(x.q,currentAnswer(x.q,st))).map(x=>x.i);
  const pos=indices.indexOf(currentIndex), next=indices[pos+delta]; if(next!==undefined){currentIndex=next;vocabOpen=false;renderQuiz();}
}
function toggleWrongReview(){
  const st=state(), wrong=activeSet.questions.map((q,i)=>({q,i})).filter(x=>st.checked[x.q.id]&&!isCorrect(x.q,currentAnswer(x.q,st)));
  if(!wrong.length){ alert('ยังไม่มีข้อที่ตรวจแล้วและตอบผิด'); return; }
  reviewWrongOnly=!reviewWrongOnly; $('incorrectBtn').textContent=reviewWrongOnly?'ดูทุกข้อ':'ดูข้อที่ผิด';
  if(reviewWrongOnly && !wrong.some(x=>x.i===currentIndex)) currentIndex=wrong[0].i;
  renderQuiz();
}
function answerDisplayHtml(q,answer){
  const a=answer||[];
  if(q.type==='ordering'){
    return `<ol class="summary-answer-list">${a.map(k=>`<li>${escapeHtml(q.choices[k]||k)}</li>`).join('')}</ol>`;
  }
  if(q.type==='matching'){
    const pairs={}; a.forEach(pair=>{const [l,r]=String(pair).split(':'); if(l&&r) pairs[l]=r;});
    return `<div class="summary-match-list">${Object.keys(q.choices).map(l=>{
      const r=pairs[l];
      return `<div><strong>${escapeHtml(l)}. ${escapeHtml(q.choices[l])}</strong> → ${r?escapeHtml(q.matches[r]||r):'—'}</div>`;
    }).join('')}</div>`;
  }
  const map=displayMap(q);
  if(!a.length) return '<span class="muted">ไม่ได้ตอบ</span>';
  return a.map(k=>`<span class="answer-pill">${escapeHtml(map[k]||k)} · ${escapeHtml(q.choices[k]||'')}</span>`).join(' ');
}
function answerDisplayText(q,answer){
  const a=answer||[];
  if(q.type==='ordering') return a.length?a.map((k,i)=>`${i+1}. ${q.choices[k]||k}`).join(' > '):'ไม่ได้ตอบ';
  if(q.type==='matching'){
    const pairs={}; a.forEach(pair=>{const [l,r]=String(pair).split(':'); if(l&&r) pairs[l]=r;});
    return Object.keys(q.choices).map(l=>{const r=pairs[l]; return `${l}. ${q.choices[l]} → ${r?`${q.matches[r]||r}`:'—'}`;}).join(' | ');
  }
  const map=displayMap(q);
  if(!a.length) return 'ไม่ได้ตอบ';
  return a.map(k=>`${map[k]||k}. ${q.choices[k]||''}`).join(', ');
}
function allChoicesDisplayHtml(q,userAnswer){
  const selected=new Set(userAnswer||[]);
  if(q.type==='ordering'){
    return `<ol class="summary-choice-list">${Object.keys(q.choices).map(k=>`<li>${escapeHtml(q.choices[k]||k)}</li>`).join('')}</ol>`;
  }
  if(q.type==='matching'){
    return `<div class="summary-choice-columns"><div><strong>ฝั่งซ้าย</strong>${Object.keys(q.choices).map(k=>`<div class="summary-choice-row"><span class="choice-key">${escapeHtml(k)}</span><span>${escapeHtml(q.choices[k])}</span></div>`).join('')}</div><div><strong>ฝั่งขวา</strong>${Object.keys(q.matches||{}).map(k=>`<div class="summary-choice-row"><span class="choice-key">•</span><span>${escapeHtml(q.matches[k])}</span></div>`).join('')}</div></div>`;
  }
  const order=choiceOrder(q), correct=new Set(q.answer||[]);
  return `<div class="summary-choice-list">${order.map((k,i)=>{
    const display='ABCDEFGHIJKLMNOPQRSTUVWXYZ'[i], isSelected=selected.has(k), isCorrect=correct.has(k);
    const tags=`${isSelected?'<span class="choice-state selected-state">เลือก</span>':''}${isCorrect?'<span class="choice-state correct-state">ถูก</span>':''}`;
    return `<div class="summary-choice-row ${isSelected?'choice-selected':''} ${isCorrect?'choice-correct':''}"><span class="choice-key">${display}</span><span class="choice-text">${escapeHtml(q.choices[k]||'')}</span><span class="choice-states">${tags}</span></div>`;
  }).join('')}</div>`;
}
function allChoicesDisplayText(q,userAnswer){
  const selected=new Set(userAnswer||[]);
  if(q.type==='ordering') return ['Items:',...Object.keys(q.choices).map((k,i)=>`${i+1}. ${q.choices[k]||k}`)];
  if(q.type==='matching'){
    return ['Choices (Left):',...Object.keys(q.choices).map(k=>`${k}. ${q.choices[k]}`),'Choices (Right):',...Object.keys(q.matches||{}).map(k=>`- ${q.matches[k]}`)];
  }
  const correct=new Set(q.answer||[]);
  return ['Choices:',...choiceOrder(q).map((k,i)=>{
    const marks=[]; if(selected.has(k)) marks.push('SELECTED'); if(correct.has(k)) marks.push('CORRECT');
    return `${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[i]}. ${q.choices[k]||''}${marks.length?` [${marks.join(', ')}]`:''}`;
  })];
}
function renderSummaryList(){
  const st=state();
  const items=activeSet.questions.map((q,i)=>({q,i,ok:isCorrect(q,currentAnswer(q,st)),flag:needsExplanation(q,st)}));
  const shown=summaryFilter==='wrong'?items.filter(x=>!x.ok):summaryFilter==='explain'?items.filter(x=>x.flag):items;
  $('summaryAllBtn').classList.toggle('active',summaryFilter==='all');
  $('summaryWrongBtn').classList.toggle('active',summaryFilter==='wrong');
  $('summaryExplainBtn').classList.toggle('active',summaryFilter==='explain');
  $('summarySectionTitle').textContent=summaryFilter==='all'?'รายละเอียดทุกข้อ':summaryFilter==='wrong'?'ข้อที่ตอบผิด':'ข้อที่ขอให้อธิบายเพิ่ม';
  $('summarySectionMeta').textContent=summaryFilter==='all'
    ?`แสดง Q1–Q${activeSet.questionCount} พร้อมช้อยส์ทุกตัว สถานะ คำตอบ และคำอธิบาย`
    :summaryFilter==='wrong'?`แสดงเฉพาะ ${shown.length} ข้อที่ผิด เรียงตามเลขข้อ`:`แสดง ${shown.length} ข้อที่ติ๊กว่ายังไม่มั่นใจ/อยากให้อธิบายเพิ่ม`;
  const list=$('summaryList'); list.innerHTML='';
  if(!shown.length){
    list.innerHTML=summaryFilter==='wrong'
      ?'<div class="summary-perfect">🎉 ถูกครบทุกข้อ — ไม่มีข้อผิดให้ทบทวน</div>'
      :summaryFilter==='explain'?'<div class="summary-perfect">ไม่มีข้อที่ติ๊กขอให้อธิบายเพิ่ม</div>':'<div class="summary-perfect">ไม่มีข้อมูลให้แสดง</div>';
    return;
  }
  shown.forEach(({q,i,ok,flag})=>{
    const userAnswer=currentAnswer(q,st);
    const card=document.createElement('article');
    card.className=`wrong-summary-card ${ok?'correct-summary-card':'incorrect-summary-card'}`;
    card.innerHTML=`
      <div class="wrong-card-head">
        <div class="summary-card-tags"><span class="status-pill ${ok?'status-correct':'status-wrong'}">${ok?'✅ ถูก':'❌ ผิด'}</span>${flag?'<span class="status-pill status-explain">🟡 ขออธิบายเพิ่ม</span>':''}<span class="badge">Domain ${q.domain}: ${escapeHtml(q.domainName)}</span></div>
        <span class="wrong-qnum ${ok?'correct-qnum':''}">ข้อ ${q.id}</span>
      </div>
      <h3>${escapeHtml(q.question)}</h3>
      ${q.questionTh?`<div class="summary-translation"><div class="summary-label">🇹🇭 คำแปลโจทย์</div>${escapeHtml(q.questionTh)}</div>`:''}
      ${Array.isArray(q.vocab)&&q.vocab.length?`<div class="summary-vocab"><div class="summary-label">? Vocabulary</div>${q.vocab.map(x=>`<span class="vocab-chip"><strong>${escapeHtml(x.term)}</strong> = ${escapeHtml(x.th)}</span>`).join('')}</div>`:''}
      <div class="summary-all-choices"><div class="summary-label">ช้อยส์ทั้งหมด</div>${allChoicesDisplayHtml(q,userAnswer)}</div>
      <div class="summary-answer-block ${ok?'user-answer-correct':'user-answer'}"><div class="summary-label">${ok?'✅':'❌'} คำตอบที่เลือก</div>${answerDisplayHtml(q,userAnswer)}</div>
      <div class="summary-answer-block correct-answer"><div class="summary-label">✅ คำตอบที่ถูก</div>${answerDisplayHtml(q,q.answer)}</div>
      <div class="summary-explanation"><div class="summary-label">คำอธิบาย</div>${escapeHtml(explanationWithChoices(q,q.explanation))}</div>
      <button type="button" class="ghost review-one-btn">กลับไปดูข้อนี้ →</button>`;
    card.querySelector('.review-one-btn').onclick=()=>{ currentIndex=i; vocabOpen=false; reviewWrongOnly=false; $('incorrectBtn').textContent='ดูข้อที่ผิด'; $('summaryView').classList.add('hidden'); $('quizView').classList.remove('hidden'); renderQuiz(); };
    list.appendChild(card);
  });
}
function buildReviewText(){
  const st=state(), s=summary(activeSet), pct=Math.round((s.correct/activeSet.questionCount)*100);
  const flagged=activeSet.questions.filter(q=>needsExplanation(q,st)).length;
  const lines=[
    `CLF-C02 Local Mock Review`,
    `${activeSet.title} — ${activeSet.subtitle}`,
    `Score: ${s.correct}/${activeSet.questionCount} (${pct}%)`,
    `Marked for explanation: ${flagged}`,
    ''
  ];
  activeSet.questions.forEach(q=>{
    const user=currentAnswer(q,st), ok=isCorrect(q,user), flag=needsExplanation(q,st);
    lines.push(`Q${q.id} ${ok?'✅ CORRECT':'❌ WRONG'}${flag?' | 🟡 EXPLAIN MORE':''} | Domain ${q.domain}: ${q.domainName}`);
    lines.push(`Question: ${q.question}`);
    if(q.questionTh) lines.push(`คำแปลโจทย์: ${q.questionTh}`);
    if(Array.isArray(q.vocab) && q.vocab.length) lines.push(`Vocabulary: ${q.vocab.map(x=>`${x.term} = ${x.th}`).join(' | ')}`);
    allChoicesDisplayText(q,user).forEach(line=>lines.push(line));
    lines.push(`Selected: ${answerDisplayText(q,user)}`);
    lines.push(`Correct: ${answerDisplayText(q,q.answer)}`);
    lines.push(`Explanation (TH): ${explanationWithChoices(q,q.explanation)}`);
    if(flag) lines.push(`Review: ยังไม่มั่นใจ / ขอให้อธิบายเพิ่มเติม`);
    lines.push('');
  });
  return lines.join('\n');
}
async function copySummaryForReview(){
  if(!activeSet) return;
  const text=buildReviewText();
  let copied=false;
  try { if(navigator.clipboard && window.isSecureContext){ await navigator.clipboard.writeText(text); copied=true; } } catch {}
  if(!copied){
    const ta=document.createElement('textarea'); ta.value=text; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.focus(); ta.select();
    try { copied=document.execCommand('copy'); } catch {} ta.remove();
  }
  const btn=$('copySummaryBtn'), old=btn.textContent;
  btn.textContent=copied?'✅ คัดลอกแล้ว':'คัดลอกไม่สำเร็จ';
  setTimeout(()=>btn.textContent=old,1800);
}
function openSummary(){
  if(!activeSet) return;
  const s=summary(activeSet);
  if(s.checked!==activeSet.questionCount){ alert(`ต้องตรวจให้ครบ ${activeSet.questionCount} ข้อก่อนเปิด Summary`); return; }
  saveState();
  const st=state();
  const wrong=activeSet.questions.filter(q=>!isCorrect(q,currentAnswer(q,st)));
  $('homeView').classList.add('hidden'); $('quizView').classList.add('hidden'); $('summaryView').classList.remove('hidden');
  $('summaryTitle').textContent=`${activeSet.title} — Summary`;
  $('summaryMeta').textContent=`${activeSet.subtitle} · ${activeSet.questionCount} ข้อ`;
  const pct=Math.round((s.correct/activeSet.questionCount)*100);
  const flagged=activeSet.questions.filter(q=>needsExplanation(q,st)).length;
  $('summaryStats').innerHTML=`
    <div class="summary-stat"><strong>${s.correct}/${activeSet.questionCount}</strong><span>ตอบถูก</span></div>
    <div class="summary-stat"><strong>${pct}%</strong><span>Accuracy</span></div>
    <div class="summary-stat wrong-stat"><strong>${wrong.length}</strong><span>ข้อที่ผิด</span></div>
    <div class="summary-stat explain-stat"><strong>${flagged}</strong><span>ขออธิบายเพิ่ม</span></div>`;
  summaryFilter='all';
  renderSummaryList();
  window.scrollTo({top:0,behavior:'smooth'});
}
function nextAction(){
  if(!activeSet) return;
  const s=summary(activeSet);
  if(currentIndex===activeSet.questions.length-1 && s.checked===activeSet.questionCount){ openSummary(); return; }
  go(1);
}
function backToQuiz(){
  $('summaryView').classList.add('hidden'); $('quizView').classList.remove('hidden'); renderQuiz();
}
function resetSet(){
  if(!confirm(`ล้างคำตอบ คะแนน และสุ่มตัวเลือกใหม่ของ ${activeSet.title}?`)) return;
  localStorage.removeItem(storageKey(activeSet.id)); activeSet._state=blankState(); currentIndex=0; vocabOpen=false; reviewWrongOnly=false; $('incorrectBtn').textContent='ดูข้อที่ผิด'; $('summaryView').classList.add('hidden'); $('quizView').classList.remove('hidden'); renderQuiz();
}
function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }
$('homeBtn').onclick=renderHome;
$('checkBtn').onclick=checkCurrent;
$('prevBtn').onclick=()=>go(-1);
$('nextBtn').onclick=nextAction;
$('resetBtn').onclick=resetSet;
$('incorrectBtn').onclick=toggleWrongReview;
$('summaryBtn').onclick=openSummary;
$('summaryAllBtn').onclick=()=>{summaryFilter='all';renderSummaryList();};
$('summaryWrongBtn').onclick=()=>{summaryFilter='wrong';renderSummaryList();};
$('summaryExplainBtn').onclick=()=>{summaryFilter='explain';renderSummaryList();};
$('copySummaryBtn').onclick=copySummaryForReview;
$('vocabBtn').onclick=()=>{vocabOpen=!vocabOpen;renderVocabulary(activeSet.questions[currentIndex]);};
$('explainMoreCheck').onchange=e=>setNeedsExplanation(e.target.checked);
$('backToQuizBtn').onclick=backToQuiz;
$('copyProgressBtn').onclick=copyProgressCode;
$('exportProgressBtn').onclick=exportProgressJson;
$('importProgressBtn').onclick=openProgressModal;
$('closeProgressModalBtn').onclick=closeProgressModal;
$('progressCodeInput').oninput=refreshImportPreview;
$('progressFileInput').onchange=e=>importProgressFile(e.target.files&&e.target.files[0]);
$('mergeProgressBtn').onclick=()=>applyProgressImport('merge');
$('replaceProgressBtn').onclick=()=>applyProgressImport('replace');
$('progressModal').onclick=e=>{ if(e.target===$('progressModal')) closeProgressModal(); };
document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&!$('progressModal').classList.contains('hidden')) closeProgressModal(); });
renderHome();
