// CLF-C02 Local Mock Info Library updates, 14 November 2026.
// Content references: AWS CLF-C02 Exam Guide v1.3; AWS Support plans/FAQs; AWS Data Exports CUR 2.0.
(() => {
  const guide = window.EXAM_FAMILY_GUIDE;
  if (!guide) return;
  const enhancements = {
  "Agility": [
    "สร้างหรือเปลี่ยน resource ได้เร็ว ไม่ต้องรอซื้อเครื่อง",
    "ทดลองระบบบน EC2 แล้วลบเมื่อเสร็จ"
  ],
  "Elasticity": [
    "ปรับ capacity ขึ้นลงตาม demand จริง",
    "เว็บเพิ่ม EC2 ตอนมีโปรโมชัน แล้วลดหลังจบ"
  ],
  "High Availability": [
    "ให้บริการต่อได้แม้บาง component หรือ AZ ล้มเหลว",
    "วาง EC2 หลาย AZ หลัง Load Balancer"
  ],
  "Economies of Scale": [
    "AWS กระจายต้นทุนโครงสร้างพื้นฐานกับลูกค้าจำนวนมาก",
    "เช่า compute ตามใช้แทนซื้อ server เอง"
  ],
  "Operational Excellence": [
    "ทำ operations ซ้ำได้ สังเกตผล และปรับปรุงต่อเนื่อง",
    "ใช้ Infrastructure as Code และติดตาม CloudWatch alarms"
  ],
  "Security": [
    "ปกป้องข้อมูล ระบบ และสิทธิ์การเข้าถึง",
    "กำหนด IAM least privilege และใช้ AWS KMS"
  ],
  "Reliability": [
    "ฟื้นตัวจาก failure และรักษาการทำงานตามความต้องการ",
    "ใช้ Multi-AZ และ Auto Scaling"
  ],
  "Performance Efficiency": [
    "เลือกเทคโนโลยีและขนาด resource ให้เหมาะกับ workload",
    "เลือก compute-optimized EC2 สำหรับงาน CPU หนัก"
  ],
  "Cost Optimization": [
    "ติดตามค่าใช้จ่ายและลด resource ที่ไม่จำเป็น",
    "ปิด EC2 สำหรับ Dev ตอนกลางคืน"
  ],
  "Sustainability": [
    "ลดการใช้ทรัพยากรและพลังงานโดยไม่จำเป็น",
    "ลบ resource ที่ไม่ใช้และเลือก serverless"
  ],
  "AWS CAF": [
    "วางแผน cloud adoption ผ่าน 6 perspectives ด้านองค์กร",
    "ประเมินคน กระบวนการ และเทคโนโลยีก่อน migration"
  ],
  "Rehost": [
    "ย้ายแอปโดยเปลี่ยน code/architecture น้อยที่สุด",
    "ย้าย Virtual Machine เดิมไป EC2"
  ],
  "AWS Migration Hub": [
    "ดูความคืบหน้าการ migration จากหลาย tools ในที่เดียว",
    "เปิด dashboard ตรวจว่าแอปใดย้ายเสร็จ"
  ],
  "AWS DMS": [
    "ย้าย database และทำ ongoing replication ระหว่างย้ายได้",
    "ย้ายฐานข้อมูล On-Premises ไป Amazon RDS"
  ],
  "EC2": [
    "ลูกค้าดูแล guest OS, patch, app และ data; AWS ดูแล physical infrastructure",
    "ทีมต้องอัปเดต Linux patches บน EC2 เอง"
  ],
  "RDS": [
    "AWS ดูแลโครงสร้างพื้นฐานและงาน database บางส่วน แต่ลูกค้ายังดูแล data/access",
    "AWS จัดการ engine patch ส่วนทีมกำหนด DB users"
  ],
  "AWS Artifact": [
    "เข้าถึงรายงาน audit/compliance ของ AWS ไม่ใช่เครื่องมือ scan resource",
    "ดาวน์โหลด SOC report ส่งให้ Auditor"
  ],
  "AWS Config": [
    "เก็บ configuration history และตรวจ compliance เทียบ rules",
    "ตรวจว่า S3 bucket ไม่เปิด public access"
  ],
  "IAM Role": [
    "ให้ temporary credentials กับ workload หรือผู้ที่ assume role",
    "Lambda ใช้ execution role อ่าน DynamoDB"
  ],
  "IAM Identity Center": [
    "จัดการ Workforce SSO และสิทธิ์ข้าม AWS accounts",
    "พนักงานเข้า AWS accounts หลายบัญชีผ่าน portal"
  ],
  "AWS KMS": [
    "จัดการ encryption keys และควบคุมการใช้ keys",
    "ใช้ customer managed key เข้ารหัส S3"
  ],
  "GuardDuty": [
    "ตรวจจับภัยคุกคามจากสัญญาณและพฤติกรรมผิดปกติ",
    "แจ้งเตือน API activity น่าสงสัย"
  ],
  "Inspector": [
    "ค้นหา software vulnerabilities ใน workloads ที่รองรับ",
    "พบ CVE บน EC2 หรือ container image ใน ECR"
  ],
  "WAF": [
    "กรอง HTTP/HTTPS requests ด้วย rules ระดับเว็บแอป",
    "บล็อก request รูปแบบ SQL injection"
  ],
  "Amazon EC2": [
    "Virtual server ที่ผู้ใช้เลือกขนาดและควบคุม OS ได้เอง",
    "ติดตั้ง Java application บน EC2"
  ],
  "AWS Lambda": [
    "รัน code ตาม event โดยไม่ต้อง provision server",
    "S3 upload กระตุ้น Lambda ให้ประมวลผลไฟล์"
  ],
  "Amazon ECS": [
    "จัดการ containers แบบ AWS-native โดยไม่ต้องใช้ Kubernetes",
    "รัน Docker service บน ECS Fargate"
  ],
  "Amazon EKS": [
    "AWS ดูแล Kubernetes control plane ให้",
    "ย้าย Kubernetes deployment เดิมมารันบน EKS"
  ],
  "Elastic Load Balancing": [
    "กระจาย requests ไปหลาย targets และทำ health checks",
    "ALB ส่ง traffic ไป EC2 หลายตัว"
  ],
  "Amazon RDS": [
    "Managed relational database สำหรับข้อมูลเชิงสัมพันธ์และ SQL",
    "ใช้ PostgreSQL บน RDS เก็บคำสั่งซื้อ"
  ],
  "Amazon DynamoDB": [
    "Managed NoSQL key-value/document ที่ scale ได้",
    "เก็บข้อมูล session โดยใช้ partition key"
  ],
  "Amazon ElastiCache": [
    "In-memory cache ลดการ query database ซ้ำ",
    "cache ผลค้นหาสินค้าใน Redis/Valkey"
  ],
  "Amazon S3": [
    "Object storage สำหรับไฟล์ backups และ static assets",
    "เก็บรูปสินค้าและ log files ใน S3 bucket"
  ],
  "Amazon EBS": [
    "Persistent block volume สำหรับ EC2",
    "แนบ EBS เป็น disk เก็บข้อมูลแอป"
  ],
  "Amazon EFS": [
    "Shared file system ที่หลาย Linux instances mount ร่วมกัน",
    "EC2 หลายเครื่องอ่านไฟล์บน EFS เดียวกัน"
  ],
  "Amazon VPC": [
    "Virtual network ที่กำหนด subnets, routes และ security controls",
    "แยก database ไว้ใน private subnet"
  ],
  "Amazon Route 53": [
    "DNS และ routing domain ไปยัง endpoints",
    "ชี้ api.example.com ไป ALB"
  ],
  "AWS Direct Connect": [
    "Dedicated network connectivity ระหว่างองค์กรกับ AWS",
    "เชื่อม Data Center กับ AWS ผ่าน dedicated circuit"
  ],
  "Availability Zone": [
    "สถานที่ตั้ง infrastructure แยกจาก AZ อื่นใน Region เดียวกัน",
    "วาง RDS Multi-AZ ให้ failover ได้"
  ],
  "Amazon CloudFront": [
    "CDN cache และส่งเนื้อหาจาก edge ใกล้ผู้ใช้",
    "ส่งรูปสินค้าให้ผู้ใช้ต่างประเทศจาก edge"
  ],
  "Amazon CloudWatch": [
    "เก็บ metrics/logs และสร้าง alarms เพื่อติดตามระบบ",
    "Alarm เมื่อ EC2 CPUUtilization สูงเกิน threshold"
  ],
  "AWS CloudTrail": [
    "บันทึก API activity เพื่อสืบค้นใครทำอะไรเมื่อไร",
    "ตรวจว่าใครเรียก DeleteBucket"
  ],
  "Amazon Athena": [
    "ใช้ SQL query ข้อมูลบน S3 โดยไม่ต้องดูแล server",
    "วิเคราะห์ access logs บน S3 ด้วย SQL"
  ],
  "AWS Glue": [
    "Data integration, ETL และ Data Catalog",
    "ใช้ Glue crawler สร้าง metadata ให้ Athena"
  ],
  "Amazon SQS": [
    "Queue สำหรับ asynchronous processing และ decoupling",
    "Order Service ส่ง message ให้ worker ทำภายหลัง"
  ],
  "Amazon SNS": [
    "Pub/sub fan-out ข้อความไปหลาย subscribers",
    "ส่ง notification ไป email และ SQS queues"
  ],
  "On-Demand": [
    "จ่ายตามใช้ ไม่มี commitment ระยะยาว",
    "เปิด EC2 สำหรับทดสอบแค่สองวัน"
  ],
  "Spot": [
    "ใช้ spare EC2 capacity ราคาลดลง แต่ถูก interrupt ได้",
    "รัน batch jobs ที่ retry ได้"
  ],
  "Savings Plans": [
    "ลดค่า compute โดย commit การใช้จ่ายต่อชั่วโมง",
    "Production ใช้ compute สม่ำเสมอจึง commit"
  ],
  "AWS Budgets": [
    "ตั้ง budget thresholds และ alerts สำหรับ actual/forecast",
    "แจ้งเตือนเมื่อค่า AWS คาดว่าจะเกิน $100"
  ],
  "AWS Cost Explorer": [
    "วิเคราะห์ค่าใช้จ่ายย้อนหลังและแนวโน้มตาม service",
    "ดูว่า EC2 หรือ S3 ทำให้ค่าใช้จ่ายเพิ่ม"
  ],
  "AWS Support Center": [
    "สร้างและติดตาม support cases ตามสิทธิ์ Support Plan",
    "เปิด case ให้ AWS ช่วยตรวจปัญหา production"
  ]
};
  for (const group of guide.groups) {
    for (const item of group.items) {
      const entry = enhancements[item.name];
      if (!entry) continue;
      item.use = entry[0];
      item.example = entry[1];
    }
  }
  const billing = guide.groups.find(group => group.id === 'billing-support');
  if (billing) {
    billing.summary = 'เปรียบเทียบ pricing, billing tools และ Support Plans ปัจจุบัน พร้อมตัวอย่าง';
    const additions = [
  {
    "name": "AWS Pricing Calculator",
    "use": "ประเมินค่าใช้บริการ AWS ก่อน deployment จากการใช้งานที่คาดไว้",
    "cue": "Estimate before deployment",
    "confuse": "Cost Explorer = วิเคราะห์ค่าใช้จ่ายที่เกิดขึ้นแล้ว",
    "example": "ประเมินค่า EC2 และ RDS ก่อนเปิดระบบใหม่"
  },
  {
    "name": "AWS Data Exports / CUR 2.0",
    "use": "ส่งออกรายงานค่าใช้จ่ายและ usage อย่างละเอียดไป S3; CUR 2.0 ใช้ schema สม่ำเสมอและเลือกข้อมูลได้",
    "cue": "Detailed billing export to S3",
    "confuse": "Cost Explorer = ดูแนวโน้ม; Budgets = แจ้งเตือน",
    "example": "ส่ง CUR 2.0 ไป S3 แล้วใช้ Athena วิเคราะห์ต้นทุนราย resource"
  },
  {
    "name": "Basic Support",
    "use": "แผนพื้นฐานฟรีสำหรับทุก AWS account รองรับเรื่องบัญชี/การเรียกเก็บเงิน แต่ไม่ใช่ technical support แบบเต็ม",
    "cue": "Account and billing help",
    "confuse": "Business Support+ = technical support 24/7",
    "example": "ติดต่อ AWS เรื่อง invoice"
  },
  {
    "name": "AWS Business Support+",
    "use": "แผน technical support สำหรับ production มี AI assistance และ AWS experts 24/7; business-critical system down มีเป้าหมายตอบกลับภายใน 30 นาที",
    "cue": "Production + 24/7 technical support",
    "confuse": "Enterprise Support = มี designated TAM",
    "example": "ระบบ production ล่มและต้องการเปิด technical case"
  },
  {
    "name": "AWS Enterprise Support",
    "use": "เพิ่ม designated Technical Account Manager (TAM) และคำแนะนำเชิงรุกสำหรับ workload สำคัญ",
    "cue": "Designated TAM + strategic guidance",
    "confuse": "Unified Operations = การดูแล mission-critical แบบเข้มข้นกว่า",
    "example": "องค์กรขนาดใหญ่ต้องการ TAM ช่วยวางแผน operations"
  },
  {
    "name": "AWS Unified Operations",
    "use": "สำหรับ mission-critical workloads เน้น proactive monitoring, application guidance และผู้เชี่ยวชาญเฉพาะด้าน",
    "cue": "Mission-critical + proactive operations",
    "confuse": "Enterprise Support = TAM แต่ขอบเขต proactive operations ต่างกัน",
    "example": "ระบบสำคัญต้องการ workload monitoring และ runbook เฉพาะ"
  },
  {
    "name": "Legacy Developer / Business Support",
    "use": "แผนเดิมไม่รับสมัครใหม่ตั้งแต่ 2 ธ.ค. 2025 และมีกำหนดยุติ 1 ม.ค. 2027; ลูกค้าเดิมยังใช้ได้ช่วงเปลี่ยนผ่าน",
    "cue": "Legacy plans → Business Support+",
    "confuse": "Business Support+ คือแผนใหม่ ไม่ใช่ชื่อเดิม",
    "example": "ผู้ใช้ Developer Support เดิมต้องเลือกแผนก่อนยุติบริการ"
  }
];
    for (const item of additions) {
      if (!billing.items.some(existing => existing.name === item.name)) billing.items.push(item);
    }
  }
  guide.updated = '2026-11-14';
  guide.examGuideVersion = 'CLF-C02 Exam Guide v1.3 (29 October 2026)';
  guide.sources = [
    {name:'AWS CLF-C02 Exam Guide',url:'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/'},
    {name:'AWS Support Plans',url:'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html'},
    {name:'AWS Support Transition FAQ',url:'https://aws.amazon.com/premiumsupport/faqs/'},
    {name:'AWS Data Exports CUR 2.0',url:'https://docs.aws.amazon.com/cur/latest/userguide/dataexports-migrate.html'}
  ];
})();
