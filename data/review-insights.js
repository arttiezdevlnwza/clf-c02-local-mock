window.REVIEW_INSIGHTS = window.REVIEW_INSIGHTS || {
  "sets": {
    "local-set-01": {
      "title": "Local Mock Set 1",
      "note": "Attempt 14 Nov 2026 · 65/65 correct · 7 marked Explain More. User reports mostly needing to recall what alternative choices do, rather than being unable to eliminate them.",
      "items": [
        {
          "questionId": 26,
          "key": "local-set-01:q26",
          "topic": "AWS KMS vs CloudHSM; functions of unrelated alternatives",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; explain-more flag. Review service purpose and distractor use cases."
        },
        {
          "questionId": 35,
          "key": "local-set-01:q35",
          "topic": "AWS Trusted Advisor; differences from Translate, Glue, and ECR",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; explain-more flag. Review service purpose and distractor use cases."
        },
        {
          "questionId": 44,
          "key": "local-set-01:q44",
          "topic": "Amazon ECS vs EKS; Glue and RDS alternatives",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; explain-more flag. Review service purpose and distractor use cases."
        },
        {
          "questionId": 45,
          "key": "local-set-01:q45",
          "topic": "Elastic Load Balancing vs AWS Auto Scaling; other AWS service roles",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; explain-more flag. Review service purpose and distractor use cases."
        },
        {
          "questionId": 47,
          "key": "local-set-01:q47",
          "topic": "DynamoDB vs Amazon RDS; EFS and Storage Gateway",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; explain-more flag. Review service purpose and distractor use cases."
        },
        {
          "questionId": 59,
          "key": "local-set-01:q59",
          "topic": "Spot, On-Demand, Capacity Reservations, and Dedicated Hosts",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; explain-more flag. Review service purpose and distractor use cases."
        },
        {
          "questionId": 60,
          "key": "local-set-01:q60",
          "topic": "Reserved Instances vs Savings Plans; Spot and On-Demand",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; explain-more flag. Review service purpose and distractor use cases."
        }
      ],
      "details": [
        {
          "questionId": 26,
          "result": "Correct",
          "topic": "AWS KMS vs CloudHSM; functions of unrelated alternatives",
          "selected": "AWS KMS + AWS CloudHSM",
          "correct": "AWS KMS + AWS CloudHSM",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ต้องการจำหน้าที่และตัวอย่างการใช้บริการในช้อยส์อื่นให้แม่นขึ้น (Feedback หลังสอบ)",
          "memoryCue": "KMS = managed encryption key service; CloudHSM = dedicated HSM",
          "notes": [
            "A. AWS KMS — จัดการ Cryptographic Keys เพื่อเข้ารหัสข้อมูล เช่น S3, EBS และ DynamoDB",
            "B. AWS Cost Explorer — วิเคราะห์ค่าใช้จ่ายและการใช้งาน AWS ย้อนหลัง",
            "C. Amazon Route 53 — จัดการ DNS และ DNS routing เช่น api.example.com ไปยัง ALB",
            "D. AWS CloudHSM — Dedicated Hardware Security Modules สำหรับ Cryptographic Operations",
            "E. Amazon SQS — คิวข้อความแบบ Managed เพื่อแยกการประมวลผลระหว่าง Services"
          ]
        },
        {
          "questionId": 35,
          "result": "Correct",
          "topic": "AWS Trusted Advisor; differences from Translate, Glue, and ECR",
          "selected": "AWS Trusted Advisor",
          "correct": "AWS Trusted Advisor",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ต้องการจำหน้าที่และตัวอย่างการใช้บริการในช้อยส์อื่นให้แม่นขึ้น (Feedback หลังสอบ)",
          "memoryCue": "Trusted Advisor = best-practice checks and recommendations",
          "notes": [
            "A. Amazon Translate — แปลข้อความระหว่างภาษา",
            "B. AWS Trusted Advisor — ตรวจสอบและแนะนำ Best Practices ใน AWS Environment",
            "C. AWS Glue — Data Integration และ ETL เช่นแปลงข้อมูล CSV เป็น Parquet",
            "D. Amazon ECR — Container Image Registry สำหรับเก็บและแจกจ่าย Docker Images"
          ]
        },
        {
          "questionId": 44,
          "result": "Correct",
          "topic": "Amazon ECS vs EKS; Glue and RDS alternatives",
          "selected": "Amazon ECS",
          "correct": "Amazon ECS",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ต้องการจำหน้าที่และตัวอย่างการใช้บริการในช้อยส์อื่นให้แม่นขึ้น (Feedback หลังสอบ)",
          "memoryCue": "ECS = AWS-native container orchestration; EKS = managed Kubernetes",
          "notes": [
            "A. AWS Glue — Data Integration และ ETL",
            "B. Amazon RDS — Managed Relational Database เช่น PostgreSQL หรือ MySQL",
            "C. Amazon EKS — Kubernetes Service สำหรับ Container Orchestration",
            "D. Amazon ECS — Container Orchestration แบบ AWS-native ไม่ต้องใช้ Kubernetes"
          ]
        },
        {
          "questionId": 45,
          "result": "Correct",
          "topic": "Elastic Load Balancing vs AWS Auto Scaling; other AWS service roles",
          "selected": "Elastic Load Balancing + AWS Auto Scaling",
          "correct": "Elastic Load Balancing + AWS Auto Scaling",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ต้องการจำหน้าที่และตัวอย่างการใช้บริการในช้อยส์อื่นให้แม่นขึ้น (Feedback หลังสอบ)",
          "memoryCue": "ELB = กระจาย Traffic; Auto Scaling = ปรับ Compute Capacity",
          "notes": [
            "A. Elastic Load Balancing — กระจาย Incoming Traffic ไปยัง Targets",
            "B. AWS Auto Scaling — เพิ่ม/ลด Compute Capacity ตาม Demand",
            "C. AWS Artifact — เอกสาร AWS Compliance และ Agreements",
            "D. AWS Pricing Calculator — ประเมินค่าใช้จ่ายก่อนใช้งาน",
            "E. Amazon Macie — ค้นหา Sensitive Data ใน Amazon S3"
          ]
        },
        {
          "questionId": 47,
          "result": "Correct",
          "topic": "DynamoDB vs Amazon RDS; EFS and Storage Gateway",
          "selected": "Amazon DynamoDB",
          "correct": "Amazon DynamoDB",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ต้องการจำหน้าที่และตัวอย่างการใช้บริการในช้อยส์อื่นให้แม่นขึ้น (Feedback หลังสอบ)",
          "memoryCue": "DynamoDB = managed NoSQL key-value/document; RDS = relational database",
          "notes": [
            "A. Amazon EFS — Shared Managed File System ใช้ร่วมกันได้ผ่าน NFS",
            "B. AWS Storage Gateway — เชื่อม On-premises Storage Workloads กับ AWS Storage",
            "C. Amazon DynamoDB — Fully Managed NoSQL Key-value/Document Database",
            "D. Amazon RDS for SQL Server — Managed Relational Database ที่ใช้ Microsoft SQL Server"
          ]
        },
        {
          "questionId": 59,
          "result": "Correct",
          "topic": "Spot, On-Demand, Capacity Reservations, and Dedicated Hosts",
          "selected": "Spot Instances",
          "correct": "Spot Instances",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ต้องการจำหน้าที่และตัวอย่างการใช้บริการในช้อยส์อื่นให้แม่นขึ้น (Feedback หลังสอบ)",
          "memoryCue": "Spot = spare capacity ราคาลดแต่ถูก interrupt ได้",
          "notes": [
            "A. On-Demand Instances — จ่ายตามการใช้ ไม่ต้องมี Commitment ระยะยาว",
            "B. Capacity Reservations — จองความพร้อมใช้งานของ EC2 Capacity ใน AZ",
            "C. Dedicated Hosts — Physical Server เฉพาะบัญชี เหมาะกับ License/Compliance บางกรณี",
            "D. Spot Instances — ใช้ EC2 Spare Capacity ราคาลด แลกกับความเสี่ยงถูก Interrupt"
          ]
        },
        {
          "questionId": 60,
          "result": "Correct",
          "topic": "Reserved Instances vs Savings Plans; Spot and On-Demand",
          "selected": "Reserved Instances + Savings Plans",
          "correct": "Reserved Instances + Savings Plans",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ต้องการจำหน้าที่และตัวอย่างการใช้บริการในช้อยส์อื่นให้แม่นขึ้น (Feedback หลังสอบ)",
          "memoryCue": "Reserved Instances/Savings Plans = Commitment discount; Spot = spare capacity discount",
          "notes": [
            "A. On-Demand Instances — ไม่มี Commitment ระยะยาว จ่ายตามการใช้",
            "B. Spot Instances — ส่วนลดจาก Spare Capacity โดยมีความเสี่ยง Interrupt",
            "C. Reserved Instances — ส่วนลดตามการผูก Commitment/Term ภายใต้เงื่อนไข RI",
            "D. Savings Plans — ส่วนลด Compute เมื่อ Commit การใช้จ่ายตามระยะเวลาที่กำหนด",
            "E. Data Transfer Out — หมวดค่าใช้จ่ายสำหรับส่งข้อมูลออก ไม่ใช่ Compute Pricing Commitment"
          ]
        }
      ]
    },
    "local-set-02": {
      "title": "Local Mock Set 2",
      "note": "15 Nov 2026 · 46/65 correct (70.8%) · 19 incorrect · 7 Explain More; 8 English, 6 Concept, 1 Clue (flags may overlap). Record based only on exported Set 2 attempt.",
      "items": [
        {
          "questionId": 1,
          "key": "local-set-02:q1",
          "topic": "L01 — Agility vs Pay-as-you-go",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์เน้นความสะดวกและความรวดเร็วในการสร้าง/ลบ Test Environment มากกว่าเรื่องคิดเงิน"
        },
        {
          "questionId": 3,
          "key": "local-set-02:q3",
          "topic": "L01 — Agility vs Elasticity vs Scalability",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Select TWO ต้องครอบคลุมทั้งการทดลองอย่างรวดเร็วและ Demand ที่ขึ้นลง"
        },
        {
          "questionId": 11,
          "key": "local-set-02:q11",
          "topic": "L12 — Application Discovery Service vs Migration Evaluator",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ต้องเก็บรายการ Server และ Dependency ก่อนวาง Migration Waves ไม่ใช่ประเมินความคุ้มค่า"
        },
        {
          "questionId": 12,
          "key": "local-set-02:q12",
          "topic": "L12 — Replatform vs Refactor",
          "type": "clue",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "note": "Wrong | แยก Monolith เป็น Cloud-native Managed Components คือการเปลี่ยนสถาปัตยกรรม"
        },
        {
          "questionId": 16,
          "key": "local-set-02:q16",
          "topic": "L01 — Agility vs Pay-as-you-go",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Wrong | คำว่า economic concept และ no data-center build-out เน้นรายจ่ายตามการใช้"
        },
        {
          "questionId": 26,
          "key": "local-set-02:q26",
          "topic": "L09 — IAM Identity Center vs Organizations",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Wrong | มี Corporate Identity Provider เพื่อให้พนักงานเข้า AWS Accounts: Identity Center"
        },
        {
          "questionId": 27,
          "key": "local-set-02:q27",
          "topic": "L09 — IAM Role vs Amazon Cognito",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | EC2 workload ต้องได้ AWS Permissions ชั่วคราวจาก IAM Role ไม่ใช่ User Sign-in ในแอป"
        },
        {
          "questionId": 29,
          "key": "local-set-02:q29",
          "topic": "L09 — IAM Access Analyzer",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct · flagged | โจทย์ถาม S3 Resource เปิดให้ Identity นอกองค์กรเข้าถึงหรือไม่"
        },
        {
          "questionId": 30,
          "key": "local-set-02:q30",
          "topic": "L09 — Least privilege vs Zero Trust",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct · flagged | อ่าน S3 ได้แต่ห้ามลบ คือจำกัด Permissions ให้แคบตามหน้าที่"
        },
        {
          "questionId": 31,
          "key": "local-set-02:q31",
          "topic": "L09 — AWS WAF vs AWS Firewall Manager",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ถาม Central Policy Management ข้ามหลาย AWS Accounts ไม่ใช่การกรองที่เว็บเดียว"
        },
        {
          "questionId": 32,
          "key": "local-set-02:q32",
          "topic": "L09 — GuardDuty vs Inspector",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Suspicious API Calls/Credential Misuse คือพฤติกรรมผิดปกติ ไม่ใช่ CVE/Package Vulnerability"
        },
        {
          "questionId": 33,
          "key": "local-set-02:q33",
          "topic": "L09 — AWS WAF vs Shield vs GuardDuty",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Wrong | Two layers สำหรับ Public Web: WAF กรอง HTTP Requests และ Shield ป้องกัน DDoS"
        },
        {
          "questionId": 37,
          "key": "local-set-02:q37",
          "topic": "L04 — AWS CDK vs CloudFormation",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Wrong | familiar programming language และ synthesize templates ระบุ AWS CDK"
        },
        {
          "questionId": 38,
          "key": "local-set-02:q38",
          "topic": "L04 — Region vs Availability Zone",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Wrong | ข้อกำหนด Data Residency ตามพื้นที่ภูมิศาสตร์ต้องเลือก Region"
        },
        {
          "questionId": 39,
          "key": "local-set-02:q39",
          "topic": "L04 — Edge Location vs CloudFront",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | คำถามถาม Infrastructure Concept/Location ไม่ได้ถามชื่อบริการ CDN"
        },
        {
          "questionId": 42,
          "key": "local-set-02:q42",
          "topic": "L03 — ECS + Fargate",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct · flagged | ECS เลือก Fargate เพื่อรัน Container โดยไม่บริหาร EC2 Fleet"
        },
        {
          "questionId": 43,
          "key": "local-set-02:q43",
          "topic": "L03 — Amazon Lightsail",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct · flagged | เหมาะกับเว็บไซต์/ธุรกิจขนาดเล็กที่ต้องการ VM แบบ Bundle"
        },
        {
          "questionId": 44,
          "key": "local-set-02:q44",
          "topic": "L07 — Amazon Neptune",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Correct · flagged | Fraud Rings และความเชื่อมโยงหลายชั้นเป็น Graph Use Case"
        },
        {
          "questionId": 46,
          "key": "local-set-02:q46",
          "topic": "L12 — AWS SCT vs AWS DMS",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Wrong | Database Engine ต่างชนิดและต้องแปลง Incompatible Schema ให้ดู Schema Conversion"
        },
        {
          "questionId": 47,
          "key": "local-set-02:q47",
          "topic": "L05 — NAT Gateway vs Direct Connect",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Wrong | EC2 Private Subnet ต้อง Download Internet Updates โดยไม่รับ Unsolicited Inbound: NAT Gateway"
        },
        {
          "questionId": 50,
          "key": "local-set-02:q50",
          "topic": "L06 — Amazon FSx for Windows File Server vs EFS",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Wrong | โจทย์มี Windows Servers และ SMB File Share จึงใช้ FSx for Windows"
        },
        {
          "questionId": 55,
          "key": "local-set-02:q55",
          "topic": "L02 — Amazon SQS vs Step Functions",
          "type": "concept",
          "rawFlags": [
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language"
          ],
          "note": "Wrong | Downstream Service ล่มชั่วคราว ต้อง Buffer Tasks รอประมวลผล: SQS"
        },
        {
          "questionId": 56,
          "key": "local-set-02:q56",
          "topic": "L03 — CodeBuild vs CodePipeline",
          "type": "concept",
          "rawFlags": [
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language"
          ],
          "note": "Correct · flagged | CodeBuild ทำ Build/Test ส่วน CodePipeline คุมการส่งงานหลาย Stage"
        },
        {
          "questionId": 57,
          "key": "local-set-02:q57",
          "topic": "L03 — Amazon Connect",
          "type": "concept",
          "rawFlags": [
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language"
          ],
          "note": "Correct · flagged | ถ้าโจทย์ถาม Cloud Contact Center สำหรับ Support Agents เลือก Amazon Connect"
        },
        {
          "questionId": 58,
          "key": "local-set-02:q58",
          "topic": "L02 — Dedicated Hosts",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct · flagged | licensed by physical cores เป็น Keyword สำหรับ Dedicated Hosts"
        },
        {
          "questionId": 60,
          "key": "local-set-02:q60",
          "topic": "L11 — Reserved Instances vs Savings Plans vs Capacity Reservations",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Wrong | เลือก TWO ที่ได้ Pricing Discount แลก Usage Commitment ไม่ใช่รับประกัน Capacity"
        },
        {
          "questionId": 64,
          "key": "local-set-02:q64",
          "topic": "L11 — AWS Partner Network vs AWS Support Center",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ต้องการผู้เชี่ยวชาญภายนอกทำ Migration ให้หา AWS Partner Network"
        }
      ],
      "details": [
        {
          "questionId": 1,
          "result": "Wrong",
          "topic": "L01 — Agility vs Pay-as-you-go",
          "selected": "Pay-as-you-go",
          "correct": "Agility",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดจากการเลือกรายการที่ใกล้กับ Requirement; ยังไม่ได้ยืนยันวิธีคิดตอนเลือก",
          "memoryCue": "Agility = สร้าง/ทดลองเร็ว; Pay-as-you-go = จ่ายตามใช้",
          "notes": [
            "โจทย์เน้นความสะดวกและความรวดเร็วในการสร้าง/ลบ Test Environment มากกว่าเรื่องคิดเงิน",
            "A. Agility — สร้าง test environment ใหม่ภายในไม่กี่นาที",
            "B. Elasticity — ใช้ Auto Scaling เพิ่ม instance ช่วง traffic สูงและลดลงเมื่อ traffic ต่ำ",
            "C. Scalability — ขยายระบบให้รองรับจำนวนผู้ใช้ที่เพิ่มขึ้น",
            "D. Pay-as-you-go — หยุดจ่ายค่า compute เมื่อปิดทรัพยากรที่คิดตามเวลาใช้งาน"
          ]
        },
        {
          "questionId": 3,
          "result": "Wrong",
          "topic": "L01 — Agility vs Elasticity vs Scalability",
          "selected": "Elasticity + Scalability",
          "correct": "Agility + Elasticity",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดจากการเลือกรายการที่ใกล้กับ Requirement; ยังไม่ได้ยืนยันวิธีคิดตอนเลือก",
          "memoryCue": "Agility = ทดลองเร็ว; Elasticity = เพิ่ม/ลดตาม Demand; Scalability = รองรับโหลดโต",
          "notes": [
            "Select TWO ต้องครอบคลุมทั้งการทดลองอย่างรวดเร็วและ Demand ที่ขึ้นลง",
            "A. Agility — สร้าง test environment ใหม่ภายในไม่กี่นาที",
            "B. Elasticity — ใช้ Auto Scaling เพิ่ม instance ช่วง traffic สูงและลดลงเมื่อ traffic ต่ำ",
            "C. Scalability — ขยายระบบให้รองรับจำนวนผู้ใช้ที่เพิ่มขึ้น",
            "D. Rightsizing — ลด EC2 จากขนาดใหญ่เป็นขนาดเล็กหลังตรวจ CPU/Memory utilization",
            "E. High availability — วาง Application Load Balancer หน้า EC2 หลาย AZ เพื่อลด downtime"
          ]
        },
        {
          "questionId": 11,
          "result": "Wrong",
          "topic": "L12 — Application Discovery Service vs Migration Evaluator",
          "selected": "AWS Migration Evaluator",
          "correct": "AWS Application Discovery Service",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดจากการเลือกรายการที่ใกล้กับ Requirement; ยังไม่ได้ยืนยันวิธีคิดตอนเลือก",
          "memoryCue": "Discovery = inventory/dependencies; Evaluator = business case/cost",
          "notes": [
            "ต้องเก็บรายการ Server และ Dependency ก่อนวาง Migration Waves ไม่ใช่ประเมินความคุ้มค่า",
            "A. AWS Application Discovery Service — เก็บ server inventory และ dependencies ก่อน migration",
            "B. AWS Migration Hub — ติดตามสถานะการย้ายแอปจากหลาย tools",
            "C. AWS Migration Evaluator — ประเมิน business case และค่าใช้จ่ายก่อน migration",
            "D. AWS Application Migration Service — replicate และย้าย servers ไป AWS แบบ lift-and-shift"
          ]
        },
        {
          "questionId": 12,
          "result": "Wrong",
          "topic": "L12 — Replatform vs Refactor",
          "selected": "Replatform",
          "correct": "Refactor",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "diagnosis": "ตอบผิด; ใช้ธงที่ผู้สอบทำเครื่องหมายประกอบการประเมิน ไม่ยืนยันสาเหตุอื่น",
          "memoryCue": "Replatform = ปรับบางส่วน; Refactor = เปลี่ยน Architecture",
          "notes": [
            "แยก Monolith เป็น Cloud-native Managed Components คือการเปลี่ยนสถาปัตยกรรม",
            "A. Refactor — ปรับ monolith เป็น microservices ที่ใช้ managed services",
            "B. Replatform — ย้าย database ไป RDS โดยแก้แอปเพียงเล็กน้อย",
            "C. Rehost — ย้าย virtual machine ไป EC2 โดยแทบไม่แก้แอป",
            "D. Retain — เก็บแอปไว้ใน data center เดิมก่อน"
          ]
        },
        {
          "questionId": 16,
          "result": "Wrong",
          "topic": "L01 — Agility vs Pay-as-you-go",
          "selected": "Agility",
          "correct": "Pay-as-you-go",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบผิด; ใช้ธงที่ผู้สอบทำเครื่องหมายประกอบการประเมิน ไม่ยืนยันสาเหตุอื่น",
          "memoryCue": "Agility = เร็ว; Pay-as-you-go = ไม่ต้องลงทุนก้อนใหญ่ล่วงหน้า",
          "notes": [
            "คำว่า economic concept และ no data-center build-out เน้นรายจ่ายตามการใช้",
            "A. Pay-as-you-go — หยุดจ่ายค่า compute เมื่อปิดทรัพยากรที่คิดตามเวลาใช้งาน",
            "B. Economies of scale — AWS กระจายต้นทุนโครงสร้างพื้นฐานให้ลูกค้าจำนวนมาก",
            "C. Agility — สร้าง test environment ใหม่ภายในไม่กี่นาที",
            "D. Rightsizing — ลด EC2 จากขนาดใหญ่เป็นขนาดเล็กหลังตรวจ CPU/Memory utilization"
          ]
        },
        {
          "questionId": 26,
          "result": "Wrong",
          "topic": "L09 — IAM Identity Center vs Organizations",
          "selected": "AWS Organizations",
          "correct": "IAM Identity Center",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบผิด; ใช้ธงที่ผู้สอบทำเครื่องหมายประกอบการประเมิน ไม่ยืนยันสาเหตุอื่น",
          "memoryCue": "Identity Center = Workforce SSO/Permission Sets; Organizations = Multi-account governance/billing",
          "notes": [
            "มี Corporate Identity Provider เพื่อให้พนักงานเข้า AWS Accounts: Identity Center",
            "A. IAM Identity Center — ให้พนักงานใช้ SSO เข้า AWS accounts",
            "B. Amazon Cognito — จัดการการลงชื่อเข้าใช้ของลูกค้าใน web/mobile applications",
            "C. AWS IAM — กำหนด IAM policy ให้ application อ่าน S3 ได้",
            "D. AWS Organizations — จัดกลุ่มบัญชีและใช้ governance / consolidated billing"
          ]
        },
        {
          "questionId": 27,
          "result": "Wrong",
          "topic": "L09 — IAM Role vs Amazon Cognito",
          "selected": "Amazon Cognito",
          "correct": "AWS IAM",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดจากการเลือกรายการที่ใกล้กับ Requirement; ยังไม่ได้ยืนยันวิธีคิดตอนเลือก",
          "memoryCue": "IAM Role/Instance Profile = AWS temporary credentials สำหรับ EC2; Cognito = app users",
          "notes": [
            "EC2 workload ต้องได้ AWS Permissions ชั่วคราวจาก IAM Role ไม่ใช่ User Sign-in ในแอป",
            "A. AWS IAM — กำหนด IAM policy ให้ application อ่าน S3 ได้",
            "B. AWS Secrets Manager — เก็บและหมุนเวียน database password",
            "C. IAM Identity Center — ให้พนักงานใช้ SSO เข้า AWS accounts",
            "D. Amazon Cognito — จัดการการลงชื่อเข้าใช้ของลูกค้าใน web/mobile applications"
          ]
        },
        {
          "questionId": 29,
          "result": "Correct",
          "topic": "L09 — IAM Access Analyzer",
          "selected": "IAM Access Analyzer",
          "correct": "IAM Access Analyzer",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนตามที่ผู้สอบทำเครื่องหมาย",
          "memoryCue": "Access Analyzer = วิเคราะห์ Resource-based Policies และ External Access",
          "notes": [
            "โจทย์ถาม S3 Resource เปิดให้ Identity นอกองค์กรเข้าถึงหรือไม่",
            "A. IAM Access Analyzer — วิเคราะห์ resource access และ external access",
            "B. AWS Config — ตรวจว่า S3 bucket เป็นไปตาม configuration rules หรือไม่",
            "C. AWS Security Hub — รวม security findings จากหลายบริการ",
            "D. AWS Trusted Advisor — ตรวจ best practices รวมถึงต้นทุนและ security"
          ]
        },
        {
          "questionId": 30,
          "result": "Correct",
          "topic": "L09 — Least privilege vs Zero Trust",
          "selected": "Least privilege",
          "correct": "Least privilege",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนตามที่ผู้สอบทำเครื่องหมาย",
          "memoryCue": "Least privilege = ให้สิทธิ์ที่จำเป็น; Zero Trust = ยืนยันและประเมินทุก Access",
          "notes": [
            "อ่าน S3 ได้แต่ห้ามลบ คือจำกัด Permissions ให้แคบตามหน้าที่",
            "A. Least privilege — หลักให้สิทธิ์เท่าที่จำเป็นต่อการทำงาน",
            "B. Defense in depth — หลักใช้มาตรการรักษาความปลอดภัยหลายชั้น",
            "C. Separation of duties — หลักแยกหน้าที่หรืออำนาจสำคัญเพื่อป้องกันการใช้งานผิด",
            "D. Zero Trust — หลักไม่เชื่อถือโดยอัตโนมัติและตรวจสอบการเข้าถึงต่อเนื่อง"
          ]
        },
        {
          "questionId": 31,
          "result": "Wrong",
          "topic": "L09 — AWS WAF vs AWS Firewall Manager",
          "selected": "AWS WAF",
          "correct": "AWS Firewall Manager",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดจากการเลือกรายการที่ใกล้กับ Requirement; ยังไม่ได้ยืนยันวิธีคิดตอนเลือก",
          "memoryCue": "WAF = กรอง Web Requests; Firewall Manager = บริหาร Policies ข้าม Accounts",
          "notes": [
            "โจทย์ถาม Central Policy Management ข้ามหลาย AWS Accounts ไม่ใช่การกรองที่เว็บเดียว",
            "A. AWS Firewall Manager — จัดการ WAF policies ข้ามหลาย accounts",
            "B. AWS WAF — บล็อก HTTP request ที่มีรูปแบบ SQL injection",
            "C. AWS Shield — ช่วยป้องกันการโจมตี DDoS",
            "D. AWS Security Hub — รวม security findings จากหลายบริการ"
          ]
        },
        {
          "questionId": 32,
          "result": "Wrong",
          "topic": "L09 — GuardDuty vs Inspector",
          "selected": "Amazon Inspector",
          "correct": "Amazon GuardDuty",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดจากการเลือกรายการที่ใกล้กับ Requirement; ยังไม่ได้ยืนยันวิธีคิดตอนเลือก",
          "memoryCue": "GuardDuty = Threat Detection; Inspector = Vulnerability Scanning",
          "notes": [
            "Suspicious API Calls/Credential Misuse คือพฤติกรรมผิดปกติ ไม่ใช่ CVE/Package Vulnerability",
            "A. Amazon GuardDuty — ตรวจพบการใช้ credentials ที่น่าสงสัย",
            "B. Amazon Inspector — ตรวจพบ CVE ใน EC2 หรือ ECR container image",
            "C. Amazon Detective — ช่วยสืบสวนความสัมพันธ์ของเหตุการณ์ security",
            "D. AWS Security Hub — รวม security findings จากหลายบริการ"
          ]
        },
        {
          "questionId": 33,
          "result": "Wrong",
          "topic": "L09 — AWS WAF vs Shield vs GuardDuty",
          "selected": "AWS WAF + Amazon GuardDuty",
          "correct": "AWS WAF + AWS Shield",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบผิด; ใช้ธงที่ผู้สอบทำเครื่องหมายประกอบการประเมิน ไม่ยืนยันสาเหตุอื่น",
          "memoryCue": "WAF = HTTP Filter; Shield = DDoS; GuardDuty = Detect Threats",
          "notes": [
            "Two layers สำหรับ Public Web: WAF กรอง HTTP Requests และ Shield ป้องกัน DDoS",
            "A. AWS WAF — บล็อก HTTP request ที่มีรูปแบบ SQL injection",
            "B. AWS Shield — ช่วยป้องกันการโจมตี DDoS",
            "C. Amazon GuardDuty — ตรวจพบการใช้ credentials ที่น่าสงสัย",
            "D. Amazon Inspector — ตรวจพบ CVE ใน EC2 หรือ ECR container image",
            "E. AWS Security Hub — รวม security findings จากหลายบริการ"
          ]
        },
        {
          "questionId": 37,
          "result": "Wrong",
          "topic": "L04 — AWS CDK vs CloudFormation",
          "selected": "AWS CloudFormation",
          "correct": "AWS CDK",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบผิด; ใช้ธงที่ผู้สอบทำเครื่องหมายประกอบการประเมิน ไม่ยืนยันสาเหตุอื่น",
          "memoryCue": "CDK = เขียน IaC ด้วย Programming Languages แล้ว Synth; CloudFormation = Declarative Templates",
          "notes": [
            "familiar programming language และ synthesize templates ระบุ AWS CDK",
            "A. AWS CDK — นิยาม cloud infrastructure ด้วย programming languages",
            "B. AWS CloudFormation — สร้างและจัดการ infrastructure จาก templates",
            "C. AWS CloudShell — shell ผ่าน browser ที่มี AWS tools พร้อมใช้",
            "D. AWS Elastic Beanstalk — deploy applications พร้อมจัดการ underlying environment"
          ]
        },
        {
          "questionId": 38,
          "result": "Wrong",
          "topic": "L04 — Region vs Availability Zone",
          "selected": "Availability Zone",
          "correct": "AWS Region",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบผิด; ใช้ธงที่ผู้สอบทำเครื่องหมายประกอบการประเมิน ไม่ยืนยันสาเหตุอื่น",
          "memoryCue": "Region = Geography/Data Residency; AZ = แยก Facility ภายใน Region",
          "notes": [
            "ข้อกำหนด Data Residency ตามพื้นที่ภูมิศาสตร์ต้องเลือก Region",
            "A. AWS Region — เลือก Region ใกล้ผู้ใช้หรือสอดคล้องข้อกำหนดข้อมูล",
            "B. Availability Zone — แยก infrastructure เพื่อกระจายความเสี่ยงภายใน Region",
            "C. Edge location — ให้ CloudFront ส่ง content จาก edge ใกล้ผู้ใช้",
            "D. Multi-Region deployment — ให้บริการ workload จากมากกว่าหนึ่ง AWS Region"
          ]
        },
        {
          "questionId": 39,
          "result": "Wrong",
          "topic": "L04 — Edge Location vs CloudFront",
          "selected": "Amazon CloudFront",
          "correct": "Edge location",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดจากการเลือกรายการที่ใกล้กับ Requirement; ยังไม่ได้ยืนยันวิธีคิดตอนเลือก",
          "memoryCue": "Edge location = สถานที่ Cache ใกล้ผู้ใช้; CloudFront = CDN Service ที่ใช้ Edge",
          "notes": [
            "คำถามถาม Infrastructure Concept/Location ไม่ได้ถามชื่อบริการ CDN",
            "A. Edge location — ให้ CloudFront ส่ง content จาก edge ใกล้ผู้ใช้",
            "B. Amazon CloudFront — cache static assets ใกล้ผู้ใช้",
            "C. AWS Region — เลือก Region ใกล้ผู้ใช้หรือสอดคล้องข้อกำหนดข้อมูล",
            "D. Multi-Region deployment — ให้บริการ workload จากมากกว่าหนึ่ง AWS Region"
          ]
        },
        {
          "questionId": 42,
          "result": "Correct",
          "topic": "L03 — ECS + Fargate",
          "selected": "AWS Fargate + Amazon ECS",
          "correct": "AWS Fargate + Amazon ECS",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนตามที่ผู้สอบทำเครื่องหมาย",
          "memoryCue": "ECS = Container Orchestration; Fargate = Serverless Container Compute",
          "notes": [
            "ECS เลือก Fargate เพื่อรัน Container โดยไม่บริหาร EC2 Fleet",
            "A. AWS Fargate — รัน ECS tasks โดยไม่ต้องดูแล EC2 hosts",
            "B. Amazon ECS — จัดการ container tasks และ services",
            "C. Amazon EC2 — ติดตั้งแอปและดูแล guest OS บน virtual server",
            "D. AWS CloudShell — shell ผ่าน browser ที่มี AWS tools พร้อมใช้",
            "E. AWS Backup — รวมศูนย์การตั้งค่า backup policies"
          ]
        },
        {
          "questionId": 43,
          "result": "Correct",
          "topic": "L03 — Amazon Lightsail",
          "selected": "Amazon Lightsail",
          "correct": "Amazon Lightsail",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนตามที่ผู้สอบทำเครื่องหมาย",
          "memoryCue": "Lightsail = Bundled Virtual Server ค่าใช้จ่ายคาดการณ์ง่าย",
          "notes": [
            "เหมาะกับเว็บไซต์/ธุรกิจขนาดเล็กที่ต้องการ VM แบบ Bundle",
            "A. Amazon Lightsail — bundled virtual servers สำหรับงานเริ่มต้นที่ไม่ซับซ้อน",
            "B. Amazon EC2 — ติดตั้งแอปและดูแล guest OS บน virtual server",
            "C. AWS Elastic Beanstalk — deploy applications พร้อมจัดการ underlying environment",
            "D. AWS Fargate — รัน ECS tasks โดยไม่ต้องดูแล EC2 hosts"
          ]
        },
        {
          "questionId": 44,
          "result": "Correct",
          "topic": "L07 — Amazon Neptune",
          "selected": "Amazon Neptune",
          "correct": "Amazon Neptune",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนตามที่ผู้สอบทำเครื่องหมาย",
          "memoryCue": "Neptune = Graph Database สำหรับ Nodes/Edges/Relationships",
          "notes": [
            "Fraud Rings และความเชื่อมโยงหลายชั้นเป็น Graph Use Case",
            "A. Amazon Neptune — managed graph database",
            "B. Amazon DynamoDB — เก็บ key-value data ที่ต้องการ low latency",
            "C. Amazon DocumentDB — managed document database ที่รองรับ MongoDB-compatible workloads",
            "D. Amazon RDS — ใช้ managed PostgreSQL เก็บข้อมูลธุรกรรม"
          ]
        },
        {
          "questionId": 46,
          "result": "Wrong",
          "topic": "L12 — AWS SCT vs AWS DMS",
          "selected": "AWS DMS",
          "correct": "AWS SCT",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบผิด; ใช้ธงที่ผู้สอบทำเครื่องหมายประกอบการประเมิน ไม่ยืนยันสาเหตุอื่น",
          "memoryCue": "SCT = Schema/Code Conversion; DMS = Migrate/Replicate Database Data",
          "notes": [
            "Database Engine ต่างชนิดและต้องแปลง Incompatible Schema ให้ดู Schema Conversion",
            "A. AWS SCT — แปลง database schema ระหว่าง engines",
            "B. AWS DMS — replicate ข้อมูลจากฐานข้อมูลต้นทางไปปลายทาง",
            "C. AWS Glue — สร้าง Data Catalog และทำ ETL",
            "D. AWS DataSync — ย้ายข้อมูลระหว่าง storage locations แบบ online"
          ]
        },
        {
          "questionId": 47,
          "result": "Wrong",
          "topic": "L05 — NAT Gateway vs Direct Connect",
          "selected": "AWS Direct Connect",
          "correct": "NAT Gateway",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบผิด; ใช้ธงที่ผู้สอบทำเครื่องหมายประกอบการประเมิน ไม่ยืนยันสาเหตุอื่น",
          "memoryCue": "NAT = Private Subnet Outbound Internet; Direct Connect = Dedicated Network Link",
          "notes": [
            "EC2 Private Subnet ต้อง Download Internet Updates โดยไม่รับ Unsolicited Inbound: NAT Gateway",
            "A. NAT Gateway — ให้ private subnet เริ่ม outbound internet connections",
            "B. Internet Gateway — เปิดเส้นทาง internet สำหรับ VPC ตาม route",
            "C. VPC endpoint — ให้ private subnet ติดต่อ AWS service แบบ private",
            "D. AWS Direct Connect — ใช้ dedicated network connection เชื่อม data center กับ AWS"
          ]
        },
        {
          "questionId": 50,
          "result": "Wrong",
          "topic": "L06 — Amazon FSx for Windows File Server vs EFS",
          "selected": "Amazon EFS",
          "correct": "Amazon FSx for Windows File Server",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบผิด; ใช้ธงที่ผู้สอบทำเครื่องหมายประกอบการประเมิน ไม่ยืนยันสาเหตุอื่น",
          "memoryCue": "FSx for Windows = Managed SMB Shares; EFS = Elastic NFS สำหรับ Linux",
          "notes": [
            "โจทย์มี Windows Servers และ SMB File Share จึงใช้ FSx for Windows",
            "A. Amazon FSx for Windows File Server — managed Windows file shares ด้วย SMB",
            "B. Amazon EFS — ให้หลาย Linux EC2 mount file system เดียวกัน",
            "C. Amazon EBS — แนบ block volume เป็น disk ให้ EC2",
            "D. AWS Storage Gateway — เชื่อม on-premises applications กับ cloud storage"
          ]
        },
        {
          "questionId": 55,
          "result": "Wrong",
          "topic": "L02 — Amazon SQS vs Step Functions",
          "selected": "AWS Step Functions",
          "correct": "Amazon SQS",
          "rawFlags": [
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language"
          ],
          "diagnosis": "ตอบผิด; ใช้ธงที่ผู้สอบทำเครื่องหมายประกอบการประเมิน ไม่ยืนยันสาเหตุอื่น",
          "memoryCue": "SQS = Durable Buffer Queue; Step Functions = Workflow State Machine",
          "notes": [
            "Downstream Service ล่มชั่วคราว ต้อง Buffer Tasks รอประมวลผล: SQS",
            "A. Amazon SQS — เก็บ messages รอ worker ประมวลผล",
            "B. Amazon SNS — ส่ง notification จาก topic ไปหลาย subscribers",
            "C. Amazon EventBridge — route events ไป targets ตาม event patterns",
            "D. AWS Step Functions — จัดลำดับขั้นตอนของ workflow"
          ]
        },
        {
          "questionId": 56,
          "result": "Correct",
          "topic": "L03 — CodeBuild vs CodePipeline",
          "selected": "AWS CodePipeline + AWS CodeBuild",
          "correct": "AWS CodeBuild + AWS CodePipeline",
          "rawFlags": [
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนตามที่ผู้สอบทำเครื่องหมาย",
          "memoryCue": "CodeBuild = Build/Test; CodePipeline = Orchestrate CI/CD Stages",
          "notes": [
            "CodeBuild ทำ Build/Test ส่วน CodePipeline คุมการส่งงานหลาย Stage",
            "A. AWS CodeBuild — build และ test source code",
            "B. AWS CodePipeline — automate release pipelines",
            "C. AWS CloudFormation — สร้างและจัดการ infrastructure จาก templates",
            "D. AWS CDK — นิยาม cloud infrastructure ด้วย programming languages",
            "E. AWS CloudTrail — ตรวจว่า IAM principal ใดเรียก DeleteBucket เมื่อไร"
          ]
        },
        {
          "questionId": 57,
          "result": "Correct",
          "topic": "L03 — Amazon Connect",
          "selected": "Amazon Connect",
          "correct": "Amazon Connect",
          "rawFlags": [
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนตามที่ผู้สอบทำเครื่องหมาย",
          "memoryCue": "Connect = Contact Center สำหรับ Agent; SES = Email; WorkSpaces = Virtual Desktops",
          "notes": [
            "ถ้าโจทย์ถาม Cloud Contact Center สำหรับ Support Agents เลือก Amazon Connect",
            "A. Amazon Connect — cloud contact center",
            "B. Amazon WorkSpaces — managed virtual desktops",
            "C. Amazon AppStream 2.0 — stream desktop applications ไปยัง users",
            "D. Amazon SES — ส่งอีเมลผ่านบริการ managed"
          ]
        },
        {
          "questionId": 58,
          "result": "Correct",
          "topic": "L02 — Dedicated Hosts",
          "selected": "Dedicated Hosts",
          "correct": "Dedicated Hosts",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนตามที่ผู้สอบทำเครื่องหมาย",
          "memoryCue": "Dedicated Hosts = Physical Server เฉพาะ รองรับ License/Compliance ที่ผูกกับ Server",
          "notes": [
            "licensed by physical cores เป็น Keyword สำหรับ Dedicated Hosts",
            "A. Dedicated Hosts — physical server ที่สงวนให้ลูกค้ารายเดียว",
            "B. On-Demand Instances — เปิด EC2 สำหรับงานชั่วคราวโดยไม่ต้อง commit",
            "C. Reserved Instances — รับส่วนลดจาก commitment สำหรับการใช้งานตามเงื่อนไข",
            "D. On-Demand Capacity Reservations — จอง capacity ใน AZ โดยไม่ผูกกับส่วนลดค่าใช้งาน"
          ]
        },
        {
          "questionId": 60,
          "result": "Wrong",
          "topic": "L11 — Reserved Instances vs Savings Plans vs Capacity Reservations",
          "selected": "Savings Plans + On-Demand Capacity Reservations",
          "correct": "Reserved Instances + Savings Plans",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบผิด; ใช้ธงที่ผู้สอบทำเครื่องหมายประกอบการประเมิน ไม่ยืนยันสาเหตุอื่น",
          "memoryCue": "RI/Savings = Commitment Discounts; Capacity Reservations = จอง AZ Capacity",
          "notes": [
            "เลือก TWO ที่ได้ Pricing Discount แลก Usage Commitment ไม่ใช่รับประกัน Capacity",
            "A. Reserved Instances — รับส่วนลดจาก commitment สำหรับการใช้งานตามเงื่อนไข",
            "B. Savings Plans — commit ค่า compute ต่อชั่วโมงเพื่อรับส่วนลด",
            "C. Spot Instances — รัน batch jobs ที่ทนต่อ interruption ได้",
            "D. On-Demand Instances — เปิด EC2 สำหรับงานชั่วคราวโดยไม่ต้อง commit",
            "E. On-Demand Capacity Reservations — จอง capacity ใน AZ โดยไม่ผูกกับส่วนลดค่าใช้งาน"
          ]
        },
        {
          "questionId": 64,
          "result": "Wrong",
          "topic": "L11 — AWS Partner Network vs AWS Support Center",
          "selected": "AWS Support Center",
          "correct": "AWS Partner Network",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดจากการเลือกรายการที่ใกล้กับ Requirement; ยังไม่ได้ยืนยันวิธีคิดตอนเลือก",
          "memoryCue": "APN = หา Third-party AWS Partners; Support Center = เปิด AWS Support Cases",
          "notes": [
            "ต้องการผู้เชี่ยวชาญภายนอกทำ Migration ให้หา AWS Partner Network",
            "A. AWS Partner Network — เครือข่ายคู่ค้าของ AWS",
            "B. AWS Marketplace — ค้นหาและซื้อซอฟต์แวร์/บริการจาก third parties",
            "C. AWS Support Center — เปิดและติดตาม support cases",
            "D. AWS re:Post — ชุมชนถามตอบเกี่ยวกับ AWS"
          ]
        }
      ]
    },
    "local-set-03": {
      "title": "Local Mock Set 3",
      "note": "15 Nov 2026 · 39/65 correct (60.0%) · 26 wrong · 4 Explain More · 2 English Unclear · 5 Concept/Recall flags (may overlap). This is the supplied Set 3 report.",
      "items": [
        {
          "questionId": 2,
          "key": "local-set-03:q2",
          "topic": "L04 — AWS Region vs Agility",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ชี้ไปที่ลูกค้าหลายทวีปและ Latency ไม่ใช่ความเร็วในการเตรียม Environment"
        },
        {
          "questionId": 3,
          "key": "local-set-03:q3",
          "topic": "L01 — High availability vs Durability vs Fault tolerance",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ถามรักษาการให้บริการระหว่าง Infrastructure Failures ไม่ใช่การเก็บข้อมูลให้คงอยู่"
        },
        {
          "questionId": 4,
          "key": "local-set-03:q4",
          "topic": "L01 — Scalability vs Agility",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ลูกค้าเพิ่มอย่างรวดเร็วต้องมี Capacity รองรับ เป็น Scalability"
        },
        {
          "questionId": 8,
          "key": "local-set-03:q8",
          "topic": "L13 — Performance Efficiency vs Operational Excellence",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์เจาะที่ Performance Targets ไม่ใช่ Incident/Operations Process"
        },
        {
          "questionId": 10,
          "key": "local-set-03:q10",
          "topic": "L12 — Retire vs Retain",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ไม่มีผู้ใช้แล้วจึงไม่ย้าย หมายถึงเลิกใช้ ไม่ใช่คงใช้ที่เดิม"
        },
        {
          "questionId": 11,
          "key": "local-set-03:q11",
          "topic": "L12 — Application Migration Service vs DMS/Discovery/SCT",
          "type": "concept",
          "rawFlags": [
            "🟡 Explain More",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "confidence"
          ],
          "note": "Correct; flagged for review | ย้าย Servers หลายเครื่องพร้อม Continuous Replication และแก้โค้ดน้อย = Application Migration Service"
        },
        {
          "questionId": 13,
          "key": "local-set-03:q13",
          "topic": "L01 — Capital expenditure vs Variable expense",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ซื้อ Server ล่วงหน้าแล้วใช้งานไม่เต็มเป็นความเสี่ยงของ CapEx"
        },
        {
          "questionId": 15,
          "key": "local-set-03:q15",
          "topic": "L01 — Elasticity vs AWS Budgets",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Avoid excess capacity ต้องปรับขนาดให้เหมาะจริง ไม่ใช่แค่แจ้งเตือนค่าใช้จ่าย"
        },
        {
          "questionId": 20,
          "key": "local-set-03:q20",
          "topic": "L09 — EC2 Guest OS vs Hypervisor",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Wrong | Shared Responsibility ของ EC2: ลูกค้าจัดการ Guest Operating System ไม่ใช่ Hypervisor"
        },
        {
          "questionId": 21,
          "key": "local-set-03:q21",
          "topic": "L10 — CloudWatch vs AWS Config",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | CPU Utilization เหนือ Threshold ต้อง CloudWatch Alarm"
        },
        {
          "questionId": 23,
          "key": "local-set-03:q23",
          "topic": "L09 — GuardDuty vs Inspector vs Detective",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Detect suspicious activity + investigate relationships = GuardDuty + Detective"
        },
        {
          "questionId": 24,
          "key": "local-set-03:q24",
          "topic": "L09 — Security Hub vs Trusted Advisor",
          "type": "language",
          "rawFlags": [
            "🟡 Explain More",
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language",
            "confidence"
          ],
          "note": "Wrong | คำสำคัญ aggregates findings ชี้ไป Security Hub; รายงานมีธง English Unclear และ Explain More"
        },
        {
          "questionId": 25,
          "key": "local-set-03:q25",
          "topic": "L10 — AWS Config vs CloudTrail",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ explicitly ถาม Configuration Changes ไม่ใช่ API Calls"
        },
        {
          "questionId": 26,
          "key": "local-set-03:q26",
          "topic": "L09 — IAM Cross-account Role vs IAM Identity Center",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Vendor ต้อง Assume Role ชั่วคราวข้าม Accounts โดยไม่แชร์ Long-term Credentials"
        },
        {
          "questionId": 27,
          "key": "local-set-03:q27",
          "topic": "L09 — IAM Identity Center vs AWS Organizations",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | แจก Permission Sets ให้ Employees ข้ามบัญชีจากศูนย์กลางต้อง Identity Center"
        },
        {
          "questionId": 31,
          "key": "local-set-03:q31",
          "topic": "L09 — AWS WAF vs AWS Firewall Manager",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ต้องกรอง SQL Injection ก่อนถึง Web Application จึงเลือก WAF"
        },
        {
          "questionId": 33,
          "key": "local-set-03:q33",
          "topic": "L09 — Amazon Inspector vs Security Hub",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ถามสองงาน: Central Policy Management และ Vulnerability Scan จึงเลือก Firewall Manager + Inspector"
        },
        {
          "questionId": 37,
          "key": "local-set-03:q37",
          "topic": "L03 — AWS Outposts vs AWS Direct Connect",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Wrong | ต้องให้ Hardware Workloads อยู่ On-premises โดยใช้ AWS-consistent Operating Model = Outposts"
        },
        {
          "questionId": 39,
          "key": "local-set-03:q39",
          "topic": "L04 — Multi-Region deployment vs AWS Backup",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Backup Application Deployment ใน Geographically Separate Region ต้อง Multi-Region"
        },
        {
          "questionId": 40,
          "key": "local-set-03:q40",
          "topic": "L03 — AWS Elastic Beanstalk vs ECS/Fargate/EC2",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | เมื่อส่ง Web Code แล้วให้ AWS Provision/Manage Application Environment เลือก Elastic Beanstalk"
        },
        {
          "questionId": 45,
          "key": "local-set-03:q45",
          "topic": "L07 — DynamoDB vs ElastiCache",
          "type": "concept",
          "rawFlags": [
            "🟡 Explain More",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "confidence"
          ],
          "note": "Wrong | Player Profiles ต้อง Persistent Database พร้อม Low-latency Key Lookups; Cache ไม่ใช่ Primary DB ในโจทย์"
        },
        {
          "questionId": 47,
          "key": "local-set-03:q47",
          "topic": "L05 — Transit Gateway vs Amazon VPC",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ถาม Central Hub เชื่อม VPC จำนวนมาก ไม่ใช่สร้าง Network หนึ่งวง"
        },
        {
          "questionId": 48,
          "key": "local-set-03:q48",
          "topic": "L05 — Site-to-Site VPN vs Internet Gateway",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ต้องการ Encrypted Network Connection ผ่าน Internet ที่มีอยู่แล้ว"
        },
        {
          "questionId": 49,
          "key": "local-set-03:q49",
          "topic": "L05 — Internet Gateway vs NAT Gateway",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Public Subnet Internet Connectivity ต้อง Internet Gateway; Security Group กำหนด Permitted Traffic"
        },
        {
          "questionId": 51,
          "key": "local-set-03:q51",
          "topic": "L06 — Instance store vs Amazon EBS",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Correct; flagged for review | Scratch Files สร้างใหม่ได้และไม่ต้อง Persistent = Instance Store"
        },
        {
          "questionId": 52,
          "key": "local-set-03:q52",
          "topic": "L06 — Snowball Edge vs DataSync/Storage Gateway",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Correct; flagged for review | ข้อมูลหลายร้อย TB แต่เครือข่ายจำกัดมาก: พิจารณา Offline Physical Device"
        },
        {
          "questionId": 55,
          "key": "local-set-03:q55",
          "topic": "L02 — EventBridge vs Step Functions",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Independent Apps รับเฉพาะ Matching Business Events = EventBridge"
        },
        {
          "questionId": 57,
          "key": "local-set-03:q57",
          "topic": "L13 — AWS IoT Core vs SNS",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Sensors หลายพันตัวต้อง Secure Message Ingestion จาก Devices = IoT Core"
        },
        {
          "questionId": 60,
          "key": "local-set-03:q60",
          "topic": "L11 — Savings Plans/Reserved Instances vs Capacity Reservations",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ถามสอง Purchasing Options สำหรับ Predictable Long-running Compute จึงเลือก Savings Plans + RI"
        },
        {
          "questionId": 61,
          "key": "local-set-03:q61",
          "topic": "L11 — Cost allocation tags vs Consolidated billing",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | แยก Spend ตาม Departments/Cost Centers ใช้ Cost Allocation Tags ไม่ใช่การรวมบิล"
        }
      ],
      "details": [
        {
          "questionId": 2,
          "result": "Wrong",
          "topic": "L04 — AWS Region vs Agility",
          "question": "A media company has customers on multiple continents and wants lower latency for its global audience. Which AWS benefit supports this?",
          "questionTh": "บริษัทสื่อมีลูกค้าหลายทวีปและต้องการลด latency สำหรับผู้ชมทั่วโลก ประโยชน์ AWS ใดช่วยได้",
          "selected": "Agility",
          "correct": "AWS Region",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Region ใกล้ผู้ใช้อาจช่วยลด Network Latency; Agility คือเริ่ม/ปรับทรัพยากรได้เร็ว",
          "notes": [
            "โจทย์ชี้ไปที่ลูกค้าหลายทวีปและ Latency ไม่ใช่ความเร็วในการเตรียม Environment",
            "A. Agility — สร้าง test environment ใหม่ภายในไม่กี่นาที",
            "B. AWS Region — เลือก Region ใกล้ผู้ใช้หรือสอดคล้องข้อกำหนดข้อมูล",
            "C. Multi-AZ deployment — วาง database standby ในอีก AZ เพื่อรองรับ failover",
            "D. Economies of scale — AWS กระจายต้นทุนโครงสร้างพื้นฐานให้ลูกค้าจำนวนมาก"
          ]
        },
        {
          "questionId": 3,
          "result": "Wrong",
          "topic": "L01 — High availability vs Durability vs Fault tolerance",
          "question": "Which TWO attributes help a cloud application maintain service during infrastructure failures? (Select TWO.)",
          "questionTh": "คุณสมบัติสองข้อใดช่วยให้แอป cloud ให้บริการต่อเมื่อ infrastructure บางส่วนล้มเหลว",
          "selected": "Fault tolerance + Durability",
          "correct": "High availability + Fault tolerance",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Availability = บริการพร้อมใช้; Durability = ข้อมูลไม่สูญหาย; Fault tolerance = ให้บริการต่อเมื่อส่วนประกอบล้มเหลว",
          "notes": [
            "โจทย์ถามรักษาการให้บริการระหว่าง Infrastructure Failures ไม่ใช่การเก็บข้อมูลให้คงอยู่",
            "A. High availability — วาง Application Load Balancer หน้า EC2 หลาย AZ เพื่อลด downtime",
            "B. Fault tolerance — ให้ component สำรองรับงานต่อได้เมื่อ component หลักล้มเหลว",
            "C. Durability — เก็บ objects ใน Amazon S3 เพื่อลดความเสี่ยงข้อมูลสูญหาย",
            "D. Rightsizing — ลด EC2 จากขนาดใหญ่เป็นขนาดเล็กหลังตรวจ CPU/Memory utilization",
            "E. Security — ใช้ IAM จำกัดสิทธิ์และ AWS KMS จัดการ encryption keys"
          ]
        },
        {
          "questionId": 4,
          "result": "Wrong",
          "topic": "L01 — Scalability vs Agility",
          "question": "A retail company needs to serve a sudden surge in customers without waiting to purchase additional physical servers. Which capability matters?",
          "questionTh": "ร้านค้าต้องรองรับลูกค้าพุ่งขึ้นโดยไม่รอซื้อ physical servers เพิ่ม ความสามารถใดสำคัญ",
          "selected": "Agility",
          "correct": "Scalability",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Scalability = รองรับจำนวนผู้ใช้/โหลดเพิ่ม; Agility = ทดลองและ Deploy เร็ว",
          "notes": [
            "ลูกค้าเพิ่มอย่างรวดเร็วต้องมี Capacity รองรับ เป็น Scalability",
            "A. Scalability — ขยายระบบให้รองรับจำนวนผู้ใช้ที่เพิ่มขึ้น",
            "B. High availability — วาง Application Load Balancer หน้า EC2 หลาย AZ เพื่อลด downtime",
            "C. Agility — สร้าง test environment ใหม่ภายในไม่กี่นาที",
            "D. Fault tolerance — ให้ component สำรองรับงานต่อได้เมื่อ component หลักล้มเหลว"
          ]
        },
        {
          "questionId": 8,
          "result": "Wrong",
          "topic": "L13 — Performance Efficiency vs Operational Excellence",
          "question": "A company regularly reviews whether an application's resource choices still meet its performance targets. Which pillar is MOST applicable?",
          "questionTh": "บริษัททบทวนว่าทรัพยากรของแอปยังตอบ performance targets หรือไม่ เป็น pillar ใด",
          "selected": "Operational Excellence",
          "correct": "Performance Efficiency",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Performance Efficiency = ทรัพยากรตอบโจทย์ Latency/Throughput; Operational Excellence = การดำเนินงานและปรับปรุงกระบวนการ",
          "notes": [
            "โจทย์เจาะที่ Performance Targets ไม่ใช่ Incident/Operations Process",
            "A. Performance Efficiency — เลือก EC2 Instance Type ให้เหมาะกับงาน CPU-intensive เพื่อให้ได้ throughput ตามเป้าหมาย",
            "B. Operational Excellence — ทำ post-incident review แล้วปรับ deployment procedure",
            "C. Cost Optimization — ปิด development EC2 ที่ไม่ได้ใช้เพื่อลดค่าใช้จ่าย",
            "D. Reliability — วางระบบหลาย Availability Zones และทดสอบ failover"
          ]
        },
        {
          "questionId": 10,
          "result": "Wrong",
          "topic": "L12 — Retire vs Retain",
          "question": "A business discovers that an old internal application has no users and decides not to migrate it. Which migration strategy is this?",
          "questionTh": "บริษัทพบว่าแอปภายในไม่มีผู้ใช้อีกแล้วจึงไม่ย้ายขึ้น AWS เป็น migration strategy ใด",
          "selected": "Retain",
          "correct": "Retire",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Retire = เลิกใช้ถาวร; Retain = เก็บระบบเดิมไว้ก่อน",
          "notes": [
            "ไม่มีผู้ใช้แล้วจึงไม่ย้าย หมายถึงเลิกใช้ ไม่ใช่คงใช้ที่เดิม",
            "A. Retire — เลิกใช้แอปที่ไม่มีผู้ใช้งาน",
            "B. Retain — เก็บแอปไว้ใน data center เดิมก่อน",
            "C. Rehost — ย้าย virtual machine ไป EC2 โดยแทบไม่แก้แอป",
            "D. Refactor — ปรับ monolith เป็น microservices ที่ใช้ managed services"
          ]
        },
        {
          "questionId": 11,
          "result": "Correct",
          "topic": "L12 — Application Migration Service vs DMS/Discovery/SCT",
          "question": "An enterprise wants to move hundreds of existing servers to AWS with minimal changes and continuous replication. Which service is intended for this?",
          "questionTh": "องค์กรต้องย้าย servers จำนวนมากไป AWS โดยแก้ไขน้อยและ replicate ต่อเนื่อง ควรใช้บริการใด",
          "selected": "AWS Application Migration Service",
          "correct": "AWS Application Migration Service",
          "rawFlags": [
            "🟡 Explain More",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่มีการปักธงทบทวนตามรายงาน",
          "memoryCue": "MGN = ย้าย Servers; DMS = ย้าย/Replicate Database; Discovery = Inventory; SCT = Schema Conversion",
          "notes": [
            "ย้าย Servers หลายเครื่องพร้อม Continuous Replication และแก้โค้ดน้อย = Application Migration Service",
            "A. AWS Application Migration Service — replicate และย้าย servers ไป AWS แบบ lift-and-shift",
            "B. AWS DMS — replicate ข้อมูลจากฐานข้อมูลต้นทางไปปลายทาง",
            "C. AWS SCT — แปลง database schema ระหว่าง engines",
            "D. AWS Application Discovery Service — เก็บ server inventory และ dependencies ก่อน migration"
          ]
        },
        {
          "questionId": 13,
          "result": "Wrong",
          "topic": "L01 — Capital expenditure vs Variable expense",
          "question": "An IT department currently purchases servers that often remain underutilized. Which economic drawback is MOST directly involved?",
          "questionTh": "ฝ่าย IT ซื้อ servers ที่ใช้ไม่เต็ม capacity เป็นประจำ ปัญหาเศรษฐศาสตร์หลักคืออะไร",
          "selected": "Variable expense",
          "correct": "Capital expenditure",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "CapEx = ลงทุนซื้อสินทรัพย์ล่วงหน้า; Variable expense = จ่ายตามการใช้งาน",
          "notes": [
            "ซื้อ Server ล่วงหน้าแล้วใช้งานไม่เต็มเป็นความเสี่ยงของ CapEx",
            "A. Capital expenditure — ซื้อ physical servers ก่อนเริ่มใช้งาน",
            "B. Variable expense — จ่ายค่า compute ตามการใช้งานแต่ละเดือน",
            "C. Rightsizing — ลด EC2 จากขนาดใหญ่เป็นขนาดเล็กหลังตรวจ CPU/Memory utilization",
            "D. Economies of scale — AWS กระจายต้นทุนโครงสร้างพื้นฐานให้ลูกค้าจำนวนมาก"
          ]
        },
        {
          "questionId": 15,
          "result": "Wrong",
          "topic": "L01 — Elasticity vs AWS Budgets",
          "question": "Which TWO approaches can help organizations avoid paying for excess capacity? (Select TWO.)",
          "questionTh": "แนวทางสองข้อใดช่วยองค์กรหลีกเลี่ยงการจ่ายสำหรับ capacity ส่วนเกิน",
          "selected": "Rightsizing + AWS Budgets",
          "correct": "Elasticity + Rightsizing",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Elasticity = ลด Compute Capacity เมื่อ Demand ต่ำ; Budgets = เตือนเมื่อค่าใช้จ่ายใกล้เกินงบ",
          "notes": [
            "Avoid excess capacity ต้องปรับขนาดให้เหมาะจริง ไม่ใช่แค่แจ้งเตือนค่าใช้จ่าย",
            "A. Elasticity — ใช้ Auto Scaling เพิ่ม instance ช่วง traffic สูงและลดลงเมื่อ traffic ต่ำ",
            "B. Rightsizing — ลด EC2 จากขนาดใหญ่เป็นขนาดเล็กหลังตรวจ CPU/Memory utilization",
            "C. Cost allocation tags — ติด tag Project หรือ Team เพื่อแยกค่าใช้จ่าย",
            "D. Savings Plans — commit ค่า compute ต่อชั่วโมงเพื่อรับส่วนลด",
            "E. AWS Budgets — แจ้งเตือนเมื่อค่าใช้จ่ายคาดว่าจะเกินงบ"
          ]
        },
        {
          "questionId": 20,
          "result": "Wrong",
          "topic": "L09 — EC2 Guest OS vs Hypervisor",
          "question": "A company uses EC2 rather than a fully managed compute service. Which additional layer must it typically manage?",
          "questionTh": "บริษัทใช้ EC2 แทน fully managed compute จึงต้องจัดการ layer เพิ่มเติมใด",
          "selected": "Hypervisor",
          "correct": "Guest operating system",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Guest OS ของ EC2 = ลูกค้า Patch/Configure; Hypervisor/Physical Hosts = AWS ดูแล",
          "notes": [
            "Shared Responsibility ของ EC2: ลูกค้าจัดการ Guest Operating System ไม่ใช่ Hypervisor",
            "A. Guest operating system — ลูกค้า patch และ configure Linux บน EC2",
            "B. Hypervisor — AWS ดูแล virtualization layer ใต้ EC2",
            "C. AWS-owned physical servers — AWS ดูแล hardware จริงใน data center",
            "D. AWS data center power systems — ระบบไฟฟ้าและโครงสร้างพื้นฐานของ data centers ที่ AWS ดูแล"
          ]
        },
        {
          "questionId": 21,
          "result": "Wrong",
          "topic": "L10 — CloudWatch vs AWS Config",
          "question": "An operations team wants an alarm when CPU utilization stays above a threshold. Which service should it configure?",
          "questionTh": "ทีม operations ต้องการ alarm เมื่อ CPU utilization เกิน threshold ต่อเนื่อง ควรใช้บริการใด",
          "selected": "AWS Config",
          "correct": "Amazon CloudWatch",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "CloudWatch = Metrics/Logs/Alarms; Config = Configuration/Compliance Rules",
          "notes": [
            "CPU Utilization เหนือ Threshold ต้อง CloudWatch Alarm",
            "A. Amazon CloudWatch — สร้าง Alarm จาก CPUUtilization หรือ application errors",
            "B. AWS CloudTrail — ตรวจว่า IAM principal ใดเรียก DeleteBucket เมื่อไร",
            "C. AWS Config — ตรวจว่า S3 bucket เป็นไปตาม configuration rules หรือไม่",
            "D. AWS Trusted Advisor — ตรวจ best practices รวมถึงต้นทุนและ security"
          ]
        },
        {
          "questionId": 23,
          "result": "Wrong",
          "topic": "L09 — GuardDuty vs Inspector vs Detective",
          "question": "Which TWO AWS services can help a team identify suspicious activity and investigate its relationships? (Select TWO.)",
          "questionTh": "บริการสองข้อใดช่วยตรวจ suspicious activity และสืบสวนความเชื่อมโยงของเหตุการณ์",
          "selected": "Amazon Detective + Amazon Inspector",
          "correct": "Amazon GuardDuty + Amazon Detective",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "GuardDuty = Detect Suspicious Threats; Inspector = Scan Software Vulnerabilities; Detective = Investigate Findings",
          "notes": [
            "Detect suspicious activity + investigate relationships = GuardDuty + Detective",
            "A. Amazon GuardDuty — ตรวจพบการใช้ credentials ที่น่าสงสัย",
            "B. Amazon Detective — ช่วยสืบสวนความสัมพันธ์ของเหตุการณ์ security",
            "C. AWS Security Hub — รวม security findings จากหลายบริการ",
            "D. AWS Config — ตรวจว่า S3 bucket เป็นไปตาม configuration rules หรือไม่",
            "E. Amazon Inspector — ตรวจพบ CVE ใน EC2 หรือ ECR container image"
          ]
        },
        {
          "questionId": 24,
          "result": "Wrong",
          "topic": "L09 — Security Hub vs Trusted Advisor",
          "question": "A company needs to verify whether a planned architecture aligns with security best practices across several AWS accounts. Which service aggregates findings?",
          "questionTh": "บริษัทต้องการดู security findings รวมจากหลายบัญชีเพื่อเทียบ best practices ควรใช้บริการใด",
          "selected": "AWS Trusted Advisor",
          "correct": "AWS Security Hub",
          "rawFlags": [
            "🟡 Explain More",
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language",
            "confidence"
          ],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Security Hub = รวม Security Findings หลาย Sources/Accounts; Trusted Advisor = Best-practice Recommendations",
          "notes": [
            "คำสำคัญ aggregates findings ชี้ไป Security Hub; รายงานมีธง English Unclear และ Explain More",
            "A. AWS Security Hub — รวม security findings จากหลายบริการ",
            "B. AWS Config — ตรวจว่า S3 bucket เป็นไปตาม configuration rules หรือไม่",
            "C. AWS Trusted Advisor — ตรวจ best practices รวมถึงต้นทุนและ security",
            "D. AWS Well-Architected Tool — ประเมิน workloads เทียบ best practices"
          ]
        },
        {
          "questionId": 25,
          "result": "Wrong",
          "topic": "L10 — AWS Config vs CloudTrail",
          "question": "An auditor asks for a history of infrastructure configuration changes rather than user API calls. Which service is the BEST source?",
          "questionTh": "ผู้ตรวจสอบต้องการประวัติ configuration ของ infrastructure ไม่ใช่รายการ API calls ควรใช้บริการใด",
          "selected": "AWS CloudTrail",
          "correct": "AWS Config",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "AWS Config = Configuration History/Rules; CloudTrail = ใครเรียก API อะไรเมื่อไร",
          "notes": [
            "โจทย์ explicitly ถาม Configuration Changes ไม่ใช่ API Calls",
            "A. AWS Config — ตรวจว่า S3 bucket เป็นไปตาม configuration rules หรือไม่",
            "B. AWS CloudTrail — ตรวจว่า IAM principal ใดเรียก DeleteBucket เมื่อไร",
            "C. Amazon CloudWatch — สร้าง Alarm จาก CPUUtilization หรือ application errors",
            "D. AWS Security Hub — รวม security findings จากหลายบริการ"
          ]
        },
        {
          "questionId": 26,
          "result": "Wrong",
          "topic": "L09 — IAM Cross-account Role vs IAM Identity Center",
          "question": "A team needs to grant a vendor temporary cross-account access without sharing long-term credentials. Which AWS feature is appropriate?",
          "questionTh": "ทีมต้องให้ vendor เข้าถึงข้ามบัญชีชั่วคราวโดยไม่แชร์ long-term credentials ควรใช้ความสามารถใด",
          "selected": "IAM Identity Center",
          "correct": "AWS IAM",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "IAM Role = AssumeRole/Temporary Credentials ข้ามบัญชี; Identity Center = Workforce SSO และ Permission Sets",
          "notes": [
            "Vendor ต้อง Assume Role ชั่วคราวข้าม Accounts โดยไม่แชร์ Long-term Credentials",
            "A. AWS IAM — กำหนด IAM policy ให้ application อ่าน S3 ได้",
            "B. AWS Secrets Manager — เก็บและหมุนเวียน database password",
            "C. IAM Identity Center — ให้พนักงานใช้ SSO เข้า AWS accounts",
            "D. IAM Access Analyzer — วิเคราะห์ resource access และ external access"
          ]
        },
        {
          "questionId": 27,
          "result": "Wrong",
          "topic": "L09 — IAM Identity Center vs AWS Organizations",
          "question": "An administrator wants a single place to assign employees permission sets across AWS accounts. Which service fits?",
          "questionTh": "ผู้ดูแลต้องการจุดเดียวสำหรับ assign permission sets ให้พนักงานข้าม AWS accounts ควรใช้บริการใด",
          "selected": "AWS Organizations",
          "correct": "IAM Identity Center",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Identity Center = Workforce Assign Permission Sets; Organizations = Account Structure/SCP/Billing",
          "notes": [
            "แจก Permission Sets ให้ Employees ข้ามบัญชีจากศูนย์กลางต้อง Identity Center",
            "A. IAM Identity Center — ให้พนักงานใช้ SSO เข้า AWS accounts",
            "B. AWS Organizations — จัดกลุ่มบัญชีและใช้ governance / consolidated billing",
            "C. Amazon Cognito — จัดการการลงชื่อเข้าใช้ของลูกค้าใน web/mobile applications",
            "D. AWS IAM — กำหนด IAM policy ให้ application อ่าน S3 ได้"
          ]
        },
        {
          "questionId": 31,
          "result": "Wrong",
          "topic": "L09 — AWS WAF vs AWS Firewall Manager",
          "question": "A web application receives requests containing SQL injection attempts. Which security service can filter these requests before they reach the application?",
          "questionTh": "เว็บได้รับ requests ที่มี SQL injection attempts บริการใดกรองก่อนถึงแอปได้",
          "selected": "AWS Firewall Manager",
          "correct": "AWS WAF",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "WAF = Filter HTTP(S) Requests เช่น SQLi; Firewall Manager = Centrally Manage Security Policies",
          "notes": [
            "โจทย์ต้องกรอง SQL Injection ก่อนถึง Web Application จึงเลือก WAF",
            "A. AWS WAF — บล็อก HTTP request ที่มีรูปแบบ SQL injection",
            "B. AWS Shield — ช่วยป้องกันการโจมตี DDoS",
            "C. AWS Firewall Manager — จัดการ WAF policies ข้ามหลาย accounts",
            "D. Amazon GuardDuty — ตรวจพบการใช้ credentials ที่น่าสงสัย"
          ]
        },
        {
          "questionId": 33,
          "result": "Wrong",
          "topic": "L09 — Amazon Inspector vs Security Hub",
          "question": "Which TWO services help centrally manage security policy and evaluate supported workload vulnerabilities? (Select TWO.)",
          "questionTh": "บริการสองข้อใดช่วยจัดการ security policy ส่วนกลางและตรวจช่องโหว่ workloads",
          "selected": "AWS Security Hub + AWS Firewall Manager",
          "correct": "AWS Firewall Manager + Amazon Inspector",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Inspector = Evaluate Vulnerabilities; Security Hub = Aggregate Security Findings; Firewall Manager = Manage Security Policies",
          "notes": [
            "โจทย์ถามสองงาน: Central Policy Management และ Vulnerability Scan จึงเลือก Firewall Manager + Inspector",
            "A. AWS Firewall Manager — จัดการ WAF policies ข้ามหลาย accounts",
            "B. Amazon Inspector — ตรวจพบ CVE ใน EC2 หรือ ECR container image",
            "C. AWS Security Hub — รวม security findings จากหลายบริการ",
            "D. AWS Config — ตรวจว่า S3 bucket เป็นไปตาม configuration rules หรือไม่",
            "E. AWS Trusted Advisor — ตรวจ best practices รวมถึงต้นทุนและ security"
          ]
        },
        {
          "questionId": 37,
          "result": "Wrong",
          "topic": "L03 — AWS Outposts vs AWS Direct Connect",
          "question": "A company must keep certain hardware workloads on premises but wants an AWS-consistent operating model. Which service supports this?",
          "questionTh": "บริษัทต้องเก็บ hardware workloads ไว้ on premises แต่ต้องการรูปแบบการจัดการเหมือน AWS ควรใช้ใด",
          "selected": "AWS Direct Connect",
          "correct": "AWS Outposts",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Outposts = AWS Infrastructure ติดตั้ง On-premises; Direct Connect = Dedicated Network Link เชื่อม AWS",
          "notes": [
            "ต้องให้ Hardware Workloads อยู่ On-premises โดยใช้ AWS-consistent Operating Model = Outposts",
            "A. AWS Outposts — นำ AWS infrastructure และ services ไปติดตั้ง on premises",
            "B. AWS Direct Connect — ใช้ dedicated network connection เชื่อม data center กับ AWS",
            "C. AWS Transit Gateway — เชื่อม VPC และ on-premises networks แบบ hub",
            "D. AWS Site-to-Site VPN — สร้าง encrypted tunnel ผ่าน internet"
          ]
        },
        {
          "questionId": 39,
          "result": "Wrong",
          "topic": "L04 — Multi-Region deployment vs AWS Backup",
          "question": "A disaster-recovery plan requires a backup application deployment in a geographically separate AWS area. Which approach fits?",
          "questionTh": "แผน DR ต้องมี deployment สำรองในพื้นที่ AWS ที่ห่างกันทางภูมิศาสตร์ ควรใช้แนวทางใด",
          "selected": "AWS Backup",
          "correct": "Multi-Region deployment",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Multi-Region = Application Deployment/DR ต่างภูมิภาค; AWS Backup = Central Backup Policies/Recovery Points",
          "notes": [
            "Backup Application Deployment ใน Geographically Separate Region ต้อง Multi-Region",
            "A. Multi-Region deployment — ให้บริการ workload จากมากกว่าหนึ่ง AWS Region",
            "B. Multi-AZ deployment — วาง database standby ในอีก AZ เพื่อรองรับ failover",
            "C. AWS Backup — รวมศูนย์การตั้งค่า backup policies",
            "D. AWS Outposts — นำ AWS infrastructure และ services ไปติดตั้ง on premises"
          ]
        },
        {
          "questionId": 40,
          "result": "Correct",
          "topic": "L03 — AWS Elastic Beanstalk vs ECS/Fargate/EC2",
          "question": "A developer wants to deploy web code while AWS handles provisioning and application environment management. Which service is suitable?",
          "questionTh": "นักพัฒนาต้อง deploy web code และให้ AWS ดูแล provisioning กับ application environment ควรใช้ใด",
          "selected": "AWS Elastic Beanstalk",
          "correct": "AWS Elastic Beanstalk",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่มีการปักธงทบทวนตามรายงาน",
          "memoryCue": "Elastic Beanstalk = Deploy App พร้อมจัดการ Environment; ECS = Container Orchestration; Fargate = Serverless Container Compute",
          "notes": [
            "เมื่อส่ง Web Code แล้วให้ AWS Provision/Manage Application Environment เลือก Elastic Beanstalk",
            "A. AWS Elastic Beanstalk — deploy applications พร้อมจัดการ underlying environment",
            "B. Amazon EC2 — ติดตั้งแอปและดูแล guest OS บน virtual server",
            "C. Amazon ECS — จัดการ container tasks และ services",
            "D. AWS Fargate — รัน ECS tasks โดยไม่ต้องดูแล EC2 hosts"
          ]
        },
        {
          "questionId": 45,
          "result": "Wrong",
          "topic": "L07 — DynamoDB vs ElastiCache",
          "question": "A mobile game needs a managed database for flexible player profiles with predictable low-latency key lookups. Which service fits?",
          "questionTh": "เกมมือถือใช้ player profiles ที่ schema ยืดหยุ่นและต้อง lookup ด้วย key latency ต่ำ ควรใช้ใด",
          "selected": "Amazon ElastiCache",
          "correct": "Amazon DynamoDB",
          "rawFlags": [
            "🟡 Explain More",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "confidence"
          ],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "DynamoDB = Durable Managed Key-value/Document Database; ElastiCache = In-memory Cache",
          "notes": [
            "Player Profiles ต้อง Persistent Database พร้อม Low-latency Key Lookups; Cache ไม่ใช่ Primary DB ในโจทย์",
            "A. Amazon DynamoDB — เก็บ key-value data ที่ต้องการ low latency",
            "B. Amazon RDS — ใช้ managed PostgreSQL เก็บข้อมูลธุรกรรม",
            "C. Amazon DocumentDB — managed document database ที่รองรับ MongoDB-compatible workloads",
            "D. Amazon ElastiCache — cache ผลลัพธ์ query ที่อ่านซ้ำบ่อย"
          ]
        },
        {
          "questionId": 47,
          "result": "Wrong",
          "topic": "L05 — Transit Gateway vs Amazon VPC",
          "question": "A company has many VPCs and wants a central hub to simplify network connectivity among them. Which service is appropriate?",
          "questionTh": "บริษัทมี VPC จำนวนมากและต้องการ hub กลางเพื่อเชื่อมเครือข่าย ควรใช้บริการใด",
          "selected": "Amazon VPC",
          "correct": "AWS Transit Gateway",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Transit Gateway = Hub เชื่อมหลาย VPC/On-prem; VPC = Isolated Virtual Network",
          "notes": [
            "ถาม Central Hub เชื่อม VPC จำนวนมาก ไม่ใช่สร้าง Network หนึ่งวง",
            "A. AWS Transit Gateway — เชื่อม VPC และ on-premises networks แบบ hub",
            "B. AWS Direct Connect — ใช้ dedicated network connection เชื่อม data center กับ AWS",
            "C. AWS Site-to-Site VPN — สร้าง encrypted tunnel ผ่าน internet",
            "D. Amazon VPC — แยก public subnet และ private subnet"
          ]
        },
        {
          "questionId": 48,
          "result": "Wrong",
          "topic": "L05 — Site-to-Site VPN vs Internet Gateway",
          "question": "A company needs encrypted connectivity from its on-premises network to AWS using an existing internet connection. Which option fits?",
          "questionTh": "บริษัทต้องการเชื่อม on-premises ไป AWS แบบเข้ารหัสผ่าน internet connection ที่มีอยู่ ควรเลือกใด",
          "selected": "Internet Gateway",
          "correct": "AWS Site-to-Site VPN",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Site-to-Site VPN = Encrypted Tunnel On-prem-to-AWS ผ่าน Internet; Internet Gateway = Internet Reachability ของ VPC",
          "notes": [
            "โจทย์ต้องการ Encrypted Network Connection ผ่าน Internet ที่มีอยู่แล้ว",
            "A. AWS Site-to-Site VPN — สร้าง encrypted tunnel ผ่าน internet",
            "B. AWS Direct Connect — ใช้ dedicated network connection เชื่อม data center กับ AWS",
            "C. AWS Transit Gateway — เชื่อม VPC และ on-premises networks แบบ hub",
            "D. Internet Gateway — เปิดเส้นทาง internet สำหรับ VPC ตาม route"
          ]
        },
        {
          "questionId": 49,
          "result": "Wrong",
          "topic": "L05 — Internet Gateway vs NAT Gateway",
          "question": "Which TWO VPC components are commonly involved in allowing public subnet instances to communicate with the internet? (Select TWO.)",
          "questionTh": "องค์ประกอบสองข้อใดเกี่ยวข้องกับการให้ instances ใน public subnet ติดต่อ internet",
          "selected": "Security group + NAT Gateway",
          "correct": "Internet Gateway + Security group",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Internet Gateway = Internet Routing ของ Public Subnet; NAT Gateway = Outbound Internet สำหรับ Private Subnet",
          "notes": [
            "Public Subnet Internet Connectivity ต้อง Internet Gateway; Security Group กำหนด Permitted Traffic",
            "A. Internet Gateway — เปิดเส้นทาง internet สำหรับ VPC ตาม route",
            "B. Security group — ควบคุม inbound/outbound traffic ระดับ ENI",
            "C. NAT Gateway — ให้ private subnet เริ่ม outbound internet connections",
            "D. AWS WAF — บล็อก HTTP request ที่มีรูปแบบ SQL injection",
            "E. VPC endpoint — ให้ private subnet ติดต่อ AWS service แบบ private"
          ]
        },
        {
          "questionId": 51,
          "result": "Correct",
          "topic": "L06 — Instance store vs Amazon EBS",
          "question": "An EC2 application needs very fast scratch storage and can recreate all files after the instance stops. Which option is appropriate?",
          "questionTh": "แอปบน EC2 ต้องการ scratch storage เร็วและสร้างข้อมูลใหม่ได้เมื่อ instance หยุด ควรใช้ใด",
          "selected": "Instance store",
          "correct": "Instance store",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบถูก แต่มีการปักธงทบทวนตามรายงาน",
          "memoryCue": "Instance Store = Fast Ephemeral Scratch Storage; EBS = Persistent Block Volume",
          "notes": [
            "Scratch Files สร้างใหม่ได้และไม่ต้อง Persistent = Instance Store",
            "A. Instance store — temporary local block storage ผูกกับ host",
            "B. Amazon EBS — แนบ block volume เป็น disk ให้ EC2",
            "C. Amazon EFS — ให้หลาย Linux EC2 mount file system เดียวกัน",
            "D. AWS Storage Gateway — เชื่อม on-premises applications กับ cloud storage"
          ]
        },
        {
          "questionId": 52,
          "result": "Correct",
          "topic": "L06 — Snowball Edge vs DataSync/Storage Gateway",
          "question": "A company must transfer hundreds of terabytes from a location with very limited network bandwidth. Which service can help with offline transfer?",
          "questionTh": "บริษัทต้องย้ายข้อมูลหลายร้อย TB จากสถานที่ที่ bandwidth จำกัดมาก ควรใช้บริการใด",
          "selected": "AWS Snowball Edge",
          "correct": "AWS Snowball Edge",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบถูก แต่มีการปักธงทบทวนตามรายงาน",
          "memoryCue": "Snowball Edge = Physical Offline Data Transfer; DataSync = Online Transfer; Storage Gateway = Hybrid Storage Access",
          "notes": [
            "ข้อมูลหลายร้อย TB แต่เครือข่ายจำกัดมาก: พิจารณา Offline Physical Device",
            "A. AWS Snowball Edge — ย้ายข้อมูลจำนวนมากแบบ physical device",
            "B. AWS DataSync — ย้ายข้อมูลระหว่าง storage locations แบบ online",
            "C. AWS Storage Gateway — เชื่อม on-premises applications กับ cloud storage",
            "D. AWS Direct Connect — ใช้ dedicated network connection เชื่อม data center กับ AWS"
          ]
        },
        {
          "questionId": 55,
          "result": "Wrong",
          "topic": "L02 — EventBridge vs Step Functions",
          "question": "A microservice emits business events and several independent applications must receive only matching event types. Which service fits?",
          "questionTh": "microservice ส่ง business events และหลายแอปต้องรับเฉพาะ event types ที่ตรงเงื่อนไข ควรใช้ใด",
          "selected": "AWS Step Functions",
          "correct": "Amazon EventBridge",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "EventBridge = Route Events ด้วย Patterns ไป Targets; Step Functions = Coordinate Multi-step Workflows",
          "notes": [
            "Independent Apps รับเฉพาะ Matching Business Events = EventBridge",
            "A. Amazon EventBridge — route events ไป targets ตาม event patterns",
            "B. Amazon SQS — เก็บ messages รอ worker ประมวลผล",
            "C. Amazon Kinesis Data Streams — รับ streaming records แบบต่อเนื่อง",
            "D. AWS Step Functions — จัดลำดับขั้นตอนของ workflow"
          ]
        },
        {
          "questionId": 57,
          "result": "Wrong",
          "topic": "L13 — AWS IoT Core vs SNS",
          "question": "A manufacturer needs secure message ingestion from thousands of connected sensors. Which AWS service is designed for this?",
          "questionTh": "โรงงานต้องรับ messages จาก sensors จำนวนมากที่เชื่อมต่ออินเทอร์เน็ต ควรใช้บริการใด",
          "selected": "Amazon SNS",
          "correct": "AWS IoT Core",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "IoT Core = Secure Device Connectivity/MQTT; SNS = Pub/Sub Notification/Fan-out",
          "notes": [
            "Sensors หลายพันตัวต้อง Secure Message Ingestion จาก Devices = IoT Core",
            "A. AWS IoT Core — เชื่อมและจัดการ messages จาก IoT devices",
            "B. Amazon Kinesis Data Streams — รับ streaming records แบบต่อเนื่อง",
            "C. Amazon EventBridge — route events ไป targets ตาม event patterns",
            "D. Amazon SNS — ส่ง notification จาก topic ไปหลาย subscribers"
          ]
        },
        {
          "questionId": 60,
          "result": "Wrong",
          "topic": "L11 — Savings Plans/Reserved Instances vs Capacity Reservations",
          "question": "Which TWO AWS purchasing options are appropriate to evaluate for predictable long-running compute usage? (Select TWO.)",
          "questionTh": "ตัวเลือกซื้อสองแบบใดควรพิจารณาสำหรับ compute ที่ใช้ต่อเนื่องและคาดการณ์ได้",
          "selected": "Reserved Instances + On-Demand Capacity Reservations",
          "correct": "Savings Plans + Reserved Instances",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Savings Plans/RI = Commitment Discounts; Capacity Reservations = จอง EC2 Capacity ใน AZ",
          "notes": [
            "โจทย์ถามสอง Purchasing Options สำหรับ Predictable Long-running Compute จึงเลือก Savings Plans + RI",
            "A. Savings Plans — commit ค่า compute ต่อชั่วโมงเพื่อรับส่วนลด",
            "B. Reserved Instances — รับส่วนลดจาก commitment สำหรับการใช้งานตามเงื่อนไข",
            "C. Spot Instances — รัน batch jobs ที่ทนต่อ interruption ได้",
            "D. On-Demand Capacity Reservations — จอง capacity ใน AZ โดยไม่ผูกกับส่วนลดค่าใช้งาน",
            "E. Dedicated Hosts — physical server ที่สงวนให้ลูกค้ารายเดียว"
          ]
        },
        {
          "questionId": 61,
          "result": "Wrong",
          "topic": "L11 — Cost allocation tags vs Consolidated billing",
          "question": "A company wants each department's AWS spending attributed to its own cost center. Which capability helps?",
          "questionTh": "บริษัทต้องการแยกค่า AWS ตาม cost center ของแต่ละแผนก ควรใช้ความสามารถใด",
          "selected": "Consolidated billing",
          "correct": "Cost allocation tags",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "Cost allocation tags = กระจายค่าใช้จ่ายตาม Cost Center; Consolidated billing = รวมบิลหลาย AWS Accounts",
          "notes": [
            "แยก Spend ตาม Departments/Cost Centers ใช้ Cost Allocation Tags ไม่ใช่การรวมบิล",
            "A. Cost allocation tags — ติด tag Project หรือ Team เพื่อแยกค่าใช้จ่าย",
            "B. Consolidated billing — รวมค่าใช้จ่ายหลาย AWS accounts ไว้ที่ payer account",
            "C. AWS Cost Explorer — ดูแนวโน้มค่า EC2 และ S3 ย้อนหลัง",
            "D. AWS Budgets — แจ้งเตือนเมื่อค่าใช้จ่ายคาดว่าจะเกินงบ"
          ]
        }
      ]
    },
    "local-set-04": {
      "title": "Local Mock Set 4",
      "note": "16 Nov 2026 · 49/65 correct (75.4%) · 16 wrong · 4 Explain More, 2 English Unclear, 2 Concept / Recall, 2 Clue / Distractor flags (overlaps possible). Based on the supplied Set 4 attempt.",
      "items": [
        {
          "questionId": 1,
          "key": "local-set-04:q1",
          "topic": "L01 — Agility vs Elasticity",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ภายในวันเดียวหลัง Requirement เปลี่ยนและไม่รอจัดซื้อ Hardware ต้องการความเร็วในการ Provision Prototype (Agility) ไม่ใช่เพิ่มลด Load"
        },
        {
          "questionId": 3,
          "key": "local-set-04:q3",
          "topic": "L01 — Elasticity vs Scalability + Pay-as-you-go",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Wrong | โจทย์แบ่งเป็นสองโจทย์ย่อย: ต้องปรับ Compute ช่วง Spike (Elasticity) และเลิกค่า Compute เมื่อเลิกใช้งาน (Pay-as-you-go)"
        },
        {
          "questionId": 6,
          "key": "local-set-04:q6",
          "topic": "L13 — Performance Efficiency + Cost Optimization vs other Well-Architected pillars",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Response-time Targets ชี้ไป Performance Efficiency; Idle Environment Spending ชี้ไป Cost Optimization ไม่ได้ถามสิ่งแวดล้อมหรือ Runbook"
        },
        {
          "questionId": 11,
          "key": "local-set-04:q11",
          "topic": "L12 — Application Discovery Service vs Application Migration Service",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Wrong | ถาม BEFORE Migration: Map Dependencies ใช้ Application Discovery Service ส่วนประเมิน Business Case ใช้ Migration Evaluator; MGN เป็นขั้นตอนย้ายจริง"
        },
        {
          "questionId": 13,
          "key": "local-set-04:q13",
          "topic": "L01 — Economies of scale vs Capital expenditure",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Wrong | AWS ต่อรอง Network/Hardware ได้ถูกเพราะรวม Demand ของลูกค้าจำนวนมาก จึงเป็น Economies of scale"
        },
        {
          "questionId": 15,
          "key": "local-set-04:q15",
          "topic": "L01 — Variable expense vs Capital expenditure",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์บอกย้ายจากการซื้อ Physical Servers ไปเป็น Monthly Bills ที่ขึ้นลงตาม Usage จึงเป็น Variable expense"
        },
        {
          "questionId": 18,
          "key": "local-set-04:q18",
          "topic": "L09 — Shared Responsibility: Hypervisor vs Guest operating system",
          "type": "clue",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "note": "Correct; flagged for review | แม้จะตอบถูก Q18 แต่มีธง Clue/Distractor: คำว่า AWS rather than customer หมายถึงถาม Security OF the Cloud"
        },
        {
          "questionId": 19,
          "key": "local-set-04:q19",
          "topic": "L09 — EC2 Shared Responsibility: Guest OS + IAM permissions",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | สองหน้าที่ของลูกค้าบน EC2 คือดูแล Guest OS และกำหนดสิทธิ์ AWS IAM แม้บริการ Compute จะอยู่บน AWS"
        },
        {
          "questionId": 22,
          "key": "local-set-04:q22",
          "topic": "L10 — AWS Control Tower vs AWS Organizations vs Security Hub",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Wrong | Landing Zone พร้อม Governed Multi-account Guardrails เน้นตั้งโครงสร้างและกำกับบัญชี (Control Tower) ไม่ใช่ Dashboard รวม Findings"
        },
        {
          "questionId": 23,
          "key": "local-set-04:q23",
          "topic": "L09 — IAM Access Analyzer + Macie vs Inspector",
          "type": "clue",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "note": "Wrong | ต้องหาข้อมูลอ่อนไหวใน S3 (Macie) และตรวจการเปิดสิทธิ์นอกบัญชี (IAM Access Analyzer) ไม่ได้ถาม Software Vulnerabilities"
        },
        {
          "questionId": 34,
          "key": "local-set-04:q34",
          "topic": "L09 — AWS Firewall Manager vs WAF and Shield",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | ตอบถูกแต่ปัก English Unclear; centrally manage policies across accounts คือ Firewall Manager"
        },
        {
          "questionId": 39,
          "key": "local-set-04:q39",
          "topic": "L04 — Edge location vs Amazon CloudFront",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Wrong | โจทย์ถาม Infrastructure component that holds caches ไม่ได้ถามชื่อ CDN Service; Edge location เป็นสถานที่หรือจุดบริการของ CloudFront"
        },
        {
          "questionId": 42,
          "key": "local-set-04:q42",
          "topic": "L03 — AWS Lambda vs Elastic Beanstalk",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Resize Image หลัง S3 Upload โดยไม่เปิด Server ระหว่างงาน = Lambda; Elastic Beanstalk เป็น Platform สำหรับ Deploy Apps"
        },
        {
          "questionId": 43,
          "key": "local-set-04:q43",
          "topic": "L03 — Amazon ECS vs EC2/EKS/Fargate",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ต้องการจัด Replicas, Rolling Updates และ Health Recovery แบบ AWS-native และไม่ใช้ Kubernetes จึงเป็น ECS"
        },
        {
          "questionId": 45,
          "key": "local-set-04:q45",
          "topic": "L07 — Amazon DynamoDB vs ElastiCache/Neptune/RDS",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | ตอบถูกแต่ปัก Explain More; Player Sessions/Items เป็น Persistent Primary Store ค้นตาม Player ID จึงใช้ DynamoDB"
        },
        {
          "questionId": 48,
          "key": "local-set-04:q48",
          "topic": "L05 — VPC endpoint vs Internet Gateway/NAT Gateway",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Private Subnet ไป S3 โดยไม่ใช้ Public IP หรือ Internet Route = VPC Endpoint; Internet Gateway สร้างเส้นทางออก Internet"
        },
        {
          "questionId": 49,
          "key": "local-set-04:q49",
          "topic": "L05 — Site-to-Site VPN + Direct Connect vs Internet Gateway",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | สองเงื่อนไขมีคนละคำตอบ: Encrypted Internet Tunnel = VPN; Dedicated Circuit = Direct Connect ไม่ใช่ Internet Gateway"
        },
        {
          "questionId": 54,
          "key": "local-set-04:q54",
          "topic": "L08 — Amazon Bedrock vs SageMaker AI",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ต้องการใช้ Pretrained Foundation Models ผ่าน API โดยไม่ Train เอง ให้เลือก Bedrock มากกว่า SageMaker AI"
        },
        {
          "questionId": 60,
          "key": "local-set-04:q60",
          "topic": "L11 — On-Demand vs Spot vs On-Demand Capacity Reservations",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ถามสอง Pricing Options ที่ไม่มี Term Commitment สำหรับ Ordinary Usage กับ Interruptible Spare Capacity คือ On-Demand + Spot; Capacity Reservations ตอบโจทย์จอง Capacity"
        },
        {
          "questionId": 62,
          "key": "local-set-04:q62",
          "topic": "L11 — AWS Cost Explorer vs Cost and Usage Report",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ต้อง Filter ย้อนหลังตาม Service/Linked Account และดู Trend ตรงกับ Cost Explorer; CUR เหมาะกับ Raw Detailed Analysis"
        }
      ],
      "details": [
        {
          "questionId": 1,
          "result": "Wrong",
          "topic": "L01 — Agility vs Elasticity",
          "question": "A research team needs an analytics prototype on the same day its requirement changes, without waiting for hardware procurement. Which cloud benefit is MOST relevant?",
          "questionTh": "ทีมวิจัยต้องสร้าง Analytics Prototype ภายในวันเดียวหลัง Requirement เปลี่ยน โดยไม่รอจัดซื้อ Hardware เป็นประโยชน์ Cloud ใดที่ตรงที่สุด",
          "selected": "Elasticity",
          "correct": "Agility",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดเพราะเลือกตัวเลือกที่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลตอนคิดจริงยังไม่ทราบ",
          "memoryCue": "Agility = สร้างและทดลองสิ่งใหม่ได้รวดเร็ว; Elasticity = ปรับ Capacity ขึ้นลงตาม Demand",
          "notes": [
            "ภายในวันเดียวหลัง Requirement เปลี่ยนและไม่รอจัดซื้อ Hardware ต้องการความเร็วในการ Provision Prototype (Agility) ไม่ใช่เพิ่มลด Load",
            "A. Scalability — Scalability คือความสามารถรองรับโหลดที่เพิ่มขึ้น ส่วน Elasticity เน้นปรับทั้งเพิ่มและลด capacity ตาม demand ที่เปลี่ยนไป",
            "B. Agility — จัดสรรและทดลองทรัพยากรได้รวดเร็ว [คำตอบที่ถูก]",
            "C. Elasticity — Elasticity คือการเพิ่มลด capacity ตาม demand ส่วนโจทย์นี้เน้นความเร็วในการสร้างและเลิกใช้ test environment",
            "D. Pay-as-you-go — Pay-as-you-go คือจ่ายตามการใช้งานจริง แม้ช่วยเรื่องค่าใช้จ่าย แต่ไม่ใช่คุณสมบัติที่อธิบายความเร็วในการสร้าง environment"
          ]
        },
        {
          "questionId": 3,
          "result": "Wrong",
          "topic": "L01 — Elasticity vs Scalability + Pay-as-you-go",
          "question": "A ticketing company wants to add compute during short spikes and avoid compute charges for resources after they are terminated. Which TWO cloud characteristics support these needs? (Select TWO.)",
          "questionTh": "บริษัทขายตั๋วต้องเพิ่ม Compute เมื่อ Traffic พุ่งสั้น ๆ และหยุดจ่าย Compute ที่ยุติใช้งาน ข้อใดสองลักษณะรองรับโดยตรง",
          "selected": "Pay-as-you-go + Scalability",
          "correct": "Pay-as-you-go + Elasticity",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบผิด; ธงช่วยระบุสิ่งที่อยากทบทวน แต่ยังไม่ยืนยันวิธีคิดจริงขณะเลือก",
          "memoryCue": "Elasticity = เพิ่ม/ลด Capacity ตาม Demand; Scalability = รองรับ Workload Growth; Pay-as-you-go = จ่ายตามใช้",
          "notes": [
            "โจทย์แบ่งเป็นสองโจทย์ย่อย: ต้องปรับ Compute ช่วง Spike (Elasticity) และเลิกค่า Compute เมื่อเลิกใช้งาน (Pay-as-you-go)",
            "A. Pay-as-you-go — Pay-as-you-go คือจ่ายตามการใช้งานจริง แม้ช่วยเรื่องค่าใช้จ่าย แต่ไม่ใช่คุณสมบัติที่อธิบายความเร็วในการสร้าง environment [คำตอบที่ถูก]",
            "B. Fault tolerance — ทำงานต่อได้เมื่อบางส่วนล้มเหลว",
            "C. High availability — High availability มุ่งให้บริการพร้อมใช้งานโดยรวม แต่อาจมีช่วง failover; โจทย์นี้เน้นทำงานต่อได้แม้ component หยุดกะทันหัน",
            "D. Elasticity — Elasticity คือการเพิ่มลด capacity ตาม demand ส่วนโจทย์นี้เน้นความเร็วในการสร้างและเลิกใช้ test environment [คำตอบที่ถูก]",
            "E. Scalability — Scalability คือความสามารถรองรับโหลดที่เพิ่มขึ้น ส่วน Elasticity เน้นปรับทั้งเพิ่มและลด capacity ตาม demand ที่เปลี่ยนไป"
          ]
        },
        {
          "questionId": 6,
          "result": "Wrong",
          "topic": "L13 — Performance Efficiency + Cost Optimization vs other Well-Architected pillars",
          "question": "A team must both meet strict response-time targets by choosing suitable compute resources and eliminate spending on idle environments. Which TWO pillars apply MOST directly? (Select TWO.)",
          "questionTh": "ทีมต้องเลือก Compute ให้ผ่าน Response-time Target และลดค่าใช้จ่ายของ Environment ที่ว่าง ข้อใดสอง Pillars ที่ตรงที่สุด",
          "selected": "Sustainability + Operational Excellence",
          "correct": "Performance Efficiency + Cost Optimization",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดเพราะเลือกตัวเลือกที่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลตอนคิดจริงยังไม่ทราบ",
          "memoryCue": "Performance Efficiency = ตอบ Latency/Throughput Targets; Cost Optimization = ใช้จ่ายคุ้มค่า; Sustainability = ลด Environmental Impact; Operational Excellence = ปรับกระบวนการ",
          "notes": [
            "Response-time Targets ชี้ไป Performance Efficiency; Idle Environment Spending ชี้ไป Cost Optimization ไม่ได้ถามสิ่งแวดล้อมหรือ Runbook",
            "A. Sustainability — Sustainability เน้นผลกระทบต่อสิ่งแวดล้อม ไม่ใช่การเลือก resource ให้ได้ performance targets",
            "B. Performance Efficiency — Performance Efficiency เป็น pillar ด้านประสิทธิภาพ แต่โจทย์ถามชื่อวิธีเลือกขนาด resource ให้พอดี [คำตอบที่ถูก]",
            "C. Reliability — Reliability เป็นแนวคิดกว้างเรื่องการทำงานและฟื้นจาก failure ส่วนโจทย์เจาะจงความสามารถทำงานต่อเมื่อ component ล้มเหลว",
            "D. Cost Optimization — Cost Optimization เป็นเป้าหมายกว้างในการลดค่าใช้จ่าย ส่วนโจทย์ระบุวิธีลดขนาด instance จาก usage ที่วัดได้ [คำตอบที่ถูก]",
            "E. Operational Excellence — Operational Excellence เน้นการดำเนินงานและปรับปรุงกระบวนการ ไม่ได้เน้นการเลือก compute เพื่อให้ได้ throughput"
          ]
        },
        {
          "questionId": 11,
          "result": "Wrong",
          "topic": "L12 — Application Discovery Service vs Application Migration Service",
          "question": "Before migration, a firm must map dependencies among on-premises servers and separately create a financial business case for executives. Which TWO services help? (Select TWO.)",
          "questionTh": "ก่อน Migration บริษัทต้องทำแผน Dependencies ของ Servers และทำ Financial Business Case ให้ผู้บริหาร ข้อใดสองบริการที่รองรับ",
          "selected": "AWS Migration Evaluator + AWS Application Migration Service",
          "correct": "AWS Migration Evaluator + AWS Application Discovery Service",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบผิด; ธงช่วยระบุสิ่งที่อยากทบทวน แต่ยังไม่ยืนยันวิธีคิดจริงขณะเลือก",
          "memoryCue": "Application Discovery Service = สำรวจ Inventory/Dependencies; Application Migration Service (MGN) = ย้าย Servers/Replicate; Migration Evaluator = Financial Business Case",
          "notes": [
            "ถาม BEFORE Migration: Map Dependencies ใช้ Application Discovery Service ส่วนประเมิน Business Case ใช้ Migration Evaluator; MGN เป็นขั้นตอนย้ายจริง",
            "A. AWS Migration Evaluator — ช่วยสร้าง business case และ cost assessment ก่อน migration [คำตอบที่ถูก]",
            "B. AWS Migration Hub — ติดตามความคืบหน้าการ migration",
            "C. AWS DMS — ย้ายและ replicate databases",
            "D. AWS Application Discovery Service — รวบรวมข้อมูล servers และ dependencies เพื่อวางแผน migration [คำตอบที่ถูก]",
            "E. AWS Application Migration Service — ย้าย servers โดยทำ lift-and-shift"
          ]
        },
        {
          "questionId": 13,
          "result": "Wrong",
          "topic": "L01 — Economies of scale vs Capital expenditure",
          "question": "A cloud provider negotiates lower network and hardware prices by operating infrastructure for millions of customers. Which economic concept explains this?",
          "questionTh": "ผู้ให้บริการ Cloud ต่อรองราคา Network และ Hardware ได้ต่ำเพราะดูแล Infrastructure ให้ลูกค้าจำนวนมหาศาล เป็นแนวคิดใด",
          "selected": "Capital expenditure",
          "correct": "Economies of scale",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบผิด; ธงช่วยระบุสิ่งที่อยากทบทวน แต่ยังไม่ยืนยันวิธีคิดจริงขณะเลือก",
          "memoryCue": "Economies of scale = ต้นทุนต่อหน่วยลดจากการจัดซื้อ/ดำเนินงานจำนวนมาก; Capital expenditure = ลงทุนสินทรัพย์ล่วงหน้า",
          "notes": [
            "AWS ต่อรอง Network/Hardware ได้ถูกเพราะรวม Demand ของลูกค้าจำนวนมาก จึงเป็น Economies of scale",
            "A. Rightsizing — Rightsizing คือเลือกขนาด resource ให้เหมาะกับการใช้งานที่วัดได้ แต่ไม่ได้หมายถึงการเพิ่มลด capacity ตาม demand แบบต่อเนื่อง",
            "B. Economies of scale — Economies of scale คือข้อได้เปรียบด้านต้นทุนจากการใช้ทรัพยากรรวมจำนวนมาก ไม่ใช่การลดขนาด instance ของบริษัท [คำตอบที่ถูก]",
            "C. Variable expense — ค่าใช้จ่ายที่เปลี่ยนตามการใช้งาน",
            "D. Capital expenditure — ค่าใช้จ่ายลงทุนล่วงหน้าในสินทรัพย์"
          ]
        },
        {
          "questionId": 15,
          "result": "Wrong",
          "topic": "L01 — Variable expense vs Capital expenditure",
          "question": "A company switches from buying physical servers to a cloud bill that varies monthly with its consumption. Which expense model now dominates?",
          "questionTh": "บริษัทเปลี่ยนจากซื้อ Physical Servers เป็นบิล Cloud ที่เปลี่ยนทุกเดือนตามการใช้ เป็น Expense Model ใด",
          "selected": "Capital expenditure",
          "correct": "Variable expense",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดเพราะเลือกตัวเลือกที่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลตอนคิดจริงยังไม่ทราบ",
          "memoryCue": "Variable expense = ค่าใช้จ่ายเปลี่ยนตาม Consumption; Capital expenditure = ซื้อสินทรัพย์ล่วงหน้า",
          "notes": [
            "โจทย์บอกย้ายจากการซื้อ Physical Servers ไปเป็น Monthly Bills ที่ขึ้นลงตาม Usage จึงเป็น Variable expense",
            "A. Capital expenditure — ค่าใช้จ่ายลงทุนล่วงหน้าในสินทรัพย์",
            "B. Variable expense — ค่าใช้จ่ายที่เปลี่ยนตามการใช้งาน [คำตอบที่ถูก]",
            "C. Savings Plans — ส่วนลดตาม commitment ด้านการใช้ compute",
            "D. Consolidated billing — รวมการเรียกเก็บเงินหลายบัญชีใน Organizations"
          ]
        },
        {
          "questionId": 18,
          "result": "Correct",
          "topic": "L09 — Shared Responsibility: Hypervisor vs Guest operating system",
          "question": "Which security layer is managed by AWS rather than the customer for a standard Amazon EC2 instance?",
          "questionTh": "Security Layer ใด AWS เป็นผู้ดูแล ไม่ใช่ลูกค้า สำหรับ EC2 Instance ทั่วไป",
          "selected": "Hypervisor",
          "correct": "Hypervisor",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนจากผู้สอบ",
          "memoryCue": "AWS ดูแล Hypervisor/Physical Hosts; ลูกค้าดูแล Guest OS, IAM Policies และการตั้งค่าของตนบน EC2",
          "notes": [
            "แม้จะตอบถูก Q18 แต่มีธง Clue/Distractor: คำว่า AWS rather than customer หมายถึงถาม Security OF the Cloud",
            "A. Guest operating system — ระบบปฏิบัติการภายใน EC2 ที่ลูกค้าต้องกำหนดค่าและ patch",
            "B. Configuring IAM permissions — ลูกค้ากำหนดสิทธิ์ IAM identities และ resource access ที่จำเป็น",
            "C. Hypervisor — ระบบ virtualization underlying EC2 ที่ AWS ดูแล [คำตอบที่ถูก]",
            "D. Managing customer encryption key policies — ลูกค้ากำหนดนโยบายการใช้ encryption keys ที่ควบคุมเอง"
          ]
        },
        {
          "questionId": 19,
          "result": "Correct",
          "topic": "L09 — EC2 Shared Responsibility: Guest OS + IAM permissions",
          "question": "A team hosts a custom API on EC2. Which TWO activities remain its responsibility under the shared responsibility model? (Select TWO.)",
          "questionTh": "ทีมโฮสต์ Custom API บน EC2 กิจกรรมใดสองข้อยังเป็นหน้าที่ของทีมตาม Shared Responsibility Model",
          "selected": "Guest operating system + Configuring IAM permissions",
          "correct": "Guest operating system + Configuring IAM permissions",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนจากผู้สอบ",
          "memoryCue": "ลูกค้า Patch/Configure Guest Operating System บน EC2 และกำหนด IAM Permissions; AWS ดูแล Data Centers/Physical Hardware",
          "notes": [
            "สองหน้าที่ของลูกค้าบน EC2 คือดูแล Guest OS และกำหนดสิทธิ์ AWS IAM แม้บริการ Compute จะอยู่บน AWS",
            "A. Guest operating system — ระบบปฏิบัติการภายใน EC2 ที่ลูกค้าต้องกำหนดค่าและ patch [คำตอบที่ถูก]",
            "B. Maintaining AWS physical servers — หน้าที่ของ AWS ในการบำรุงรักษา hardware underlying services",
            "C. Configuring IAM permissions — ลูกค้ากำหนดสิทธิ์ IAM identities และ resource access ที่จำเป็น [คำตอบที่ถูก]",
            "D. Securing AWS data centers — หน้าที่ของ AWS ในการรักษาความปลอดภัยศูนย์ข้อมูลทางกายภาพ",
            "E. AWS-owned physical servers — เครื่อง server จริงใน AWS data centers ที่ AWS ดูแล"
          ]
        },
        {
          "questionId": 22,
          "result": "Wrong",
          "topic": "L10 — AWS Control Tower vs AWS Organizations vs Security Hub",
          "question": "An enterprise wants a governed multi-account landing zone with centrally applied guardrails. Which AWS service BEST fits?",
          "questionTh": "องค์กรต้องการ Multi-account Landing Zone พร้อม Guardrails จากส่วนกลาง ควรใช้บริการใด",
          "selected": "AWS Security Hub",
          "correct": "AWS Control Tower",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบผิด; ธงช่วยระบุสิ่งที่อยากทบทวน แต่ยังไม่ยืนยันวิธีคิดจริงขณะเลือก",
          "memoryCue": "Control Tower = ตั้ง Multi-account Landing Zone/Guardrails; Organizations = จัดโครงสร้าง Accounts/SCP; Security Hub = รวม Security Findings; Config = ตรวจ Configuration Rules",
          "notes": [
            "Landing Zone พร้อม Governed Multi-account Guardrails เน้นตั้งโครงสร้างและกำกับบัญชี (Control Tower) ไม่ใช่ Dashboard รวม Findings",
            "A. AWS Control Tower — ตั้งค่าและกำกับ multi-account landing zone [คำตอบที่ถูก]",
            "B. AWS Organizations — จัดกลุ่มบัญชีและใช้ governance / consolidated billing",
            "C. AWS Security Hub — รวม findings และสถานะ security จากหลายแหล่ง",
            "D. AWS Config — ติดตามและประเมิน configuration ของทรัพยากรตามกฎ"
          ]
        },
        {
          "questionId": 23,
          "result": "Wrong",
          "topic": "L09 — IAM Access Analyzer + Macie vs Inspector",
          "question": "A team needs to identify sensitive personal data in S3 and detect resource policies that allow access from outside its accounts. Which TWO services are purpose-built for these tasks? (Select TWO.)",
          "questionTh": "ทีมต้องหาข้อมูลส่วนบุคคลใน S3 และตรวจ Resource Policies ที่อาจเปิดสิทธิ์ให้ภายนอก ข้อใดสองบริการที่ตรงงาน",
          "selected": "Amazon Inspector + Amazon Macie",
          "correct": "IAM Access Analyzer + Amazon Macie",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "diagnosis": "ตอบผิด; ธงช่วยระบุสิ่งที่อยากทบทวน แต่ยังไม่ยืนยันวิธีคิดจริงขณะเลือก",
          "memoryCue": "IAM Access Analyzer = Resource-policy External Access; Macie = Sensitive Data in S3; Inspector = Software Package Vulnerabilities/CVEs",
          "notes": [
            "ต้องหาข้อมูลอ่อนไหวใน S3 (Macie) และตรวจการเปิดสิทธิ์นอกบัญชี (IAM Access Analyzer) ไม่ได้ถาม Software Vulnerabilities",
            "A. Amazon Inspector — สแกนช่องโหว่ของ workload ที่รองรับ",
            "B. IAM Access Analyzer — วิเคราะห์ resource access และ external access [คำตอบที่ถูก]",
            "C. AWS Config — ติดตามและประเมิน configuration ของทรัพยากรตามกฎ",
            "D. Amazon Macie — ค้นหาและจัดประเภทข้อมูลอ่อนไหวใน Amazon S3 [คำตอบที่ถูก]",
            "E. AWS Security Hub — รวม findings และสถานะ security จากหลายแหล่ง"
          ]
        },
        {
          "questionId": 34,
          "result": "Correct",
          "topic": "L09 — AWS Firewall Manager vs WAF and Shield",
          "question": "An administrator needs consistent web ACL policies across many AWS accounts and organizational units. Which service provides centralized management?",
          "questionTh": "ผู้ดูแลต้องการ Web ACL Policies ที่สอดคล้องกันข้าม AWS Accounts และ Organizational Units ใช้บริการใดจัดการจากส่วนกลาง",
          "selected": "AWS Firewall Manager",
          "correct": "AWS Firewall Manager",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนจากผู้สอบ",
          "memoryCue": "Firewall Manager = จัดการ Web ACL/Security Policies ข้าม Accounts; WAF = กรอง HTTP Requests; Shield = DDoS Protection",
          "notes": [
            "ตอบถูกแต่ปัก English Unclear; centrally manage policies across accounts คือ Firewall Manager",
            "A. AWS WAF — กรอง HTTP(S) requests ตาม web ACL rules",
            "B. AWS Security Hub — รวม findings และสถานะ security จากหลายแหล่ง",
            "C. AWS Firewall Manager — จัดการ security policies ส่วนกลางข้ามบัญชี [คำตอบที่ถูก]",
            "D. AWS Shield — ป้องกันการโจมตี DDoS"
          ]
        },
        {
          "questionId": 39,
          "result": "Wrong",
          "topic": "L04 — Edge location vs Amazon CloudFront",
          "question": "A video streaming service stores a single origin in one Region but delivers cached thumbnails from nearby AWS network sites around the world. Which infrastructure component holds these caches?",
          "questionTh": "บริการ Video Streaming มี Origin ใน Region เดียว แต่ส่ง Cached Thumbnails จาก Network Sites ใกล้ผู้ชมทั่วโลก ตำแหน่งนี้เรียกว่าอะไร",
          "selected": "Amazon CloudFront",
          "correct": "Edge location",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบผิด; ธงช่วยระบุสิ่งที่อยากทบทวน แต่ยังไม่ยืนยันวิธีคิดจริงขณะเลือก",
          "memoryCue": "CloudFront = CDN Service; Edge location = AWS network site ที่ใช้ Cache ใกล้ผู้ชม",
          "notes": [
            "โจทย์ถาม Infrastructure component that holds caches ไม่ได้ถามชื่อ CDN Service; Edge location เป็นสถานที่หรือจุดบริการของ CloudFront",
            "A. Amazon CloudFront — content delivery network ที่ใช้ edge locations",
            "B. Availability Zone — พื้นที่โครงสร้างพื้นฐานที่แยกจาก AZ อื่นใน Region",
            "C. Edge location — จุดกระจาย content ใกล้ผู้ใช้ [คำตอบที่ถูก]",
            "D. AWS Region — พื้นที่ทางภูมิศาสตร์ที่มีหลาย Availability Zones"
          ]
        },
        {
          "questionId": 42,
          "result": "Wrong",
          "topic": "L03 — AWS Lambda vs Elastic Beanstalk",
          "question": "A photo website must resize each image after an upload event, without keeping an application server running between uploads. Which compute service is the simplest fit?",
          "questionTh": "เว็บรูปภาพต้อง Resize ภาพเมื่อเกิด Upload Event โดยไม่เปิด Application Server ทิ้งไว้ระหว่าง Uploads ใช้ Compute Service ใด",
          "selected": "AWS Elastic Beanstalk",
          "correct": "AWS Lambda",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดเพราะเลือกตัวเลือกที่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลตอนคิดจริงยังไม่ทราบ",
          "memoryCue": "Lambda = Event-driven Code แบบไม่ต้องเปิด Server รอ; Elastic Beanstalk = Deploy/Manage Application Environment",
          "notes": [
            "Resize Image หลัง S3 Upload โดยไม่เปิด Server ระหว่างงาน = Lambda; Elastic Beanstalk เป็น Platform สำหรับ Deploy Apps",
            "A. Amazon EC2 — ให้ virtual servers ที่ลูกค้าจัดการ guest OS",
            "B. AWS Batch — จัดคิวและรัน batch computing jobs",
            "C. AWS Lambda — รันโค้ดแบบ event-driven โดยไม่จัดการ servers [คำตอบที่ถูก]",
            "D. AWS Elastic Beanstalk — deploy applications พร้อมจัดการ underlying environment"
          ]
        },
        {
          "questionId": 43,
          "result": "Wrong",
          "topic": "L03 — Amazon ECS vs EC2/EKS/Fargate",
          "question": "A team wants to manage replicas, rolling updates, and health recovery for containers using AWS-native orchestration, not Kubernetes. Which service is intended?",
          "questionTh": "ทีมต้องจัดการ Replicas, Rolling Updates และ Recovery ของ Containers ด้วย AWS-native Orchestration ไม่ใช้ Kubernetes ควรเลือกบริการใด",
          "selected": "Amazon EC2",
          "correct": "Amazon ECS",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดเพราะเลือกตัวเลือกที่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลตอนคิดจริงยังไม่ทราบ",
          "memoryCue": "ECS = Container Orchestration จัด Tasks/Services/Desired Count; EKS = Kubernetes Orchestration; Fargate = Compute; EC2 = Virtual Server",
          "notes": [
            "โจทย์ต้องการจัด Replicas, Rolling Updates และ Health Recovery แบบ AWS-native และไม่ใช้ Kubernetes จึงเป็น ECS",
            "A. Amazon EKS — บริการ Kubernetes แบบ managed",
            "B. AWS Fargate — compute engine สำหรับ containers โดยไม่จัดการ servers",
            "C. Amazon ECS — orchestrate containers ด้วย AWS-native control plane [คำตอบที่ถูก]",
            "D. Amazon EC2 — ให้ virtual servers ที่ลูกค้าจัดการ guest OS"
          ]
        },
        {
          "questionId": 45,
          "result": "Correct",
          "topic": "L07 — Amazon DynamoDB vs ElastiCache/Neptune/RDS",
          "question": "A mobile game needs a persistent primary store for player sessions and items, keyed by player ID with consistent low-latency lookups at scale. Which service BEST fits?",
          "questionTh": "เกมมือถือใช้ Primary Persistent Store สำหรับ Session และ Items โดยค้นด้วย Player ID ต้องการ Low Latency ใน Scale สูง ควรใช้บริการใด",
          "selected": "Amazon DynamoDB",
          "correct": "Amazon DynamoDB",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่มีธงทบทวนจากผู้สอบ",
          "memoryCue": "DynamoDB = Durable Managed NoSQL Key-value Database; ElastiCache = In-memory Cache; Neptune = Graph Relationships; RDS = Relational SQL",
          "notes": [
            "ตอบถูกแต่ปัก Explain More; Player Sessions/Items เป็น Persistent Primary Store ค้นตาม Player ID จึงใช้ DynamoDB",
            "A. Amazon ElastiCache — managed in-memory caching",
            "B. Amazon Neptune — managed graph database",
            "C. Amazon RDS — managed relational databases",
            "D. Amazon DynamoDB — managed NoSQL key-value/document database [คำตอบที่ถูก]"
          ]
        },
        {
          "questionId": 48,
          "result": "Wrong",
          "topic": "L05 — VPC endpoint vs Internet Gateway/NAT Gateway",
          "question": "Instances in a private subnet must reach a supported S3 service privately without using a public IP or internet route. Which network feature is appropriate?",
          "questionTh": "Instances ใน Private Subnet ต้องเข้าถึง S3 ที่รองรับแบบ Private โดยไม่ใช้ Public IP หรือ Internet Route ควรเลือก Network Feature ใด",
          "selected": "Internet Gateway",
          "correct": "VPC endpoint",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดเพราะเลือกตัวเลือกที่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลตอนคิดจริงยังไม่ทราบ",
          "memoryCue": "VPC endpoint = Private Connectivity ไป AWS Services; Internet Gateway = Internet Route ของ VPC; NAT Gateway = Outbound Internet ของ Private Subnet",
          "notes": [
            "Private Subnet ไป S3 โดยไม่ใช้ Public IP หรือ Internet Route = VPC Endpoint; Internet Gateway สร้างเส้นทางออก Internet",
            "A. VPC endpoint — เข้าถึง AWS services แบบ private โดยไม่ผ่าน public internet [คำตอบที่ถูก]",
            "B. NAT Gateway — ให้ private subnet เริ่ม outbound connections ไปอินเทอร์เน็ต",
            "C. Internet Gateway — เชื่อม VPC กับอินเทอร์เน็ตตาม route และ security rules",
            "D. AWS Site-to-Site VPN — เข้ารหัสการเชื่อมต่อเครือข่ายผ่านอินเทอร์เน็ต"
          ]
        },
        {
          "questionId": 49,
          "result": "Wrong",
          "topic": "L05 — Site-to-Site VPN + Direct Connect vs Internet Gateway",
          "question": "A company needs one network connection over the internet that encrypts traffic to AWS, and another using a dedicated private circuit. Which TWO AWS connectivity services match these requirements? (Select TWO.)",
          "questionTh": "บริษัทต้องการ Network Connection แบบเข้ารหัสผ่าน Internet และอีกแบบเป็น Dedicated Private Circuit ข้อใดสอง Connectivity Services ที่ตรงงาน",
          "selected": "AWS Site-to-Site VPN + Internet Gateway",
          "correct": "AWS Site-to-Site VPN + AWS Direct Connect",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดเพราะเลือกตัวเลือกที่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลตอนคิดจริงยังไม่ทราบ",
          "memoryCue": "Site-to-Site VPN = Encrypted Tunnel ผ่าน Internet; Direct Connect = Dedicated Private Circuit; Internet Gateway = เส้นทาง Internet ให้ VPC",
          "notes": [
            "สองเงื่อนไขมีคนละคำตอบ: Encrypted Internet Tunnel = VPN; Dedicated Circuit = Direct Connect ไม่ใช่ Internet Gateway",
            "A. AWS Transit Gateway — เชื่อม VPC และ on-premises networks แบบ hub",
            "B. AWS Site-to-Site VPN — เข้ารหัสการเชื่อมต่อเครือข่ายผ่านอินเทอร์เน็ต [คำตอบที่ถูก]",
            "C. Internet Gateway — เชื่อม VPC กับอินเทอร์เน็ตตาม route และ security rules",
            "D. AWS Direct Connect — dedicated private network connection ไป AWS [คำตอบที่ถูก]",
            "E. VPC endpoint — เข้าถึง AWS services แบบ private โดยไม่ผ่าน public internet"
          ]
        },
        {
          "questionId": 54,
          "result": "Wrong",
          "topic": "L08 — Amazon Bedrock vs SageMaker AI",
          "question": "A startup wants to call pretrained foundation models through managed APIs for text generation, without building and training its own ML model. Which service fits?",
          "questionTh": "Startup ต้องการเรียก Pretrained Foundation Models ผ่าน Managed APIs เพื่อสร้างข้อความ โดยไม่ฝึก ML Model ใหม่เอง ใช้บริการใด",
          "selected": "Amazon SageMaker AI",
          "correct": "Amazon Bedrock",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดเพราะเลือกตัวเลือกที่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลตอนคิดจริงยังไม่ทราบ",
          "memoryCue": "Bedrock = เรียก Foundation Models ผ่าน Managed APIs; SageMaker AI = สร้าง ฝึก และ Deploy ML Models",
          "notes": [
            "ต้องการใช้ Pretrained Foundation Models ผ่าน API โดยไม่ Train เอง ให้เลือก Bedrock มากกว่า SageMaker AI",
            "A. Amazon SageMaker AI — สร้าง ฝึก และ deploy machine learning models",
            "B. Amazon Lex — สร้าง conversational interfaces",
            "C. Amazon Bedrock — ใช้งาน foundation models ผ่าน managed APIs [คำตอบที่ถูก]",
            "D. Amazon Polly — แปลงข้อความเป็นเสียงพูด"
          ]
        },
        {
          "questionId": 60,
          "result": "Wrong",
          "topic": "L11 — On-Demand vs Spot vs On-Demand Capacity Reservations",
          "question": "Which TWO EC2 purchasing options are respectively suited to short-term ordinary usage without a long-term commitment and to interruptible spare capacity without a term commitment? (Select TWO.)",
          "questionTh": "ตัวเลือกซื้อ EC2 สองแบบใดใช้กับงานทั่วไปช่วงสั้นแบบไม่มี Long-term Commitment และงานที่ยอมให้ Interrupt จาก Spare Capacity โดยไม่ผูกสัญญาระยะยาว",
          "selected": "Spot Instances + On-Demand Capacity Reservations",
          "correct": "Spot Instances + On-Demand Instances",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดเพราะเลือกตัวเลือกที่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลตอนคิดจริงยังไม่ทราบ",
          "memoryCue": "On-Demand = จ่ายตามใช้ไม่มี Term Commitment; Spot = ส่วนลดจาก EC2 Spare Capacity แต่อาจ Interrupted; Capacity Reservations = จอง EC2 Capacity ใน AZ",
          "notes": [
            "ถามสอง Pricing Options ที่ไม่มี Term Commitment สำหรับ Ordinary Usage กับ Interruptible Spare Capacity คือ On-Demand + Spot; Capacity Reservations ตอบโจทย์จอง Capacity",
            "A. Spot Instances — ใช้ EC2 spare capacity ที่อาจถูกขัดจังหวะ [คำตอบที่ถูก]",
            "B. Reserved Instances — ส่วนลดตาม commitment และคุณสมบัติที่กำหนด",
            "C. Savings Plans — ส่วนลดตาม commitment ด้านการใช้ compute",
            "D. On-Demand Instances — คิดเงินตามการใช้งานโดยไม่มีสัญญาระยะยาว [คำตอบที่ถูก]",
            "E. On-Demand Capacity Reservations — จอง capacity ใน AZ โดยไม่ผูกกับส่วนลดค่าใช้งาน"
          ]
        },
        {
          "questionId": 62,
          "result": "Wrong",
          "topic": "L11 — AWS Cost Explorer vs Cost and Usage Report",
          "question": "An analyst wants to filter actual AWS charges from the previous quarter by service and linked account, then view the spending trend. Which tool fits?",
          "questionTh": "นักวิเคราะห์ต้อง Filter ค่า AWS ที่จ่ายจริงไตรมาสก่อนตาม Service และ Linked Account พร้อมดู Trend ใช้เครื่องมือใด",
          "selected": "AWS Cost and Usage Report",
          "correct": "AWS Cost Explorer",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "ตอบผิดเพราะเลือกตัวเลือกที่ไม่ตรง Requirement หลักตามเฉลย; เหตุผลตอนคิดจริงยังไม่ทราบ",
          "memoryCue": "Cost Explorer = Interactive Historical Cost Trends/Filtering; Cost and Usage Report = Detailed Billing Line-item Data เพื่อนำไปวิเคราะห์ต่อ",
          "notes": [
            "โจทย์ต้อง Filter ย้อนหลังตาม Service/Linked Account และดู Trend ตรงกับ Cost Explorer; CUR เหมาะกับ Raw Detailed Analysis",
            "A. AWS Cost and Usage Report — ข้อมูลค่าใช้จ่ายและการใช้งานละเอียด",
            "B. AWS Budgets — กำหนด budgets และแจ้งเตือนตาม thresholds",
            "C. AWS Pricing Calculator — ประเมินค่าใช้จ่ายก่อนใช้งาน",
            "D. AWS Cost Explorer — วิเคราะห์ค่าใช้จ่ายจริงและแนวโน้ม [คำตอบที่ถูก]"
          ]
        }
      ]
    }
  },
  "history": [
    {
      "setId": "local-set-01",
      "label": "Local Mock Set 1 · 14 Nov 2026",
      "score": 65,
      "total": 65,
      "percent": 100,
      "concept": 0,
      "confidence": 7,
      "language": 0,
      "clue": 0
    },
    {
      "setId": "local-set-02",
      "label": "Local Mock Set 2 · 15 Nov 2026",
      "score": 46,
      "total": 65,
      "percent": 71,
      "concept": 6,
      "confidence": 7,
      "language": 8,
      "clue": 1
    },
    {
      "setId": "local-set-03",
      "label": "Local Mock Set 3 · 15 Nov 2026",
      "score": 39,
      "total": 65,
      "percent": 60,
      "concept": 5,
      "confidence": 4,
      "language": 2,
      "clue": 0
    },
    {
      "setId": "local-set-04",
      "label": "Local Mock Set 4 · 16 Nov 2026",
      "score": 49,
      "total": 65,
      "percent": 75,
      "concept": 2,
      "confidence": 4,
      "language": 2,
      "clue": 2
    }
  ],
  "topicStatus": [],
  "languageTrend": [],
  "languageFocus": []
};
