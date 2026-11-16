(() => {
  const rows = window.LOCAL_SET_05_ROWS = window.LOCAL_SET_05_ROWS || [];
  rows.push(...[
  [
    "2.1",
    "A security assessment of an EC2-hosted application finds SSH open to the world. Who must modify the security-group rules for that application?",
    "การตรวจ Security พบ EC2 เปิด SSH ให้คนทั่วโลกเข้าได้ ใครต้องแก้ Security Group Rules ของ Application นี้",
    "AWS|The customer|AWS Support|The third-party auditor",
    "1",
    "ลูกค้าตั้ง Security Group Rules ของ EC2 Workload เอง แม้ AWS ดูแล Physical Servers และเครือข่ายเบื้องหลัง"
  ],
  [
    "2.1",
    "A business moves a custom function to AWS Lambda. Who maintains the physical servers that run its code?",
    "บริษัทย้าย Custom Function ไป AWS Lambda ใครดูแล Physical Servers ที่รัน Code",
    "The customer|AWS|AWS Support|The internet service provider",
    "1",
    "AWS ดูแล Hardware และ Infrastructure ของ Lambda ส่วนลูกค้าดูแล Code, Data และ Access Permissions"
  ],
  [
    "2.1",
    "A company operates a Linux API on EC2. Which TWO controls must it maintain itself, rather than expecting AWS to maintain them? (Select TWO.)",
    "บริษัทเปิด Linux API บน EC2 ข้อใดสอง Controls ที่ลูกค้าต้องดูแลเอง ไม่ใช่ AWS ดูแลให้",
    "Configuring IAM permissions|Securing AWS data centers|Guest operating system|Hypervisor|Maintaining AWS physical servers",
    "0,2",
    "ลูกค้ากำหนด IAM Permissions และ Patch Guest OS ของ EC2 ส่วน Hypervisor กับ Data Center เป็นหน้าที่ AWS"
  ],
  [
    "2.1",
    "A managed cloud database stores patients' records. Which party defines who may read those application records?",
    "Managed Database เก็บข้อมูลผู้ป่วย ใครเป็นผู้กำหนดว่าบุคคลใดอ่าน Application Records ได้",
    "AWS Support|AWS|The customer|The third-party auditor",
    "2",
    "ลูกค้ากำหนด Data Access Permissions ตามความอ่อนไหวของข้อมูล ส่วน AWS ดูแล Infrastructure ของ Managed Database"
  ],
  [
    "2.1",
    "A team stores confidential data in an AWS-managed service. Which activity regarding data protection remains the customer's responsibility?",
    "ทีมเก็บ Confidential Data ใน AWS Managed Service กิจกรรมใดด้านการป้องกันข้อมูลยังเป็นหน้าที่ของลูกค้า",
    "Managing customer-data encryption settings|Securing AWS data centers|Maintaining AWS physical servers|Hypervisor",
    "0",
    "ลูกค้ายังกำหนด Encryption Settings ที่เกี่ยวข้องกับข้อมูลของตน แม้ AWS ดูแล Physical Infrastructure, Data Centers และ Hypervisor"
  ],
  [
    "2.2",
    "A financial auditor needs a copy of AWS's third-party compliance certification reports, not a list of detected security threats. Which service should the auditor use?",
    "Auditor การเงินต้องการเอกสารใบรับรอง Compliance ของ AWS จาก Third Party ไม่ได้ต้องการรายการ Threats ใช้บริการใด",
    "AWS Config|AWS Artifact|AWS Security Hub|AWS Trusted Advisor",
    "1",
    "AWS Artifact ให้เข้าถึง AWS Compliance Reports ต่างจาก Security Hub ที่รวม Security Findings"
  ],
  [
    "2.2",
    "Investigators need to establish the principal that changed an S3 bucket policy yesterday. Which service provides the API event record?",
    "Investigator ต้องทราบว่า IAM Principal ใดแก้ S3 Bucket Policy เมื่อวาน ใช้ Service ใดดู API Event",
    "Amazon CloudWatch|AWS Config|AWS CloudTrail|AWS Security Hub",
    "2",
    "CloudTrail บันทึก API Event และ Identity ที่เรียก; Config เก็บ Configuration State/History แต่ไม่ใช่ Event Audit Trail หลัก"
  ],
  [
    "2.2",
    "Security officers want continuous evaluation of approved encryption settings and a unified place to view security findings from other detectors. Which TWO services fit? (Select TWO.)",
    "ฝ่าย Security ต้องประเมิน Encryption Configuration ตาม Policy อย่างต่อเนื่อง และต้องมีที่รวม Security Findings จากบริการตรวจจับอื่น ข้อใดสอง Services ตรงงาน",
    "AWS Config|AWS CloudTrail|AWS Security Hub|AWS Artifact|Amazon CloudWatch",
    "0,2",
    "AWS Config ตรวจ Configuration Compliance ส่วน Security Hub รวบรวม Findings จาก Security Sources; CloudTrail บันทึก API Calls"
  ],
  [
    "2.2",
    "A compliance team needs an AWS account-wide review of workload architecture against the six design pillars. Which tool is appropriate?",
    "ทีม Compliance ต้อง Review Workload Architecture เทียบ Six Design Pillars ของ AWS ใช้ Tool ใด",
    "AWS Well-Architected Tool|AWS Trusted Advisor|AWS Config|AWS Artifact",
    "0",
    "Well-Architected Tool ประเมิน Workload ตามหก Pillars ส่วน Trusted Advisor ให้คำแนะนำจาก Automated Checks"
  ],
  [
    "2.2",
    "A company needs centralized setup of a governed landing zone for many AWS accounts, including ready-made guardrails. Which AWS service leads the setup?",
    "บริษัทต้องการตั้ง Landing Zone สำหรับหลาย AWS Accounts พร้อม Guardrails ที่มีให้จากส่วนกลาง ใช้บริการใดเป็นหลัก",
    "AWS Organizations|AWS Control Tower|AWS Config|AWS Security Hub",
    "1",
    "Control Tower ช่วย Deploy Landing Zone และ Guardrails โดยใช้ Organizations เป็นโครงสร้างบัญชี"
  ],
  [
    "2.3",
    "The IT department wants employees to sign into a portal backed by the corporate identity provider and receive access to different AWS accounts. Which service is the intended choice?",
    "ฝ่าย IT ให้พนักงาน Login Portal ที่เชื่อม Corporate Identity Provider และรับสิทธิ์ AWS Accounts ต่าง ๆ ควรใช้บริการใด",
    "Amazon Cognito|IAM Identity Center|AWS Organizations|AWS IAM",
    "1",
    "IAM Identity Center ใช้ Workforce Federation/SSO และ Permission Sets ข้าม AWS Accounts; Cognito สำหรับผู้ใช้ Application"
  ],
  [
    "2.3",
    "A new game needs sign-in for millions of players with email or social identity providers. Which AWS identity service is purpose-built for this audience?",
    "เกมใหม่ต้องมี Sign-in สำหรับผู้เล่นหลายล้านคนด้วย Email หรือ Social Identity Providers บริการใดเหมาะกับผู้ใช้กลุ่มนี้",
    "AWS IAM|AWS Organizations|Amazon Cognito|IAM Identity Center",
    "2",
    "Amazon Cognito จัดการ Customer Identities ของ Web/Mobile Apps ไม่ใช่ Workforce SSO เข้า AWS Accounts"
  ],
  [
    "2.3",
    "An application must store a rotating database password and separately control encryption keys for sensitive records. Which TWO services match those tasks? (Select TWO.)",
    "Application ต้องเก็บและ Rotate Database Password และต้องควบคุม Encryption Keys สำหรับ Sensitive Records แยกจากกัน ข้อใดสอง Services ตรงงาน",
    "AWS Secrets Manager|IAM Access Analyzer|AWS KMS|AWS Certificate Manager|AWS IAM",
    "0,2",
    "Secrets Manager เก็บและหมุนเวียน Credentials ส่วน KMS จัดการ Cryptographic Keys; ACM จัดการ TLS Certificates"
  ],
  [
    "2.3",
    "A cross-account automation script should assume permissions temporarily rather than use permanent credentials from a shared user. Which AWS service defines that role and its trust policy?",
    "Automation Script ต้อง Assume Permissions ข้าม Account ชั่วคราวแทนใช้ Credentials ถาวรจาก Shared User บริการใดกำหนด Role และ Trust Policy",
    "IAM Identity Center|AWS IAM|AWS Secrets Manager|IAM Access Analyzer",
    "1",
    "AWS IAM ใช้สร้าง IAM Role และ Trust Policy สำหรับ AssumeRole/Temporary Credentials; Identity Center เน้น Workforce Sign-in"
  ],
  [
    "2.3",
    "Before publishing an S3 repository, the team wants to check whether its resource policy permits access from an unintended external principal. Which service is best?",
    "ก่อนเผยแพร่ S3 Repository ทีมต้องตรวจว่า Resource Policy เปิดให้ External Principal ที่ไม่ต้องการหรือไม่ ควรใช้ Service ใด",
    "Amazon Macie|AWS Config|IAM Access Analyzer|Amazon Inspector",
    "2",
    "IAM Access Analyzer วิเคราะห์ Resource-based Policies เพื่อค้นหา External Access; Macie ค้นหา Sensitive Data ใน S3"
  ],
  [
    "2.4",
    "An online booking site receives HTTP requests matching cross-site scripting patterns. Which AWS product should inspect and block these requests?",
    "เว็บจองตั๋วได้รับ HTTP Requests ที่มีรูปแบบ Cross-site Scripting ใช้บริการใดกรองและ Block Requests",
    "AWS Shield|AWS Firewall Manager|AWS WAF|Amazon GuardDuty",
    "2",
    "AWS WAF ใช้ Rules กรอง HTTP(S) Requests เช่น XSS/SQLi; Shield ป้องกัน DDoS"
  ],
  [
    "2.4",
    "A team sees indicators of possible compromised access keys and wants a service to detect this threat automatically. Which is the closest fit?",
    "ทีมพบสัญญาณ Access Keys อาจถูกขโมย ต้องการ Service ตรวจจับ Threat อัตโนมัติ ใช้ตัวใด",
    "Amazon Detective|Amazon GuardDuty|Amazon Inspector|AWS Security Hub",
    "1",
    "GuardDuty ตรวจ Threat/Suspicious Behavior เช่น Credential Misuse; Detective เน้น Investigate Findings"
  ],
  [
    "2.4",
    "A security organization must ensure an approved WAF web ACL policy is consistently applied across a fleet of AWS accounts. Which service provides this centralized control?",
    "องค์กร Security ต้องใช้ Web ACL Policy มาตรฐานกับ AWS Accounts จำนวนมากจากศูนย์กลาง ควรเลือก Service ใด",
    "AWS WAF|AWS Firewall Manager|AWS Organizations|AWS Security Hub",
    "1",
    "Firewall Manager จัดการ Security Policies แบบ Multi-account; WAF เป็นตัวกรอง HTTP Requests ที่ Resource"
  ],
  [
    "2.4",
    "A malicious-activity alert exists already. The security analyst now wants a graph and timeline connecting involved roles, IPs, and instances. Which service is designed for this investigation?",
    "มี Malicious Activity Alert อยู่แล้ว Security Analyst ต้องการ Graph และ Timeline เชื่อม IAM Roles, IPs และ Instances บริการใดตรงขั้นตอน Investigation",
    "Amazon GuardDuty|AWS Security Hub|Amazon Detective|Amazon Inspector",
    "2",
    "Amazon Detective ช่วยสืบสวนความสัมพันธ์ของ Security Findings หลังตรวจพบเหตุ; GuardDuty Detect Threats และ Inspector ตรวจ CVE"
  ]
]);
})();
