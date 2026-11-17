(() => {
  const rows=window.LOCAL_SET_10_ROWS=window.LOCAL_SET_10_ROWS||[];
  rows.push(...[
  [
    "2.1",
    "A healthcare provider stores encrypted patient records in Amazon S3. Which task remains under the provider's control?",
    "โรงพยาบาลเก็บ Patient Records ที่เข้ารหัสใน S3 หน้าที่ใดยังคงอยู่ภายใต้การควบคุมของโรงพยาบาล",
    "The customer|AWS-owned physical servers|Hypervisor|AWS",
    "0",
    "ลูกค้ากำหนด Data Classification และ Permissions ของข้อมูล ส่วน AWS ดูแล Storage Infrastructure"
  ],
  [
    "2.1",
    "A company operates Windows servers on Amazon EC2. Who must install updates for the Windows guest operating systems?",
    "บริษัทใช้ Windows Servers บน Amazon EC2 ใครต้อง Install Updates ให้ Windows Guest Operating Systems",
    "AWS|The customer|AWS Support Center|AWS Config",
    "1",
    "EC2 ให้ลูกค้าดูแล Guest OS และ Updates เอง AWS จัดการ Physical Hardware และ Hypervisor"
  ],
  [
    "2.1",
    "An organization uses Amazon RDS and wants to know whether it must replace failed physical database hardware. Who owns that task?",
    "องค์กรใช้ Amazon RDS และอยากทราบว่าต้องเปลี่ยน Physical Database Hardware ที่เสียเองหรือไม่ ใครรับผิดชอบ",
    "The customer|AWS|AWS IAM|Amazon RDS",
    "1",
    "AWS เป็นผู้ดูแล Physical Hardware และ Managed Infrastructure ของ RDS ส่วนลูกค้ากำหนด Data Security และ Logical Access"
  ],
  [
    "2.1",
    "A team migrates an EC2 application to AWS Lambda. Which responsibility still belongs to the developer team?",
    "ทีมย้าย Application จาก EC2 ไป AWS Lambda หน้าที่ใดยังคงเป็นของทีม Developer",
    "Guest operating system|Hypervisor|AWS IAM|AWS-owned physical servers",
    "2",
    "ทีม Developer ยังคงกำหนด Lambda Execution Role และ App Access Permissions ผ่าน IAM แม้ AWS ดูแล Infrastructure"
  ],
  [
    "2.1",
    "A startup uses EC2. Which TWO components are provided and secured by AWS rather than the startup? (Select TWO.)",
    "Startup ใช้ EC2 ส่วนประกอบสองอย่างใด AWS เป็นผู้จัดหาและรับผิดชอบ Security แทน Startup",
    "Hypervisor|Guest operating system|Security group|AWS-owned physical servers|The customer",
    "0,3",
    "AWS รับผิดชอบ Hypervisor และ Physical Servers ส่วนลูกค้าดูแล Guest OS และ Security Group Configuration"
  ],
  [
    "2.2",
    "A compliance team must produce AWS audit attestations and agreements for an external assessor. Which service provides those downloadable documents?",
    "ทีม Compliance ต้องดาวน์โหลด AWS Audit Attestations และ Agreements ส่งให้ External Assessor บริการใดมีเอกสารเหล่านี้",
    "AWS Artifact|AWS Config|AWS CloudTrail|AWS Trusted Advisor",
    "0",
    "Artifact ให้ AWS Compliance Reports/Agreements ส่วน Config ตรวจ Configuration ของทรัพยากรลูกค้า"
  ],
  [
    "2.2",
    "A company is notified of known package vulnerabilities inside its EC2 fleet. Which security service is the appropriate source of vulnerability findings?",
    "บริษัทต้องการ Findings เรื่อง Known Package Vulnerabilities ใน EC2 Fleet บริการ Security ใดตรงที่สุด",
    "Amazon GuardDuty|Amazon Inspector|Amazon Detective|AWS Security Hub",
    "1",
    "Inspector ตรวจ Vulnerabilities ใน Workloads ส่วน GuardDuty ตรวจ Threat Signals และ Security Hub รวบรวม Findings"
  ],
  [
    "2.2",
    "A security team has an alert and wants to explore related entities, timelines, and activity to investigate its cause. Which service supports investigation?",
    "ทีม Security มี Alert แล้วต้องการสำรวจ Related Entities Timelines และ Activities เพื่อสืบสวนสาเหตุ ใช้บริการใด",
    "AWS Security Hub|Amazon GuardDuty|Amazon Detective|Amazon Macie",
    "2",
    "Detective ช่วยสืบสวนและเชื่อมโยง Security Events ส่วน Security Hub รวม Findings และ GuardDuty ตรวจจับ Threats"
  ],
  [
    "2.2",
    "A business needs one service for detecting suspicious AWS account behavior and another for scanning EC2 software vulnerabilities. Which TWO fit? (Select TWO.)",
    "บริษัทต้องมีบริการตรวจ Suspicious Account Behavior และอีกบริการสแกน EC2 Software Vulnerabilities สองบริการใดตรง",
    "Amazon GuardDuty|Amazon Inspector|Amazon Detective|Amazon Macie|AWS Artifact",
    "0,1",
    "GuardDuty ใช้ Threat Detection ส่วน Inspector ประเมิน Vulnerabilities และ CVEs ใน Workloads ที่รองรับ"
  ],
  [
    "2.2",
    "A company wants audit records identifying who deleted an IAM policy. Which service captures this API event?",
    "บริษัทต้องการ Audit Records ว่าใคร Delete IAM Policy ผ่าน API Event ไหน บริการใดเก็บข้อมูล",
    "Amazon CloudWatch|AWS CloudTrail|AWS Config|AWS Security Hub",
    "1",
    "CloudTrail บันทึก Who What When ของ AWS API Activity ส่วน Config เน้น Resource Configuration History"
  ],
  [
    "2.2",
    "A data team has customer account numbers spread across S3 documents and must discover sensitive records. Which security service specifically addresses that?",
    "ทีม Data มี Customer Account Numbers กระจายอยู่ใน Documents บน S3 และต้องค้นหา Sensitive Records ควรใช้บริการใด",
    "Amazon Macie|Amazon GuardDuty|Amazon Inspector|AWS KMS",
    "0",
    "Macie ช่วยค้นและจัดประเภท Sensitive Data ใน S3 ส่วน KMS จัดการ Keys และ GuardDuty ตรวจ Threats"
  ],
  [
    "2.3",
    "A company uses AWS Organizations but now wants employees to access several accounts through centralized single sign-on. Which service adds that user-access capability?",
    "บริษัทมี AWS Organizations แล้ว แต่ต้องการให้พนักงานเข้า Accounts หลายบัญชีผ่าน Centralized SSO บริการใดเสริมเรื่อง Access นี้",
    "IAM Identity Center|AWS IAM|Amazon Cognito|AWS Control Tower",
    "0",
    "IAM Identity Center ทำ Workforce SSO หลาย Accounts ส่วน Organizations เน้น Account Management และ Governance"
  ],
  [
    "2.3",
    "A public application needs to authenticate consumers who sign up using email addresses. Which identity service is designed for application users?",
    "Public Application ต้อง Authentication ผู้ใช้ที่สมัครด้วย Email Addresses บริการ Identity ใดออกแบบมาสำหรับ App Users",
    "AWS IAM|IAM Identity Center|Amazon Cognito|AWS Organizations",
    "2",
    "Cognito ใช้ Sign-up/Sign-in ของ End Users ใน Web/Mobile Apps ต่างจาก Identity Center สำหรับ Workforce"
  ],
  [
    "2.3",
    "An app team has discovered that one S3 bucket's policy grants access to principals outside the organization. Which service can systematically identify such findings?",
    "ทีม Application พบว่า S3 Bucket Policy หนึ่งตัวอาจให้ External Principals เข้าถึง บริการใดตรวจพบ Findings ประเภทนี้เป็นระบบ",
    "AWS Config|IAM Access Analyzer|AWS CloudTrail|AWS IAM",
    "1",
    "IAM Access Analyzer ตรวจ External Resource Access จาก Policies ส่วน Config ตรวจ Configuration Rules และ CloudTrail ดู API Calls"
  ],
  [
    "2.3",
    "An EC2 application accesses S3. What should the team use instead of embedding long-lived AWS access keys inside the application?",
    "Application บน EC2 ต้องเข้าถึง S3 ทีมควรใช้ความสามารถใดแทนการฝัง Long-lived AWS Access Keys ใน Code",
    "AWS Secrets Manager|AWS IAM|AWS Artifact|AWS Organizations",
    "1",
    "ใช้ IAM Role ให้ EC2 ได้ Temporary Credentials ตาม Permissions ที่ต้องการ แทน Hard-code Keys"
  ],
  [
    "2.3",
    "A company wants centralized employee account access and tightly scoped temporary permissions for EC2 workloads. Which TWO AWS services or capabilities correspond to these needs? (Select TWO.)",
    "บริษัทต้องการ Centralized Employee Account Access และ Temporary Permissions ที่จำกัดสำหรับ EC2 Workloads สองบริการใดเกี่ยวข้อง",
    "IAM Identity Center|AWS IAM|AWS Organizations|Amazon Cognito|AWS CloudTrail",
    "0,1",
    "Identity Center ให้ Workforce SSO ส่วน IAM Roles กำหนด Temporary Permissions ให้ Compute Workloads"
  ],
  [
    "2.4",
    "A public API has many unwanted requests matching a specific malicious HTTP path pattern. Which protection should the team configure?",
    "Public API มี Requests ที่ตรงกับ Malicious HTTP Path Pattern จำนวนมาก ทีมควรกำหนดการป้องกันผ่านบริการใด",
    "AWS Shield|AWS WAF|Amazon GuardDuty|AWS Firewall Manager",
    "1",
    "AWS WAF กรอง Application-layer Requests เช่น Paths และ Patterns ส่วน Shield เน้น DDoS"
  ],
  [
    "2.4",
    "A global company wants to protect public endpoints against network-level DDoS attacks. Which AWS service is built for DDoS protection?",
    "บริษัทระดับโลกต้องป้องกัน Public Endpoints จาก Network-level DDoS Attacks บริการใดสร้างมาเพื่อป้องกัน DDoS",
    "AWS WAF|AWS Shield|AWS Security Hub|Amazon Inspector",
    "1",
    "Shield ป้องกัน DDoS ส่วน WAF กรอง Web Requests และ Inspector สแกน Vulnerabilities"
  ],
  [
    "2.4",
    "An organization must apply consistent WAF policies across separate AWS accounts with central oversight. Which service should control these policies?",
    "องค์กรต้องบังคับ WAF Policies ให้สอดคล้องกันข้าม AWS Accounts และดูแลจากส่วนกลาง บริการใดควบคุม Policies",
    "AWS Shield|AWS WAF|AWS Firewall Manager|AWS Config",
    "2",
    "Firewall Manager บริหาร Security Policies ข้าม Accounts ส่วน WAF บังคับ Web ACL Rules ในระดับ Application"
  ]
]);
})();
