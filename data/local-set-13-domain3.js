(() => {
 const rows=window.LOCAL_SET_13_ROWS=window.LOCAL_SET_13_ROWS||[];
 rows.push(...[
  [
    "3.1",
    "An administrator must provision the same approved AWS resources for multiple departments, but users should choose only sanctioned templates from a portfolio. Which service supports that controlled catalog?",
    "Admin ต้อง Provision Resources ตามมาตรฐานหลายแผนก แต่ผู้ใช้เลือกได้เฉพาะ Approved Templates จาก Portfolio ใดคือบริการที่ตรง",
    "AWS Service Catalog|AWS Management Console|AWS CloudFormation|AWS Systems Manager",
    "0",
    "Service Catalog เผยแพร่ Approved Products/Portfolios สำหรับ Controlled Self-service ส่วน CloudFormation เป็น Template/Stack Provisioning Engine"
  ],
  [
    "3.1",
    "A team wants repeatable infrastructure deployment as code, while another team merely edits one resource interactively. Which AWS service is the direct fit for templated infrastructure stacks?",
    "ทีมต้อง Deploy Infrastructure ซ้ำได้ด้วย Code ขณะที่อีกทีมเปลี่ยน Resource ครั้งเดียวผ่าน Web ข้อแรกควรใช้บริการใด",
    "AWS CLI|AWS CloudFormation|AWS Management Console|AWS Config",
    "1",
    "CloudFormation จัด Infrastructure Stacks จาก Declarative Templates เพื่อ Repeatable Provisioning ส่วน Console เป็น Graphical Interface และ CLI เป็น Commands"
  ],
  [
    "3.2",
    "A compliance officer requires the primary database to reside in a particular geographic jurisdiction, not just in any independent data center. Which AWS infrastructure unit defines that geographic choice?",
    "Compliance Officer บังคับให้ Primary Database อยู่ใน Geographic Jurisdiction ที่กำหนด ไม่ใช่เพียงเลือก Data Center แยกกัน ต้องเลือกหน่วย AWS ใด",
    "Availability Zone|Edge location|AWS Region|Multi-AZ deployment",
    "2",
    "Region เป็น Geographic Location หลักของ AWS ที่ใช้เลือกพื้นที่ Data Residency ขณะที่ AZ คือ Isolation Within Region"
  ],
  [
    "3.2",
    "A company must recover after an entire AWS Region stops serving requests. Which approach addresses this scope of failure?",
    "องค์กรต้องกู้ระบบเมื่อ AWS Region ทั้ง Region ใช้งานไม่ได้ วิธีวาง Workload ใดรองรับ Failure Scope นี้",
    "Multi-Region deployment|Multi-AZ deployment|Edge location|Availability Zone",
    "0",
    "Multi-Region ออกแบบ DR/Failover ข้าม Regions ต่างจาก Multi-AZ ซึ่งยังอยู่ภายใน Region เดิม"
  ],
  [
    "3.3",
    "A small internal service averages very low CPU but runs a heavy calculation for a few seconds every hour. Which EC2 instance family is designed for this usage pattern?",
    "Service ภายในใช้ CPU ต่ำเกือบตลอด แต่ Burst CPU หนักไม่กี่วินาทีทุกชั่วโมง EC2 Instance Family แบบใดเหมาะ",
    "M family (general purpose)|T family (burstable)|R family (memory optimized)|I family (storage optimized)",
    "1",
    "T Family ใช้ CPU Credits รองรับ Bursts จาก Low Baseline CPU ขณะที่ M/R/I Families เน้นสมดุล, Memory และ Local Storage ตามลำดับ",
    [
      "M Family ให้ General-purpose Performance แทนแนวคิด Burstable",
      "ถูก: Burstable T ใช้ CPU Credits เหมาะกับ Low Average Utilization",
      "R Family มุ่ง High Memory Workloads ไม่ใช่ CPU Bursts โดยตรง",
      "I Family เน้น Local Storage/IO Performance"
    ]
  ],
  [
    "3.3",
    "A build system produces a container image, and ECS later pulls that exact version for deployment. Which managed repository stores the image?",
    "Build System สร้าง Container Image แล้ว ECS ต้อง Pull Version เดิมไป Deploy บริการ Repository ใดเก็บ Image",
    "AWS CodeBuild|Amazon ECR|Amazon ECS|AWS Fargate",
    "1",
    "ECR เก็บ Container Images/Tags ส่วน CodeBuild สร้าง Images และ ECS/Fargate จัดการ Running/Compute"
  ],
  [
    "3.3",
    "A team needs AWS-native container scheduling and managed serverless capacity, without an EKS/Kubernetes requirement. Which TWO services satisfy these separate roles? (Select TWO.)",
    "ทีมต้องจัด Schedule Containers แบบ AWS-native และใช้ Serverless Container Capacity โดยไม่ต้องใช้ Kubernetes สองบริการใดทำหน้าที่นี้",
    "Amazon EKS|Amazon ECS|Amazon EC2|AWS Fargate|AWS Batch",
    "1,3",
    "ECS เป็น Container Orchestrator แบบ AWS-native ส่วน Fargate ให้ Compute ที่ไม่ต้องดูแล EC2 Hosts ต่างจาก EKS ที่เป็น Managed Kubernetes"
  ],
  [
    "3.3",
    "A development team deploys a conventional HTTP application and wants AWS to manage much of the environment, load balancing, scaling, and health checks. Which deployment service is designed for this?",
    "ทีม Deploy HTTP App แบบทั่วไป อยากให้ AWS จัด Environment, Scaling และ Health Monitoring ให้มากที่สุด เลือกบริการใด",
    "AWS Fargate|Amazon EC2|AWS Elastic Beanstalk|AWS Batch",
    "2",
    "Elastic Beanstalk เป็น PaaS-style Application Deployment/Environment Management ส่วน EC2 ให้ VM และ Fargate ให้ Container Compute"
  ],
  [
    "3.4",
    "A fraud system needs to discover chains of related accounts, devices, and merchants and search connected relationships. Which database engine is suitable?",
    "Fraud System ต้องค้นหาความสัมพันธ์หลายทอดระหว่าง Accounts, Devices และ Merchants ควรใช้ Database ใด",
    "Amazon DocumentDB|Amazon Redshift|Amazon Neptune|Amazon Aurora",
    "2",
    "Neptune เป็น Graph Database รองรับ Connected Relationship Traversal ขณะที่ DocumentDB เน้น JSON Documents และ Redshift เป็น Analytical Warehouse"
  ],
  [
    "3.4",
    "A company keeps a MongoDB-style document workload and wants AWS-managed infrastructure compatible with MongoDB APIs. Which service matches the data model?",
    "บริษัทมี MongoDB-style Document Workload และต้องการ Managed AWS Service ที่ Compatible กับ MongoDB APIs เลือกใด",
    "Amazon DynamoDB|Amazon DocumentDB|Amazon RDS|Amazon Neptune",
    "1",
    "DocumentDB ออกแบบสำหรับ Document Database ที่ MongoDB-compatible ส่วน DynamoDB เป็น NoSQL Key-value/Document API ของ AWS แต่ไม่ใช่ MongoDB-compatible Endpoint"
  ],
  [
    "3.4",
    "A data warehouse must analyze years of structured sales data with complex aggregates rather than process individual online transactions. Which AWS database is built for this use?",
    "Data Warehouse ต้องวิเคราะห์ Sales Data ย้อนหลังหลายปีด้วย Aggregations ซับซ้อน ไม่ใช่ Transactions ทีละรายการ ใช้ฐานข้อมูลใด",
    "Amazon Redshift|Amazon DynamoDB|Amazon RDS|Amazon ElastiCache",
    "0",
    "Redshift เป็น Analytics/Data Warehouse สำหรับ Analytical SQL ส่วน RDS เน้น Operational Relational Transactions และ ElastiCache เป็น Cache"
  ],
  [
    "3.5",
    "A private EC2 application needs to reach an S3 bucket without requiring a route over the public internet. Which networking feature best describes the private access path?",
    "Private EC2 ต้องเข้า S3 โดยไม่ต้องส่ง Traffic ผ่าน Public Internet Network Feature ใดใช้เป็น Private Path",
    "Internet Gateway|VPC endpoint|NAT Gateway|AWS Site-to-Site VPN",
    "1",
    "VPC Endpoint ช่วยเข้าถึง AWS Services ที่รองรับเช่น S3 แบบ Private ส่วน NAT/IGW เกี่ยวกับ Internet Paths และ VPN เชื่อม Networks"
  ],
  [
    "3.5",
    "Employees work from hotels and must establish a secure remote-user VPN connection to the company's VPC. Which managed networking service is intended for individual clients?",
    "พนักงานอยู่โรงแรม ต้อง Connect VPC ผ่าน Remote-user VPN Client แบบ Managed ไม่ใช่เชื่อม Office Network แบบถาวร ใช้ใด",
    "AWS Site-to-Site VPN|AWS Direct Connect|AWS Transit Gateway|AWS Client VPN",
    "3",
    "Client VPN รองรับ Remote Users/Devices ส่วน Site-to-Site VPN เป็น Network-to-Network IPSec และ Direct Connect เป็น Dedicated Circuit"
  ],
  [
    "3.5",
    "An enterprise wants private data-center connectivity and a scalable hub that interconnects many VPCs. Which TWO services meet the two distinct needs? (Select TWO.)",
    "องค์กรต้องการ Dedicated Private Link จาก Data Center และ Network Hub เชื่อมหลาย VPCs เลือกสองบริการใด",
    "NAT Gateway|AWS Site-to-Site VPN|AWS Transit Gateway|VPC endpoint|AWS Direct Connect",
    "2,4",
    "Direct Connect ให้ Dedicated Connection จาก On-premises ไป AWS ส่วน Transit Gateway จัด Routing Hub เชื่อมหลาย VPCs/Networks"
  ],
  [
    "3.6",
    "A warehouse uses locally mounted files but wants cloud-backed file storage available through familiar on-premises protocols. Which hybrid integration service fits?",
    "Warehouse ใช้ Local File Shares แต่ต้องการ Cloud-backed Storage ที่เข้าถึงผ่าน On-premises File Protocols ได้ ควรเลือกใด",
    "AWS Backup|AWS DataSync|Amazon EFS|AWS Storage Gateway",
    "3",
    "Storage Gateway ให้ Hybrid Storage Access ผ่าน File/Volume/Tape Interfaces ส่วน DataSync ใช้ Transfer/Sync Files ไม่ใช่ Serving File Interfaces"
  ],
  [
    "3.6",
    "A company has many Linux instances in separate Availability Zones that should mount the same shared elastic NFS file system. Which storage service fits?",
    "บริษัทมี Linux Instances ในหลาย AZs ต้อง Mount NFS Shared File System เดียวกันแบบ Elastic ใช้บริการใด",
    "Instance store|Amazon FSx for Windows File Server|Amazon EBS|Amazon EFS",
    "3",
    "EFS เป็น Shared NFS File System สำหรับ Linux Clients ส่วน EBS เป็น Block Volumes และ Instance Store เป็น Ephemeral Local Storage"
  ],
  [
    "3.6",
    "An archive will rarely be retrieved and the business accepts hours or longer retrieval latency for very low storage cost. Which S3 class is suited to long-term archival?",
    "Archive แทบไม่ถูกอ่านและยอมให้ Retrieval นานหลายชั่วโมง เพื่อค่า Storage ต่ำที่สุดเท่าที่เหมาะสม ควรใช้ S3 Class ใด",
    "Amazon S3|Amazon S3 Intelligent-Tiering|Amazon S3 Standard-IA|Amazon S3 Glacier Deep Archive",
    "3",
    "Glacier Deep Archive เหมาะกับ Long-term Archive ที่แทบไม่เข้าถึงและยอมรับ Retrieval Time สูง ต่างจาก Standard-IA ที่เข้าถึงได้ทันที"
  ],
  [
    "3.7",
    "An operations platform indexes application logs and needs fast keyword searches and search analytics dashboards. Which AWS service is designed for this indexed analytics workload?",
    "Ops Platform ต้อง Index Application Logs และทำ Fast Keyword Search/Search Dashboards ใช้บริการใด",
    "Amazon Quick Sight|Amazon Athena|AWS Glue|Amazon OpenSearch Service",
    "3",
    "OpenSearch Service ให้ Managed Search Index/Analytics Engine ส่วน Athena รัน SQL Query ข้อมูลที่ S3 และ Quick Sight เน้น BI Reports"
  ],
  [
    "3.7",
    "A company wants a chatbot to collect required booking fields via intent recognition, while the same app also converts recorded speech into text for downstream analysis. Which TWO services cover these different AI functions? (Select TWO.)",
    "App ต้อง Chatbot ที่เก็บ Booking Slots/Intents และแปลง Recorded Speech เป็น Text สำหรับ Analytics สอง AI Services ใดทำแต่ละหน้าที่",
    "Amazon Polly|Amazon Transcribe|Amazon Comprehend|Amazon Textract|Amazon Lex",
    "1,4",
    "Lex จัด Conversational Intents/Slots ส่วน Transcribe แปลง Speech-to-Text ต่างจาก Polly ซึ่งสร้าง Speech จาก Text"
  ],
  [
    "3.7",
    "An analyst wants to use serverless SQL to query S3 Parquet datasets without loading them into a separate warehouse. Which analytics service is designed for direct querying?",
    "Analyst ต้องรัน Serverless SQL บน S3 Parquet Files โดยไม่ต้องโหลดเข้า Warehouse ใหม่ บริการใด",
    "Amazon Redshift|Amazon EMR|AWS Glue|Amazon Athena",
    "3",
    "Athena ให้ Serverless SQL Query ข้อมูลใน S3 ขณะที่ Redshift เป็น Data Warehouse, Glue เน้น ETL/Catalog และ EMR เน้น Spark/Hadoop Processing"
  ],
  [
    "3.8",
    "A company needs to stream a Windows desktop application to browsers without giving users a full managed desktop. Which end-user computing service fits?",
    "บริษัทต้อง Stream Windows Desktop Application ผ่าน Browser โดยไม่แจก Virtual Desktop เต็มเครื่อง ใช้บริการใด",
    "AWS Amplify|Amazon WorkSpaces|Amazon WorkSpaces Secure Browser|Amazon AppStream 2.0",
    "3",
    "AppStream 2.0 ทำ Application Streaming ขณะที่ WorkSpaces เป็น Virtual Desktop และ Secure Browser ให้ Managed Browser Sessions สำหรับ Web Apps"
  ],
  [
    "3.8",
    "An event producer needs to fan out the same business notification to several subscribers, while each worker group may consume asynchronously from its own queue. Which TWO messaging services fit this pattern? (Select TWO.)",
    "Producer ต้อง Fan-out Notification เดียวไปหลาย Subscribers และให้ Worker Group แต่ละกลุ่มประมวลผล Async จาก Queue ของตัวเอง สอง Messaging Services ใด",
    "Amazon Kinesis Data Streams|AWS Step Functions|Amazon EventBridge|Amazon SQS|Amazon SNS",
    "3,4",
    "SNS ทำ Pub/Sub Fan-out ไป Subscribers และ SQS เก็บ Messages ให้ Worker Group ประมวลผลแยกกัน ส่วน EventBridge Route Events ตาม Patterns"
  ]
]);
})();
