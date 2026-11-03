window.EXAM_FAMILY_GUIDE = {
  updated: '2026-11-03',
  groups: [
    {id:'cloud-concepts',title:'Cloud Concepts — Value, Agility, Elasticity, HA',summary:'ภาพรวมคุณค่าของ Cloud และคำที่ชอบสับสน',items:[
      {name:'Agility',use:'สร้าง/ทดลอง/เปลี่ยน resource ได้รวดเร็ว',cue:'เร็วในการเปลี่ยนและทดลอง',confuse:'Elasticity = ปรับ capacity ตาม demand'},
      {name:'Elasticity',use:'เพิ่ม/ลด capacity ตาม demand',cue:'Demand ขึ้นลง → capacity ขึ้นลง',confuse:'Scalability = ความสามารถรองรับการเติบโต'},
      {name:'High Availability',use:'ออกแบบให้บริการยังพร้อมใช้เมื่อ component บางส่วนล้มเหลว',cue:'ยังใช้ได้แม้บางส่วน fail',confuse:'Disaster Recovery = ฟื้นตัวหลังเหตุใหญ่'},
      {name:'Economies of Scale',use:'AWS รวม demand จำนวนมากเพื่อลดต้นทุนต่อหน่วย',cue:'AWS ใหญ่ → unit cost ต่ำลง',confuse:'Rightsizing = ปรับขนาด resource ให้พอดี'}
    ]},
    {id:'well-architected',title:'Well-Architected Framework',summary:'6 pillars และ clue ของแต่ละ pillar',items:[
      {name:'Operational Excellence',use:'Run, monitor และปรับปรุง operations ต่อเนื่อง',cue:'Operations as code / learn / improve',confuse:'Reliability = recover from failures'},
      {name:'Security',use:'ปกป้อง data, systems และ assets',cue:'Protect information and systems',confuse:'Reliability = availability/recovery'},
      {name:'Reliability',use:'Recover จาก failure และ meet demand',cue:'Recover + continue operating',confuse:'Performance Efficiency = ใช้ resource ให้เหมาะ'},
      {name:'Performance Efficiency',use:'เลือกและใช้ compute resources ให้มีประสิทธิภาพ',cue:'Right resource for workload',confuse:'Cost Optimization = ลดค่าใช้จ่ายที่ไม่จำเป็น'},
      {name:'Cost Optimization',use:'หลีกเลี่ยงค่าใช้จ่ายที่ไม่จำเป็น',cue:'Spend only where it adds value',confuse:'Performance Efficiency อาจช่วย cost แต่เป้าหลักคนละเรื่อง'},
      {name:'Sustainability',use:'ลด environmental impact',cue:'ลด resource waste / environmental impact',confuse:'Cost Optimization = เรื่องเงิน'}
    ]},
    {id:'migration',title:'Migration & Cloud Adoption',summary:'CAF, migration strategies และบริการ migration',items:[
      {name:'AWS CAF',use:'Framework สำหรับ cloud adoption ในมุม business/people/governance/platform/security/operations',cue:'องค์กรจะ adopt cloud อย่างไร',confuse:'Well-Architected = review workload design'},
      {name:'Rehost',use:'ย้าย workload โดยเปลี่ยนน้อย',cue:'Lift and shift',confuse:'Refactor = ปรับ architecture/code'},
      {name:'AWS Migration Hub',use:'ติดตาม migration หลาย tools แบบรวมศูนย์',cue:'Migration tracking dashboard',confuse:'Migration Evaluator = business case/assessment'},
      {name:'AWS DMS',use:'ย้าย/replicate database',cue:'Database migration + ongoing replication',confuse:'SCT = schema conversion'}
    ]},
    {id:'shared-responsibility',title:'Shared Responsibility & Compliance',summary:'แยกสิ่งที่ AWS ดูแลกับสิ่งที่ลูกค้าดูแล',items:[
      {name:'EC2',use:'ลูกค้าดูแล guest OS, patches, applications และ data',cue:'IaaS → customer manages more',confuse:'RDS/Lambda = AWS จัดการ underlying stack มากขึ้น'},
      {name:'RDS',use:'AWS จัดการ database infrastructure/maintenance หลายส่วน',cue:'Managed DB',confuse:'ลูกค้ายังดูแล data, access และ app logic'},
      {name:'AWS Artifact',use:'AWS compliance reports และ agreements',cue:'SOC/PCI reports',confuse:'AWS Config = resource configuration compliance'},
      {name:'AWS Config',use:'ติดตาม config และ evaluate rules/compliance',cue:'Resource configuration history/rules',confuse:'CloudTrail = API/account activity'}
    ]},
    {id:'iam-security',title:'IAM & Security Services',summary:'Identity, permissions, encryption และ security services',items:[
      {name:'IAM Role',use:'Temporary credentials สำหรับ workload/identity',cue:'ไม่เก็บ long-term key',confuse:'IAM User = long-term identity'},
      {name:'IAM Identity Center',use:'Workforce SSO ข้าม AWS accounts/apps',cue:'พนักงาน sign in ครั้งเดียว',confuse:'Cognito = application end-user identity'},
      {name:'AWS KMS',use:'สร้าง/ควบคุม cryptographic keys',cue:'Encryption key management',confuse:'Secrets Manager = credentials/secrets'},
      {name:'GuardDuty',use:'Managed threat detection',cue:'Suspicious activity/threat',confuse:'Inspector = vulnerabilities'},
      {name:'Inspector',use:'Vulnerability management',cue:'CVE/software vulnerability',confuse:'Security Hub = aggregate findings'},
      {name:'WAF',use:'Filter malicious HTTP/S requests',cue:'SQLi/XSS/web rules',confuse:'Shield = DDoS'}
    ]},
    {id:'compute-containers',title:'Compute & Containers',summary:'เลือก compute service จากระดับการควบคุมและ abstraction',items:[
      {name:'Amazon EC2',use:'Virtual servers พร้อม guest OS control',cue:'ต้องควบคุม OS',confuse:'Lambda = no server management'},
      {name:'AWS Lambda',use:'Event-driven serverless code',cue:'Run code without provisioning servers',confuse:'Fargate = serverless containers'},
      {name:'Amazon ECS',use:'AWS-native container orchestration',cue:'Containers ไม่ต้อง Kubernetes',confuse:'EKS = Kubernetes'},
      {name:'Amazon EKS',use:'Managed Kubernetes control plane',cue:'Kubernetes on AWS',confuse:'ECS = non-Kubernetes orchestration'},
      {name:'Elastic Load Balancing',use:'กระจาย incoming traffic',cue:'Distribute traffic',confuse:'Auto Scaling = ปรับจำนวน capacity'}
    ]},
    {id:'database-storage',title:'Database & Storage',summary:'แยก relational/NoSQL/cache และ object/block/file',items:[
      {name:'Amazon RDS',use:'Managed relational database',cue:'SQL relational + managed',confuse:'DynamoDB = NoSQL'},
      {name:'Amazon DynamoDB',use:'Managed NoSQL key-value/document',cue:'NoSQL + scale + low latency',confuse:'RDS/Aurora = relational'},
      {name:'Amazon ElastiCache',use:'Managed in-memory caching',cue:'Cache ลด database latency',confuse:'DynamoDB = database ไม่ใช่ cache'},
      {name:'Amazon S3',use:'Object storage',cue:'Objects/files/backups/static data',confuse:'EBS = block, EFS = file'},
      {name:'Amazon EBS',use:'Persistent block storage สำหรับ EC2',cue:'Block volume',confuse:'Instance Store = ephemeral'},
      {name:'Amazon EFS',use:'Managed shared file system',cue:'หลาย Linux instances mount ร่วมกัน',confuse:'EBS = block volume'}
    ]},
    {id:'networking-global',title:'Networking & Global Infrastructure',summary:'VPC, DNS, connectivity, Region/AZ และ CDN',items:[
      {name:'Amazon VPC',use:'Logically isolated virtual network',cue:'Subnets/routes/security controls',confuse:'Route 53 = DNS'},
      {name:'Amazon Route 53',use:'DNS และ traffic routing',cue:'Domain name → endpoint',confuse:'CloudFront = CDN'},
      {name:'AWS Direct Connect',use:'Dedicated private network connectivity',cue:'Dedicated circuit',confuse:'Site-to-Site VPN = encrypted over internet'},
      {name:'Availability Zone',use:'Isolated location ภายใน Region',cue:'Multi-AZ = HA',confuse:'Multi-Region = geographic DR/latency/data sovereignty'},
      {name:'Amazon CloudFront',use:'Content delivery network ผ่าน edge locations',cue:'Cache content near users',confuse:'Global Accelerator = network acceleration'}
    ]},
    {id:'monitoring-analytics',title:'Monitoring, Analytics & Integration',summary:'บริการที่ชื่อใกล้กันแต่หน้าที่ต่างกัน',items:[
      {name:'Amazon CloudWatch',use:'Metrics, logs, alarms, observability',cue:'Monitor metrics/logs',confuse:'CloudTrail = API audit'},
      {name:'AWS CloudTrail',use:'API/account activity audit history',cue:'Who did what and when',confuse:'Config = configuration history'},
      {name:'Amazon Athena',use:'Serverless SQL query บน S3',cue:'SQL on S3',confuse:'Redshift = data warehouse'},
      {name:'AWS Glue',use:'Data catalog/integration/ETL',cue:'Catalog + ETL',confuse:'Athena = query'},
      {name:'Amazon SQS',use:'Message queue',cue:'Decouple + queue',confuse:'SNS = pub/sub'},
      {name:'Amazon SNS',use:'Pub/sub notifications',cue:'Fan-out to subscribers',confuse:'SQS = queue'}
    ]},
    {id:'billing-support',title:'Billing, Pricing & Support',summary:'Pricing options, cost tools และ support resources',items:[
      {name:'On-Demand',use:'ไม่มี long-term commitment',cue:'Short/unpredictable/non-interruptible',confuse:'Spot = interruptible spare capacity'},
      {name:'Spot',use:'ส่วนลดจาก spare EC2 capacity',cue:'Interruptible + fault tolerant',confuse:'Savings Plans = commitment'},
      {name:'Savings Plans',use:'Discount แลก compute usage commitment',cue:'Steady compute commitment',confuse:'Capacity Reservation = reserve capacity'},
      {name:'AWS Budgets',use:'Threshold/forecast alerts',cue:'Alert when cost exceeds target',confuse:'Cost Explorer = analyze trends'},
      {name:'AWS Cost Explorer',use:'Analyze historical cost/usage',cue:'Cost trends/filters',confuse:'Pricing Calculator = estimate before deployment'},
      {name:'AWS Support Center',use:'Create/manage support cases',cue:'Open technical case',confuse:'re:Post = community knowledge'}
    ]}
  ]
};