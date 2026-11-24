(() => {
 const rows=window.LOCAL_SET_11_ROWS=window.LOCAL_SET_11_ROWS||[];
 rows.push(...[
  [
    "2.1",
    "A team runs a relational database inside a self-managed EC2 instance. Which TWO security maintenance tasks remain the customer's responsibility? (Select TWO.)",
    "ทีมติดตั้ง Relational Database เองบน EC2 หน้าที่ด้าน Security Maintenance สองข้อใดยังเป็นของลูกค้า",
    "Replace AWS physical hosts|Patch the guest operating system|Secure AWS data center entrances|Patch the database engine|Maintain the AWS hypervisor",
    "1,3",
    "ลูกค้าต้อง Patch Guest OS และ Database Engine ที่ติดตั้งเองบน EC2 ส่วน AWS ดูแล Physical Hosts, Hypervisor และ Data Center Security",
    [
      "AWS ดูแล Physical Server Infrastructure",
      "ต้อง Update ระบบปฏิบัติการของ EC2 เอง",
      "AWS รับผิดชอบ Physical Security ของศูนย์ข้อมูล",
      "Database Engine ที่ติดตั้งเองเป็นความรับผิดชอบของผู้ใช้",
      "AWS จัดการ Virtualization Layer ของ EC2"
    ]
  ],
  [
    "2.1",
    "An Amazon RDS user wants to know who replaces malfunctioning physical storage devices beneath the database. Which party owns this activity?",
    "ผู้ใช้ Amazon RDS สงสัยว่าใครเปลี่ยนอุปกรณ์ Storage จริงที่เสียใต้ Managed Database หน้าที่นี้เป็นของใคร",
    "AWS Support Center|The customer|AWS|AWS Systems Manager",
    "2",
    "AWS ดูแล Physical Hardware และ Underlying Managed Infrastructure ของ RDS ขณะที่ลูกค้าดูแล Data, Schema และ Access Permissions"
  ],
  [
    "2.1",
    "An application is moved from EC2 into AWS Lambda. Which responsibility is still controlled by the application team?",
    "ย้าย Application จาก EC2 มา AWS Lambda แล้ว หน้าที่ใดยังคงเป็นของทีม Application แม้ไม่ต้อง Patch Host OS",
    "Hypervisor|AWS-owned physical servers|AWS IAM|Guest operating system",
    "2",
    "ทีม Application ยังต้องกำหนด IAM Execution Roles และ Permissions ของ Lambda ส่วน AWS ดูแล Host, Guest Runtime Environment ตาม Managed Service Boundaries"
  ],
  [
    "2.1",
    "A hospital stores encrypted documents in S3 and decides which clinicians may view each record. Who remains responsible for this access policy?",
    "โรงพยาบาลเก็บเอกสารเข้ารหัสใน S3 และเป็นผู้กำหนดว่าแพทย์คนไหนอ่านได้ ใครรับผิดชอบ Access Policy นี้",
    "AWS|The customer|Amazon Inspector|AWS Artifact",
    "1",
    "ลูกค้าต้องจัดการ Data Classification และ Permissions ของ Objects ตนเอง แม้ AWS ดูแล Physical Storage Infrastructure"
  ],
  [
    "2.2",
    "An auditor downloads an AWS SOC report and assumes the company's application is automatically certified as compliant. Which conclusion is correct?",
    "Auditor ดาวน์โหลด AWS SOC Report แล้วคิดว่า Application ขององค์กรผ่าน Compliance อัตโนมัติ ข้อสรุปใดถูกต้อง",
    "AWS Artifact|AWS Audit Manager|The customer|AWS Trusted Advisor",
    "2",
    "AWS Report ยืนยัน Controls ในขอบเขตผู้ให้บริการ ไม่รับรอง Customer Application/Configurations โดยอัตโนมัติ ลูกค้าต้องทำ Compliance Controls ของตน"
  ],
  [
    "2.2",
    "A compliance team needs an AWS service to continuously collect evidence about account activity and resource configurations for audit assessments. Which service was built for this process?",
    "ทีม Compliance ต้องเก็บ Evidence จาก Activity และ Resource Configurations ของ AWS Accounts อย่างต่อเนื่องเพื่อเตรียม Audit ควรใช้บริการใด",
    "AWS Artifact|AWS CloudTrail|AWS Audit Manager|AWS Config",
    "2",
    "AWS Audit Manager ช่วยรวบรวม/จัดระเบียบ Audit Evidence ส่วน Artifact ให้รายงานการรับรองของ AWS, CloudTrail เก็บ API Events และ Config ติดตาม Resources"
  ],
  [
    "2.2",
    "A regulated application needs proof that its data remains in the permitted geographic area. Which deployment-level AWS concept should be checked first?",
    "แอปที่อยู่ภายใต้กฎต้องเก็บข้อมูลในพื้นที่ภูมิศาสตร์ที่กำหนด องค์ประกอบระดับ Deployment ใดเป็นตัวเลือกแรกที่ต้องตรวจ",
    "Edge location|AWS Region|Availability Zone|Multi-AZ deployment",
    "1",
    "เลือก AWS Region ที่สอดคล้องกับข้อกำหนด Data Residency ก่อน เพราะ AZ และ Subnets อยู่ภายใน Region ไม่ใช่ตัวระบุพื้นที่ภูมิศาสตร์หลัก"
  ],
  [
    "2.2",
    "A company has specific regulatory requirements to operate cryptographic keys in dedicated hardware under its control. Which AWS security service is designed for that model?",
    "บริษัทต้องการควบคุม Cryptographic Keys ภายใน Dedicated Hardware Security Modules ตามข้อกำหนดเฉพาะ ใช้บริการใด",
    "AWS Certificate Manager|AWS CloudHSM|AWS KMS|AWS Secrets Manager",
    "1",
    "AWS CloudHSM ให้ Dedicated HSMs ที่ลูกค้าควบคุมสำหรับ Cryptographic Operations ส่วน KMS เน้น Managed Keys และ ACM เน้น TLS Certificates"
  ],
  [
    "2.2",
    "A company must identify who changed a security group and separately whether its current rules comply with a policy. Which TWO services are the primary match? (Select TWO.)",
    "บริษัทต้องรู้ว่าใครเปลี่ยน Security Group และตรวจว่าการตั้งค่าปัจจุบันตรง Security Policy หรือไม่ ต้องใช้สองบริการใด",
    "AWS CloudTrail|AWS Config|Amazon CloudWatch|AWS Artifact|AWS Security Hub",
    "0,1",
    "CloudTrail ระบุ Who/When ของ API Activity ส่วน Config เก็บ Resource Configuration History และประเมิน Compliance Rules ไม่ใช่ Metric Monitoring อย่างเดียว"
  ],
  [
    "2.2",
    "A web application needs clients to send login credentials across the internet without exposing them in transit. What security mechanism should its HTTPS endpoint use?",
    "Web Application ต้องรับ Login Credentials ผ่าน Internet โดยป้องกันการดักอ่านระหว่างส่งข้อมูล ต้องใช้ Security Mechanism ใด",
    "AWS KMS|AWS Certificate Manager|AWS CloudHSM|AWS Secrets Manager",
    "1",
    "AWS Certificate Manager จัดหา/บริหาร TLS Certificates สำหรับ HTTPS ที่เข้ารหัสข้อมูลระหว่างทาง ขณะที่ KMS เน้น Cryptographic Keys สำหรับ Encryption และ Secrets Manager เก็บ Secrets"
  ],
  [
    "2.3",
    "Employees need one sign-in experience across multiple AWS accounts, while customers use a separate application login. Which identity service is specifically for employees?",
    "พนักงานต้องใช้ Sign-in เดียวข้ามหลาย AWS Accounts ส่วนลูกค้ามี Login ของ App แยกต่างหาก Identity Service ใดใช้กับพนักงาน",
    "AWS Organizations|IAM Identity Center|Amazon Cognito|AWS IAM",
    "1",
    "IAM Identity Center ใช้ Workforce SSO และ Permission Sets เพื่อเข้าถึง AWS Accounts ต่างจาก Cognito ที่จัดการ App End Users"
  ],
  [
    "2.3",
    "A third-party workforce identity provider will authenticate staff before they assume short-lived AWS permissions. Which TWO IAM-related capabilities fit? (Select TWO.)",
    "องค์กรใช้ Identity Provider เดิม Login พนักงานแล้วต้องเข้าถึง AWS ด้วยสิทธิ์ชั่วคราว ควรใช้สองความสามารถใด",
    "IAM Identity Center|AWS Secrets Manager|Amazon Cognito|AWS IAM|AWS Organizations",
    "0,3",
    "IAM Identity Center สนับสนุน Federated Workforce SSO ส่วน IAM Roles ให้ Temporary AWS Credentials ตาม Permissions ที่กำหนด"
  ],
  [
    "2.3",
    "An EC2 service writes objects to S3. The security team rejects long-lived access keys embedded in its image. What should be attached to the instance?",
    "EC2 Service ต้องเขียน S3 แต่ห้ามฝัง Long-lived Access Keys ใน Image ต้องกำหนดอะไรให้ Instance",
    "AWS Secrets Manager|AWS KMS|AWS IAM|IAM Access Analyzer",
    "2",
    "ใช้ IAM Role/Instance Profile ให้ EC2 ได้ Temporary Credentials พร้อม S3 Policy ตาม Least Privilege ไม่ใช่ฝัง Static Keys หรือเก็บ Static Keys ใน Secrets Manager"
  ],
  [
    "2.3",
    "A root user rarely signs in, but the company wants a second authentication factor whenever it does. Which security control should be added to that account?",
    "Root User ใช้งานไม่บ่อย แต่ต้องการให้ทุกครั้งที่ Login ต้องยืนยันตัวตนอย่างน้อยอีกหนึ่งปัจจัย ควรเปิดใช้อะไร",
    "AWS IAM|IAM Identity Center|Amazon Cognito|AWS Organizations",
    "0",
    "การเปิด MFA สำหรับ Root User เป็น AWS Account/IAM Security Best Practice ส่วน Identity Center ใช้ Workforce Sign-in ข้าม Accounts ไม่แทนการป้องกัน Root Sign-in"
  ],
  [
    "2.3",
    "A company allows S3 in its organization service control policy, but an application role still has no S3 allow permission. What is the correct interpretation?",
    "องค์กรมี SCP ที่ไม่ได้ห้าม S3 แต่ Application Role ยังไม่มี Allow Policy สำหรับ S3 ควรตีความอย่างไร",
    "AWS Organizations|AWS IAM|IAM Access Analyzer|AWS Control Tower",
    "1",
    "SCP กำหนด Permission Boundary ระดับ Organization ไม่ได้ Grant สิทธิ์เอง Role ยังต้องมี Applicable IAM Allow Policy เพื่อเข้าถึง S3"
  ],
  [
    "2.4",
    "A team wants to apply the same HTTP filtering policy to applications in many member accounts without configuring each Web ACL manually. Which service centrally manages policies?",
    "ทีมต้องใช้ HTTP Filtering Rules เดียวกันกับ Applications ในหลาย AWS Accounts โดยไม่จัดการ Web ACL ทีละบัญชี ใช้บริการใด",
    "AWS WAF|AWS Shield|AWS Firewall Manager|AWS Security Hub",
    "2",
    "Firewall Manager กระจาย/บังคับใช้ Security Policies ข้าม AWS Accounts ส่วน WAF เป็นบริการกรอง HTTP Requests จริง"
  ],
  [
    "2.4",
    "A SOC analyst sees suspicious calls from credentials that may have been stolen. Which service first identifies this threat behavior?",
    "SOC พบการเรียก AWS APIs ที่เหมือน Credentials ถูกขโมยไปใช้ บริการใดตรวจจับ Suspicious Threat Activity เป็นหลัก",
    "Amazon Inspector|AWS Security Hub|Amazon Detective|Amazon GuardDuty",
    "3",
    "GuardDuty ตรวจ Threat Signals/Suspicious Account Behavior ส่วน Detective วิเคราะห์หลักฐานเชื่อมโยงหลังพบ Finding และ Inspector สแกน Vulnerabilities"
  ],
  [
    "2.4",
    "A security team must discover S3 sensitive-data exposure and separately scan EC2 software packages for CVEs. Which TWO services do these distinct tasks? (Select TWO.)",
    "ทีม Security ต้องค้น Sensitive Data ใน S3 และสแกน Software Vulnerabilities บน EC2 แยกเป็นสองหน้าที่ ใช้บริการใดสองตัว",
    "Amazon Detective|Amazon GuardDuty|Amazon Inspector|AWS Security Hub|Amazon Macie",
    "2,4",
    "Macie ตรวจ Sensitive Data ภายใน S3 ส่วน Inspector ตรวจ Workload Vulnerabilities/CVEs ขณะที่ GuardDuty เน้น Suspicious Threat Indicators"
  ],
  [
    "2.4",
    "After a GuardDuty finding, an investigator needs entity relationships and a chronology of suspicious behavior. Which service provides investigation context?",
    "หลัง GuardDuty แจ้ง Finding ผู้สืบสวนต้องดูความสัมพันธ์ Entities และลำดับเหตุการณ์ของพฤติกรรมผิดปกติ ใช้บริการใด",
    "Amazon GuardDuty|AWS Security Hub|AWS Config|Amazon Detective",
    "3",
    "Amazon Detective ใช้ข้อมูลประกอบ Finding เพื่อสืบสวนและเชื่อมโยง Activity/Entities ขณะที่ Security Hub รวม Findings และ GuardDuty ตรวจจับ Threats"
  ]
]);
})();
