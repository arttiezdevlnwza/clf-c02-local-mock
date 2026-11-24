// CLF-C02 Info Library | Set 11–13 coverage: Domain 2 (Tasks 2.1–2.4)
(() => {
  const guide = window.EXAM_FAMILY_GUIDE;
  if (!guide) return;
  const add = (id, rows) => {
    const group = guide.groups.find(g => g.id === id);
    if (!group) throw Error('Info Library group missing: ' + id);
    for (const [name,use,cue,confuse,example] of rows) {
      const item={name,use,cue,confuse,example};
      const index=group.items.findIndex(x=>x.name===name);
      if(index<0) group.items.push(item);
      else Object.assign(group.items[index],item);
    }
  };
  add('shared-responsibility', [
    ['AWS vs Customer Compliance','AWS รับผิดชอบ Provider Controls ตามขอบเขตของ Compliance Reports; Customer ยังต้องทำ Controls ของ Application, Data, Permissions และการตั้งค่าของตนเอง','AWS SOC report ≠ application automatically compliant','AWS Artifact ให้ Provider Reports แต่ไม่ได้รับรอง App ของลูกค้า','ตรวจ Service Eligibility, Agreements และ Customer Controls สำหรับ Healthcare Workloads'],
    ['AWS Lambda Shared Responsibility','AWS จัดการ Hardware/Host/Runtime Infrastructure มากกว่า EC2; ลูกค้ายังควบคุม Code, Dependencies, Data และ IAM Execution Roles','Managed compute ≠ AWS owns your access policy','EC2 ต้อง Patch Guest OS เอง ขณะที่ Lambda ลดงานระดับ Host','ทีมกำหนด IAM Role ให้ Lambda อ่านข้อมูล S3 เท่าที่จำเป็น'],
    ['AWS Fargate Shared Responsibility','AWS ดูแล EC2 Host Capacity และ Underlying Compute ของ Containers; ลูกค้ารับผิดชอบ Images, Application Security, IAM และ Data','No EC2 host management','ECS = Orchestration ไม่ใช่ตัวแทน Compute Infrastructure','รัน ECS Tasks บน Fargate โดยไม่ Patch EC2 Host เอง'],
    ['Amazon RDS Database Access','RDS จัดการงาน Managed Database Infrastructure หลายส่วน แต่ Database Users/SQL Permissions และการปกป้องข้อมูลยังเป็นความรับผิดชอบลูกค้า','Managed RDS ≠ managed app data privileges','AWS ดูแล Physical Hardware/Managed Maintenance แต่ไม่ตัดสินว่าใครอ่าน Orders ได้','เจ้าของระบบกำหนด PostgreSQL Roles และ Grants สำหรับข้อมูลลูกค้า'],
    ['AWS Compliance for Regulated Data','ต้องตรวจว่า AWS Service/Region ที่ใช้เข้าเงื่อนไขด้านกฎหมาย มีข้อตกลงที่เกี่ยวข้อง และมี Customer-side Controls ครบ','Eligibility + agreement + customer safeguards','AWS Service มีรายงาน Compliance ไม่ได้หมายถึงทุก Service/Configuration ใช้กับ Regulated Data ได้','โรงพยาบาลตรวจ HIPAA Eligible Services และข้อตกลงที่ใช้บังคับ']
  ]);
  add('iam-security', [
    ['AWS IAM','สร้างและกำกับ Policies, Roles และ Identities เพื่อกำหนด AWS API Permissions ตาม Least Privilege','EC2 uses S3 without hard-coded keys → IAM Role','Secrets Manager = เก็บ Application Secrets ไม่ใช่ตัวกำหนด Role Permissions','แนบ IAM Role/Instance Profile ให้ EC2 เขียน S3 โดย Temporary Credentials'],
    ['Amazon Cognito','Authentication/Sign-up/Sign-in ของ End Users ใน Web และ Mobile Applications รวมถึง Social/External Identity Provider','Customer signs up to an app','IAM Identity Center = Employee Workforce SSO เข้า AWS Accounts','ลูกค้าลงทะเบียนด้วย Email เพื่อเข้าเว็บร้านค้า'],
    ['AWS Directory Service','ให้บริการ Managed Directory ที่รองรับ Directory/Active Directory Workloads ตามประเภทที่เลือก','Managed Microsoft AD / corporate directory','IAM Identity Center = Workforce AWS Account Access ไม่ใช่ Dedicated Managed AD Directory','Windows Servers ต้องใช้ AD สำหรับ Domain Login'],
    ['AWS Resource Access Manager (AWS RAM)','แชร์ Supported AWS Resources เช่น VPC Subnets ข้าม Accounts โดยยังรักษา Account Identity Boundaries','Share a supported resource across accounts','AWS Organizations = บริหาร Accounts/OUs/SCPs แต่ไม่ใช่ตัวแชร์ Resource ทุกประเภท','บัญชีกลางแชร์ VPC Subnets ไป Member Accounts'],
    ['IAM Access Analyzer','วิเคราะห์ Resource Policies ที่เปิด External/Public Access และช่วยค้นหา Unused Access/ตรวจ Policy เพื่อ Least Privilege','External S3 bucket principal / unused permissions','AWS Config = ติดตาม Configuration; CloudTrail = กิจกรรม API','ตรวจ Bucket Policy ที่อนุญาต Principal นอก Organization'],
    ['AWS Organizations & SCP','Organizations จัดโครงสร้าง Accounts/OUs และ Service Control Policies; SCP กำหนดเพดานสิทธิ์ ไม่ Grant IAM Allow เอง','SCP allows ≠ Role has permission','IAM Policy/Resource Policy ยังคงต้องมี Allow ที่ใช้ได้จริง','SCP ไม่ Deny EC2 แต่ Role ไม่มี IAM Allow จึงเรียก EC2 Action ไม่ได้'],
    ['Root user & MFA','Root User มีสิทธิ์ระดับสูง ควรเปิด MFA และไม่ใช้ Root ในงานประจำหรือสร้าง Permanent Root Keys เพื่อ Automation','Root password leaked → MFA helps','IAM Identity Center SSO สำหรับพนักงาน ไม่ได้ทดแทน Root Security','เข้าบัญชี Root เฉพาะงานจำเป็นและใช้ MFA'],
    ['Workforce Federation & Temporary Credentials','ให้พนักงาน Sign in ผ่าน Existing Identity Provider และ Assume IAM Role เพื่อรับ Temporary AWS Credentials','Existing IdP + employee SSO + short-lived role','Cognito = Customer App Users; Long-lived IAM Keys ไม่เหมาะกับ Temporary Access','Contractor ใช้ Workforce SSO แล้ว Assume Role ชั่วคราว'],
    ['AWS CloudHSM','Dedicated Hardware Security Modules ที่ลูกค้าควบคุมสำหรับ Cryptographic Keys/Operations ตาม Compliance Requirements เฉพาะ','Customer-controlled dedicated HSM hardware','AWS KMS = Managed Key Service ไม่ได้ให้ HSM Ownership Model แบบเดียวกัน','ธนาคารต้องมี HSM แบบ Dedicated สำหรับ Cryptographic Operations'],
    ['AWS Certificate Manager (ACM)','Provision, Manage และ Renew SSL/TLS Certificates สำหรับ AWS Services ที่รองรับ เช่น ALB','HTTPS endpoint / issue and renew TLS certificate','AWS KMS = จัด Encryption Keys; Secrets Manager = เก็บ Secrets','ออก Certificate สำหรับ ALB ที่รับ HTTPS Logins'],
    ['AWS Secrets Manager','เก็บและ Rotate Database Password, API Token และ Other Application Secrets','Store/rotate secret value','IAM Role = ให้ AWS Workloads Temporary Permissions ไม่ต้องเก็บ Static AWS Keys','แอปเรียก Database โดยดึง Password จาก Secrets Manager'],
    ['AWS WAF','ตั้ง Web ACL Rules กรอง HTTP(S) Requests เช่น URL Path, Headers และ Attack Patterns','Malicious HTTP path / SQL injection','AWS Shield = DDoS; Firewall Manager = Central Policy Management','บล็อก Requests ที่เข้า /admin/ จาก Source ที่ต้องห้าม'],
    ['AWS Shield','ช่วยป้องกันการโจมตี Distributed Denial of Service ต่อ AWS Resources ที่รองรับ','Network DDoS / traffic flood','AWS WAF = กรอง HTTP Rules; GuardDuty = Threat Detection','Public Endpoint รับ Volumetric DDoS Flooding'],
    ['AWS Firewall Manager','จัดและบังคับใช้ Security Policies เช่น AWS WAF ข้าม AWS Accounts/Resources ใน Organization','Central WAF rules across member accounts','AWS WAF = ตัวตรวจ/กรอง Web Requests ตาม Web ACL','Security Team บังคับ Baseline WAF Policies ให้หลาย Accounts'],
    ['Amazon GuardDuty','ตรวจ Threat Signals และ Suspicious/Compromised Activity ใน AWS Accounts/Workloads ที่รองรับ','Detect suspicious credentials or access activity','Amazon Detective = สืบสวนความสัมพันธ์หลังเกิด Finding','พบการเรียก AWS APIs ผิดปกติจาก Credentials'],
    ['Amazon Detective','ใช้สืบสวน Security Findings ดู Entities, Activities และความสัมพันธ์/ลำดับเหตุการณ์','Already have alert → investigate root context','GuardDuty = ตรวจจับ Threat; Security Hub = รวบรวม Findings','หลัง GuardDuty แจ้งเตือน ทีมสืบสวนกิจกรรม IP และ IAM Roles'],
    ['Amazon Inspector','ประเมิน Vulnerabilities/CVEs ใน Supported Workloads เช่น EC2 Software และ ECR Container Images','Known software CVE / package vulnerability','GuardDuty = Threat Behavior ไม่ใช่ Vulnerability Scanner','พบ Vulnerable Library ใน ECR Image'],
    ['Amazon Macie','ค้นหาและจัดประเภท Sensitive Data ที่เก็บใน Amazon S3 เช่น PII','S3 records contain account or personal numbers','Inspector = CVE Scanner; GuardDuty = Threat Detection','ตรวจ S3 Bucket ที่มี Customer IDs'],
    ['AWS Security Hub','รวบรวมและจัดลำดับ Security Findings/Compliance State จาก AWS Security Services และ Integrations ที่รองรับ','Aggregate GuardDuty + Inspector + Macie findings','Detective = Investigate; Firewall Manager = Enforce Policies','ศูนย์ Security ดู Findings จาก Accounts หลายบัญชี'],
    ['AWS Audit Manager','ช่วยรวบรวม/จัดระเบียบ Audit Evidence และจัดทำ Assessments จาก AWS Accounts/Resources ที่รองรับ','Ongoing audit evidence collection','AWS Artifact = ดาวน์โหลด AWS Provider Attestation/Agreements','ทีมตรวจสอบเก็บหลักฐานจาก Resource Configurations ระหว่าง Audit'],
    ['AWS Artifact','ดาวน์โหลด AWS Compliance Reports/Attestations และจัดการ Agreements ที่รองรับ','Need AWS SOC/ISO documents','AWS Audit Manager = Customer-side Audit Evidence Assessments','ส่ง SOC Report ให้ External Assessor'],
    ['Penetration Testing on AWS','ก่อนทดสอบต้องอ่าน AWS Penetration Testing Policy ปัจจุบันและตรวจ Allowed Services, Conditions และ Restrictions','Check permitted targets and policy first','การมี AWS Support Plan ไม่ได้ทำให้โจมตีทดสอบได้ทุกบริการ','ทีม Security ตรวจขอบเขตก่อนทดสอบ Public Endpoint']
  ]);
})();
