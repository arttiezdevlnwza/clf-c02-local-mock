(() => {
  const rows = window.LOCAL_SET_06_ROWS = window.LOCAL_SET_06_ROWS || [];
  rows.push(...[
  [
    "2.1",
    "An organization stores confidential customer images in S3. Which party is responsible for choosing the bucket access policies and deciding which images are sensitive?",
    "องค์กรเก็บรูปภาพลูกค้าที่เป็นความลับใน S3 ใครเป็นผู้เลือก Bucket Access Policies และระบุว่ารูปใด Sensitive",
    "AWS|The customer|AWS Support|The third-party auditor",
    "1",
    "ลูกค้าต้องกำหนด Data Classification และ Access Permissions ของข้อมูลตน แม้ AWS ดูแล Storage Infrastructure"
  ],
  [
    "2.1",
    "On a standard EC2 instance, who is responsible for repairing a failed underlying physical host?",
    "สำหรับ EC2 Instance ทั่วไป ใครรับผิดชอบเปลี่ยนหรือซ่อม Physical Host ที่เสีย",
    "The customer|AWS Support|AWS|The third-party auditor",
    "2",
    "AWS ดูแล Physical Hardware และ Facilities ภายใต้ Security OF the Cloud; ลูกค้าดูแล Guest OS"
  ],
  [
    "2.1",
    "A company hosts an application on EC2. Which TWO actions must its administrators perform to secure their own workload rather than rely on AWS to perform them? (Select TWO.)",
    "บริษัทโฮสต์ Application บน EC2 ผู้ดูแลต้องทำข้อใดสองอย่างเพื่อ Secure Workload เอง ไม่ใช่รอ AWS ทำให้",
    "Maintaining AWS physical servers|Guest operating system|AWS data center power systems|Configuring IAM permissions|Hypervisor",
    "1,3",
    "ลูกค้า Patch Guest OS และกำหนด IAM Permissions ของ EC2 Workload; AWS ดูแล Hypervisor, Physical Hardware และ Data Center Power"
  ],
  [
    "2.1",
    "A software vendor moves its API to AWS Fargate. Which part of security remains primarily the vendor's job?",
    "Software Vendor ย้าย API ไป Fargate ส่วนใดด้าน Security ยังเป็นหน้าที่หลักของ Vendor",
    "Securing AWS data centers|Defining data-access permissions|Maintaining AWS physical servers|Hypervisor",
    "1",
    "ลูกค้ายังต้องกำหนด Data-access Permissions และรักษาความปลอดภัย Application Data แม้ Fargate จัดการ Hosts"
  ],
  [
    "2.1",
    "Which shared-responsibility concept explains why AWS maintains an EC2 host's virtualization layer while the customer patches the installed Linux guest?",
    "หลัก Shared Responsibility ใดอธิบายว่า AWS ดูแล Virtualization Layer ของ EC2 แต่ลูกค้า Patch Linux Guest ที่ติดตั้งเอง",
    "Managing customer encryption key policies|Hypervisor|Guest operating system|Defining data-access permissions",
    "2",
    "Guest operating system คือ OS ภายใน EC2 ที่ลูกค้าต้อง Patch; Hypervisor เป็นชั้นที่ AWS ดูแล; คำถามเน้นขอบเขตที่ลูกค้าต้องรับผิดชอบต่อ Linux Guest"
  ],
  [
    "2.2",
    "A response team must identify which AWS principal used an API to disable logging in an account. Which source provides the historical API calls?",
    "ทีม Incident Response ต้องหาว่า AWS Principal ใดใช้ API ปิด Logging ใน Account ต้องดู Historical API Calls จากไหน",
    "AWS CloudTrail|Amazon CloudWatch|AWS Config|AWS Trusted Advisor",
    "0",
    "CloudTrail เก็บ API Event History และ Caller Identity; CloudWatch เก็บ Metrics/Logs ส่วน Config ติดตาม Resource Configurations"
  ],
  [
    "2.2",
    "An operations team wants an alert when EC2 CPU exceeds a threshold and also wants records of how security-group configurations changed. Which TWO services address these tasks? (Select TWO.)",
    "ทีม Ops ต้องการ Alert เมื่อ EC2 CPU เกิน Threshold และต้องดูประวัติ Security Group Configuration Changes ข้อใดสอง Services รองรับ",
    "AWS Config|AWS CloudTrail|Amazon CloudWatch|AWS Artifact|AWS Trusted Advisor",
    "0,2",
    "CloudWatch ใช้ Metric Alarms ส่วน AWS Config ติดตามการเปลี่ยน Configuration ของ Resource; CloudTrail เน้น Who/When ของ API"
  ],
  [
    "2.2",
    "A procurement auditor needs AWS's published compliance reports for its vendor evidence package. Which service should they access?",
    "Procurement Auditor ต้องการ Published Compliance Reports ของ AWS ใส่ชุดหลักฐาน Vendor ใช้ Service ใด",
    "AWS Artifact|AWS Config|AWS Security Hub|AWS Trusted Advisor",
    "0",
    "AWS Artifact เป็น Portal เอกสาร Compliance ของ AWS ส่วน Config ตรวจ Resource Configuration และ Security Hub รวม Findings"
  ],
  [
    "2.2",
    "A security office needs a single security posture dashboard collecting findings from multiple AWS security products across accounts. Which service fits?",
    "ฝ่าย Security ต้องการ Dashboard เดียวสำหรับ Security Posture ที่รวม Findings จากหลาย AWS Security Products ข้าม Accounts ใช้บริการใด",
    "Amazon GuardDuty|AWS Security Hub|Amazon Inspector|AWS Trusted Advisor",
    "1",
    "Security Hub รวบรวมและจัดลำดับ Security Findings จากบริการต่าง ๆ; GuardDuty/Inspector เป็นบริการตรวจจับเฉพาะ"
  ],
  [
    "2.2",
    "A holding company wants to organize business-unit accounts into OUs and use policies to set account-level guardrails. Which service provides the organizational structure?",
    "บริษัท Holding ต้องแบ่ง AWS Accounts ตาม Business Units เป็น OUs และใช้ Policies กำหนด Guardrails ระดับ Account บริการใดให้โครงสร้างองค์กร",
    "AWS Control Tower|AWS Config|AWS Organizations|AWS Security Hub",
    "2",
    "AWS Organizations จัดบัญชีเป็น Organizations/OUs และ SCPs; Control Tower ช่วยตั้ง Landing Zone บนพื้นฐานนี้"
  ],
  [
    "2.3",
    "A security administrator plans centralized SSO permission sets for workforce identities across many member accounts. Which service provides this model?",
    "Security Admin ต้องกำหนด SSO Permission Sets ให้ Workforce Identities ข้ามหลาย Member Accounts จากศูนย์กลาง ใช้ Service ใด",
    "Amazon Cognito|AWS Organizations|IAM Identity Center|AWS IAM",
    "2",
    "IAM Identity Center จัด Workforce SSO และ Permission Sets; Organizations เน้น Account/OUs ไม่ใช่ Portal สำหรับพนักงาน"
  ],
  [
    "2.3",
    "A background process needs to call an AWS API in another account without keeping a permanent password or long-lived key. Which capability enables temporary sessions?",
    "Background Process ต้องเรียก AWS API ใน Account อื่นโดยไม่ใช้ Password ถาวรหรือ Long-lived Key ความสามารถใดให้ Temporary Sessions",
    "AWS Secrets Manager|IAM Access Analyzer|AWS IAM|IAM Identity Center",
    "2",
    "AWS IAM Roles และ STS AssumeRole อนุญาต Temporary Security Credentials สำหรับ Cross-account Workloads"
  ],
  [
    "2.3",
    "A team must discover credit-card numbers in S3 objects and separately find policies exposing resources to outside principals. Which TWO services fit? (Select TWO.)",
    "ทีมต้องค้นหาเลขบัตรเครดิตใน S3 Objects และตรวจ Policies ที่เปิด Resource ให้ External Principals ข้อใดสองบริการตรงงาน",
    "Amazon Macie|AWS Config|IAM Access Analyzer|Amazon Inspector|AWS Security Hub",
    "0,2",
    "Macie ตรวจ Sensitive Data ใน S3 ส่วน IAM Access Analyzer ตรวจ External Access จาก Policies; Inspector ตรวจ Software Vulnerabilities"
  ],
  [
    "2.3",
    "A company needs fine-grained control over the cryptographic key used to encrypt regulated application data. Which managed AWS service is intended for key management?",
    "บริษัทต้องควบคุม Cryptographic Key อย่างละเอียดเพื่อเข้ารหัส Regulated Application Data ใช้ Managed Service ใดสำหรับ Key Management",
    "AWS Certificate Manager|AWS Secrets Manager|AWS KMS|AWS IAM",
    "2",
    "KMS จัดการ Encryption Keys และ Key Policies; Secrets Manager จัดการ Secrets/Passwords และ ACM ดูแล TLS Certificates"
  ],
  [
    "2.3",
    "An application uses a database password that must be stored securely and periodically rotated without hard-coding it in source code. Which service addresses this?",
    "Application ใช้ Database Password ที่ต้องเก็บ Secure และ Rotate เป็นระยะโดยไม่ฝังใน Source Code ใช้ Service ใด",
    "AWS KMS|AWS Secrets Manager|IAM Access Analyzer|AWS Certificate Manager",
    "1",
    "Secrets Manager ช่วยจัดเก็บและหมุนเวียน Database Credentials ต่างจาก KMS ที่เป็น Cryptographic Key Management"
  ],
  [
    "2.4",
    "A team wants to find known vulnerable dependencies in ECR container images before those images are deployed. Which service should be enabled?",
    "ทีมต้องการค้นหา Known Vulnerable Dependencies ใน ECR Container Images ก่อน Deploy ใช้ Service ใด",
    "Amazon Inspector|Amazon GuardDuty|Amazon Detective|AWS Security Hub",
    "0",
    "Inspector ตรวจ Package Vulnerabilities/CVEs ใน Workloads และ ECR Images ที่รองรับ; GuardDuty ตรวจ Threat Activity"
  ],
  [
    "2.4",
    "A public API is targeted by large-scale traffic flooding intended to exhaust network capacity. Which service focuses on DDoS protection?",
    "Public API ถูก Traffic Flooding ขนาดใหญ่เพื่อทำให้ Network Capacity เต็ม บริการใดเน้น DDoS Protection",
    "AWS WAF|AWS Shield|AWS Firewall Manager|Amazon GuardDuty",
    "1",
    "AWS Shield ช่วยป้องกัน DDoS; WAF กรอง Application-layer Requests อย่าง SQLi/XSS"
  ],
  [
    "2.4",
    "A website owner wants to block HTTP requests that match managed rules for malicious URL patterns before they reach an ALB. Which service does the filtering?",
    "เจ้าของเว็บต้อง Block HTTP Requests ตาม Managed Rules ที่ตรวจ Malicious URL Patterns ก่อนถึง ALB Service ใดทำ Filtering",
    "AWS WAF|AWS Firewall Manager|AWS Shield|AWS Security Hub",
    "0",
    "WAF ใช้ Web ACL/Rules กรอง HTTP(S) Requests ที่มาถึง Web Resources; Firewall Manager จัด Policies ข้าม Accounts"
  ],
  [
    "2.4",
    "After GuardDuty raises a finding, an analyst wants to reconstruct relationships between affected AWS entities and visualize the incident. Which service supports the investigation?",
    "หลัง GuardDuty แจ้ง Finding Analyst ต้องย้อนความสัมพันธ์ระหว่าง AWS Entities ที่เกี่ยวข้องและ Visualize Incident Service ใดช่วย Investigate",
    "Amazon Detective|Amazon Inspector|AWS Security Hub|Amazon Macie",
    "0",
    "Detective ช่วย Investigate Threats ด้วย Entity Relationships/Timelines; Inspector ตรวจ CVEs และ Security Hub รวม Findings"
  ]
]);
})();
