(() => {
  const rows=window.LOCAL_SET_09_ROWS=window.LOCAL_SET_09_ROWS||[];
  rows.push(...[
  [
    "2.1",
    "A company encrypts data in Amazon S3 and must decide which employees can download each object. Who is responsible for authorizing access?",
    "บริษัทเข้ารหัสข้อมูลใน Amazon S3 และต้องกำหนดว่าพนักงานคนใด Download Objects แต่ละตัวได้ ใครรับผิดชอบการอนุญาต",
    "The customer|AWS|AWS-owned physical servers|Hypervisor",
    "0",
    "ลูกค้าเป็นผู้กำหนด IAM และ Bucket Access Policies สำหรับข้อมูลตนเอง AWS ดูแล Infrastructure ของ S3"
  ],
  [
    "2.1",
    "When using Amazon RDS, which work is typically handled by AWS rather than by a customer running the database on EC2?",
    "เมื่อใช้ Amazon RDS งานใด AWS ดูแลให้แทนกรณีลูกค้า Install Database บน EC2",
    "Guest operating system|Security group|AWS IAM|Cost allocation tags",
    "0",
    "RDS เป็น Managed Database ที่ AWS ดูแล OS และ Infrastructure ส่วนลูกค้ากำหนด Network Access และ Database Permissions"
  ],
  [
    "2.1",
    "An EC2-hosted database was compromised because its guest OS security patches were not installed. Under the shared responsibility model, who owned that patching task?",
    "Database ที่ติดตั้งบน EC2 ถูกเจาะเพราะไม่ได้ลง Guest OS Security Patches ตาม Shared Responsibility ใครรับผิดชอบการ Patch นี้",
    "AWS|The customer|AWS Artifact|AWS Support Center",
    "1",
    "ลูกค้าดูแล Guest OS และ Installed Software บน EC2 ส่วน AWS ดูแล Hardware และ Virtualization"
  ],
  [
    "2.1",
    "A company uses Lambda functions. Which responsibility is still directly held by the customer?",
    "บริษัทใช้ AWS Lambda Functions หน้าที่ใดยังเป็นความรับผิดชอบของลูกค้าโดยตรง",
    "Hypervisor|AWS-owned physical servers|AWS IAM|AWS",
    "2",
    "ลูกค้ากำหนด Execution Role Permissions ผ่าน IAM AWS ดูแล Runtime Infrastructure ไม่ใช่สิทธิ์ของ Application"
  ],
  [
    "2.1",
    "For workloads running on EC2, which TWO security tasks are the customer's responsibility? (Select TWO.)",
    "สำหรับ EC2 Workloads งาน Security สองอย่างใดเป็นหน้าที่ของลูกค้า",
    "Guest operating system|Hypervisor|Security group|AWS-owned physical servers|AWS",
    "0,2",
    "ลูกค้า Patch Guest OS และกำหนด Security Group Rules ส่วน AWS ดูแล Hypervisor และ Physical Servers"
  ],
  [
    "2.2",
    "A team must determine whether an S3 bucket has drifted from approved encryption settings over the past month. Which service evaluates resource configurations?",
    "ทีมต้องตรวจว่า S3 Bucket ตั้งค่า Encryption หลุดจาก Approved Settings ในเดือนที่ผ่านมาไหม บริการใดใช้ประเมิน Configuration",
    "Amazon CloudWatch|AWS Config|AWS CloudTrail|Amazon GuardDuty",
    "1",
    "AWS Config ติดตาม Configuration Changes และประเมิน Rules ส่วน CloudTrail บันทึก Who Called API ไม่ได้ Evaluate Compliance เป็นหลัก"
  ],
  [
    "2.2",
    "An engineer wants an alarm when application error counts exceed a threshold. Which monitoring service is designed for metrics and alarms?",
    "Engineer ต้องการ Alarm เมื่อ Application Error Count สูงกว่า Threshold บริการใดออกแบบมาสำหรับ Metrics และ Alarms",
    "AWS CloudTrail|AWS Config|Amazon CloudWatch|AWS Security Hub",
    "2",
    "CloudWatch เก็บ Metrics Logs และ Alarms ส่วน CloudTrail บันทึก API Activity และ Config ประเมิน Configuration Rules"
  ],
  [
    "2.2",
    "A security analyst receives dozens of findings from GuardDuty and Inspector and needs a consolidated view of their security posture. Which service fits?",
    "Security Analyst ได้ Findings จำนวนมากจาก GuardDuty และ Inspector และต้องการมุมมองรวม Security Posture ควรใช้บริการใด",
    "Amazon Detective|AWS Security Hub|Amazon Macie|AWS CloudTrail",
    "1",
    "Security Hub รวม Security Findings จากหลาย Services ส่วน Detective ช่วย Investigate Relationships ของเหตุการณ์ไม่ใช่ Aggregation Dashboard เป็นหลัก"
  ],
  [
    "2.2",
    "A company wants AWS-managed encryption keys and automatic renewal support for public TLS certificates. Which TWO AWS services match those separate requirements? (Select TWO.)",
    "บริษัทต้องการจัดการ Encryption Keys และออก/ต่ออายุ Public TLS Certificates ที่รองรับจาก AWS สองบริการใดตรงคนละหน้าที่",
    "AWS KMS|AWS Secrets Manager|AWS Certificate Manager|AWS CloudTrail|AWS Artifact",
    "0,2",
    "KMS จัดการ Cryptographic Keys ส่วน ACM จัดการ TLS Certificates สำหรับ Endpoints ที่รองรับ โดยไม่ใช้ Secrets Manager แทนการออก Certificate"
  ],
  [
    "2.2",
    "A company needs to inspect running EC2 workloads for known software vulnerabilities rather than detect unusual account activity. Which service fits?",
    "บริษัทต้องตรวจ EC2 Workloads เพื่อหา Known Software Vulnerabilities ไม่ใช่ตรวจ Account Activities ผิดปกติ บริการใดตรง",
    "Amazon GuardDuty|Amazon Inspector|Amazon Macie|Amazon Detective",
    "1",
    "Inspector ประเมิน Software Vulnerabilities ส่วน GuardDuty เป็น Threat Detection และ Detective ใช้สืบสวน Findings"
  ],
  [
    "2.2",
    "A privacy officer wants to locate files containing credit card numbers in S3. Which service specifically performs this data discovery?",
    "Privacy Officer ต้องค้นหาไฟล์ใน S3 ที่มีหมายเลข Credit Card บริการใดทำ Sensitive Data Discovery",
    "AWS Config|Amazon GuardDuty|Amazon Macie|AWS Artifact",
    "2",
    "Macie ค้น Sensitive Data เช่น PII และ Card Numbers ใน S3 ส่วน GuardDuty ตรวจภัยคุกคามการใช้งาน"
  ],
  [
    "2.3",
    "A mobile game needs to register millions of players and issue application login tokens, not grant employees access to AWS accounts. Which service fits?",
    "เกมมือถือจะสมัคร Players จำนวนมากและออก Application Login Tokens ไม่ได้ให้พนักงานเข้า AWS Accounts ควรใช้บริการใด",
    "IAM Identity Center|Amazon Cognito|AWS IAM|AWS Organizations",
    "1",
    "Cognito ดูแล End-user Sign-up Sign-in สำหรับ Apps ส่วน Identity Center เน้น Workforce SSO และ Accounts"
  ],
  [
    "2.3",
    "A company wants a contractor from another AWS account to access a limited S3 resource without sharing permanent access keys. Which service provides the appropriate role-based access?",
    "บริษัทต้องให้ Contractor จากอีก AWS Account เข้าถึง S3 บางส่วนโดยไม่แชร์ Permanent Keys บริการใดใช้ Role-based Access",
    "AWS Organizations|AWS IAM|IAM Identity Center|AWS CloudTrail",
    "1",
    "IAM Roles รองรับ Cross-account Access ผ่าน Temporary Credentials ส่วน Organizations ใช้ Governance Accounts"
  ],
  [
    "2.3",
    "A security engineer asks which AWS resources can be accessed by external principals through their policies. Which service analyzes unintended external access?",
    "Security Engineer ต้องรู้ว่าทรัพยากร AWS ใดอาจถูก External Principals เข้าถึงจาก Policies บริการใดวิเคราะห์ External Access",
    "AWS IAM|IAM Access Analyzer|AWS Config|AWS Security Hub",
    "1",
    "IAM Access Analyzer วิเคราะห์ Resource-based Policies และ External Access ส่วน IAM เป็นระบบควบคุม Identities/Permissions"
  ],
  [
    "2.3",
    "An administrator needs to grant a developer read-only access to one CloudWatch log group without allowing deletion. Which service manages the scoped permissions?",
    "Administrator ต้องให้ Developer อ่าน CloudWatch Log Group เดียวโดยไม่ให้ Delete ได้ ควรใช้บริการใดจัดการ Scoped Permissions",
    "AWS IAM|AWS Organizations|AWS Control Tower|IAM Identity Center",
    "0",
    "AWS IAM Policies ระบุ Actions และ Resource Scope ตาม Least Privilege ส่วน Organizations เน้น Governance ระหว่าง Accounts"
  ],
  [
    "2.3",
    "A security review wants workforce single sign-on and a way to detect public or cross-account resource exposure. Which TWO services match these needs? (Select TWO.)",
    "ทีม Security ต้องการ Workforce Single Sign-on และค้นหา Resources ที่เปิด Public/Cross-account Access สองบริการใดตรง",
    "IAM Identity Center|AWS IAM|IAM Access Analyzer|AWS Organizations|Amazon Cognito",
    "0,2",
    "Identity Center จัดการ Workforce SSO และ IAM Access Analyzer ค้น External Access จาก Policies โดยคนละหน้าที่กัน"
  ],
  [
    "2.4",
    "A public-facing service faces a volumetric DDoS attack, not an application-layer SQL injection request. Which AWS service specializes in DDoS protection?",
    "Public Service ถูกโจมตี Volumetric DDoS ไม่ใช่ SQL Injection ระดับ HTTP บริการใดเน้นป้องกัน DDoS",
    "AWS Shield|AWS WAF|AWS Firewall Manager|Amazon GuardDuty",
    "0",
    "Shield ช่วยป้องกัน DDoS ส่วน WAF กรอง Web Requests ตาม Rules และ Firewall Manager จัดการ Policies กลาง"
  ],
  [
    "2.4",
    "A security team wants to apply standard web filtering policies across dozens of AWS accounts. Which governance service can centrally manage them?",
    "ทีม Security ต้อง Apply Web Filtering Policies มาตรฐานข้าม AWS Accounts หลายสิบบัญชี บริการใดจัดการส่วนกลาง",
    "AWS WAF|AWS Firewall Manager|AWS Shield|AWS Config",
    "1",
    "Firewall Manager ควบคุม Security Policies ข้าม Accounts ส่วน WAF เป็น Engine สำหรับกรอง Requests"
  ],
  [
    "2.4",
    "A business needs to review recommended security best-practice checks such as overly permissive security group rules. Which advisor service can help?",
    "บริษัทต้องการดู Recommended Security Best-practice Checks เช่น Security Group เปิด Port กว้างเกินไป ใช้บริการใด",
    "AWS Artifact|AWS Trusted Advisor|AWS Marketplace|AWS Health Dashboard",
    "1",
    "Trusted Advisor มี Best-practice Checks ด้าน Security และหมวดอื่น ส่วน Artifact เก็บรายงาน Compliance"
  ]
]);
})();
