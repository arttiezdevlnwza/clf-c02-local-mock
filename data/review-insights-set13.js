window.REVIEW_INSIGHTS.sets["local-set-13"] = {
  "title": "Local Mock Set 13",
  "note": "28 Nov 2026 · 55/65 (84.6%) · 10 wrong · 3 Explain More, 3 English Unclear, 1 Clue / Distractor Gap; flags may overlap.",
  "items": [
    {
      "questionId": 2,
      "key": "local-set-13:q2",
      "topic": "ECS = orchestration; Fargate = serverless container compute",
      "type": "language",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "note": "Raw flag from submitted review; actual reasoning not independently confirmed."
    },
    {
      "questionId": 13,
      "key": "local-set-13:q13",
      "topic": "Dedicated Hosts = host-level licensing visibility",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "note": "Raw flag from submitted review; actual reasoning not independently confirmed."
    },
    {
      "questionId": 16,
      "key": "local-set-13:q16",
      "topic": "Data residency / jurisdiction → Region",
      "type": "language",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "note": "Raw flag from submitted review; actual reasoning not independently confirmed."
    },
    {
      "questionId": 28,
      "key": "local-set-13:q28",
      "topic": "Transfer out to internet = typical charge",
      "type": "clue",
      "rawFlags": [
        "🧩 Clue / Distractor Gap"
      ],
      "reviewedCauses": [
        "clue"
      ],
      "note": "Raw flag from submitted review; actual reasoning not independently confirmed."
    },
    {
      "questionId": 35,
      "key": "local-set-13:q35",
      "topic": "Meet latency targets → Performance Efficiency",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "note": "Raw flag from submitted review; actual reasoning not independently confirmed."
    },
    {
      "questionId": 49,
      "key": "local-set-13:q49",
      "topic": "Stream application → AppStream; full desktop → WorkSpaces",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "note": "Raw flag from submitted review; actual reasoning not independently confirmed."
    },
    {
      "questionId": 56,
      "key": "local-set-13:q56",
      "topic": "Provider compliance report ≠ customer application compliance",
      "type": "language",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "note": "Raw flag from submitted review; actual reasoning not independently confirmed."
    }
  ],
  "details": [
    {
      "questionId": 2,
      "result": "Wrong",
      "topic": "ECS = orchestration; Fargate = serverless container compute",
      "question": "A team migrates container tasks from EC2 hosts it maintained to AWS Fargate. Which compute offering removes host provisioning and maintenance tasks?",
      "questionTh": "ทีมย้าย Containers จาก EC2 Hosts ที่ดูแลเองมาใช้ Fargate Compute ใดช่วยลดภาระ Provision/Patch Host",
      "selected": "D. Amazon ECS",
      "correct": "A. AWS Fargate",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "diagnosis": "คำตอบไม่ตรง Requirement หลัก ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "ECS = orchestration; Fargate = serverless container compute",
      "notes": [
        "Fargate จัด Serverless Container Compute ไม่ต้องดูแล EC2 Hosts ขณะที่ ECS ทำ Orchestration และลูกค้ายังดูแล App/IAM",
        "✅ A. AWS Fargate — Fargate จัด Serverless Container Compute ไม่ต้องดูแล EC2 Hosts ขณะที่ ECS ทำ Orchestration และลูกค้ายังดูแล App/IAM",
        "❌ B. AWS IAM — กำหนด identities, roles และสิทธิ์เข้าถึง AWS เช่น กำหนด IAM policy ให้ application อ่าน S3 ได้",
        "❌ C. AWS Organizations — จัดกลุ่มบัญชีและใช้ governance / consolidated billing",
        "❌ D. Amazon ECS — orchestrate containers ด้วย AWS-native control plane เช่น จัดการ container tasks และ services"
      ]
    },
    {
      "questionId": 3,
      "result": "Wrong",
      "topic": "DataSync = transfer; Storage Gateway = hybrid access",
      "question": "A warehouse uses locally mounted files but wants cloud-backed file storage available through familiar on-premises protocols. Which hybrid integration service fits?",
      "questionTh": "Warehouse ใช้ Local File Shares แต่ต้องการ Cloud-backed Storage ที่เข้าถึงผ่าน On-premises File Protocols ได้ ควรเลือกใด",
      "selected": "A. AWS DataSync",
      "correct": "D. AWS Storage Gateway",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบไม่ตรง Requirement หลัก ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "DataSync = transfer; Storage Gateway = hybrid access",
      "notes": [
        "Storage Gateway ให้ Hybrid Storage Access ผ่าน File/Volume/Tape Interfaces ส่วน DataSync ใช้ Transfer/Sync Files ไม่ใช่ Serving File Interfaces",
        "❌ A. AWS DataSync — ย้ายข้อมูลระหว่าง storage locations แบบ online",
        "❌ B. AWS Backup — รวมศูนย์การตั้งค่า backup policies",
        "❌ C. Amazon EFS — shared elastic file system สำหรับ Linux workloads เช่น ให้หลาย Linux EC2 mount file system เดียวกัน",
        "✅ D. AWS Storage Gateway — Storage Gateway ให้ Hybrid Storage Access ผ่าน File/Volume/Tape Interfaces ส่วน DataSync ใช้ Transfer/Sync Files ไม่ใช่ Serving File Interfaces"
      ]
    },
    {
      "questionId": 13,
      "result": "Correct",
      "topic": "Dedicated Hosts = host-level licensing visibility",
      "question": "A company needs hardware isolation from other customers on dedicated physical hosts and wants visibility into server placement for host-based software licensing. Which choice is intended?",
      "questionTh": "บริษัทต้องมี Physical Host ส่วนตัว พร้อม Visibility ของ Host Placement เพื่อบริหาร License ผูกกับ Physical Server ควรใช้ตัวเลือกใด",
      "selected": "A. Dedicated Hosts",
      "correct": "A. Dedicated Hosts",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "Dedicated Hosts = host-level licensing visibility",
      "notes": [
        "Dedicated Hosts ให้ Dedicated Physical Server พร้อม Host-level Visibility/Control สำหรับ Licensing ต่างจาก Dedicated Instances ที่ให้ Physical Isolation แต่ไม่ให้ Control แบบ Host-level เดียวกัน",
        "✅ A. Dedicated Hosts — Dedicated Hosts ให้ Dedicated Physical Server พร้อม Host-level Visibility/Control สำหรับ Licensing ต่างจาก Dedicated Instances ที่ให้ Physical Isolation แต่ไม่ให้ Control แบบ Host-level เดียวกัน",
        "❌ B. Reserved Instances — ส่วนลดตาม commitment และคุณสมบัติที่กำหนด เช่น รับส่วนลดจาก commitment สำหรับการใช้งานตามเงื่อนไข",
        "❌ C. Dedicated Instances — Dedicated Instances แยก Hardware จากลูกค้ารายอื่น แต่ไม่ให้ Host-level Licensing Control แบบ Dedicated Hosts",
        "❌ D. Savings Plans — ส่วนลดตาม commitment ด้านการใช้ compute เช่น commit ค่า compute ต่อชั่วโมงเพื่อรับส่วนลด"
      ]
    },
    {
      "questionId": 16,
      "result": "Wrong",
      "topic": "Data residency / jurisdiction → Region",
      "question": "A compliance officer requires the primary database to reside in a particular geographic jurisdiction, not just in any independent data center. Which AWS infrastructure unit defines that geographic choice?",
      "questionTh": "Compliance Officer บังคับให้ Primary Database อยู่ใน Geographic Jurisdiction ที่กำหนด ไม่ใช่เพียงเลือก Data Center แยกกัน ต้องเลือกหน่วย AWS ใด",
      "selected": "A. Multi-AZ deployment",
      "correct": "B. AWS Region",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "diagnosis": "คำตอบไม่ตรง Requirement หลัก ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Data residency / jurisdiction → Region",
      "notes": [
        "Region เป็น Geographic Location หลักของ AWS ที่ใช้เลือกพื้นที่ Data Residency ขณะที่ AZ คือ Isolation Within Region",
        "❌ A. Multi-AZ deployment — ออกแบบ resilience ภายใน Region ด้วยหลาย AZ เช่น วาง database standby ในอีก AZ เพื่อรองรับ failover",
        "✅ B. AWS Region — Region เป็น Geographic Location หลักของ AWS ที่ใช้เลือกพื้นที่ Data Residency ขณะที่ AZ คือ Isolation Within Region",
        "❌ C. Edge location — จุดกระจาย content ใกล้ผู้ใช้ เช่น ให้ CloudFront ส่ง content จาก edge ใกล้ผู้ใช้",
        "❌ D. Availability Zone — พื้นที่โครงสร้างพื้นฐานที่แยกจาก AZ อื่นใน Region เช่น แยก infrastructure เพื่อกระจายความเสี่ยงภายใน Region"
      ]
    },
    {
      "questionId": 28,
      "result": "Correct",
      "topic": "Transfer out to internet = typical charge",
      "question": "An AWS application uploads data from the internet and then serves large video downloads back to customers. Which network data-transfer direction is more likely to drive a typical usage-based charge?",
      "questionTh": "AWS Application รับ Uploads จาก Internet และส่ง Video Downloads กลับให้ลูกค้าจำนวนมาก ทิศทาง Transfer ใดมักเป็น Cost Driver",
      "selected": "B. Data transfer out",
      "correct": "B. Data transfer out",
      "rawFlags": [
        "🧩 Clue / Distractor Gap"
      ],
      "reviewedCauses": [
        "clue"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "Transfer out to internet = typical charge",
      "notes": [
        "Outbound Transfer จาก AWS ไป Internet โดยทั่วไปมีค่าใช้จ่ายตาม Usage และควรประมาณตาม GB ส่วน Data Transfer In ต่างกันตามบริการและไม่ใช่ทิศทางดาวน์โหลดกลับลูกค้า",
        "❌ A. Cost allocation tags — Tags ใช้ Cost Attribution ไม่ใช่ Transfer Category",
        "✅ B. Data transfer out — Outbound Transfer จาก AWS ไป Internet โดยทั่วไปมีค่าใช้จ่ายตาม Usage และควรประมาณตาม GB ส่วน Data Transfer In ต่างกันตามบริการและไม่ใช่ทิศทางดาวน์โหลดกลับลูกค้า",
        "❌ C. AWS Cost and Usage Report — CUR เป็นชุดข้อมูล Bill ไม่ใช่ทิศทาง Network Traffic",
        "❌ D. Data transfer in — Incoming Data เป็นทิศทาง Client Upload ซึ่งไม่ใช่ Video Download Egress"
      ]
    },
    {
      "questionId": 32,
      "result": "Wrong",
      "topic": "Block HTTP path → WAF; detect threat → GuardDuty",
      "question": "A public API is receiving requests with a known malicious URL path. Which security service can match the path and block those requests?",
      "questionTh": "Public API ถูกเรียก Malicious URL Path Pattern ต้องตั้ง Rule Block HTTP Requests ผ่านบริการใด",
      "selected": "C. Amazon GuardDuty",
      "correct": "B. AWS WAF",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบไม่ตรง Requirement หลัก ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Block HTTP path → WAF; detect threat → GuardDuty",
      "notes": [
        "WAF ทำ HTTP Request Filtering ตาม Path/Headers ต่างจาก Shield ที่ป้องกัน DDoS และ Firewall Manager ที่จัด Policy รวม",
        "❌ A. AWS Shield — ป้องกันการโจมตี DDoS เช่น ช่วยป้องกันการโจมตี DDoS",
        "✅ B. AWS WAF — WAF ทำ HTTP Request Filtering ตาม Path/Headers ต่างจาก Shield ที่ป้องกัน DDoS และ Firewall Manager ที่จัด Policy รวม",
        "❌ C. Amazon GuardDuty — ตรวจจับภัยคุกคามจากสัญญาณและกิจกรรมที่น่าสงสัย เช่น ตรวจพบการใช้ credentials ที่น่าสงสัย",
        "❌ D. AWS Firewall Manager — จัดการ security policies ส่วนกลางข้ามบัญชี เช่น จัดการ WAF policies ข้ามหลาย accounts"
      ]
    },
    {
      "questionId": 35,
      "result": "Wrong",
      "topic": "Meet latency targets → Performance Efficiency",
      "question": "A cloud design team chooses an instance type that meets latency targets at sustainable cost rather than selecting the cheapest option that fails the SLA. Which pillar primarily governs resource performance selection?",
      "questionTh": "ทีมเลือก Instance Type ให้ Latency ผ่าน SLA ในต้นทุนที่รับได้ แทนเลือกตัวถูกที่สุดที่ไม่ผ่าน Performance เป้าหมาย นี่เป็น Pillar ใด",
      "selected": "C. Sustainability",
      "correct": "A. Performance Efficiency",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "diagnosis": "คำตอบไม่ตรง Requirement หลัก ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Meet latency targets → Performance Efficiency",
      "notes": [
        "Performance Efficiency ให้เลือก Resource Type/Size เพื่อให้ถึง Latency/Throughput Targets โดย Cost Optimization อาจเป็นข้อพิจารณาคู่กัน แต่โจทย์ถามด้าน Performance Selection",
        "✅ A. Performance Efficiency — Performance Efficiency ให้เลือก Resource Type/Size เพื่อให้ถึง Latency/Throughput Targets โดย Cost Optimization อาจเป็นข้อพิจารณาคู่กัน แต่โจทย์ถามด้าน Performance Selection",
        "❌ B. Cost Optimization — Cost Optimization เน้นความคุ้มค่าของค่าใช้จ่าย ส่วนโจทย์นี้วัดการเลือก instance ให้ได้ throughput ตามเป้าหมาย",
        "❌ C. Sustainability — Sustainability เน้นผลกระทบต่อสิ่งแวดล้อม ไม่ใช่การเลือก resource ให้ได้ performance targets",
        "❌ D. Reliability — เน้นการฟื้นตัวและการทำงานตามที่คาดหวัง เช่น วางระบบหลาย Availability Zones และทดสอบ failover"
      ]
    },
    {
      "questionId": 38,
      "result": "Wrong",
      "topic": "Continue through component failure → Fault tolerance",
      "question": "A request-processing service should keep accepting work after a worker crashes unexpectedly without waiting for manual intervention. Which concept is most direct?",
      "questionTh": "Service ประมวลผล Requests ต้องรับงานต่อเมื่อ Worker หนึ่งตัว Crash ทันที โดยไม่รอ Manual Intervention แนวคิดใดตรงที่สุด",
      "selected": "B. High availability",
      "correct": "D. Fault tolerance",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบไม่ตรง Requirement หลัก ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Continue through component failure → Fault tolerance",
      "notes": [
        "Fault tolerance เน้นทำงานต่อได้เมื่อ Component หนึ่งล้มเหลว ขณะที่ High availability เน้น Uptime โดยรวม และ Durability เน้น Data Preservation",
        "❌ A. Scalability — ความสามารถรองรับภาระงานที่เพิ่มขึ้น เช่น ขยายระบบให้รองรับจำนวนผู้ใช้ที่เพิ่มขึ้น",
        "❌ B. High availability — High availability มุ่งให้บริการพร้อมใช้งานโดยรวม แต่อาจมีช่วง failover; โจทย์นี้เน้นทำงานต่อได้แม้ component หยุดกะทันหัน",
        "❌ C. Durability — โอกาสที่ข้อมูลยังคงอยู่ไม่สูญหาย เช่น เก็บ objects ใน Amazon S3 เพื่อลดความเสี่ยงข้อมูลสูญหาย",
        "✅ D. Fault tolerance — Fault tolerance เน้นทำงานต่อได้เมื่อ Component หนึ่งล้มเหลว ขณะที่ High availability เน้น Uptime โดยรวม และ Durability เน้น Data Preservation"
      ]
    },
    {
      "questionId": 49,
      "result": "Correct",
      "topic": "Stream application → AppStream; full desktop → WorkSpaces",
      "question": "A company needs to stream a Windows desktop application to browsers without giving users a full managed desktop. Which end-user computing service fits?",
      "questionTh": "บริษัทต้อง Stream Windows Desktop Application ผ่าน Browser โดยไม่แจก Virtual Desktop เต็มเครื่อง ใช้บริการใด",
      "selected": "D. Amazon AppStream 2.0",
      "correct": "D. Amazon AppStream 2.0",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "Stream application → AppStream; full desktop → WorkSpaces",
      "notes": [
        "AppStream 2.0 ทำ Application Streaming ขณะที่ WorkSpaces เป็น Virtual Desktop และ Secure Browser ให้ Managed Browser Sessions สำหรับ Web Apps",
        "❌ A. Amazon WorkSpaces — managed virtual desktops",
        "❌ B. AWS Amplify — เครื่องมือสร้างและโฮสต์ web/mobile applications",
        "❌ C. Amazon WorkSpaces Secure Browser — Managed Browser แบบ Session Isolation สำหรับเข้าถึง Web Applications อย่างปลอดภัย",
        "✅ D. Amazon AppStream 2.0 — AppStream 2.0 ทำ Application Streaming ขณะที่ WorkSpaces เป็น Virtual Desktop และ Secure Browser ให้ Managed Browser Sessions สำหรับ Web Apps"
      ]
    },
    {
      "questionId": 55,
      "result": "Wrong",
      "topic": "Commit $/hour → Savings Plans; reserve AZ capacity → Capacity Reservations",
      "question": "An enterprise commits to predictable EC2 compute spend for one year but does not need reserved instance capacity in a particular AZ. Which pricing model offers an hourly spend commitment discount?",
      "questionTh": "องค์กรยอม Commit ยอด Compute Spend ต่อชั่วโมง 1 ปีเพื่อส่วนลด แต่ไม่ได้ต้องจอง EC2 Capacity ใน AZ ใด ควรใช้ Pricing Model ใด",
      "selected": "B. On-Demand Capacity Reservations",
      "correct": "A. Savings Plans",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบไม่ตรง Requirement หลัก ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Commit $/hour → Savings Plans; reserve AZ capacity → Capacity Reservations",
      "notes": [
        "Savings Plans ลดราคาจาก Spend Commitment ต่อชั่วโมง ส่วน Capacity Reservations สำรอง Capacity ใน AZ โดยไม่จำเป็นต้องมี Discount Commitment",
        "✅ A. Savings Plans — Savings Plans ลดราคาจาก Spend Commitment ต่อชั่วโมง ส่วน Capacity Reservations สำรอง Capacity ใน AZ โดยไม่จำเป็นต้องมี Discount Commitment",
        "❌ B. On-Demand Capacity Reservations — จอง capacity ใน AZ โดยไม่ผูกกับส่วนลดค่าใช้งาน",
        "❌ C. Spot Instances — ใช้ EC2 spare capacity ที่อาจถูกขัดจังหวะ เช่น รัน batch jobs ที่ทนต่อ interruption ได้",
        "❌ D. Dedicated Hosts — physical server ที่สงวนให้ลูกค้ารายเดียว"
      ]
    },
    {
      "questionId": 56,
      "result": "Wrong",
      "topic": "Provider compliance report ≠ customer application compliance",
      "question": "A company obtains an AWS provider compliance report. Does that alone certify the customer's application configuration? Which party must still implement application controls?",
      "questionTh": "องค์กรได้ AWS Provider Compliance Report แล้ว App Configurations จะได้รับ Certified อัตโนมัติหรือไม่ ใครยังต้องทำ Customer Controls",
      "selected": "A. AWS Artifact",
      "correct": "B. The customer",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "diagnosis": "คำตอบไม่ตรง Requirement หลัก ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Provider compliance report ≠ customer application compliance",
      "notes": [
        "AWS Provider Attestation ไม่ครอบคลุม Customer Application ทั้งหมด ลูกค้ายังต้องปฏิบัติตาม Applicable Controls",
        "❌ A. AWS Artifact — ให้ดาวน์โหลดรายงานและเอกสารด้าน compliance ของ AWS เช่น ดาวน์โหลด SOC report สำหรับทีม Audit",
        "✅ B. The customer — AWS Provider Attestation ไม่ครอบคลุม Customer Application ทั้งหมด ลูกค้ายังต้องปฏิบัติตาม Applicable Controls",
        "❌ C. AWS Audit Manager — ช่วยรวบรวมและจัดระเบียบ Audit Evidence สำหรับ Audit Assessments จาก AWS Resources และ Accounts ที่รองรับ",
        "❌ D. AWS — ผู้ให้บริการ cloud ที่ดูแลความปลอดภัยของ infrastructure เช่น AWS ดูแลความปลอดภัยของ physical cloud infrastructure"
      ]
    },
    {
      "questionId": 58,
      "result": "Wrong",
      "topic": "EC2 guest OS patch → customer; Inspector scans",
      "question": "A security bulletin lists a vulnerable Linux package inside a customer's EC2 guest OS. Which party is responsible for installing the patch?",
      "questionTh": "ประกาศ Security ระบุช่องโหว่ Linux Package ใน EC2 Guest OS ของลูกค้า ใครต้องติดตั้ง Patch",
      "selected": "B. Amazon Inspector",
      "correct": "A. The customer",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบไม่ตรง Requirement หลัก ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "EC2 guest OS patch → customer; Inspector scans",
      "notes": [
        "ลูกค้า EC2 Patch Guest OS/Installed Packages ของตน ส่วน AWS ดูแล Underlying Host/Hypervisor",
        "✅ A. The customer — ลูกค้า EC2 Patch Guest OS/Installed Packages ของตน ส่วน AWS ดูแล Underlying Host/Hypervisor",
        "❌ B. Amazon Inspector — สแกนช่องโหว่ของ workload ที่รองรับ เช่น ตรวจพบ CVE ใน EC2 หรือ ECR container image",
        "❌ C. AWS Support Center — เปิดและติดตาม support cases",
        "❌ D. AWS — ผู้ให้บริการ cloud ที่ดูแลความปลอดภัยของ infrastructure เช่น AWS ดูแลความปลอดภัยของ physical cloud infrastructure"
      ]
    },
    {
      "questionId": 65,
      "result": "Wrong",
      "topic": "Individual remote users → Client VPN; networks → Site-to-Site VPN",
      "question": "Employees work from hotels and must establish a secure remote-user VPN connection to the company's VPC. Which managed networking service is intended for individual clients?",
      "questionTh": "พนักงานอยู่โรงแรม ต้อง Connect VPC ผ่าน Remote-user VPN Client แบบ Managed ไม่ใช่เชื่อม Office Network แบบถาวร ใช้ใด",
      "selected": "C. AWS Site-to-Site VPN",
      "correct": "B. AWS Client VPN",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบไม่ตรง Requirement หลัก ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Individual remote users → Client VPN; networks → Site-to-Site VPN",
      "notes": [
        "Client VPN รองรับ Remote Users/Devices ส่วน Site-to-Site VPN เป็น Network-to-Network IPSec และ Direct Connect เป็น Dedicated Circuit",
        "❌ A. AWS Transit Gateway — เชื่อม VPC และ on-premises networks แบบ hub",
        "✅ B. AWS Client VPN — Client VPN รองรับ Remote Users/Devices ส่วน Site-to-Site VPN เป็น Network-to-Network IPSec และ Direct Connect เป็น Dedicated Circuit",
        "❌ C. AWS Site-to-Site VPN — เข้ารหัสการเชื่อมต่อเครือข่ายผ่านอินเทอร์เน็ต เช่น สร้าง encrypted tunnel ผ่าน internet",
        "❌ D. AWS Direct Connect — dedicated private network connection ไป AWS เช่น ใช้ dedicated network connection เชื่อม data center กับ AWS"
      ]
    }
  ],
  "englishNotes": [
    {
      "questionId": 2,
      "phrase": "A team migrates container tasks from EC2 hosts it maintained to AWS Fargate. Which compute offering removes host provisioning and maintenance tasks?",
      "translation": "ทีมย้าย Containers จาก EC2 Hosts ที่ดูแลเองมาใช้ Fargate Compute ใดช่วยลดภาระ Provision/Patch Host"
    },
    {
      "questionId": 16,
      "phrase": "A compliance officer requires the primary database to reside in a particular geographic jurisdiction, not just in any independent data center. Which AWS infrastructure unit defines that geographic choice?",
      "translation": "Compliance Officer บังคับให้ Primary Database อยู่ใน Geographic Jurisdiction ที่กำหนด ไม่ใช่เพียงเลือก Data Center แยกกัน ต้องเลือกหน่วย AWS ใด"
    },
    {
      "questionId": 56,
      "phrase": "A company obtains an AWS provider compliance report. Does that alone certify the customer's application configuration? Which party must still implement application controls?",
      "translation": "องค์กรได้ AWS Provider Compliance Report แล้ว App Configurations จะได้รับ Certified อัตโนมัติหรือไม่ ใครยังต้องทำ Customer Controls"
    }
  ]
};
window.REVIEW_INSIGHTS.history.push({"setId":"local-set-13","label":"Local Mock Set 13 · 28 Nov 2026","score":55,"total":65,"percent":85,"confidence":3,"language":3,"concept":0,"clue":1});
