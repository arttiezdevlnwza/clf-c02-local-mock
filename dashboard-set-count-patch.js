(() => {
  const STORAGE_PREFIX='clf-c02-local-mock:v1:';
  const sets=window.QUIZ_SETS||[];

  function load(setId){
    try{return JSON.parse(localStorage.getItem(STORAGE_PREFIX+setId)||'{}');}
    catch{return {};}
  }

  function counts(){
    let english=0,clue=0,concept=0,notes=0;
    sets.forEach(set=>{
      const st=load(set.id);
      english+=Object.values(st.englishUnclear||{}).filter(Boolean).length;
      clue+=Object.values(st.clueGap||{}).filter(Boolean).length;
      concept+=Object.values(st.conceptGap||{}).filter(Boolean).length;
      notes+=Object.values(st.englishNotes||{}).reduce((n,v)=>n+(Array.isArray(v)?v.length:0),0);
    });
    return {english,clue,concept,notes};
  }

  function renderLiveReviewFlags(){
    const root=document.getElementById('dashboardReviewInsights');
    if(!root) return;
    const c=counts();
    let live=document.getElementById('dashboardLiveFlags');
    if(!live){
      live=document.createElement('div');
      live.id='dashboardLiveFlags';
      live.className='reviewed-gap-grid';
      root.insertAdjacentElement('afterbegin',live);
    }
    live.innerHTML=
      '<section class="reviewed-gap-column confidence-column"><div class="reviewed-gap-head"><div><strong>🟡 Explain more</strong><span>ยังไม่มั่นใจ / อยากทวน</span></div><b>'+countField('explainMore')+'</b></div></section>'+
      '<section class="reviewed-gap-column language-column"><div class="reviewed-gap-head"><div><strong>📘 Language</strong><span>ภาษาอังกฤษทำให้ตีความไม่ออก</span></div><b>'+c.english+'</b></div></section>'+
      '<section class="reviewed-gap-column clue-column"><div class="reviewed-gap-head"><div><strong>🧩 Clue / Distractor</strong><span>รู้ concept แต่แยกตัวเลือกไม่ออก</span></div><b>'+c.clue+'</b></div></section>'+
      '<section class="reviewed-gap-column concept-column"><div class="reviewed-gap-head"><div><strong>🧠 Concept / Recall</strong><span>จำ concept / service ไม่ได้</span></div><b>'+c.concept+'</b></div></section>';
  }

  function countField(field){
    return sets.reduce((sum,set)=>sum+Object.values(load(set.id)[field]||{}).filter(Boolean).length,0);
  }

  const old=window.renderStudyDashboard;
  if(typeof old==='function'){
    window.renderStudyDashboard=function(){
      old();
      renderLiveReviewFlags();
    };
  }
  document.getElementById('dashboardBtn')?.addEventListener('click',()=>setTimeout(renderLiveReviewFlags,0));

  const topText=document.querySelector('.topbar p');
  if(topText){
    const total=sets.reduce((n,s)=>n+(s.questionCount||s.questions?.length||0),0);
    topText.textContent=sets.length+' ชุด · '+total+' ข้อ · Pre-study Diagnostic + Local Mock · English exam-style พร้อมคำแปลไทยตอน Summary';
  }
})();