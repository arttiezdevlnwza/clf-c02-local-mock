(() => {
  const rows = window.LOCAL_SET_07_ROWS = window.LOCAL_SET_07_ROWS || [];
  rows.push(...[
  [
    "2.1",
    "After a new security bulletin, an EC2 owner must update the Linux operating system installed within the instance. Who is responsible for these guest OS patches?",
    "หลัง Security Bulletin เจ้าของ EC2 ต้อง Update Linux Operating System ภายใน Instance ใครรับผิดชอบ Guest OS Patches นี้",
    "AWS|The customer|AWS Support|The third-party auditor",
    "1",
    "ลูกค้ารับผิดชอบ Guest OS Configuration/Patching บน EC2 ภายใต้ Security IN the Cloud; AWS ดูแล Hypervisor/Hardware"
  ],
  [
    "2.1",
    "A managed service experiences a failure in the provider-owned data center's cooling system. Which party owns maintenance of that physical facility?",
    "Managed Service มีปัญหาที่ Cooling System ของ Data Center ที่ Provider เป็นเจ้าของ ฝ่ายใดดูแลซ่อมบำรุง Physical Facility",
    "The customer|AWS Support|AWS|The internet service provider",
    "2",
    "AWS ดูแล Physical Infrastructure, Facilities และ Cooling/Power ของ AWS Data Centers"
  ],
  [
    "2.1",
    "A company runs a VM on EC2 and keeps sensitive records there. Which TWO security tasks must the customer configure or maintain? (Select TWO.)",
    "บริษัทเปิด VM บน EC2 และเก็บ Sensitive Records ข้อใดสอง Security Tasks ที่ลูกค้าต้อง Configure หรือ Maintain เอง",
    "Maintaining AWS physical servers|Guest operating system|Managing customer encryption key policies|Securing AWS data centers|Hypervisor",
    "1,2",
    "ลูกค้าต้อง Patch Guest OS ของ EC2 และกำหนด Customer-controlled Encryption Key Policies ขณะที่ AWS ดูแล Hardware/Facilities"
  ],
  [
    "2.1",
    "A company hosts application data on a managed AWS database. Who owns the business decision about which staff members may query sensitive customer records?",
    "บริษัทเก็บ Application Data ใน AWS Managed Database ใครตัดสินใจเชิงธุรกิจว่า Staff กลุ่มใด Query Sensitive Records ได้",
    "AWS|AWS Support|The customer|The third-party auditor",
    "2",
    "ลูกค้าเป็นเจ้าของข้อมูลและกำหนด Permissions ตาม Business Requirements แม้ AWS ดูแลบริการ Database"
  ],
  [
    "2.1",
    "A business shifts workloads from self-managed EC2 hosts to AWS Lambda. Which party now takes care of the underlying compute host and runtime infrastructure?",
    "บริษัทเปลี่ยนจาก EC2 ที่ดูแลเองไป AWS Lambda ฝ่ายใดดูแล Underlying Compute Host และ Runtime Infrastructure",
    "The customer|AWS|The third-party auditor|AWS Support",
    "1",
    "AWS ดูแล Managed Runtime/Physical Hosts ของ Lambda ส่วนลูกค้ายังดูแล Code, Identity และ Data"
  ],
  [
    "2.2",
    "A team has a rule that supported resources must have encryption enabled; it wants automatic checks whenever a resource's configuration changes. Which AWS service is intended?",
    "ทีมกำหนด Rule ว่า Supported Resources ต้องเปิด Encryption และต้องการ Automatic Checks เมื่อ Configuration เปลี่ยน Service ใดตรงงาน",
    "AWS CloudTrail|AWS Config|Amazon CloudWatch|AWS Artifact",
    "1",
    "AWS Config บันทึก Resource Configuration และประเมิน Compliance Rules; CloudTrail บันทึกว่าใครเรียก API"
  ],
  [
    "2.2",
    "An investigation must establish when an administrator changed a route table and from which identity the API request originated. Which service supplies this history?",
    "Investigation ต้องรู้ว่า Admin แก้ Route Table เมื่อใดและ API Request มาจาก Identity ใด ใช้ Service ใดดู History",
    "AWS Config|AWS CloudTrail|AWS Health Dashboard|Amazon CloudWatch",
    "1",
    "CloudTrail ให้ Historical API Events และ Caller Identity; Config ให้ Resource Configuration History ไม่ใช่หลักฐาน API Caller โดยตรง"
  ],
  [
    "2.2",
    "A team needs alarms for application error metrics and a consolidated view of security findings collected from multiple detectors. Which TWO services cover these separate needs? (Select TWO.)",
    "ทีมต้องการ Alarms จาก Application Error Metrics และหน้ารวม Security Findings จากหลาย Detectors ข้อใดสอง Services ตรงงาน",
    "Amazon CloudWatch|AWS CloudTrail|AWS Config|AWS Security Hub|AWS Artifact",
    "0,3",
    "CloudWatch ทำ Metrics/Alarms ส่วน Security Hub รวม Findings จาก GuardDuty/Inspector และแหล่งอื่น"
  ],
  [
    "2.2",
    "A procurement department asks for downloadable evidence of AWS compliance certifications and attestations. Which service is designed for this evidence?",
    "ฝ่าย Procurement ต้องการดาวน์โหลดหลักฐาน AWS Compliance Certifications และ Attestations บริการใดจัดเตรียมไว้",
    "AWS Artifact|AWS Config|AWS Security Hub|AWS Trusted Advisor",
    "0",
    "AWS Artifact ให้ Compliance Reports และ Agreements ที่ AWS จัดทำไว้ ต่างจาก Config ที่ตรวจ Configuration ของ Account"
  ],
  [
    "2.2",
    "A cloud engineer wants account-specific notices about planned AWS maintenance events and service issues, not application CPU alarms. Which dashboard should be consulted?",
    "Cloud Engineer ต้องการ Account-specific Notices เกี่ยวกับ AWS Maintenance Events และ Service Issues ไม่ใช่ Application CPU Alarms ดู Dashboard ใด",
    "AWS Trusted Advisor|AWS Health Dashboard|Amazon CloudWatch|AWS Config",
    "1",
    "AWS Health Dashboard แสดง Events และ Planned Maintenance ของ AWS ที่เกี่ยวข้องกับ Account; CloudWatch ดู Workload Metrics"
  ],
  [
    "2.3",
    "A public education app requires authentication for students signing in from mobile devices using social identities. Which service is meant for these users?",
    "Education App สาธารณะต้อง Authentication สำหรับนักเรียน Login จาก Mobile Devices ผ่าน Social Identities บริการใดเหมาะกับกลุ่มผู้ใช้นี้",
    "IAM Identity Center|Amazon Cognito|AWS Organizations|AWS IAM",
    "1",
    "Cognito รองรับ Customer/Application Users Sign-in; IAM Identity Center เน้น Workforce Federation"
  ],
  [
    "2.3",
    "An employer needs to connect an existing corporate identity provider and assign AWS access through permission sets for hundreds of employees. Which AWS service should it use?",
    "นายจ้างต้องเชื่อม Corporate Identity Provider เดิมและ Assign AWS Access ผ่าน Permission Sets ให้พนักงานหลายร้อยคน ควรใช้ Service ใด",
    "AWS IAM|IAM Identity Center|AWS Organizations|Amazon Cognito",
    "1",
    "Identity Center ใช้ Workforce SSO, Access Portal และ Permission Sets ข้าม Accounts; Cognito สำหรับ App Customers"
  ],
  [
    "2.3",
    "A team must find resource policies that inadvertently grant external access and issue TLS certificates for its public HTTPS endpoint. Which TWO services handle these tasks? (Select TWO.)",
    "ทีมต้องค้นหา Resource Policies ที่เปิด External Access โดยไม่ตั้งใจ และออก TLS Certificates ให้ Public HTTPS Endpoint ข้อใดสอง Services ตรงงาน",
    "IAM Access Analyzer|AWS KMS|AWS Certificate Manager|AWS Secrets Manager|AWS Config",
    "0,2",
    "IAM Access Analyzer ตรวจ External Access จาก Policies ส่วน ACM ออก/จัดการ TLS Certificates สำหรับ Endpoints ที่รองรับ"
  ],
  [
    "2.3",
    "A company is standardizing access across AWS accounts and wants organizational units and service-control guardrails for each business division. Which service provides these features?",
    "บริษัทต้องการตั้ง AWS Accounts เป็น Organizational Units และกำหนด Service-control Guardrails ให้แต่ละ Division ใช้ Service ใด",
    "AWS Control Tower|AWS Organizations|IAM Identity Center|AWS IAM",
    "1",
    "AWS Organizations ให้ OUs/Service Control Policies และ Account Structure; Identity Center ทำ Workforce Access"
  ],
  [
    "2.3",
    "Security engineers need to control encryption key usage for an S3 dataset, including key policies, rather than rotate application login passwords. Which service is intended?",
    "Security Engineers ต้องควบคุมการใช้ Encryption Keys และ Key Policies ของ S3 Dataset ไม่ได้ต้อง Rotate Login Passwords ควรใช้ Service ใด",
    "AWS Secrets Manager|AWS KMS|AWS Certificate Manager|AWS IAM",
    "1",
    "AWS KMS จัดการ Cryptographic Keys/Key Policies; Secrets Manager จัด Passwords/API Secrets"
  ],
  [
    "2.4",
    "A distributed volumetric attack aims to overwhelm the network capacity of a publicly accessible website. Which AWS service is built around this threat?",
    "Distributed Volumetric Attack พยายามทำ Network Capacity ของเว็บ Public ให้เต็ม บริการใดออกแบบมารับ Threat นี้",
    "AWS WAF|AWS Shield|AWS Firewall Manager|Amazon GuardDuty",
    "1",
    "Shield ให้ DDoS Protection; WAF ใช้กรอง HTTP(S) Requests เช่น SQLi/XSS"
  ],
  [
    "2.4",
    "A platform owner wants automated detection of software vulnerabilities in installed EC2 packages, not suspicious API activity. Which service is the best match?",
    "Platform Owner ต้องการ Automated Detection ของ Software Vulnerabilities ใน EC2 Packages ไม่ได้ต้องการตรวจ Suspicious API Activity ใช้ Service ใด",
    "Amazon GuardDuty|Amazon Inspector|Amazon Detective|AWS Security Hub",
    "1",
    "Inspector ตรวจ CVEs/Package Vulnerabilities ของ EC2 ที่รองรับ; GuardDuty ตรวจ Threat Indicators"
  ],
  [
    "2.4",
    "A company wants a web request filter that can block malicious query strings matching a SQL injection rule. Which service implements it?",
    "บริษัทต้องการ Web Request Filter ที่ Block Malicious Query Strings ตรงกับ SQL Injection Rule Service ใดทำหน้าที่นี้",
    "AWS WAF|AWS Firewall Manager|AWS Shield|AWS Security Hub",
    "0",
    "WAF ตรวจและ Block HTTP(S) Requests ตาม Web ACL Rules; Firewall Manager บริหาร Policies ข้าม Accounts"
  ],
  [
    "2.4",
    "A security lead wants organization-wide management of the same WAF policies for dozens of application teams. Which AWS service should centralize enforcement?",
    "Security Lead ต้องการจัดการ WAF Policies เดียวกันทั้งองค์กรสำหรับหลายสิบ Application Teams ควรใช้ AWS Service ใดจัด Enforcement ส่วนกลาง",
    "AWS Shield|AWS Firewall Manager|AWS Security Hub|AWS WAF",
    "1",
    "Firewall Manager บริหาร Web ACL/Security Policies across Accounts จากส่วนกลาง; AWS WAF เป็นตัวตรวจ Requests"
  ]
]);
})();
