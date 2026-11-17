(() => {
  const rows=window.LOCAL_SET_10_ROWS=window.LOCAL_SET_10_ROWS||[];
  rows.push(...[
  [
    "3.1",
    "An engineer wants to manage AWS services from repeatable shell scripts running on a workstation, without clicking through web pages. Which tool provides the AWS commands?",
    "Engineer ต้อง Manage AWS Services จาก Shell Scripts ที่รันบน Workstation ซ้ำได้ โดยไม่คลิกหน้า Web ควรใช้เครื่องมือใด",
    "AWS CLI|AWS Management Console|AWS CloudFormation|AWS CloudShell",
    "0",
    "AWS CLI เป็น Command-line Tool ที่ใช้ Script AWS API Operations จาก Workstation ได้ ส่วน CloudShell เป็น Browser Terminal"
  ],
  [
    "3.1",
    "A development team wants to define AWS infrastructure in TypeScript and have the resulting CloudFormation templates generated for deployment. Which tool fits?",
    "ทีม Developer ต้องการนิยาม AWS Infrastructure ด้วย TypeScript และให้ Generate CloudFormation Templates สำหรับ Deploy ใช้เครื่องมือใด",
    "AWS CDK|AWS CloudFormation|AWS CloudShell|AWS Config",
    "0",
    "AWS CDK ให้นิยาม Infrastructure ด้วย Programming Languages และ Synthesizes CloudFormation Templates ต่างจากเขียน Templates ตรงด้วย CloudFormation"
  ],
  [
    "3.2",
    "A business runs production in one Region and needs to withstand loss of an entire Region. Which placement strategy addresses this larger failure scope?",
    "บริษัทเปิด Production ใน Region เดียว แต่ต้องการรับมือเมื่อ Region ทั้งหมดใช้ไม่ได้ ควรวาง Workloads อย่างไร",
    "Multi-AZ deployment|Multi-Region deployment|Edge location|Availability Zone",
    "1",
    "Multi-Region Deployment กระจายงานข้าม Regions ต่างจาก Multi-AZ ที่อยู่ใน Region เดียวกัน"
  ],
  [
    "3.2",
    "A web application wants static content cached in locations geographically close to users worldwide. Which AWS component is designed for this?",
    "Web Application ต้อง Cache Static Content ในสถานที่ที่ใกล้ Users ทั่วโลก องค์ประกอบใดออกแบบมาเพื่องานนี้",
    "Availability Zone|AWS Region|Edge location|Multi-AZ deployment",
    "2",
    "Edge Locations ใช้กระจาย Content ใกล้ผู้ใช้โดย CDN ไม่ใช่ AZ ที่ใช้วาง Compute/Storage Workloads"
  ],
  [
    "3.3",
    "A finance team needs managed compute to run periodic batch calculations that can be queued and retried. Which service is specifically built for batch scheduling?",
    "ทีม Finance ต้องมี Managed Compute สำหรับ Periodic Batch Calculations ที่ Queued และ Retried ได้ บริการใดเหมาะ",
    "AWS Batch|AWS Lambda|Amazon ECS|AWS Step Functions",
    "0",
    "AWS Batch เป็นบริการจัดคิวและรัน Batch Jobs ส่วน Lambda เหมาะกับ Event-driven Functions และ Step Functions จัด Workflow"
  ],
  [
    "3.3",
    "A company uses container images and wants to run short-lived ECS tasks without configuring EC2 capacity. Which compute platform matches?",
    "บริษัทมี Container Images และต้องรัน ECS Tasks ระยะสั้นโดยไม่ตั้ง EC2 Capacity ใช้ Compute Platform ใด",
    "Amazon EC2|AWS Fargate|AWS Elastic Beanstalk|Amazon Lightsail",
    "1",
    "Fargate รัน Containers โดยไม่จัดการ Server Hosts ต่างจาก EC2 ที่ต้องดูแล Compute Instances"
  ],
  [
    "3.3",
    "A new small-business website wants a simplified package including virtual compute and predictable bundled pricing instead of many AWS building blocks. Which service fits?",
    "เว็บไซต์ธุรกิจเล็กต้องการ Package ที่รวม Virtual Compute กับ Bundled Pricing เข้าใจง่าย ไม่ต้องประกอบ AWS หลายบริการ ควรใช้ใด",
    "Amazon Lightsail|Amazon EC2|AWS Batch|Amazon ECS",
    "0",
    "Lightsail ให้บริการ Virtual Server แบบ Bundled สำหรับงานเริ่มต้น ส่วน EC2 มีตัวเลือกยืดหยุ่นแต่ต้องจัดการองค์ประกอบมากกว่า"
  ],
  [
    "3.3",
    "A retailer wants to adjust the number of EC2 instances automatically and separately balance traffic across healthy targets. Which TWO services fit? (Select TWO.)",
    "Retailer ต้องปรับจำนวน EC2 Instances อัตโนมัติ และกระจาย Traffic ไป Healthy Targets ด้วยบริการอีกตัว สองบริการใดตรง",
    "EC2 Auto Scaling|Elastic Load Balancing|AWS Batch|AWS Lambda|AWS Fargate",
    "0,1",
    "EC2 Auto Scaling เพิ่ม/ลด Instances ส่วน Elastic Load Balancing กระจาย Requests ไปยัง Healthy Targets"
  ],
  [
    "3.4",
    "A transaction processing application needs SQL relationships and PostgreSQL-compatible managed infrastructure. Which database is suitable?",
    "Application ธุรกรรมต้องใช้ SQL Relationships และ Managed Database ที่ PostgreSQL-compatible ตัวใดเหมาะ",
    "Amazon DynamoDB|Amazon Aurora|Amazon Neptune|Amazon ElastiCache",
    "1",
    "Aurora เป็น Relational Database ที่มี PostgreSQL Compatibility ส่วน DynamoDB เป็น NoSQL และ Neptune เป็น Graph"
  ],
  [
    "3.4",
    "A fraud model traverses networks of related accounts and transactions to find suspicious connections. Which database model is appropriate?",
    "Fraud Model ต้องไล่ความสัมพันธ์เชื่อม Accounts และ Transactions เพื่อหา Suspicious Connections Database ใดเหมาะ",
    "Amazon DocumentDB|Amazon RDS|Amazon Neptune|Amazon Redshift",
    "2",
    "Neptune ใช้ Graph Model สำหรับ Connected Relationships ไม่ใช่ Relational Analytics Warehouse แบบ Redshift"
  ],
  [
    "3.4",
    "A company changes from an on-premises database engine to a different AWS database engine, requiring schema conversion and data migration. Which TWO services support the two tasks? (Select TWO.)",
    "บริษัทเปลี่ยน Database Engine On-premises ไปยัง AWS Database Engine อีกชนิด ต้องทำ Schema Conversion และ Data Migration สองบริการใดช่วย",
    "AWS DMS|AWS SCT|AWS Application Migration Service|AWS Migration Hub|AWS Storage Gateway",
    "0,1",
    "AWS SCT แปลง Schema ให้เข้ากับ Target Engine และ AWS DMS เคลื่อน/Replicate Database Data"
  ],
  [
    "3.5",
    "An enterprise wants a dedicated private network connection from its data center to AWS, rather than an encrypted tunnel over its ordinary internet link. Which service fits?",
    "องค์กรต้องการ Dedicated Private Network จาก Data Center ไป AWS ไม่ใช่ VPN Tunnel ผ่าน Internet ปกติ ใช้บริการใด",
    "AWS Site-to-Site VPN|AWS Direct Connect|NAT Gateway|VPC endpoint",
    "1",
    "Direct Connect ให้ Dedicated Connectivity ไป AWS ส่วน Site-to-Site VPN สร้าง Encrypted Tunnel บน Internet"
  ],
  [
    "3.5",
    "A network engineer wants stateless rules applied to an entire VPC subnet rather than to individual instances. Which security control fits?",
    "Network Engineer ต้องการ Stateless Rules ครอบคลุมทั้ง VPC Subnet แทนควบคุมเฉพาะ Instances ควรใช้สิ่งใด",
    "Security group|Network ACL|AWS WAF|AWS Shield",
    "1",
    "Network ACL เป็น Stateless Filtering ระดับ Subnet ส่วน Security Group Stateful และผูก ENI"
  ],
  [
    "3.5",
    "A VPC architecture requires an internet route for resources in a public subnet and outbound-only internet access for private subnet instances. Which TWO gateways address the distinct needs? (Select TWO.)",
    "VPC ต้องมี Internet Route ให้ Public Subnet และให้ Private Subnet Instances ออก Internet ได้โดยไม่รับการเชื่อมต่อเข้าโดยตรง Gateways ใดสองตัวทำหน้าที่",
    "Internet Gateway|NAT Gateway|VPC endpoint|AWS Direct Connect|AWS Transit Gateway",
    "0,1",
    "Internet Gateway เชื่อม VPC กับ Internet ตาม Routes ส่วน NAT Gateway ช่วยให้ Private Subnet Initiate Outbound Internet Connections"
  ],
  [
    "3.6",
    "An archive holds records rarely retrieved and allows retrieval to take many hours in return for the lowest storage cost. Which S3 class fits?",
    "Archive เก็บ Records ที่แทบไม่เรียกคืน และยอมให้ Retrieval ใช้เวลาหลายชั่วโมงเพื่อประหยัดค่าเก็บข้อมูลที่สุด S3 Class ใดเหมาะ",
    "Amazon S3 Standard-IA|Amazon S3 Intelligent-Tiering|Amazon S3 Glacier Deep Archive|Amazon S3",
    "2",
    "Glacier Deep Archive เหมาะกับ Long-term Archive ที่ยอมรับ Retrieval Time สูง ส่วน Standard-IA และ Intelligent-Tiering เหมาะกับ Access Pattern ที่ต่างออกไป"
  ],
  [
    "3.6",
    "An EC2 application needs a dedicated persistent disk volume rather than shared file access from multiple machines. Which AWS storage service is appropriate?",
    "Application บน EC2 ต้องใช้ Persistent Disk Volume สำหรับเครื่อง ไม่ได้ต้องการ Shared File Access จากหลายเครื่อง ใช้ Storage ใด",
    "Amazon EFS|Amazon EBS|Amazon S3|AWS Storage Gateway",
    "1",
    "EBS ให้ Block Storage เป็น Disk สำหรับ EC2 ต่างจาก EFS เป็น Shared File System และ S3 เป็น Object Storage"
  ],
  [
    "3.6",
    "An on-premises team wants hybrid access to cloud-backed files and a managed service to move large data sets between existing storage systems. Which TWO AWS services fit? (Select TWO.)",
    "ทีม On-premises ต้องใช้ Hybrid Access กับ Cloud-backed Files และ Managed Service สำหรับโอนข้อมูลขนาดใหญ่ระหว่าง Storage Systems สองบริการใดตรง",
    "AWS Storage Gateway|AWS DataSync|Amazon S3 Intelligent-Tiering|Amazon EBS|AWS Backup",
    "0,1",
    "Storage Gateway เชื่อม On-premises กับ AWS Storage แบบ Hybrid ส่วน DataSync ใช้ย้ายหรือ Sync ข้อมูลระหว่าง Storage Locations"
  ],
  [
    "3.7",
    "A data platform needs to ingest a continuous stream of application events and separately query stored events in S3 using SQL. Which TWO AWS services match? (Select TWO.)",
    "Data Platform ต้อง Ingest Application Events ต่อเนื่อง และ Query Events ที่เก็บใน S3 ด้วย SQL สองบริการใดทำหน้าที่นี้",
    "Amazon Kinesis Data Streams|Amazon Athena|AWS Glue|Amazon Redshift|Amazon Quick Sight",
    "0,1",
    "Kinesis Data Streams รับ Streaming Records ต่อเนื่อง ส่วน Athena Query Data ที่อยู่ใน S3 ด้วย SQL"
  ],
  [
    "3.7",
    "A company wants automated detection of entities and language within text documents, rather than extracting printed text from scanned images. Which AI service is designed for text analysis?",
    "บริษัทต้องวิเคราะห์ Entities และ Language ใน Text Documents ไม่ใช่ Extract Printed Text จาก Scanned Images บริการ AI ใดเหมาะ",
    "Amazon Textract|Amazon Comprehend|Amazon Rekognition|Amazon Polly",
    "1",
    "Comprehend ทำ Natural Language Processing กับ Text ส่วน Textract ดึง Text จาก Scanned Documents และ Rekognition วิเคราะห์ภาพ"
  ],
  [
    "3.8",
    "A company wants application events routed to different services depending on their event source and content. Which managed event bus fits?",
    "บริษัทต้อง Route Application Events ไป Services ต่างกันตาม Event Source และ Content บริการ Event Bus ใดเหมาะ",
    "Amazon SNS|Amazon EventBridge|Amazon SQS|AWS Step Functions",
    "1",
    "EventBridge จับ Event Patterns และส่งไป Targets ต่าง ๆ ส่วน SNS เป็น Pub/Sub และ SQS เป็น Queue"
  ],
  [
    "3.8",
    "A company needs a cloud contact center with voice and chat support for customer agents. Which business service fits?",
    "บริษัทต้องใช้ Cloud Contact Center ที่รองรับ Voice และ Chat สำหรับ Customer Agents ใช้บริการใด",
    "Amazon SES|Amazon Connect|Amazon SNS|Amazon WorkSpaces",
    "1",
    "Amazon Connect เป็น Cloud Contact Center ส่วน SES ใช้ส่ง Email และ WorkSpaces ให้ Virtual Desktops"
  ],
  [
    "3.8",
    "A software team needs a service to coordinate source changes, build and deployment stages into an automated release pipeline. Which service is designed for the pipeline?",
    "ทีม Software ต้องประสาน Source Changes, Build และ Deployment Stages เป็น Automated Release Pipeline ใช้บริการใด",
    "AWS CodeBuild|AWS CodePipeline|AWS X-Ray|AWS CloudFormation",
    "1",
    "CodePipeline Orchestrate CI/CD Stages ส่วน CodeBuild รับงาน Build/Test และ X-Ray ช่วย Tracing Applications"
  ]
]);
})();
