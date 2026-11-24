(() => {
 const rows=window.LOCAL_SET_12_ROWS=window.LOCAL_SET_12_ROWS||[];
 rows.push(...[
  [
    "3.1",
    "A developer wants repeatable scripts on a laptop to call AWS services through commands instead of clicking through a website. Which access method fits?",
    "Developer ต้องรัน Script จาก Laptop เพื่อเรียก AWS Services ผ่าน Commands ซ้ำได้โดยไม่คลิก Web Console ควรใช้เครื่องมือใด",
    "AWS CLI|AWS Systems Manager|AWS Management Console|AWS CloudFormation",
    "0",
    "AWS CLI เป็น Command-line Tool เรียก AWS APIs จาก Local Workstation หรือ Automation Scripts ต่างจาก Management Console ที่เป็น Web Interface"
  ],
  [
    "3.1",
    "A factory needs supported AWS compute and services physically installed on its own premises because local processes cannot tolerate the round trip to a Region. Which offering fits?",
    "โรงงานต้องการ AWS Compute/Services บางส่วนมาติดตั้งในโรงงานจริง เพราะการส่งข้อมูลไป Region มี Latency สูงเกินไป ควรใช้บริการใด",
    "AWS Direct Connect|AWS Global Accelerator|AWS Outposts|AWS Client VPN",
    "2",
    "Outposts นำ AWS Infrastructure/บริการที่รองรับมาวาง On-premises เพื่อ Low Latency/Local Processing ส่วน Direct Connect แค่เชื่อมเครือข่ายไป AWS"
  ],
  [
    "3.2",
    "An online retailer needs its database to withstand loss of one Availability Zone, but disaster recovery across Regions is outside the requirement. Which placement is sufficient in scope?",
    "Retailer ต้องการให้ Database รับมือ AZ Failure ภายใน Region เดียว ไม่ได้ต้องทน Region Outage Deployment แบบใดตอบขอบเขต",
    "Multi-Region deployment|Multi-AZ deployment|Edge location|AWS Global Accelerator",
    "1",
    "Multi-AZ กระจาย Availability/Failover ภายใน Region เดียว ส่วน Multi-Region ใช้เมื่อมี Requirement รับมือระดับ Region"
  ],
  [
    "3.2",
    "A company asks for a CDN service, not merely the physical points where content is cached close to users. Which AWS product should be selected?",
    "บริษัทต้องการชื่อ CDN Service สำหรับแจก Static Assets ทั่วโลก ไม่ใช่ชื่อสถานที่ที่ Cache อยู่บน Edge ควรเลือกใด",
    "Amazon CloudFront|Edge location|Amazon Route 53|AWS Global Accelerator",
    "0",
    "CloudFront คือ CDN Service ที่ใช้ Edge Locations ช่วย Cache/Deliver Content ใกล้ Users ขณะที่ Edge Location เป็นจุด Infrastruktur ไม่ใช่ชื่อบริการ CDN"
  ],
  [
    "3.3",
    "A team already knows Kubernetes and must run its containers under a managed Kubernetes control plane. Which orchestration service should it choose?",
    "ทีมใช้ Kubernetes อยู่แล้ว และต้องรัน Containers บน Managed Kubernetes Control Plane ควรเลือก Orchestration Service ใด",
    "Amazon EKS|AWS Fargate|Amazon ECS|Amazon ECR",
    "0",
    "EKS เป็น Managed Kubernetes Service ส่วน ECS ใช้ AWS-native Container Orchestration และ Fargate เป็น Compute Engine ที่ ECS/EKS ใช้ได้"
  ],
  [
    "3.3",
    "A service uses ECS and wants to avoid managing EC2 host capacity while scheduling short-running container tasks. Which compute option should it pair with ECS?",
    "Service ใช้ ECS อยู่แล้ว ต้องรัน Tasks สั้น ๆ โดยไม่ดูแล EC2 Host Capacity ควรจับคู่กับ Compute Option ใด",
    "AWS Batch|AWS Fargate|Amazon EC2|Amazon EKS",
    "1",
    "Fargate จัด Serverless Compute สำหรับ ECS Tasks ไม่ต้องบริหาร EC2 Hosts ส่วน ECS เป็น Container Orchestrator และ Batch จัด Job Queues"
  ],
  [
    "3.3",
    "A photo-processing system needs managed job queues and retries for a fluctuating number of independent container jobs. Which service meets the scheduling requirement directly?",
    "ระบบประมวลผลรูปภาพมีจำนวน Container Jobs ขึ้นลงมาก ต้องการ Queue/Scheduler/Retry แบบ Managed ควรใช้บริการใด",
    "AWS Step Functions|Amazon ECS|AWS Batch|AWS Lambda",
    "2",
    "AWS Batch จัดคิวและ Schedule Independent Jobs ตาม Compute Environment ต่างจาก Step Functions ที่ Orchestrate Workflow Steps และ ECS ที่เป็น Container Orchestration"
  ],
  [
    "3.3",
    "A performance analyst wants recommendations for more appropriate EC2 sizes based on measured usage, rather than an automatic workload scaler. Which tool is designed for recommendations?",
    "Performance Analyst ต้องการ Recommendations เปลี่ยน EC2 Sizes จากข้อมูล Usage ไม่ใช่ระบบ Scale ตาม Traffic บริการใด",
    "AWS Trusted Advisor|EC2 Auto Scaling|AWS Compute Optimizer|AWS Cost Explorer",
    "2",
    "Compute Optimizer วิเคราะห์ Utilization Metrics เพื่อแนะนำประเภท/ขนาด Compute ส่วน EC2 Auto Scaling เปลี่ยนจำนวน Instances ตาม Scaling Policies"
  ],
  [
    "3.4",
    "An application runs PostgreSQL-compatible transactions and wants AWS-designed distributed storage for higher availability without moving to a nonrelational data model. Which database fits?",
    "Application ใช้ PostgreSQL Transactions และอยากได้ Distributed Storage แบบ AWS โดยยังคง Relational Data Model เลือก Database ใด",
    "Amazon DynamoDB|Amazon Aurora|Amazon Redshift|Amazon DocumentDB",
    "1",
    "Aurora รองรับ PostgreSQL Compatibility บน Managed Relational Engine และ Distributed Storage ส่วน DynamoDB/DocumentDB เป็น NoSQL และ Redshift เป็น Warehouse"
  ],
  [
    "3.4",
    "A customer moves from an on-premises proprietary database engine to another engine in AWS. Which TWO tools help convert schema definitions and then migrate the records? (Select TWO.)",
    "ลูกค้าย้ายจาก Database Engine เดิมไปอีก Engine บน AWS ต้องแปลง Schema และย้าย Records สองบริการใดทำงานคนละขั้น",
    "AWS DMS|AWS Migration Hub|AWS SCT|AWS Application Migration Service|AWS Storage Gateway",
    "0,2",
    "SCT แปลง Schema/Database Code ระหว่าง Engines ส่วน DMS ย้ายและ Replicate Database Data; Server Migration Service ไม่แทน Schema Conversion"
  ],
  [
    "3.4",
    "An online game has an existing durable database but wants a managed in-memory cache for frequently requested leaderboard fragments. Which AWS database-adjacent service is suitable?",
    "เกมมี Durable Database หลักแล้วแต่ต้องการ In-memory Cache สำหรับ Leaderboard ที่อ่านซ้ำบ่อย เลือกบริการใด",
    "Amazon ElastiCache|Amazon Neptune|Amazon DynamoDB|Amazon DocumentDB",
    "0",
    "ElastiCache เป็น In-memory Cache ลด Latency/Read Load ส่วน DynamoDB/DocumentDB เป็น Data Stores และ Neptune ใช้ Graph Relationships"
  ],
  [
    "3.5",
    "A network team needs subnet-level stateless filtering, including an explicit deny for an unwanted network range. Which control matches?",
    "ทีม Network ต้อง Block CIDR ที่ไม่ต้องการทั้ง Subnet ด้วย Stateless Rules และ Explicit Deny ใช้ Security Control ใด",
    "AWS WAF|Security group|Network ACL|AWS Shield",
    "2",
    "Network ACL เป็น Stateless Network Filter ระดับ Subnet รองรับ Allow/Deny Rules ส่วน SG เป็น Stateful Filtering ระดับ ENI และใช้ Allow Rules"
  ],
  [
    "3.5",
    "A company wants its web hostname to direct users to a backup endpoint when health checks fail. Which DNS service supports this routing decision?",
    "บริษัทต้องการ DNS ของเว็บไซต์ส่งผู้ใช้ไป Backup Endpoint เมื่อ Primary Health Check ไม่ผ่าน ใช้บริการใด",
    "Amazon CloudFront|AWS Global Accelerator|Amazon Route 53|Elastic Load Balancing",
    "2",
    "Route 53 รองรับ DNS Failover Routing และ Health Checks ส่วน CloudFront เน้น Content Delivery และ ELB กระจาย Traffic ภายใน Load Balancer"
  ],
  [
    "3.5",
    "A hybrid company needs both a private dedicated link from its data center and encrypted tunnels for contingency connectivity over the internet. Which TWO AWS services fit? (Select TWO.)",
    "องค์กร Hybrid ต้องมี Dedicated Network Link ไป AWS และมี Encrypted Tunnels ผ่าน Internet สำหรับเส้นทางสำรอง สองบริการใดตรง",
    "AWS Client VPN|AWS Direct Connect|AWS Site-to-Site VPN|AWS Transit Gateway|NAT Gateway",
    "1,2",
    "Direct Connect ให้ Dedicated Link ส่วน Site-to-Site VPN ให้ IPSec Encrypted Tunnel ระหว่าง Networks ผ่าน Internet; Client VPN เหมาะกับ Remote Users"
  ],
  [
    "3.6",
    "A Windows file server workload uses SMB and Active Directory integration and must retain shared Windows file behavior in AWS. Which managed file storage service fits?",
    "Windows File Server ใช้ SMB และ Active Directory ต้องย้ายมา AWS โดยคงพฤติกรรม Shared Windows File Services ใช้บริการใด",
    "AWS Storage Gateway|Amazon EFS|Amazon EBS|Amazon FSx for Windows File Server",
    "3",
    "FSx for Windows File Server เป็น Managed Windows SMB File Service รองรับ AD Integration ส่วน EFS เป็น Shared File Storage แบบ NFS"
  ],
  [
    "3.6",
    "A site with limited bandwidth needs to migrate tens of terabytes to AWS by shipping physical devices instead of transferring everything online. Which service is suitable?",
    "สาขา Internet จำกัด ต้องย้ายข้อมูลหลายสิบ TB ไป AWS โดยขนอุปกรณ์จริงแทน Online Transfer บริการใดเหมาะ",
    "AWS Storage Gateway|Amazon S3 Intelligent-Tiering|AWS DataSync|AWS Snowball Edge",
    "3",
    "Snowball Edge ใช้อุปกรณ์ขนข้อมูล/Edge Processing สำหรับ Large Offline Transfer ส่วน DataSync โอนออนไลน์ และ Storage Gateway ให้ Hybrid Storage Access"
  ],
  [
    "3.6",
    "An S3 data lake has unpredictable access patterns that can change over months. Which storage class automatically optimizes storage tiers according to access activity?",
    "S3 Data Lake มี Access Pattern ไม่แน่นอน เปลี่ยนไปเรื่อย ๆ ต้องให้ Storage Tier ปรับตาม Access Activity โดยอัตโนมัติ ใช้ Class ใด",
    "Amazon S3 Standard-IA|Amazon S3 Glacier Deep Archive|Amazon S3|Amazon S3 Intelligent-Tiering",
    "3",
    "Intelligent-Tiering ปรับ Access Tiers ตาม Usage Pattern ที่ตรวจพบ ส่วน Standard-IA เหมาะกับข้อมูลเข้าถึงไม่บ่อยที่ทราบรูปแบบ และ Deep Archive เหมาะเก็บระยะยาว"
  ],
  [
    "3.7",
    "A company wants a generative AI assistant to help employees find answers from enterprise content rather than just extract characters from scanned pages. Which service category fits?",
    "องค์กรอยากได้ Generative AI Assistant ให้พนักงานค้นหาคำตอบจาก Enterprise Content ไม่ได้เพียง OCR เอกสาร ควรพิจารณาบริการใด",
    "Amazon Comprehend|Amazon Textract|Amazon Lex|Amazon Q",
    "3",
    "Amazon Q เป็น Generative AI Assistant สำหรับองค์กรตามรุ่นผลิตภัณฑ์ ส่วน Textract ทำ OCR/Document Extraction และ Lex สร้าง Intent-based Chatbots"
  ],
  [
    "3.7",
    "An HR system already has machine-readable text and must detect key phrases and sentiment in employee feedback. Which managed AI service addresses the language analysis?",
    "ระบบ HR มี Text Feedback ที่อ่านได้อยู่แล้ว ต้องวิเคราะห์ Sentiment และ Key Phrases เลือก AI Service ใด",
    "Amazon Rekognition|Amazon Textract|Amazon Transcribe|Amazon Comprehend",
    "3",
    "Comprehend ทำ Natural Language Processing เช่น Sentiment/Entities/Key Phrases ต่างจาก Textract ที่ดึงข้อมูลจากเอกสารและ Transcribe ที่แปลงเสียง"
  ],
  [
    "3.7",
    "An executive wants interactive business dashboards over curated cloud data, not raw SQL query execution. Which analytics product is intended for visual reports?",
    "ผู้บริหารต้องการ Interactive Business Dashboards จาก Cloud Data ที่จัดเตรียมแล้ว ไม่ได้ต้องการรัน Raw SQL อย่างเดียว ใช้เครื่องมือใด",
    "Amazon Athena|Amazon Redshift|AWS Glue|Amazon Quick",
    "3",
    "Amazon Quick (บริการ BI/Analytics ที่รวมความสามารถเดิมของ QuickSight) สร้าง Dashboards/Insights ส่วน Athena ใช้ SQL Query ข้อมูล S3 และ Glue เน้น Data Integration"
  ],
  [
    "3.8",
    "A utility company connects many devices that securely publish telemetry messages through IoT-specific protocols. Which service is tailored to device connectivity?",
    "บริษัทพลังงานเชื่อม IoT Devices จำนวนมากที่ส่ง Telemetry ผ่าน Protocols ของ IoT บริการใดเน้นการเชื่อม Devices",
    "Amazon SNS|Amazon EventBridge|Amazon Kinesis Data Streams|AWS IoT Core",
    "3",
    "IoT Core เชื่อม/Authenticate Devices และส่ง IoT Messages ส่วน Kinesis เป็น Streaming Data Platform และ EventBridge เป็น Event Routing"
  ],
  [
    "3.8",
    "A retailer wants to send transactional order-confirmation emails to customers from its own application, rather than push notifications. Which service is for managed email delivery?",
    "Retailer ต้องส่ง Email ยืนยันคำสั่งซื้อจาก Application ให้ลูกค้า ไม่ใช่ Push Notifications บริการใดเป็น Managed Email Delivery",
    "Amazon EventBridge|Amazon Connect|Amazon SNS|Amazon SES",
    "3",
    "SES เป็น Email Sending Service สำหรับ Application Emails ส่วน SNS เป็น Pub/Sub Messaging และ Connect เป็น Contact Center"
  ]
]);
})();
