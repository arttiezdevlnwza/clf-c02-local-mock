window.CLF_INFOGRAPHIC_PAGES = [
  {page:1,title:'Cloud Value & Economics',tags:['Agility','Elasticity','Economics'],sections:[
    {title:'Cloud value',items:['Agility = provision/experiment quickly','Elasticity = capacity follows demand','Global reach = deploy in multiple geographic areas']},
    {title:'Economics',items:['Variable expense instead of large fixed upfront investment','Rightsize resources to actual need','Automate shutdown of unused resources','Economies of scale can lower unit costs']}
  ]},
  {page:2,title:'Well-Architected 6 Pillars',tags:['Well-Architected','Pillars'],sections:[
    {title:'Operate & Protect',items:['Operational Excellence = run and improve','Security = protect data and systems','Reliability = recover and continue operating']},
    {title:'Use Resources Wisely',items:['Performance Efficiency = use resources efficiently','Cost Optimization = avoid unnecessary spend','Sustainability = reduce environmental impact']}
  ]},
  {page:3,title:'Shared Responsibility',tags:['Security','Shared Responsibility'],sections:[
    {title:'AWS',items:['Security OF the cloud','Facilities, physical hardware and underlying infrastructure']},
    {title:'Customer',items:['Security IN the cloud','Data, identities, permissions and workload configuration','Responsibility changes with service abstraction']}
  ]},
  {page:4,title:'Security Service Finder',tags:['IAM','Security','Compliance'],sections:[
    {title:'Identity & Encryption',items:['IAM / IAM Identity Center = access','KMS = encryption keys','Secrets Manager = secrets']},
    {title:'Detect & Protect',items:['GuardDuty = threat detection','Inspector = vulnerabilities','WAF = web request filtering','Shield = DDoS','Artifact = AWS compliance reports']}
  ]},
  {page:5,title:'Compute & Containers',tags:['EC2','Lambda','ECS','EKS'],sections:[
    {title:'Compute choices',items:['EC2 = virtual server + OS control','Lambda = event-driven serverless code','Fargate = serverless container compute']},
    {title:'Container orchestration',items:['ECS = AWS-native orchestration','EKS = managed Kubernetes']}
  ]},
  {page:6,title:'Storage & Database Finder',tags:['S3','EBS','EFS','RDS','DynamoDB'],sections:[
    {title:'Storage',items:['S3 = object','EBS = block','EFS = shared file','Instance Store = ephemeral local block']},
    {title:'Database',items:['RDS/Aurora = relational','DynamoDB = NoSQL key-value/document','ElastiCache = in-memory cache']}
  ]},
  {page:7,title:'Networking & Global Infrastructure',tags:['VPC','Region','AZ','Route 53'],sections:[
    {title:'Global',items:['Region contains multiple Availability Zones','Multi-AZ improves availability','Multi-Region can support DR, latency and sovereignty']},
    {title:'Network',items:['VPC = isolated network','Route 53 = DNS','Direct Connect = dedicated connectivity','Site-to-Site VPN = encrypted tunnel over internet','CloudFront = CDN']}
  ]},
  {page:8,title:'Monitoring, Audit & Governance',tags:['CloudWatch','CloudTrail','Config'],sections:[
    {title:'Know the clue',items:['CloudWatch = metrics/logs/alarms','CloudTrail = API/account activity','Config = resource configuration/compliance rules','Trusted Advisor = best-practice checks']},
    {title:'Avoid confusion',items:['Who did what? → CloudTrail','How is resource configured? → Config','How is system performing? → CloudWatch']}
  ]},
  {page:9,title:'Analytics & Integration',tags:['Athena','Glue','SQS','SNS'],sections:[
    {title:'Analytics',items:['Athena = serverless SQL on S3','Glue = catalog/data integration/ETL','Quick Sight = BI visualization','Kinesis = streaming data']},
    {title:'Integration',items:['SQS = queue and decoupling','SNS = pub/sub fan-out','EventBridge = event bus/routing','Step Functions = workflow orchestration']}
  ]},
  {page:10,title:'Pricing, Cost & Support',tags:['Budgets','Cost Explorer','Support'],sections:[
    {title:'Pricing',items:['On-Demand = no long commitment','Spot = spare capacity + interruption','Savings Plans = commitment discount','Dedicated Hosts = dedicated physical host']},
    {title:'Cost & support',items:['Budgets = thresholds/alerts','Cost Explorer = analyze trends','Pricing Calculator = estimate','Support Center = support cases','re:Post = community knowledge']}
  ]}
];

// CLF-C02 Info Library refresh (2026-11-14): brief Thai explanations and examples.
// Keep the existing ten-page structure; these examples complement the quick-reference bullets.
(() => {
  const pages = window.CLF_INFOGRAPHIC_PAGES || [];
  const notes = {
    1: [
      ['Cloud value: Agility คือเริ่มทดลองได้เร็ว ส่วน Elasticity คือปรับ capacity ตาม demand','ตัวอย่าง: เพิ่ม EC2 ช่วง flash sale แล้วลดหลังจบ'],
      ['Economics: จ่ายตามการใช้จริงและ rightsizing ช่วยลดต้นทุนส่วนเกิน','ตัวอย่าง: ปิด Dev instance เมื่อไม่ใช้งาน']
    ],
    2: [
      ['Operational Excellence เน้นกระบวนการ; Security เน้นการปกป้อง; Reliability เน้นฟื้นจาก failure','ตัวอย่าง: ใช้ IaC, IAM least privilege และ Multi-AZ ตามลำดับ'],
      ['Performance Efficiency เลือก resource ให้เหมาะ; Cost Optimization ลดค่าใช้จ่าย; Sustainability ลดผลกระทบสิ่งแวดล้อม','ตัวอย่าง: เลือก instance ให้ตรงงาน ปิดเครื่องว่าง และลดการใช้ resource']
    ],
    3: [
      ['AWS รับผิดชอบ Security OF the cloud เช่น facilities และ hardware','ตัวอย่าง: AWS ดูแล physical servers ของ EC2'],
      ['Customer รับผิดชอบ Security IN the cloud เช่น data, access และ configuration; ขอบเขตต่างกันตาม service','ตัวอย่าง: ผู้ใช้ EC2 patch guest OS เอง แต่ RDS มีงานที่ AWS จัดการมากกว่า']
    ],
    4: [
      ['IAM ควบคุมสิทธิ์; IAM Identity Center จัดการ Workforce SSO; KMS จัดการ encryption keys','ตัวอย่าง: Lambda ใช้ IAM Role และ S3 เข้ารหัสด้วย KMS key'],
      ['GuardDuty ตรวจ threat; Inspector ตรวจ vulnerabilities; WAF กรอง web requests; Shield ป้องกัน DDoS; Artifact ให้ compliance reports','ตัวอย่าง: GuardDuty พบ API ผิดปกติ แต่ Inspector พบ CVE บน EC2']
    ],
    5: [
      ['EC2 ให้ควบคุม OS; Lambda รัน code ตาม event; Fargate รัน containers โดยไม่ดูแล servers','ตัวอย่าง: S3 upload เรียก Lambda ส่วนเว็บ container รันบน Fargate'],
      ['ECS จัดการ containers แบบ AWS-native; EKS ใช้ Kubernetes','ตัวอย่าง: ทีมที่ใช้ Kubernetes manifests อยู่แล้วอาจเลือก EKS']
    ],
    6: [
      ['S3 คือ object; EBS คือ block volume; EFS คือ shared file system','ตัวอย่าง: รูปเก็บใน S3, EC2 disk ใช้ EBS, shared files ใช้ EFS'],
      ['RDS/Aurora คือ relational; DynamoDB คือ NoSQL; ElastiCache คือ in-memory cache','ตัวอย่าง: Orders อยู่ RDS แต่ cache ผลค้นหาไว้ใน ElastiCache']
    ],
    7: [
      ['Multi-AZ ใช้เพิ่ม availability ภายใน Region; Multi-Region ช่วยด้าน DR หรือ latency ข้ามพื้นที่','ตัวอย่าง: deploy EC2 สอง AZ เพื่อลด single point of failure'],
      ['Route 53 คือ DNS; CloudFront คือ CDN; Direct Connect คือ dedicated link; VPN คือ encrypted tunnel','ตัวอย่าง: Route 53 ชี้โดเมนไป ALB ส่วน CloudFront cache รูปใกล้ผู้ใช้']
    ],
    8: [
      ['CloudWatch ดู metrics/logs; CloudTrail ดู API activity; Config ดู configuration และ compliance','ตัวอย่าง: CPU สูง → CloudWatch, ใครลบ S3 → CloudTrail, bucket ผิด policy → Config'],
      ['Trusted Advisor ให้คำแนะนำ best practices; ไม่ใช่ตัวบันทึก API actions','ตัวอย่าง: ตรวจแนวทาง cost optimization และ security checks']
    ],
    9: [
      ['Athena ใช้ SQL query S3; Glue ทำ catalog/ETL; QuickSight ทำ BI; Kinesis รับ streaming data','ตัวอย่าง: Glue crawler สร้าง metadata แล้ว Athena query logs บน S3'],
      ['SQS คือ queue; SNS คือ pub/sub; EventBridge route events; Step Functions จัด workflow','ตัวอย่าง: Order event เข้า EventBridge แล้ว Step Functions ประสานหลายขั้นตอน']
    ],
    10: [
      ['On-Demand ไม่มี commitment; Spot ถูกกว่าแต่ interrupt ได้; Savings Plans ให้ส่วนลดเมื่อ commit','ตัวอย่าง: batch retry ได้ใช้ Spot ส่วน production คงที่อาจใช้ Savings Plans'],
      ['Budgets แจ้งเตือนงบ; Cost Explorer วิเคราะห์ค่าใช้จ่าย; Pricing Calculator ประเมินก่อนใช้','ตัวอย่าง: ส่ง CUR 2.0 ผ่าน Data Exports ไป S3 แล้วใช้ Athena วิเคราะห์ราย resource']
    ]
  };
  for (const page of pages) {
    const extra = notes[page.page];
    if (!extra) continue;
    page.sections.forEach((section, index) => {
      if (!extra[index]) return;
      section.items.push(...extra[index]);
    });
  }
  const security = pages.find(page => page.page === 4);
  if (security) security.sections[1].items.push('AWS Config = resource configuration history และ compliance rules; ตัวอย่าง: ตรวจ S3 public access');
  const cost = pages.find(page => page.page === 10);
  if (cost) {
    cost.tags.push('Business Support+', 'CUR 2.0');
    cost.sections[1].items.push(
      'AWS Support Plans ปัจจุบัน: Basic (รวมฟรี), Business Support+ (technical support 24/7), Enterprise Support (TAM), Unified Operations (mission-critical proactive operations)',
      'Developer/Business Support เดิมไม่รับสมัครใหม่ตั้งแต่ 2 ธ.ค. 2025 และยุติ 1 ม.ค. 2027',
      'Data Exports / CUR 2.0 = ส่งรายงาน cost/usage แบบละเอียดไป S3; ต่างจาก Cost Explorer ที่ใช้วิเคราะห์ผ่าน console'
    );
  }
})();
