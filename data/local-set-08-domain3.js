(() => {
  const rows=window.LOCAL_SET_08_ROWS=window.LOCAL_SET_08_ROWS||[];
  rows.push(...[
  [
    "3.1",
    "A company must recreate the same set of AWS resources across development and production with minimal manual differences. Which service should define the infrastructure as templates?",
    "บริษัทต้องสร้าง AWS Resources แบบเดียวกันใน Development และ Production โดยลดความต่างจากการตั้งค่ามือ ควรใช้บริการใดนิยาม Infrastructure ด้วย Templates",
    "AWS CloudFormation|AWS CloudShell|Amazon CloudWatch|AWS Systems Manager",
    "0",
    "CloudFormation ใช้ Infrastructure as Code เพื่อสร้าง Resources แบบ Repeatable ต่างจาก CloudShell ที่เป็น Terminal และ CloudWatch ที่เน้น Monitoring"
  ],
  [
    "3.1",
    "A team needs a browser-based tool for occasional manual AWS tasks and a service for repeatable infrastructure deployment. Which TWO fit these distinct needs? (Select TWO.)",
    "ทีมต้องการเครื่องมือผ่าน Browser สำหรับคำสั่ง AWS ชั่วคราว และบริการอีกตัวสำหรับ Deploy Infrastructure ซ้ำแบบมาตรฐาน บริการสองตัวใดเหมาะ",
    "AWS CloudShell|AWS CloudFormation|Amazon CloudWatch|AWS Config|AWS CloudTrail",
    "0,1",
    "CloudShell ให้ Command-line Environment ผ่าน Browser ส่วน CloudFormation ใช้ Templates ทำ Infrastructure Deployment ซ้ำได้"
  ],
  [
    "3.2",
    "A financial application must remain available if one independent data-center location within a Region fails. What should the company distribute resources across?",
    "Financial Application ต้องให้บริการต่อแม้ Data Center Location แห่งหนึ่งใน Region มีปัญหา ควรกระจาย Resources ระหว่างอะไร",
    "Edge location|AWS Region|Availability Zone|Multi-Region deployment",
    "2",
    "Availability Zones เป็นพื้นที่แยกความเสี่ยงภายใน Region จึงเหมาะกับ High Availability ระดับ Region ต่างจาก Edge Locations ที่ใช้ Content Delivery"
  ],
  [
    "3.2",
    "A company has legal requirements to keep customer data within a specific geographic area. Which AWS infrastructure choice is MOST relevant?",
    "บริษัทต้องเก็บ Customer Data อยู่ภายในพื้นที่ภูมิศาสตร์ตามข้อกำหนดกฎหมาย การเลือก Infrastructure ใดสำคัญที่สุด",
    "Availability Zone|AWS Region|Edge location|Amazon CloudFront",
    "1",
    "AWS Region เป็นพื้นที่ภูมิศาสตร์ที่บริษัทเลือก Deploy และจัดเก็บข้อมูลให้ตรง Data Residency ส่วน AZ เป็นการแบ่งภายใน Region"
  ],
  [
    "3.3",
    "A startup wants to run a small background function only when an order arrives, without maintaining servers. Which compute service fits?",
    "Startup ต้องรัน Background Function เมื่อมี Order ใหม่เท่านั้น โดยไม่ดูแล Servers ควรใช้ Compute Service ใด",
    "Amazon EC2|AWS Lambda|AWS Batch|Amazon ECS",
    "1",
    "Lambda เรียกใช้ Function แบบ Event-driven และคิดค่าตาม Usage ต่างจาก EC2 ที่ต้องจัดการ Instance และ Batch ที่เน้น Scheduled/Queued Jobs"
  ],
  [
    "3.3",
    "An organization already operates Kubernetes manifests and wants managed Kubernetes control-plane operations. Which compute service should it choose?",
    "องค์กรมี Kubernetes Manifests อยู่แล้ว และต้องการให้ AWS ดูแล Kubernetes Control Plane ควรใช้บริการใด",
    "Amazon ECS|AWS Fargate|Amazon EKS|AWS Elastic Beanstalk",
    "2",
    "Amazon EKS เป็น Managed Kubernetes ส่วน ECS เป็น Container Orchestrator แบบ AWS-native และ Fargate เป็น Compute สำหรับ Containers"
  ],
  [
    "3.3",
    "A commerce site wants AWS to add instances as demand increases and spread HTTP requests among healthy instances. Which TWO services perform these distinct roles? (Select TWO.)",
    "เว็บไซต์ขายของต้องให้ AWS เพิ่มจำนวน Instances เมื่อ Traffic เพิ่ม และกระจาย HTTP Requests ไปยัง Healthy Instances สองบริการใดทำหน้าที่นี้",
    "EC2 Auto Scaling|AWS Lambda|Elastic Load Balancing|AWS Batch|AWS Fargate",
    "0,2",
    "EC2 Auto Scaling ปรับจำนวน EC2 Instances ส่วน Elastic Load Balancing กระจาย Requests ไปยัง Targets ที่ Healthy"
  ],
  [
    "3.3",
    "A business wants to run container tasks with Amazon ECS but avoid managing a fleet of EC2 hosts. Which compute option supports this?",
    "บริษัทต้องรัน Container Tasks ด้วย ECS แต่ไม่ต้องดูแล EC2 Hosts ใช้ตัวเลือก Compute ใด",
    "Amazon EC2|AWS Fargate|Amazon EKS|AWS Batch",
    "1",
    "Fargate เป็น Serverless Compute สำหรับ ECS และ EKS Containers ไม่ต้องจัดการ Host Instances โดยตรง ต่างจาก EC2 Launch Type"
  ],
  [
    "3.4",
    "An application stores relationships among people, accounts and transactions and frequently traverses those connections. Which database is designed for this?",
    "Application เก็บความสัมพันธ์ระหว่าง People Accounts และ Transactions และต้องไล่ Connections ระหว่างข้อมูลบ่อย ๆ Database ใดออกแบบมาเพื่องานนี้",
    "Amazon DocumentDB|Amazon DynamoDB|Amazon Neptune|Amazon RDS",
    "2",
    "Neptune เป็น Graph Database เหมาะกับการ Query Relationships ต่างจาก DocumentDB ที่เน้น Documents และ RDS ที่เป็น Relational Database"
  ],
  [
    "3.4",
    "A global service needs an AWS-managed relational database compatible with PostgreSQL, rather than a key-value store. Which service is the better fit?",
    "Global Service ต้องการ Managed Relational Database ที่ Compatible กับ PostgreSQL ไม่ใช่ Key-value Store ควรเลือกใด",
    "Amazon DynamoDB|Amazon Aurora|Amazon ElastiCache|Amazon DocumentDB",
    "1",
    "Aurora รองรับ PostgreSQL-Compatible Relational Databases ขณะที่ DynamoDB เป็น NoSQL และ ElastiCache เป็น In-memory Cache"
  ],
  [
    "3.4",
    "A storefront repeatedly reads the same product records and wants to reduce database read load without changing its source of truth. Which service is intended for in-memory caching?",
    "Storefront อ่าน Product Records เดิมซ้ำบ่อยและต้องการลด Database Read Load โดย Database ยังเป็น Source of Truth ควรใช้บริการใด",
    "Amazon RDS|Amazon DynamoDB|Amazon ElastiCache|Amazon Redshift",
    "2",
    "ElastiCache ให้ In-memory Cache ลด Latency และภาระ Read ของ Database ไม่ใช่ Database หลักหรือ Data Warehouse"
  ],
  [
    "3.5",
    "A private subnet hosts instances that must download software updates from public repositories but accept no direct incoming internet connections. Which component is used for outbound internet access?",
    "Private Subnet มี Instances ที่ต้องดาวน์โหลด Updates จาก Internet แต่ไม่รับ Inbound Connections โดยตรง ควรใช้ Component ใด",
    "Internet Gateway|VPC endpoint|NAT Gateway|AWS Direct Connect",
    "2",
    "NAT Gateway ช่วยให้ Private Subnet เริ่ม Outbound Connections ไป Internet โดยไม่เปิดให้ Internet เริ่มเข้าหา Instance โดยตรง"
  ],
  [
    "3.5",
    "A private workload needs network access to S3 without sending traffic over the public internet, and a company needs an encrypted tunnel to AWS over its existing internet link. Which TWO services satisfy these needs? (Select TWO.)",
    "Private Workload ต้องเข้าถึง S3 แบบ Private และบริษัทต้องเชื่อมเครือข่าย On-premises กับ AWS ผ่าน Encrypted Tunnel บน Internet เดิม บริการใดสองตัวตอบโจทย์",
    "VPC endpoint|NAT Gateway|AWS Direct Connect|AWS Site-to-Site VPN|Internet Gateway",
    "0,3",
    "VPC Endpoint เข้าถึง AWS Services แบบ Private ส่วน Site-to-Site VPN สร้าง Encrypted Tunnel ผ่าน Internet จาก On-premises"
  ],
  [
    "3.5",
    "A company wants a hub that connects many VPCs and its on-premises network, reducing point-to-point connections. Which service is designed for this?",
    "บริษัทต้องการ Hub เชื่อม VPCs หลายตัวกับ On-premises Network ลดการเชื่อมแบบ Point-to-point ควรใช้บริการใด",
    "AWS Transit Gateway|AWS Direct Connect|Amazon Route 53|VPC endpoint",
    "0",
    "Transit Gateway เป็น Network Hub เชื่อม VPCs และ Networks หลายตัว Direct Connect เป็น Dedicated Connection ไป AWS ไม่ใช่ Hub เอง"
  ],
  [
    "3.6",
    "A research team needs multiple Linux EC2 instances to use one shared file system concurrently. Which storage service fits?",
    "ทีมวิจัยมี Linux EC2 หลาย Instances และต้องใช้ Shared File System เดียวพร้อมกัน Storage ใดเหมาะ",
    "Amazon EBS|Amazon S3|Amazon EFS|Instance store",
    "2",
    "EFS ให้ Shared File System ที่ Mount จากหลาย Instances ส่วน EBS เป็น Block Volumes และ S3 เป็น Object Storage"
  ],
  [
    "3.6",
    "An application requires low-latency persistent block storage attached to an EC2 instance. Which service should it use?",
    "Application ต้องการ Persistent Block Storage แบบ Latency ต่ำที่ Attach กับ EC2 ควรใช้บริการใด",
    "Amazon S3|Amazon EBS|Amazon EFS|AWS Storage Gateway",
    "1",
    "EBS เป็น Persistent Block Storage สำหรับ EC2 ไม่ใช่ Object Storage หรือ Network Shared File System"
  ],
  [
    "3.6",
    "A business needs to retain rarely accessed records at low storage cost and centrally manage backups across services. Which TWO AWS capabilities fit? (Select TWO.)",
    "บริษัทต้องเก็บ Records ที่แทบไม่เปิดอ่านด้วยต้นทุนต่ำ และจัดการ Backups หลายบริการจากส่วนกลาง ควรใช้สองบริการใด",
    "Amazon S3 Glacier Deep Archive|AWS Backup|Amazon EBS|Amazon S3 Intelligent-Tiering|AWS DataSync",
    "0,1",
    "S3 Glacier Deep Archive เหมาะกับ Long-term Archive ที่ Retrieval ช้า ส่วน AWS Backup รวมการจัดการ Backup Policies ข้ามบริการ"
  ],
  [
    "3.7",
    "An analyst wants to query CSV files already stored in S3 using SQL without provisioning database servers. Which service fits?",
    "Analyst ต้อง Query CSV Files ที่อยู่ใน S3 ด้วย SQL โดยไม่ตั้ง Database Server ควรใช้บริการใด",
    "AWS Glue|Amazon Athena|Amazon Redshift|Amazon Kinesis Data Streams",
    "1",
    "Athena รัน SQL แบบ Serverless กับข้อมูลใน S3 ต่างจาก Glue ที่เน้น ETL/Catalog และ Kinesis ที่รับ Streaming Data"
  ],
  [
    "3.7",
    "A bank wants to extract text from scanned identity forms, not classify sentiment or generate speech. Which AI service fits the task?",
    "ธนาคารต้อง Extract Text จากแบบฟอร์มบัตรประชาชนที่ Scan มา ไม่ได้วิเคราะห์ Sentiment หรือสร้างเสียง ใช้ AI Service ใด",
    "Amazon Comprehend|Amazon Polly|Amazon Textract|Amazon Rekognition",
    "2",
    "Textract Extract Text และโครงสร้างเอกสารจาก Scanned Forms ส่วน Comprehend วิเคราะห์ข้อความ และ Polly สร้างเสียง"
  ],
  [
    "3.8",
    "A producer submits a task that must be processed later by an independent worker, even if the worker is temporarily offline. Which service decouples the components?",
    "Producer ส่ง Task ที่ Worker อิสระต้องทำภายหลังได้ แม้ Worker หยุดชั่วคราว บริการใดช่วย Decouple",
    "Amazon SNS|Amazon SQS|Amazon EventBridge|AWS Step Functions",
    "1",
    "SQS เป็น Durable Queue ที่เก็บ Messages รอ Worker ส่วน SNS ใช้ Fan-out Notifications และ EventBridge ใช้ Event Routing"
  ],
  [
    "3.8",
    "A company needs automated customer emails for account confirmations, not contact-center telephone support. Which business service fits?",
    "บริษัทต้องส่ง Customer Emails อัตโนมัติเพื่อยืนยันบัญชี ไม่ได้ต้องการระบบ Call Center บริการใดตรง",
    "Amazon Connect|Amazon SES|Amazon SNS|Amazon EventBridge",
    "1",
    "Amazon SES ส่ง Emails จาก Application ส่วน Amazon Connect เป็น Contact Center และ SNS เป็น Pub/Sub Notifications"
  ],
  [
    "3.8",
    "An application needs event-based routing to selected targets and a separate service to coordinate multi-step business processing. Which TWO fit? (Select TWO.)",
    "Application ต้อง Route Events ไป Targets ตาม Rules และมีอีกบริการควบคุม Business Processing หลายขั้นตอน สองบริการใดเหมาะ",
    "Amazon EventBridge|AWS Step Functions|Amazon SQS|Amazon SNS|Amazon Kinesis Data Streams",
    "0,1",
    "EventBridge ใช้ Event Rules เพื่อ Route Events ไป Targets ส่วน Step Functions Orchestrate Workflow ที่มีหลาย Steps"
  ]
]);
})();
