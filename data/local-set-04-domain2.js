(() => {
  const rows = window.LOCAL_SET_04_ROWS = window.LOCAL_SET_04_ROWS || [];
  rows.push(...[
  [
    "2.1",
    "A company runs a custom Windows application on Amazon EC2. Who must apply security patches to the Windows operating system inside the instance?",
    "บริษัทใช้ Windows Application บน EC2 ใครต้องลง Security Patches ให้ Windows ภายใน Instance",
    "The customer|AWS|AWS Support|The third-party auditor",
    "0",
    "ลูกค้าดูแล Guest Operating System ของ EC2 รวมถึง OS Patching ส่วน AWS ดูแล Physical Infrastructure และ Hypervisor"
  ],
  [
    "2.1",
    "Which security layer is managed by AWS rather than the customer for a standard Amazon EC2 instance?",
    "Security Layer ใด AWS เป็นผู้ดูแล ไม่ใช่ลูกค้า สำหรับ EC2 Instance ทั่วไป",
    "Guest operating system|Configuring IAM permissions|Hypervisor|Managing customer encryption key policies",
    "2",
    "AWS ดูแล Hypervisor และ Physical Hardware ส่วนลูกค้าดูแล Guest OS และ IAM Permissions ของ Workload"
  ],
  [
    "2.1",
    "A team hosts a custom API on EC2. Which TWO activities remain its responsibility under the shared responsibility model? (Select TWO.)",
    "ทีมโฮสต์ Custom API บน EC2 กิจกรรมใดสองข้อยังเป็นหน้าที่ของทีมตาม Shared Responsibility Model",
    "Guest operating system|Maintaining AWS physical servers|Configuring IAM permissions|Securing AWS data centers|AWS-owned physical servers",
    "0,2",
    "ลูกค้าต้อง Configure/Patch Guest OS และกำหนด IAM Permissions ส่วน Hardware และ Data Center เป็นหน้าที่ AWS"
  ],
  [
    "2.1",
    "A business stores confidential records in an AWS-managed database. Who determines the application's data-access rules and data classification?",
    "บริษัทเก็บข้อมูลลับใน Managed Database ของ AWS ใครกำหนด Data-access Rules และ Classification ของข้อมูล",
    "AWS|The customer|AWS Support|The third-party auditor",
    "1",
    "ลูกค้าเป็นเจ้าของ Data Classification และ Access Policies ของข้อมูลตน แม้ AWS ช่วยดูแล Database Infrastructure"
  ],
  [
    "2.1",
    "A company uses managed serverless compute. Which activity must it STILL control so that a function can read only required S3 buckets?",
    "บริษัทใช้ Managed Serverless Compute ยังต้องควบคุมอะไรเพื่อให้ Function อ่านได้เฉพาะ S3 Buckets ที่จำเป็น",
    "Securing AWS data centers|Maintaining AWS physical servers|Configuring IAM permissions|Hypervisor",
    "2",
    "ลูกค้าต้องตั้งค่า IAM Role และ Permissions ให้ Function ตาม Least Privilege แม้ไม่ต้องดูแล Server เอง"
  ],
  [
    "2.2",
    "An enterprise wants a governed multi-account landing zone with centrally applied guardrails. Which AWS service BEST fits?",
    "องค์กรต้องการ Multi-account Landing Zone พร้อม Guardrails จากส่วนกลาง ควรใช้บริการใด",
    "AWS Control Tower|AWS Organizations|AWS Security Hub|AWS Config",
    "0",
    "AWS Control Tower ช่วยตั้งค่าและกำกับ Landing Zone แบบหลายบัญชี โดยใช้ Organizations เป็นโครงสร้างประกอบ"
  ],
  [
    "2.2",
    "A team needs to identify sensitive personal data in S3 and detect resource policies that allow access from outside its accounts. Which TWO services are purpose-built for these tasks? (Select TWO.)",
    "ทีมต้องหาข้อมูลส่วนบุคคลใน S3 และตรวจ Resource Policies ที่อาจเปิดสิทธิ์ให้ภายนอก ข้อใดสองบริการที่ตรงงาน",
    "Amazon Inspector|IAM Access Analyzer|AWS Config|Amazon Macie|AWS Security Hub",
    "1,3",
    "Macie ค้นหา Sensitive Data ใน S3 ส่วน IAM Access Analyzer ตรวจ External Access จาก Resource-based Policies"
  ],
  [
    "2.2",
    "A production resource was deleted unexpectedly. Auditors need the identity and time of the API operation, not just configuration history. Which service is the PRIMARY source?",
    "ทรัพยากร Production ถูกลบโดยไม่คาดคิด Auditor ต้องรู้ Identity และเวลาของ API Operation ไม่ใช่แค่ Configuration History ใช้บริการใด",
    "AWS Config|Amazon CloudWatch|AWS CloudTrail|AWS Trusted Advisor",
    "2",
    "AWS CloudTrail บันทึก AWS API Events พร้อมผู้เรียกและเวลา ต่างจาก Config ที่ติดตาม Configuration History"
  ],
  [
    "2.2",
    "A compliance auditor requests an AWS-provided SOC report for an external audit package. Which service provides access to such documentation?",
    "Auditor ต้องการ SOC Report ที่ AWS จัดเตรียมเป็นหลักฐาน External Audit ใช้บริการใด",
    "AWS Security Hub|AWS Artifact|AWS Config|AWS Well-Architected Tool",
    "1",
    "AWS Artifact เป็นแหล่ง AWS Compliance Reports และ Agreements ไม่ใช่ระบบตรวจ Security Findings หรือ Config"
  ],
  [
    "2.2",
    "A security team needs ongoing evaluation of whether supported AWS resources comply with approved encryption configuration rules. Which AWS service fits?",
    "ทีม Security ต้องประเมินต่อเนื่องว่า Resources ที่รองรับมี Encryption Configuration ตาม Rules ที่องค์กรอนุมัติหรือไม่ ใช้บริการใด",
    "AWS CloudTrail|AWS Trusted Advisor|AWS Security Hub|AWS Config",
    "3",
    "AWS Config ประเมินการตั้งค่าของทรัพยากรเทียบ Rules และติดตามการเปลี่ยน Configuration"
  ],
  [
    "2.3",
    "A shopping app needs sign-up and sign-in for millions of external customers, not employee access to AWS accounts. Which service is intended for this?",
    "แอป Shopping ต้องมี Sign-up/Sign-in สำหรับลูกค้าภายนอกจำนวนมาก ไม่ใช่ให้พนักงานเข้า AWS Accounts ควรใช้บริการใด",
    "IAM Identity Center|Amazon Cognito|AWS IAM|AWS Organizations",
    "1",
    "Amazon Cognito จัดการ Authentication สำหรับผู้ใช้ Web/Mobile Applications ส่วน Identity Center เน้น Workforce Access"
  ],
  [
    "2.3",
    "A supplier must invoke an API in another AWS account temporarily without receiving long-lived access keys. Which AWS capability should be configured?",
    "Supplier ต้องเรียก API ใน AWS Account อื่นชั่วคราวโดยไม่รับ Long-lived Access Keys ควรใช้ความสามารถใด",
    "AWS Secrets Manager|AWS IAM|IAM Identity Center|IAM Access Analyzer",
    "1",
    "AWS IAM Role พร้อม Trust Policy ให้ AssumeRole ข้ามบัญชีจะออก Temporary Credentials โดยไม่แชร์ Keys ถาวร"
  ],
  [
    "2.3",
    "A team needs to identify unintended external access in resource policies and automatically rotate an application's database password. Which TWO services address these tasks? (Select TWO.)",
    "ทีมต้องหา Resource Policies ที่เปิด External Access โดยไม่ตั้งใจและหมุนเวียน Database Password อัตโนมัติ ข้อใดสองบริการที่ตรงงาน",
    "AWS Secrets Manager|AWS KMS|AWS Config|IAM Access Analyzer|IAM Identity Center",
    "0,3",
    "IAM Access Analyzer วิเคราะห์ Policy-based External Access ส่วน Secrets Manager จัดเก็บและหมุนเวียน Database Secrets"
  ],
  [
    "2.3",
    "A Lambda function should read one DynamoDB table but must not update or delete items. Which security principle should determine its role permissions?",
    "Lambda ต้องอ่าน DynamoDB Table เดียวและห้าม Update/Delete Items หลักการใดควรกำหนด Role Permissions",
    "Defense in depth|Zero Trust|Least privilege|Separation of duties",
    "2",
    "Least privilege ให้เฉพาะสิทธิ์ที่จำเป็น เช่น DynamoDB Read บน Table ที่ต้องใช้โดยไม่ให้ Write"
  ],
  [
    "2.3",
    "An IT department wants to assign workforce permission sets to multiple AWS accounts through one access portal integrated with its corporate directory. Which service fits?",
    "ฝ่าย IT ต้อง Assign Workforce Permission Sets ให้หลาย AWS Accounts ผ่าน Portal เดียวเชื่อม Corporate Directory ใช้บริการใด",
    "AWS Organizations|IAM Identity Center|AWS IAM|Amazon Cognito",
    "1",
    "IAM Identity Center รองรับ Workforce Federation และ Permission Sets หลายบัญชี; Organizations ดูแลโครงสร้างบัญชี"
  ],
  [
    "2.4",
    "A shopping site sees HTTP requests attempting SQL injection against its application. Which service filters these requests at the web layer?",
    "เว็บ Shopping พบ HTTP Requests ที่พยายาม SQL Injection บริการใดกรองคำขอที่ Web Layer",
    "AWS Shield|AWS Firewall Manager|AWS WAF|Amazon GuardDuty",
    "2",
    "AWS WAF ใช้ Web ACL Rules กรอง HTTP(S) Requests เช่น SQL Injection; Firewall Manager จัดการ Policies ส่วนกลาง"
  ],
  [
    "2.4",
    "A security team notices unusual AWS credential usage from suspicious locations. Which service is designed to detect such threats?",
    "ทีม Security พบการใช้ AWS Credentials ผิดปกติจากสถานที่น่าสงสัย บริการใดตรวจจับ Threat ลักษณะนี้",
    "Amazon Inspector|Amazon Detective|Amazon GuardDuty|AWS Security Hub",
    "2",
    "Amazon GuardDuty วิเคราะห์สัญญาณและพฤติกรรมที่อาจเป็นภัยคุกคาม ส่วน Inspector ตรวจช่องโหว่ Software"
  ],
  [
    "2.4",
    "An administrator needs consistent web ACL policies across many AWS accounts and organizational units. Which service provides centralized management?",
    "ผู้ดูแลต้องการ Web ACL Policies ที่สอดคล้องกันข้าม AWS Accounts และ Organizational Units ใช้บริการใดจัดการจากส่วนกลาง",
    "AWS WAF|AWS Security Hub|AWS Firewall Manager|AWS Shield",
    "2",
    "AWS Firewall Manager จัดการ Security Policies แบบรวมศูนย์ข้ามบัญชี ส่วน AWS WAF กรอง Web Requests ตาม Rules"
  ],
  [
    "2.4",
    "A platform team needs continuous package vulnerability scanning in supported ECR container images. Which service is intended for this?",
    "ทีม Platform ต้องการสแกน Package Vulnerabilities ใน ECR Container Images ที่รองรับอย่างต่อเนื่อง ใช้บริการใด",
    "Amazon GuardDuty|Amazon Inspector|Amazon Detective|AWS Security Hub",
    "1",
    "Amazon Inspector ตรวจ Software Package Vulnerabilities ใน Images/Workloads ที่รองรับ ต่างจาก GuardDuty ที่จับ Threat Behavior"
  ]
]);
})();
