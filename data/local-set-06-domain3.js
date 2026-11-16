(() => {
  const rows = window.LOCAL_SET_06_ROWS = window.LOCAL_SET_06_ROWS || [];
  rows.push(...[
  [
    "3.1",
    "A team uploads its Java application package and expects AWS to provision the web environment and coordinate deployment without designing every underlying resource manually. Which service is most suitable?",
    "ทีมอัปโหลด Java Application Package แล้วต้องการให้ AWS Provision Web Environment และช่วย Deploy โดยไม่ต้องออกแบบ Resources ทุกตัวเอง ใช้บริการใด",
    "AWS Elastic Beanstalk|AWS CloudFormation|AWS CDK|Amazon ECS",
    "0",
    "Elastic Beanstalk เป็น Application Deployment Platform ที่ช่วย Provision/Manage Environment; CloudFormation เป็น IaC Stack Engine"
  ],
  [
    "3.1",
    "Operations needs to roll back a failed infrastructure change managed as one declarative stack of IAM roles, VPCs, and subnets. Which service supplies the stack lifecycle?",
    "ฝ่าย Ops ต้อง Rollback Infrastructure Changes ที่พลาด โดย Resources เช่น IAM Roles, VPC, Subnets อยู่ใน Declarative Stack เดียว ใช้ Service ใดดูแล Stack Lifecycle",
    "AWS CloudFormation|AWS CDK|AWS CodePipeline|AWS Elastic Beanstalk",
    "0",
    "CloudFormation จัด Lifecycle ของ Infrastructure Stacks และ Rollback Updates; CDK Synthesizes Templates แต่ไม่ใช่ Stack Engine"
  ],
  [
    "3.2",
    "A travel website wants international clients to fetch cached static travel guides from a global CDN close to their location. Which AWS service should it use?",
    "เว็บท่องเที่ยวต้องการให้ลูกค้าทั่วโลกโหลด Static Travel Guides จาก Global CDN Cache ใกล้ตัว ควรใช้ Service ใด",
    "Amazon Route 53|Amazon CloudFront|AWS Region|Availability Zone",
    "1",
    "CloudFront เป็น CDN ใช้ Edge Locations ส่ง Content; Route 53 เป็น DNS Resolver/Routing Service ไม่ใช่ Cache CDN"
  ],
  [
    "3.2",
    "A trading platform needs failover to a complete application deployment in another geographic area when its original AWS Region becomes unavailable. Which design matches?",
    "Trading Platform ต้อง Failover ไป Application Deployment เต็มรูปแบบอีกพื้นที่ภูมิศาสตร์เมื่อ AWS Region เดิมล่ม ใช้ Design ใด",
    "Multi-AZ deployment|Multi-Region deployment|Edge location|Availability Zone",
    "1",
    "Multi-Region Deployment ช่วย Disaster Recovery เมื่อ Region ล่ม ส่วน Multi-AZ ช่วยภายใน Region เดิม"
  ],
  [
    "3.3",
    "A security lab requires virtual machines whose guest OS packages, drivers, and background services it can control directly. Which AWS compute service fits?",
    "Security Lab ต้องการ Virtual Machines ที่ควบคุม Guest OS Packages, Drivers และ Background Services ได้เอง Compute Service ใดเหมาะ",
    "AWS Lambda|AWS Fargate|Amazon EC2|AWS Batch",
    "2",
    "EC2 ให้ควบคุม Guest Operating System และติดตั้ง Software เอง ต่างจาก Lambda/Fargate ที่เป็น Managed Compute"
  ],
  [
    "3.3",
    "An application needs an AWS-native orchestrator to maintain healthy container replicas, while a second task should run only when S3 uploads arrive. Which TWO services match? (Select TWO.)",
    "Application ต้องมี AWS-native Orchestrator รักษา Container Replicas และอีกงานหนึ่งรันเฉพาะเมื่อมี S3 Upload Event ข้อใดสอง Service ตรงงาน",
    "Amazon ECS|AWS Fargate|AWS Lambda|Amazon EKS|AWS Batch",
    "0,2",
    "ECS เป็น Container Orchestration แบบ AWS-native สำหรับ Replicas/Services ส่วน Lambda ใช้ Event-driven Functions; Fargate เป็น Container Compute"
  ],
  [
    "3.3",
    "A software vendor relies on Kubernetes Pods and Deployments, but wants AWS to manage Kubernetes control-plane availability. Which service meets this need?",
    "Software Vendor ใช้ Kubernetes Pods/Deployments และอยากให้ AWS ดูแล Kubernetes Control Plane Availability บริการใดตรงงาน",
    "Amazon ECS|Amazon EKS|AWS Fargate|Amazon EC2",
    "1",
    "EKS เป็น Managed Kubernetes Control Plane โดยยังใช้ Kubernetes API/Pods; ECS ไม่ได้ใช้ Kubernetes"
  ],
  [
    "3.3",
    "An analytics group submits thousands of independent compute jobs, wants them placed in queues, and needs managed scheduling as capacity becomes available. Which service fits?",
    "ทีม Analytics ส่งงาน Compute อิสระหลายพัน Jobs ต้องมี Queues และ Managed Scheduling เมื่อ Capacity พร้อม ควรใช้ Service ใด",
    "AWS Batch|AWS Step Functions|Amazon ECS|AWS Lambda",
    "0",
    "AWS Batch จัด Job Queues/Scheduling/Compute สำหรับ Batch Workloads; Step Functions ทำ Multi-step Workflow"
  ],
  [
    "3.4",
    "An application is migrating a document-oriented MongoDB-compatible workload to AWS and needs a managed database designed for JSON-like documents. Which service fits?",
    "Application ย้าย MongoDB-compatible Document Workload ขึ้น AWS และต้องการ Managed Database สำหรับ JSON-like Documents ควรใช้ Service ใด",
    "Amazon DynamoDB|Amazon DocumentDB|Amazon Neptune|Amazon RDS",
    "1",
    "DocumentDB รองรับ Document Database APIs ที่เข้ากันได้กับ MongoDB; DynamoDB เป็น AWS NoSQL Key-value/Document Service แต่ไม่ได้แทน MongoDB API ตรง ๆ"
  ],
  [
    "3.4",
    "A fraud team must query how transactions connect accounts through chains of shared devices and addresses. Which managed database is designed for these relationships?",
    "Fraud Team ต้อง Query ความสัมพันธ์ที่เชื่อม Transactions กับ Accounts ผ่าน Shared Devices และ Addresses หลายชั้น ใช้ Database ใด",
    "Amazon Redshift|Amazon DynamoDB|Amazon Neptune|Amazon DocumentDB",
    "2",
    "Neptune เป็น Graph Database สำหรับ Node/Edge Traversals และ Multi-hop Relationships; Redshift ทำ Analytics SQL"
  ],
  [
    "3.4",
    "A company requires a managed MySQL-compatible relational database designed for high availability and scalable performance. Which AWS database matches this combination?",
    "บริษัทต้องการ Managed Relational Database ที่เข้ากันได้กับ MySQL ออกแบบให้ High Availability และ Performance Scale ได้ ควรพิจารณาอะไร",
    "Amazon Aurora|Amazon DynamoDB|Amazon Redshift|Amazon DocumentDB",
    "0",
    "Aurora เป็น AWS-managed Relational Engine ที่เข้ากันได้กับ MySQL/PostgreSQL และออกแบบด้าน Availability/Performance; DynamoDB เป็น NoSQL"
  ],
  [
    "3.5",
    "An EC2 instance needs an inbound rule for port 443 and a stateful connection filter at its network interface. Which VPC control applies?",
    "EC2 ต้องเปิด Inbound Port 443 และใช้ Stateful Connection Filter ที่ Network Interface ควรใช้ VPC Control ใด",
    "Network ACL|Security group|AWS WAF|AWS Shield",
    "1",
    "Security Group เป็น Stateful Firewall ระดับ ENI/Instance; NACL เป็น Stateless Filter ระดับ Subnet"
  ],
  [
    "3.5",
    "A private-subnet application must download software updates from public repositories but must not be directly reachable by unsolicited internet connections. Which component enables this path?",
    "Application ใน Private Subnet ต้อง Download Software Updates จาก Public Repositories แต่ไม่เปิดรับ Unsolicited Internet Connections ตรง ๆ ใช้ Component ใด",
    "VPC endpoint|Internet Gateway|NAT Gateway|AWS Direct Connect",
    "2",
    "NAT Gateway รองรับ Outbound Internet จาก Private Subnet โดยไม่มี Public IP ของ Instance; VPC Endpoint สำหรับ AWS Services แบบ Private"
  ],
  [
    "3.5",
    "A company needs a dedicated connection into AWS from its data center and a central hub that interconnects many VPCs. Which TWO services address those separate goals? (Select TWO.)",
    "บริษัทต้องการ Dedicated Connection จาก Data Center เข้า AWS และ Central Hub เชื่อม VPC หลายวง ข้อใดสอง Services ตรงคนละเป้าหมาย",
    "AWS Transit Gateway|AWS Direct Connect|Internet Gateway|AWS Site-to-Site VPN|NAT Gateway",
    "0,1",
    "Direct Connect ให้ Dedicated Network Link กับ AWS; Transit Gateway เป็น Hub เชื่อมหลาย VPC/Networks"
  ],
  [
    "3.6",
    "A fleet of Linux application instances in different AZs needs to mount and modify files on the same NFS file system simultaneously. Which service is designed for that?",
    "Linux Application Instances ในหลาย AZ ต้อง Mount และแก้ Files บน NFS File System เดียวพร้อมกัน Service ใดเหมาะ",
    "Amazon EFS|Amazon EBS|Amazon FSx for Windows File Server|AWS Storage Gateway",
    "0",
    "EFS เป็น Managed Shared NFS File System ที่ EC2 หลาย Instances เข้าถึงร่วมกันได้; EBS เป็น Block Volume"
  ],
  [
    "3.6",
    "An organization wants centralized policies to schedule and retain backups of supported RDS, EBS, and other AWS resources. Which service manages these policies?",
    "องค์กรต้องการ Centralized Policies เพื่อ Schedule และ Retain Backups ของ RDS, EBS และ Resources ที่รองรับ ใช้ Service ใดจัด Policies",
    "Amazon S3|AWS Backup|AWS DataSync|AWS Storage Gateway",
    "1",
    "AWS Backup เป็น Centralized Backup Policy/Jobs สำหรับ Supported Resources; DataSync เน้น Transfer Data"
  ],
  [
    "3.6",
    "Data access patterns are unpredictable, so a team wants S3 to automatically optimize storage tiers for frequently and infrequently accessed objects. Which class should it choose?",
    "การเข้าถึงข้อมูลคาดเดาไม่ได้ ทีมต้องการให้ S3 ปรับ Storage Tiers อัตโนมัติสำหรับ Objects ที่ถูกอ่านบ่อยและไม่บ่อย ควรเลือก Class ใด",
    "Amazon S3 Standard-IA|Amazon S3 Glacier Deep Archive|Amazon S3 Intelligent-Tiering|Amazon EBS",
    "2",
    "S3 Intelligent-Tiering ปรับระดับ Storage ตาม Access Patterns อัตโนมัติ; Standard-IA เหมาะข้อมูลที่คาดว่าจะอ่านไม่บ่อย"
  ],
  [
    "3.7",
    "A data team must transform incoming CSV datasets, run ETL jobs, and register schemas in a catalog shared by analytics tools. Which service is designed for the job?",
    "ทีม Data ต้อง Transform CSV Datasets รัน ETL Jobs และ Register Schemas ใน Catalog ให้ Analytics Tools ใช้ร่วมกัน Service ใดตรงงาน",
    "Amazon Athena|AWS Glue|Amazon Redshift|Amazon Quick Sight",
    "1",
    "Glue ให้ ETL/Data Integration และ Data Catalog; Athena Query S3 ด้วย SQL และ Quick Sight ทำ Dashboards"
  ],
  [
    "3.7",
    "A customer support app needs to generate natural-language response drafts through pretrained foundation models, without training a new model. Which service is the simplest managed route?",
    "Customer Support App ต้องสร้าง Draft Responses ด้วย Pretrained Foundation Models โดยไม่ Train Model ใหม่เอง ใช้ Managed Service ใดเหมาะ",
    "Amazon SageMaker AI|Amazon Lex|Amazon Bedrock|Amazon Polly",
    "2",
    "Bedrock ให้ Managed APIs สำหรับ Foundation Models; SageMaker AI เน้นสร้าง/ฝึก/Deploy ML Models"
  ],
  [
    "3.8",
    "A trading application emits a continuous high-throughput ordered event stream to downstream consumers that may replay records within retention. Which service fits?",
    "Trading Application ส่ง Ordered Event Stream ปริมาณสูงต่อเนื่องให้ Consumers ที่อาจ Replay Records ภายใน Retention ใช้ Service ใด",
    "Amazon SNS|Amazon SQS|Amazon Kinesis Data Streams|Amazon EventBridge",
    "2",
    "Kinesis Data Streams เป็น Streaming Service มี Shards/Retention/Consumer Replay; SNS/SQS ใช้ Messaging Patterns ต่างกัน"
  ],
  [
    "3.8",
    "Business events must first be routed to matching systems, and a selected system then needs a multi-step stateful approval workflow. Which TWO services match these steps? (Select TWO.)",
    "Business Events ต้องถูก Route ไป Systems ตาม Pattern ก่อน จากนั้นบาง System ต้องทำ Multi-step Stateful Approval Workflow ข้อใดสอง Services ตรงงาน",
    "Amazon EventBridge|Amazon SNS|AWS Step Functions|Amazon SQS|Amazon Kinesis Data Streams",
    "0,2",
    "EventBridge Route Events ตาม Matching Patterns ส่วน Step Functions คุม Multi-step State Machine พร้อม Retries/Branching"
  ],
  [
    "3.8",
    "A bank wants to send transactional email receipts to customers from its software, not fan out internal service events. Which AWS messaging service is intended for email delivery?",
    "ธนาคารต้องส่ง Transactional Email Receipts ให้ลูกค้าจาก Application ไม่ได้ต้องการ Fan-out Events ภายใน ระบบส่งข้อความใดเหมาะ",
    "Amazon SNS|Amazon SES|Amazon EventBridge|Amazon SQS",
    "1",
    "Amazon SES ออกแบบเพื่อส่ง Email จาก Application ที่ Scale ได้; SNS เป็น Pub/Sub Notifications"
  ]
]);
})();
