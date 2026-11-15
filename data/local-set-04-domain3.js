(() => {
  const rows = window.LOCAL_SET_04_ROWS = window.LOCAL_SET_04_ROWS || [];
  rows.push(...[
  [
    "3.1",
    "An infrastructure team wants to recreate an identical VPC, subnets, and security groups across environments from a declarative, version-controlled template. Which service fits BEST?",
    "ทีม Infrastructure ต้องสร้าง VPC, Subnets และ Security Groups ให้เหมือนกันหลาย Environment จาก Declarative Template ที่เก็บ Version ใช้บริการใด",
    "AWS CDK|AWS CloudShell|AWS CloudFormation|AWS Elastic Beanstalk",
    "2",
    "AWS CloudFormation ใช้ Declarative Templates เพื่อ Provision ทรัพยากรได้ซ้ำและเก็บเป็น Version; CDK เป็นอีกวิธีนิยาม IaC ด้วย Programming Language"
  ],
  [
    "3.1",
    "An operator needs to run a few AWS CLI commands from an authenticated browser session without installing tools on a laptop. Which service provides this environment?",
    "Operator ต้องรัน AWS CLI Commands ผ่าน Browser Session ที่ Login อยู่ โดยไม่ติดตั้ง Tools บน Laptop ใช้บริการใด",
    "AWS CloudFormation|AWS CloudShell|AWS CDK|AWS CodeBuild",
    "1",
    "AWS CloudShell ให้ Shell ผ่าน Browser พร้อม AWS CLI ส่วน CloudFormation/CDK เป็น IaC และ CodeBuild ใช้ Build/Test Code"
  ],
  [
    "3.2",
    "A business deploys redundant application nodes in two physically separate infrastructure locations within the same AWS Region. What are these locations called?",
    "บริษัท Deploy Application Nodes ในสถานที่ Infrastructure ที่แยกกันสองแห่งภายใน AWS Region เดียวกัน พื้นที่เหล่านี้เรียกว่าอะไร",
    "Multi-Region deployment|Availability Zone|Edge location|AWS Region",
    "1",
    "Availability Zones เป็นโครงสร้างพื้นฐานที่แยกกันภายใน Region; Multi-AZ ช่วยลดผลกระทบเมื่อ AZ หนึ่งมีปัญหา"
  ],
  [
    "3.2",
    "A video streaming service stores a single origin in one Region but delivers cached thumbnails from nearby AWS network sites around the world. Which infrastructure component holds these caches?",
    "บริการ Video Streaming มี Origin ใน Region เดียว แต่ส่ง Cached Thumbnails จาก Network Sites ใกล้ผู้ชมทั่วโลก ตำแหน่งนี้เรียกว่าอะไร",
    "Amazon CloudFront|Availability Zone|Edge location|AWS Region",
    "2",
    "Edge locations เป็นจุดที่ CDN อย่าง CloudFront ใช้ Cache และส่ง Content ใกล้ผู้ใช้; CloudFront คือชื่อ Service ไม่ใช่ชนิด Site"
  ],
  [
    "3.3",
    "A company uses ECS tasks to run containerized APIs but does not want to patch or manage EC2 instances. Which compute engine should it choose?",
    "บริษัทใช้ ECS Tasks รัน Containerized APIs แต่ไม่ต้องการ Patch หรือดูแล EC2 Instances ควรใช้ Compute Engine ใด",
    "Amazon ECS|AWS Fargate|Amazon EKS|Amazon EC2",
    "1",
    "AWS Fargate เป็น Serverless Compute สำหรับ ECS/EKS Containers จึงไม่ต้องดูแล EC2 Hosts เอง; ECS ทำ Orchestration"
  ],
  [
    "3.3",
    "An application needs to run short code when an S3 upload event occurs, while a separate research team needs managed scheduling and queueing of thousands of batch jobs. Which TWO services are designed for these tasks? (Select TWO.)",
    "แอปต้องรันโค้ดสั้น ๆ เมื่อ S3 Upload และอีกทีมต้องมี Scheduling/Queueing สำหรับ Batch Jobs จำนวนมาก ข้อใดสอง Services ตรงงาน",
    "AWS Step Functions|AWS Lambda|Amazon ECS|AWS Batch|AWS Fargate",
    "1,3",
    "Lambda เหมาะกับ Event-driven Short Functions ส่วน AWS Batch จัด Queue/Scheduling และ Compute สำหรับ Batch Jobs"
  ],
  [
    "3.3",
    "A photo website must resize each image after an upload event, without keeping an application server running between uploads. Which compute service is the simplest fit?",
    "เว็บรูปภาพต้อง Resize ภาพเมื่อเกิด Upload Event โดยไม่เปิด Application Server ทิ้งไว้ระหว่าง Uploads ใช้ Compute Service ใด",
    "Amazon EC2|AWS Batch|AWS Lambda|AWS Elastic Beanstalk",
    "2",
    "AWS Lambda รัน Event-driven Functions เมื่อมี Event และไม่ต้องเปิด Server รอตลอดเวลา; EC2/Beanstalk ใช้ Hosting Platform ที่ต่างกัน"
  ],
  [
    "3.3",
    "A team wants to manage replicas, rolling updates, and health recovery for containers using AWS-native orchestration, not Kubernetes. Which service is intended?",
    "ทีมต้องจัดการ Replicas, Rolling Updates และ Recovery ของ Containers ด้วย AWS-native Orchestration ไม่ใช้ Kubernetes ควรเลือกบริการใด",
    "Amazon EKS|AWS Fargate|Amazon ECS|Amazon EC2",
    "2",
    "Amazon ECS เป็น AWS-native Container Orchestration; EKS คือ Managed Kubernetes และ Fargate คือ Compute ที่รองรับ Containers"
  ],
  [
    "3.4",
    "A retailer wants to traverse multi-hop relationships between shoppers, products, and recommendations using graph queries. Which managed database fits this model?",
    "ร้านค้าต้องค้นหา Multi-hop Relationships ระหว่างลูกค้า สินค้า และคำแนะนำด้วย Graph Queries ควรใช้ Managed Database ใด",
    "Amazon DynamoDB|Amazon Neptune|Amazon DocumentDB|Amazon RDS",
    "1",
    "Amazon Neptune เป็น Graph Database สำหรับ Nodes/Edges และ Traversals; DynamoDB เป็น NoSQL Key-value/Document ไม่ใช่ Graph Engine"
  ],
  [
    "3.4",
    "A mobile game needs a persistent primary store for player sessions and items, keyed by player ID with consistent low-latency lookups at scale. Which service BEST fits?",
    "เกมมือถือใช้ Primary Persistent Store สำหรับ Session และ Items โดยค้นด้วย Player ID ต้องการ Low Latency ใน Scale สูง ควรใช้บริการใด",
    "Amazon ElastiCache|Amazon Neptune|Amazon RDS|Amazon DynamoDB",
    "3",
    "DynamoDB เป็น Managed NoSQL Key-value Database สำหรับ Persistent Data และ Low-latency Key Lookups; ElastiCache เน้น In-memory Cache"
  ],
  [
    "3.4",
    "An analytics team needs a managed columnar data warehouse for repeated complex SQL reporting over years of loaded transactions. Which service is the intended fit?",
    "ทีม Analytics ต้องการ Managed Columnar Data Warehouse เพื่อทำ SQL Reporting ซับซ้อนกับธุรกรรมที่ Load สะสมหลายปี ควรใช้ใด",
    "Amazon Athena|AWS Glue|Amazon Redshift|Amazon RDS",
    "2",
    "Amazon Redshift เป็น Data Warehouse สำหรับ Analytical SQL Query บนข้อมูลที่นำเข้า Warehouse; Athena ใช้ Query ข้อมูลใน S3 โดยตรง"
  ],
  [
    "3.5",
    "A bank needs a dedicated private network circuit from its data center to AWS rather than an encrypted tunnel over the public internet. Which service should it evaluate?",
    "ธนาคารต้องการ Dedicated Private Network Circuit จาก Data Center ไป AWS แทน Tunnel ที่วิ่งบน Public Internet ควรพิจารณาบริการใด",
    "AWS Site-to-Site VPN|AWS Transit Gateway|AWS Direct Connect|NAT Gateway",
    "2",
    "AWS Direct Connect ให้ Dedicated Network Connection; Site-to-Site VPN ใช้ Encrypted Tunnel บน Internet และ Transit Gateway เป็น Network Hub"
  ],
  [
    "3.5",
    "Instances in a private subnet must reach a supported S3 service privately without using a public IP or internet route. Which network feature is appropriate?",
    "Instances ใน Private Subnet ต้องเข้าถึง S3 ที่รองรับแบบ Private โดยไม่ใช้ Public IP หรือ Internet Route ควรเลือก Network Feature ใด",
    "VPC endpoint|NAT Gateway|Internet Gateway|AWS Site-to-Site VPN",
    "0",
    "VPC Endpoint ช่วยเชื่อม VPC ไป AWS Service ที่รองรับแบบ Private; NAT Gateway มีไว้ให้เริ่ม Outbound Internet Connections"
  ],
  [
    "3.5",
    "A company needs one network connection over the internet that encrypts traffic to AWS, and another using a dedicated private circuit. Which TWO AWS connectivity services match these requirements? (Select TWO.)",
    "บริษัทต้องการ Network Connection แบบเข้ารหัสผ่าน Internet และอีกแบบเป็น Dedicated Private Circuit ข้อใดสอง Connectivity Services ที่ตรงงาน",
    "AWS Transit Gateway|AWS Site-to-Site VPN|Internet Gateway|AWS Direct Connect|VPC endpoint",
    "1,3",
    "Site-to-Site VPN เป็น Encrypted Internet Tunnel ระหว่าง On-prem กับ AWS; Direct Connect เป็น Dedicated Private Circuit"
  ],
  [
    "3.6",
    "A file must be stored at low cost because it is read only a few times per year, but when needed it must be available for immediate retrieval. Which storage class is suitable?",
    "ไฟล์ถูกอ่านปีละไม่กี่ครั้ง ต้องเก็บต้นทุนต่ำ แต่เมื่อจำเป็นต้อง Retrieve ได้ทันที ควรใช้ Storage Class ใด",
    "Amazon S3 Glacier Deep Archive|Amazon S3 Standard-IA|Amazon S3 Intelligent-Tiering|Amazon EBS",
    "1",
    "S3 Standard-IA ใช้กับข้อมูลที่เข้าถึงไม่บ่อยแต่ต้องการ Retrieval ทันที; Deep Archive ต้องรอ Restore"
  ],
  [
    "3.6",
    "A database on EC2 requires a block volume that survives an instance stop and can be backed up with snapshots. Which storage service fits?",
    "Database บน EC2 ต้องการ Block Volume ที่ข้อมูลไม่หายเมื่อ Stop Instance และสามารถทำ Snapshots ได้ ควรใช้บริการใด",
    "Instance store|Amazon EFS|Amazon EBS|Amazon S3",
    "2",
    "Amazon EBS เป็น Persistent Block Storage สำหรับ EC2 และรองรับ Snapshots; Instance Store เป็น Ephemeral Local Storage"
  ],
  [
    "3.6",
    "Several Linux EC2 instances must simultaneously mount the same shared file system by using NFS. Which managed storage service matches this requirement?",
    "Linux EC2 หลายเครื่องต้อง Mount Shared File System เดียวกันพร้อมกันผ่าน NFS ควรเลือก Managed Storage ใด",
    "Amazon EBS|Amazon FSx for Windows File Server|Amazon EFS|AWS Storage Gateway",
    "2",
    "Amazon EFS ให้ Shared Elastic File System แบบ NFS สำหรับ Linux; EBS เป็น Block Volume และ FSx for Windows รองรับ SMB"
  ],
  [
    "3.7",
    "An analytics pipeline needs to discover S3 datasets, transform records, and catalog schemas before analysis. Which service is purpose-built for this integration work?",
    "Analytics Pipeline ต้อง Discover Datasets ใน S3 แปลง Records และ Catalog Schemas ก่อนวิเคราะห์ บริการใดตรงงาน Data Integration",
    "Amazon Athena|AWS Glue|Amazon Redshift|Amazon Quick Sight",
    "1",
    "AWS Glue ให้ Data Integration, ETL และ Data Catalog; Athena ใช้ SQL Query S3 ส่วน Redshift เป็น Warehouse และ Quick Sight ทำ BI"
  ],
  [
    "3.7",
    "A startup wants to call pretrained foundation models through managed APIs for text generation, without building and training its own ML model. Which service fits?",
    "Startup ต้องการเรียก Pretrained Foundation Models ผ่าน Managed APIs เพื่อสร้างข้อความ โดยไม่ฝึก ML Model ใหม่เอง ใช้บริการใด",
    "Amazon SageMaker AI|Amazon Lex|Amazon Bedrock|Amazon Polly",
    "2",
    "Amazon Bedrock ให้บริการ Foundation Models ผ่าน Managed APIs; SageMaker AI เหมาะกับการสร้าง ฝึก และ Deploy ML Models มากกว่า"
  ],
  [
    "3.8",
    "An order event must be broadcast to multiple subscribed teams, while each team needs an independent durable queue to process work at its own pace. Which TWO services form this pattern? (Select TWO.)",
    "Order Event ต้อง Broadcast ไปหลายทีมที่ Subscribe และแต่ละทีมต้องมี Durable Queue แยกกันเพื่อประมวลผลตามจังหวะตน ข้อใดสองบริการใช้ร่วมกัน",
    "Amazon EventBridge|Amazon SNS|AWS Step Functions|Amazon SQS|Amazon Kinesis Data Streams",
    "1,3",
    "SNS ทำ Publish/Subscribe Fan-out ไปหลาย Subscribers ส่วน SQS เก็บ Messages เป็น Durable Queue ให้แต่ละทีมประมวลผลแยกกัน"
  ],
  [
    "3.8",
    "A payment workflow needs ordered steps, retries, and explicit state transitions across multiple Lambda functions. Which service coordinates this process?",
    "Payment Workflow ต้องมีขั้นตอนตามลำดับ การ Retry และ State Transitions ระหว่างหลาย Lambda Functions บริการใดช่วยประสานงาน",
    "Amazon EventBridge|Amazon SQS|AWS Step Functions|Amazon SNS",
    "2",
    "AWS Step Functions ทำ Workflow Orchestration แบบ State Machine พร้อม Retry และ State Management; EventBridge Route Events และ SQS Queue Messages"
  ],
  [
    "3.8",
    "A team wants to automate a release pipeline that connects build, test, and deployment stages after a source-code change. Which service orchestrates these stages?",
    "ทีมต้องการ Release Pipeline อัตโนมัติที่ต่อ Build, Test และ Deployment Stages หลัง Source Code เปลี่ยน บริการใดทำ Orchestration",
    "AWS CloudFormation|AWS CodeBuild|AWS CodePipeline|AWS CDK",
    "2",
    "AWS CodePipeline ประสาน CI/CD Stages; CodeBuild ทำ Build/Test ส่วน CloudFormation/CDK ใช้นิยาม Infrastructure"
  ]
]);
})();
