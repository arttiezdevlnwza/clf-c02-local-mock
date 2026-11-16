(() => {
  const rows = window.LOCAL_SET_05_ROWS = window.LOCAL_SET_05_ROWS || [];
  rows.push(...[
  [
    "3.1",
    "A platform team maintains YAML templates that define an application stack and wants AWS to create, update, and roll back these resources as a unit. Which service is the stack engine?",
    "ทีม Platform มี YAML Templates กำหนด Application Stack และต้องการให้ AWS Create, Update และ Rollback Resources เป็นชุดเดียว ใช้ Service ใด",
    "AWS CDK|AWS CloudFormation|AWS CodePipeline|AWS Elastic Beanstalk",
    "1",
    "CloudFormation ทำ Infrastructure as Code เป็น Stacks จาก Declarative Templates และจัดการ Updates/Rollbacks; CDK เป็นเครื่องมือเขียน IaC ด้วยภาษาโปรแกรม"
  ],
  [
    "3.1",
    "A developer wants to describe AWS infrastructure using TypeScript and compile that definition into CloudFormation templates. Which tool should be selected?",
    "Developer ต้องการนิยาม AWS Infrastructure ด้วย TypeScript แล้ว Generate CloudFormation Templates ใช้ Tool ใด",
    "AWS CloudFormation|AWS CDK|AWS CodeBuild|AWS CloudShell",
    "1",
    "AWS CDK ให้เขียน Infrastructure ด้วย TypeScript/Python แล้ว Synthesize เป็น CloudFormation; CodeBuild ใช้ Build/Test Applications"
  ],
  [
    "3.2",
    "A logistics company runs its database in two isolated infrastructure locations inside a single AWS Region to withstand the loss of one location. What are those locations?",
    "บริษัท Logistics วาง Database ในสถานที่ Infrastructure ที่แยกจากกันสองแห่งภายใน Region เดียว เพื่อรับมือสถานที่หนึ่งล่ม เรียกว่าอะไร",
    "Edge location|AWS Region|Availability Zone|Multi-Region deployment",
    "2",
    "Availability Zone เป็นพื้นที่ Infrastructure แยกจากกันภายใน Region และใช้ทำ Multi-AZ High Availability"
  ],
  [
    "3.2",
    "A publisher wants viewers in remote countries to receive cached website images from nearby network locations rather than fetching every image from the origin. Which AWS component serves the cached objects?",
    "สำนักพิมพ์ต้องการให้ผู้ชมต่างประเทศได้รับ Cached Website Images จาก Network Location ใกล้ตัวแทนการโหลดจาก Origin ทุกครั้ง ส่วนใดเป็นจุดส่ง Cached Objects",
    "AWS Region|Edge location|Availability Zone|Amazon CloudFront",
    "1",
    "Edge Location เป็นที่ตั้ง Cache ใกล้ผู้ใช้ของ CloudFront; CloudFront เป็น CDN Service ไม่ใช่ชื่อสถานที่"
  ],
  [
    "3.3",
    "A research lab has an existing Kubernetes manifest library and requires a managed control plane while preserving Kubernetes APIs. Which service should host it?",
    "ห้องแล็บมี Kubernetes Manifests อยู่แล้ว ต้องการ Managed Control Plane แต่ยังใช้ Kubernetes APIs เดิม ใช้บริการใด",
    "Amazon ECS|AWS Fargate|Amazon EKS|Amazon EC2",
    "2",
    "Amazon EKS เป็น Managed Kubernetes โดย AWS ดูแล Control Plane; ECS เป็น Orchestrator แบบ AWS-native ไม่ใช่ Kubernetes"
  ],
  [
    "3.3",
    "A container service will run without owning EC2 worker hosts, while another nightly workload needs queueing and scheduling for large parallel computations. Which TWO services cover these distinct needs? (Select TWO.)",
    "Container Service ไม่ต้องการดูแล EC2 Worker Hosts และงานคำนวณกลางคืนอีกชุดต้องการ Queueing/Scheduling สำหรับ Parallel Jobs ข้อใดสอง Services ตรงงาน",
    "AWS Batch|Amazon EKS|AWS Fargate|Amazon ECS|AWS Lambda",
    "0,2",
    "Fargate ให้ Compute รัน Containers โดยไม่ดูแล Hosts ส่วน AWS Batch จัด Queue และ Scheduling ของ Batch Jobs"
  ],
  [
    "3.3",
    "An S3 event triggers a brief image-metadata operation that does not need a persistent HTTP server. Which compute service minimizes infrastructure operations?",
    "เมื่อเกิด S3 Event ต้องทำงานสั้น ๆ อ่าน Metadata ของรูป โดยไม่จำเป็นต้องมี HTTP Server รอตลอด ใช้ Compute ใดเพื่อลดการดูแล Infrastructure",
    "AWS Batch|AWS Lambda|Amazon EC2|AWS Elastic Beanstalk",
    "1",
    "Lambda เหมาะกับ Event-driven Short Functions และไม่ต้องดูแล Server; Batch เหมาะกับ Managed Batch Workloads"
  ],
  [
    "3.3",
    "A software team needs an AWS-native service that keeps a desired number of container tasks running and replaces unhealthy tasks; the team explicitly does not use Kubernetes. Which service meets this requirement?",
    "ทีม Software ต้องการ AWS-native Service ที่รักษาจำนวน Container Tasks และแทน Tasks ที่ Unhealthy โดยไม่ใช้ Kubernetes ควรเลือกอะไร",
    "Amazon ECS|Amazon EKS|AWS Fargate|Amazon EC2",
    "0",
    "ECS ทำ Container Orchestration ด้วย Services/Tasks และ Desired Count; EKS ทำ Kubernetes ส่วน Fargate เป็น Compute Engine"
  ],
  [
    "3.4",
    "A bank needs a managed relational engine that supports SQL joins, schemas, and automated backups for its core application. Which service is the best first choice?",
    "ธนาคารต้องการ Managed Relational Engine ที่มี SQL Joins, Schemas และ Automated Backups สำหรับ Core Application ควรใช้บริการใด",
    "Amazon DynamoDB|Amazon Neptune|Amazon RDS|Amazon DocumentDB",
    "2",
    "Amazon RDS เป็น Managed Relational Database รองรับ SQL Engines; DynamoDB เป็น NoSQL และ Neptune เน้น Graph"
  ],
  [
    "3.4",
    "A social platform stores user-preference documents by user ID and expects high-scale, low-latency key lookups without managing database servers. Which service is best?",
    "Social Platform เก็บ User Preferences เป็น Documents ตาม User ID ต้องการ Key Lookups Latency ต่ำใน Scale สูงโดยไม่ดูแล Servers ใช้บริการใด",
    "Amazon DynamoDB|Amazon DocumentDB|Amazon RDS|Amazon ElastiCache",
    "0",
    "DynamoDB เป็น Serverless Managed NoSQL Key-value/Document Store สำหรับ Persistent Data; ElastiCache เน้น Caching"
  ],
  [
    "3.4",
    "Analysts repeatedly run complex aggregations over a loaded, multi-terabyte historical dataset within a managed data warehouse. Which service is intended?",
    "Analysts ทำ Complex Aggregations ซ้ำ ๆ กับ Historical Dataset หลาย TB ที่ Load เข้า Managed Data Warehouse แล้ว ใช้บริการใด",
    "Amazon Athena|Amazon Redshift|AWS Glue|Amazon Aurora",
    "1",
    "Redshift เป็น Data Warehouse สำหรับ Analytical SQL; Athena ทำ Serverless Queries บนข้อมูล S3 โดยตรง"
  ],
  [
    "3.5",
    "A company needs to connect ten VPCs and a corporate network through a central hub rather than manage many individual peering links. Which service is most suitable?",
    "บริษัทต้องการเชื่อม VPC สิบวงกับ Corporate Network ผ่าน Central Hub แทนการสร้าง Peering หลายคู่ ควรใช้บริการใด",
    "Amazon VPC|AWS Direct Connect|AWS Transit Gateway|AWS Site-to-Site VPN",
    "2",
    "Transit Gateway เป็น Hub เชื่อม VPCs และ On-prem Networks; Direct Connect คือ Dedicated Link และ VPC เป็น Network แยก"
  ],
  [
    "3.5",
    "A private EC2 subnet must reach S3 using internal AWS connectivity without using an internet gateway or a public route. Which feature should be implemented?",
    "EC2 ใน Private Subnet ต้องใช้ S3 ผ่าน AWS Internal Connectivity โดยไม่ผ่าน Internet Gateway หรือ Public Route ใช้ Feature ใด",
    "NAT Gateway|VPC endpoint|Internet Gateway|AWS Direct Connect",
    "1",
    "VPC Endpoint เชื่อมจาก VPC ไป S3 แบบ Private; NAT Gateway ใช้ออก Internet และ Direct Connect ใช้เชื่อม On-prem"
  ],
  [
    "3.5",
    "A company needs both an encrypted site-to-site link over its existing internet connection and a dedicated network circuit for a separate high-volume connection. Which TWO services match? (Select TWO.)",
    "บริษัทต้องการ Encrypted Site-to-site Link ผ่าน Internet เดิม และ Dedicated Network Circuit แยกสำหรับการรับส่งปริมาณสูง ข้อใดสอง Services ตรงเงื่อนไข",
    "AWS Transit Gateway|AWS Direct Connect|AWS Site-to-Site VPN|Internet Gateway|NAT Gateway",
    "1,2",
    "Site-to-Site VPN ทำ Encrypted Tunnel ผ่าน Internet ส่วน Direct Connect เป็น Dedicated Network Connection"
  ],
  [
    "3.6",
    "An application writes temporary scratch files that can be regenerated, and it values local disk speed more than persistence after an EC2 stop. Which storage fits?",
    "แอปสร้าง Scratch Files ที่สร้างใหม่ได้ ต้องการ Local Disk เร็วและไม่ต้องเก็บหลัง Stop EC2 ควรใช้ Storage ใด",
    "Amazon EBS|Instance store|Amazon EFS|Amazon S3",
    "1",
    "Instance Store เป็น Local Ephemeral Storage บน EC2 Host เหมาะกับ Scratch Data; EBS เป็น Persistent Block Volume"
  ],
  [
    "3.6",
    "Several Windows servers need to access the same managed SMB file shares integrated with their directory permissions. Which service should be used?",
    "Windows Servers หลายเครื่องต้องใช้ Managed SMB File Shares เดียวกันและผูก Directory Permissions ควรใช้ Service ใด",
    "Amazon EFS|Amazon FSx for Windows File Server|Amazon EBS|AWS Storage Gateway",
    "1",
    "FSx for Windows File Server รองรับ SMB และ Windows/Active Directory Features; EFS เป็น NFS File System"
  ],
  [
    "3.6",
    "A firm must import hundreds of terabytes from a remote facility with very poor network bandwidth. Which option supports physical offline transfer?",
    "บริษัทต้อง Import ข้อมูลหลายร้อย TB จากสำนักงานห่างไกลที่มี Bandwidth ต่ำมาก ใช้ตัวเลือกใดรองรับ Physical Offline Transfer",
    "AWS DataSync|AWS Snowball Edge|AWS Storage Gateway|Amazon S3",
    "1",
    "Snowball Edge ใช้อุปกรณ์กายภาพขนส่งข้อมูลแบบ Offline; DataSync ใช้เครือข่ายสำหรับ Online Transfer"
  ],
  [
    "3.7",
    "A marketing team needs serverless SQL queries against Parquet files already stored in S3 without loading them into a warehouse. Which service is designed for this?",
    "ทีม Marketing ต้อง Query Parquet ใน S3 ด้วย Serverless SQL โดยไม่โหลดเข้า Data Warehouse ใช้ Service ใด",
    "AWS Glue|Amazon Athena|Amazon Redshift|Amazon Quick Sight",
    "1",
    "Athena รัน SQL บน S3 Data Lake โดยตรง; Glue ทำ ETL/Data Catalog และ Redshift เป็น Warehouse"
  ],
  [
    "3.7",
    "An application needs to extract printed text and tables from scanned invoice images. Which managed AI service is purpose-built for this?",
    "Application ต้อง Extract Printed Text และ Tables จาก Scanned Invoice Images ใช้ Managed AI Service ใด",
    "Amazon Rekognition|Amazon Polly|Amazon Textract|Amazon Lex",
    "2",
    "Textract ดึง Text/Tables จากเอกสารสแกน; Rekognition วิเคราะห์ Object/Image และ Polly แปลงข้อความเป็นเสียง"
  ],
  [
    "3.8",
    "A payment event should notify several independent systems, but each system must retain its own durable queue for consumption. Which TWO services are combined in this pattern? (Select TWO.)",
    "Payment Event ต้องแจ้งหลาย Systems และแต่ละระบบต้องมี Durable Queue แยกไว้ประมวลผลเอง ข้อใดสอง Services ใช้ร่วมกัน",
    "Amazon EventBridge|Amazon SQS|AWS Step Functions|Amazon SNS|Amazon Kinesis Data Streams",
    "1,3",
    "SNS ส่ง Notifications แบบ Fan-out ไปหลาย Subscribers ส่วน SQS เก็บ Durable Messages ใน Queue ของแต่ละ Worker"
  ],
  [
    "3.8",
    "A fraud investigation spans multiple AWS Lambda calls and requires an explicit execution history, retries, and branching decisions. Which service coordinates the process?",
    "Fraud Investigation ต้องเรียกหลาย Lambda Functions ตาม Branching Steps พร้อม Execution History และ Retries บริการใดทำ Orchestration",
    "Amazon EventBridge|AWS Step Functions|Amazon SQS|AWS CodePipeline",
    "1",
    "Step Functions ใช้ State Machine ควบคุม Multi-step Workflow และ Retries; EventBridge เน้น Routing Events"
  ],
  [
    "3.8",
    "The operations team wants to send only inventory-change events that match particular event patterns to interested targets. Which AWS integration service provides this filtering and routing?",
    "ทีม Ops ต้อง Filter Inventory-change Events ตาม Event Patterns แล้ว Route ไป Targets ที่สนใจ บริการใดตรงงาน",
    "Amazon SNS|Amazon SQS|Amazon EventBridge|AWS Step Functions",
    "2",
    "EventBridge จับคู่ Event Patterns และ Route Events ไป Targets; SNS ทำ Pub/Sub Fan-out และ SQS เป็น Queue"
  ]
]);
})();
