(() => {
  const rows = window.LOCAL_SET_07_ROWS = window.LOCAL_SET_07_ROWS || [];
  rows.push(...[
  [
    "3.1",
    "An infrastructure engineer must repeatedly launch identical network and compute environments from a declarative JSON file and track updates as stacks. Which service performs this provisioning?",
    "Infrastructure Engineer ต้อง Launch Network และ Compute Environments ที่เหมือนกันซ้ำ ๆ จาก Declarative JSON File และติดตาม Updates เป็น Stacks บริการใดทำ Provisioning",
    "AWS CDK|AWS Elastic Beanstalk|AWS CloudFormation|AWS CodePipeline",
    "2",
    "CloudFormation ใช้ Declarative Templates เพื่อ Provision/Update Infrastructure Stacks; CDK ใช้เขียน Infrastructure Code เพื่อสร้าง Templates"
  ],
  [
    "3.1",
    "A web team wants to upload its application artifact and let an AWS managed platform deploy and monitor the application environment without specifying individual compute resources. Which service fits?",
    "ทีมเว็บต้องการ Upload Application Artifact แล้วให้ AWS Managed Platform Deploy และ Monitor Application Environment โดยไม่ต้องระบุ Compute Resources ทีละตัว ใช้ Service ใด",
    "AWS CloudFormation|AWS Elastic Beanstalk|AWS CDK|Amazon EC2",
    "1",
    "Elastic Beanstalk ช่วย Deploy Application พร้อมสร้าง/ดูแล Environment; CloudFormation เน้น Infrastructure Stacks"
  ],
  [
    "3.2",
    "A healthcare service needs isolated infrastructure locations within the same Region so that an outage in one site does not take down all application instances. Which term refers to those locations?",
    "Healthcare Service ต้องใช้ Infrastructure Locations ที่แยกกันภายใน Region เดียวเพื่อให้ Site หนึ่งล่มแล้ว Application ยังทำงาน พื้นที่เหล่านี้เรียกว่าอะไร",
    "AWS Region|Availability Zone|Edge location|Multi-Region deployment",
    "1",
    "Availability Zones แยก Infrastructure ภายใน AWS Region; Multi-AZ Deployment ช่วย Availability ต่อ AZ Outage"
  ],
  [
    "3.2",
    "A website's dynamic backend stays in one AWS Region, but static product pictures should be served through a global edge caching service. Which service provides the CDN?",
    "Backend ของเว็บยังอยู่ Region เดียว แต่ Static Product Pictures ต้องส่งผ่าน Global Edge Caching Service ใช้บริการใดเป็น CDN",
    "Amazon Route 53|Amazon CloudFront|Edge location|AWS Region",
    "1",
    "CloudFront เป็น CDN ที่ Cache Content ผ่าน Edge Locations; Route 53 เป็น DNS ไม่ใช่ CDN"
  ],
  [
    "3.3",
    "An organization already uses Amazon ECS but wants to stop maintaining the underlying EC2 cluster used by its container tasks. Which option changes the compute layer?",
    "องค์กรใช้ ECS อยู่แล้ว แต่ต้องการเลิกดูแล EC2 Cluster ที่รัน Container Tasks ต้องเปลี่ยน Compute Layer เป็นอะไร",
    "Amazon EKS|AWS Fargate|Amazon ECS|Amazon EC2",
    "1",
    "Fargate ให้ Serverless Compute สำหรับ ECS Tasks; ECS ยังจัด Task Scheduling/Orchestration ต่อไป"
  ],
  [
    "3.3",
    "A developer needs to keep an existing Kubernetes deployment model but wants its pods to use managed serverless compute instead of EC2 worker hosts. Which TWO services form this combination? (Select TWO.)",
    "Developer ต้องคง Kubernetes Deployment Model เดิม แต่ต้องการให้ Pods ใช้ Serverless Compute แทน EC2 Worker Hosts ข้อใดสอง Services ใช้ร่วมกัน",
    "Amazon ECS|Amazon EKS|AWS Fargate|Amazon EC2|AWS Batch",
    "1,2",
    "Amazon EKS ให้ Managed Kubernetes Control Plane ส่วน AWS Fargate เป็น Serverless Compute สำหรับ Compatible Kubernetes Pods"
  ],
  [
    "3.3",
    "An analytics vendor must install low-level debugging packages and retain full control of the Linux guest OS running its application. Which compute option provides that control?",
    "Analytics Vendor ต้องติดตั้ง Low-level Debugging Packages และควบคุม Linux Guest OS ของ Application เต็มที่ Compute Option ใดให้สิทธิ์นี้",
    "AWS Lambda|Amazon EC2|AWS Fargate|AWS Elastic Beanstalk",
    "1",
    "Amazon EC2 เป็น Virtual Server ที่ลูกค้าควบคุม Guest OS/Packages ได้; Lambda/Fargate ไม่เปิด Host Access แบบเดียวกัน"
  ],
  [
    "3.3",
    "A scheduled event must execute a short data-validation function and stop after a few seconds, without maintaining a persistent application server. Which compute service fits?",
    "Scheduled Event ต้องรัน Data-validation Function สั้น ๆ ไม่กี่วินาทีโดยไม่เปิด Persistent Application Server ค้างไว้ ควรใช้ Compute Service ใด",
    "AWS Batch|AWS Lambda|Amazon EC2|Amazon ECS",
    "1",
    "Lambda เป็น Serverless Event-driven Compute สำหรับ Short-lived Functions; ECS/EC2 ใช้รูปแบบ Hosting ที่ต่างกัน"
  ],
  [
    "3.4",
    "A large online service stores session records by user key and expects single-digit millisecond operations at scale using a managed NoSQL database. Which service is designed for it?",
    "Online Service ขนาดใหญ่เก็บ Session Records ตาม User Key ต้องการ Operation Latency ต่ำมากใน Scale สูงด้วย Managed NoSQL Database ควรเลือกอะไร",
    "Amazon DynamoDB|Amazon RDS|Amazon ElastiCache|Amazon DocumentDB",
    "0",
    "DynamoDB เป็น Managed NoSQL Key-value/Document Database ที่ Scale สูงและให้ Low-latency Operations; ElastiCache เป็น In-memory Cache"
  ],
  [
    "3.4",
    "A risk engine analyzes multi-level relationships between identities, devices, and fraudulent transactions as a graph. Which service supports this data model natively?",
    "Risk Engine วิเคราะห์ความสัมพันธ์หลายชั้นระหว่าง Identities, Devices และ Fraudulent Transactions ในรูป Graph Database ใดรองรับ Model นี้โดยตรง",
    "Amazon DocumentDB|Amazon DynamoDB|Amazon Neptune|Amazon Aurora",
    "2",
    "Neptune ออกแบบมาสำหรับ Graph Nodes/Edges/Traversals และ Fraud Relationship Queries ไม่ใช่ Document/Relational Store ทั่วไป"
  ],
  [
    "3.4",
    "A business-intelligence team runs repeated SQL aggregations on very large datasets already loaded into a managed warehouse. Which AWS service should it select?",
    "ทีม Business Intelligence รัน SQL Aggregations ซ้ำ ๆ บนข้อมูลขนาดใหญ่มากที่ Load เข้า Managed Warehouse แล้ว ควรเลือก AWS Service ใด",
    "Amazon Redshift|Amazon Athena|AWS Glue|Amazon RDS",
    "0",
    "Redshift เป็น Analytics Data Warehouse; Athena เป็น Serverless SQL บน S3 ที่ไม่ต้อง Load Warehouse"
  ],
  [
    "3.5",
    "A network team must explicitly deny an IP range at the subnet boundary and understands that inbound and outbound rules are evaluated separately. Which control applies?",
    "ทีม Network ต้อง Deny IP Range ที่ Subnet Boundary และเข้าใจว่า Inbound/Outbound Rules ถูกประเมินแยกกัน ใช้ Control ใด",
    "Security group|Network ACL|AWS WAF|AWS Shield",
    "1",
    "Network ACL เป็น Stateless Subnet-level Firewall รองรับ Allow/Deny; Security Group เป็น Stateful ENI-level Rules"
  ],
  [
    "3.5",
    "Private EC2 instances require outbound access to public operating-system package repositories without accepting direct inbound connections. Which network component is best?",
    "Private EC2 Instances ต้องออกไป Public OS Package Repositories แต่ไม่รับ Direct Inbound Connections ควรใช้ Network Component ใด",
    "Internet Gateway|VPC endpoint|NAT Gateway|AWS Direct Connect",
    "2",
    "NAT Gateway ให้ Private Subnet เริ่ม Outbound Internet Connections; VPC Endpoint ใช้ AWS Service Access แบบ Private"
  ],
  [
    "3.5",
    "A firm needs an encrypted tunnel from headquarters over its internet link, and separately wants an S3 private access path for EC2 instances inside its VPC. Which TWO AWS options match? (Select TWO.)",
    "บริษัทต้องการ Encrypted Tunnel จากสำนักงานใหญ่ผ่าน Internet และ S3 Private Access Path สำหรับ EC2 ใน VPC ข้อใดสอง Options ตรงโจทย์",
    "AWS Site-to-Site VPN|AWS Direct Connect|VPC endpoint|Internet Gateway|AWS Transit Gateway",
    "0,2",
    "Site-to-Site VPN ให้ Encrypted Tunnel จาก On-prem ผ่าน Internet ส่วน VPC Endpoint ให้ Private Access จาก VPC ไป S3"
  ],
  [
    "3.6",
    "A finance database requires a persistent block disk attached to its EC2 server, including the ability to take volume snapshots. Which AWS storage service fits?",
    "Finance Database ต้องการ Persistent Block Disk ผูกกับ EC2 Server และทำ Volume Snapshots ได้ Storage Service ใดเหมาะ",
    "Instance store|Amazon EFS|Amazon EBS|Amazon S3",
    "2",
    "EBS ให้ Persistent Block Storage สำหรับ EC2 พร้อม Snapshots; Instance Store เป็น Local Ephemeral Data"
  ],
  [
    "3.6",
    "A company retains records for several years and will rarely read them; retrieval can take hours when an audit finally occurs. Which S3 storage class matches the lowest archive-cost goal?",
    "บริษัทต้องเก็บ Records หลายปีและแทบไม่อ่าน ยอมให้ Retrieve ใช้เวลาหลายชั่วโมงเมื่อเกิด Audit ควรเลือก S3 Storage Class ใดที่เน้น Archive Cost ต่ำ",
    "Amazon S3 Standard-IA|Amazon S3 Intelligent-Tiering|Amazon S3 Glacier Deep Archive|Amazon S3",
    "2",
    "S3 Glacier Deep Archive เหมาะ Long-term Archive ที่ยอมรอ Restore; Standard-IA ต้องเรียกคืนได้ทันที"
  ],
  [
    "3.6",
    "A retail chain needs to transfer file data from an on-premises NAS to S3 continuously over its existing network rather than ship a physical appliance. Which service fits?",
    "ร้านค้าหลายสาขาต้อง Transfer Files จาก On-premises NAS ไป S3 ผ่าน Network เดิมอย่างต่อเนื่อง ไม่ต้องส่ง Physical Appliance ควรใช้ Service ใด",
    "AWS Snowball Edge|AWS DataSync|AWS Storage Gateway|Amazon EFS",
    "1",
    "AWS DataSync ทำ Online Data Transfer/Synchronization ระหว่าง Storage และ AWS; Snowball ใช้ Offline Device"
  ],
  [
    "3.7",
    "An accessibility feature needs to turn text-based announcements into spoken audio using a managed AI service. Which service does that conversion?",
    "Accessibility Feature ต้องแปลง Text Announcements เป็น Spoken Audio ผ่าน Managed AI Service บริการใดทำ Conversion นี้",
    "Amazon Lex|Amazon Textract|Amazon Polly|Amazon Rekognition",
    "2",
    "Amazon Polly เป็น Text-to-Speech; Lex ใช้ Conversational Bots และ Textract Extract Text จาก Documents"
  ],
  [
    "3.7",
    "A data lake team needs to query existing S3 log objects with SQL without provisioning a database cluster. Which service is intended for these ad-hoc queries?",
    "ทีม Data Lake ต้อง Query S3 Log Objects ที่มีอยู่ด้วย SQL โดยไม่ Provision Database Cluster ใช้ Service ใด",
    "Amazon Athena|AWS Glue|Amazon Redshift|Amazon Quick Sight",
    "0",
    "Athena ทำ Serverless SQL Query บน S3 Objects โดยตรง; Glue เป็น ETL/Data Catalog"
  ],
  [
    "3.8",
    "A billing application emits events that must be delivered only to targets matching an event pattern; it does not need a step-by-step state machine. Which integration service matches?",
    "Billing Application ส่ง Events ที่ต้องส่งเฉพาะ Targets ซึ่งตรง Event Pattern ไม่ต้องทำ Step-by-step State Machine ควรใช้ Integration Service ใด",
    "Amazon SNS|AWS Step Functions|Amazon EventBridge|Amazon SQS",
    "2",
    "EventBridge Route Events ไป Targets ตาม Event Patterns; Step Functions คุม State Machines"
  ],
  [
    "3.8",
    "A telemetry pipeline needs a retained high-throughput event stream, while a separate workload needs a durable queue for jobs waiting on workers. Which TWO services meet the distinct patterns? (Select TWO.)",
    "Telemetry Pipeline ต้องมี High-throughput Event Stream ที่ Retain Records และอีก Workload ต้องมี Durable Queue เก็บ Jobs รอ Workers ข้อใดสอง Services ตรงงาน",
    "Amazon Kinesis Data Streams|Amazon SNS|Amazon SQS|Amazon EventBridge|AWS Step Functions",
    "0,2",
    "Kinesis Data Streams เก็บ Streaming Records ให้ Consumers อ่านตาม Retention ส่วน SQS Queue งานให้ Workers ประมวลผล"
  ],
  [
    "3.8",
    "A call center wants a cloud contact-center solution that routes incoming customer calls to agents and supports customer service interactions. Which AWS service is intended?",
    "Call Center ต้องการ Cloud Contact-center Solution ที่ Route Incoming Customer Calls ไป Agents และรองรับ Customer Service Interaction ควรใช้ Service ใด",
    "Amazon SES|Amazon Connect|Amazon WorkSpaces|Amazon SNS",
    "1",
    "Amazon Connect เป็น Cloud Contact Center สำหรับ Agent/Call Routing; SES ส่ง Email และ WorkSpaces เป็น Virtual Desktop"
  ]
]);
})();
