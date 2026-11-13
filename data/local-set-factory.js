(() => {
  const defs = {
    'AWS CloudTrail':'บันทึกกิจกรรม API และการดำเนินการในบัญชี AWS',
    'Amazon CloudWatch':'เก็บ metrics, logs และสร้าง alarms สำหรับการติดตามระบบ',
    'AWS Config':'ติดตามและประเมิน configuration ของทรัพยากรตามกฎ',
    'AWS Artifact':'ให้ดาวน์โหลดรายงานและเอกสารด้าน compliance ของ AWS',
    'Amazon GuardDuty':'ตรวจจับภัยคุกคามจากสัญญาณและกิจกรรมที่น่าสงสัย',
    'Amazon Inspector':'สแกนช่องโหว่ของ workload ที่รองรับ',
    'AWS Security Hub':'รวม findings และสถานะ security จากหลายแหล่ง',
    'Amazon Detective':'ช่วยสืบสวนความสัมพันธ์ของเหตุการณ์ security',
    'AWS WAF':'กรอง HTTP(S) requests ตาม web ACL rules',
    'AWS Shield':'ป้องกันการโจมตี DDoS',
    'AWS Firewall Manager':'จัดการ security policies ส่วนกลางข้ามบัญชี',
    'AWS IAM':'กำหนด identities, roles และสิทธิ์เข้าถึง AWS',
    'IAM Identity Center':'จัดการการเข้าถึงหลายบัญชีสำหรับ workforce',
    'AWS Organizations':'จัดกลุ่มบัญชีและใช้ governance / consolidated billing',
    'AWS Control Tower':'ตั้งค่าและกำกับ multi-account landing zone',
    'AWS KMS':'สร้างและควบคุม encryption keys',
    'AWS Secrets Manager':'เก็บและหมุนเวียน secrets เช่น database credentials',
    'AWS Certificate Manager':'ออกและจัดการ TLS certificates ที่รองรับ',
    'Amazon Macie':'ค้นหาและจัดประเภทข้อมูลอ่อนไหวใน Amazon S3',
    'IAM Access Analyzer':'วิเคราะห์ resource access และ external access',
    'AWS Trusted Advisor':'ตรวจ best practices รวมถึงต้นทุนและ security',
    'AWS Health Dashboard':'แสดงเหตุการณ์ AWS ที่กระทบทรัพยากรหรือบริการ',
    'Amazon EC2':'ให้ virtual servers ที่ลูกค้าจัดการ guest OS',
    'AWS Lambda':'รันโค้ดแบบ event-driven โดยไม่จัดการ servers',
    'Amazon ECS':'orchestrate containers ด้วย AWS-native control plane',
    'Amazon EKS':'บริการ Kubernetes แบบ managed',
    'AWS Fargate':'compute engine สำหรับ containers โดยไม่จัดการ servers',
    'AWS Batch':'จัดคิวและรัน batch computing jobs',
    'AWS Elastic Beanstalk':'deploy applications พร้อมจัดการ underlying environment',
    'Amazon Lightsail':'bundled virtual servers สำหรับงานเริ่มต้นที่ไม่ซับซ้อน',
    'EC2 Auto Scaling':'ปรับจำนวน EC2 instances ตาม demand',
    'Elastic Load Balancing':'กระจาย incoming traffic ไปยัง targets',
    'AWS CloudFormation':'สร้างและจัดการ infrastructure จาก templates',
    'AWS CDK':'นิยาม cloud infrastructure ด้วย programming languages',
    'AWS CloudShell':'shell ผ่าน browser ที่มี AWS tools พร้อมใช้',
    'AWS Outposts':'นำ AWS infrastructure และ services ไปติดตั้ง on premises',
    'Amazon VPC':'กำหนดเครือข่ายเสมือนแบบแยกส่วนใน AWS',
    'Internet Gateway':'เชื่อม VPC กับอินเทอร์เน็ตตาม route และ security rules',
    'NAT Gateway':'ให้ private subnet เริ่ม outbound connections ไปอินเทอร์เน็ต',
    'VPC endpoint':'เข้าถึง AWS services แบบ private โดยไม่ผ่าน public internet',
    'AWS Transit Gateway':'เชื่อม VPC และ on-premises networks แบบ hub',
    'AWS Direct Connect':'dedicated private network connection ไป AWS',
    'AWS Site-to-Site VPN':'เข้ารหัสการเชื่อมต่อเครือข่ายผ่านอินเทอร์เน็ต',
    'Amazon Route 53':'DNS และ domain routing รวมถึง health checks',
    'Amazon CloudFront':'content delivery network ที่ใช้ edge locations',
    'Amazon API Gateway':'จัดการและเผยแพร่ APIs',
    'Security group':'stateful firewall ที่ระดับ ENI/instance',
    'Network ACL':'stateless filtering ที่ระดับ subnet',
    'Amazon S3':'durable object storage',
    'Amazon S3 Glacier Deep Archive':'archival object storage สำหรับข้อมูลเข้าถึงน้อยมากและยอมรอการกู้คืน',
    'Amazon S3 Intelligent-Tiering':'ปรับ access tiers ตามรูปแบบการเข้าถึงอัตโนมัติ',
    'Amazon S3 Standard-IA':'เก็บข้อมูลเข้าถึงไม่บ่อยแต่ต้องการ retrieval ทันที',
    'Amazon EBS':'persistent block volumes สำหรับ EC2',
    'Instance store':'temporary local block storage ผูกกับ host',
    'Amazon EFS':'shared elastic file system สำหรับ Linux workloads',
    'Amazon FSx for Windows File Server':'managed Windows file shares ด้วย SMB',
    'AWS Storage Gateway':'เชื่อม on-premises applications กับ cloud storage',
    'AWS DataSync':'ย้ายข้อมูลระหว่าง storage locations แบบ online',
    'AWS Snowball Edge':'ย้ายข้อมูลจำนวนมากแบบ physical device',
    'AWS Backup':'รวมศูนย์การตั้งค่า backup policies',
    'Amazon RDS':'managed relational databases',
    'Amazon Aurora':'relational database engine ที่เข้ากันได้กับ MySQL/PostgreSQL',
    'Amazon DynamoDB':'managed NoSQL key-value/document database',
    'Amazon ElastiCache':'managed in-memory caching',
    'Amazon Redshift':'cloud data warehouse สำหรับ analytics',
    'Amazon DocumentDB':'managed document database ที่รองรับ MongoDB-compatible workloads',
    'Amazon Neptune':'managed graph database',
    'AWS DMS':'ย้ายและ replicate databases',
    'AWS SCT':'ช่วยแปลง database schema ระหว่าง engines',
    'AWS Migration Hub':'ติดตามความคืบหน้าการ migration',
    'AWS Application Migration Service':'ย้าย servers โดยทำ lift-and-shift',
    'AWS Application Discovery Service':'รวบรวมข้อมูล servers และ dependencies เพื่อวางแผน migration',
    'AWS Migration Evaluator':'ช่วยสร้าง business case และ cost assessment ก่อน migration',
    'AWS Cloud Adoption Framework':'กรอบแนวทางการเปลี่ยนผ่านองค์กรสู่ cloud',
    'AWS Well-Architected Framework':'แนวทางออกแบบ workloads ตาม 6 pillars',
    'AWS Well-Architected Tool':'ประเมิน workloads เทียบ best practices',
    'AWS Pricing Calculator':'ประเมินค่าใช้จ่ายก่อนใช้งาน',
    'AWS Cost Explorer':'วิเคราะห์ค่าใช้จ่ายจริงและแนวโน้ม',
    'AWS Budgets':'กำหนด budgets และแจ้งเตือนตาม thresholds',
    'AWS Cost and Usage Report':'ข้อมูลค่าใช้จ่ายและการใช้งานละเอียด',
    'AWS Cost Anomaly Detection':'ตรวจพบรูปแบบค่าใช้จ่ายผิดปกติ',
    'AWS Support Center':'เปิดและติดตาม support cases',
    'AWS re:Post':'ชุมชนถามตอบเกี่ยวกับ AWS',
    'AWS Marketplace':'ค้นหาและซื้อซอฟต์แวร์/บริการจาก third parties',
    'AWS Partner Network':'เครือข่ายคู่ค้าของ AWS',
    'Amazon SNS':'pub/sub notifications และ fan-out',
    'Amazon SQS':'managed queues สำหรับ decoupling',
    'Amazon EventBridge':'event bus และ event routing ตาม rules',
    'AWS Step Functions':'orchestrate workflows แบบ state machines',
    'Amazon Kinesis Data Streams':'streaming data ingestion สำหรับ consumers',
    'AWS Glue':'serverless data integration และ catalog',
    'Amazon Athena':'query data ใน S3 ด้วย SQL',
    'Amazon Quick Sight':'business intelligence dashboards',
    'Amazon SageMaker AI':'สร้าง ฝึก และ deploy machine learning models',
    'Amazon Bedrock':'ใช้งาน foundation models ผ่าน managed APIs',
    'Amazon Lex':'สร้าง conversational interfaces',
    'Amazon Polly':'แปลงข้อความเป็นเสียงพูด',
    'Amazon Rekognition':'วิเคราะห์ภาพและวิดีโอ',
    'Amazon Textract':'ดึงข้อความและโครงสร้างจากเอกสาร',
    'AWS CodeBuild':'build และ test source code',
    'AWS CodePipeline':'automate release pipelines',
    'AWS X-Ray':'trace distributed application requests',
    'Amazon SES':'ส่งอีเมลผ่านบริการ managed',
    'Amazon Connect':'cloud contact center',
    'Amazon WorkSpaces':'managed virtual desktops',
    'Amazon AppStream 2.0':'stream desktop applications ไปยัง users',
    'AWS Amplify':'เครื่องมือสร้างและโฮสต์ web/mobile applications',
    'AWS IoT Core':'เชื่อมและจัดการ messages จาก IoT devices',
    'Availability Zone':'พื้นที่โครงสร้างพื้นฐานที่แยกจาก AZ อื่นใน Region',
    'AWS Region':'พื้นที่ทางภูมิศาสตร์ที่มีหลาย Availability Zones',
    'Edge location':'จุดกระจาย content ใกล้ผู้ใช้',
    'Multi-AZ deployment':'ออกแบบ resilience ภายใน Region ด้วยหลาย AZ',
    'Multi-Region deployment':'กระจาย workloads ข้าม Regions',
    'Elasticity':'ปรับทรัพยากรเพิ่มลดตาม demand',
    'Scalability':'ความสามารถรองรับภาระงานที่เพิ่มขึ้น',
    'Agility':'จัดสรรและทดลองทรัพยากรได้รวดเร็ว',
    'High availability':'ออกแบบให้บริการพร้อมใช้งานต่อเนื่อง',
    'Durability':'โอกาสที่ข้อมูลยังคงอยู่ไม่สูญหาย',
    'Fault tolerance':'ทำงานต่อได้เมื่อบางส่วนล้มเหลว',
    'Operational Excellence':'เน้นการดำเนินงาน การปรับปรุง และการเรียนรู้',
    'Security':'เน้นปกป้องข้อมูล ระบบ และ assets',
    'Reliability':'เน้นการฟื้นตัวและการทำงานตามที่คาดหวัง',
    'Performance Efficiency':'เน้นการใช้ทรัพยากรให้เหมาะกับ workload',
    'Cost Optimization':'เน้นคุณค่าที่ได้รับเทียบค่าใช้จ่าย',
    'Sustainability':'ลดผลกระทบด้านสิ่งแวดล้อมของ workloads',
    'Rehost':'ย้าย workload โดยเปลี่ยนแปลงน้อยที่สุด',
    'Replatform':'ย้ายและปรับแพลตฟอร์มบางส่วน',
    'Refactor':'ปรับสถาปัตยกรรมแอปเพื่อใช้ cloud-native',
    'Retire':'เลิกใช้แอปที่ไม่จำเป็น',
    'Retain':'เก็บแอปไว้ในสภาพแวดล้อมเดิม',
    'On-Demand Instances':'คิดเงินตามการใช้งานโดยไม่มีสัญญาระยะยาว',
    'Spot Instances':'ใช้ EC2 spare capacity ที่อาจถูกขัดจังหวะ',
    'Reserved Instances':'ส่วนลดตาม commitment และคุณสมบัติที่กำหนด',
    'Savings Plans':'ส่วนลดตาม commitment ด้านการใช้ compute',
    'Dedicated Hosts':'physical server ที่สงวนให้ลูกค้ารายเดียว',
    'On-Demand Capacity Reservations':'จอง capacity ใน AZ โดยไม่ผูกกับส่วนลดค่าใช้งาน',
    'Cost allocation tags':'แยกค่าใช้จ่ายตาม tags ของทรัพยากร',
    'Consolidated billing':'รวมการเรียกเก็บเงินหลายบัญชีใน Organizations',
    'Economies of scale':'ลดต้นทุนต่อหน่วยจากการใช้ทรัพยากรในปริมาณมาก',
    'Pay-as-you-go':'จ่ายตามปริมาณทรัพยากรที่ใช้',
    'Rightsizing':'เลือกขนาดทรัพยากรให้ตรงความต้องการ',
    'Capital expenditure':'ค่าใช้จ่ายลงทุนล่วงหน้าในสินทรัพย์',
    'Variable expense':'ค่าใช้จ่ายที่เปลี่ยนตามการใช้งาน'
  };
  const domainNames={1:'Cloud Concepts',2:'Security and Compliance',3:'Cloud Technology and Services',4:'Billing, Pricing, and Support'};
  const tasks=['1.1','1.2','1.3','1.4','2.1','2.2','2.3','2.4','3.1','3.2','3.3','3.4','3.5','3.6','3.7','3.8','4.1','4.2','4.3'];
  function build(setNumber,rows){
    const errors=[],domainCount={},taskCount={},typeCount={},seen=new Set();
    const questions=rows.map((r,i)=>{
      const [task,question,questionTh,optionString,correctString,why]=r;
      const options=optionString.split('|'),correct=correctString.split(',').map(Number);
      const type=correct.length===1?'single':'multiple';
      const choices=Object.fromEntries(options.map((o,j)=>[String.fromCharCode(65+j),o]));
      const answer=correct.map(j=>String.fromCharCode(65+j));
      const explanation=options.map((o,j)=>{
        const letter=String.fromCharCode(65+j);
        return correct.includes(j)?'✅ '+letter+' — '+why:'❌ '+letter+' — '+(defs[o]||'ตัวเลือกนี้ไม่ตอบความต้องการหลักของโจทย์')+'; ไม่ใช่คำตอบที่เหมาะที่สุดสำหรับเงื่อนไขนี้';
      }).join('\n');
      const domain=Number(task[0]);
      domainCount[domain]=(domainCount[domain]||0)+1;taskCount[task]=(taskCount[task]||0)+1;typeCount[type]=(typeCount[type]||0)+1;
      if(!tasks.includes(task))errors.push('Unknown task '+task);
      if(seen.has(question.toLowerCase()))errors.push('Repeated stem '+(i+1));seen.add(question.toLowerCase());
      if(!questionTh||questionTh.length<20)errors.push('Thai translation missing '+(i+1));
      if(!why||why.length<25)errors.push('Short explanation '+(i+1));
      if(type==='single'&&(options.length!==4||correct.length!==1))errors.push('Bad single '+(i+1));
      if(type==='multiple'&&(options.length<5||!question.includes('Select TWO')||correct.length!==2))errors.push('Bad multiple '+(i+1));
      if(new Set(options).size!==options.length)errors.push('Duplicate options '+(i+1));
      if(options.some(o=>!defs[o]))errors.push('Missing option definition '+(i+1)+': '+options.filter(o=>!defs[o]).join(','));
      if(correct.some(j=>j<0||j>=options.length))errors.push('Bad answer '+(i+1));
      return {id:i+1,domain,domainName:domainNames[domain],task,type,question,questionTh,choices,answer,explanation,vocab:[]};
    });
    if(questions.length!==65)errors.push('Expected 65 questions, got '+questions.length);
    for(const [d,n] of Object.entries({1:16,2:19,3:22,4:8}))if(domainCount[d]!==n)errors.push('Domain '+d+' count '+domainCount[d]);
    for(const t of tasks)if(!taskCount[t])errors.push('Missing task '+t);
    if((typeCount.multiple||0)<8)errors.push('Not enough multiple-response questions');
    const id='local-set-0'+setNumber;
    const set={id,title:'Local Mock Set '+setNumber,subtitle:'65 Questions · Official CLF-C02 Blueprint · Original Exam-Style Questions',questionCount:65,questions,_blueprint:{domains:domainCount,types:typeCount,tasks:taskCount,qualityProblems:errors,sourceNote:['Official AWS CLF-C02 Exam Guide and AWS service documentation; independently authored questions, not sourced from AWS Learning Hub.']}};
    window['LOCAL_SET_0'+setNumber+'_VALIDATION']={ok:errors.length===0,problems:errors};
    if(errors.length){console.error('CLF-C02 Set '+setNumber+' validation failed',errors);return;}
    const sets=window.QUIZ_SETS=window.QUIZ_SETS||[];
    const idx=sets.findIndex(s=>s.id===id);
    if(idx>=0)sets[idx]=set;else sets.push(set);
  }
  window.buildClfLocalExamSet=build;
})();