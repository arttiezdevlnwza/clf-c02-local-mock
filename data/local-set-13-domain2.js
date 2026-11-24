(() => {
 const rows=window.LOCAL_SET_13_ROWS=window.LOCAL_SET_13_ROWS||[];
 rows.push(...[
  [
    "2.1",
    "A startup uploads confidential files to S3. Which TWO tasks remain its responsibility even though AWS secures the storage infrastructure? (Select TWO.)",
    "Startup เก็บไฟล์ลับใน S3 แม้ AWS ดูแล Storage Infrastructure แล้ว สองสิ่งใดยังเป็นความรับผิดชอบของ Startup",
    "Set object-access permissions for authorized roles|Classify the data according to sensitivity|Replace damaged storage devices in AWS racks|Provide physical data-center security|Patch the S3 service hypervisor",
    "0,1",
    "ลูกค้าต้องกำหนด Data Classification และ Object Access Permissions ส่วน AWS ดูแล S3 Physical/Managed Infrastructure",
    [
      "ถูก: ลูกค้ากำหนด Resource Permissions ของตนเอง",
      "ถูก: เจ้าของข้อมูลกำหนด Sensitive Data Handling",
      "ผิด: AWS ดูแล Physical Disks ใน Data Center",
      "ผิด: AWS ดูแล Physical Security",
      "ผิด: Managed Service Infrastructure เป็นหน้าที่ AWS"
    ]
  ],
  [
    "2.1",
    "A security bulletin lists a vulnerable Linux package inside a customer's EC2 guest OS. Which party is responsible for installing the patch?",
    "ประกาศ Security ระบุช่องโหว่ Linux Package ใน EC2 Guest OS ของลูกค้า ใครต้องติดตั้ง Patch",
    "Amazon Inspector|The customer|AWS|AWS Support Center",
    "1",
    "ลูกค้า EC2 Patch Guest OS/Installed Packages ของตน ส่วน AWS ดูแล Underlying Host/Hypervisor"
  ],
  [
    "2.1",
    "A team migrates container tasks from EC2 hosts it maintained to AWS Fargate. Which compute offering removes host provisioning and maintenance tasks?",
    "ทีมย้าย Containers จาก EC2 Hosts ที่ดูแลเองมาใช้ Fargate Compute ใดช่วยลดภาระ Provision/Patch Host",
    "AWS IAM|AWS Fargate|Amazon ECS|AWS Organizations",
    "1",
    "Fargate จัด Serverless Container Compute ไม่ต้องดูแล EC2 Hosts ขณะที่ ECS ทำ Orchestration และลูกค้ายังดูแล App/IAM"
  ],
  [
    "2.1",
    "An RDS administrator assumes AWS will also decide which SQL users can read confidential tables. Who actually configures those logical access permissions?",
    "ผู้ดูแล RDS คิดว่า AWS จะจัดสิทธิ์ SQL Users ให้อัตโนมัติ ใครต้องกำหนด Logical Permissions ของข้อมูล",
    "Hypervisor|AWS|The customer|AWS-owned physical servers",
    "2",
    "ลูกค้าตั้ง Database Users/Privileges และ Data Security แม้ RDS เป็น Managed Service"
  ],
  [
    "2.2",
    "A company obtains an AWS provider compliance report. Does that alone certify the customer's application configuration? Which party must still implement application controls?",
    "องค์กรได้ AWS Provider Compliance Report แล้ว App Configurations จะได้รับ Certified อัตโนมัติหรือไม่ ใครยังต้องทำ Customer Controls",
    "AWS|AWS Artifact|The customer|AWS Audit Manager",
    "2",
    "AWS Provider Attestation ไม่ครอบคลุม Customer Application ทั้งหมด ลูกค้ายังต้องปฏิบัติตาม Applicable Controls"
  ],
  [
    "2.2",
    "An auditor needs provider certification documents while a second team needs ongoing assessment evidence from its own account. Which TWO AWS services fit? (Select TWO.)",
    "Auditor ต้องดาวน์โหลด AWS Reports ส่วนอีกทีมต้องเก็บ Evidence ต่อเนื่องของ AWS Account ตน สองบริการใดตรง",
    "AWS Audit Manager|AWS CloudTrail|AWS Artifact|AWS Config|AWS Trusted Advisor",
    "0,2",
    "Artifact ให้ AWS Provider Reports/Agreements ส่วน Audit Manager เก็บหลักฐานสำหรับ Customer Audit Assessment"
  ],
  [
    "2.2",
    "A company needs managed SSL/TLS certificates for its Application Load Balancer, not keys for encrypting objects at rest. Which service should it choose?",
    "บริษัทต้องการ Managed SSL/TLS Certificates สำหรับ ALB ไม่ใช่ Keys เข้ารหัส S3 Objects ควรใช้บริการใด",
    "AWS Certificate Manager|AWS CloudHSM|AWS KMS|AWS Secrets Manager",
    "0",
    "ACM บริหาร TLS Certificates/Renewal สำหรับบริการที่รองรับ ส่วน KMS จัด Encryption Keys"
  ],
  [
    "2.2",
    "A team must check when a bucket's public access configuration changed, rather than only find who called an API. Which service tracks resource configuration history?",
    "ทีมต้องดู History ของ Bucket Public Access Settings ไม่ใช่แค่ใครเรียก API บริการใดติดตาม Resource Configuration",
    "AWS Config|Amazon CloudWatch|AWS CloudTrail|AWS Security Hub",
    "0",
    "Config เก็บ Configuration History/Rules ส่วน CloudTrail บันทึก API Events"
  ],
  [
    "2.2",
    "An application needs alarms for EC2 CPU and error events from application logs. Which service collects these workload signals?",
    "Application ต้องทำ Alarms จาก EC2 CPU และ Application Error Logs ควรใช้บริการใด",
    "AWS CloudTrail|AWS Health Dashboard|Amazon CloudWatch|AWS Config",
    "2",
    "CloudWatch เก็บ Metrics/Logs/Alarms ส่วน CloudTrail เน้น API Audit Activity และ Health Dashboard แจ้ง AWS Events"
  ],
  [
    "2.2",
    "A hospital plans regulated data processing. Which TWO checks remain necessary besides finding an AWS compliance logo? (Select TWO.)",
    "โรงพยาบาลจะประมวลผล Regulated Data บน AWS นอกจากเห็น Compliance Logo แล้ว ยังต้องตรวจสองสิ่งใด",
    "Assume all services are eligible|Treat the AWS support tier as certification|The customer's safeguards and permissions|The service's eligibility and applicable agreements|Assume an edge location guarantees compliance",
    "2,3",
    "ต้องตรวจ Service Eligibility/Agreements และ Customer-side Controls ไม่ใช่สรุปว่า AWS ทุกบริการผ่าน Regulated Compliance ให้เอง",
    [
      "ผิด: ไม่ได้อนุญาตทุกบริการเสมอ",
      "ผิด: Support Tier ไม่ใช่ Compliance Certification",
      "ถูก: ลูกค้าต้องทำ Data/Identity Controls ของตน",
      "ถูก: ตรวจเงื่อนไข Eligibility/Agreements",
      "ผิด: Edge Location ไม่รับรอง Compliance"
    ]
  ],
  [
    "2.3",
    "A company needs AWS account SSO for its employees and customer login for a shopping app. Which TWO services have the distinct identity responsibilities? (Select TWO.)",
    "บริษัทต้องการ Employee SSO เข้า AWS Accounts กับ Customer Login ของ Shopping App สองบริการใดทำหน้าที่แยกกัน",
    "Amazon Cognito|IAM Identity Center|AWS Organizations|AWS IAM|AWS Directory Service",
    "0,1",
    "Identity Center จัด Workforce SSO ส่วน Cognito ดู App End-user Sign-up/Sign-in"
  ],
  [
    "2.3",
    "An application on EC2 must access S3 with temporary AWS credentials instead of long-lived keys embedded in code. Which service supplies roles for this?",
    "EC2 Application ต้องเข้า S3 ด้วย Temporary Credentials แทน Hard-coded Access Keys ใช้ Service ใดกำหนด Roles",
    "AWS Secrets Manager|AWS IAM|AWS KMS|IAM Access Analyzer",
    "1",
    "AWS IAM Roles via EC2 Instance Profile ให้ Temporary Credentials พร้อม Least-privilege Policies"
  ],
  [
    "2.3",
    "A team wants to identify bucket policies granting access to principals outside its organization. Which tool analyzes this resource access?",
    "ทีมต้องหา Bucket Policies ที่เปิด External Principals ให้เข้าถึงทรัพยากร ควรใช้ Tool ใด",
    "AWS IAM|AWS CloudTrail|AWS Config|IAM Access Analyzer",
    "3",
    "Access Analyzer วิเคราะห์ External/Public Resource Access จาก Policies ต่างจาก Config/CloudTrail"
  ],
  [
    "2.3",
    "A platform team wants to share supported VPC resources with another account without sharing its root user or IAM accounts. Which service is designed for resource sharing?",
    "Platform Team ต้องแชร์ VPC Resources ที่รองรับไปอีก AWS Account โดยไม่แชร์ Root/IAM Credentials ใช้บริการใด",
    "AWS Control Tower|AWS Organizations|AWS IAM|AWS Resource Access Manager",
    "3",
    "AWS RAM แชร์ Supported AWS Resources ข้าม Accounts ตามเงื่อนไข ส่วน Organizations จัด Account Governance"
  ],
  [
    "2.3",
    "Temporary contractors must use existing corporate identities and short-lived AWS permissions. Which TWO practices are preferable? (Select TWO.)",
    "Contractors ชั่วคราวต้องใช้ Existing Corporate Identities และ AWS Permissions แบบ Short-lived สองวิธีใดเหมาะ",
    "Assume IAM roles for temporary credentials|Share the AWS root user|Embed long-lived access keys in images|Reuse one IAM password across teams|Federate workforce identities",
    "0,4",
    "Federation ใช้ External IdP และ IAM Roles ให้ Temporary Credentials ปลอดภัยกว่าการฝัง/แชร์ Long-lived Secrets",
    [
      "ถูก: IAM Roles ให้ Temporary Credentials",
      "ผิด: ไม่ควร Share Root",
      "ผิด: Long-lived Keys ใน Images เสี่ยงรั่ว",
      "ผิด: Shared Password ลด Accountability",
      "ถูก: Federation ใช้ Identity Provider เดิม"
    ]
  ],
  [
    "2.4",
    "A public API is receiving requests with a known malicious URL path. Which security service can match the path and block those requests?",
    "Public API ถูกเรียก Malicious URL Path Pattern ต้องตั้ง Rule Block HTTP Requests ผ่านบริการใด",
    "AWS Shield|Amazon GuardDuty|AWS Firewall Manager|AWS WAF",
    "3",
    "WAF ทำ HTTP Request Filtering ตาม Path/Headers ต่างจาก Shield ที่ป้องกัน DDoS และ Firewall Manager ที่จัด Policy รวม"
  ],
  [
    "2.4",
    "Network-level DDoS traffic targets a global app's public endpoints. Which AWS service specifically protects against such floods?",
    "Application ระดับโลกโดน Network-level DDoS Floods ที่ Public Endpoints บริการใดป้องกันโจมตีนี้",
    "AWS WAF|Amazon Detective|AWS Security Hub|AWS Shield",
    "3",
    "Shield ป้องกัน DDoS Flooding ส่วน WAF ใช้ Web ACL Rules และ Detective ช่วยสืบสวน"
  ],
  [
    "2.4",
    "An EC2 fleet has packages with known CVEs. Which scanning service identifies these software vulnerabilities?",
    "EC2 Fleet มี Packages ที่อาจมี Known CVEs บริการใดสแกน Vulnerabilities",
    "Amazon Macie|Amazon Detective|Amazon GuardDuty|Amazon Inspector",
    "3",
    "Inspector ตรวจ Software Vulnerabilities/CVEs ส่วน GuardDuty ตรวจ Suspicious Behavior"
  ],
  [
    "2.4",
    "A SOC needs to combine findings from GuardDuty, Inspector, and Macie across accounts into one view. Which service aggregates them?",
    "SOC ต้องรวม Security Findings จาก GuardDuty, Inspector และ Macie ของหลาย Accounts ในมุมมองเดียว ใช้บริการใด",
    "Amazon GuardDuty|AWS Firewall Manager|Amazon Detective|AWS Security Hub",
    "3",
    "Security Hub รวม/Normalize Findings ข้าม Services/Accounts ส่วน Detective Investigate Specific Findings"
  ]
]);
})();
