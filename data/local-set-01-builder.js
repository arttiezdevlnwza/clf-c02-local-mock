(() => {
  const bank = window.LOCAL_SET_01_BANK || [];
  const expectedDomains = {1:16,2:19,3:22,4:8};
  const expectedTypes = {single:54,multiple:11};
  const requiredTasks = ['1.1','1.2','1.3','1.4','2.1','2.2','2.3','2.4','3.1','3.2','3.3','3.4','3.5','3.6','3.7','3.8','4.1','4.2','4.3'];
  const domainNames = {
    1:'Cloud Concepts',
    2:'Security and Compliance',
    3:'Cloud Technology and Services',
    4:'Billing, Pricing, and Support'
  };
  const clone = obj => JSON.parse(JSON.stringify(obj));
  const questions = bank.map((item,index)=>({
    id:index+1,
    domain:item.domain,
    domainName:domainNames[item.domain],
    question:item.question,
    questionTh:item.questionTh,
    choices:clone(item.choices),
    answer:clone(item.answer),
    explanation:(item.exp||[]).join('\n'),
    type:item.type,
    vocab:clone(item.vocab||[]),
    task:item.task,
    _target:item.target
  }));

  const problems=[], domains={}, types={}, tasks={}, stems=new Set(), targets=new Set(), ids=new Set();
  if(questions.length!==65) problems.push(`expected 65 questions, got ${questions.length}`);
  questions.forEach(q=>{
    if(ids.has(q.id)) problems.push(`duplicate id ${q.id}`); ids.add(q.id);
    domains[q.domain]=(domains[q.domain]||0)+1;
    types[q.type]=(types[q.type]||0)+1;
    tasks[q.task]=(tasks[q.task]||0)+1;
    const stem=q.question.trim().toLowerCase();
    if(stems.has(stem)) problems.push(`duplicate stem Q${q.id}`); stems.add(stem);
    if(targets.has(q._target)) problems.push(`duplicate target ${q._target}`); targets.add(q._target);
    if(!q.questionTh||q.questionTh.length<20) problems.push(`Q${q.id} missing Thai translation`);
    if(!q.explanation.includes('✅')) problems.push(`Q${q.id} missing correct explanation`);
    if(!q.explanation.includes('❌')) problems.push(`Q${q.id} missing distractor explanation`);
    if(q.type==='single'){
      if(Object.keys(q.choices).length!==4) problems.push(`Q${q.id} single must have 4 choices`);
      if(q.answer.length!==1) problems.push(`Q${q.id} single must have 1 answer`);
    } else if(q.type==='multiple'){
      if(Object.keys(q.choices).length<5) problems.push(`Q${q.id} multiple must have at least 5 choices`);
      if(q.answer.length<2) problems.push(`Q${q.id} multiple must have at least 2 answers`);
      if(!/Select (TWO|THREE|FOUR)/i.test(q.question)) problems.push(`Q${q.id} multiple missing explicit selection count`);
      const match=q.question.match(/Select (TWO|THREE|FOUR)/i);
      const n=match ? ({TWO:2,THREE:3,FOUR:4}[match[1].toUpperCase()]) : null;
      if(n!==null && q.answer.length!==n) problems.push(`Q${q.id} displayed selection count does not match answers`);
    } else problems.push(`Q${q.id} unsupported type ${q.type}`);
    q.answer.forEach(a=>{ if(!Object.prototype.hasOwnProperty.call(q.choices,a)) problems.push(`Q${q.id} invalid answer ${a}`); });
  });
  Object.entries(expectedDomains).forEach(([d,n])=>{ if((domains[d]||0)!==n) problems.push(`Domain ${d}: expected ${n}, got ${domains[d]||0}`); });
  Object.entries(expectedTypes).forEach(([t,n])=>{ if((types[t]||0)!==n) problems.push(`Type ${t}: expected ${n}, got ${types[t]||0}`); });
  requiredTasks.forEach(t=>{ if(!tasks[t]) problems.push(`Missing task ${t}`); });

  const set={
    id:'local-set-01',
    title:'Local Mock Set 1',
    subtitle:'65 Questions · CLF-C02 Blueprint Mix · Exam-Style + Close Distractors',
    questionCount:65,
    questions,
    _blueprint:{
      domains,types,tasks,qualityProblems:problems,
      sourceNote:[
        'AWS Certified Cloud Practitioner (CLF-C02) Official Exam Guide — current blueprint and scope.',
        'AWS official documentation / Skill Builder concepts.',
        'User AWS Learning Hub CLF-C02 notes are a supporting lesson reference; official AWS sources take precedence if there is a conflict.'
      ],
      design:'Concise foundational recognition + short application. No Matching/Ordering because the current CLF-C02 Exam Guide lists only multiple choice and multiple response.'
    }
  };

  window.LOCAL_SET_01_VALIDATION={ok:problems.length===0,problems};
  if(problems.length){ console.error('CLF-C02 Set 1 validation failed',problems); return; }
  const quizSets=window.QUIZ_SETS=window.QUIZ_SETS||[];
  const i=quizSets.findIndex(existing=>existing.id===set.id);
  if(i>=0) quizSets[i]=set; else quizSets.push(set);
})();