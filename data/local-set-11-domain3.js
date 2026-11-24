(() => {
 const rows=window.LOCAL_SET_11_ROWS=window.LOCAL_SET_11_ROWS||[];
 rows.push(...[
  [
    "3.1",
    "A new team wants to make an approved AWS environment from the same resource definitions in multiple accounts. Which AWS capability is designed for repeatable stacks?",
    "ทีมใหม่ต้องสร้าง AWS Environments จาก Resource Definitions ชุดเดียวกันในหลาย Accounts แบบทำซ้ำได้ ควรใช้เครื่องมือใด",
    "AWS Systems Manager|AWS Management Console|AWS CloudFormation|AWS CLI",
    "2",
    "CloudFormation ใช้ Templates นิยามและ Deploy Infrastructure เป็น Stacks ได้ซ้ำหลายครั้ง ไม่ต้องคลิก Resource ทีละรายการ"
  ],
  [
    "3.1",
    "An IT organization wants employees to request only approved infrastructure products from a managed portfolio. Which service provides such controlled self-service?",
    "องค์กร IT อยากให้พนักงานเลือก Provision ได้เฉพาะ Infrastructure Products ที่อนุมัติแล้วใน Portfolio กลาง ใช้บริการใด",
    "AWS Systems Manager|AWS CloudFormation|AWS Service Catalog|AWS Control Tower",
    "2",
    "AWS Service Catalog จัด Approved Products/Portfolios ให้ผู้ใช้ Self-service Provision ตาม Governance โดย CloudFormation เน้นการ Deploy Templates เป็น Infrastructure Stacks"
  ],
  [
    "3.2",
    "A team creates a VPC in a Region and then defines a subnet for an EC2 workload. What is the geographic boundary of that subnet?",
    "ทีมสร้าง VPC ใน Region แล้วสร้าง Subnet สำหรับ EC2 Subnet หนึ่งมีขอบเขตอยู่ในพื้นที่ใด",
    "AWS Region|Availability Zone|Edge location|Multi-Region deployment",
    "1",
    "VPC เป็น Resource ระดับ Region แต่แต่ละ Subnet อยู่ใน Availability Zone เดียว ไม่ขยายครอบหลาย AZs หรือ Regions"
  ],
  [
    "3.2",
    "An application needs a static global entry point that routes users over the AWS global network to healthy regional endpoints. Which service is designed for this?",
    "Application ต้องมี Global Entry Point แบบ Static IP และส่ง Traffic ผ่าน AWS Global Network ไป Regional Endpoints ที่ Healthy ใช้บริการใด",
    "Amazon Route 53|AWS Global Accelerator|Amazon CloudFront|Elastic Load Balancing",
    "1",
    "Global Accelerator ใช้ Anycast Static IPs และ AWS Global Network ไปยัง Healthy Regional Endpoints ขณะที่ CloudFront ทำ CDN Caching และ Route 53 เป็น DNS Routing"
  ],
  [
    "3.3",
    "An organization stores and versions Docker images so both ECS clusters and build pipelines can retrieve them. Which repository service fits?",
    "องค์กรต้องเก็บ/Version Docker Images ให้ ECS และ Build Pipelines ดึงมาใช้ได้ Repository Service ใดเหมาะ",
    "Amazon ECR|Amazon EKS|Amazon ECS|AWS CodeBuild",
    "0",
    "ECR เป็น Managed Container Image Registry ส่วน ECS/EKS Orchestrate Containers และ CodeBuild สร้าง Images ได้แต่ไม่ใช่ Image Registry"
  ],
  [
    "3.3",
    "An e-commerce platform needs instances added during high demand and distributes web requests across healthy targets. Which TWO capabilities should it combine? (Select TWO.)",
    "เว็บขายของต้องเพิ่มจำนวน EC2 ตอน Demand สูงและกระจาย Web Requests ไปยัง Healthy Targets ใช้สองความสามารถใด",
    "AWS Batch|AWS Step Functions|EC2 Auto Scaling|Elastic Load Balancing|AWS Lambda",
    "2,3",
    "EC2 Auto Scaling เพิ่ม/ลดจำนวน Instances ตามนโยบาย ส่วน Elastic Load Balancing กระจาย Traffic ตาม Health Checks และ Routing"
  ],
  [
    "3.3",
    "A small website's CPU is low most hours but occasionally spikes for short periods. Which EC2 capability is a suitable cost-conscious starting point?",
    "เว็บไซต์เล็กใช้ CPU ต่ำเกือบทั้งวัน แต่มี Burst สั้น ๆ เป็นครั้งคราว การเลือก EC2 แบบใดเหมาะเริ่มต้นโดยคิดต้นทุน",
    "AWS Compute Optimizer|Amazon Lightsail|Amazon EC2|AWS Batch",
    "2",
    "EC2 Burstable T Instance Family ใช้ CPU Credits รองรับ Bursts ได้ จึงเหมาะกับ Low Baseline CPU + Short Spikes กว่า Compute Optimizer ที่เป็นบริการแนะนำขนาด ไม่ใช่ตัวรัน Workload"
  ],
  [
    "3.3",
    "A finance department needs to queue thousands of independent container jobs that can retry without maintaining its own job scheduler. Which managed service directly handles the workload?",
    "ทีมการเงินต้อง Queue Container Jobs จำนวนมากและ Retry ได้โดยไม่ต้องเขียน Scheduler เอง บริการใดตรงที่สุด",
    "AWS Batch|Amazon ECS|AWS Step Functions|AWS Fargate",
    "0",
    "AWS Batch เป็นบริการจัด Queue, Scheduling และ Retry สำหรับ Batch Jobs โดย ECS/Fargate เป็นส่วนประมวลผล Container แต่ไม่แทน Batch Scheduler ครบวงจร"
  ],
  [
    "3.4",
    "A fast-growing application needs a distributed key-value store with automatic scaling instead of managing relational database servers. Which database should it use?",
    "Application โตเร็วต้องการ Distributed Key-value Database ที่ Scale ได้โดยไม่ดูแล Relational Database Servers ควรใช้ฐานข้อมูลใด",
    "Amazon DynamoDB|Amazon Aurora|Amazon RDS|Amazon ElastiCache",
    "0",
    "DynamoDB เป็น Managed NoSQL Key-value/Document Database ที่ Scale ตามความต้องการ ส่วน Aurora/RDS เป็น Relational DBs และ ElastiCache เป็น In-memory Cache"
  ],
  [
    "3.4",
    "A fraud investigation tool must traverse linked customer accounts, devices, and payments several hops deep. Which database model is specifically designed for this traversal?",
    "เครื่องมือตรวจ Fraud ต้องไล่ความสัมพันธ์หลายชั้นระหว่าง Accounts, Devices และ Payments ควรเลือก Database Model ใด",
    "Amazon DynamoDB|Amazon Neptune|Amazon DocumentDB|Amazon Redshift",
    "1",
    "Neptune เป็น Managed Graph Database เหมาะกับ Traversal ของ Relations หลายระดับ ต่างจาก DocumentDB ที่เน้น JSON Documents และ Redshift ที่เน้น Analytics"
  ],
  [
    "3.4",
    "A team has an expensive query cache in its self-managed application and wants a managed in-memory layer without replacing the primary SQL database. Which service fits?",
    "ทีมมี SQL Database หลักอยู่แล้ว ต้องการ Managed In-memory Cache ช่วยลด Query Load โดยไม่ย้าย Primary Database ใช้บริการใด",
    "Amazon DynamoDB|Amazon Aurora|Amazon ElastiCache|Amazon Redshift",
    "2",
    "ElastiCache เป็น Managed In-memory Caching ลด Latency/Read Load ส่วน DynamoDB/Aurora เป็น Data Stores หลัก และ Redshift เป็น Analytics Warehouse"
  ],
  [
    "3.5",
    "Contractors working remotely need encrypted client connections into a VPC, without a permanent office-to-AWS network link. Which service is tailored to their devices?",
    "Contractors ทำงานระยะไกล ต้องใช้ Client Connections เข้าสู่ VPC แบบเข้ารหัส ไม่ได้เชื่อม Data Center ถาวร ใช้บริการใด",
    "AWS Direct Connect|AWS Site-to-Site VPN|AWS Client VPN|AWS Transit Gateway",
    "2",
    "AWS Client VPN ใช้ Remote Users/Devices เข้า AWS Networks ผ่าน VPN Client ส่วน Site-to-Site VPN เชื่อมเครือข่ายสองฝั่ง และ Direct Connect เป็น Dedicated Link"
  ],
  [
    "3.5",
    "A private application in a VPC must reach a partner's endpoint service without placing traffic on the public internet. Which AWS connectivity feature enables this model?",
    "Private Application ใน VPC ต้องเข้า Partner Endpoint Service โดยไม่วิ่งผ่าน Public Internet ความสามารถใดรองรับ",
    "NAT Gateway|AWS PrivateLink|Internet Gateway|AWS Site-to-Site VPN",
    "1",
    "PrivateLink ให้ Private Connectivity ถึง Endpoint Services ผ่าน VPC Endpoints โดยไม่ต้องมี Public Internet Routing หรือ NAT Gateway"
  ],
  [
    "3.5",
    "A company needs one routing hub that links numerous VPCs and on-premises networks rather than creating many peer-to-peer links. Which service fits?",
    "บริษัทต้องมี Routing Hub กลางเชื่อมหลาย VPCs กับ On-premises Networks แทนการเชื่อมแบบคู่ต่อคู่ ใช้บริการใด",
    "AWS Direct Connect|AWS Transit Gateway|Amazon VPC|VPC endpoint",
    "1",
    "Transit Gateway เป็น Central Network Hub เชื่อม VPCs/VPN/DX Attachments ส่วน Direct Connect เป็น Dedicated Network Path ไม่ใช่ Hub หลาย VPCs"
  ],
  [
    "3.6",
    "An organization needs replication of physical and virtual servers to AWS and a recovery environment for a major data-center outage. Which storage-related disaster recovery service is purpose-built?",
    "องค์กรต้อง Replicate Physical/Virtual Servers ไป AWS เพื่อกู้คืนเมื่อ Data Center ใช้งานไม่ได้ ใช้บริการ DR ใด",
    "AWS Elastic Disaster Recovery|AWS Storage Gateway|AWS Backup|AWS Application Migration Service",
    "0",
    "AWS Elastic Disaster Recovery เน้น Continuous Replication เพื่อ Recover Servers เมื่อเกิด Disaster ส่วน Backup เน้น Restore Points และ Application Migration Service เน้นย้าย Workloads"
  ],
  [
    "3.6",
    "An office requires continuing access to cloud-backed shared files while it migrates other storage. Which hybrid service exposes familiar file interfaces on premises?",
    "สำนักงานต้องใช้ Shared Files ที่มี Cloud Storage เป็น Backend อย่างต่อเนื่องระหว่าง Migration บริการ Hybrid ใดมี File Interfaces ให้ On-premises",
    "Amazon EFS|AWS DataSync|AWS Storage Gateway|AWS Snowball Edge",
    "2",
    "Storage Gateway ให้ Hybrid File/Volume/Tape Access ที่เชื่อม AWS Storage ส่วน DataSync เน้น Transfer/Sync ข้อมูล และ Snowball Edge เหมาะกับ Offline Data Transfer/Edge"
  ],
  [
    "3.6",
    "A company has S3 objects that are read frequently during the first 30 days and then are rarely accessed. Which S3 capability moves them automatically based on age?",
    "บริษัทมี S3 Objects อ่านบ่อยเดือนแรก จากนั้นแทบไม่ใช้ ต้องการย้าย Storage Class ตามอายุ Object โดยอัตโนมัติ ใช้ความสามารถใด",
    "Amazon S3 Intelligent-Tiering|AWS Backup|AWS DataSync|Amazon S3",
    "3",
    "S3 Lifecycle Rules ให้กำหนด Transition ตามอายุ Object ไป Storage Classes ที่เหมาะสม ขณะที่ Intelligent-Tiering ใช้ Automation ตามรูปแบบ Access โดยไม่กำหนด Time-based Rule เอง"
  ],
  [
    "3.7",
    "A call center wants transcripts of voice calls to feed into a text analytics pipeline. Which managed AI capability converts audio to words?",
    "Call Center ต้องแปลงเสียงสนทนาเป็น Text Transcript เพื่อส่งต่อ Text Analytics ใช้บริการ AI ใด",
    "Amazon Polly|Amazon Textract|Amazon Comprehend|Amazon Transcribe",
    "3",
    "Transcribe แปลง Speech-to-Text ส่วน Polly เป็น Text-to-Speech, Comprehend วิเคราะห์ Text และ Textract ดึง Text จากเอกสาร"
  ],
  [
    "3.7",
    "A company runs large-scale Spark jobs on its data lake and wants a managed big-data execution platform. Which AWS service specializes in this?",
    "บริษัทต้องรัน Spark Jobs ขนาดใหญ่กับ Data Lake และอยากได้ Managed Platform สำหรับ Big Data Processing ควรใช้บริการใด",
    "Amazon Redshift|AWS Glue|Amazon Athena|Amazon EMR",
    "3",
    "EMR รองรับ Big Data Frameworks เช่น Spark/Hadoop ใน Managed Clusters ส่วน Athena คือ Serverless SQL Query และ Glue เน้น Data Integration/ETL"
  ],
  [
    "3.7",
    "A security operations team needs to index and search large volumes of application logs with near-real-time dashboards. Which service is designed for search analytics?",
    "SOC ต้อง Index/Search Application Logs จำนวนมากและทำ Near-real-time Search Dashboards บริการใดเน้น Search Analytics",
    "Amazon Quick Sight|Amazon CloudWatch|Amazon Athena|Amazon OpenSearch Service",
    "3",
    "OpenSearch Service เป็น Managed Search/Log Analytics Engine สำหรับ Indexed Log Search ส่วน Athena SQL Query บน S3 และ Quick Sight สร้าง BI Dashboards"
  ],
  [
    "3.8",
    "Employees need a controlled browser session to use internal web apps without being given a full virtual desktop. Which managed end-user service fits?",
    "พนักงานต้องเปิด Internal Web Apps ผ่าน Secure Managed Browser Session แต่ไม่ต้องการ Full Virtual Desktop ควรใช้บริการใด",
    "Amazon AppStream 2.0|AWS Amplify|Amazon WorkSpaces|Amazon WorkSpaces Secure Browser",
    "3",
    "WorkSpaces Secure Browser ให้ Managed Browser Sessions สำหรับ Web Access ส่วน WorkSpaces ให้ Virtual Desktops และ AppStream 2.0 Stream Applications"
  ],
  [
    "3.8",
    "A mobile team wants to publish a hosted frontend and connect authentication and backend features with an AWS-oriented developer workflow. Which service helps build these frontend applications?",
    "ทีม Mobile ต้อง Deploy Frontend และเชื่อม Authentication กับ Backend Features ผ่าน Developer Workflow ของ AWS บริการใดเหมาะ",
    "Amazon Cognito|Amazon API Gateway|AWS Elastic Beanstalk|AWS Amplify",
    "3",
    "Amplify ช่วยสร้าง/Deploy Frontend Web/Mobile Apps และ Integrate Backend Services ส่วน Cognito เป็น Identity Component และ API Gateway เป็น API Front Door"
  ]
]);
})();
