(() => {
  const rows=window.LOCAL_SET_08_ROWS=window.LOCAL_SET_08_ROWS||[];
  rows.push(...[
  [
    "2.1",
    "A company hosts an application on Amazon EC2 and must apply security patches to its installed Linux operating system. Who is responsible?",
    "บริษัทติดตั้ง Application บน Amazon EC2 และต้อง Patch Linux ที่ติดตั้งใน Instance ใครเป็นผู้รับผิดชอบ",
    "AWS|The customer|AWS Support Center|AWS Trusted Advisor",
    "1",
    "ลูกค้าต้องดูแล Guest OS บน EC2 รวมการ Patch ส่วน AWS ดูแล Hardware และ Virtualization ของ Cloud"
  ],
  [
    "2.1",
    "An organization replaces a self-hosted database on EC2 with Amazon RDS. Which responsibility does AWS take over for the managed database?",
    "องค์กรย้าย Database จาก EC2 ที่ดูแลเองไป Amazon RDS หน้าที่ใดเปลี่ยนไปให้ AWS รับผิดชอบสำหรับ Managed Database",
    "Guest operating system|Security group|AWS-owned physical servers|AWS IAM",
    "0",
    "AWS ดูแล OS และงานจัดการ Platform ของ RDS ส่วนลูกค้ายังคงดูแลการเข้าถึงและข้อมูล จึงต่างจาก EC2 ที่ลูกค้าดูแล Guest OS"
  ],
  [
    "2.1",
    "A team uploads confidential files to Amazon S3. Which responsibility remains with the customer?",
    "ทีมอัปโหลดไฟล์ลับขึ้น Amazon S3 หน้าที่ใดยังคงเป็นความรับผิดชอบของลูกค้า",
    "AWS-owned physical servers|Hypervisor|The customer|AWS",
    "2",
    "ลูกค้าต้องกำหนดว่าใครอ่านไฟล์และตั้งค่า Access Controls ขณะที่ AWS ดูแล Physical Infrastructure"
  ],
  [
    "2.1",
    "A company uses EC2 and wants to distinguish responsibilities. Which TWO are handled by AWS under the shared responsibility model? (Select TWO.)",
    "บริษัทใช้ EC2 และต้องแยกหน้าที่ตาม Shared Responsibility Model ข้อใดสองอย่าง AWS เป็นผู้ดูแล",
    "AWS-owned physical servers|Guest operating system|Hypervisor|Security group|The customer",
    "0,2",
    "AWS รับผิดชอบ Physical Servers และ Hypervisor ใต้ EC2 แต่ลูกค้า Patch Guest OS และ Configure Security Groups"
  ],
  [
    "2.1",
    "A Lambda application stores personal data and has an overly broad execution role. Who must tighten the IAM permissions?",
    "Application ที่ใช้ AWS Lambda เก็บข้อมูลส่วนบุคคล แต่ Execution Role ให้สิทธิ์กว้างเกินไป ใครต้องปรับ IAM Permissions",
    "AWS|The customer|AWS-owned physical servers|Hypervisor",
    "1",
    "Lambda เป็น Serverless แต่ลูกค้ายังรับผิดชอบ Code Data และ Permissions ของตน AWS จัดการ Infrastructure ไม่ได้ตั้ง Least Privilege ให้แทนโดยอัตโนมัติ"
  ],
  [
    "2.2",
    "An auditor asks which IAM principal changed an S3 bucket policy at a specific time. Which service BEST provides the API activity record?",
    "Auditor ต้องการทราบว่า IAM Principal ใดแก้ S3 Bucket Policy เมื่อใด บริการใดเก็บ API Activity Record",
    "Amazon CloudWatch|AWS Config|AWS CloudTrail|AWS Security Hub",
    "2",
    "CloudTrail บันทึก API Calls และ Actor ส่วน Config เก็บ Configuration History และ CloudWatch ดู Metrics Logs Alarms"
  ],
  [
    "2.2",
    "A security team wants alerts about unusual API calls and possible credential compromise, rather than a list of software vulnerabilities. Which service fits?",
    "ทีม Security ต้องการแจ้งเตือน API Activity ผิดปกติและความเสี่ยง Credentials ถูกใช้โดยผู้ไม่หวังดี ไม่ใช่รายงานช่องโหว่ Software",
    "Amazon Inspector|Amazon GuardDuty|AWS Security Hub|Amazon Macie",
    "1",
    "GuardDuty วิเคราะห์สัญญาณเพื่อ Threat Detection ส่วน Inspector ตรวจ Vulnerabilities และ Macie ค้น Sensitive Data ใน S3"
  ],
  [
    "2.2",
    "A compliance officer needs official AWS SOC reports for a vendor review without configuring new monitoring. Which service should they access?",
    "เจ้าหน้าที่ Compliance ต้องการรายงาน SOC ของ AWS เพื่อประเมิน Vendor โดยไม่สร้างระบบ Monitoring ใหม่ ควรใช้บริการใด",
    "AWS Config|AWS Artifact|AWS CloudTrail|AWS Well-Architected Tool",
    "1",
    "AWS Artifact ให้เข้าถึง Compliance Reports และ Agreements ของ AWS ต่างจาก Config ที่ประเมินการตั้งค่าทรัพยากรบัญชีเรา"
  ],
  [
    "2.2",
    "A company wants to detect personal identification numbers stored in Amazon S3 and investigate suspicious access patterns. Which TWO services cover the two requirements? (Select TWO.)",
    "บริษัทต้องการค้นเลขประจำตัวส่วนบุคคลใน S3 และตรวจจับรูปแบบการเข้าถึงที่น่าสงสัย บริการใดสองตัวตรงคนละส่วน",
    "Amazon Macie|Amazon Inspector|Amazon GuardDuty|AWS Artifact|AWS Config",
    "0,2",
    "Macie ใช้ Sensitive Data Discovery ใน S3 ส่วน GuardDuty เป็น Threat Detection จากสัญญาณกิจกรรม"
  ],
  [
    "2.2",
    "A governance team must identify when a security group changed and evaluate it against an approved configuration rule. Which AWS service should be used?",
    "ทีม Governance ต้องการรู้ว่า Security Group เปลี่ยน Configuration เมื่อใด และประเมินกับ Approved Rule บริการใดเหมาะ",
    "AWS CloudTrail|Amazon CloudWatch|AWS Config|AWS X-Ray",
    "2",
    "AWS Config บันทึก Resource Configuration และประเมิน Compliance ตาม Rules ไม่ใช่แค่บันทึก API Call หรือ Metrics"
  ],
  [
    "2.2",
    "An application needs encryption keys managed separately from a database password that rotates regularly. Which service is dedicated to managing the encryption keys?",
    "Application ต้องจัดการ Encryption Keys แยกจาก Database Password ที่เปลี่ยนเป็นระยะ บริการใดมีหน้าที่จัดการ Keys โดยเฉพาะ",
    "AWS Secrets Manager|AWS KMS|AWS Certificate Manager|AWS IAM",
    "1",
    "AWS KMS จัดการ Cryptographic Keys ส่วน Secrets Manager เก็บและหมุนเวียน Secrets เช่น Password และ ACM ดูแล TLS Certificates"
  ],
  [
    "2.3",
    "An enterprise wants employees to sign in once and access assigned roles in multiple AWS accounts through a central portal. Which service BEST fits?",
    "องค์กรต้องการให้พนักงาน Sign in ครั้งเดียว แล้วเข้า AWS Accounts หลายบัญชีผ่าน Portal กลางพร้อม Assigned Roles ใช้บริการใด",
    "AWS IAM|Amazon Cognito|IAM Identity Center|AWS Organizations",
    "2",
    "IAM Identity Center จัดการ Workforce SSO หลาย Accounts ส่วน Cognito เน้น End Users ของ Application และ Organizations เน้น Account Governance"
  ],
  [
    "2.3",
    "A startup wants day-to-day administrative work performed by separate identities rather than using its AWS root user. Which service manages identities and access policies?",
    "Startup ต้องการให้ทีมใช้งานแบบ Administrative ผ่าน Separate Identities แทนใช้ AWS Root User ประจำ บริการใดจัดการ Identities และ Access Policies",
    "AWS Config|AWS IAM|AWS Secrets Manager|IAM Identity Center",
    "1",
    "AWS IAM จัดการ Users Roles และ Permission Policies เพื่อเลี่ยงใช้ Root User ประจำ และควรเปิด MFA ป้องกัน Root User"
  ],
  [
    "2.3",
    "An EC2 application needs temporary permission to write objects into one S3 bucket without storing access keys in its source code. Which AWS capability is central?",
    "Application บน EC2 ต้องเขียน Objects ลง S3 Bucket เดียวโดยไม่เก็บ Access Keys ใน Source Code ความสามารถใดเหมาะ",
    "AWS IAM|AWS Secrets Manager|IAM Identity Center|AWS Organizations",
    "0",
    "ใช้ IAM Role สำหรับ EC2 เพื่อรับ Temporary Credentials และกำหนด Bucket Scope ส่วน Secrets Manager เหมาะกับ Secrets ที่บริการต้องเก็บ"
  ],
  [
    "2.3",
    "A developer should only read objects from one S3 bucket and must not delete them. Which Well-Architected pillar MOST directly supports this least-privilege requirement?",
    "Developer ต้องอ่าน Objects จาก S3 Bucket เดียวแต่ห้าม Delete Records ข้อกำหนด Least Privilege นี้ตรงกับ Well-Architected Pillar ใดที่สุด",
    "Security|Reliability|Cost Optimization|Operational Excellence",
    "0",
    "Security Pillar เน้น Identity และ Least Privilege ให้สิทธิ์เฉพาะ Read ที่จำเป็น ไม่ให้ Delete หรือ Full Access"
  ],
  [
    "2.3",
    "A company is improving workforce access. Which TWO practices reduce long-lived credential exposure? (Select TWO.)",
    "บริษัทปรับปรุง Workforce Access วิธีใดสองวิธีลดการใช้ Long-lived Credentials ที่เสี่ยงถูกเปิดเผย",
    "IAM Identity Center|AWS CloudTrail|AWS IAM|AWS Config|AWS Artifact",
    "0,2",
    "ใช้ Identity Center สำหรับ Federation/SSO และ IAM Roles ให้ Temporary Credentials แทนการแชร์ Long-lived Access Keys"
  ],
  [
    "2.4",
    "A public web app is targeted by HTTP requests containing common injection patterns. Which service can filter these requests using web ACL rules?",
    "Public Web App ถูกโจมตีด้วย HTTP Requests ที่มีรูปแบบ Injection บ่อย ๆ ควรกรองคำขอผ่าน Web ACL ด้วยบริการใด",
    "AWS Shield|AWS WAF|AWS Firewall Manager|Amazon GuardDuty",
    "1",
    "AWS WAF กรอง HTTP(S) Requests ตาม Web ACL Rules ส่วน Shield เน้น DDoS และ Firewall Manager เน้นการบริหาร Policy ส่วนกลาง"
  ],
  [
    "2.4",
    "A security leader wants the same AWS WAF rules enforced centrally across accounts in an organization. Which service is designed for centralized policy management?",
    "หัวหน้าทีม Security ต้องการใช้ AWS WAF Rules ชุดเดียวกันกับหลาย Accounts โดยบริหาร Policies จากส่วนกลาง ใช้บริการใด",
    "AWS WAF|AWS Shield|AWS Firewall Manager|AWS Security Hub",
    "2",
    "Firewall Manager จัดการ Security Policies ข้ามหลาย Accounts ส่วน WAF กรอง Requests ในระดับ Web ACL"
  ],
  [
    "2.4",
    "A team needs to license and deploy a supported third-party security appliance available through AWS. Where should it look first?",
    "ทีมต้องการซื้อ License และ Deploy Third-party Security Appliance ที่มีใน AWS ควรค้นจากบริการใดก่อน",
    "AWS Artifact|AWS Marketplace|AWS Trusted Advisor|AWS Partner Network",
    "1",
    "AWS Marketplace เป็น Catalog สำหรับค้นหาและจัดซื้อ Third-party Software ส่วน Artifact เป็น Compliance Documents และ Partner Network เป็นเครือข่าย Partners"
  ]
]);
})();
