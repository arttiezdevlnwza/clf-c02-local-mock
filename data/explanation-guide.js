/* CLF-C02: structured post-answer explanations. Does not change questions or answer keys. */
(() => {
  // Keywords are taken verbatim from each English question, not invented or taken from answer choices.
  const signals = [
    [/\bwithout (?:managing|maintaining|provisioning|installing|buying|purchasing|building|sharing|relying|waiting)[^.?,;]*/i,'ข้อจำกัดสำคัญ: ต้องทำได้โดยไม่ต้องทำสิ่งที่ระบุ'],
    [/\b(?:no|minimal|little|almost no) (?:code|application|server|infrastructure|manual|long-term)[^.?,;]*/i,'เน้นลดสิ่งที่ต้องจัดการหรือเปลี่ยนแปลง'],
    [/\b(?:Select TWO|Choose TWO|Select THREE|Choose THREE)\b/i,'โจทย์ต้องการมากกว่าหนึ่งคำตอบ'],
    [/\b(?:sudden|unpredictable|spikes?|surge|fluctuat\w*|varying|varies|peak demand)\b/i,'ปริมาณงานเปลี่ยนแปลง ต้องพิจารณาการปรับ capacity'],
    [/\b(?:grow and shrink|add or remove|increase or decrease|scale up and down)\b/i,'เน้นเพิ่มและลดทรัพยากรตาม demand'],
    [/\b(?:multiple countries|different continents|global audience|global customers|geographic areas|closer to (?:users|viewers|customers))\b/i,'ต้องรองรับผู้ใช้หลายภูมิภาคหรือลดระยะทาง'],
    [/\b(?:recover|recovery|failover|failure|failures|resilien\w*|continue operating|continue running)\b/i,'ต้องรับมือกับความล้มเหลวหรือฟื้นตัว'],
    [/\b(?:high availability|downtime|availability)\b/i,'เน้นความพร้อมใช้งานของระบบ'],
    [/\b(?:environmental impact|carbon|sustainab\w*|energy consumption)\b/i,'พิจารณาผลกระทบต่อสิ่งแวดล้อม'],
    [/\b(?:incident|lessons learned|deployment procedures|operations as code|continuous improvement)\b/i,'เน้นการปรับปรุงกระบวนการดำเนินงาน'],
    [/\b(?:performance|throughput|latency|response time)\b/i,'พิจารณาประสิทธิภาพและความเร็วของ workload'],
    [/\b(?:cost|spending|charges|budget|expense|billing|savings)\b/i,'เน้นต้นทุนหรือการเรียกเก็บเงิน'],
    [/\b(?:upfront|purchase physical|buy hardware|own hardware|data center build)\b/i,'เปรียบเทียบการลงทุนล่วงหน้ากับการจ่ายตามใช้'],
    [/\b(?:underutilized|idle|overprovision\w*|excess capacity)\b/i,'ทรัพยากรเกินความจำเป็น อาจต้องลดขนาดหรือหยุดใช้'],
    [/\b(?:short-term|temporary|unpredictable usage|no long-term commitment)\b/i,'งานระยะสั้น ต้องปรับหรือเลิกใช้ทรัพยากรได้ตามความจำเป็น'],
    [/\b(?:interrupt\w*|restart after interruption|spare capacity)\b/i,'workload ยอมให้ถูกขัดจังหวะได้'],
    [/\b(?:commit\w*|long-running|steady production|continuously for years)\b/i,'มีการใช้ต่อเนื่องและยอมรับ commitment'],
    [/\b(?:physical cores|physical server|software license|dedicated host)\b/i,'มีข้อกำหนดเรื่อง physical hardware หรือ licensing'],
    [/\b(?:capacity (?:to be )?available|specific AZ|reserve capacity)\b/i,'ต้องการความมั่นใจว่ามี compute capacity'],
    [/\b(?:7Rs|Rehost|Replatform|Refactor|Repurchase|Relocate|Retain|Retire)\b/i,'แยกกลยุทธ์การย้ายระบบตามระดับการเปลี่ยนแปลง'],
    [/\b(?:migrat\w*|move to AWS|lift.and.shift|replicat\w*|schema conversion)\b/i,'เน้นงาน migration ต้องดูว่าย้ายอะไรและเปลี่ยนอะไร'],
    [/\b(?:on.premises|hybrid cloud)\b/i,'มีทรัพยากรในองค์กรที่ต้องเชื่อมกับ cloud'],
    [/\b(?:API calls?|who (?:deleted|made|called)|which identity|account activity|audit history)\b/i,'ต้องตรวจว่าใครทำอะไรกับ AWS เมื่อใด'],
    [/\b(?:configuration changes?|configuration history|drift|approved baseline|compliance rules)\b/i,'ต้องตรวจ configuration และการเปลี่ยนแปลงของทรัพยากร'],
    [/\b(?:CPU utilization|metrics?|logs?|alarms?|threshold)\b/i,'ต้องติดตาม metrics/logs หรือแจ้งเตือน'],
    [/\b(?:compliance reports?|SOC reports?|third.party audit|audit reports?)\b/i,'ต้องการเอกสารรับรองหรือรายงาน compliance ของ AWS'],
    [/\b(?:suspicious|threat|credential misuse|malicious activity)\b/i,'ต้องตรวจจับพฤติกรรมหรือภัยคุกคาม'],
    [/\b(?:vulnerab\w*|vulnerable packages|software packages|network exposure)\b/i,'ต้องตรวจช่องโหว่ของ workloads'],
    [/\b(?:sensitive data|personally identifiable|PII|confidential objects)\b/i,'ข้อมูลอ่อนไหว ต้องดูการค้นหาและการปกป้อง'],
    [/\b(?:SQL injection|malicious HTTP|web requests?|web application layer)\b/i,'การโจมตีผ่าน HTTP(S) ต้องพิจารณา web request filtering'],
    [/\b(?:DDoS|volumetric attacks|exhaust public network)\b/i,'โจทย์เน้นการป้องกัน DDoS'],
    [/\b(?:cross.account|multiple AWS accounts|permission sets|workforce)\b/i,'ต้องจัดการสิทธิ์หรือ governance ข้ามหลายบัญชี'],
    [/\b(?:temporary credentials|long.term credentials|access keys|assume role)\b/i,'ต้องหลีกเลี่ยง long-term credentials'],
    [/\b(?:least privilege|only read|never delete|minimum permissions)\b/i,'ต้องให้สิทธิ์เท่าที่จำเป็น'],
    [/\b(?:root user|MFA|privileged access)\b/i,'เน้นป้องกันบัญชีที่มีสิทธิ์สูง'],
    [/\b(?:encryption keys?|cryptographic keys?|passwords?|rotate secrets?)\b/i,'ต้องแยกการจัดการ encryption keys กับ secrets'],
    [/\b(?:Kubernetes|control plane)\b/i,'ต้องการ orchestration ที่เข้ากันกับ Kubernetes'],
    [/\b(?:containers?|container hosts?|EC2 hosts?)\b/i,'ต้องแยก container orchestration จาก compute ที่ใช้รัน'],
    [/\b(?:short functions?|triggered by|event.driven|without a persistent server)\b/i,'งานประมวลผลเกิดตาม event ไม่จำเป็นต้องมี server ตลอด'],
    [/\b(?:scheduled|batch jobs?|queueing|scientific jobs?|simulations?)\b/i,'ต้องจัดคิวงานประมวลผลหรือรันงานเป็นชุด'],
    [/\b(?:incoming traffic|distribut\w* requests?|load balanc\w*)\b/i,'ต้องกระจาย requests ไปยังหลาย targets'],
    [/\b(?:relational|SQL Server|PostgreSQL|MySQL|Aurora)\b/i,'ข้อมูลหรือ engine เป็น relational database'],
    [/\b(?:NoSQL|key.value|document database|player profiles|key lookups)\b/i,'เน้น NoSQL หรือการเข้าถึงด้วย key'],
    [/\b(?:graph|relationships?|fraud rings|nodes? and edges?)\b/i,'เน้นความสัมพันธ์ระหว่างข้อมูล'],
    [/\b(?:data warehouse|analytical queries|historical datasets)\b/i,'เน้น analytics บนข้อมูลขนาดใหญ่'],
    [/\b(?:in.memory|cach\w*|frequently accessed)\b/i,'ต้องลดเวลาอ่านข้อมูลซ้ำด้วย cache'],
    [/\b(?:public subnet|private subnet|inbound|outbound|internet connections)\b/i,'ดูทิศทาง traffic และชนิด subnet'],
    [/\b(?:dedicated connection|encrypted connectivity|VPN|private access|public internet)\b/i,'ดูว่าต้องการ dedicated link, encryption หรือ private connectivity'],
    [/\b(?:VPCs|network connectivity|network filtering|security groups?|Network ACL)\b/i,'เน้นการเชื่อมต่อหรือการกรองเครือข่าย'],
    [/\b(?:DNS|domain name|traffic routing)\b/i,'เน้นการแปลงชื่อโดเมนหรือ routing'],
    [/\b(?:object storage|objects?|buckets?|S3)\b/i,'เน้น object storage หรือการจัดการ S3'],
    [/\b(?:block storage|volumes?|scratch storage|instance store)\b/i,'ต้องแยก block storage ถาวรกับ temporary local storage'],
    [/\b(?:file share|shared file|SMB|mount\w*|Windows servers)\b/i,'ต้องการ file system ที่ใช้ร่วมกันหรือ protocol เฉพาะ'],
    [/\b(?:archive|archival|rarely retrieved|years|long retrieval)\b/i,'เน้นข้อมูล archive ที่เรียกคืนไม่บ่อย'],
    [/\b(?:access patterns?|automatically move|infrequent access|storage tiers?)\b/i,'ต้องเลือก storage class ตามความถี่เข้าถึง'],
    [/\b(?:backup policies|centralized backup|disaster recovery)\b/i,'ต้องการการสำรองหรือการกู้คืนข้อมูล'],
    [/\b(?:streaming|clickstream|real.time events|live events)\b/i,'ข้อมูลไหลเข้าต่อเนื่องแบบ real time'],
    [/\b(?:SQL directly on|query.*S3|without provisioning database)\b/i,'ต้องการ query ข้อมูลใน S3 โดยไม่ดูแล server'],
    [/\b(?:ETL|Data Catalog|data integration)\b/i,'เน้นเตรียมและแปลงข้อมูล'],
    [/\b(?:chatbot|utterances|conversational)\b/i,'ต้องการ chatbot หรือการเข้าใจข้อความ/เสียงสนทนา'],
    [/\b(?:scanned|invoices|extract.*text|tables from)\b/i,'ต้องดึงข้อมูลจากเอกสาร'],
    [/\b(?:queue|buffer tasks|downstream outage|decoupl\w*)\b/i,'ต้องเก็บข้อความรอประมวลผลและแยกส่วนระบบ'],
    [/\b(?:pub.sub|subscribers?|notifications?|fan.out)\b/i,'ต้องกระจายข้อความไปหลาย subscribers'],
    [/\b(?:event types|event bus|matching event)\b/i,'ต้อง route events ตามเงื่อนไข'],
    [/\b(?:build and test|release stages|continuous delivery|pipeline|CodeBuild)\b/i,'เกี่ยวกับกระบวนการ build และ deploy software'],
    [/\b(?:estimate|before deploy|planned architecture|projected spending)\b/i,'ต้องประมาณค่าใช้จ่ายก่อนใช้จริง'],
    [/\b(?:line.item|detailed.*usage|custom analysis)\b/i,'ต้องการข้อมูลต้นทุนแบบละเอียดระดับรายการ'],
    [/\b(?:unusual spending|anomal\w*|unexpected charges)\b/i,'ต้องตรวจจับค่าใช้จ่ายผิดปกติ'],
    [/\b(?:consolidated billing|single payer|cost center|departments?)\b/i,'ต้องจัดกลุ่มหรือรวมการเรียกเก็บเงิน'],
    [/\b(?:support cases?|support plans?|technical support)\b/i,'ต้องการช่องทางหรือระดับ AWS Support'],
    [/\b(?:security risk|protect systems and data|security monitoring|identity controls|encryption)\b/i,'เน้นการปกป้องระบบ ข้อมูล และการควบคุมสิทธิ์'],
    [/\b(?:provisioning and shutdown|shutdown outside business hours|unused development instances|stop paying)\b/i,'ลดค่าใช้จ่ายโดยปิดทรัพยากรที่ไม่จำเป็น'],
    [/\b(?:one.time manual change|graphical interface|through a browser|browser.based)\b/i,'ต้องการจัดการ AWS ผ่านหน้าเว็บหรือ GUI'],
    [/\b(?:repeatable template|identical infrastructure|version control|infrastructure as code)\b/i,'ต้องสร้าง infrastructure ซ้ำได้จาก code หรือ template'],
    [/\b(?:community.based|technical knowledge|questions and answers)\b/i,'ต้องการแหล่งความรู้หรือชุมชนถามตอบ'],
    [/\b(?:AWS service event|affecting its account|health event)\b/i,'ต้องตรวจเหตุการณ์ AWS ที่กระทบบัญชีหรือทรัพยากร'],
    [/\b(?:product ideas|experiment|prototypes|rapidly)\b/i,'ต้องทดลองหรือสร้างสิ่งใหม่ได้อย่างรวดเร็ว'],
    [/\b(?:business, people, governance|organizational perspectives|cloud adoption framework|AWS CAF)\b/i,'เน้นกรอบมุมมององค์กรสำหรับการนำ cloud มาใช้'],
    [/\b(?:MOST|BEST|LEAST|PRIMARY|directly|primarily)\b/i,'ต้องเลือกตัวเลือกที่ตรงเงื่อนไขที่สุด ไม่ใช่แค่เกี่ยวข้อง']
  ];
  const esc = value => String(value==null?'':value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function keywords(q){
    const question=String(q.question||'');
    const found=[];
    for(const [pattern,meaning] of signals){
      const m=question.match(pattern);
      if(!m)continue;
      const phrase=m[0].trim().replace(/[.?,;:]$/,'');
      if(!phrase||found.some(x=>x.phrase.toLowerCase()===phrase.toLowerCase()))continue;
      found.push({phrase,meaning});
      if(found.length===3)break;
    }
    // A qualifier such as MOST/BEST is not sufficient by itself: show the actual scenario clue too.
    if(!found.length || found.every(x=>/^(MOST|BEST|LEAST|PRIMARY|directly|primarily)$/i.test(x.phrase))){
      const stem=question.split(/\b(?:Which|What|Who)\b[^?]*\?/i)[0].trim() || question.replace(/^Which\s+(?:TWO\s+)?/i,'');
      const match=stem.match(/\b(?:needs?|wants?|requires?|must|to|for|with|without|uses?|has|sees)\b\s+(.{12,95})/i);
      let phrase=(match?match[0]:stem.slice(-100)).trim().replace(/[.?,;:]$/,'');
      if(phrase.length>105)phrase=phrase.slice(0,105).trim();
      if(phrase && !found.some(x=>x.phrase===phrase))found.unshift({phrase,meaning:'เงื่อนไขหลักของสถานการณ์ที่ต้องใช้ตัดสินใจเลือกคำตอบ'});
    }
    return found.slice(0,3);
  }
  function intent(q){
    const text=String(q.questionTh||'').trim();
    // Identify the actual question in Thai instead of repeating the whole translation.
    const patterns=[/(?:ควรเลือก|ควรใช้|ควรพิจารณา|ควรตั้งค่า|ต้องใช้|ต้องเลือก|บริการใด|เครื่องมือใด|แนวทางใด|กลยุทธ์ใด|คุณสมบัติใด|หลักการใด|ใครรับผิดชอบ|ข้อใด(?:สองข้อ)?|ตัวเลือกใด|เป็น pillar ใด|เป็น strategy ใด|สอดคล้อง pillar ใด|เป็นรูปแบบค่าใช้จ่ายใด).{0,120}$/i];
    for(const p of patterns){const m=text.match(p);if(m)return m[0].replace(/[?？]$/,'');}
    const cleaned=text.replace(/[?？]\s*$/,'');
    const ask=cleaned.match(/(?:ประโยชน์|แนวคิด|บริการ|เครื่องมือ|กลยุทธ์|คุณสมบัติ|รูปแบบ|ตัวเลือก|แนวทาง|หลักการ|ความสามารถ|ความรับผิดชอบ|การกระทำ|องค์ประกอบ|ข้อใด|pillar|concept|framework|option|resource|ใคร|อะไร)[^.!?？]{0,110}$/);
    if(ask)return ask[0];
    const tail=cleaned.match(/[^\s]{0,50}(?:ใด|อะไร|ไหน|อย่างไร|ใคร|หรือไม่)[^\s]{0,50}$/);
    if(tail)return tail[0];
    return 'ให้ระบุ'+(q.type==='multiple'?'คำตอบทั้งหมด':'คำตอบ')+'ที่ตอบความต้องการหลักของสถานการณ์ ไม่ใช่เพียงตัวเลือกที่เกี่ยวข้อง';
  }
  function choiceReasons(q){
    const byKey={};
    String(q.explanation||'').split(/\n/).forEach(line=>{
      const m=line.trim().match(/^[✅❌]\s*([A-Z])\s*(?:—|–|-|=)\s*(.*)$/);
      if(m)byKey[m[1]]=m[2].trim();
    });
    return byKey;
  }
  function rows(q,map){
    const reasons=choiceReasons(q);
    return Object.keys(q.choices||{}).map(k=>({
      key:k, shown:map[k]||k, name:q.choices[k], correct:(q.answer||[]).includes(k),
      reason:reasons[k]||'คำอธิบายของตัวเลือกนี้ยังไม่มีในคลังข้อสอบ'
    })).sort((a,b)=>a.shown.localeCompare(b.shown));
  }
  function html(q,map){
    const keys=keywords(q), opts=rows(q,map), answer=opts.filter(o=>o.correct);
    return '<div class="guided-explanation">'+
      '<section class="guide-section"><h4>1. คำแปลโจทย์</h4><p>'+esc(q.questionTh||'ยังไม่มีคำแปลโจทย์')+'</p></section>'+
      '<section class="guide-section"><h4>2. โจทย์ถามอะไร?</h4><p>'+esc(intent(q))+'</p></section>'+
      '<section class="guide-section"><h4>3. Keywords ที่พาไปสู่คำตอบ</h4><ul class="guide-keywords">'+
      keys.map(k=>'<li><strong>'+esc(k.phrase)+'</strong><span>'+esc(k.meaning)+'</span></li>').join('')+
      '</ul></section>'+
      '<section class="guide-section"><h4>4. เฉลย: '+esc(answer.map(o=>o.shown+' — '+o.name).join(' / '))+'</h4><div class="guide-choice-list">'+
      opts.map(o=>'<div class="guide-choice '+(o.correct?'guide-choice-correct':'guide-choice-wrong')+'"><div class="guide-choice-title"><strong>'+(o.correct?'✅':'❌')+' '+esc(o.shown)+'. '+esc(o.name)+'</strong><span>'+(o.correct?'ถูก':'ผิด')+'</span></div><p>'+esc(o.reason)+'</p></div>').join('')+
      '</div></section></div>';
  }
  function plain(q,map){
    const opts=rows(q,map);
    return ['คำแปลโจทย์: '+(q.questionTh||'ยังไม่มีคำแปลโจทย์'),
      'โจทย์ถามอะไร: '+intent(q),
      'Keywords:',...keywords(q).map(k=>'- '+k.phrase+' = '+k.meaning),
      'เฉลย: '+opts.filter(o=>o.correct).map(o=>o.shown+'. '+o.name).join(', '),
      'เหตุผลแต่ละตัวเลือก:',...opts.map(o=>(o.correct?'✅ ':'❌ ')+o.shown+'. '+o.name+' — '+o.reason)].join('\n');
  }
  window.CLF_EXPLANATION_GUIDE={html,plain,keywords,rows,intent};
})();