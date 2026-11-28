(() => {
  const rows = [
  [
    "1.1",
    "A university needs 100 lab servers this week and none after the course. Which benefit avoids retaining unused capacity?",
    "มหาวิทยาลัยต้องใช้ Server 100 เครื่องหนึ่งสัปดาห์แล้วไม่ใช้อีก ประโยชน์ใดลด Capacity ที่เหลือ",
    "Durability|Elasticity|Scalability|Agility",
    "1",
    "Elasticity เพิ่มและลด Capacity ตาม Demand จริง ส่วน Scalability คือความสามารถรองรับการขยายงาน ไม่จำเป็นต้องลดกลับ",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.1",
    "Which cloud benefit lets a startup test a new product without waiting for its hardware procurement cycle?",
    "Startup ต้องทดลองผลิตภัณฑ์ใหม่โดยไม่รอจัดซื้อ Hardware ประโยชน์ใด",
    "High availability|Fault tolerance|Agility|Economies of scale",
    "2",
    "Agility ลดเวลาจัดเตรียมทรัพยากรและทดลองแนวคิดใหม่ ไม่ใช่ลดราคาต่อหน่วยหรือป้องกันความล้มเหลว",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.1",
    "A replicated processing system must deliver uninterrupted results even when one of its processors fails. Which characteristic is emphasized?",
    "ระบบประมวลผลแบบสำเนาต้องส่งผลลัพธ์ต่อโดยไม่สะดุดแม้ Processor หนึ่งเสีย คุณสมบัติใด",
    "Durability|Elasticity|High availability|Fault tolerance",
    "3",
    "Fault tolerance เน้นทำงานต่อแม้ส่วนประกอบเสียโดยไม่หยุด ส่วน High availability เน้น Uptime สูงและอาจมี Downtime สั้น",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.1",
    "A business wants both faster deployment in overseas markets and capacity increases during promotions. Which TWO cloud benefits address these distinct goals? (Select TWO.)",
    "ธุรกิจต้อง Deploy ต่างประเทศรวดเร็วและเพิ่ม Capacity ช่วงโปรโมชัน สองประโยชน์ใด",
    "Economies of scale|Global reach|Elasticity|Durability|Fault tolerance",
    "1,2",
    "Global reach ช่วยเข้าถึงพื้นที่ทั่วโลก ส่วน Elasticity ปรับ Capacity ตาม Demand ชั่วคราว",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.2",
    "A team limits human access to production data and traces actions back to individual identities. Which pillar is most directly addressed?",
    "ทีมจำกัดการเข้าถึงข้อมูล Production และตรวจสอบการกระทำตาม Identity ใดตรง Pillar",
    "Sustainability|Security|Operational Excellence|Reliability",
    "1",
    "Security เน้น Identity, Access Control และ Traceability เพื่อปกป้องระบบและข้อมูล",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.2",
    "A service team automates routine deployments and regularly rehearses operational procedures before changes. Which pillar best describes the objective?",
    "ทีมทำ Deployment อัตโนมัติและซ้อมขั้นตอนดำเนินงานก่อนเปลี่ยนระบบ ตรง Pillar ใด",
    "Performance Efficiency|Security|Operational Excellence|Reliability",
    "2",
    "Operational Excellence เน้นดำเนินงานด้วย Automation และปรับปรุงกระบวนการอย่างต่อเนื่อง ไม่ใช่เป้าหมายหลักด้าน Capacity หรือ Recovery",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.2",
    "A company measures the throughput of several database technologies and selects the one that meets a required response time. Which pillar guides this selection?",
    "บริษัทวัด Throughput ของ Database หลายชนิดเพื่อเลือกที่ตอบสนองทันเวลา ตรง Pillar ใด",
    "Cost Optimization|Sustainability|Reliability|Performance Efficiency",
    "3",
    "Performance Efficiency เลือกเทคโนโลยีและทรัพยากรที่ตอบโจทย์ Latency/Throughput ไม่ใช่ดูราคาหรือสิ่งแวดล้อมเป็นหลัก",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.2",
    "A workload owner wants to document risks discovered during a structured review against AWS architectural best practices. Which tool records the review?",
    "เจ้าของ Workload ต้องบันทึกความเสี่ยงจากการประเมินตาม AWS Best Practices ใช้เครื่องมือใด",
    "AWS Well-Architected Tool|AWS Trusted Advisor|AWS Config|AWS Cloud Adoption Framework",
    "0",
    "Well-Architected Tool ใช้บันทึกการ Review Workload และ Improvement Plan ตาม Framework; Trusted Advisor ตรวจ Best-practice checks อัตโนมัติ",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.2",
    "Which TWO pillars are addressed by testing automated failover and measuring carbon-related resource consumption, respectively? (Select TWO.)",
    "การทดสอบ Failover อัตโนมัติกับวัดการใช้ทรัพยากรที่กระทบคาร์บอน ตรงสอง Pillars ใด",
    "Operational Excellence|Reliability|Sustainability|Security|Cost Optimization",
    "1,2",
    "Reliability เน้นกู้คืนจาก Failure ส่วน Sustainability เน้นผลกระทบต่อสิ่งแวดล้อม ไม่ใช่เพียงค่าใช้จ่าย",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.3",
    "A migration replaces a database engine with a managed compatible engine but keeps the application architecture largely unchanged. Which strategy fits?",
    "ย้าย Database ไป Managed Engine ที่เข้ากันได้โดยยังคง Architecture แอปไว้เป็นส่วนใหญ่ กลยุทธ์ใด",
    "Refactor|Repurchase|Replatform|Rehost",
    "2",
    "Replatform ปรับบางส่วนเพื่อใช้ Managed Service; Rehost ย้ายแทบไม่เปลี่ยน ส่วน Refactor ปรับ Architecture และ Repurchase เปลี่ยนผลิตภัณฑ์",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.3",
    "During cloud adoption, HR identifies skill shortages and builds a training plan. Which AWS CAF perspective owns the primary concern?",
    "HR ประเมินทักษะที่ขาดและสร้างแผนฝึกอบรมในช่วง Cloud Adoption ตรง Perspective ใด",
    "Business Perspective|Governance Perspective|Operations Perspective|People Perspective",
    "3",
    "People Perspective เน้น Skills, Culture และการเปลี่ยนแปลงบุคลากร ไม่ใช่การกำกับดูแลหรือผลตอบแทน",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.3",
    "A migration lead wants one place to review the status of applications moving through different migration tools. Which service fits?",
    "หัวหน้า Migration ต้องดูสถานะการย้ายแอปจากหลายเครื่องมือในที่เดียว ใช้บริการใด",
    "AWS Migration Hub|AWS Application Migration Service|AWS Migration Evaluator|AWS DMS",
    "0",
    "Migration Hub รวมสถานะ Migration ส่วน MGN ย้าย Server, Evaluator ประเมิน Business Case และ DMS ย้าย Database",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.3",
    "A legacy database needs a new engine and its data must be replicated during the transition. Which TWO tools handle schema conversion and data migration? (Select TWO.)",
    "Database เก่าต้องเปลี่ยน Engine และ Replicate ข้อมูลช่วงเปลี่ยนผ่าน เครื่องมือสองตัวใดแปลง Schema และย้ายข้อมูล",
    "AWS Migration Evaluator|AWS Application Migration Service|AWS Migration Hub|AWS SCT|AWS DMS",
    "3,4",
    "SCT แปลง Schema ระหว่าง Engines ส่วน DMS ย้ายหรือ Replicate Data; ไม่ใช่บริการติดตามหรือย้าย VM",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.4",
    "A company sees lower per-unit infrastructure prices because AWS buys and operates resources at very large scale. Which concept explains this?",
    "บริษัทได้ราคาต่อหน่วยต่ำเพราะ AWS ซื้อและดำเนินงานขนาดใหญ่มาก แนวคิดใด",
    "Elasticity|Pay-as-you-go|Economies of scale|Rightsizing",
    "2",
    "Economies of scale ลดต้นทุนต่อหน่วยจากปริมาณรวมของผู้ให้บริการ ส่วน Rightsizing คือปรับขนาดทรัพยากรของลูกค้า",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.4",
    "A workload runs on an oversized memory instance. The team selects a smaller type after measuring actual memory demand. Which practice is this?",
    "Workload ใช้ Instance ใหญ่เกินจริง ทีมเลือกขนาดเล็กลงหลังวัด Memory Demand แนวปฏิบัติใด",
    "Economies of scale|Scalability|Pay-as-you-go|Rightsizing",
    "3",
    "Rightsizing เลือกขนาดหรือประเภท Resource ให้ตรงกับการใช้งานจริง ลด Overprovisioning",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.4",
    "A finance team includes facilities, licenses, staffing and hardware in its comparison with cloud services. Which metric is it evaluating?",
    "ฝ่ายการเงินรวมอาคาร License บุคลากรและ Hardware เพื่อเทียบกับ Cloud กำลังประเมินอะไร",
    "Total Cost of Ownership (TCO)|Capital expenditure|Variable expense|Fixed expense",
    "0",
    "TCO รวมต้นทุนตรงและอ้อมตลอดช่วงที่ประเมิน ไม่ใช่เพียงเงินลงทุนล่วงหน้าหรือบิลแปรผัน",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.1",
    "A customer runs its own container image on Fargate. Who must update a vulnerable application library inside that image?",
    "ลูกค้ารัน Container Image ของตนบน Fargate ใครต้องอัปเดต Library ที่มีช่องโหว่ใน Image",
    "The third-party auditor|The customer|AWS|AWS Support",
    "1",
    "Fargate ลดภาระ Host แต่ลูกค้ายังรับผิดชอบ Code และ Dependencies ใน Image ไม่ใช่ AWS หรือ Auditor",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.1",
    "Which TWO tasks belong to AWS when a customer uses Amazon EC2? (Select TWO.)",
    "เมื่อใช้ EC2 สองหน้าที่ใดเป็นของ AWS",
    "Configuring IAM permissions|Managing customer encryption key policies|Managing customer-data encryption settings|Securing AWS data centers|Maintaining AWS physical servers",
    "3,4",
    "AWS ดูแล Physical Facilities และ Hardware; ลูกค้าดูแลสิทธิ์และการตั้งค่าการเข้ารหัสของตน",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.1",
    "A developer enables a public S3 bucket policy by mistake. Who is accountable for correcting the policy?",
    "Developer ตั้ง S3 Bucket Policy เป็น Public ผิดพลาด ใครต้องแก้ Policy",
    "AWS|AWS Support|The third-party auditor|The customer",
    "3",
    "ลูกค้าควบคุม Bucket Policy และการเปิดเผยข้อมูล AWS ดูแล Infrastructure ไม่ได้กำหนดสิทธิ์แทนลูกค้า",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.1",
    "Which EC2 component is maintained by AWS rather than the customer?",
    "ส่วนใดของ EC2 ที่ AWS ดูแลแทนลูกค้า",
    "Hypervisor|Guest operating system|Configuring IAM permissions|Defining data-access permissions",
    "0",
    "Hypervisor อยู่ใต้ Virtual Machine และเป็น Infrastructure ของ AWS; Guest OS และ Permissions อยู่กับลูกค้า",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.2",
    "A risk team wants to see whether EBS volumes comply with a required encryption setting over time. Which service evaluates the resource setting?",
    "ทีม Risk ต้องตรวจว่า EBS มี Encryption ตามกฎตลอดเวลา บริการใดประเมิน Configuration",
    "Amazon CloudWatch|AWS Config|AWS CloudTrail|Amazon Inspector",
    "1",
    "Config ตรวจ Configuration เทียบ Rules และบันทึก History; CloudTrail เก็บ API Activity, Inspector ตรวจ CVE, CloudWatch ดู Metrics",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.2",
    "A legal team needs official AWS compliance agreements; an internal auditor needs collected evidence for its own control assessment. Which TWO services fit? (Select TWO.)",
    "ฝ่ายกฎหมายต้องใช้ AWS Compliance Agreements และ Auditor ต้องเก็บหลักฐาน Control ขององค์กร สองบริการใด",
    "AWS Artifact|AWS Audit Manager|AWS Config|AWS Security Hub|AWS CloudTrail",
    "0,1",
    "Artifact ให้ Provider Reports/Agreements ส่วน Audit Manager ช่วยเก็บหลักฐาน Assessment ของลูกค้า",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.2",
    "An administrator suspects a security group was changed by another operator. Which service identifies the identity that made the API request?",
    "Admin สงสัยว่ามี Operator เปลี่ยน Security Group บริการใดระบุ Identity ผู้เรียก API",
    "AWS Config|Amazon CloudWatch|AWS Security Hub|AWS CloudTrail",
    "3",
    "CloudTrail บันทึก API Event และ Principal; Config เน้นสถานะ Resource, CloudWatch เน้น Metrics/Logs",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.2",
    "A compliance officer wants to discover sensitive personal data stored in S3 objects. Which service focuses on that data classification?",
    "Compliance Officer ต้องค้นข้อมูลส่วนบุคคลที่ละเอียดอ่อนใน S3 บริการใดเน้นการจำแนกข้อมูล",
    "Amazon Macie|Amazon GuardDuty|Amazon Inspector|AWS Security Hub",
    "0",
    "Macie ค้นหา Sensitive Data ใน S3; GuardDuty ตรวจภัยคุกคาม Inspector ตรวจช่องโหว่ และ Security Hub รวม Findings",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.2",
    "An enterprise must set up a governed landing zone for newly created AWS accounts. Which service provides this standardized starting environment?",
    "องค์กรต้องสร้าง Landing Zone ที่มีการกำกับดูแลสำหรับบัญชีใหม่ บริการใด",
    "AWS Service Catalog|AWS Control Tower|AWS Organizations|AWS Resource Access Manager",
    "1",
    "Control Tower จัดตั้ง Landing Zone และ Controls; Organizations จัดบัญชี/OUs, RAM แชร์ Resource, Service Catalog แจก Approved Products",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.2",
    "A company has an AWS compliance report but has not configured the application access controls required by its regulator. Who remains responsible for those controls?",
    "บริษัทมี AWS Compliance Report แต่ยังไม่ได้ตั้ง Application Access Controls ตามกฎหมาย ใครรับผิดชอบ",
    "The third-party auditor|AWS Support|The customer|AWS",
    "2",
    "Compliance ของผู้ให้บริการไม่ทำให้ Application ของลูกค้าผ่านโดยอัตโนมัติ ลูกค้ายังคงต้องกำหนด Control ของตน",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.3",
    "An application running on EC2 must read only one S3 bucket using short-lived credentials. Which TWO practices address credential handling and authorization scope? (Select TWO.)",
    "แอป EC2 ต้องอ่านเพียง S3 Bucket เดียวด้วย Credential อายุสั้น สองแนวปฏิบัติใด",
    "AWS IAM|Least privilege|IAM Identity Center|AWS Organizations|AWS Resource Access Manager",
    "0,1",
    "IAM Role จัดสิทธิ์และ Credential ชั่วคราว ส่วน Least privilege จำกัด Actions/Resources เท่าที่จำเป็น",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.3",
    "A retail application needs sign-up and sign-in for shoppers who are not employees. Which service handles customer identities?",
    "แอปร้านค้าต้องให้ลูกค้าทั่วไปสมัครและ Login ไม่ใช่พนักงาน ใช้บริการใด",
    "Amazon Cognito|IAM Identity Center|AWS Directory Service|AWS IAM",
    "0",
    "Cognito จัดการ User Authentication สำหรับแอป; Identity Center เน้น Workforce, Directory Service ให้ Directory และ IAM จัดสิทธิ์ AWS",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.3",
    "A company wants to find which resource policies allow access from outside its zone of trust. Which IAM capability identifies those permissions?",
    "บริษัทต้องค้น Resource Policies ที่อนุญาตสิทธิ์ออกนอก Zone of Trust ใช้ IAM Capability ใด",
    "Amazon GuardDuty|IAM Access Analyzer|AWS Config|AWS CloudTrail",
    "1",
    "IAM Access Analyzer วิเคราะห์ External Access จาก Policies; CloudTrail บันทึก Activity และ GuardDuty ตรวจภัย",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.3",
    "A corporate workforce must sign in to assigned AWS accounts through one access portal. Which service provides centralized workforce access?",
    "พนักงานต้อง Login เข้า AWS Accounts ที่ได้รับมอบหมายผ่าน Portal เดียว ใช้บริการใด",
    "AWS Resource Access Manager|AWS Organizations|IAM Identity Center|Amazon Cognito",
    "2",
    "IAM Identity Center จัด Workforce SSO และ Permission Sets; Cognito ใช้กับผู้ใช้แอป, RAM แชร์ Resource, Organizations จัด Account Governance",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.3",
    "Two departments must independently request and approve privileged access changes. Which security principle is illustrated?",
    "สองแผนกต้องแยกหน้าที่ขอและอนุมัติการเปลี่ยนสิทธิ์สูง หลักการใด",
    "Least privilege|Defense in depth|Zero Trust|Separation of duties",
    "3",
    "Separation of duties แยกอำนาจและขั้นตอนเพื่อไม่ให้คนเดียวทำธุรกรรมสำคัญทั้งหมด; Least privilege เน้นสิทธิ์ขั้นต่ำ",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.4",
    "A team must block requests that match a malicious HTTP header and centrally apply the same policy to many accounts. Which TWO services fit? (Select TWO.)",
    "ทีมต้องบล็อก HTTP Header ที่เป็นอันตรายและจัด Policy เดียวข้ามบัญชี สองบริการใด",
    "AWS WAF|AWS Firewall Manager|AWS Shield|Amazon GuardDuty|Amazon Detective",
    "0,1",
    "WAF กรอง HTTP Requests ส่วน Firewall Manager กระจายและกำกับ Security Policy หลายบัญชี ไม่ใช่การตรวจจับหรือ DDoS โดยตรง",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.4",
    "An incident responder has a threat finding and wants to investigate related IP addresses, users and activity over time. Which service assists the investigation?",
    "Incident Responder มี Threat Finding และต้องสืบสวน IP ผู้ใช้และกิจกรรมที่สัมพันธ์กัน บริการใด",
    "Amazon Inspector|Amazon Detective|Amazon GuardDuty|AWS Security Hub",
    "1",
    "Detective วิเคราะห์ความสัมพันธ์เพื่อสืบสวน Incident หลังพบ Finding; GuardDuty ตรวจจับ, Inspector สแกน CVE, Security Hub รวม Findings",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.4",
    "A regulated workload requires a dedicated hardware module under customer control for cryptographic operations. Which service satisfies the hardware requirement?",
    "Workload ต้องใช้ Hardware Module เฉพาะที่ลูกค้าควบคุมเพื่อทำ Cryptographic Operations บริการใด",
    "AWS Secrets Manager|AWS Certificate Manager|AWS CloudHSM|AWS KMS",
    "2",
    "CloudHSM ให้ Dedicated HSM ที่ลูกค้าควบคุม; KMS เป็น Managed Key Service, Secrets Manager เก็บ Secrets, ACM จัด Certificates",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.4",
    "A database password must be stored securely and rotated automatically. Which service is intended for this secret lifecycle?",
    "Database Password ต้องเก็บปลอดภัยและหมุนเวียนอัตโนมัติ บริการใดจัดการ Secret Lifecycle",
    "AWS KMS|AWS Certificate Manager|AWS CloudHSM|AWS Secrets Manager",
    "3",
    "Secrets Manager เก็บและ Rotate Credentials ตามการตั้งค่า; KMS/CloudHSM จัดการ Key Operations และ ACM จัด TLS Certificates",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.1",
    "A Java application needs to call AWS APIs programmatically through language-specific libraries. Which approach fits?",
    "Java App ต้องเรียก AWS APIs ผ่าน Library สำหรับภาษาโดยตรง วิธีใด",
    "AWS SDK|AWS CLI|AWS Management Console|AWS CloudFormation",
    "0",
    "AWS SDK ให้ Library สำหรับเรียก API จาก Code; CLI ใช้คำสั่ง, Console ใช้ Web UI, CloudFormation ใช้ Template",
    [
      "ชุด Library สำหรับภาษา Programming เพื่อเรียก AWS APIs จาก Code",
      "",
      "",
      ""
    ]
  ],
  [
    "3.1",
    "A developer wants to define infrastructure using TypeScript constructs that synthesize CloudFormation templates. Which tool fits?",
    "Developer ต้องการนิยาม Infrastructure ด้วย TypeScript แล้วสร้าง CloudFormation Template ใช้เครื่องมือใด",
    "AWS CloudShell|AWS CDK|AWS CLI|AWS CloudFormation",
    "1",
    "CDK ใช้ภาษา Programming นิยาม Constructs และ Synthesize CloudFormation; CloudFormation เองใช้ Templates",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.2",
    "A factory needs AWS-managed compute racks physically installed in its own facility for local processing. Which offering extends AWS infrastructure on-premises?",
    "โรงงานต้องการ AWS Compute Rack ติดตั้งในพื้นที่ตนเองเพื่อประมวลผลในองค์กร บริการใด",
    "Edge location|Multi-AZ deployment|AWS Outposts|AWS Region",
    "2",
    "Outposts นำ AWS Infrastructure ไปยังสถานที่ลูกค้า ต่างจาก Region/AZ/Edge ที่เป็น Infrastructure ของ AWS ตามพื้นที่ให้บริการ",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.2",
    "A bank must keep data in one country while tolerating the loss of one availability zone. Which TWO choices support the requirements? (Select TWO.)",
    "ธนาคารต้องเก็บข้อมูลในประเทศเดียวและรองรับ AZ หนึ่งเสีย สองทางเลือกใด",
    "AWS Outposts|AWS Region|Multi-AZ deployment|Edge location|Multi-Region deployment",
    "1,2",
    "เลือก Region ตาม Data Residency และกระจายหลาย AZ ภายใน Region เพื่อรับมือ AZ Failure; Multi-Region อาจข้ามขอบเขตประเทศ",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.3",
    "A platform already uses Amazon ECS. The team wants to stop managing worker virtual machines but keep its ECS task definitions. Which compute option should change?",
    "ทีมใช้ ECS อยู่ ต้องหยุดดูแล Worker VM แต่คง Task Definitions ไว้ ควรเปลี่ยน Compute เป็นอะไร",
    "AWS Fargate|Amazon EKS|AWS Batch|Amazon EC2",
    "0",
    "Fargate เป็น Serverless Compute สำหรับ ECS/EKS; ECS Task Definitions ยังคงใช้ได้โดยไม่ต้องดูแล EC2 Hosts",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.3",
    "An application needs a queue of compute jobs with dependencies and managed job scheduling. Which service fits this processing pattern?",
    "แอปต้องจัดคิว Compute Jobs ที่มี Dependencies และ Managed Scheduling บริการใด",
    "AWS Step Functions|AWS Batch|AWS Lambda|Amazon ECS",
    "1",
    "Batch จัดคิวและ Schedule Batch Jobs พร้อม Compute Environment; Step Functions เน้น Workflow และ ECS เน้น Container Orchestration",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.3",
    "A web tier needs more instances at peak demand and traffic distributed among healthy instances. Which TWO services perform these separate functions? (Select TWO.)",
    "Web Tier ต้องเพิ่ม Instance ช่วง Peak และกระจาย Traffic ไป Instance ที่ Healthy สองบริการใด",
    "EC2 Auto Scaling|Elastic Load Balancing|Amazon CloudFront|AWS Global Accelerator|AWS Lambda",
    "0,1",
    "Auto Scaling ปรับจำนวน EC2; ELB กระจาย Requests ไป Healthy Targets ไม่ได้สร้าง Instance เอง",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.3",
    "A small business wants a simple virtual private server with a bundled monthly price and basic networking. Which offering fits?",
    "ธุรกิจเล็กต้องการ VPS แบบง่าย ราคาเป็นแพ็กเกจรายเดือนพร้อม Network พื้นฐาน บริการใด",
    "Amazon EC2|AWS Elastic Beanstalk|AWS Fargate|Amazon Lightsail",
    "3",
    "Lightsail มี VPS และ Bundled Pricing แบบง่าย; EC2 ให้ความยืดหยุ่นกว่าแต่ไม่ใช่แพ็กเกจ VPS แบบเดียวกัน",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.4",
    "An online game stores player sessions as key-value records with consistently low latency and managed scaling. Which database fits?",
    "เกมเก็บ Session ผู้เล่นแบบ Key-value ต้องการ Latency ต่ำและ Managed Scaling ใช้ Database ใด",
    "Amazon DynamoDB|Amazon RDS|Amazon Neptune|Amazon DocumentDB",
    "0",
    "DynamoDB เป็น Managed Key-value/Document NoSQL รองรับการขยายและ Low Latency; Neptune เป็น Graph และ RDS เป็น Relational",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.4",
    "A PostgreSQL application needs an AWS-built relational engine compatible with its existing database interface. Which engine fits?",
    "แอป PostgreSQL ต้องการ Relational Engine ที่ AWS พัฒนาและเข้ากันได้กับ Interface เดิม ควรใช้ใด",
    "Amazon DocumentDB|Amazon Aurora|Amazon RDS|Amazon Redshift",
    "1",
    "Aurora เป็น AWS-built Relational Engine ที่เข้ากันได้กับ MySQL/PostgreSQL; RDS เป็นบริการจัดการหลาย Engines",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.4",
    "A product catalog database is overloaded by repeated reads of the same records. Which service adds an in-memory caching layer?",
    "Database สินค้าถูกอ่าน Record เดิมซ้ำจำนวนมาก บริการใดเพิ่ม In-memory Cache",
    "Amazon Redshift|Amazon RDS|Amazon ElastiCache|Amazon DynamoDB",
    "2",
    "ElastiCache ให้ In-memory Cache ลดการอ่านซ้ำจาก Database; ไม่ใช่ Data Warehouse หรือฐานข้อมูล Relational",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.5",
    "Two VPCs need a direct private network connection without a central routing hub. Which feature is intended?",
    "VPC สองตัวต้องเชื่อม Network โดยตรงแบบ Private โดยไม่ใช้ Hub กลาง ใช้ Feature ใด",
    "AWS Transit Gateway|AWS PrivateLink|AWS Site-to-Site VPN|VPC peering",
    "3",
    "VPC Peering เชื่อม VPC โดยตรง; Transit Gateway เป็น Hub, PrivateLink ให้เข้าถึง Service และ VPN เชื่อม Network ผ่าน Tunnel",
    [
      "",
      "",
      "",
      "เชื่อมสอง VPC ด้วย Private Routing โดยตรง"
    ]
  ],
  [
    "3.5",
    "A private subnet needs to download public operating system updates but must not accept unsolicited internet connections. Which component enables outbound IPv4 access?",
    "Private Subnet ต้องดาวน์โหลด OS Update จาก Internet แต่ไม่รับ Connection ขาเข้าที่ไม่ร้องขอ ใช้อะไร",
    "NAT Gateway|Internet Gateway|VPC endpoint|AWS Client VPN",
    "0",
    "Public NAT Gateway ให้ Private Subnet เริ่ม Outbound Internet Connection เมื่อ Routing ถูกต้อง; IGW ไม่ทำ NAT ให้ Private IP และ Endpoint ใช้กับบริการที่รองรับ",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.5",
    "A consultant connects from a laptop, while a branch office connects its entire network. Which TWO managed VPN services match the respective clients? (Select TWO.)",
    "Consultant เชื่อมจาก Laptop และสาขาเชื่อมทั้ง Network ใช้ Managed VPN สองบริการใด",
    "VPC endpoint|AWS Client VPN|AWS Site-to-Site VPN|AWS Direct Connect|AWS PrivateLink",
    "1,2",
    "Client VPN เชื่อมผู้ใช้รายบุคคล ส่วน Site-to-Site VPN เชื่อม Network-to-Network; Direct Connect เป็น Dedicated Link",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.6",
    "A company must periodically copy millions of files from its NAS to S3 with transfer verification, not provide a live file-share interface. Which service fits?",
    "บริษัทต้องคัดลอกไฟล์จาก NAS ไป S3 เป็นระยะพร้อมตรวจสอบการ Transfer ไม่ได้เปิด File Share แบบ Live ใช้บริการใด",
    "AWS Backup|Amazon EFS|AWS DataSync|AWS Storage Gateway",
    "2",
    "DataSync ออกแบบสำหรับ Transfer และตรวจสอบข้อมูล; Storage Gateway ให้ Hybrid Storage Interface และ Backup จัดนโยบาย Backup",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.6",
    "A Windows workload requires managed shared file storage supporting SMB and Active Directory integration. Which service fits?",
    "Windows Workload ต้องการ Managed Shared File Storage ที่รองรับ SMB และ AD ใช้บริการใด",
    "Amazon EFS|Amazon EBS|Amazon S3|Amazon FSx for Windows File Server",
    "3",
    "FSx for Windows ให้ SMB File Shares และ AD Integration; EFS ใช้ NFS, EBS เป็น Block, S3 เป็น Object",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.6",
    "An EC2 scratch workload can recreate its temporary files and needs local storage that is lost when the instance is terminated. Which option fits?",
    "EC2 Scratch Workload สร้างไฟล์ใหม่ได้และต้องใช้ Local Storage ที่สูญหายเมื่อ Terminate ใช้อะไร",
    "Instance store|Amazon EBS|Amazon EFS|Amazon S3",
    "0",
    "Instance store เป็น Ephemeral Block Storage ผูกกับ Host; EBS เป็น Persistent Volume และ EFS/S3 เป็น Storage แยกจาก Host",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.7",
    "A company needs to extract invoice tables and separately identify customer sentiment in written reviews. Which TWO AI services fit? (Select TWO.)",
    "บริษัทต้องดึงตารางจาก Invoice และวิเคราะห์ Sentiment จากรีวิวข้อความ สองบริการใด",
    "Amazon Rekognition|Amazon Transcribe|Amazon Translate|Amazon Textract|Amazon Comprehend",
    "3,4",
    "Textract ดึง Text/Forms/Tables จากเอกสาร ส่วน Comprehend วิเคราะห์ภาษาและ Sentiment ไม่ใช่ Speech หรือ Image Recognition",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.7",
    "An analytics team needs a managed Spark cluster for transformations over large datasets. Which service is designed for this framework?",
    "ทีม Analytics ต้องการ Managed Spark Cluster เพื่อแปลงข้อมูลขนาดใหญ่ ใช้บริการใด",
    "Amazon OpenSearch Service|Amazon Quick Sight|Amazon EMR|Amazon Athena",
    "2",
    "EMR รัน Big Data Frameworks เช่น Spark; Athena ใช้ Serverless SQL, OpenSearch ทำ Index/Search และ Quick Sight ทำ BI",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.7",
    "A business wants to build a generative AI application using managed foundation model APIs instead of training its own model. Which service fits?",
    "ธุรกิจต้องสร้าง Generative AI App ด้วย Managed Foundation Model APIs ไม่เทรน Model เอง ใช้บริการใด",
    "Amazon SageMaker AI|Amazon Comprehend|Amazon Q|Amazon Bedrock",
    "3",
    "Bedrock ให้เข้าถึง Foundation Models ผ่าน Managed APIs; SageMaker AI ใช้สร้าง/ฝึก/Deploy ML Models และ Q เป็น AI Assistant",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.8",
    "An operations team wants a managed workflow that coordinates retries and branching between Lambda functions. Which service fits?",
    "ทีม Operations ต้องการ Workflow ที่จัด Retry และ Branching ระหว่าง Lambda Functions บริการใด",
    "AWS Step Functions|Amazon EventBridge|Amazon SQS|Amazon SNS",
    "0",
    "Step Functions จัดลำดับ State และ Workflow; EventBridge Route Events, SQS Queue, SNS Fan-out",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.8",
    "A team needs a hosted frontend with continuous deployment from a source repository. Which service targets web application development and hosting?",
    "ทีมต้องการ Hosted Frontend พร้อม Continuous Deployment จาก Source Repository ใช้บริการใด",
    "AWS Elastic Beanstalk|AWS Amplify|AWS CodeBuild|AWS CodePipeline",
    "1",
    "Amplify เน้น Frontend Development/Hosting พร้อม CI/CD; CodeBuild ทำ Build, CodePipeline จัด Pipeline และ Beanstalk จัด App Environment",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.1",
    "A render farm can checkpoint jobs and tolerate instance interruption. Which EC2 purchase option exploits spare capacity?",
    "Render Farm บันทึก Checkpoint ได้และทนต่อ Instance Interruption ตัวเลือกใดใช้ Capacity เหลือ",
    "Reserved Instances|Savings Plans|Spot Instances|On-Demand Instances",
    "2",
    "Spot ใช้ Spare Capacity ราคาลดและถูก Interrupt ได้; On-Demand ไม่ Commit ส่วน RI/Savings Plans ผูก Commitment",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.1",
    "A company needs EC2 capacity ready in a specific AZ for a short event but does not want a one-year commitment. Which option meets the capacity requirement?",
    "บริษัทต้องรับประกัน EC2 Capacity ใน AZ เฉพาะช่วงงานสั้นโดยไม่ผูกหนึ่งปี ใช้ตัวเลือกใด",
    "Savings Plans|Reserved Instances|Spot Instances|On-Demand Capacity Reservations",
    "3",
    "On-Demand Capacity Reservations จอง Capacity ใน AZ โดยไม่ให้ส่วนลดเอง; Savings Plans เน้นส่วนลดตาม Spend Commitment",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.1",
    "Which TWO pricing choices offer discounts for long-term commitments rather than guaranteeing a physical host? (Select TWO.)",
    "สองตัวเลือกใดให้ส่วนลดจาก Commitment ระยะยาว ไม่ใช่จอง Physical Host",
    "Reserved Instances|Dedicated Hosts|On-Demand Capacity Reservations|On-Demand Instances|Savings Plans",
    "4,0",
    "Savings Plans ผูก Spend ต่อชั่วโมง และ RI ผูกเงื่อนไขการใช้งานเพื่อรับส่วนลด; Capacity Reservation เน้น Capacity",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.2",
    "A team wants to receive an alert when spending unexpectedly deviates from its historical pattern, without setting a fixed monthly budget. Which service fits?",
    "ทีมต้องการ Alert เมื่อค่าใช้จ่ายผิดปกติจากแนวโน้มเดิมโดยไม่กำหนดงบรายเดือน ใช้บริการใด",
    "AWS Pricing Calculator|AWS Cost Anomaly Detection|AWS Budgets|AWS Cost Explorer",
    "1",
    "Cost Anomaly Detection ใช้ตรวจรูปแบบค่าใช้จ่ายผิดปกติ; Budgets เน้น Threshold ที่กำหนด",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.2",
    "Finance wants to export detailed line-item usage for custom analysis and identify spending by department. Which TWO tools or features fit? (Select TWO.)",
    "Finance ต้อง Export ค่าใช้จ่ายระดับรายการและจำแนกตามแผนก สองเครื่องมือหรือ Feature ใด",
    "AWS Cost and Usage Report|Cost allocation tags|AWS Budgets|AWS Pricing Calculator|Consolidated billing",
    "0,1",
    "CUR ให้ข้อมูลละเอียด ส่วน Cost Allocation Tags ใช้ระบุค่าใช้จ่ายตาม Department; Consolidated Billing รวมบัญชีไม่ติด Tag ให้เอง",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.2",
    "An engineer wants recommendations for less expensive instance types based on measured resource utilization, not an alarm or a scaling action. Which tool fits?",
    "Engineer ต้องการคำแนะนำ Instance Type จาก Utilization จริง ไม่ใช่ Alarm หรือ Scaling Action ใช้เครื่องมือใด",
    "AWS Trusted Advisor|AWS Cost Explorer|EC2 Auto Scaling|AWS Compute Optimizer",
    "3",
    "Compute Optimizer วิเคราะห์ Metrics เพื่อแนะนำ Resource Type/Size; Trusted Advisor ให้ Best-practice Checks กว้างกว่า",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.3",
    "A company needs a consulting team from AWS to help execute a cloud transformation rather than only access self-service guidance. Which resource fits?",
    "บริษัทต้องการทีมที่ปรึกษาจาก AWS ช่วยดำเนิน Cloud Transformation ไม่ใช่แค่คู่มือ ใช้อะไร",
    "AWS Professional Services|AWS Prescriptive Guidance|AWS re:Post|AWS Marketplace",
    "0",
    "Professional Services ให้ผู้เชี่ยวชาญช่วยดำเนินโครงการ ส่วน Prescriptive Guidance ให้คู่มือ และ re:Post ให้ Community Q&A",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.3",
    "A software vendor wants to list a commercial product for AWS customers to discover and purchase. Which channel is intended?",
    "ผู้ขาย Software ต้องการลงขายผลิตภัณฑ์ให้ลูกค้า AWS ค้นหาและซื้อ ช่องทางใด",
    "AWS re:Post|AWS Marketplace|AWS Partner Network|AWS Support Center",
    "1",
    "Marketplace เป็น Catalog สำหรับซื้อขาย Software/Services; APN เป็นเครือข่ายคู่ค้า ไม่ใช่ Storefront",
    [
      "",
      "",
      "",
      ""
    ]
  ]
];
  const mixed = rows.slice();
  let seed = (20261117 + 14 * 9973) >>> 0;
  for (let i = mixed.length - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = Math.floor((seed / 4294967296) * (i + 1));
    [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
  }
  window.buildClfLocalExamSet(14, mixed);
})();
