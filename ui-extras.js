(function uiBootstrap(){
  const $ = id => document.getElementById(id);
  const quizSets = window.QUIZ_SETS || [];
  const STORAGE_PREFIX = 'clf-c02-local-mock:v1:';

  function readState(set){
    try { return JSON.parse(localStorage.getItem(STORAGE_PREFIX + set.id) || '{}'); }
    catch { return {}; }
  }
  function answerFor(q,st){
    if(q.type==='single'||q.type==='multiple') return Array.isArray(st.answers?.[q.id]) ? st.answers[q.id] : [];
    return [];
  }
  function equalAnswer(a,b){ return [...a].sort().join('|') === [...b].sort().join('|'); }
  function aggregate(){
    const domainNames={1:'Cloud Concepts',2:'Security and Compliance',3:'Cloud Technology and Services',4:'Billing, Pricing, and Support'};
    const domains={}; let checked=0,correct=0,flagged=0;
    quizSets.forEach(set=>{
      const st=readState(set);
      set.questions.forEach(q=>{
        domains[q.domain] ||= {name:domainNames[q.domain],total:0,checked:0,correct:0};
        domains[q.domain].total++;
        if(st.checked?.[q.id]){
          checked++; domains[q.domain].checked++;
          if(equalAnswer(answerFor(q,st),q.answer)){ correct++; domains[q.domain].correct++; }
        }
        if(st.explainMore?.[q.id]) flagged++;
      });
    });
    return {checked,correct,flagged,domains,total:quizSets.reduce((n,s)=>n+s.questionCount,0)};
  }
  function showOnly(id){
    ['homeView','quizView','summaryView','dashboardView','infoLibraryView'].forEach(x=>$(x)?.classList.add('hidden'));
    $(id)?.classList.remove('hidden');
  }
  function renderDashboard(){
    const a=aggregate(); showOnly('dashboardView');
    $('dashboardOverview').innerHTML=
      '<div class="dashboard-stat-card"><span>ตรวจแล้ว</span><strong>'+a.checked+'/'+a.total+'</strong></div>'+
      '<div class="dashboard-stat-card"><span>ตอบถูก</span><strong>'+a.correct+'</strong></div>'+
      '<div class="dashboard-stat-card"><span>Accuracy</span><strong>'+(a.checked?Math.round(a.correct/a.checked*100):0)+'%</strong></div>'+
      '<div class="dashboard-stat-card"><span>🟡 Explain more</span><strong>'+a.flagged+'</strong></div>';
    $('dashboardSets').innerHTML=quizSets.map(set=>{
      const st=readState(set); let c=0,k=0;
      set.questions.forEach(q=>{ if(st.checked?.[q.id]){ c++; if(equalAnswer(answerFor(q,st),q.answer)) k++; } });
      return '<div class="dashboard-list-row"><strong>'+set.title+'</strong><span>'+k+'/'+c+' correct · '+c+'/'+set.questionCount+' checked</span></div>';
    }).join('');
    $('dashboardDomains').innerHTML=Object.entries(a.domains).map(([d,x])=>
      '<div class="dashboard-list-row"><strong>D'+d+' · '+x.name+'</strong><span>'+x.correct+'/'+x.checked+' correct · '+x.checked+'/'+x.total+' checked</span></div>'
    ).join('');
    $('dashboardStrengths').innerHTML='<section class="dashboard-panel"><h3>Blueprint coverage</h3><p class="muted">Set 1 ครบ 19 Task Statements และใช้ distribution 16 / 19 / 22 / 8 ตาม Local Mock blueprint.</p></section>';
    $('dashboardReviewInsights').innerHTML='<p class="muted">หลังทำข้อสอบ ให้ใช้ Summary → เฉพาะข้อผิด / ขออธิบายเพิ่ม แล้วคัดลอกผลมารีวิวตาม docs/RULES.md</p>';
    $('dashboardCoverage').innerHTML='<div class="dashboard-list-row"><strong>Current bank</strong><span>1 set · 65 unique questions</span></div>';
    $('dashboardReviewQueue').innerHTML='<p class="muted">Review Queue มาจากข้อผิดและ 🟡 ที่บันทึกใน browser นี้ · Flag ตอนนี้ '+a.flagged+' ข้อ</p>';
  }

  const topicHtml =
    '<div class="family-guide-grid">'+
    '<article class="family-guide-card"><h3>Domain 1 · Cloud Concepts — 24%</h3><p>Cloud value, Well-Architected Framework, migration/CAF, cloud economics.</p><p class="muted">Tasks 1.1–1.4 · Set 1: 16 questions</p></article>'+
    '<article class="family-guide-card"><h3>Domain 2 · Security and Compliance — 30%</h3><p>Shared responsibility, governance/compliance, IAM, security services/resources.</p><p class="muted">Tasks 2.1–2.4 · Set 1: 19 questions</p></article>'+
    '<article class="family-guide-card"><h3>Domain 3 · Cloud Technology and Services — 34%</h3><p>Deployment, global infrastructure, compute, database, network, storage, AI/ML, analytics, integration.</p><p class="muted">Tasks 3.1–3.8 · Set 1: 22 questions</p></article>'+
    '<article class="family-guide-card"><h3>Domain 4 · Billing, Pricing, and Support — 12%</h3><p>Pricing models, cost tools, billing, Support and technical resources.</p><p class="muted">Tasks 4.1–4.3 · Set 1: 8 questions</p></article>'+
    '</div>';

  const sourceHtml =
    '<div class="family-guide-grid">'+
    '<article class="family-guide-card"><h3>Primary</h3><p>AWS Certified Cloud Practitioner (CLF-C02) Official Exam Guide</p><p class="muted">กำหนด Domain, Task Statements, weights, exam types และ scope.</p></article>'+
    '<article class="family-guide-card"><h3>Official supporting material</h3><p>AWS documentation / AWS Skill Builder / Official Practice Question Set</p><p class="muted">ใช้ตรวจ service behavior และเนื้อหา foundational.</p></article>'+
    '<article class="family-guide-card"><h3>User Learning Hub</h3><p>aws-learning-hub-theta.vercel.app · CLF-C02 lessons</p><p class="muted">ใช้เป็น lesson/content reference; หากขัดกับ official ปัจจุบันให้ official มาก่อน.</p></article>'+
    '<article class="family-guide-card"><h3>Mock design</h3><p>65 questions · Multiple choice + Multiple response only</p><p class="muted">No Matching / Ordering จนกว่า official CLF-C02 guide จะรองรับ.</p></article>'+
    '</div>';

  function showInfo(){
    showOnly('infoLibraryView');
    $('dashboardFamilyGuide').innerHTML=topicHtml;
    $('infoTopicPanel').classList.remove('hidden');
    $('infoInfographicPanel').classList.add('hidden');
    $('infoTopicTabBtn').classList.add('active');
    $('infoInfographicTabBtn').classList.remove('active');
  }
  function showSources(){
    $('infographicGallery').innerHTML=sourceHtml;
    $('infoTopicPanel').classList.add('hidden');
    $('infoInfographicPanel').classList.remove('hidden');
    $('infoTopicTabBtn').classList.remove('active');
    $('infoInfographicTabBtn').classList.add('active');
  }
  function backHome(){
    $('dashboardView')?.classList.add('hidden'); $('infoLibraryView')?.classList.add('hidden');
    if(typeof renderHome==='function') renderHome();
  }
  $('dashboardBtn').onclick=renderDashboard;
  $('infoLibraryBtn').onclick=showInfo;
  $('infoLibraryHomeBtn').onclick=backHome;
  $('homeBtn').onclick=backHome;
  $('infoTopicTabBtn').onclick=showInfo;
  $('infoInfographicTabBtn').onclick=showSources;
})();