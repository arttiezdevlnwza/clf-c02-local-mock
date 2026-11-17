(() => {
  const rows=window.LOCAL_SET_09_ROWS=window.LOCAL_SET_09_ROWS||[];
  rows.push(...[
  [
    "3.1",
    "A cloud newcomer wants to create a single EC2 instance through a visual AWS interface for the first time. Which service provides the web-based interface?",
    "ผู้เริ่มต้น Cloud ต้องสร้าง EC2 Instance หนึ่งตัวผ่าน Web Interface แบบ Visual ครั้งแรก ใช้อะไร",
    "AWS CloudShell|AWS Management Console|AWS CloudFormation|AWS CDK",
    "1",
    "AWS Management Console เป็น Web Interface สำหรับใช้บริการ AWS ส่วน CloudShell เป็น Browser-based Terminal และ CloudFormation ใช้ Templates"
  ],
  [
    "3.1",
    "A factory must run supported AWS infrastructure and services inside its own facility to meet low-latency operational needs. Which AWS offering extends AWS infrastructure on premises?",
    "โรงงานต้องรัน AWS Infrastructure และ Services ที่รองรับภายในอาคารของตนเพื่อให้ Latency ต่ำ บริการใดนำ AWS Infrastructure ไปติดตั้ง On-premises",
    "AWS Outposts|AWS Region|AWS Cloud Adoption Framework|AWS Direct Connect",
    "0",
    "AWS Outposts นำ AWS Infrastructure ไปติดตั้งที่ Customer Premises ส่วน Direct Connect เชื่อม Network ไป AWS Region โดยไม่ได้ติดตั้ง Infrastructure ที่โรงงาน"
  ],
  [
    "3.2",
    "A manufacturer wants a backup application in another geographic area to survive a large regional disruption. What should it use in addition to its primary Region?",
    "ผู้ผลิตต้องการ Backup Application ในอีกพื้นที่ภูมิศาสตร์เพื่อรับมือ Regional Disruption ควรใช้สิ่งใดเพิ่มเติมจาก Primary Region",
    "Availability Zone|Edge location|Multi-Region deployment|Multi-AZ deployment",
    "2",
    "Multi-Region ช่วยแยกความเสี่ยงระดับภูมิศาสตร์ ส่วน Multi-AZ ยังอยู่ใน Region เดียวกัน"
  ],
  [
    "3.2",
    "A news site wants cached images served close to global readers without deploying complete application stacks in every country. Which infrastructure component supports this?",
    "เว็บข่าวต้องการส่ง Cached Images ใกล้ผู้อ่านทั่วโลก โดยไม่ Deploy Application เต็มชุดทุกประเทศ องค์ประกอบใดช่วย",
    "Edge location|Availability Zone|AWS Region|Multi-AZ deployment",
    "0",
    "Edge Locations ให้ CDN ส่งเนื้อหาใกล้ผู้ใช้ ขณะที่ Regions/AZs เป็นที่ Deploy Workloads"
  ],
  [
    "3.3",
    "An application requires full control over the installed operating system and custom system packages. Which compute service provides this level of control?",
    "Application ต้องควบคุม Installed OS และติดตั้ง System Packages แบบพิเศษได้เต็มที่ ใช้ Compute Service ใด",
    "AWS Lambda|AWS Fargate|Amazon EC2|AWS Elastic Beanstalk",
    "2",
    "EC2 ให้ควบคุม Guest OS และ Software Stack ส่วน Lambda และ Fargate ซ่อน Host Infrastructure จากผู้ใช้"
  ],
  [
    "3.3",
    "A business needs to run hundreds of independent image-conversion jobs overnight with job scheduling and retries. Which service is purpose-built for queued batch jobs?",
    "บริษัทต้องรัน Image-conversion Jobs อิสระหลายร้อยงานตอนกลางคืน ต้องจัดคิว Jobs และ Retry ควรใช้บริการใด",
    "AWS Batch|AWS Lambda|Amazon ECS|AWS Step Functions",
    "0",
    "AWS Batch ใช้ Queue/Run Batch Computing Jobs ส่วน Step Functions จัด Workflow Steps และ ECS จัด Container Services"
  ],
  [
    "3.3",
    "An organization wants AWS-native container orchestration and serverless compute for its containers. Which TWO services address these different parts? (Select TWO.)",
    "องค์กรต้องการ AWS-native Container Orchestration และ Serverless Compute ให้ Containers สองบริการใดช่วยคนละหน้าที่",
    "Amazon ECS|Amazon EKS|AWS Fargate|Amazon EC2|AWS Batch",
    "0,2",
    "ECS เป็น Container Orchestrator แบบ AWS-native ส่วน Fargate ให้ Serverless Compute ที่รัน Container Tasks โดยไม่ดูแล EC2 Hosts"
  ],
  [
    "3.3",
    "A team wants to deploy a conventional web application while AWS handles much of the environment provisioning, scaling, and health monitoring. Which service helps?",
    "ทีมต้องการ Deploy Web Application แบบเดิม โดย AWS ช่วย Provision Environment, Scaling และ Health Monitoring ใช้บริการใด",
    "Amazon EC2|AWS Elastic Beanstalk|AWS Batch|AWS Fargate",
    "1",
    "Elastic Beanstalk จัดการ Application Environment แบบ PaaS-style ส่วน EC2 ต้องสร้าง/ดูแล Components มากกว่า"
  ],
  [
    "3.4",
    "A shopping app needs a managed key-value database that responds consistently with low latency at massive scale. Which service is the direct fit?",
    "Shopping App ต้องการ Managed Key-value Database ที่ Low Latency เมื่อ Scale สูงมาก บริการใดตรง",
    "Amazon RDS|Amazon DynamoDB|Amazon Aurora|Amazon ElastiCache",
    "1",
    "DynamoDB เป็น Managed NoSQL Key-value/Document Database ส่วน RDS/Aurora เป็น Relational และ ElastiCache มุ่ง In-memory"
  ],
  [
    "3.4",
    "An application uses JSON-like document records and needs a managed database compatible with MongoDB APIs. Which database service matches?",
    "Application เก็บ JSON-like Document Records และต้องการ Managed Database ที่ Compatible กับ MongoDB APIs ใช้บริการใด",
    "Amazon DocumentDB|Amazon DynamoDB|Amazon Neptune|Amazon Aurora",
    "0",
    "DocumentDB เหมาะกับ Document Workloads และ MongoDB Compatibility ต่างจาก Neptune ที่เน้น Graph Relationships"
  ],
  [
    "3.4",
    "A firm changes database engines and must convert incompatible schema definitions and then migrate records. Which TWO services handle the distinct stages? (Select TWO.)",
    "บริษัทเปลี่ยน Database Engine ต้อง Convert Incompatible Schemas ก่อน แล้วจึงย้าย Records สองบริการใดทำหน้าที่แยกกัน",
    "AWS SCT|AWS Application Migration Service|AWS DMS|AWS Migration Hub|AWS Application Discovery Service",
    "0,2",
    "AWS SCT เปลี่ยน Schema/Database Code ให้เข้ากับ Target ส่วน AWS DMS ย้ายหรือ Replicate Data"
  ],
  [
    "3.5",
    "A company wants customers to reach an application through a domain name rather than a changing IP address. Which managed DNS service fits?",
    "บริษัทต้องการให้ลูกค้าเข้า Application ผ่าน Domain Name แทน IP ที่อาจเปลี่ยน ควรใช้ Managed DNS Service ใด",
    "Amazon Route 53|Amazon CloudFront|AWS Global Accelerator|Amazon VPC",
    "0",
    "Route 53 ให้ DNS Resolution และ Routing Policies ส่วน CloudFront เป็น CDN และ Global Accelerator เพิ่มประสิทธิภาพ Network Path"
  ],
  [
    "3.5",
    "A network team needs inbound rules applied to one EC2 instance's network interface rather than to an entire subnet. Which control fits?",
    "ทีม Network ต้องกำหนด Inbound Rules เฉพาะ Network Interface ของ EC2 ไม่ใช่ทั้ง Subnet ใช้ Control ใด",
    "Network ACL|Security group|AWS WAF|AWS Shield",
    "1",
    "Security Group เป็น Stateful Firewall ระดับ ENI ส่วน Network ACL ใช้กับ Subnet และเป็น Stateless"
  ],
  [
    "3.5",
    "A firm wants a dedicated connectivity path from its office to AWS and a central hub for many VPC networks. Which TWO services satisfy those different goals? (Select TWO.)",
    "บริษัทต้องการ Dedicated Connectivity จากสำนักงานสู่ AWS และ Hub สำหรับเชื่อมหลาย VPC Networks สองบริการใดตรงแต่ละหน้าที่",
    "AWS Direct Connect|AWS Site-to-Site VPN|AWS Transit Gateway|VPC endpoint|NAT Gateway",
    "0,2",
    "Direct Connect เป็น Dedicated Network Connection ไป AWS ส่วน Transit Gateway เป็น Hub เชื่อมหลาย VPCs/Networks"
  ],
  [
    "3.6",
    "A website stores millions of user-uploaded photos and videos accessed via object URLs. Which storage type is the primary fit?",
    "เว็บไซต์เก็บ Photos/Videos ที่ผู้ใช้อัปโหลดจำนวนมากและเข้าถึงผ่าน Object URLs Storage ใดเหมาะเป็นหลัก",
    "Amazon EBS|Amazon EFS|Amazon S3|Instance store",
    "2",
    "S3 เป็น Object Storage ที่ Scale สูงและเข้าถึงเป็น Objects ส่วน EBS เป็น Block Disk และ EFS เป็น File System"
  ],
  [
    "3.6",
    "An enterprise needs Windows-native shared file storage with SMB protocol for legacy departmental applications. Which service is appropriate?",
    "องค์กรต้องการ Shared File Storage แบบ Windows-native ผ่าน SMB สำหรับ Legacy Department Apps ควรใช้บริการใด",
    "Amazon EFS|Amazon FSx for Windows File Server|Amazon EBS|Amazon S3",
    "1",
    "FSx for Windows File Server เป็น Managed Windows File System รองรับ SMB ขณะที่ EFS เหมาะกับ Linux NFS Workloads"
  ],
  [
    "3.6",
    "An application needs attached persistent block storage and the organization also needs to manage backups centrally. Which TWO services directly meet these distinct needs? (Select TWO.)",
    "Application ต้องการ Persistent Block Storage ที่ Attach กับ EC2 และองค์กรต้องบริหาร Backups จากส่วนกลาง สองบริการใดตรง",
    "Amazon EBS|AWS Backup|Instance store|Amazon EFS|AWS DataSync",
    "0,1",
    "EBS ให้ Block Storage ที่ Persistent และ AWS Backup รวมศูนย์นโยบาย Backup สำหรับ Supported Services"
  ],
  [
    "3.7",
    "A company wants to visualize business metrics in interactive dashboards using existing analytics data. Which AWS service fits?",
    "บริษัทต้องการ Visualize Business Metrics เป็น Interactive Dashboards จาก Analytics Data ที่มีอยู่ บริการใดเหมาะ",
    "Amazon Athena|AWS Glue|Amazon Quick Sight|Amazon Redshift",
    "2",
    "Quick Sight เป็น BI Visualization Service ส่วน Athena รัน SQL และ Glue ช่วย Data Integration"
  ],
  [
    "3.7",
    "A product team wants to identify sentiment and entities in customer reviews, rather than translate reviews between languages. Which AI service fits?",
    "ทีม Product ต้องวิเคราะห์ Sentiment และ Entities ใน Customer Reviews ไม่ได้ต้องการแปลภาษา บริการ AI ใดเหมาะ",
    "Amazon Comprehend|Amazon Translate|Amazon Lex|Amazon Polly",
    "0",
    "Comprehend วิเคราะห์ Natural-language Text เช่น Sentiment/Entities ส่วน Translate แปลภาษา Lex ทำ Chatbots และ Polly สร้าง Speech"
  ],
  [
    "3.8",
    "An e-commerce application must publish one order-created notification to multiple independent subscribers simultaneously. Which messaging service is designed for fan-out?",
    "E-commerce Application ต้องส่ง Order-created Notification เดียวไปให้ Subscribers หลายกลุ่มพร้อมกัน บริการใดออกแบบมาเพื่อ Fan-out",
    "Amazon SQS|Amazon SNS|AWS Step Functions|Amazon EventBridge",
    "1",
    "SNS ใช้ Pub/Sub Fan-out ไป Subscribers หลายปลายทาง ต่างจาก SQS ที่ให้ Workers ดึง Messages จาก Queue"
  ],
  [
    "3.8",
    "A manufacturer connects devices that continuously send telemetry to the cloud using an IoT-specific managed service. Which service should it consider?",
    "ผู้ผลิตเชื่อม Devices ที่ส่ง Telemetry ขึ้น Cloud ต่อเนื่อง โดยต้องการ Managed Service เฉพาะงาน IoT ใช้บริการใด",
    "AWS IoT Core|Amazon Kinesis Data Streams|Amazon SNS|Amazon SES",
    "0",
    "IoT Core ใช้เชื่อมและจัดการ IoT Device Messaging ส่วน Kinesis รับ Streaming Data ในระบบ Analytics"
  ],
  [
    "3.8",
    "A development team needs a managed build service to compile and test source code, plus a service that models multi-step application state transitions. Which TWO fit? (Select TWO.)",
    "ทีม Developer ต้องใช้ Managed Build สำหรับ Compile/Test Code และบริการอีกตัวทำ Multi-step Application State Transitions สองบริการใดตอบโจทย์",
    "AWS CodeBuild|AWS CodePipeline|AWS Step Functions|AWS X-Ray|Amazon EventBridge",
    "0,2",
    "CodeBuild รัน Build/Test Jobs ส่วน Step Functions ประสาน Workflow Steps ต่างจาก CodePipeline ที่จัด CI/CD Pipeline ทั้งเส้น"
  ]
]);
})();
