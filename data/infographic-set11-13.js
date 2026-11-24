// CLF-C02 Info Library | Set 11–13 infographic coverage, November 2026.
// Enrich the existing ten cards in place, then append three new focused study cards.
(() => {
  const pages=window.CLF_INFOGRAPHIC_PAGES;
  if (!Array.isArray(pages)) return;
  const section=(pageNum,title,items)=>{
    const page=pages.find(p=>p.page===pageNum);
    if(!page)throw Error('Missing infographic page '+pageNum);
    let item=page.sections.find(s=>s.title===title);
    if(!item){item={title,items:[]};page.sections.push(item);}
    for(const line of items)if(!item.items.includes(line))item.items.push(line);
  };
  const tag=(num,...tags)=>{
    const page=pages.find(p=>p.page===num);
    if(page)for(const t of tags)if(!page.tags.includes(t))page.tags.push(t);
  };
  // Domain 1
  section(1,'Costs & Licensing (Set 11–13)',[
    'CapEx = ลงทุนซื้อ Hardware ก่อนใช้งาน; Variable expense = ค่าใช้จ่ายขึ้นลงตาม Usage; Pay-as-you-go = วิธีคิดค่าบริการตามการใช้',
    'TCO รวม Hardware, Software, Facilities, Electricity, Personnel และ Maintenance — มากกว่า CapEx อย่างเดียว',
    'BYOL นำ Software License เดิมมาใช้ได้เมื่อ Vendor Terms อนุญาต; License-included คือสิทธิ์ใช้ Software รวมอยู่ในราคา',
    'Scalability = รองรับการเติบโต; Elasticity = เพิ่มลด Capacity ตาม Demand; Durability = ข้อมูลยังคงอยู่; Fault tolerance = ทำงานต่อเมื่อ Component เสีย'
  ]); tag(1,'TCO','BYOL','CapEx');
  section(2,'Pillar Decision Clues (Set 11–13)',[
    'Stop guessing capacity เป็น Design Principle ของ Reliability; การออกแบบรองรับ Failure/DR Recovery อยู่ใน Reliability',
    'Latency, Throughput, Response-time Targets → Performance Efficiency; Runbooks, Change Management, Learn from incidents → Operational Excellence',
    'Credentials/Least Privilege → Security; Unnecessary Spend → Cost Optimization; Environmental Impact → Sustainability',
    'AWS Well-Architected Tool ใช้ Review Workload ตาม 6 Pillars ส่วน AWS CAF ใช้ Assess Organizational Cloud Adoption'
  ]); tag(2,'Stop guessing capacity','Well-Architected Tool');
  // Domain 2
  section(3,'EC2 vs RDS vs Lambda vs Fargate',[
    'EC2: ลูกค้าต้อง Patch Guest OS และ Software/DB Engines ที่ติดตั้งเอง; AWS ดูแล Hosts/Hypervisor',
    'RDS: AWS ดูแล Managed Database Infrastructure ส่วนลูกค้ายังคุม Data, Database Users และ Logical Access',
    'Lambda/Fargate: AWS ดูแล Underlying Compute/Hosts มากกว่า EC2; ลูกค้ายังคุม App Code, Images (เมื่อเกี่ยวข้อง), IAM และ Data',
    'AWS Provider Compliance Report ไม่ทำให้ Customer Application ผ่าน Compliance อัตโนมัติ; ตรวจ Service Eligibility, Agreements และ Customer Controls'
  ]);tag(3,'Compliance','Fargate');
  section(4,'Identity / Encryption / Auditing',[
    'Employee SSO → IAM Identity Center; Customer App Login → Cognito; EC2 Temporary AWS Permissions → IAM Role',
    'External S3 Access / Unused Permissions → IAM Access Analyzer; Share Supported Resources Across Accounts → AWS RAM; Managed AD → Directory Service',
    'TLS Certificate for ALB → ACM; Managed Encryption Keys → KMS; Customer-controlled Dedicated HSM → CloudHSM; Stored Passwords → Secrets Manager',
    'AWS Provider Audit Reports → Artifact; Customer Audit Evidence Assessment → Audit Manager; Resource Config Rules → Config',
    'GuardDuty = Detect Threat; Detective = Investigate Related Activities; Security Hub = Aggregate Findings',
    'WAF = Filter HTTP Path/Header Rules; Shield = DDoS; Firewall Manager = Apply Security Policies Across Accounts'
  ]);tag(4,'Audit Manager','Cognito','Detective','RAM','ACM');
  // Domain 3
  section(5,'Image, Capacity & Managed Deploy',[
    'ECR = Container Image Registry; ECS/EKS = Container Orchestrator; Fargate = Serverless Container Compute',
    'EC2 T Family = CPU Credits / Low Baseline + Bursts; Compute Optimizer = แนะนำ Instance Sizes จาก Utilization; EC2 Auto Scaling = ปรับจำนวน Instance',
    'AWS Batch = Queue/Schedule Container Batch Jobs; Elastic Beanstalk = Deploy App และช่วย Manage Environment',
    'CLI = Commands on Workstation; CloudShell = Browser Terminal; CloudFormation = Declarative Infrastructure Templates; CDK = TypeScript/Python → CloudFormation',
    'Service Catalog = Approved IT Products/Portfolios ให้ Self-service Provision; Systems Manager = Operate/Automate/Patch Managed Nodes'
  ]);tag(5,'ECR','Service Catalog','CDK','Compute Optimizer');
  section(6,'Storage Classes, Recovery & Databases',[
    'S3 Lifecycle = ย้าย Object ตามอายุ; Intelligent-Tiering = ปรับ Storage Tier ตาม Access Pattern; Glacier Deep Archive = Long-term Archive',
    'Storage Gateway = Hybrid On-prem File/Volume/Tape Access; DataSync = Online File Transfer/Sync; Snowball Edge = Offline Device Transfer',
    'AWS Backup = Centralized Backup Plans; Elastic Disaster Recovery = Continuous Server Replication/Recovery',
    'FSx for Windows = SMB + AD; EFS = Shared NFS; EBS = Persistent Block; Instance Store = Temporary Local',
    'Neptune = Graph Relationships; DocumentDB = MongoDB-compatible Documents; Redshift = Data Warehouse; Aurora = Managed Relational'
  ]);tag(6,'Lifecycle','DataSync','Snowball','DRS','Neptune');
  section(7,'VPC Routing & Connection Clues',[
    'VPC = Regional; Subnet อยู่ใน AZ เดียว; Multi-AZ ทน AZ Failure; Multi-Region ใช้รับมือ Region Outage',
    'Internet Gateway = VPC Internet Route; NAT Gateway = Private Subnet Outbound Internet; VPC Endpoint = Private S3/AWS Service Access',
    'Network ACL = Stateless Subnet Allow/Deny; Security Group = Stateful ENI/Instance Allow Rules',
    'Client VPN = Remote Laptop/User; Site-to-Site VPN = Encrypted Network Tunnel; Direct Connect = Dedicated Link; Transit Gateway = Network Hub',
    'PrivateLink = Private Endpoint Service Connectivity; Route 53 = DNS; CloudFront = CDN; Global Accelerator = Static Global IP/Regional Endpoint Health'
  ]);tag(7,'NAT Gateway','PrivateLink','Client VPN','Transit Gateway');
  section(8,'Auditing & Governance Tools',[
    'CloudTrail = Who Called API?; Config = Resource Configuration History/Rules; CloudWatch = Workload Metrics/Logs/Alarms',
    'Audit Manager = Collect/Organize Customer Assessment Evidence; Artifact = AWS SOC/ISO Reports/Agreements',
    'Security Hub = Aggregate Findings; Detective = Investigate Entity Relationships; GuardDuty = Detect Threats',
    'Trusted Advisor = Best Practice Checks; Service Quotas = Limits + Increase Requests; AWS Health = Account-specific Service Events'
  ]);tag(8,'Audit Manager','Service Quotas','Security Hub');
  section(9,'Data Analytics, NLP & Integration',[
    'Athena = Serverless SQL on S3; Glue = ETL/Data Catalog; EMR = Spark/Hadoop Big Data; OpenSearch = Indexed Log Search',
    'AWS Quick / Quick Sight (เดิม QuickSight) = Business Dashboards/Analytics; Redshift = Warehouse',
    'Transcribe = Speech→Text; Polly = Text→Speech; Comprehend = NLP Sentiment/Entities; Textract = Scanned Document Extraction',
    'Lex = Intent/Slot Chatbot; Amazon Q Business = Enterprise AI Assistant with Connected Content',
    'SNS = Fan-out; SQS = Queue; EventBridge = Route Events by Rules; Step Functions = Workflow State Machine',
    'IoT Core = Device Connectivity/Telemetry; SES = Managed Transactional Email'
  ]);tag(9,'EMR','OpenSearch','Transcribe','Amazon Q','SES');
  // QuickSight naming has evolved; retain former name as a test cue.
  const p9=pages.find(p=>p.page===9);
  if(p9)for(const s of p9.sections)s.items=s.items.map(line=>line.replace(/Quick ?Sight|QuickSight/g,'AWS Quick Sight (เดิม QuickSight)'));
  // Domain 4
  section(10,'Capacity, Pricing & Billing Traps',[
    'On-Demand Capacity Reservations = Reserve EC2 Capacity in AZ; Savings Plans = Spend Commitment Discount ไม่ Guarantee Capacity',
    'Reserved Instances = Term-based Discount (บางแบบมี Capacity Benefit); Spot = Interruptible Spare Capacity; Dedicated Hosts = Host-level Visibility',
    'Dedicated Instances = Isolated Hardware Tenancy แต่ไม่ให้ Dedicated Host-level Control สำหรับ Licensing',
    'Consolidated Billing = รวม Bill และ Eligible Discounts; IAM Boundaries ของ Member Accounts ยังแยกกัน; Cost Allocation Tags = Product/Team Attribution',
    'Compute Optimizer = Rightsizing Recommendation; Cost Anomaly Detection = Unexpected Spike; Budgets = Forecast/Actual Threshold',
    'License Manager = ติดตาม Software License; Service Quotas = Request Higher Limits; Professional Services = AWS Consulting; APN = Find Partners'
  ]);tag(10,'Capacity Reservations','License Manager','Consolidated Billing');

  const extras=[
    {page:11,title:'Migration — 7Rs & Decision Map',tags:['7Rs','Migration','CAF','SCT','DMS','TCO'],sections:[
      {title:'Choose the migration strategy',items:[
        'Rehost: ย้าย VM/App ขึ้น EC2 แบบ Lift-and-shift ไม่ต้องแก้ Code มาก',
        'Replatform: เปลี่ยน Hosting Platform บางส่วน เช่น Self-managed MySQL VM → Amazon RDS',
        'Refactor: ปรับ Code/Architecture มาก เช่น Monolith → Cloud-native Microservices',
        'Repurchase: ยกเลิก App เดิมแล้วซื้อ SaaS ทดแทน เช่น Self-hosted Helpdesk → SaaS',
        'Relocate: ย้าย Compatible Virtualization/VM Environment โดยเปลี่ยน App น้อย',
        'Retain: เก็บระบบเดิมที่ยังต้องใช้ไว้ On-premises; Retire: ปิด App ที่ไม่มีผู้ใช้'
      ]},
      {title:'Choose the supporting tool',items:[
        'Application Discovery Service = Server Inventory/Dependencies; Migration Evaluator = Data-driven Business Case/TCO',
        'Application Migration Service = Replicate/Lift-and-shift Servers; Migration Hub = Track Migration Progress',
        'AWS SCT = Convert Database Schema/Code; AWS DMS = Move/Replicate Database Records',
        'AWS CAF = Six Organizational Perspectives (Business/People/Governance/Platform/Security/Operations)'
      ]},
      {title:'Frequently confused scenarios',items:[
        'VM → EC2 แทบไม่แก้ = Rehost แต่ Self-managed DB → RDS = Replatform แม้ SQL ยังเหมือนเดิม',
        'New SaaS Product ไม่ใช่การ Replatform App เดิม แต่เป็น Repurchase',
        'Finance/TCO/Business Case → Migration Evaluator ไม่ใช่ Application Discovery Service'
      ]}
    ]},
    {page:12,title:'Additional AWS Services — Set 11–13',tags:['Amplify','Frontend','AI','ECR','EMR','OpenSearch','IoT','End-user'],sections:[
      {title:'Frontend, API & End-user Services',items:[
        'AWS Amplify = Build/Deploy Frontend Web/Mobile หรือ Fullstack Apps; Hosting ใช้ Git-based CI/CD และ CDN; Connect Auth/Data/Storage Backends',
        'Amplify vs Cognito vs API Gateway: Frontend/fullstack workflow vs User Sign-in vs Managed HTTP/REST API',
        'Amplify vs Elastic Beanstalk: Frontend App Hosting/Integration vs Managed Server-side Application Environment',
        'AWS AppSync = Managed GraphQL APIs/Real-time Data; Amazon Connect = Cloud Contact Center Voice/Chat',
        'WorkSpaces = Full Virtual Desktop; AppStream 2.0 = Stream Desktop App; WorkSpaces Secure Browser = Isolated Web Browser',
        'AWS IoT Core = IoT Device Connection/Telemetry; Amazon SES = Application Email Delivery'
      ]},
      {title:'Analytics, Search, AI & ML',items:[
        'Amazon EMR = Apache Spark/Hadoop Big Data Processing; OpenSearch Service = Indexed Log/Document Search',
        'Athena = SQL on S3; Glue = ETL/Data Catalog; AWS Quick / Quick Sight = BI Visualization/AI Analytics',
        'Transcribe = Audio→Text; Polly = Text→Audio; Comprehend = Text Sentiment/Entities; Textract = Scanned Document Text',
        'Lex = Intents/Slots Chatbot; Amazon Q Business = Generative AI Assistant for Enterprise Content'
      ]},
      {title:'Compute, Network & Admin Tools',items:[
        'ECR = Container Image Registry; ECS/EKS = Orchestrators; Fargate = Serverless Compute',
        'EC2 T Family = Burstable CPU Credits; Compute Optimizer = Size Recommendations; Auto Scaling = Change Capacity',
        'Service Catalog = Approved Portfolios; Systems Manager = Patch/Run Command; CLI vs CloudShell vs CloudFormation vs CDK',
        'Client VPN = User VPN; PrivateLink = Private Endpoint Service; Transit Gateway = Hub; Global Accelerator = Static Global IPs'
      ]}
    ]},
    {page:13,title:'Pricing, Licensing & Billing Traps',tags:['Savings Plans','Capacity Reservations','BYOL','Billing','Licensing','Cost'],sections:[
      {title:'EC2 prices and physical placement',items:[
        'On-Demand = No Long-term Discount Commitment; Spot = Discounted Spare Capacity with Interruptions',
        'Savings Plans = Commit Hourly Spend for a Discount; Unused Hours Do Not Automatically Reduce Your Commitment',
        'On-Demand Capacity Reservations = Reserve Capacity in a Specific AZ (not itself a Discount)',
        'Reserved Instances = Term-based Pricing Benefits; Dedicated Hosts = Host-level Visibility/Licensing; Dedicated Instances = Hardware Isolation',
        'BYOL Requires Vendor License Eligibility; AWS License Manager Tracks Usage/Rules'
      ]},
      {title:'Billing, attribution and monitoring',items:[
        'Consolidated Billing = One Payer + Eligible Volume/Commitment Sharing; Does NOT Merge IAM/Root Boundaries',
        'Cost Allocation Tags = Attribute Costs to Team/Product; Cost Explorer = Historical Trends; CUR/Data Exports = Raw Usage/Cost Details',
        'AWS Budgets = Budget Threshold/Forecast Alerts; Cost Anomaly Detection = Unusual Spending Pattern',
        'Compute Optimizer = Right-size Recommendations; Data Transfer Out = Check Egress Pricing; Pricing Calculator = Estimate Before Deploy'
      ]},
      {title:'Support and organizational services',items:[
        'Support Center = Open AWS Support Case; re:Post = Community Q&A; AWS Health = Events Affecting Account Resources',
        'APN = Find Consulting/Technology Partners; AWS Professional Services = AWS Consulting Engagement; Prescriptive Guidance = AWS Patterns/Playbooks',
        'Service Quotas = View/Request Supported Limits; Trusted Advisor = AWS Best Practices'
      ]}
    ]}
  ];
  for(const page of extras)if(!pages.some(p=>p.page===page.page))pages.push(page);
})();
