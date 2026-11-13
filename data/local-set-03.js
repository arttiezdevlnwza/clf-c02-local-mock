(() => {
  const rows = [
  [
    "1.1",
    "A small team wants to try three product ideas and stop paying for unsuccessful prototypes immediately. Which benefit is MOST relevant?",
    "ทีมเล็กต้องการทดลองผลิตภัณฑ์สามแนวคิดแล้วหยุดจ่ายสำหรับต้นแบบที่ไม่สำเร็จ ประโยชน์ใดตรงที่สุด",
    "Pay-as-you-go|Durability|Fault tolerance|Retain",
    "0",
    "Pay-as-you-go ช่วยจ่ายเฉพาะทรัพยากรที่ใช้และหยุดค่าใช้จ่ายเมื่อเลิกใช้ prototype"
  ],
  [
    "1.1",
    "A media company has customers on multiple continents and wants lower latency for its global audience. Which AWS benefit supports this?",
    "บริษัทสื่อมีลูกค้าหลายทวีปและต้องการลด latency สำหรับผู้ชมทั่วโลก ประโยชน์ AWS ใดช่วยได้",
    "Agility|AWS Region|Economies of scale|Capital expenditure",
    "1",
    "AWS global Regions ช่วยวาง workloads ใกล้กลุ่มผู้ใช้และลด network latency"
  ],
  [
    "1.1",
    "Which TWO attributes help a cloud application maintain service during infrastructure failures? (Select TWO.)",
    "คุณสมบัติสองข้อใดช่วยให้แอป cloud ให้บริการต่อเมื่อ infrastructure บางส่วนล้มเหลว",
    "High availability|Fault tolerance|Capital expenditure|Rightsizing|Retire",
    "0,1",
    "High availability เน้นลด downtime และ Fault tolerance เน้นทำงานต่อแม้ components ล้มเหลว"
  ],
  [
    "1.1",
    "A retail company needs to serve a sudden surge in customers without waiting to purchase additional physical servers. Which capability matters?",
    "ร้านค้าต้องรองรับลูกค้าพุ่งขึ้นโดยไม่รอซื้อ physical servers เพิ่ม ความสามารถใดสำคัญ",
    "Scalability|Durability|AWS Artifact|Retain",
    "0",
    "Scalability ช่วยเพิ่มความสามารถรองรับ workload ที่โตขึ้นโดยไม่ต้องจัดซื้อเครื่องเอง"
  ],
  [
    "1.2",
    "A workload uses managed encryption, identity controls, and security monitoring to reduce exposure. Which Well-Architected pillar is being addressed?",
    "workload ใช้ encryption identity controls และ monitoring ลดความเสี่ยง สอดคล้อง pillar ใด",
    "Security|Performance Efficiency|Sustainability|Cost Optimization",
    "0",
    "Security pillar เน้นปกป้องข้อมูล ระบบ และ assets ด้วยมาตรการควบคุมที่เหมาะสม"
  ],
  [
    "1.2",
    "An application has automatic recovery procedures and regularly tests failover. Which pillar is the PRIMARY focus?",
    "แอปมี automatic recovery และทดสอบ failover สม่ำเสมอ สอดคล้อง pillar ใดเป็นหลัก",
    "Reliability|Operational Excellence|Sustainability|Cost Optimization",
    "0",
    "Reliability เน้นฟื้นตัวจาก failure และรักษาการทำงานตามความต้องการ"
  ],
  [
    "1.2",
    "Which TWO decisions directly support the Cost Optimization pillar? (Select TWO.)",
    "การตัดสินใจสองข้อใดช่วย Cost Optimization pillar โดยตรง",
    "Rightsizing|AWS Cost Explorer|AWS Shield|Amazon Detective|Amazon Rekognition",
    "0,1",
    "Rightsizing ลดการจัดสรรเกินจำเป็น และ Cost Explorer ช่วยวิเคราะห์ต้นทุนเพื่อปรับปรุง"
  ],
  [
    "1.2",
    "A company regularly reviews whether an application's resource choices still meet its performance targets. Which pillar is MOST applicable?",
    "บริษัททบทวนว่าทรัพยากรของแอปยังตอบ performance targets หรือไม่ เป็น pillar ใด",
    "Performance Efficiency|Security|Operational Excellence|Sustainability",
    "0",
    "Performance Efficiency เน้นเลือกและปรับทรัพยากรเพื่อให้ได้ performance ที่เหมาะสม"
  ],
  [
    "1.3",
    "A company moves an application to AWS and switches its self-managed database to Amazon RDS with limited code changes. Which strategy applies?",
    "บริษัทย้ายแอปไป AWS และเปลี่ยน self-managed database เป็น RDS โดยแก้โค้ดเล็กน้อย เป็น strategy ใด",
    "Replatform|Rehost|Retire|Retain",
    "0",
    "Replatform ปรับแพลตฟอร์มบางส่วนเพื่อใช้ managed service โดยไม่ต้อง refactor แอปทั้งหมด"
  ],
  [
    "1.3",
    "A business discovers that an old internal application has no users and decides not to migrate it. Which migration strategy is this?",
    "บริษัทพบว่าแอปภายในไม่มีผู้ใช้อีกแล้วจึงไม่ย้ายขึ้น AWS เป็น migration strategy ใด",
    "Retire|Retain|Rehost|Refactor",
    "0",
    "Retire คือเลิกใช้แอปที่ไม่มีคุณค่าหรือไม่จำเป็นต่อธุรกิจแล้ว"
  ],
  [
    "1.3",
    "An enterprise wants to move hundreds of existing servers to AWS with minimal changes and continuous replication. Which service is intended for this?",
    "องค์กรต้องย้าย servers จำนวนมากไป AWS โดยแก้ไขน้อยและ replicate ต่อเนื่อง ควรใช้บริการใด",
    "AWS Application Migration Service|AWS SCT|AWS Backup|AWS CloudFormation",
    "0",
    "Application Migration Service ช่วย lift-and-shift servers โดย replicate ข้อมูลและเตรียม cutover"
  ],
  [
    "1.3",
    "An organization needs a business case estimating potential savings before committing to a large AWS migration. Which service can help?",
    "องค์กรต้องการ business case ประเมิน savings ก่อนตัดสินใจ migration ขนาดใหญ่ ควรใช้บริการใด",
    "AWS Migration Evaluator|AWS Migration Hub|AWS DMS|AWS DataSync",
    "0",
    "Migration Evaluator ใช้ข้อมูลสภาพแวดล้อมเดิมเพื่อช่วยประเมินต้นทุนและความคุ้มค่าการย้าย"
  ],
  [
    "1.4",
    "An IT department currently purchases servers that often remain underutilized. Which economic drawback is MOST directly involved?",
    "ฝ่าย IT ซื้อ servers ที่ใช้ไม่เต็ม capacity เป็นประจำ ปัญหาเศรษฐศาสตร์หลักคืออะไร",
    "Capital expenditure|Variable expense|Elasticity|Consolidated billing",
    "0",
    "Capital expenditure คือการลงทุนซื้อสินทรัพย์ล่วงหน้า ซึ่งอาจทำให้จ่ายเพื่อ capacity ที่ไม่ถูกใช้งาน"
  ],
  [
    "1.4",
    "A startup benefits from AWS buying infrastructure at a scale much larger than a single company. Which economic principle explains the advantage?",
    "สตาร์ทอัพได้ประโยชน์จาก AWS ซื้อ infrastructure ในปริมาณมากกว่าองค์กรเดี่ยว หลักการใดอธิบายได้",
    "Economies of scale|Rightsizing|High availability|Retain",
    "0",
    "Economies of scale ทำให้ต้นทุนต่อหน่วยลดลงเมื่อผู้ให้บริการดำเนินงานในปริมาณมาก"
  ],
  [
    "1.4",
    "Which TWO approaches can help organizations avoid paying for excess capacity? (Select TWO.)",
    "แนวทางสองข้อใดช่วยองค์กรหลีกเลี่ยงการจ่ายสำหรับ capacity ส่วนเกิน",
    "Elasticity|Rightsizing|Capital expenditure|Dedicated Hosts|AWS Artifact",
    "0,1",
    "Elasticity ลด capacity เมื่อ demand ลดลง และ Rightsizing ปรับขนาดให้ตรงการใช้งานจริง"
  ],
  [
    "1.4",
    "A team shuts down unused development instances every evening. Which cloud economics benefit does this MOST directly exploit?",
    "ทีมปิด development instances ที่ไม่ได้ใช้ทุกเย็น ประโยชน์ด้านต้นทุนใดถูกใช้โดยตรง",
    "Pay-as-you-go|Durability|Multi-Region deployment|AWS Artifact",
    "0",
    "การจ่ายตามการใช้ทำให้หยุดค่า compute ที่ไม่จำเป็นได้เมื่อปิดทรัพยากร"
  ],
  [
    "2.1",
    "A customer uses Amazon S3 and accidentally grants public read access to confidential objects. Which party is responsible for correcting the access policy?",
    "ลูกค้าใช้ S3 และเผลอเปิด public read ให้ข้อมูลลับ ใครต้องแก้ access policy",
    "AWS IAM|AWS Shield|AWS Artifact|Amazon CloudFront",
    "0",
    "ลูกค้ารับผิดชอบการกำหนด IAM และ bucket permissions สำหรับข้อมูลของตน"
  ],
  [
    "2.1",
    "A company runs containers using AWS Fargate. Who remains responsible for vulnerabilities in the application code?",
    "บริษัทใช้ AWS Fargate รัน containers ใครรับผิดชอบช่องโหว่ใน application code",
    "AWS IAM|Amazon Inspector|AWS Fargate|AWS Artifact",
    "0",
    "ลูกค้ายังต้องดูแล application code และ dependencies ของตน แม้ Fargate จัดการ underlying compute"
  ],
  [
    "2.1",
    "Which TWO activities are customer responsibilities for data stored in AWS? (Select TWO.)",
    "กิจกรรมสองข้อใดเป็นความรับผิดชอบลูกค้าสำหรับข้อมูลที่เก็บบน AWS",
    "AWS KMS|AWS IAM|AWS Shield|AWS Health Dashboard|AWS Marketplace",
    "0,1",
    "ลูกค้าต้องกำหนด encryption/key usage และสิทธิ์การเข้าถึงข้อมูลให้เหมาะกับความเสี่ยง"
  ],
  [
    "2.1",
    "A company uses EC2 rather than a fully managed compute service. Which additional layer must it typically manage?",
    "บริษัทใช้ EC2 แทน fully managed compute จึงต้องจัดการ layer เพิ่มเติมใด",
    "Amazon EC2|AWS CloudTrail|AWS Artifact|AWS Shield",
    "0",
    "ลูกค้าต้องดูแล guest operating system รวมถึง patches และ configuration ของ EC2"
  ],
  [
    "2.2",
    "An operations team wants an alarm when CPU utilization stays above a threshold. Which service should it configure?",
    "ทีม operations ต้องการ alarm เมื่อ CPU utilization เกิน threshold ต่อเนื่อง ควรใช้บริการใด",
    "Amazon CloudWatch|AWS CloudTrail|AWS Config|AWS Artifact",
    "0",
    "CloudWatch monitors metrics และสร้าง alarms ตาม thresholds ได้"
  ],
  [
    "2.2",
    "A governance team wants to know whether required encryption settings have drifted from its approved baseline. Which service fits?",
    "ทีม governance ต้องการตรวจว่า encryption settings เบี่ยงเบนจาก baseline หรือไม่ ควรใช้บริการใด",
    "AWS Config|AWS CloudTrail|Amazon Detective|AWS Shield",
    "0",
    "AWS Config ตรวจและประเมิน configuration ของทรัพยากรตาม rules"
  ],
  [
    "2.2",
    "Which TWO AWS services can help a team identify suspicious activity and investigate its relationships? (Select TWO.)",
    "บริการสองข้อใดช่วยตรวจ suspicious activity และสืบสวนความเชื่อมโยงของเหตุการณ์",
    "Amazon GuardDuty|Amazon Detective|AWS Artifact|AWS Budgets|Amazon SES",
    "0,1",
    "GuardDuty ตรวจภัยคุกคาม ส่วน Detective ช่วยวิเคราะห์ความเชื่อมโยงของ security events"
  ],
  [
    "2.2",
    "A company needs to verify whether a planned architecture aligns with security best practices across several AWS accounts. Which service aggregates findings?",
    "บริษัทต้องการดู security findings รวมจากหลายบัญชีเพื่อเทียบ best practices ควรใช้บริการใด",
    "AWS Security Hub|AWS CloudShell|Amazon Polly|AWS DMS",
    "0",
    "Security Hub รวม findings และช่วยติดตาม security posture"
  ],
  [
    "2.2",
    "An auditor asks for a history of infrastructure configuration changes rather than user API calls. Which service is the BEST source?",
    "ผู้ตรวจสอบต้องการประวัติ configuration ของ infrastructure ไม่ใช่รายการ API calls ควรใช้บริการใด",
    "AWS Config|AWS CloudTrail|Amazon CloudWatch|AWS Marketplace",
    "0",
    "AWS Config เก็บ configuration history และ relationships ของทรัพยากรที่รองรับ"
  ],
  [
    "2.3",
    "A team needs to grant a vendor temporary cross-account access without sharing long-term credentials. Which AWS feature is appropriate?",
    "ทีมต้องให้ vendor เข้าถึงข้ามบัญชีชั่วคราวโดยไม่แชร์ long-term credentials ควรใช้ความสามารถใด",
    "AWS IAM|AWS Secrets Manager|AWS Certificate Manager|AWS CloudTrail",
    "0",
    "IAM cross-account role ให้ vendor assume role และรับ temporary credentials ตาม permissions ที่กำหนด"
  ],
  [
    "2.3",
    "An administrator wants a single place to assign employees permission sets across AWS accounts. Which service fits?",
    "ผู้ดูแลต้องการจุดเดียวสำหรับ assign permission sets ให้พนักงานข้าม AWS accounts ควรใช้บริการใด",
    "IAM Identity Center|AWS Organizations|Amazon Cognito|AWS CloudFormation",
    "0",
    "IAM Identity Center ใช้จัดการ workforce access และ permission sets สำหรับหลายบัญชี"
  ],
  [
    "2.3",
    "Which TWO practices are recommended when protecting access to sensitive AWS resources? (Select TWO.)",
    "แนวทางสองข้อใดแนะนำสำหรับปกป้องการเข้าถึง AWS resources ที่สำคัญ",
    "AWS IAM|IAM Identity Center|AWS Cost Explorer|AWS DMS|Amazon Athena",
    "0,1",
    "IAM บังคับ least privilege และ Identity Center รองรับการจัดการ workforce identities อย่างเป็นระบบ"
  ],
  [
    "2.3",
    "A security team needs to detect IAM policies that allow unintended external access to a resource. Which service is purpose-built for this?",
    "ทีม security ต้องตรวจ IAM policies ที่เปิด external access โดยไม่ตั้งใจ ควรใช้บริการใด",
    "IAM Access Analyzer|Amazon Inspector|AWS Artifact|AWS Shield",
    "0",
    "Access Analyzer ตรวจ policy-based access เพื่อระบุ external principals ที่เข้าถึงได้"
  ],
  [
    "2.3",
    "A team needs to store database passwords and rotate them automatically. Which service is intended for this?",
    "ทีมต้องการเก็บ database passwords และหมุนเวียนอัตโนมัติ ควรใช้บริการใด",
    "AWS Secrets Manager|AWS KMS|AWS Certificate Manager|AWS CloudTrail",
    "0",
    "Secrets Manager ออกแบบสำหรับจัดการและหมุนเวียน secrets เช่น database passwords"
  ],
  [
    "2.4",
    "A web application receives requests containing SQL injection attempts. Which security service can filter these requests before they reach the application?",
    "เว็บได้รับ requests ที่มี SQL injection attempts บริการใดกรองก่อนถึงแอปได้",
    "AWS WAF|AWS Shield|Amazon GuardDuty|AWS Config",
    "0",
    "WAF ใช้ web ACL rules กรอง HTTP requests เช่น SQL injection patterns"
  ],
  [
    "2.4",
    "A company needs protection against large volumetric attacks intended to exhaust public network endpoints. Which service is relevant?",
    "บริษัทต้องการป้องกัน volumetric attacks ที่ทำให้ public endpoints ใช้งานไม่ได้ ควรใช้บริการใด",
    "AWS Shield|AWS WAF|Amazon Inspector|AWS KMS",
    "0",
    "Shield ให้การป้องกัน DDoS ที่มุ่งทำให้ระบบไม่พร้อมใช้งาน"
  ],
  [
    "2.4",
    "Which TWO services help centrally manage security policy and evaluate supported workload vulnerabilities? (Select TWO.)",
    "บริการสองข้อใดช่วยจัดการ security policy ส่วนกลางและตรวจช่องโหว่ workloads",
    "AWS Firewall Manager|Amazon Inspector|AWS Artifact|Amazon Textract|AWS Budgets",
    "0,1",
    "Firewall Manager จัดการ policies ข้ามบัญชี ส่วน Inspector ตรวจช่องโหว่ของ workloads ที่รองรับ"
  ],
  [
    "2.4",
    "A security team wants to find personally identifiable information accidentally uploaded into S3. Which service should it evaluate?",
    "ทีม security ต้องค้นหา PII ที่อัปโหลดเข้า S3 โดยไม่ตั้งใจ ควรใช้บริการใด",
    "Amazon Macie|Amazon Inspector|Amazon GuardDuty|AWS WAF",
    "0",
    "Macie ช่วยค้นหาและจำแนกข้อมูลอ่อนไหวใน S3"
  ],
  [
    "2.4",
    "A team wants recommendations about exposed security groups and MFA-related best practices. Which service offers checks in this area?",
    "ทีมต้องการคำแนะนำเรื่อง security groups ที่เปิดกว้างและ MFA best practices ควรใช้บริการใด",
    "AWS Trusted Advisor|AWS Artifact|AWS DMS|Amazon Rekognition",
    "0",
    "Trusted Advisor ให้ checks และ recommendations ตาม best practices รวมถึง security"
  ],
  [
    "3.1",
    "An organization wants to deploy identical infrastructure to multiple accounts from a repeatable template. Which service is the BEST fit?",
    "องค์กรต้อง deploy infrastructure เหมือนกันหลายบัญชีจาก template ที่ทำซ้ำได้ ควรใช้บริการใด",
    "AWS CloudFormation|AWS CloudShell|AWS CloudTrail|Amazon Connect",
    "0",
    "CloudFormation ใช้ infrastructure templates เพื่อ deploy resources แบบ repeatable"
  ],
  [
    "3.1",
    "A company must keep certain hardware workloads on premises but wants an AWS-consistent operating model. Which service supports this?",
    "บริษัทต้องเก็บ hardware workloads ไว้ on premises แต่ต้องการรูปแบบการจัดการเหมือน AWS ควรใช้ใด",
    "AWS Outposts|AWS Direct Connect|Amazon CloudFront|AWS Lambda",
    "0",
    "Outposts นำ AWS infrastructure และ services ที่รองรับไปติดตั้งในสถานที่ลูกค้า"
  ],
  [
    "3.2",
    "An application must tolerate failure of one facility within the same geographic AWS area. Which architecture is the BEST starting point?",
    "แอปต้องทนต่อการล่มของ facility หนึ่งภายในพื้นที่ AWS เดียวกัน ควรเริ่มด้วยสถาปัตยกรรมใด",
    "Multi-AZ deployment|Multi-Region deployment|Edge location|AWS Direct Connect",
    "0",
    "Multi-AZ ช่วยกระจาย resources ข้าม AZ ภายใน Region เพื่อเพิ่ม availability"
  ],
  [
    "3.2",
    "A disaster-recovery plan requires a backup application deployment in a geographically separate AWS area. Which approach fits?",
    "แผน DR ต้องมี deployment สำรองในพื้นที่ AWS ที่ห่างกันทางภูมิศาสตร์ ควรใช้แนวทางใด",
    "Multi-Region deployment|Multi-AZ deployment|Edge location|NAT Gateway",
    "0",
    "Multi-Region ใช้ Regions แยกกันเพื่อรองรับเหตุการณ์ระดับภูมิภาค"
  ],
  [
    "3.3",
    "A developer wants to deploy web code while AWS handles provisioning and application environment management. Which service is suitable?",
    "นักพัฒนาต้อง deploy web code และให้ AWS ดูแล provisioning กับ application environment ควรใช้ใด",
    "AWS Elastic Beanstalk|Amazon EC2|AWS Batch|Amazon EKS",
    "0",
    "Elastic Beanstalk ช่วย deploy applications และจัดการ environment ที่รองรับ"
  ],
  [
    "3.3",
    "A team runs containers with Amazon ECS but wants to avoid maintaining EC2 hosts. Which compute option should it select?",
    "ทีมรัน containers บน ECS แต่ไม่ต้องการดูแล EC2 hosts ควรเลือก compute option ใด",
    "AWS Fargate|Amazon EC2|Amazon EKS|Amazon Lightsail",
    "0",
    "Fargate ให้ serverless compute สำหรับ ECS tasks โดยไม่ต้องจัดการ host fleet"
  ],
  [
    "3.3",
    "Which TWO services directly help an EC2 web tier respond to increasing traffic? (Select TWO.)",
    "บริการสองข้อใดช่วย EC2 web tier รองรับ traffic เพิ่มขึ้น",
    "EC2 Auto Scaling|Elastic Load Balancing|Amazon EBS|AWS Artifact|Amazon Textract",
    "0,1",
    "Auto Scaling เพิ่มลด instances ส่วน Load Balancing กระจาย requests ไปยัง healthy targets"
  ],
  [
    "3.3",
    "A workload consists of short functions triggered by uploads and does not require a persistent server. Which compute service fits?",
    "workload เป็น functions สั้นที่ถูก trigger เมื่อ upload ไฟล์และไม่ต้องใช้ server ถาวร ควรใช้ใด",
    "AWS Lambda|Amazon EC2|AWS Outposts|Amazon Lightsail",
    "0",
    "Lambda เหมาะกับ event-driven code ที่ไม่ต้อง provision servers"
  ],
  [
    "3.4",
    "An application requires a managed relational database compatible with PostgreSQL and optimized for cloud availability. Which service can meet this?",
    "แอปต้องการ managed relational database ที่เข้ากันกับ PostgreSQL และเหมาะกับ cloud availability ควรใช้ใด",
    "Amazon Aurora|Amazon DynamoDB|Amazon Neptune|Amazon ElastiCache",
    "0",
    "Aurora เป็น managed relational engine ที่รองรับ PostgreSQL compatibility"
  ],
  [
    "3.4",
    "A mobile game needs a managed database for flexible player profiles with predictable low-latency key lookups. Which service fits?",
    "เกมมือถือใช้ player profiles ที่ schema ยืดหยุ่นและต้อง lookup ด้วย key latency ต่ำ ควรใช้ใด",
    "Amazon DynamoDB|Amazon RDS|Amazon Redshift|Amazon Neptune",
    "0",
    "DynamoDB เป็น managed key-value/document database สำหรับการเข้าถึงด้วย key latency ต่ำ"
  ],
  [
    "3.4",
    "A web application uses MongoDB-compatible document APIs and wants a managed document database. Which service is designed for this?",
    "เว็บใช้ MongoDB-compatible document APIs และต้องการ managed document database ควรใช้ใด",
    "Amazon DocumentDB|Amazon RDS|Amazon Neptune|Amazon ElastiCache",
    "0",
    "DocumentDB รองรับ document workloads ที่ใช้ MongoDB-compatible APIs"
  ],
  [
    "3.5",
    "A company has many VPCs and wants a central hub to simplify network connectivity among them. Which service is appropriate?",
    "บริษัทมี VPC จำนวนมากและต้องการ hub กลางเพื่อเชื่อมเครือข่าย ควรใช้บริการใด",
    "AWS Transit Gateway|Internet Gateway|NAT Gateway|Amazon Route 53",
    "0",
    "Transit Gateway เป็น hub สำหรับเชื่อม VPCs และ on-premises networks"
  ],
  [
    "3.5",
    "A company requires a private dedicated connection between its data center and AWS instead of relying only on the public internet. Which service fits?",
    "บริษัทต้องการ dedicated private connection ระหว่าง data center กับ AWS ไม่พึ่ง public internet อย่างเดียว ควรใช้ใด",
    "AWS Direct Connect|AWS Site-to-Site VPN|NAT Gateway|Amazon CloudFront",
    "0",
    "Direct Connect ให้ dedicated connectivity ระหว่างเครือข่ายลูกค้าและ AWS"
  ],
  [
    "3.5",
    "Which TWO VPC components are commonly involved in allowing public subnet instances to communicate with the internet? (Select TWO.)",
    "องค์ประกอบสองข้อใดเกี่ยวข้องกับการให้ instances ใน public subnet ติดต่อ internet",
    "Internet Gateway|Security group|AWS Direct Connect|Amazon CloudFront|AWS Artifact",
    "0,1",
    "Internet Gateway รองรับ internet routing และ Security group ต้องอนุญาต traffic ที่จำเป็นร่วมกับ route table"
  ],
  [
    "3.6",
    "An analytics team wants S3 data to automatically move between frequent and infrequent access tiers when access patterns change. Which class fits?",
    "ทีม analytics ต้องการให้ S3 data ปรับ access tier ตามรูปแบบการใช้งานโดยอัตโนมัติ ควรเลือก class ใด",
    "Amazon S3 Intelligent-Tiering|Amazon S3 Standard-IA|Amazon S3 Glacier Deep Archive|Amazon EBS",
    "0",
    "S3 Intelligent-Tiering ปรับ access tiers ตามรูปแบบการเข้าถึงเพื่อลดต้นทุน"
  ],
  [
    "3.6",
    "An EC2 application needs very fast scratch storage and can recreate all files after the instance stops. Which option is appropriate?",
    "แอปบน EC2 ต้องการ scratch storage เร็วและสร้างข้อมูลใหม่ได้เมื่อ instance หยุด ควรใช้ใด",
    "Instance store|Amazon EBS|Amazon EFS|Amazon S3",
    "0",
    "Instance store เป็น temporary local storage ที่ไม่ควรใช้เก็บข้อมูลถาวร"
  ],
  [
    "3.6",
    "A company must transfer hundreds of terabytes from a location with very limited network bandwidth. Which service can help with offline transfer?",
    "บริษัทต้องย้ายข้อมูลหลายร้อย TB จากสถานที่ที่ bandwidth จำกัดมาก ควรใช้บริการใด",
    "AWS Snowball Edge|AWS DataSync|AWS Storage Gateway|Amazon EFS",
    "0",
    "Snowball Edge รองรับการขนย้ายข้อมูลผ่านอุปกรณ์ physical เมื่อเครือข่ายไม่เหมาะกับการโอนขนาดใหญ่"
  ],
  [
    "3.7",
    "A company wants to run SQL directly on log files in S3 without provisioning database servers. Which service should it use?",
    "บริษัทต้องการรัน SQL กับ log files ใน S3 โดยไม่ provision database servers ควรใช้ใด",
    "Amazon Athena|AWS Glue|Amazon Redshift|Amazon Kinesis Data Streams",
    "0",
    "Athena เป็น serverless query service ที่อ่านข้อมูลใน S3 ด้วย SQL"
  ],
  [
    "3.7",
    "A team needs to extract structured text and tables from scanned invoices. Which AI service is purpose-built for this?",
    "ทีมต้องดึงข้อความและตารางจาก scanned invoices ควรใช้ AI service ใด",
    "Amazon Textract|Amazon Rekognition|Amazon Polly|Amazon Lex",
    "0",
    "Textract ดึงข้อความ forms และ tables จากเอกสาร"
  ],
  [
    "3.8",
    "A microservice emits business events and several independent applications must receive only matching event types. Which service fits?",
    "microservice ส่ง business events และหลายแอปต้องรับเฉพาะ event types ที่ตรงเงื่อนไข ควรใช้ใด",
    "Amazon EventBridge|Amazon SQS|Amazon SES|AWS Backup",
    "0",
    "EventBridge ใช้ event bus และ rules เพื่อ route events ไปยัง targets"
  ],
  [
    "3.8",
    "Which TWO services can help a developer diagnose application requests and orchestrate multi-step processes? (Select TWO.)",
    "บริการสองข้อใดช่วย trace requests และ orchestrate กระบวนการหลายขั้นตอน",
    "AWS X-Ray|AWS Step Functions|AWS Artifact|AWS Shield|AWS Budgets",
    "0,1",
    "X-Ray ช่วย trace requests และ Step Functions จัดลำดับงานเป็น workflows"
  ],
  [
    "3.8",
    "A manufacturer needs secure message ingestion from thousands of connected sensors. Which AWS service is designed for this?",
    "โรงงานต้องรับ messages จาก sensors จำนวนมากที่เชื่อมต่ออินเทอร์เน็ต ควรใช้บริการใด",
    "AWS IoT Core|Amazon Connect|Amazon SES|AWS CodeBuild",
    "0",
    "IoT Core รองรับการเชื่อมต่อและรับส่งข้อความจาก IoT devices"
  ],
  [
    "4.1",
    "A steady production workload is expected to run continuously for years and the company can commit to compute spending. Which pricing model may reduce costs?",
    "production workload ใช้ต่อเนื่องหลายปีและบริษัทยอม commit ค่า compute รูปแบบราคาใดช่วยลดต้นทุน",
    "Savings Plans|Spot Instances|On-Demand Instances|On-Demand Capacity Reservations",
    "0",
    "Savings Plans ให้ส่วนลดแลกกับ commitment การใช้ compute ตามเงื่อนไข"
  ],
  [
    "4.1",
    "A company needs inexpensive compute for simulations that can restart after interruption. Which option should it evaluate?",
    "บริษัทต้องการ compute ราคาต่ำสำหรับ simulations ที่เริ่มใหม่ได้หลัง interruption ควรใช้ใด",
    "Spot Instances|Dedicated Hosts|On-Demand Capacity Reservations|On-Demand Instances",
    "0",
    "Spot ใช้ spare capacity ที่อาจถูกขัดจังหวะ เหมาะกับงานที่รองรับการ restart"
  ],
  [
    "4.1",
    "Which TWO AWS purchasing options are appropriate to evaluate for predictable long-running compute usage? (Select TWO.)",
    "ตัวเลือกซื้อสองแบบใดควรพิจารณาสำหรับ compute ที่ใช้ต่อเนื่องและคาดการณ์ได้",
    "Savings Plans|Reserved Instances|Spot Instances|On-Demand Capacity Reservations|Dedicated Hosts",
    "0,1",
    "Savings Plans และ Reserved Instances ให้ส่วนลดเมื่อมี commitment ตามเงื่อนไข"
  ],
  [
    "4.2",
    "A company wants each department's AWS spending attributed to its own cost center. Which capability helps?",
    "บริษัทต้องการแยกค่า AWS ตาม cost center ของแต่ละแผนก ควรใช้ความสามารถใด",
    "Cost allocation tags|Consolidated billing|AWS Artifact|AWS Health Dashboard",
    "0",
    "Cost allocation tags ช่วยจัดกลุ่มและวิเคราะห์ค่าใช้จ่ายตามป้ายกำกับทรัพยากร"
  ],
  [
    "4.2",
    "A finance team needs an alert before projected AWS spending exceeds a planned amount. Which tool is intended for this?",
    "ทีมการเงินต้องการ alert ก่อนค่าใช้จ่าย AWS ที่คาดการณ์จะเกินวงเงิน ควรใช้เครื่องมือใด",
    "AWS Budgets|AWS Cost Explorer|AWS Pricing Calculator|AWS Cost and Usage Report",
    "0",
    "Budgets รองรับ alerts ตาม actual หรือ forecast cost thresholds"
  ],
  [
    "4.2",
    "A company has many AWS accounts and wants a single payer for their charges. Which feature applies?",
    "บริษัทมี AWS accounts หลายบัญชีและต้องการผู้ชำระเงินรวมหนึ่งบัญชี ควรใช้ feature ใด",
    "Consolidated billing|Cost allocation tags|AWS Budgets|AWS Cost Anomaly Detection",
    "0",
    "Consolidated billing ภายใต้ AWS Organizations รวมการเรียกเก็บเงินของบัญชีสมาชิก"
  ],
  [
    "4.3",
    "A customer wants to purchase a third-party security product that can be deployed on AWS. Which service provides a catalog?",
    "ลูกค้าต้องการซื้อ third-party security product ที่ deploy บน AWS ได้ ควรใช้บริการใด",
    "AWS Marketplace|AWS Partner Network|AWS Support Center|AWS re:Post",
    "0",
    "Marketplace เป็น catalog สำหรับค้นหาและซื้อ third-party software และ services"
  ],
  [
    "4.3",
    "A company wants AWS best-practice checks that include opportunities for cost savings and service limits. Which tool is relevant?",
    "บริษัทต้องการ AWS best-practice checks เรื่อง cost savings และ service limits ควรใช้ใด",
    "AWS Trusted Advisor|AWS Health Dashboard|AWS Artifact|AWS CloudTrail",
    "0",
    "Trusted Advisor ตรวจ best practices และให้ recommendations ในหลายหมวดรวมถึงต้นทุน"
  ]
];
  window.buildClfLocalExamSet(3,rows);
})();
