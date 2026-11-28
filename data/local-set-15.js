(() => {
  const rows = [
  [
    "1.1",
    "A company expands its application from one server to several servers to support a permanently larger customer base. Which concept describes this ability?",
    "บริษัทขยายจาก Server เดียวเป็นหลายเครื่องเพื่อรองรับฐานลูกค้าที่ใหญ่ขึ้นถาวร แนวคิดใด",
    "Elasticity|Agility|Durability|Scalability",
    "3",
    "Scalability คือความสามารถเพิ่ม Capacity ให้รองรับงานที่โตขึ้น ส่วน Elasticity เน้นปรับเพิ่มและลดตาม Demand",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.1",
    "A records system must preserve its objects even if individual storage devices fail. Which characteristic is the primary concern?",
    "ระบบจัดเก็บเอกสารต้องรักษา Object แม้ Storage Device บางตัวเสีย คุณสมบัติใดสำคัญที่สุด",
    "Durability|High availability|Elasticity|Agility",
    "0",
    "Durability เน้นลดโอกาสสูญหายของข้อมูล ไม่ใช่ Uptime ของบริการหรือความเร็วการ Provision",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.1",
    "A ticketing site must have sufficient capacity for an unpredictable surge and release that capacity afterward. Which capability is most directly useful?",
    "เว็บขายตั๋วต้องรับ Traffic ที่พุ่งแบบคาดเดาไม่ได้และคืน Capacity หลังจบ ความสามารถใด",
    "Scalability|Elasticity|Fault tolerance|Global reach",
    "1",
    "Elasticity เพิ่มและลด Resource ตาม Workload จริง ส่วน Scalability รองรับการเติบโตโดยไม่จำเป็นต้องลด Capacity อัตโนมัติ",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.1",
    "A research organization wants to launch experiments quickly and avoid owning idle physical equipment. Which TWO cloud benefits address these goals? (Select TWO.)",
    "องค์กรวิจัยต้องเริ่ม Experiment เร็วและไม่ต้องเป็นเจ้าของ Hardware ที่ว่าง สองประโยชน์ใด",
    "Durability|Fault tolerance|Global reach|Agility|Pay-as-you-go",
    "3,4",
    "Agility ลดเวลาจัดเตรียม Environment; Pay-as-you-go ลดการลงทุนและจ่ายตามบริการที่ใช้จริง",
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
    "An architect replaces an oversized database configuration to reduce its monthly bill while meeting the same business requirements. Which pillar describes the primary goal?",
    "Architect เปลี่ยน Database ที่ใหญ่เกินเพื่อให้บิลลดลงแต่ยังตรง Business Requirements เดิม เป้าหมายหลักตรง Pillar ใด",
    "Performance Efficiency|Sustainability|Reliability|Cost Optimization",
    "3",
    "Cost Optimization เน้นลดค่าใช้จ่ายที่ไม่สร้างมูลค่าโดยคง Business Outcomes ส่วน Performance Efficiency เน้นตอบ Performance Requirements",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.2",
    "A team reduces the environmental impact of a workload by improving resource utilization and using fewer resources for the same useful work. Which pillar is the primary focus?",
    "ทีมลดผลกระทบต่อสิ่งแวดล้อมโดยใช้ Resource ให้คุ้มและลดจำนวนทรัพยากรสำหรับงานเดิม ตรง Pillar ใด",
    "Sustainability|Cost Optimization|Performance Efficiency|Operational Excellence",
    "0",
    "Sustainability เน้นลดผลกระทบต่อสิ่งแวดล้อมจาก Workload ไม่ใช่ค่าใช้จ่ายหรือ Latency เป็นเป้าหมายหลัก",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.2",
    "A system uses multiple independent components and automatically recovers when an unhealthy component is detected. Which pillar guides this recovery design?",
    "ระบบใช้ Components ที่แยกกันและกู้คืนอัตโนมัติเมื่อ Component ไม่ Healthy ตรง Pillar ใด",
    "Performance Efficiency|Reliability|Operational Excellence|Security",
    "1",
    "Reliability ครอบคลุมการออกแบบให้ทำงานถูกต้องและกู้คืนจาก Failure; Operational Excellence เน้นการดำเนินงานและปรับปรุง",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.2",
    "Which TWO practices align with the Operational Excellence and Security pillars, respectively? (Select TWO.)",
    "สองแนวปฏิบัติใดตรง Operational Excellence และ Security ตามลำดับ",
    "Perform operations as code|Apply least-privilege access|Stop guessing capacity|Use resources for less environmental impact|Measure resource performance",
    "0,1",
    "Operations as code เป็น Operational Excellence; Least privilege เป็น Security ส่วน Stop guessing capacity เป็น Reliability",
    [
      "กำหนดและดำเนิน Operations ด้วย Code เพื่อทำซ้ำและลดความผิดพลาด",
      "จำกัดสิทธิ์ของ Identity ให้เท่าที่จำเป็นต่อหน้าที่",
      "ปรับ Capacity ตามความต้องการแทนการคาดเดา เป็นแนวทาง Reliability",
      "ลดผลกระทบสิ่งแวดล้อมจากการใช้ทรัพยากร เป็น Sustainability",
      "ประเมินประสิทธิภาพของทรัพยากรเพื่อเลือกให้ตรง Workload"
    ]
  ],
  [
    "1.2",
    "A company wants a reference that organizes architectural best practices into six pillars, not a tool for recording a particular workload assessment. Which resource fits?",
    "บริษัทต้องการแนวทาง Best Practices ที่แบ่งหก Pillars ไม่ใช่เครื่องมือบันทึกผลประเมิน Workload ใช้สิ่งใด",
    "AWS Well-Architected Tool|AWS Cloud Adoption Framework|AWS Trusted Advisor|AWS Well-Architected Framework",
    "3",
    "Well-Architected Framework เป็นแนวทางหก Pillars; Tool ใช้ประเมิน Workload ตามแนวทางนั้น CAF เตรียมองค์กร และ Trusted Advisor ตรวจ Best Practices",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.3",
    "A company keeps its existing application on premises because a dependency cannot be moved this year. Which migration strategy is illustrated?",
    "บริษัทคง Application ไว้ On-premises เพราะ Dependency ยังย้ายไม่ได้ในปีนี้ กลยุทธ์ใด",
    "Retain|Retire|Rehost|Relocate",
    "0",
    "Retain คือเก็บ Workload ไว้ที่เดิม ส่วน Retire คือเลิกใช้ Rehost ย้าย Server และ Relocate ย้าย Environment โดยไม่เปลี่ยน Architecture",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.3",
    "An organization rewrites an application to use managed event-driven services and independent components. Which migration strategy describes the architectural change?",
    "องค์กรเขียน Application ใหม่ให้ใช้ Managed Event-driven Services และ Components อิสระ กลยุทธ์ใด",
    "Rehost|Refactor|Replatform|Repurchase",
    "1",
    "Refactor เปลี่ยน Architecture ของ Application อย่างมีนัยสำคัญ; Replatform ปรับบางส่วน Rehost ย้ายแทบไม่แก้ และ Repurchase เปลี่ยนผลิตภัณฑ์",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.3",
    "Before migration, leaders prioritize cloud investments according to expected business outcomes and value realization. Which CAF perspective is primarily concerned?",
    "ก่อน Migration ผู้บริหารจัดลำดับการลงทุนตาม Business Outcomes และ Value ตรง CAF Perspective ใด",
    "People Perspective|Platform Perspective|Business Perspective|Governance Perspective",
    "2",
    "Business Perspective เชื่อม Cloud Investment กับผลลัพธ์ทางธุรกิจ; Governance เน้น Risk และการกำกับดูแล People เน้นบุคลากร Platform เน้นเทคโนโลยี",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.3",
    "A company needs to inventory its servers before migration and estimate the business case for moving them. Which TWO capabilities provide the separate planning outputs? (Select TWO.)",
    "บริษัทต้องสำรวจ Server Inventory และประมาณ Business Case ก่อนย้าย สองบริการใดให้ผลลัพธ์ที่ต่างกัน",
    "AWS Application Discovery Service|AWS Migration Evaluator|AWS DMS|AWS Application Migration Service|AWS Migration Hub",
    "0,1",
    "Discovery Service สำรวจ Inventory และ Dependencies; Migration Evaluator คำนวณ Business Case ส่วน MGN/DMS ใช้ดำเนินการย้าย",
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
    "An organization pays a flat annual facility lease regardless of how many servers are active. Which economic concept describes the lease payment?",
    "องค์กรจ่ายค่าเช่าสถานที่รายปีเท่าเดิมไม่ว่าเปิด Server กี่เครื่อง แนวคิดค่าใช้จ่ายใด",
    "Fixed expense|Variable expense|Capital expenditure|Economies of scale",
    "0",
    "Fixed expense ไม่เปลี่ยนตามปริมาณใช้งานในช่วงที่กำหนด ส่วน Variable expense แปรตามการใช้งาน",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.4",
    "A company owns software licenses and is considering using them for cloud instances. Which concept must be checked against the vendor's licensing terms?",
    "บริษัทมี Software Licenses อยู่แล้วและต้องการใช้กับ Cloud Instances ต้องตรวจเงื่อนไข Vendor ในแนวคิดใด",
    "Rightsizing|Bring Your Own License (BYOL)|Pay-as-you-go|Economies of scale",
    "1",
    "BYOL คือการนำ License ที่มีอยู่มาใช้ตามข้อกำหนด Vendor ไม่ได้หมายความว่า License ทุกชนิดใช้บน Cloud ได้",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "1.4",
    "A business purchases physical servers before it has any customers. Which expense category applies to this asset purchase?",
    "ธุรกิจซื้อ Physical Servers ก่อนมีลูกค้า เงินลงทุนเพื่อซื้อ Asset จัดเป็นค่าใช้จ่ายประเภทใด",
    "Fixed expense|Pay-as-you-go|Capital expenditure|Variable expense",
    "2",
    "Capital expenditure เป็นการลงทุนซื้อสินทรัพย์ล่วงหน้า ต่างจาก Variable Expense ที่เปลี่ยนตามการใช้บริการ",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.1",
    "A company uses a managed database service. Who decides which application users are permitted to read customer records?",
    "บริษัทใช้ Managed Database ใครกำหนดว่า Application Users รายใดอ่าน Customer Records ได้",
    "AWS|AWS Support|The third-party auditor|The customer",
    "3",
    "ลูกค้ายังคงควบคุม Logical Access และสิทธิ์ข้อมูล แม้ AWS จัดการ Infrastructure และงาน Database ที่บริการรับผิดชอบ",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.1",
    "Which TWO responsibilities remain with a customer running code in AWS Lambda? (Select TWO.)",
    "สองหน้าที่ใดยังคงเป็นของลูกค้าที่รัน Code ใน Lambda",
    "Defining data-access permissions|Maintaining application code|Maintaining AWS physical servers|Patching AWS-owned physical hosts|Maintaining AWS global network infrastructure",
    "0,1",
    "Lambda จัดการ Server Infrastructure แต่ลูกค้ายังควบคุม Application Code และ Permissions ให้ข้อมูล",
    [
      "",
      "ดูแล Code, Dependencies และ Logic ของ Application",
      "",
      "",
      ""
    ]
  ],
  [
    "2.1",
    "A customer uses a managed database and an EC2 instance running a self-managed database. Which component requires operating system patching by the customer?",
    "ลูกค้าใช้ Managed Database และ EC2 ที่ดูแล Database เอง ส่วนใดลูกค้าต้อง Patch OS",
    "AWS-owned physical servers|Guest operating system on EC2|Managed database host operating system|Hypervisor",
    "1",
    "EC2 Guest OS อยู่ภายใต้การควบคุมของลูกค้า ส่วน Host OS ของ Managed Database, Hypervisor และ Physical Server เป็นหน้าที่ AWS",
    [
      "",
      "OS ใน EC2 ที่ลูกค้าจัดการเองและต้อง Patch",
      "OS ที่อยู่ใต้ Managed Database และ AWS รับผิดชอบตามขอบเขตบริการ",
      ""
    ]
  ],
  [
    "2.1",
    "A security scanning tool reports a vulnerable package in a self-managed Linux instance. Who must ensure the package is patched?",
    "เครื่องมือสแกนพบ Package ช่องโหว่ใน Linux Instance ที่ดูแลเอง ใครต้องจัดการ Patch",
    "AWS Support|The third-party auditor|The customer|AWS",
    "2",
    "ลูกค้ารับผิดชอบ Guest OS และซอฟต์แวร์ที่ติดตั้งเอง เครื่องมือสแกนให้ Finding แต่ไม่โอนความรับผิดชอบไปให้ AWS",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.2",
    "A company wants to apply a rule that identifies security groups allowing unrestricted SSH access. Which service evaluates that resource configuration?",
    "บริษัทต้องการ Rule ตรวจ Security Groups ที่เปิด SSH ไม่จำกัดแหล่งที่มา บริการใดประเมิน Configuration",
    "AWS CloudTrail|AWS WAF|Amazon Inspector|AWS Config",
    "3",
    "Config ใช้ Rules ประเมิน Resource Configuration; CloudTrail บันทึก API, WAF กรอง Web Requests และ Inspector เน้น Vulnerabilities",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.2",
    "A security lead needs one view of findings from multiple detection services and AWS accounts. Which service consolidates the findings?",
    "Security Lead ต้องการดู Findings จากหลาย Detection Services และหลาย AWS Accounts ในที่เดียว บริการใด",
    "AWS Security Hub|Amazon GuardDuty|Amazon Detective|AWS Firewall Manager",
    "0",
    "Security Hub รวมและจัดการ Security Findings; GuardDuty ตรวจจับ, Detective สืบสวน และ Firewall Manager จัด Policy ข้าม Accounts",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.2",
    "A workload team needs notifications when an application log reports errors and an audit trail of the API calls that modified resources. Which TWO services meet these needs? (Select TWO.)",
    "ทีมต้องแจ้งเตือนจาก Application Error Logs และเก็บ Audit Trail ของ API ที่แก้ Resource สองบริการใด",
    "Amazon CloudWatch|AWS CloudTrail|AWS Config|AWS Artifact|AWS Trusted Advisor",
    "0,1",
    "CloudWatch ใช้ Logs/Metrics/Alarms; CloudTrail บันทึก API Activity และ Identity; Artifact แจก Compliance Reports",
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
    "A centralized IT team shares approved subnets with member accounts without transferring ownership of the VPC. Which service supports this sharing?",
    "ทีม IT กลางต้องแชร์ Subnet ที่อนุมัติให้ Member Accounts โดยไม่โอน Ownership ของ VPC ใช้บริการใด",
    "AWS Control Tower|IAM Access Analyzer|AWS Resource Access Manager|AWS Organizations",
    "2",
    "RAM แชร์ Supported Resources ข้าม Accounts; Organizations จัดบัญชี, Control Tower จัด Landing Zone และ Access Analyzer วิเคราะห์สิทธิ์",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.2",
    "An auditor asks for an official AWS SOC report rather than evidence generated from the customer's account. Where should the report be retrieved?",
    "Auditor ขอ AWS SOC Report อย่างเป็นทางการ ไม่ใช่หลักฐานจาก Account ลูกค้า ดาวน์โหลดจากที่ใด",
    "AWS Audit Manager|AWS Config|AWS Security Hub|AWS Artifact",
    "3",
    "Artifact ให้ AWS Compliance Reports และ Agreements; Audit Manager ช่วยเก็บ Customer Audit Evidence",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.2",
    "A company wants all member accounts organized under a central hierarchy for governance and consolidated billing. Which service provides the account structure?",
    "บริษัทต้องจัด Member Accounts ใต้ Hierarchy กลางเพื่อ Governance และ Consolidated Billing บริการใดจัดโครงสร้าง Accounts",
    "AWS Organizations|AWS Control Tower|AWS Resource Access Manager|IAM Identity Center",
    "0",
    "Organizations จัด Account Hierarchy และ OUs พร้อม Consolidated Billing; Control Tower สร้าง Landing Zone บนโครงสร้างหลายบัญชี",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.3",
    "A company requires guardrails that restrict which AWS actions member accounts may perform, even if a local IAM administrator grants broad access. Which policy type defines the organization-level maximum permissions?",
    "บริษัทต้องจำกัด Actions ของ Member Accounts แม้ IAM Admin ภายในให้สิทธิ์กว้าง Policy ชนิดใดกำหนดขอบเขตสูงสุดระดับ Organization",
    "Permissions boundary|Service control policy (SCP)|IAM identity-based policy|Resource-based policy",
    "1",
    "SCP จำกัดสิทธิ์สูงสุดของบัญชีใน Organizations ที่อยู่ใต้การควบคุม ไม่ได้ Grant Permissions เอง; Permissions Boundary จำกัด IAM Entity รายตัว",
    [
      "กำหนดขอบเขตสูงสุดของ Identity-based Permissions สำหรับ IAM User หรือ Role",
      "นโยบายกำหนดขอบเขตสูงสุดของสิทธิ์ระดับ Organization โดยไม่ Grant สิทธิ์เอง",
      "Policy ที่แนบ Identity เพื่อกำหนด Permissions",
      "Policy ที่แนบ Resource เพื่อระบุ Principal และ Permissions"
    ]
  ],
  [
    "2.3",
    "A new AWS account should protect the identity with unrestricted account-level privileges and avoid using it for daily work. Which TWO practices fit? (Select TWO.)",
    "AWS Account ใหม่ต้องปกป้อง Identity ที่มีสิทธิ์ระดับบัญชีสูงสุดและไม่ใช้ทำงานทุกวัน สองแนวปฏิบัติใด",
    "Enable MFA on the root user|Use separate identities for routine administration|Create root access keys for scripts|Share root credentials among administrators|Disable all password protections",
    "0,1",
    "เปิด MFA ให้ Root และใช้ Identity แยกสำหรับงานประจำ ลดความเสี่ยงจากการใช้หรือแชร์ Root Credentials",
    [
      "เพิ่มปัจจัยยืนยันตัวตนให้ Root User",
      "ใช้ Identity แยกที่มีสิทธิ์เหมาะสมสำหรับงานประจำ",
      "สร้าง Long-lived Root Credentials ซึ่งเพิ่มความเสี่ยงและไม่ควรใช้กับงานประจำ",
      "แชร์ Credentials ทำให้ควบคุมและตรวจสอบผู้ใช้รายบุคคลยาก",
      "ลดการป้องกัน Credential ซึ่งตรงข้ามกับการรักษาความปลอดภัย"
    ]
  ],
  [
    "2.3",
    "A developer needs an identity that can be assumed by an AWS service and provides temporary credentials. Which IAM entity is designed for this?",
    "Developer ต้องการ Identity ที่ AWS Service Assume ได้และให้ Temporary Credentials ใช้ IAM Entity ใด",
    "IAM user|IAM group|IAM policy|IAM role",
    "3",
    "IAM Role เป็น Identity ที่ Assume ได้และใช้ Temporary Credentials; User มี Identity ถาวร Group รวม Users และ Policy กำหนด Permissions",
    [
      "Identity ระยะยาวภายใน AWS Account",
      "รวม IAM Users เพื่อจัด Permissions ร่วมกัน",
      "เอกสารกำหนด Permissions ไม่ใช่ Identity",
      "Identity ที่ Assume ได้เพื่อรับ Temporary Credentials"
    ]
  ],
  [
    "2.3",
    "A business needs a managed Microsoft Active Directory environment for Windows workloads rather than a customer-facing authentication service. Which offering fits?",
    "ธุรกิจต้องการ Managed Microsoft AD สำหรับ Windows Workloads ไม่ใช่ Authentication สำหรับลูกค้าแอป บริการใด",
    "AWS Directory Service|Amazon Cognito|IAM Identity Center|AWS IAM",
    "0",
    "Directory Service รองรับ Managed Microsoft AD; Cognito จัด Customer Identities, Identity Center จัด Workforce SSO และ IAM จัดสิทธิ์ AWS",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.3",
    "A security team wants each employee to be granted only the actions and resources needed for their assigned role. Which principle applies?",
    "ทีม Security ต้องให้พนักงานมีเฉพาะ Actions และ Resources ที่จำเป็นต่อหน้าที่ หลักการใด",
    "Zero Trust|Least privilege|Separation of duties|Defense in depth",
    "1",
    "Least privilege จำกัดสิทธิ์เท่าที่จำเป็น; Separation of duties แยกหน้าที่ และ Defense in depth ใช้หลายชั้นป้องกัน",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.4",
    "A public web workload is targeted by large network traffic floods rather than specific malicious HTTP parameters. Which service addresses DDoS protection?",
    "Public Web Workload ถูกโจมตีด้วย Network Traffic Flood จำนวนมาก ไม่ใช่ HTTP Parameters เฉพาะ บริการใดป้องกัน DDoS",
    "Amazon GuardDuty|AWS Firewall Manager|AWS Shield|AWS WAF",
    "2",
    "Shield ให้ DDoS Protection; WAF กรอง HTTP Requests ส่วน GuardDuty ตรวจจับภัยและ Firewall Manager กำกับ Policy",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.4",
    "An EC2 application receives traffic on a known port only from approved sources. Which VPC feature controls traffic at the network interface and is stateful?",
    "EC2 รับ Traffic ที่ Port กำหนดจากแหล่งที่อนุมัติเท่านั้น VPC Feature ใดควบคุมระดับ Network Interface แบบ Stateful",
    "Network ACL|AWS WAF|AWS Shield|Security group",
    "3",
    "Security Group ควบคุมระดับ ENI แบบ Stateful; NACL ระดับ Subnet แบบ Stateless และ WAF กรอง HTTP",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "2.4",
    "A web application needs to encrypt objects at rest using managed cryptographic keys and provision a TLS certificate for its public load balancer. Which TWO services fit? (Select TWO.)",
    "เว็บต้องเข้ารหัส Object at Rest ด้วย Managed Keys และจัดหา TLS Certificate ให้ Public Load Balancer สองบริการใด",
    "AWS Secrets Manager|AWS CloudHSM|AWS Shield|AWS KMS|AWS Certificate Manager",
    "3,4",
    "KMS จัดการ Encryption Keys แบบ Managed; ACM จัด TLS Certificates; CloudHSM เน้น Dedicated HSM และ Secrets Manager เก็บ Secrets",
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
    "A threat detection team needs to identify unusual AWS API activity and separately scan EC2 packages for known vulnerabilities. Which TWO services fit? (Select TWO.)",
    "ทีมต้องตรวจจับ AWS API Activity ที่ผิดปกติและสแกน EC2 Packages หา Known Vulnerabilities สองบริการใด",
    "Amazon Detective|Amazon GuardDuty|Amazon Inspector|Amazon Macie|AWS WAF",
    "1,2",
    "GuardDuty วิเคราะห์ Threat Signals; Inspector ตรวจ Software Vulnerabilities; Macie ค้น Sensitive Data ใน S3",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.1",
    "An administrator wants a browser-based command-line environment with AWS CLI available and no local installation. Which service provides it?",
    "Admin ต้องใช้ Command Line ผ่าน Browser ที่มี AWS CLI พร้อมโดยไม่ติดตั้งในเครื่อง บริการใด",
    "AWS CloudFormation|AWS CDK|AWS CloudShell|AWS Management Console",
    "2",
    "CloudShell ให้ Browser-based Shell พร้อม AWS CLI; Console คือ GUI ส่วน CloudFormation/CDK ใช้ Infrastructure as Code",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.1",
    "A company wants identical environments deployed from version-controlled infrastructure templates. Which service creates and manages the stacks?",
    "บริษัทต้องการ Deploy Environments เหมือนกันจาก Infrastructure Templates ที่เก็บ Version บริการใดจัดการ Stacks",
    "AWS Config|AWS CodeBuild|AWS Systems Manager|AWS CloudFormation",
    "3",
    "CloudFormation Provision และจัดการ Stack จาก Template; Config ตรวจ Configuration, CodeBuild ทำ Build และ Systems Manager จัด Operations",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.2",
    "A global streaming provider wants to cache content close to users without deploying an application region in every city. Which infrastructure component is used by CloudFront?",
    "ผู้ให้บริการ Streaming ต้อง Cache Content ใกล้ผู้ใช้โดยไม่ต้องมี Region ทุกเมือง CloudFront ใช้ Infrastructure ใด",
    "Edge location|Availability Zone|AWS Region|AWS Outposts",
    "0",
    "Edge Locations ให้ CloudFront ส่ง Cached Content ใกล้ผู้ใช้ ต่างจาก AZ ที่แยก Infrastructure ภายใน Region",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.2",
    "A company places redundant resources in isolated facilities within the same geographical AWS location. Which infrastructure units provide that isolation?",
    "บริษัทวาง Resource สำรองในสถานที่แยกกันภายในพื้นที่ AWS เดียวกัน Infrastructure Unit ใดแยกความเสี่ยง",
    "AWS Outposts|Availability Zone|AWS Region|Edge location",
    "1",
    "AZ เป็นหนึ่งหรือหลาย Data Centers ที่แยกความเสี่ยงภายใน Region เดียวกัน ส่วน Region เป็นขอบเขตภูมิศาสตร์",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.3",
    "A team needs to run a short function after an object is uploaded to S3 and does not want to manage a continuously running server. Which service fits?",
    "ทีมต้องรัน Function สั้นเมื่อมี Object Upload เข้า S3 โดยไม่ดูแล Server ที่เปิดตลอด ใช้บริการใด",
    "AWS Batch|Amazon EC2|AWS Lambda|AWS Fargate",
    "2",
    "Lambda รัน Function ตาม Event โดยไม่จัดการ Server; Fargate รัน Container, Batch จัด Jobs และ EC2 เป็น VM",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.3",
    "A development organization already uses Kubernetes manifests and wants AWS to operate the Kubernetes control plane. Which service meets this requirement?",
    "องค์กรใช้ Kubernetes Manifests อยู่และต้องการให้ AWS ดูแล Kubernetes Control Plane บริการใด",
    "Amazon ECS|AWS Fargate|AWS Elastic Beanstalk|Amazon EKS",
    "3",
    "EKS คือ Managed Kubernetes; ECS เป็น AWS-native Orchestrator ส่วน Fargate เป็น Compute สำหรับ Container ไม่ใช่ Kubernetes Control Plane",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.3",
    "A container delivery pipeline must store versioned images and then orchestrate the running containers with an AWS-native scheduler. Which TWO services fit? (Select TWO.)",
    "Container Pipeline ต้องเก็บ Image แต่ละ Version และ Orchestrate Containers ด้วย AWS-native Scheduler สองบริการใด",
    "AWS CodeBuild|Amazon EKS|Amazon ECR|Amazon ECS|AWS Fargate",
    "2,3",
    "ECR เป็น Container Registry ส่วน ECS เป็น AWS-native Container Orchestration; Fargate ให้ Compute ไม่ได้จัด Image Registry",
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
    "A workload needs high memory capacity for an in-memory database. Which EC2 instance family is optimized for this requirement?",
    "Workload ต้องใช้ Memory สูงสำหรับ In-memory Database EC2 Family ใดเหมาะ",
    "I family (storage optimized)|R family (memory optimized)|M family (general purpose)|T family (burstable)",
    "1",
    "R Family เน้น Memory สูง; M สมดุลทั่วไป T ใช้ CPU Credits สำหรับ Burst และ I เน้น Local Storage I/O",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.4",
    "An application stores JSON-like documents and must remain compatible with existing MongoDB application APIs. Which managed database fits?",
    "แอปเก็บ JSON-like Documents และต้องเข้ากันได้กับ MongoDB APIs เดิม Managed Database ใด",
    "Amazon Neptune|Amazon Aurora|Amazon DocumentDB|Amazon DynamoDB",
    "2",
    "DocumentDB รองรับ MongoDB-compatible APIs สำหรับ Document Workloads; DynamoDB มี API ของตนเอง Neptune เป็น Graph และ Aurora เป็น Relational",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.4",
    "A company needs to traverse connections between individuals and their financial transactions to identify groups of related entities. Which database model fits?",
    "บริษัทต้องไล่ความสัมพันธ์ระหว่างบุคคลและธุรกรรมเพื่อหากลุ่ม Entities ที่เกี่ยวข้อง Database ใด",
    "Amazon DocumentDB|Amazon RDS|Amazon Redshift|Amazon Neptune",
    "3",
    "Neptune เป็น Graph Database สำหรับ Traversal ความสัมพันธ์หลายทอด ไม่ใช่ Document หรือ Analytical Warehouse",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.4",
    "A traditional application requires a managed MySQL database with automated backups, but does not require an AWS-specific database engine. Which service provides managed MySQL?",
    "แอปเดิมต้องการ Managed MySQL พร้อม Automated Backup ไม่จำเป็นต้องใช้ Engine เฉพาะของ AWS ใช้บริการใด",
    "Amazon RDS|Amazon DynamoDB|Amazon ElastiCache|Amazon Redshift",
    "0",
    "RDS ให้ Managed Relational Database ที่รองรับ MySQL Engine; DynamoDB เป็น NoSQL, ElastiCache เป็น Cache และ Redshift เป็น Warehouse",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.5",
    "A company requires a dedicated network connection from its data center to AWS rather than an encrypted tunnel over the internet. Which service fits?",
    "บริษัทต้องการ Dedicated Network Connection จาก Data Center ไป AWS แทน Encrypted Tunnel ผ่าน Internet ใช้บริการใด",
    "AWS Transit Gateway|AWS Direct Connect|AWS Site-to-Site VPN|AWS Client VPN",
    "1",
    "Direct Connect ให้ Dedicated Connectivity; Site-to-Site VPN เป็น Encrypted Tunnel, Client VPN เชื่อมผู้ใช้ และ Transit Gateway เป็น Routing Hub",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.5",
    "A service provider exposes a private application to another VPC without giving consumers broad network access to the provider VPC. Which service is intended?",
    "Service Provider เปิด Private Application ให้ VPC อื่นโดยไม่ให้ Consumer เข้าถึง Network ผู้ให้บริการทั้ง VPC ใช้บริการใด",
    "AWS Transit Gateway|AWS Direct Connect|AWS PrivateLink|VPC peering",
    "2",
    "PrivateLink เปิด Private Connectivity เฉพาะ Service ผ่าน Endpoint; Peering/TGW เชื่อม Network และ Routing ในวงกว้างกว่า",
    [
      "",
      "",
      "",
      "เชื่อมสอง VPC โดยตรงผ่าน Private Routing"
    ]
  ],
  [
    "3.5",
    "A web application requires DNS resolution for its domain and caching of static files near users. Which TWO services address the respective functions? (Select TWO.)",
    "เว็บต้องการ DNS สำหรับ Domain และ Cache Static Files ใกล้ผู้ใช้ สองบริการใด",
    "AWS Global Accelerator|Amazon API Gateway|Elastic Load Balancing|Amazon Route 53|Amazon CloudFront",
    "3,4",
    "Route 53 จัด DNS; CloudFront เป็น CDN ที่ Cache Content ส่วน Global Accelerator ปรับ Network Path โดยไม่ Cache",
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
    "An application needs a disk volume that retains data independently of its EC2 instance and supports block-level access. Which storage service fits?",
    "แอปต้องการ Disk Volume ที่เก็บข้อมูลแยกจาก EC2 และเข้าถึงแบบ Block ใช้ Storage ใด",
    "Amazon EBS|Instance store|Amazon EFS|Amazon S3",
    "0",
    "EBS เป็น Persistent Block Volume; Instance Store เป็น Temporary Local Disk, EFS เป็น Shared File System และ S3 เป็น Object Storage",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.6",
    "A branch office must continue mounting its familiar local file share while the data is backed by cloud object storage. Which service provides the hybrid interface?",
    "สำนักงานสาขาต้อง Mount Local File Share แบบเดิมต่อไปโดยมี Cloud Object Storage รองรับ บริการใดให้ Hybrid Interface",
    "AWS Backup|AWS Storage Gateway|AWS DataSync|Amazon EFS",
    "1",
    "Storage Gateway ให้ Hybrid File/Volume/Tape Interface; DataSync เน้นย้ายข้อมูลและ Backup เน้นนโยบายสำรองข้อมูล",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.6",
    "A company wants to move older S3 objects automatically to lower-cost storage classes according to their age. Which feature is designed for this policy?",
    "บริษัทต้องการย้าย S3 Objects เก่าไป Storage Class ถูกลงอัตโนมัติตามอายุ ใช้ Feature ใด",
    "AWS DataSync|AWS Backup|S3 Lifecycle rules|Amazon S3 Intelligent-Tiering",
    "2",
    "Lifecycle Rules กำหนด Transition/Expiration ตามอายุหรือเงื่อนไข; Intelligent-Tiering ปรับ Access Tiers ตามรูปแบบการเข้าถึง",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.7",
    "A voice application needs to turn text responses into spoken audio and translate written messages between languages. Which TWO AI services provide these features? (Select TWO.)",
    "แอปเสียงต้องแปลงคำตอบข้อความเป็นเสียงพูดและแปลข้อความระหว่างภาษา สองบริการใด",
    "Amazon Polly|Amazon Translate|Amazon Transcribe|Amazon Lex|Amazon Comprehend",
    "0,1",
    "Polly ทำ Text-to-Speech ส่วน Translate แปลภาษา; Transcribe ทำ Speech-to-Text, Lex ทำ Chatbot และ Comprehend วิเคราะห์ภาษา",
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
    "A data engineering team needs to discover dataset schemas and transform raw files before analysis. Which service provides a data catalog and managed ETL capabilities?",
    "ทีม Data Engineering ต้องสำรวจ Schema และแปลง Raw Files ก่อนวิเคราะห์ บริการใดมี Data Catalog และ Managed ETL",
    "AWS Glue|Amazon Athena|Amazon Redshift|Amazon EMR",
    "0",
    "Glue ให้ Data Catalog และ Managed ETL; Athena Query SQL, Redshift เป็น Data Warehouse, EMR รัน Big Data Frameworks",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.7",
    "An analyst wants business users to explore dashboards and visual reports rather than build search indexes or manage a data warehouse. Which service is intended for BI?",
    "Analyst ต้องให้ผู้ใช้ธุรกิจเปิด Dashboard และ Visual Reports ไม่ต้องสร้าง Search Index หรือดูแล Warehouse บริการใดสำหรับ BI",
    "Amazon Redshift|Amazon Quick|Amazon OpenSearch Service|Amazon Athena",
    "1",
    "Amazon Quick (Quick Sight) ให้ BI Dashboards และ Visual Analytics; OpenSearch เน้น Search, Athena ใช้ SQL และ Redshift เป็น Warehouse",
    [
      "",
      "บริการ Business Intelligence และ Visual Analytics",
      "",
      ""
    ]
  ],
  [
    "3.8",
    "A delivery application must route events from several producers to different targets based on event content. Which service provides an event bus and matching rules?",
    "แอปส่งสินค้าต้อง Route Events จากหลาย Producer ไป Targets ตามเนื้อหา บริการใดมี Event Bus และ Matching Rules",
    "Amazon SQS|AWS Step Functions|Amazon EventBridge|Amazon SNS",
    "2",
    "EventBridge ใช้ Event Bus และ Rules เพื่อ Route Events; SNS กระจาย Notification, SQS Queue และ Step Functions จัด Workflow",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "3.8",
    "A remote employee needs a complete managed virtual desktop, whereas another needs only one streamed desktop application. Which TWO services meet the respective requirements? (Select TWO.)",
    "พนักงาน Remote ต้องการ Virtual Desktop ทั้งเครื่อง ส่วนอีกคนต้องการ Stream เพียง Desktop App เดียว สองบริการใด",
    "AWS Client VPN|Amazon Connect|Amazon WorkSpaces|Amazon AppStream 2.0|Amazon WorkSpaces Secure Browser",
    "2,3",
    "WorkSpaces ให้ Virtual Desktop ส่วน AppStream 2.0 ให้ Application Streaming; Secure Browser ใช้ Web Browsing และ Client VPN เชื่อม Network",
    [
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.1",
    "A new EC2 workload has uncertain usage and must not enter a long-term spending commitment or accept interruption from spare capacity pricing. Which purchase model fits?",
    "EC2 Workload ใหม่ใช้งานไม่แน่นอน ไม่ต้องการ Commitment ระยะยาวหรือ Spot Interruption ใช้ราคาแบบใด",
    "On-Demand Instances|Spot Instances|Reserved Instances|Savings Plans",
    "0",
    "On-Demand จ่ายตามการใช้งานโดยไม่ Commit และไม่ใช่ Spare Capacity ที่ถูกเรียกคืนแบบ Spot",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.1",
    "A company needs physical host visibility to manage licenses tied to processor sockets and cores. Which EC2 option provides host-level control?",
    "บริษัทต้องเห็น Physical Host เพื่อจัดการ License ผูก Socket และ Core ตัวเลือก EC2 ใดให้ Host-level Control",
    "Reserved Instances|Dedicated Hosts|Dedicated Instances|On-Demand Capacity Reservations",
    "1",
    "Dedicated Hosts ให้ Physical Server และ Host-level Visibility/Placement สำหรับ Licensing; Dedicated Instances แยก Hardware แต่ไม่มี Control ระดับ Host แบบเดียวกัน",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.1",
    "A company can commit to a consistent hourly compute spend for three years and wants discounts that can apply across eligible EC2 instance families. Which model is most flexible?",
    "บริษัท Commit ค่า Compute ต่อชั่วโมงสามปีและต้องการส่วนลดข้าม EC2 Families ที่รองรับ Pricing Model ใดยืดหยุ่นที่สุด",
    "On-Demand Capacity Reservations|Dedicated Hosts|Savings Plans|Reserved Instances",
    "2",
    "Compute Savings Plans ให้ส่วนลดตาม Spend Commitment และรองรับการเปลี่ยน Instance Family ที่เข้าเงื่อนไข; Capacity Reservations จอง Capacity ไม่ใช่ส่วนลดเอง",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.2",
    "Before launching an application, a team needs a cost estimate based on planned service quantities. After launch it wants to analyze actual spend by service. Which TWO tools are appropriate? (Select TWO.)",
    "ก่อน Launch ต้องประมาณราคาจากปริมาณบริการที่วางแผน หลัง Launch ต้องวิเคราะห์ค่าใช้จ่ายจริงตาม Service สองเครื่องมือใด",
    "AWS Cost Explorer|AWS Budgets|AWS Cost Anomaly Detection|AWS Trusted Advisor|AWS Pricing Calculator",
    "4,0",
    "Pricing Calculator ประเมินราคาก่อนใช้งาน; Cost Explorer วิเคราะห์ Actual Cost/Usage และ Forecast ส่วน Budgets แจ้ง Threshold",
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
    "A business wants one bill for its AWS accounts and potential sharing of eligible usage discounts across member accounts. Which feature enables this?",
    "ธุรกิจต้องการบิลรวม AWS Accounts และแชร์ส่วนลดที่เข้าเงื่อนไขระหว่าง Member Accounts ใช้ Feature ใด",
    "Consolidated billing|Cost allocation tags|AWS Cost Explorer|AWS Budgets",
    "0",
    "Consolidated Billing รวมค่าใช้จ่ายและอาจแชร์ Eligible Discounts ตามการตั้งค่า; Cost Tags แบ่งต้นทุนตาม Resource Labels",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.2",
    "A cost administrator wants to be notified before forecasted spending exceeds a defined limit. Which service supports this threshold-based action?",
    "Cost Admin ต้องได้รับแจ้งเตือนก่อนค่าใช้จ่ายที่คาดการณ์จะเกิน Limit ที่กำหนด บริการใด",
    "AWS Pricing Calculator|AWS Budgets|AWS Cost Anomaly Detection|AWS Cost Explorer",
    "1",
    "AWS Budgets แจ้งเตือน Actual/Forecasted Costs ตาม Budget Threshold; Anomaly Detection เน้นความผิดปกติจากรูปแบบเดิม",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.3",
    "An AWS customer needs to view scheduled maintenance events that affect specific resources in its own account. Which service provides personalized event information?",
    "ลูกค้า AWS ต้องดู Scheduled Maintenance ที่กระทบ Resource เฉพาะใน Account ตนเอง บริการใดให้ข้อมูลเฉพาะบัญชี",
    "Amazon CloudWatch|AWS Config|AWS Health Dashboard|AWS Trusted Advisor",
    "2",
    "Health Dashboard แสดง AWS Events และผลกระทบต่อ Resource ของ Account; CloudWatch ติดตาม Workload Metrics และ Trusted Advisor ตรวจ Best Practices",
    [
      "",
      "",
      "",
      ""
    ]
  ],
  [
    "4.3",
    "An engineer wants recommendations across cost, security, performance and service quotas based on AWS best-practice checks. Which service provides these recommendations?",
    "Engineer ต้องการคำแนะนำด้าน Cost, Security, Performance และ Service Quotas จาก AWS Best-practice Checks ใช้บริการใด",
    "AWS Compute Optimizer|AWS Well-Architected Tool|AWS Health Dashboard|AWS Trusted Advisor",
    "3",
    "Trusted Advisor ตรวจ Best-practice Checks หลายด้าน; Compute Optimizer เน้น Resource Recommendations จาก Utilization และ WA Tool ใช้ Review Workload",
    [
      "",
      "",
      "",
      ""
    ]
  ]
];
  const mixed = rows.slice();
  let seed = (20261117 + 15 * 9973) >>> 0;
  for (let i = mixed.length - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = Math.floor((seed / 4294967296) * (i + 1));
    [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
  }
  window.buildClfLocalExamSet(15, mixed);
})();
