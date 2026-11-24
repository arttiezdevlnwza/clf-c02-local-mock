(() => {
 const rows=window.LOCAL_SET_12_ROWS=window.LOCAL_SET_12_ROWS||[];
 rows.push(...[
  [
    "2.1",
    "A customer creates an EC2 instance from a Linux image and never applies its operating-system security updates. Under shared responsibility, which component did the customer neglect?",
    "ลูกค้าสร้าง Linux EC2 แล้วไม่ลง Security Updates หน้าที่ที่ลูกค้าละเลยคือ Component ใด",
    "Guest operating system|AWS|Hypervisor|AWS-owned physical servers",
    "0",
    "ลูกค้า EC2 ต้อง Update Guest OS ของตนเอง AWS จัดการ Underlying Hosts/Hypervisor ไม่ใช่ Patch OS ของ EC2 ที่ลูกค้าควบคุม"
  ],
  [
    "2.1",
    "A team wants to move its self-managed MySQL database off EC2 so the provider handles the managed database infrastructure, routine backups, and software maintenance. Which service fits?",
    "ทีมต้องย้าย MySQL ที่ติดตั้งเองบน EC2 เพื่อให้ AWS ดูแล Managed Database Infrastructure, Backups และ Maintenance ควรใช้บริการใด",
    "Amazon RDS|Amazon EC2|AWS DMS|AWS License Manager",
    "0",
    "Amazon RDS เป็น Managed Relational Database Service ที่ช่วยลดงานดูแลฐานข้อมูลและ Infrastructure ส่วน EC2 ยังต้องบริหาร Guest OS/DB เอง"
  ],
  [
    "2.1",
    "A serverless function processes confidential customer information. Which TWO decisions still belong to the customer? (Select TWO.)",
    "Lambda Function ประมวลผลข้อมูลลูกค้าที่อ่อนไหว การตัดสินใจสองอย่างใดยังคงเป็นหน้าที่ลูกค้า",
    "Repair hardware in an AWS data center|Patch the Lambda hypervisor|Define access permissions for the function|Classify and protect customer information|Replace failed AWS networking switches",
    "2,3",
    "ลูกค้ากำหนด IAM Access Permissions และจัดชั้น/ป้องกันข้อมูล ส่วน AWS ดูแล Physical Hardware, Network Infrastructure และ Hypervisor ที่บริการจัดการ",
    [
      "Physical Hardware ของ AWS เป็น AWS Responsibility",
      "AWS จัดการ Host Virtualization ของ Lambda",
      "IAM Execution Role/Permissions ยังเป็นความรับผิดชอบทีม App",
      "ลูกค้าต้องควบคุมข้อมูลและการเข้าถึงตามความอ่อนไหว",
      "AWS Network Devices เป็น AWS Infrastructure"
    ]
  ],
  [
    "2.1",
    "A company uses S3 as a managed data store. Which party selects whether individual object downloads should be allowed for external collaborators?",
    "บริษัทเก็บไฟล์ใน S3 แล้วต้องตั้ง Bucket/Object Permissions ให้ External Collaborators อ่านได้หรือไม่ ใครเป็นผู้ตัดสินใจ",
    "AWS Shield|AWS|The customer|AWS Artifact",
    "2",
    "ลูกค้าควบคุม S3 Resource Policies, Identity Permissions และ Data Classification ของตนเอง ขณะที่ AWS ดูแล Storage Infrastructure"
  ],
  [
    "2.2",
    "An incident responder asks who invoked a particular DeleteBucket API request yesterday, including the principal and timestamp. Which service contains AWS API activity records?",
    "Incident Responder ต้องรู้ว่าใครเรียก DeleteBucket API เมื่อวานพร้อม Principal และ Timestamp บริการใดบันทึก API Activity",
    "AWS CloudTrail|AWS Config|Amazon CloudWatch|AWS Audit Manager",
    "0",
    "CloudTrail บันทึก Who/What/When ของ AWS API Actions ส่วน AWS Config เน้นสถานะ/History ของ Resource Configuration และ CloudWatch ดู Metrics/Logs"
  ],
  [
    "2.2",
    "An engineer must detect when public-read settings on a storage resource drift away from an approved rule, not merely identify an API caller. Which service is the strongest fit?",
    "Engineer ต้องตรวจว่า Resource เปิด Public Read ผิด Config Rule หรือไม่ ไม่ใช่แค่ค้นคนเรียก API ควรใช้บริการใด",
    "AWS CloudTrail|AWS Config|AWS Artifact|AWS Trusted Advisor",
    "1",
    "Config ประเมิน Resource Configurations กับ Desired Rules และ History ต่างจาก CloudTrail ที่เน้น Who Called API"
  ],
  [
    "2.2",
    "A compliance team wants official AWS audit agreements and downloadable provider certifications, not evidence about its own application configuration. Which service matches?",
    "ทีม Compliance ต้องดาวน์โหลด AWS Provider Reports/Agreements ไม่ได้เก็บ Evidence ของ App ตัวเอง ควรใช้บริการใด",
    "AWS CloudTrail|AWS Artifact|AWS Audit Manager|AWS Config",
    "1",
    "Artifact เป็นแหล่งรายงาน/เอกสาร Compliance ของ AWS ส่วน Audit Manager ช่วยรวบรวม Assessment Evidence จากลูกค้า"
  ],
  [
    "2.2",
    "Which TWO controls directly protect information at rest and in transit for an application? (Select TWO.)",
    "เลือกสองมาตรการที่ปกป้องข้อมูลระหว่างจัดเก็บและระหว่างส่งผ่าน Network ของ Application โดยตรง",
    "Encrypt stored objects using managed keys|Disable application monitoring|Enable only a cost-allocation tag|Enforce TLS for client connections|Use only a larger instance size",
    "0,3",
    "Encryption at rest ปกป้องข้อมูลที่เก็บ ส่วน TLS/HTTPS ปกป้องข้อมูลระหว่างส่งผ่าน Network ไม่เกี่ยวกับ Billing Tags หรือ Instance Size",
    [
      "เข้ารหัส Stored Data ด้วย Keys ที่จัดการอย่างเหมาะสม",
      "ปิด Monitoring ไม่เพิ่ม Data Protection",
      "Tag ใช้จัดค่าใช้จ่าย ไม่ได้เข้ารหัสข้อมูล",
      "TLS ทำ Encryption in transit ระหว่าง Client กับ Endpoint",
      "ขยาย Instance Size ไม่ใช่การเข้ารหัส"
    ]
  ],
  [
    "2.2",
    "A bank's policy requires customer-controlled dedicated hardware security modules rather than a general managed key service. Which service aligns most directly with that condition?",
    "นโยบายธนาคารบังคับให้ใช้ Dedicated Hardware Security Modules ที่ลูกค้าควบคุม ไม่ใช่เพียง Managed Key Service ทั่วไป ควรเลือกอะไร",
    "AWS KMS|AWS Certificate Manager|AWS CloudHSM|AWS Secrets Manager",
    "2",
    "CloudHSM ให้ลูกค้าควบคุม HSMs สำหรับ Cryptographic Operations ส่วน KMS เป็น Managed Encryption Key Service"
  ],
  [
    "2.2",
    "A security program asks whether a healthcare workload can process regulated patient data merely because the AWS infrastructure has compliance reports. Which TWO checks are still necessary? (Select TWO.)",
    "โครงการ Healthcare ต้องตรวจว่าประมวลผลข้อมูลผู้ป่วยบน AWS ได้ถูกต้องหรือไม่ แม้ AWS มี Compliance Reports สองสิ่งใดยังต้องทำ",
    "Assume AWS reports automatically certify the application|Implement required customer-side controls|Verify the relevant service eligibility and AWS agreements|Assume every AWS service supports regulated health data|Use a free support plan as proof of compliance",
    "1,2",
    "ต้องตรวจ Service Eligibility/Agreements ที่เกี่ยวข้องและดำเนิน Customer-side Controls; AWS Provider Attestation ไม่รับรอง Application ของลูกค้าอัตโนมัติ",
    [
      "ผิด: Provider Report ไม่รับรอง Application อัตโนมัติ",
      "Customer Compliance/Configuration/Access Controls ยังเป็นหน้าที่ลูกค้า",
      "ต้องตรวจข้อกำหนดบริการและเอกสารข้อตกลงสำหรับ Regulated Workload",
      "ผิด: Service Eligibility ไม่ได้เท่ากันทุกบริการ",
      "ผิด: Support Plan ไม่ใช่ใบรับรอง Compliance"
    ]
  ],
  [
    "2.3",
    "A Windows-heavy enterprise wants a managed directory compatible with Microsoft Active Directory for user authentication. Which AWS service is designed for directory needs?",
    "องค์กรใช้ Windows มากและต้องการ Managed Directory แบบ Active Directory สำหรับ Authentication ควรใช้บริการใด",
    "AWS Directory Service|IAM Identity Center|Amazon Cognito|AWS Organizations",
    "0",
    "Directory Service จัด Managed Microsoft AD/Directory Options ส่วน Identity Center จัด Workforce Access/SSO แต่ไม่แทน Directory Infrastructure ทุกกรณี"
  ],
  [
    "2.3",
    "An IAM administrator wants to identify overly broad external trust policies and access that has gone unused. Which AWS tool directly evaluates these permissions?",
    "IAM Admin ต้องตรวจ External Trust Policies ที่เปิดกว้างและสิทธิ์ที่ไม่ใช้งาน ควรใช้บริการใดช่วยวิเคราะห์",
    "IAM Access Analyzer|AWS CloudTrail|AWS Config|Amazon Inspector",
    "0",
    "IAM Access Analyzer วิเคราะห์ External/Unused Access และ IAM Policies เพื่อช่วย Least Privilege ส่วน CloudTrail บันทึก Activity ที่เกิดจริง"
  ],
  [
    "2.3",
    "A security team wants the root user account protected even if its password leaks. Which TWO practices best reduce risk? (Select TWO.)",
    "ทีม Security ต้องป้องกัน Root User แม้ Password รั่ว สองแนวทางใดช่วยลดความเสี่ยงได้ตรงที่สุด",
    "Create permanent root access keys for automation|Share the root password between admins|Enable MFA on the root account|Avoid routine work using the root user|Disable account audit trails",
    "2,3",
    "Root User ต้องเปิด MFA และหลีกเลี่ยงใช้ประจำ ให้ใช้ Roles/Users สำหรับงานปกติ ไม่ควร Share Password หรือสร้าง Root Keys เพื่อ Automation",
    [
      "ผิด: Root Access Keys ถาวรเสี่ยงสูง ไม่เหมาะ Automation",
      "ผิด: Shared Root Password เพิ่มความเสี่ยงและลด Accountability",
      "MFA เพิ่มปัจจัยยืนยันตัวตนหาก Password รั่ว",
      "ลดการใช้ Root เฉพาะงานที่จำเป็นต้องใช้สิทธิ์สูงสุด",
      "ผิด: ปิด Audit Trails ทำให้ติดตามเหตุการณ์ยาก"
    ]
  ],
  [
    "2.3",
    "An SCP allows an EC2 action, but the developer role has no applicable IAM allow permission. Which statement about the role's access is correct?",
    "SCP ไม่ห้าม EC2 Action แต่ Developer Role ไม่มี IAM Allow Policy ที่ใช้ได้ ข้อความใดสรุปสิทธิ์ของ Role ได้ถูก",
    "The role still needs an applicable IAM permission grant|The SCP itself grants access to the role|Every AWS account in the organization shares IAM role rights|The presence of Control Tower automatically permits the EC2 API",
    "0",
    "SCP ไม่ได้ Grant Permission; ต้องมี Applicable IAM/Resource-based Allow และไม่ถูก Explicit Deny Role จึงจะใช้ EC2 API Action ได้",
    [
      "ถูก: SCP เป็น Boundary ไม่ได้ให้ Allow สิทธิ์เอง",
      "ผิด: SCP Allow ไม่ใช่ Permission Grant ให้ Principal",
      "ผิด: Accounts ยังแยก IAM/Root Identity Boundaries",
      "ผิด: Control Tower ไม่ได้ Grant ทุก EC2 API Action"
    ]
  ],
  [
    "2.3",
    "A consumer mobile app needs users to register themselves and sign in using social identity providers. Which service is appropriate for end-user authentication?",
    "Mobile App สำหรับลูกค้าต้องการ Self Sign-up และ Social Provider Login ใช้บริการใด",
    "AWS IAM|IAM Identity Center|AWS Directory Service|Amazon Cognito",
    "3",
    "Cognito รองรับ App Consumer Sign-up/Sign-in และ Federation ส่วน IAM Identity Center เน้น Workforce AWS Account Access"
  ],
  [
    "2.4",
    "A company wants to manage baseline WAF rules across a large AWS Organizations environment. Which service governs their rollout centrally?",
    "บริษัทต้องการใช้ Baseline WAF Rules ข้าม AWS Accounts ใน Organization และบริหาร Rollout จากส่วนกลาง บริการใด",
    "AWS WAF|AWS Shield|AWS Security Hub|AWS Firewall Manager",
    "3",
    "Firewall Manager เป็น Central Security Policy Management สำหรับหลาย Accounts ส่วน WAF กรอง Web Requests ตาม Rules"
  ],
  [
    "2.4",
    "A security engineer needs a service to identify software vulnerabilities in ECR container images before deployment. Which AWS service produces these findings?",
    "Security Engineer ต้องตรวจ Software CVEs ใน ECR Container Images ก่อน Deploy บริการใดสร้าง Vulnerability Findings",
    "Amazon Detective|Amazon Macie|Amazon GuardDuty|Amazon Inspector",
    "3",
    "Inspector ตรวจ Workload/Container Image Vulnerabilities ส่วน GuardDuty ตรวจ Threat Behavior, Detective ใช้ Investigate และ Macie จัด Sensitive Data ใน S3"
  ],
  [
    "2.4",
    "An organization detects a suspected compromise and needs to correlate IAM entities, IP addresses, and findings across time. Which security investigation service helps analyze the relationships?",
    "องค์กรพบ Suspicious Compromise และอยากเชื่อมโยง IAM Entities, IP Addresses และ Findings ตามเวลา เครื่องมือ Investigation ใด",
    "AWS Config|AWS Security Hub|Amazon GuardDuty|Amazon Detective",
    "3",
    "Detective ให้ Investigation Context และ Relationship Analysis หลังมี Alerts ส่วน GuardDuty ตรวจ Threats และ Security Hub รวบรวม Findings"
  ],
  [
    "2.4",
    "A platform team wants member accounts to share a supported centrally owned AWS resource without duplicating it in each account. Which service handles controlled resource sharing?",
    "Platform Team ต้องแชร์ AWS Resource ที่รองรับจากบัญชีกลางให้ Member Accounts โดยไม่ต้องสร้างใหม่ทุก Account ใช้บริการใด",
    "AWS Control Tower|AWS Organizations|IAM Access Analyzer|AWS Resource Access Manager",
    "3",
    "AWS RAM แชร์ AWS Resources ที่รองรับข้าม Accounts อย่างมีขอบเขต ส่วน Organizations จัดโครงสร้าง Accounts/OUs และ Access Analyzer ตรวจ External Permissions"
  ]
]);
})();
