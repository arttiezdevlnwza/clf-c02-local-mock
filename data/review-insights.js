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
    },
    "local-set-05": {
      "title": "Local Mock Set 5",
      "note": "16 Nov 2026 · 54/65 correct (83.1%) · 11 wrong + 5 correct flagged · 4 Explain More, 1 English Unclear, 2 Concept / Recall, 1 Clue / Distractor (flags may overlap). English note Q13: 'fluctuating bill' means 'บิลที่เปลี่ยนแปลงขึ้นลงตามการใช้บริการ'.",
      "englishNotes": [
        {
          "questionId": 13,
          "phrase": "fluctuating bill",
          "translation": "บิลที่ขึ้นลงตามปริมาณการใช้งาน"
        }
      ],
      "items": [
        {
          "questionId": 4,
          "key": "local-set-05:q4",
          "topic": "L01 — Agility + Elasticity vs Durability",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Select TWO มีสอง Requirement: เปิดโปรโมชัน/Environment ให้เร็ว = Agility และเพิ่ม Compute ชั่วคราวเมื่อมีผู้ใช้ = Elasticity ไม่ได้พูดถึงการเก็บข้อมูล"
        },
        {
          "questionId": 10,
          "key": "local-set-05:q10",
          "topic": "L12 — Refactor vs Replatform / Rehost",
          "type": "clue",
          "rawFlags": [
            "🟡 Explain More",
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue",
            "confidence"
          ],
          "note": "Correct; flagged for review | Microservices ที่ Deploy แยกกันเป็นการเปลี่ยน Architecture เชิงลึกจึงเป็น Refactor ไม่ใช่ Replatform ซึ่งเปลี่ยน Platform เพียงบางส่วน"
        },
        {
          "questionId": 11,
          "key": "local-set-05:q11",
          "topic": "L12 — Application Discovery Service vs Migration Hub vs Migration Evaluator",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Wrong | ต้องใช้ Discovery Service เพื่อค้นหา Server Dependencies และ Migration Evaluator เพื่อประเมิน Migration Costs; Migration Hub มีหน้าที่ติดตาม Progress ระหว่างการย้าย"
        },
        {
          "questionId": 14,
          "key": "local-set-05:q14",
          "topic": "L01 — Economies of scale vs Capital expenditure",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | การซื้อ Hardware จำนวนมากของ Cloud Provider จนต้นทุนต่อหน่วยลด คือ Economies of scale ไม่ใช่การจัดหมวดต้นทุนลงทุนของผู้ซื้อ"
        },
        {
          "questionId": 19,
          "key": "local-set-05:q19",
          "topic": "L09 — Guest OS and IAM vs AWS-owned infrastructure",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | EC2 ให้ลูกค้าดูแล Linux Guest OS และ IAM Permissions ของ Workload ส่วน AWS ดูแล Hypervisor, Data Centers และ Physical Servers"
        },
        {
          "questionId": 26,
          "key": "local-set-05:q26",
          "topic": "L09 — AWS Control Tower vs Organizations",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Correct; flagged for review | Control Tower ช่วย Set up Multi-account Landing Zone และ Governance Guardrails; Organizations จัดโครงสร้าง Account/OUs ซึ่ง Control Tower ใช้ร่วมด้วย"
        },
        {
          "questionId": 27,
          "key": "local-set-05:q27",
          "topic": "L09 — IAM Identity Center vs AWS IAM",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์เป็น Workforce Federation พร้อม Portal เข้าหลาย AWS Accounts จึงใช้ IAM Identity Center ไม่ใช่ IAM Role สำหรับให้สิทธิ์ Workload หรือ User เพียงตัวเดียว"
        },
        {
          "questionId": 31,
          "key": "local-set-05:q31",
          "topic": "L09 — IAM Access Analyzer vs Amazon Inspector",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | IAM Access Analyzer วิเคราะห์ S3 Resource-based Policies ว่าเปิดสิทธิ์ให้ External Principals หรือไม่; Inspector ตรวจ Software Vulnerabilities ไม่ใช่ External Access"
        },
        {
          "questionId": 33,
          "key": "local-set-05:q33",
          "topic": "L09 — Amazon GuardDuty vs Amazon Detective",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ถามเครื่องมือตรวจจับ Threat อัตโนมัติจาก Access Keys ที่อาจถูกขโมย = GuardDuty; Detective ใช้ช่วยสืบสวนหลังมี Finding"
        },
        {
          "questionId": 34,
          "key": "local-set-05:q34",
          "topic": "L09 — AWS Firewall Manager vs Security Hub vs WAF",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | เมื่อโจทย์เน้นบังคับ Web ACL Policy ให้สอดคล้องกันหลาย AWS Accounts ใช้ Firewall Manager; Security Hub แค่รวม Security Findings"
        },
        {
          "questionId": 37,
          "key": "local-set-05:q37",
          "topic": "L03 — AWS CDK vs AWS CloudFormation",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Wrong | AWS CDK ให้เขียน IaC ด้วย TypeScript แล้ว Generate CloudFormation Templates ส่วน CloudFormation คือระบบ Provision/Update Stack จาก Templates"
        },
        {
          "questionId": 42,
          "key": "local-set-05:q42",
          "topic": "L03 — AWS Lambda vs Elastic Beanstalk",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Lambda รัน Event-driven Function สั้น ๆ เมื่อ S3 Upload เกิดขึ้นโดยไม่ต้องเปิด Web Server; Elastic Beanstalk เป็น Platform Deploy Application Environment"
        },
        {
          "questionId": 50,
          "key": "local-set-05:q50",
          "topic": "L06 — Instance store vs Amazon EBS",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | Instance Store เหมาะกับ Temporary Local Data ที่สร้างใหม่ได้และไม่ต้องเก็บเมื่อ Stop/Terminate EC2; EBS เป็น Persistent Block Volume"
        },
        {
          "questionId": 53,
          "key": "local-set-05:q53",
          "topic": "L08 — Amazon Athena vs AWS Glue vs Redshift",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Athena Query Data ใน S3 ด้วย SQL โดยตรง ส่วน Glue ทำ ETL/Schema Catalog ไม่ใช่ตัวหลักในการ Query SQL แบบ Ad hoc"
        },
        {
          "questionId": 60,
          "key": "local-set-05:q60",
          "topic": "L11 — On-Demand Instances vs Dedicated Hosts",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | โจทย์มีสอง Workloads: EC2 ชั่วคราวไม่มี Term Commitment ใช้ On-Demand; Licensing ผูก Physical Cores ต้องพิจารณา Dedicated Hosts. term commitment = ข้อผูกมัดระยะยาว"
        },
        {
          "questionId": 62,
          "key": "local-set-05:q62",
          "topic": "L11 — AWS Cost and Usage Report vs Cost Explorer",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Cost and Usage Report (CUR) ให้รายการค่าใช้จ่ายระดับ Line Item สำหรับ Custom SQL Analysis; Cost Explorer เหมาะดู Trends/Filters บน UI โดยตรง"
        }
      ],
      "details": [
        {
          "questionId": 4,
          "result": "Wrong",
          "topic": "L01 — Agility + Elasticity vs Durability",
          "question": "A retailer needs to start an online promotion rapidly and increase compute only while shoppers are active. Which TWO cloud attributes best address these different needs? (Select TWO.)",
          "questionTh": "ร้านค้าต้องเริ่มโปรโมชันออนไลน์อย่างรวดเร็วและเพิ่ม Compute เฉพาะตอนมีลูกค้าเข้ามามาก ข้อใดสองคุณสมบัติตอบโจทย์แยกกันนี้",
          "selected": "Agility + Durability",
          "correct": "Agility + Elasticity",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่ใกล้เคียงแต่ไม่ตอบ Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "rapidly → Agility; increase compute only while active → Elasticity; Durability → รักษาข้อมูลไม่ให้สูญหาย",
          "notes": [
            "Select TWO มีสอง Requirement: เปิดโปรโมชัน/Environment ให้เร็ว = Agility และเพิ่ม Compute ชั่วคราวเมื่อมีผู้ใช้ = Elasticity ไม่ได้พูดถึงการเก็บข้อมูล",
            "A. Agility — จัดสรรและทดลองทรัพยากรได้รวดเร็ว [คำตอบที่ถูก]",
            "B. Durability — โอกาสที่ข้อมูลยังคงอยู่ไม่สูญหาย",
            "C. Fault tolerance — ทำงานต่อได้เมื่อบางส่วนล้มเหลว",
            "D. Elasticity — Elasticity คือการเพิ่มลด capacity ตาม demand ส่วนโจทย์นี้เน้นความเร็วในการสร้างและเลิกใช้ test environment [คำตอบที่ถูก]",
            "E. High availability — High availability มุ่งให้บริการพร้อมใช้งานโดยรวม แต่อาจมีช่วง failover; โจทย์นี้เน้นทำงานต่อได้แม้ component หยุดกะทันหัน"
          ]
        },
        {
          "questionId": 10,
          "result": "Correct",
          "topic": "L12 — Refactor vs Replatform / Rehost",
          "question": "An insurance company rebuilds a large legacy application as independently deployable microservices while moving to AWS. Which approach describes this work?",
          "questionTh": "บริษัทประกันปรับ Legacy Application ขนาดใหญ่เป็น Microservices ที่ Deploy แยกกันได้ระหว่างย้ายขึ้น AWS เป็นแนวทางใด",
          "selected": "Refactor",
          "correct": "Refactor",
          "rawFlags": [
            "🟡 Explain More",
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue",
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ยังมีธงขอทบทวนตามที่ระบุในไฟล์สอบ",
          "memoryCue": "rebuilds / independently deployable microservices → Refactor; managed platform with minor changes → Replatform",
          "notes": [
            "Microservices ที่ Deploy แยกกันเป็นการเปลี่ยน Architecture เชิงลึกจึงเป็น Refactor ไม่ใช่ Replatform ซึ่งเปลี่ยน Platform เพียงบางส่วน",
            "A. Replatform — Replatform เปลี่ยน platform บางส่วนโดยยังคงโครงสร้างหลัก แต่โจทย์ต้องการแยก monolith และออกแบบ cloud-native",
            "B. Refactor — Refactor ปรับ architecture/code เชิงลึก แต่โจทย์เปลี่ยน platform บางส่วนและแก้ code เพียงเล็กน้อย [คำตอบที่ถูก]",
            "C. Retire — เลิกใช้แอปที่ไม่จำเป็น",
            "D. Rehost — Rehost คือ lift-and-shift โดยแก้ไขน้อย ไม่ใช่การปรับ architecture เป็น cloud-native"
          ]
        },
        {
          "questionId": 11,
          "result": "Wrong",
          "topic": "L12 — Application Discovery Service vs Migration Hub vs Migration Evaluator",
          "question": "Before moving workloads, a team wants a dependency map of existing machines and a separate projected migration cost assessment. Which TWO services target those tasks? (Select TWO.)",
          "questionTh": "ก่อนย้าย Workload ทีมต้องการ Dependency Map ของเครื่องเดิม และรายงานประเมินต้นทุน Migration แยกต่างหาก ข้อใดสอง Services ที่ตรงงาน",
          "selected": "AWS Migration Evaluator + AWS Migration Hub",
          "correct": "AWS Application Discovery Service + AWS Migration Evaluator",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "เลือก Service หรือ Concept ที่ใกล้เคียงแต่ไม่ตอบ Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "dependency map → Application Discovery Service; projected cost/business case → Migration Evaluator; progress dashboard → Migration Hub",
          "notes": [
            "ต้องใช้ Discovery Service เพื่อค้นหา Server Dependencies และ Migration Evaluator เพื่อประเมิน Migration Costs; Migration Hub มีหน้าที่ติดตาม Progress ระหว่างการย้าย",
            "A. AWS Migration Hub — ติดตามความคืบหน้าการ migration",
            "B. AWS Application Discovery Service — รวบรวมข้อมูล servers และ dependencies เพื่อวางแผน migration [คำตอบที่ถูก]",
            "C. AWS Application Migration Service — ย้าย servers โดยทำ lift-and-shift",
            "D. AWS DMS — ย้ายและ replicate databases",
            "E. AWS Migration Evaluator — ช่วยสร้าง business case และ cost assessment ก่อน migration [คำตอบที่ถูก]"
          ]
        },
        {
          "questionId": 14,
          "result": "Wrong",
          "topic": "L01 — Economies of scale vs Capital expenditure",
          "question": "A cloud provider can buy servers and networking equipment in large volumes and offer lower unit costs to customers. What explains this economic advantage?",
          "questionTh": "ผู้ให้บริการ Cloud ซื้อ Server และ Network Equipment จำนวนมากจึงมีต้นทุนต่อหน่วยต่ำกว่า แนวคิดใดอธิบายข้อได้เปรียบนี้",
          "selected": "Capital expenditure",
          "correct": "Economies of scale",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่ใกล้เคียงแต่ไม่ตอบ Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "large volumes + lower unit costs → Economies of scale; buy physical servers upfront → Capital expenditure",
          "notes": [
            "การซื้อ Hardware จำนวนมากของ Cloud Provider จนต้นทุนต่อหน่วยลด คือ Economies of scale ไม่ใช่การจัดหมวดต้นทุนลงทุนของผู้ซื้อ",
            "A. Rightsizing — Rightsizing คือเลือกขนาด resource ให้เหมาะกับการใช้งานที่วัดได้ แต่ไม่ได้หมายถึงการเพิ่มลด capacity ตาม demand แบบต่อเนื่อง",
            "B. Economies of scale — Economies of scale คือข้อได้เปรียบด้านต้นทุนจากการใช้ทรัพยากรรวมจำนวนมาก ไม่ใช่การลดขนาด instance ของบริษัท [คำตอบที่ถูก]",
            "C. Pay-as-you-go — Pay-as-you-go คือจ่ายตามการใช้งานจริง แม้ช่วยเรื่องค่าใช้จ่าย แต่ไม่ใช่คุณสมบัติที่อธิบายความเร็วในการสร้าง environment",
            "D. Capital expenditure — ค่าใช้จ่ายลงทุนล่วงหน้าในสินทรัพย์"
          ]
        },
        {
          "questionId": 19,
          "result": "Correct",
          "topic": "L09 — Guest OS and IAM vs AWS-owned infrastructure",
          "question": "A company operates a Linux API on EC2. Which TWO controls must it maintain itself, rather than expecting AWS to maintain them? (Select TWO.)",
          "questionTh": "บริษัทเปิด Linux API บน EC2 ข้อใดสอง Controls ที่ลูกค้าต้องดูแลเอง ไม่ใช่ AWS ดูแลให้",
          "selected": "Guest operating system + Configuring IAM permissions",
          "correct": "Configuring IAM permissions + Guest operating system",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ยังมีธงขอทบทวนตามที่ระบุในไฟล์สอบ",
          "memoryCue": "customer on EC2 → guest OS patches + IAM policies; AWS → hypervisor/physical hosts/data centers",
          "notes": [
            "EC2 ให้ลูกค้าดูแล Linux Guest OS และ IAM Permissions ของ Workload ส่วน AWS ดูแล Hypervisor, Data Centers และ Physical Servers",
            "A. Configuring IAM permissions — ลูกค้ากำหนดสิทธิ์ IAM identities และ resource access ที่จำเป็น [คำตอบที่ถูก]",
            "B. Securing AWS data centers — หน้าที่ของ AWS ในการรักษาความปลอดภัยศูนย์ข้อมูลทางกายภาพ",
            "C. Guest operating system — ระบบปฏิบัติการภายใน EC2 ที่ลูกค้าต้องกำหนดค่าและ patch [คำตอบที่ถูก]",
            "D. Hypervisor — ระบบ virtualization underlying EC2 ที่ AWS ดูแล",
            "E. Maintaining AWS physical servers — หน้าที่ของ AWS ในการบำรุงรักษา hardware underlying services"
          ]
        },
        {
          "questionId": 26,
          "result": "Correct",
          "topic": "L09 — AWS Control Tower vs Organizations",
          "question": "A company needs centralized setup of a governed landing zone for many AWS accounts, including ready-made guardrails. Which AWS service leads the setup?",
          "questionTh": "บริษัทต้องการตั้ง Landing Zone สำหรับหลาย AWS Accounts พร้อม Guardrails ที่มีให้จากส่วนกลาง ใช้บริการใดเป็นหลัก",
          "selected": "AWS Control Tower",
          "correct": "AWS Control Tower",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบถูก แต่ยังมีธงขอทบทวนตามที่ระบุในไฟล์สอบ",
          "memoryCue": "landing zone / ready-made guardrails → Control Tower; OUs / SCP / consolidated billing → Organizations",
          "notes": [
            "Control Tower ช่วย Set up Multi-account Landing Zone และ Governance Guardrails; Organizations จัดโครงสร้าง Account/OUs ซึ่ง Control Tower ใช้ร่วมด้วย",
            "A. AWS Organizations — จัดกลุ่มบัญชีและใช้ governance / consolidated billing",
            "B. AWS Control Tower — ตั้งค่าและกำกับ multi-account landing zone [คำตอบที่ถูก]",
            "C. AWS Config — ติดตามและประเมิน configuration ของทรัพยากรตามกฎ",
            "D. AWS Security Hub — รวม findings และสถานะ security จากหลายแหล่ง"
          ]
        },
        {
          "questionId": 27,
          "result": "Wrong",
          "topic": "L09 — IAM Identity Center vs AWS IAM",
          "question": "The IT department wants employees to sign into a portal backed by the corporate identity provider and receive access to different AWS accounts. Which service is the intended choice?",
          "questionTh": "ฝ่าย IT ให้พนักงาน Login Portal ที่เชื่อม Corporate Identity Provider และรับสิทธิ์ AWS Accounts ต่าง ๆ ควรใช้บริการใด",
          "selected": "AWS IAM",
          "correct": "IAM Identity Center",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่ใกล้เคียงแต่ไม่ตอบ Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "employees + corporate identity provider + access portal / multiple AWS accounts → IAM Identity Center; roles/policies/assume role → IAM",
          "notes": [
            "โจทย์เป็น Workforce Federation พร้อม Portal เข้าหลาย AWS Accounts จึงใช้ IAM Identity Center ไม่ใช่ IAM Role สำหรับให้สิทธิ์ Workload หรือ User เพียงตัวเดียว",
            "A. Amazon Cognito — จัดการการลงชื่อเข้าใช้ของลูกค้าใน web/mobile applications",
            "B. IAM Identity Center — จัดการการเข้าถึงหลายบัญชีสำหรับ workforce [คำตอบที่ถูก]",
            "C. AWS Organizations — จัดกลุ่มบัญชีและใช้ governance / consolidated billing",
            "D. AWS IAM — กำหนด identities, roles และสิทธิ์เข้าถึง AWS"
          ]
        },
        {
          "questionId": 31,
          "result": "Wrong",
          "topic": "L09 — IAM Access Analyzer vs Amazon Inspector",
          "question": "Before publishing an S3 repository, the team wants to check whether its resource policy permits access from an unintended external principal. Which service is best?",
          "questionTh": "ก่อนเผยแพร่ S3 Repository ทีมต้องตรวจว่า Resource Policy เปิดให้ External Principal ที่ไม่ต้องการหรือไม่ ควรใช้ Service ใด",
          "selected": "Amazon Inspector",
          "correct": "IAM Access Analyzer",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่ใกล้เคียงแต่ไม่ตอบ Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "external principal / resource policy / public access → Access Analyzer; CVE/package vulnerabilities → Inspector",
          "notes": [
            "IAM Access Analyzer วิเคราะห์ S3 Resource-based Policies ว่าเปิดสิทธิ์ให้ External Principals หรือไม่; Inspector ตรวจ Software Vulnerabilities ไม่ใช่ External Access",
            "A. Amazon Macie — ค้นหาและจัดประเภทข้อมูลอ่อนไหวใน Amazon S3",
            "B. AWS Config — ติดตามและประเมิน configuration ของทรัพยากรตามกฎ",
            "C. IAM Access Analyzer — วิเคราะห์ resource access และ external access [คำตอบที่ถูก]",
            "D. Amazon Inspector — สแกนช่องโหว่ของ workload ที่รองรับ"
          ]
        },
        {
          "questionId": 33,
          "result": "Wrong",
          "topic": "L09 — Amazon GuardDuty vs Amazon Detective",
          "question": "A team sees indicators of possible compromised access keys and wants a service to detect this threat automatically. Which is the closest fit?",
          "questionTh": "ทีมพบสัญญาณ Access Keys อาจถูกขโมย ต้องการ Service ตรวจจับ Threat อัตโนมัติ ใช้ตัวใด",
          "selected": "Amazon Detective",
          "correct": "Amazon GuardDuty",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่ใกล้เคียงแต่ไม่ตอบ Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "detect compromised keys / suspicious API activity → GuardDuty; investigate existing finding/graph → Detective",
          "notes": [
            "ถามเครื่องมือตรวจจับ Threat อัตโนมัติจาก Access Keys ที่อาจถูกขโมย = GuardDuty; Detective ใช้ช่วยสืบสวนหลังมี Finding",
            "A. Amazon Detective — ช่วยสืบสวนความสัมพันธ์ของเหตุการณ์ security",
            "B. Amazon GuardDuty — ตรวจจับภัยคุกคามจากสัญญาณและกิจกรรมที่น่าสงสัย [คำตอบที่ถูก]",
            "C. Amazon Inspector — สแกนช่องโหว่ของ workload ที่รองรับ",
            "D. AWS Security Hub — รวม findings และสถานะ security จากหลายแหล่ง"
          ]
        },
        {
          "questionId": 34,
          "result": "Wrong",
          "topic": "L09 — AWS Firewall Manager vs Security Hub vs WAF",
          "question": "A security organization must ensure an approved WAF web ACL policy is consistently applied across a fleet of AWS accounts. Which service provides this centralized control?",
          "questionTh": "องค์กร Security ต้องใช้ Web ACL Policy มาตรฐานกับ AWS Accounts จำนวนมากจากศูนย์กลาง ควรเลือก Service ใด",
          "selected": "AWS Security Hub",
          "correct": "AWS Firewall Manager",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่ใกล้เคียงแต่ไม่ตอบ Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "centrally apply WAF policies across many accounts → Firewall Manager; aggregate findings → Security Hub; filter HTTP request → WAF",
          "notes": [
            "เมื่อโจทย์เน้นบังคับ Web ACL Policy ให้สอดคล้องกันหลาย AWS Accounts ใช้ Firewall Manager; Security Hub แค่รวม Security Findings",
            "A. AWS WAF — กรอง HTTP(S) requests ตาม web ACL rules",
            "B. AWS Firewall Manager — จัดการ security policies ส่วนกลางข้ามบัญชี [คำตอบที่ถูก]",
            "C. AWS Organizations — จัดกลุ่มบัญชีและใช้ governance / consolidated billing",
            "D. AWS Security Hub — รวม findings และสถานะ security จากหลายแหล่ง"
          ]
        },
        {
          "questionId": 37,
          "result": "Wrong",
          "topic": "L03 — AWS CDK vs AWS CloudFormation",
          "question": "A developer wants to describe AWS infrastructure using TypeScript and compile that definition into CloudFormation templates. Which tool should be selected?",
          "questionTh": "Developer ต้องการนิยาม AWS Infrastructure ด้วย TypeScript แล้ว Generate CloudFormation Templates ใช้ Tool ใด",
          "selected": "AWS CloudFormation",
          "correct": "AWS CDK",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "เลือก Service หรือ Concept ที่ใกล้เคียงแต่ไม่ตอบ Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "TypeScript / programmatic infrastructure definition / synthesize templates → AWS CDK; declarative JSON/YAML stacks / update rollback → CloudFormation",
          "notes": [
            "AWS CDK ให้เขียน IaC ด้วย TypeScript แล้ว Generate CloudFormation Templates ส่วน CloudFormation คือระบบ Provision/Update Stack จาก Templates",
            "A. AWS CloudFormation — สร้างและจัดการ infrastructure จาก templates",
            "B. AWS CDK — นิยาม cloud infrastructure ด้วย programming languages [คำตอบที่ถูก]",
            "C. AWS CodeBuild — build และ test source code",
            "D. AWS CloudShell — shell ผ่าน browser ที่มี AWS tools พร้อมใช้"
          ]
        },
        {
          "questionId": 42,
          "result": "Wrong",
          "topic": "L03 — AWS Lambda vs Elastic Beanstalk",
          "question": "An S3 event triggers a brief image-metadata operation that does not need a persistent HTTP server. Which compute service minimizes infrastructure operations?",
          "questionTh": "เมื่อเกิด S3 Event ต้องทำงานสั้น ๆ อ่าน Metadata ของรูป โดยไม่จำเป็นต้องมี HTTP Server รอตลอด ใช้ Compute ใดเพื่อลดการดูแล Infrastructure",
          "selected": "AWS Elastic Beanstalk",
          "correct": "AWS Lambda",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่ใกล้เคียงแต่ไม่ตอบ Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "S3 event + brief operation + no persistent HTTP server → Lambda; deploy long-running web app → Beanstalk",
          "notes": [
            "Lambda รัน Event-driven Function สั้น ๆ เมื่อ S3 Upload เกิดขึ้นโดยไม่ต้องเปิด Web Server; Elastic Beanstalk เป็น Platform Deploy Application Environment",
            "A. AWS Batch — จัดคิวและรัน batch computing jobs",
            "B. AWS Lambda — รันโค้ดแบบ event-driven โดยไม่จัดการ servers [คำตอบที่ถูก]",
            "C. Amazon EC2 — ให้ virtual servers ที่ลูกค้าจัดการ guest OS",
            "D. AWS Elastic Beanstalk — deploy applications พร้อมจัดการ underlying environment"
          ]
        },
        {
          "questionId": 50,
          "result": "Correct",
          "topic": "L06 — Instance store vs Amazon EBS",
          "question": "An application writes temporary scratch files that can be regenerated, and it values local disk speed more than persistence after an EC2 stop. Which storage fits?",
          "questionTh": "แอปสร้าง Scratch Files ที่สร้างใหม่ได้ ต้องการ Local Disk เร็วและไม่ต้องเก็บหลัง Stop EC2 ควรใช้ Storage ใด",
          "selected": "Instance store",
          "correct": "Instance store",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ยังมีธงขอทบทวนตามที่ระบุในไฟล์สอบ",
          "memoryCue": "temporary scratch files / regenerate / no persistence after stop → Instance store; persistent block + snapshots → EBS",
          "notes": [
            "Instance Store เหมาะกับ Temporary Local Data ที่สร้างใหม่ได้และไม่ต้องเก็บเมื่อ Stop/Terminate EC2; EBS เป็น Persistent Block Volume",
            "A. Amazon EBS — persistent block volumes สำหรับ EC2",
            "B. Instance store — temporary local block storage ผูกกับ host [คำตอบที่ถูก]",
            "C. Amazon EFS — shared elastic file system สำหรับ Linux workloads",
            "D. Amazon S3 — durable object storage"
          ]
        },
        {
          "questionId": 53,
          "result": "Wrong",
          "topic": "L08 — Amazon Athena vs AWS Glue vs Redshift",
          "question": "A marketing team needs serverless SQL queries against Parquet files already stored in S3 without loading them into a warehouse. Which service is designed for this?",
          "questionTh": "ทีม Marketing ต้อง Query Parquet ใน S3 ด้วย Serverless SQL โดยไม่โหลดเข้า Data Warehouse ใช้ Service ใด",
          "selected": "AWS Glue",
          "correct": "Amazon Athena",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่ใกล้เคียงแต่ไม่ตอบ Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "serverless SQL + Parquet files in S3 + no warehouse loading → Athena; ETL/Data Catalog → Glue; warehouse → Redshift",
          "notes": [
            "Athena Query Data ใน S3 ด้วย SQL โดยตรง ส่วน Glue ทำ ETL/Schema Catalog ไม่ใช่ตัวหลักในการ Query SQL แบบ Ad hoc",
            "A. AWS Glue — serverless data integration และ catalog",
            "B. Amazon Athena — query data ใน S3 ด้วย SQL [คำตอบที่ถูก]",
            "C. Amazon Redshift — cloud data warehouse สำหรับ analytics",
            "D. Amazon Quick Sight — business intelligence dashboards"
          ]
        },
        {
          "questionId": 60,
          "result": "Correct",
          "topic": "L11 — On-Demand Instances vs Dedicated Hosts",
          "question": "One workload needs ordinary temporary EC2 without term commitment; another requires an entire physical host for software licensing by physical core. Which TWO options match? (Select TWO.)",
          "questionTh": "Workload แรกต้องใช้ EC2 ชั่วคราวแบบไม่ Commit ระยะยาว ส่วนอีกงานต้องการ Physical Host เฉพาะเพื่อใช้ Software License ตาม Physical Core ข้อใดสองตัวเลือกตรงงาน",
          "selected": "Dedicated Hosts + On-Demand Instances",
          "correct": "On-Demand Instances + Dedicated Hosts",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่ยังมีธงขอทบทวนตามที่ระบุในไฟล์สอบ",
          "memoryCue": "without term commitment → On-Demand Instances; entire physical host / physical-core licensing → Dedicated Hosts",
          "notes": [
            "โจทย์มีสอง Workloads: EC2 ชั่วคราวไม่มี Term Commitment ใช้ On-Demand; Licensing ผูก Physical Cores ต้องพิจารณา Dedicated Hosts. term commitment = ข้อผูกมัดระยะยาว",
            "A. On-Demand Instances — คิดเงินตามการใช้งานโดยไม่มีสัญญาระยะยาว [คำตอบที่ถูก]",
            "B. Savings Plans — ส่วนลดตาม commitment ด้านการใช้ compute",
            "C. Reserved Instances — ส่วนลดตาม commitment และคุณสมบัติที่กำหนด",
            "D. Dedicated Hosts — physical server ที่สงวนให้ลูกค้ารายเดียว [คำตอบที่ถูก]",
            "E. Spot Instances — ใช้ EC2 spare capacity ที่อาจถูกขัดจังหวะ"
          ]
        },
        {
          "questionId": 62,
          "result": "Wrong",
          "topic": "L11 — AWS Cost and Usage Report vs Cost Explorer",
          "question": "A team requires the most granular line-item cost and usage data for custom SQL analysis in S3 and Athena. Which billing dataset should it export?",
          "questionTh": "ทีมต้องการ Granular Cost/Usage Line Items สำหรับ Custom SQL Analysis ใน S3 และ Athena ควร Export Billing Dataset ใด",
          "selected": "AWS Cost Explorer",
          "correct": "AWS Cost and Usage Report",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่ใกล้เคียงแต่ไม่ตอบ Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "most granular line-item data / custom SQL in S3 and Athena → CUR; interactive historical charts → Cost Explorer",
          "notes": [
            "Cost and Usage Report (CUR) ให้รายการค่าใช้จ่ายระดับ Line Item สำหรับ Custom SQL Analysis; Cost Explorer เหมาะดู Trends/Filters บน UI โดยตรง",
            "A. AWS Cost Explorer — วิเคราะห์ค่าใช้จ่ายจริงและแนวโน้ม",
            "B. AWS Cost and Usage Report — ข้อมูลค่าใช้จ่ายและการใช้งานละเอียด [คำตอบที่ถูก]",
            "C. AWS Budgets — กำหนด budgets และแจ้งเตือนตาม thresholds",
            "D. AWS Pricing Calculator — ประเมินค่าใช้จ่ายก่อนใช้งาน"
          ]
        }
      ]
    },
    "local-set-06": {
      "title": "Local Mock Set 6",
      "note": "16 Nov 2026 · 61/65 correct (93.8%) · 4 wrong + 13 correct flagged · 5 Explain More, 6 English Unclear, 3 Concept / Recall, 1 Clue / Distractor (flags can overlap).",
      "englishNotes": [
        {
          "questionId": 6,
          "phrase": "rehearse",
          "translation": "ซักซ้อมหรือฝึกซ้อม เช่นซ้อมขั้นตอน Disaster Recovery"
        },
        {
          "questionId": 55,
          "phrase": "emits",
          "translation": "ปล่อยหรือสร้างออกมา ในบริบทนี้หมายถึงส่ง Events ออกจาก Application"
        }
      ],
      "items": [
        {
          "questionId": 4,
          "key": "local-set-06:q4",
          "topic": "L01 — High availability vs Durability",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | มีสองเป้าหมายแยกกัน เว็บต้องยังเข้าได้เมื่อ AZ ล่มคือ High availability ส่วน Media ต้องไม่สูญหายคือ Durability ความพร้อมใช้งานกับการคงอยู่ของข้อมูลไม่ใช่คุณสมบัติเดียวกัน"
        },
        {
          "questionId": 6,
          "key": "local-set-06:q6",
          "topic": "L13 — Reliability vs Operational Excellence",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | rehearse แปลว่า ซักซ้อม การซ้อมรับมือ Region Outage เป็น Reliability ส่วนการจัดทำและปรับปรุง Incident-response Runbooks เป็น Operational Excellence"
        },
        {
          "questionId": 9,
          "key": "local-set-06:q9",
          "topic": "L12 — Retire vs Retain",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | Retire คือเลิกใช้ระบบและปิดถาวร ส่วน Retain คือคงระบบเดิมไว้ใช้งานต่อโดยยังไม่ย้าย คำว่า decommissioned คือยุติการใช้งาน"
        },
        {
          "questionId": 11,
          "key": "local-set-06:q11",
          "topic": "L12 — Migration Hub vs Application Migration Service vs Discovery / Evaluator / DMS / SCT",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Correct; flagged for review | Migration Hub ติดตามความคืบหน้าการย้าย ส่วน Application Migration Service ทำ Replication ของ Servers เพื่อย้ายจริง Discovery Service ใช้ค้นหา Dependencies, Migration Evaluator ประเมินต้นทุน, DMS ย้าย Database, SCT ช่วยแปลง Database Schema"
        },
        {
          "questionId": 12,
          "key": "local-set-06:q12",
          "topic": "L12 — Replatform vs Refactor / Rehost",
          "type": "clue",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "note": "Correct; flagged for review | Replatform เปลี่ยนบางส่วนของ Platform เช่นใช้ Managed Relational Database พร้อมแก้ Connection เล็กน้อย ไม่ใช่ Refactor ที่ออกแบบ Architecture หรือ Code ใหม่เชิงลึก และไม่ใช่ Rehost แบบ Lift-and-shift"
        },
        {
          "questionId": 15,
          "key": "local-set-06:q15",
          "topic": "L01 — Pay-as-you-go + Economies of scale vs Capital expenditure",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Select TWO มีสองเงื่อนไข การไม่ต้องซื้อ Hardware เผื่อ Peak ล่วงหน้าและจ่ายตามการใช้เหมาะกับ Pay-as-you-go ส่วนต้นทุนต่อหน่วยของ Provider ลดเมื่อดำเนินงานขนาดใหญ่คือ Economies of scale. Capital expenditure เป็นค่าใช้จ่ายลงทุนซื้อสินทรัพย์ล่วงหน้า ซึ่งตรงข้ามกับสิ่งที่โจทย์ต้องการหลีกเลี่ยง"
        },
        {
          "questionId": 16,
          "key": "local-set-06:q16",
          "topic": "L01 — Variable expense vs Capital expenditure",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | Variable expense คือค่าใช้จ่ายผันแปรตาม Consumption ต่างจาก Capital expenditure ที่ซื้อ Hardware เป็นสินทรัพย์ล่วงหน้า"
        },
        {
          "questionId": 30,
          "key": "local-set-06:q30",
          "topic": "L09 — AWS KMS vs Secrets Manager vs ACM / IAM",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | KMS ใช้จัดการ Cryptographic Keys สำหรับ Encryption. Secrets Manager จัดเก็บและหมุนเวียน Password หรือ Secrets ส่วน ACM จัดการ TLS Certificates และ IAM ควบคุมสิทธิ์"
        },
        {
          "questionId": 33,
          "key": "local-set-06:q33",
          "topic": "L09 — AWS Shield vs WAF vs Firewall Manager",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | Shield เน้น DDoS Protection รวมถึง Volumetric Attacks. WAF กรอง HTTP(S) Requests ตาม Web ACL ส่วน Firewall Manager จัดการ Security Policies ข้าม Accounts"
        },
        {
          "questionId": 34,
          "key": "local-set-06:q34",
          "topic": "L09 — AWS WAF vs AWS Shield vs Firewall Manager",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | WAF ใช้ Web ACL และ Managed Rules เพื่อกรอง HTTP(S) Requests ที่ ALB ได้. Shield เน้น DDoS Protection ส่วน Firewall Manager เน้น Central Policy Management"
        },
        {
          "questionId": 36,
          "key": "local-set-06:q36",
          "topic": "L03 — Elastic Beanstalk vs CloudFormation vs CDK / ECS",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Correct; flagged for review | Elastic Beanstalk รับ Application Package แล้วจัดการ Web Environment และ Deployment. CloudFormation เป็น Infrastructure Stack Engine, CDK ใช้ภาษา Programming นิยาม Infrastructure และ ECS ใช้จัดการ Containers"
        },
        {
          "questionId": 37,
          "key": "local-set-06:q37",
          "topic": "L03 — CloudFormation vs CDK / Elastic Beanstalk / CodePipeline",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | CloudFormation สร้าง จัดการ และ Rollback Infrastructure Stacks. CDK ใช้เขียน IaC แล้ว Synthesize เป็น CloudFormation, Elastic Beanstalk เน้น Deploy Application, CodePipeline ประสาน CI/CD Stages"
        },
        {
          "questionId": 47,
          "key": "local-set-06:q47",
          "topic": "L05 — Security group vs Network ACL",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Wrong | Security group เป็น Stateful Firewall ที่ใช้กับ Network Interface ของ EC2 เมื่ออนุญาต Inbound HTTPS แล้ว Return Traffic สำหรับ Connection นั้นได้รับอนุญาตโดยสถานะการเชื่อมต่อ. Network ACL เป็น Stateless Filter ที่ระดับ Subnet จึงไม่ตรง Requirement นี้"
        },
        {
          "questionId": 48,
          "key": "local-set-06:q48",
          "topic": "L05 — NAT Gateway vs VPC endpoint / Internet Gateway",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Wrong | NAT Gateway ช่วย EC2 ใน Private Subnet เริ่ม Connection ออก Internet เพื่อ Download Updates โดยไม่เปิดรับ Unsolicited Inbound Connections ไปยัง Instance. VPC endpoint ใช้เข้าถึง Service ที่รองรับผ่าน Private Connectivity ไม่ใช่ Public Repository ทั่วไป"
        },
        {
          "questionId": 51,
          "key": "local-set-06:q51",
          "topic": "L06 — AWS Backup vs DataSync / Storage Gateway / S3",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Correct; flagged for review | AWS Backup ตั้ง Backup Plans และ Retention Policies รวมศูนย์สำหรับทรัพยากร AWS ที่รองรับ. DataSync ใช้โอนย้ายข้อมูล, Storage Gateway เชื่อม Storage ภายในองค์กรกับ AWS และ S3 เป็น Object Storage"
        },
        {
          "questionId": 57,
          "key": "local-set-06:q57",
          "topic": "L02 — Amazon SES vs SNS / SQS / EventBridge",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | SES ใช้ส่ง Transactional Emails เช่น Receipt หรือ Confirmation ให้ลูกค้าผ่าน Application. SNS เหมาะกับ Pub/Sub Notifications และ Fan-out ไม่ใช่บริการ Email Delivery ของ Application ที่ต้องการในโจทย์"
        },
        {
          "questionId": 65,
          "key": "local-set-06:q65",
          "topic": "L11 — AWS Marketplace vs AWS Partner Network / re:Post / Support Center",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | Marketplace เป็น Catalog สำหรับค้นหา Subscribe และซื้อ Third-party Software/Products ผ่าน AWS Billing. Partner Network เป็นเครือข่ายคู่ค้าบริการปรึกษาและ Implementation ไม่ใช่ Catalog สำหรับซื้อ Software"
        }
      ],
      "details": [
        {
          "questionId": 4,
          "result": "Correct",
          "topic": "L01 — High availability vs Durability",
          "question": "A media portal needs users to keep reaching its site when one Availability Zone is down, and it must separately preserve uploaded media against storage-component loss. Which TWO qualities directly match? (Select TWO.)",
          "questionTh": "Media Portal ต้องให้ผู้ใช้เข้าเว็บได้แม้ AZ หนึ่งล่ม และต้องรักษา Uploaded Media ไม่ให้สูญหายเมื่อ Storage Component เสีย ข้อใดสองคุณสมบัติตรงงาน",
          "selected": "High availability + Durability",
          "correct": "High availability + Durability",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "website accessible after AZ outage → High availability | uploaded data survives storage failure → Durability",
          "notes": [
            "มีสองเป้าหมายแยกกัน เว็บต้องยังเข้าได้เมื่อ AZ ล่มคือ High availability ส่วน Media ต้องไม่สูญหายคือ Durability ความพร้อมใช้งานกับการคงอยู่ของข้อมูลไม่ใช่คุณสมบัติเดียวกัน",
            "A. High availability — High availability เน้นให้ Service พร้อมใช้งานเมื่อ AZ มีปัญหา ส่วน Durability เน้นรักษาข้อมูลให้ไม่สูญหาย [คำตอบที่ถูก]",
            "B. Scalability — ความสามารถรองรับภาระงานที่เพิ่มขึ้น เช่น ขยายระบบให้รองรับจำนวนผู้ใช้ที่เพิ่มขึ้น",
            "C. Durability — High availability เน้นให้ Service พร้อมใช้งานเมื่อ AZ มีปัญหา ส่วน Durability เน้นรักษาข้อมูลให้ไม่สูญหาย [คำตอบที่ถูก]",
            "D. Agility — จัดสรรและทดลองทรัพยากรได้รวดเร็ว เช่น สร้าง test environment ใหม่ภายในไม่กี่นาที",
            "E. Pay-as-you-go — จ่ายตามปริมาณทรัพยากรที่ใช้ เช่น หยุดจ่ายค่า compute เมื่อปิดทรัพยากรที่คิดตามเวลาใช้งาน"
          ]
        },
        {
          "questionId": 6,
          "result": "Correct",
          "topic": "L13 — Reliability vs Operational Excellence",
          "question": "A company must rehearse recovery from a regional outage and also standardize its incident-response runbooks. Which TWO pillars address these separate concerns? (Select TWO.)",
          "questionTh": "บริษัทต้องซ้อม Recovery เมื่อ Region มีปัญหาและต้องทำ Incident-response Runbooks ให้เป็นมาตรฐาน ข้อใดสอง Pillars ตอบโจทย์",
          "selected": "Reliability + Operational Excellence",
          "correct": "Reliability + Operational Excellence",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "rehearse regional recovery → Reliability | standardize runbooks → Operational Excellence",
          "notes": [
            "rehearse แปลว่า ซักซ้อม การซ้อมรับมือ Region Outage เป็น Reliability ส่วนการจัดทำและปรับปรุง Incident-response Runbooks เป็น Operational Excellence",
            "A. Security — เน้นปกป้องข้อมูล ระบบ และ assets เช่น ใช้ IAM จำกัดสิทธิ์และ AWS KMS จัดการ encryption keys",
            "B. Reliability — Reliability ครอบคลุม Disaster Recovery Testing ส่วน Operational Excellence ครอบคลุม Runbooks และการปรับปรุงกระบวนการ Incident [คำตอบที่ถูก]",
            "C. Sustainability — ลดผลกระทบด้านสิ่งแวดล้อมของ workloads เช่น ลดทรัพยากรที่ไม่จำเป็นเพื่อลดการใช้พลังงาน",
            "D. Operational Excellence — Reliability ครอบคลุม Disaster Recovery Testing ส่วน Operational Excellence ครอบคลุม Runbooks และการปรับปรุงกระบวนการ Incident [คำตอบที่ถูก]",
            "E. Performance Efficiency — เน้นการใช้ทรัพยากรให้เหมาะกับ workload เช่น เลือก EC2 Instance Type ให้เหมาะกับงาน CPU-intensive เพื่อให้ได้ throughput ตามเป้าหมาย"
          ]
        },
        {
          "questionId": 9,
          "result": "Correct",
          "topic": "L12 — Retire vs Retain",
          "question": "After an application inventory review, a firm decides a discontinued HR tool has no users and should be decommissioned instead of migrated. Which migration strategy applies?",
          "questionTh": "หลัง Review Inventory บริษัทพบ HR Tool ที่ไม่มีผู้ใช้แล้วและตัดสินใจปิดถาวรแทนการย้าย เป็น Migration Strategy ใด",
          "selected": "Retire",
          "correct": "Retire",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "no users + decommissioned → Retire | kept in data center → Retain",
          "notes": [
            "Retire คือเลิกใช้ระบบและปิดถาวร ส่วน Retain คือคงระบบเดิมไว้ใช้งานต่อโดยยังไม่ย้าย คำว่า decommissioned คือยุติการใช้งาน",
            "A. Retain — เก็บแอปไว้ในสภาพแวดล้อมเดิม เช่น เก็บแอปไว้ใน data center เดิมก่อน",
            "B. Rehost — ย้าย workload โดยเปลี่ยนแปลงน้อยที่สุด เช่น ย้าย virtual machine ไป EC2 โดยแทบไม่แก้แอป",
            "C. Retire — Retire หมายถึง Decommission Application ที่เลิกใช้แล้ว ส่วน Retain คือเก็บไว้ไม่ย้ายในตอนนี้ [คำตอบที่ถูก]",
            "D. Replatform — ย้ายและปรับแพลตฟอร์มบางส่วน เช่น ย้าย database ไป RDS โดยแก้แอปเพียงเล็กน้อย"
          ]
        },
        {
          "questionId": 11,
          "result": "Correct",
          "topic": "L12 — Migration Hub vs Application Migration Service vs Discovery / Evaluator / DMS / SCT",
          "question": "A migration team wants to track progress across applications in a central dashboard and use a service to replicate and move source servers to AWS. Which TWO tools meet these distinct needs? (Select TWO.)",
          "questionTh": "ทีม Migration ต้องติดตาม Progress ของหลาย Applications ใน Central Dashboard และต้องใช้ Service เพื่อ Replicate/Y้าย Servers ไป AWS ข้อใดสอง Services ตรงงาน",
          "selected": "AWS Application Migration Service + AWS Migration Hub",
          "correct": "AWS Application Migration Service + AWS Migration Hub",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "central progress dashboard → Migration Hub | replicate and move servers → Application Migration Service",
          "notes": [
            "Migration Hub ติดตามความคืบหน้าการย้าย ส่วน Application Migration Service ทำ Replication ของ Servers เพื่อย้ายจริง Discovery Service ใช้ค้นหา Dependencies, Migration Evaluator ประเมินต้นทุน, DMS ย้าย Database, SCT ช่วยแปลง Database Schema",
            "A. AWS Application Migration Service — Migration Hub ใช้ดู Migration Progress จากส่วนกลาง ส่วน Application Migration Service ใช้ Replicate และย้าย Servers จริง [คำตอบที่ถูก]",
            "B. AWS Migration Hub — Migration Hub ใช้ดู Migration Progress จากส่วนกลาง ส่วน Application Migration Service ใช้ Replicate และย้าย Servers จริง [คำตอบที่ถูก]",
            "C. AWS Migration Evaluator — ช่วยสร้าง business case และ cost assessment ก่อน migration เช่น ประเมิน business case และค่าใช้จ่ายก่อน migration",
            "D. AWS DMS — ย้ายและ replicate databases เช่น replicate ข้อมูลจากฐานข้อมูลต้นทางไปปลายทาง",
            "E. AWS SCT — ช่วยแปลง database schema ระหว่าง engines เช่น แปลง database schema ระหว่าง engines"
          ]
        },
        {
          "questionId": 12,
          "result": "Correct",
          "topic": "L12 — Replatform vs Refactor / Rehost",
          "question": "During migration, a software company moves its self-managed SQL database to a managed relational service, with only minor connection changes in the application. Which strategy is being used?",
          "questionTh": "ระหว่าง Migration บริษัท Software เปลี่ยน SQL Database ที่ดูแลเองไป Managed Relational Service โดยแก้ Application Connections เล็กน้อย ใช้ Strategy ใด",
          "selected": "Replatform",
          "correct": "Replatform",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "self-managed database → managed database + minor code changes → Replatform",
          "notes": [
            "Replatform เปลี่ยนบางส่วนของ Platform เช่นใช้ Managed Relational Database พร้อมแก้ Connection เล็กน้อย ไม่ใช่ Refactor ที่ออกแบบ Architecture หรือ Code ใหม่เชิงลึก และไม่ใช่ Rehost แบบ Lift-and-shift",
            "A. Replatform — Replatform ปรับส่วนของ Platform เพื่อใช้ Managed Service โดยคง Architecture หลัก ส่วน Refactor ปรับสถาปัตยกรรมมาก [คำตอบที่ถูก]",
            "B. Rehost — Rehost ย้ายโดยแทบไม่ปรับ platform แต่โจทย์มีการเปลี่ยน self-managed database เป็น RDS",
            "C. Refactor — Refactor ปรับ architecture/code เชิงลึก แต่โจทย์เปลี่ยน platform บางส่วนและแก้ code เพียงเล็กน้อย",
            "D. Retain — Retain คือเก็บระบบไว้ที่เดิม ไม่ใช่ย้ายแอปขึ้น AWS"
          ]
        },
        {
          "questionId": 15,
          "result": "Wrong",
          "topic": "L01 — Pay-as-you-go + Economies of scale vs Capital expenditure",
          "question": "A retailer wants to avoid purchasing peak-capacity hardware and also benefit from the provider's lower unit costs gained from operating at enormous scale. Which TWO benefits apply? (Select TWO.)",
          "questionTh": "ร้านค้าต้องการไม่ซื้อ Hardware เผื่อ Peak Load ล่วงหน้าและต้องการประโยชน์จากต้นทุนต่อหน่วยต่ำของ Cloud Provider ที่มี Scale ใหญ่มาก ข้อใดสองแนวคิดตรงงาน",
          "selected": "Capital expenditure + Economies of scale",
          "correct": "Pay-as-you-go + Economies of scale",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Capital expenditure + Economies of scale แทน Pay-as-you-go + Economies of scale ข้อมูลไม่ได้ระบุเหตุผลในใจขณะเลือก จึงวิเคราะห์จาก Requirement และหน้าที่บริการเท่านั้น",
          "memoryCue": "avoid upfront peak hardware → Pay-as-you-go | lower unit costs at provider scale → Economies of scale",
          "notes": [
            "Select TWO มีสองเงื่อนไข การไม่ต้องซื้อ Hardware เผื่อ Peak ล่วงหน้าและจ่ายตามการใช้เหมาะกับ Pay-as-you-go ส่วนต้นทุนต่อหน่วยของ Provider ลดเมื่อดำเนินงานขนาดใหญ่คือ Economies of scale. Capital expenditure เป็นค่าใช้จ่ายลงทุนซื้อสินทรัพย์ล่วงหน้า ซึ่งตรงข้ามกับสิ่งที่โจทย์ต้องการหลีกเลี่ยง",
            "A. Capital expenditure — ค่าใช้จ่ายลงทุนซื้อสินทรัพย์ เช่น Physical Servers ก่อนใช้งาน ซึ่งเป็นสิ่งที่ร้านค้าต้องการหลีกเลี่ยง ไม่ใช่ Cloud Benefit ที่ตอบโจทย์",
            "B. Pay-as-you-go — ใช้ทรัพยากรและจ่ายตามการใช้จริง ไม่ต้องซื้อ Peak-capacity Hardware เผื่อไว้ตั้งแต่ต้น [คำตอบที่ถูก]",
            "C. Rightsizing — เลือกขนาด Resource ให้พอดีกับ Workload ไม่ใช่เหตุผลเรื่องไม่ต้องลงทุนซื้อ Peak Hardware ล่วงหน้า",
            "D. Economies of scale — AWS ดำเนินงานขนาดใหญ่มากจนมีต้นทุนต่อหน่วยต่ำลง จึงตรงเงื่อนไข Provider's lower unit costs [คำตอบที่ถูก]",
            "E. High availability — การทำให้ Service พร้อมใช้งาน ไม่ใช่แนวคิดเศรษฐศาสตร์ที่โจทย์ถาม"
          ]
        },
        {
          "questionId": 16,
          "result": "Correct",
          "topic": "L01 — Variable expense vs Capital expenditure",
          "question": "A company's spending moves from a fixed hardware purchase budget to recurring charges that rise and fall with consumption. Which cost classification describes the new spending?",
          "questionTh": "ต้นทุนบริษัทเปลี่ยนจากงบซื้อ Hardware คงที่เป็นค่าใช้จ่ายประจำที่ขึ้นลงตาม Consumption จัดเป็นต้นทุนชนิดใด",
          "selected": "Variable expense",
          "correct": "Variable expense",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "recurring charges rise/fall with consumption → Variable expense",
          "notes": [
            "Variable expense คือค่าใช้จ่ายผันแปรตาม Consumption ต่างจาก Capital expenditure ที่ซื้อ Hardware เป็นสินทรัพย์ล่วงหน้า",
            "A. Rightsizing — เลือกขนาดทรัพยากรให้ตรงความต้องการ เช่น ลด EC2 จากขนาดใหญ่เป็นขนาดเล็กหลังตรวจ CPU/Memory utilization",
            "B. Economies of scale — ลดต้นทุนต่อหน่วยจากการใช้ทรัพยากรในปริมาณมาก เช่น AWS กระจายต้นทุนโครงสร้างพื้นฐานให้ลูกค้าจำนวนมาก",
            "C. Variable expense — Variable expense เปลี่ยนไปตาม Consumption. Capital expenditure คือการซื้อทรัพย์สินและลงทุนล่วงหน้า [คำตอบที่ถูก]",
            "D. Capital expenditure — ค่าใช้จ่ายลงทุนล่วงหน้าในสินทรัพย์ เช่น ซื้อ physical servers ก่อนเริ่มใช้งาน"
          ]
        },
        {
          "questionId": 30,
          "result": "Correct",
          "topic": "L09 — AWS KMS vs Secrets Manager vs ACM / IAM",
          "question": "A company needs fine-grained control over the cryptographic key used to encrypt regulated application data. Which managed AWS service is intended for key management?",
          "questionTh": "บริษัทต้องควบคุม Cryptographic Key อย่างละเอียดเพื่อเข้ารหัส Regulated Application Data ใช้ Managed Service ใดสำหรับ Key Management",
          "selected": "AWS KMS",
          "correct": "AWS KMS",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "cryptographic key / encryption key policies → AWS KMS",
          "notes": [
            "KMS ใช้จัดการ Cryptographic Keys สำหรับ Encryption. Secrets Manager จัดเก็บและหมุนเวียน Password หรือ Secrets ส่วน ACM จัดการ TLS Certificates และ IAM ควบคุมสิทธิ์",
            "A. AWS Certificate Manager — ออกและจัดการ TLS certificates ที่รองรับ",
            "B. AWS Secrets Manager — เก็บและหมุนเวียน secrets เช่น database credentials เช่น เก็บและหมุนเวียน database password",
            "C. AWS KMS — KMS จัดการ Encryption Keys และ Key Policies. Secrets Manager จัดการ Secrets/Passwords และ ACM ดูแล TLS Certificates [คำตอบที่ถูก]",
            "D. AWS IAM — กำหนด identities, roles และสิทธิ์เข้าถึง AWS เช่น กำหนด IAM policy ให้ application อ่าน S3 ได้"
          ]
        },
        {
          "questionId": 33,
          "result": "Correct",
          "topic": "L09 — AWS Shield vs WAF vs Firewall Manager",
          "question": "A public API is targeted by large-scale traffic flooding intended to exhaust network capacity. Which service focuses on DDoS protection?",
          "questionTh": "Public API ถูก Traffic Flooding ขนาดใหญ่เพื่อทำให้ Network Capacity เต็ม บริการใดเน้น DDoS Protection",
          "selected": "AWS Shield",
          "correct": "AWS Shield",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "large-scale DDoS / network capacity exhaustion → AWS Shield",
          "notes": [
            "Shield เน้น DDoS Protection รวมถึง Volumetric Attacks. WAF กรอง HTTP(S) Requests ตาม Web ACL ส่วน Firewall Manager จัดการ Security Policies ข้าม Accounts",
            "A. AWS WAF — กรอง HTTP(S) requests ตาม web ACL rules เช่น บล็อก HTTP request ที่มีรูปแบบ SQL injection",
            "B. AWS Shield — AWS Shield ช่วยป้องกัน DDoS. WAF กรอง Application-layer Requests อย่าง SQLi/XSS [คำตอบที่ถูก]",
            "C. AWS Firewall Manager — จัดการ security policies ส่วนกลางข้ามบัญชี เช่น จัดการ WAF policies ข้ามหลาย accounts",
            "D. Amazon GuardDuty — ตรวจจับภัยคุกคามจากสัญญาณและกิจกรรมที่น่าสงสัย เช่น ตรวจพบการใช้ credentials ที่น่าสงสัย"
          ]
        },
        {
          "questionId": 34,
          "result": "Correct",
          "topic": "L09 — AWS WAF vs AWS Shield vs Firewall Manager",
          "question": "A website owner wants to block HTTP requests that match managed rules for malicious URL patterns before they reach an ALB. Which service does the filtering?",
          "questionTh": "เจ้าของเว็บต้อง Block HTTP Requests ตาม Managed Rules ที่ตรวจ Malicious URL Patterns ก่อนถึง ALB Service ใดทำ Filtering",
          "selected": "AWS WAF",
          "correct": "AWS WAF",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "block malicious HTTP requests before ALB → AWS WAF",
          "notes": [
            "WAF ใช้ Web ACL และ Managed Rules เพื่อกรอง HTTP(S) Requests ที่ ALB ได้. Shield เน้น DDoS Protection ส่วน Firewall Manager เน้น Central Policy Management",
            "A. AWS WAF — WAF ใช้ Web ACL/Rules กรอง HTTP(S) Requests ที่มาถึง Web Resources. Firewall Manager จัด Policies ข้าม Accounts [คำตอบที่ถูก]",
            "B. AWS Firewall Manager — จัดการ security policies ส่วนกลางข้ามบัญชี เช่น จัดการ WAF policies ข้ามหลาย accounts",
            "C. AWS Shield — ป้องกันการโจมตี DDoS เช่น ช่วยป้องกันการโจมตี DDoS",
            "D. AWS Security Hub — รวม findings และสถานะ security จากหลายแหล่ง เช่น รวม security findings จากหลายบริการ"
          ]
        },
        {
          "questionId": 36,
          "result": "Correct",
          "topic": "L03 — Elastic Beanstalk vs CloudFormation vs CDK / ECS",
          "question": "A team uploads its Java application package and expects AWS to provision the web environment and coordinate deployment without designing every underlying resource manually. Which service is most suitable?",
          "questionTh": "ทีมอัปโหลด Java Application Package แล้วต้องการให้ AWS Provision Web Environment และช่วย Deploy โดยไม่ต้องออกแบบ Resources ทุกตัวเอง ใช้บริการใด",
          "selected": "AWS Elastic Beanstalk",
          "correct": "AWS Elastic Beanstalk",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "upload Java app + automatically provision web environment → Elastic Beanstalk",
          "notes": [
            "Elastic Beanstalk รับ Application Package แล้วจัดการ Web Environment และ Deployment. CloudFormation เป็น Infrastructure Stack Engine, CDK ใช้ภาษา Programming นิยาม Infrastructure และ ECS ใช้จัดการ Containers",
            "A. AWS Elastic Beanstalk — Elastic Beanstalk เป็น Application Deployment Platform ที่ช่วย Provision/Manage Environment. CloudFormation เป็น IaC Stack Engine [คำตอบที่ถูก]",
            "B. AWS CloudFormation — สร้างและจัดการ infrastructure จาก templates",
            "C. AWS CDK — นิยาม cloud infrastructure ด้วย programming languages",
            "D. Amazon ECS — orchestrate containers ด้วย AWS-native control plane เช่น จัดการ container tasks และ services"
          ]
        },
        {
          "questionId": 37,
          "result": "Correct",
          "topic": "L03 — CloudFormation vs CDK / Elastic Beanstalk / CodePipeline",
          "question": "Operations needs to roll back a failed infrastructure change managed as one declarative stack of IAM roles, VPCs, and subnets. Which service supplies the stack lifecycle?",
          "questionTh": "ฝ่าย Ops ต้อง Rollback Infrastructure Changes ที่พลาด โดย Resources เช่น IAM Roles, VPC, Subnets อยู่ใน Declarative Stack เดียว ใช้ Service ใดดูแล Stack Lifecycle",
          "selected": "AWS CloudFormation",
          "correct": "AWS CloudFormation",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "declarative stack lifecycle / stack rollback → CloudFormation",
          "notes": [
            "CloudFormation สร้าง จัดการ และ Rollback Infrastructure Stacks. CDK ใช้เขียน IaC แล้ว Synthesize เป็น CloudFormation, Elastic Beanstalk เน้น Deploy Application, CodePipeline ประสาน CI/CD Stages",
            "A. AWS CloudFormation — CloudFormation จัด Lifecycle ของ Infrastructure Stacks และ Rollback Updates. CDK Synthesizes Templates แต่ไม่ใช่ Stack Engine [คำตอบที่ถูก]",
            "B. AWS CDK — นิยาม cloud infrastructure ด้วย programming languages",
            "C. AWS CodePipeline — automate release pipelines",
            "D. AWS Elastic Beanstalk — deploy applications พร้อมจัดการ underlying environment"
          ]
        },
        {
          "questionId": 47,
          "result": "Wrong",
          "topic": "L05 — Security group vs Network ACL",
          "question": "An EC2 instance needs an inbound rule for port 443 and a stateful connection filter at its network interface. Which VPC control applies?",
          "questionTh": "EC2 ต้องเปิด Inbound Port 443 และใช้ Stateful Connection Filter ที่ Network Interface ควรใช้ VPC Control ใด",
          "selected": "Network ACL",
          "correct": "Security group",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "เลือก Network ACL แทน Security group ข้อมูลไม่ได้ระบุเหตุผลในใจขณะเลือก จึงวิเคราะห์จาก Requirement และหน้าที่บริการเท่านั้น",
          "memoryCue": "stateful connection filtering at ENI + inbound 443 → Security group",
          "notes": [
            "Security group เป็น Stateful Firewall ที่ใช้กับ Network Interface ของ EC2 เมื่ออนุญาต Inbound HTTPS แล้ว Return Traffic สำหรับ Connection นั้นได้รับอนุญาตโดยสถานะการเชื่อมต่อ. Network ACL เป็น Stateless Filter ที่ระดับ Subnet จึงไม่ตรง Requirement นี้",
            "A. Network ACL — Stateless Filter ที่ระดับ Subnet ไม่ใช่ Stateful Connection Filter ระดับ ENI",
            "B. Security group — Stateful Firewall ที่ผูกกับ EC2 Network Interface ตรงกับ Inbound TCP 443 และ Stateful Requirement [คำตอบที่ถูก]",
            "C. AWS WAF — กรอง HTTP(S) Requests ด้วย Web ACL ไม่ได้เป็น Stateful ENI Firewall",
            "D. AWS Shield — เน้นป้องกัน DDoS ไม่ใช่กำหนด Inbound Port 443 ของ Instance"
          ]
        },
        {
          "questionId": 48,
          "result": "Wrong",
          "topic": "L05 — NAT Gateway vs VPC endpoint / Internet Gateway",
          "question": "A private-subnet application must download software updates from public repositories but must not be directly reachable by unsolicited internet connections. Which component enables this path?",
          "questionTh": "Application ใน Private Subnet ต้อง Download Software Updates จาก Public Repositories แต่ไม่เปิดรับ Unsolicited Internet Connections ตรง ๆ ใช้ Component ใด",
          "selected": "VPC endpoint",
          "correct": "NAT Gateway",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "เลือก VPC endpoint แทน NAT Gateway ข้อมูลไม่ได้ระบุเหตุผลในใจขณะเลือก จึงวิเคราะห์จาก Requirement และหน้าที่บริการเท่านั้น",
          "memoryCue": "private subnet outbound to public software repositories → NAT Gateway",
          "notes": [
            "NAT Gateway ช่วย EC2 ใน Private Subnet เริ่ม Connection ออก Internet เพื่อ Download Updates โดยไม่เปิดรับ Unsolicited Inbound Connections ไปยัง Instance. VPC endpoint ใช้เข้าถึง Service ที่รองรับผ่าน Private Connectivity ไม่ใช่ Public Repository ทั่วไป",
            "A. VPC endpoint — เข้าถึง AWS Services ที่รองรับผ่าน Private Connectivity ไม่ได้ใช้เป็น General Internet Egress ไป Public Repositories",
            "B. Internet Gateway — ต่อ VPC กับ Internet แต่ Instance ใน Private Subnet ต้องใช้ NAT สำหรับออก Internet แบบไม่มี Public IP ใน Scenario นี้",
            "C. NAT Gateway — รองรับ Outbound Internet Connectivity ของ Private Subnet ไปยัง Public Software Repositories โดย Instance ไม่จำเป็นต้องมี Public IP [คำตอบที่ถูก]",
            "D. AWS Direct Connect — Dedicated Network Link ระหว่าง On-premises กับ AWS ไม่ใช่อุปกรณ์ออก Internet ของ Private Subnet"
          ]
        },
        {
          "questionId": 51,
          "result": "Correct",
          "topic": "L06 — AWS Backup vs DataSync / Storage Gateway / S3",
          "question": "An organization wants centralized policies to schedule and retain backups of supported RDS, EBS, and other AWS resources. Which service manages these policies?",
          "questionTh": "องค์กรต้องการ Centralized Policies เพื่อ Schedule และ Retain Backups ของ RDS, EBS และ Resources ที่รองรับ ใช้ Service ใดจัด Policies",
          "selected": "AWS Backup",
          "correct": "AWS Backup",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "centralized scheduled backup policies across AWS services → AWS Backup",
          "notes": [
            "AWS Backup ตั้ง Backup Plans และ Retention Policies รวมศูนย์สำหรับทรัพยากร AWS ที่รองรับ. DataSync ใช้โอนย้ายข้อมูล, Storage Gateway เชื่อม Storage ภายในองค์กรกับ AWS และ S3 เป็น Object Storage",
            "A. Amazon S3 — durable object storage เช่น เก็บรูปภาพหรือ backup files เป็น objects",
            "B. AWS Backup — AWS Backup เป็น Centralized Backup Policy/Jobs สำหรับ Supported Resources. DataSync เน้น Transfer Data [คำตอบที่ถูก]",
            "C. AWS DataSync — ย้ายข้อมูลระหว่าง storage locations แบบ online",
            "D. AWS Storage Gateway — เชื่อม on-premises applications กับ cloud storage"
          ]
        },
        {
          "questionId": 57,
          "result": "Wrong",
          "topic": "L02 — Amazon SES vs SNS / SQS / EventBridge",
          "question": "A bank wants to send transactional email receipts to customers from its software, not fan out internal service events. Which AWS messaging service is intended for email delivery?",
          "questionTh": "ธนาคารต้องส่ง Transactional Email Receipts ให้ลูกค้าจาก Application ไม่ได้ต้องการ Fan-out Events ภายใน ระบบส่งข้อความใดเหมาะ",
          "selected": "Amazon SNS",
          "correct": "Amazon SES",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Amazon SNS แทน Amazon SES ข้อมูลไม่ได้ระบุเหตุผลในใจขณะเลือก จึงวิเคราะห์จาก Requirement และหน้าที่บริการเท่านั้น",
          "memoryCue": "transactional email receipts to external customers → Amazon SES",
          "notes": [
            "SES ใช้ส่ง Transactional Emails เช่น Receipt หรือ Confirmation ให้ลูกค้าผ่าน Application. SNS เหมาะกับ Pub/Sub Notifications และ Fan-out ไม่ใช่บริการ Email Delivery ของ Application ที่ต้องการในโจทย์",
            "A. Amazon SNS — Pub/Sub Topic และ Fan-out Events/Notifications ไป Subscribers แม้ส่ง Email Notifications ได้ แต่ไม่ใช่ Email Sending Service ที่โจทย์เน้น",
            "B. Amazon SES — ออกแบบสำหรับส่ง Transactional Email เช่น Receipt และ Customer Notifications จาก Application ผ่าน Email APIs/SMTP [คำตอบที่ถูก]",
            "C. Amazon EventBridge — Event Bus สำหรับ Route Events ไป Targets ตาม Rules ไม่ใช่ Delivery Service สำหรับ Transactional Emails",
            "D. Amazon SQS — Message Queue สำหรับ Decoupling Workers ไม่ใช่บริการส่ง Email Receipt ไป External Customers โดยตรง"
          ]
        },
        {
          "questionId": 65,
          "result": "Correct",
          "topic": "L11 — AWS Marketplace vs AWS Partner Network / re:Post / Support Center",
          "question": "A team needs to subscribe to a third-party virtual appliance product offered through AWS billing rather than hire a migration consulting partner. Which resource is suitable?",
          "questionTh": "ทีมต้องการ Subscribe Third-party Virtual Appliance Product ผ่านระบบ AWS Billing แทนการจ้าง Migration Consultant ใช้ Resource ใด",
          "selected": "AWS Marketplace",
          "correct": "AWS Marketplace",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงขอทบทวนตามข้อมูลที่ส่งมา ไม่ได้แปลว่าตอบโดยไม่เข้าใจ",
          "memoryCue": "third-party virtual appliance offered through AWS billing → AWS Marketplace",
          "notes": [
            "Marketplace เป็น Catalog สำหรับค้นหา Subscribe และซื้อ Third-party Software/Products ผ่าน AWS Billing. Partner Network เป็นเครือข่ายคู่ค้าบริการปรึกษาและ Implementation ไม่ใช่ Catalog สำหรับซื้อ Software",
            "A. AWS Marketplace — AWS Marketplace เป็น Product/Service Catalog สำหรับ Third-party Software/Offerings. APN ช่วยค้นหา Partners [คำตอบที่ถูก]",
            "B. AWS Partner Network — เครือข่ายคู่ค้าของ AWS",
            "C. AWS Support Center — เปิดและติดตาม support cases",
            "D. AWS re:Post — ชุมชนถามตอบเกี่ยวกับ AWS"
          ]
        }
      ]
    },
    "local-set-07": {
      "title": "Local Mock Set 7",
      "note": "17 Nov 2026 · 55/65 correct (84.6%) · 10 wrong + 4 correct flagged · 5 Explain More, 3 English Unclear, 2 Concept/Recall, 1 Clue/Distractor; overlapping flags counted independently.",
      "items": [
        {
          "questionId": 6,
          "key": "local-set-07:q6",
          "topic": "L13 — Reliability + Performance Efficiency vs other pillars",
          "type": "language",
          "rawFlags": [
            "🟡 Explain More",
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language",
            "confidence"
          ],
          "note": "Correct; flagged for review | โจทย์มีสองส่วน: Recover หลัง Component Outage คือ Reliability ส่วน Latency Target คือ Performance Efficiency; คำว่า latency หมายถึงเวลาหน่วงในการประมวลผล"
        },
        {
          "questionId": 9,
          "key": "local-set-07:q9",
          "topic": "L12 — Rehost vs Replatform vs Refactor",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Rehost (lift-and-shift) ย้าย Virtual Machine/แอปแทบไม่เปลี่ยน ส่วน Replatform ต้องมีการเปลี่ยน Platform บางส่วน เช่นเปลี่ยน Self-managed Database เป็น RDS"
        },
        {
          "questionId": 11,
          "key": "local-set-07:q11",
          "topic": "L12 — AWS SCT + AWS DMS vs Application Migration Service",
          "type": "concept",
          "rawFlags": [
            "🟡 Explain More",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "confidence"
          ],
          "note": "Wrong | AWS SCT แปลง Schema/SQL เมื่อ Database Engines ไม่เข้ากัน; AWS DMS ย้าย/Replicate Data; Application Migration Service (MGN) ย้าย Server ไม่ใช่แปลง Database Schema"
        },
        {
          "questionId": 16,
          "key": "local-set-07:q16",
          "topic": "L01 — Variable expense vs Capital expenditure",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | Invoice คือใบแจ้งหนี้; variable invoices คือใบแจ้งหนี้ที่ยอดขึ้นลงตามการใช้ ไม่ใช่ซื้อ Physical Assets เป็นเงินลงทุนล่วงหน้า"
        },
        {
          "questionId": 30,
          "key": "local-set-07:q30",
          "topic": "L09 — AWS Organizations vs Control Tower vs Identity Center",
          "type": "concept",
          "rawFlags": [
            "🟡 Explain More",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "confidence"
          ],
          "note": "Wrong | AWS Organizations จัด Accounts/OUs และ SCPs โดยตรง; Control Tower ช่วยตั้งและกำกับ Landing Zone ที่ใช้ Organizations เป็นส่วนประกอบ"
        },
        {
          "questionId": 36,
          "key": "local-set-07:q36",
          "topic": "L03 — AWS CloudFormation vs AWS CDK",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | CloudFormation คือ Engine จัดการ IaC Stacks จาก JSON/YAML Templates; CDK ใช้ภาษาโปรแกรมสร้าง Infrastructure Definitions แล้ว Synthesize เป็น CloudFormation Templates"
        },
        {
          "questionId": 39,
          "key": "local-set-07:q39",
          "topic": "L04 — Amazon CloudFront vs Edge location",
          "type": "clue",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "note": "Wrong | CloudFront เป็นชื่อ CDN Service ส่วน Edge Location คือจุดกระจาย Content/Cache ที่ CloudFront ใช้; โจทย์นี้ถามบริการ (service) จึงตอบ CloudFront"
        },
        {
          "questionId": 41,
          "key": "local-set-07:q41",
          "topic": "L03 — Amazon EKS + AWS Fargate vs ECS/EC2",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | EKS เป็น Managed Kubernetes Orchestration ส่วน Fargate ให้ Serverless Compute สำหรับ Pods/Containers ที่รองรับ; ถ้า ECS แทน EKS จะไม่ใช่ Kubernetes เดิม"
        },
        {
          "questionId": 47,
          "key": "local-set-07:q47",
          "topic": "L05 — Network ACL vs Security group",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Network ACL ทำ Allow/Deny ที่ Subnet Boundary และเป็น Stateless ต้องคิด Inbound/Outbound แยกกัน; Security Group เป็น Stateful ที่ ENI"
        },
        {
          "questionId": 48,
          "key": "local-set-07:q48",
          "topic": "L05 — NAT Gateway vs Internet Gateway vs VPC endpoint",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | NAT Gateway ให้ Instances ใน Private Subnet เริ่ม Outbound Internet ผ่าน NAT; Internet Gateway เป็น Gateway ของ VPC แต่ Private Instances ไม่ควรออก Internet โดยตรงผ่าน IGW"
        },
        {
          "questionId": 49,
          "key": "local-set-07:q49",
          "topic": "L05 — AWS Site-to-Site VPN + VPC endpoint vs Direct Connect",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Site-to-Site VPN ตอบ On-prem-to-AWS Encrypted Tunnel; VPC Endpoint ตอบ Private Access ไป S3; Direct Connect ใช้ Dedicated Circuit ไม่ใช่ Private Endpoint สำหรับ S3 จาก VPC"
        },
        {
          "questionId": 52,
          "key": "local-set-07:q52",
          "topic": "L06 — AWS DataSync vs Snowball Edge vs Storage Gateway",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | AWS DataSync ย้ายหรือ Sync Files Online ผ่าน Network; Snowball Edge ใช้ Physical Appliance ขนข้อมูล; Storage Gateway เชื่อม Storage On-prem กับ AWS แบบ Hybrid"
        },
        {
          "questionId": 56,
          "key": "local-set-07:q56",
          "topic": "Messaging — Amazon Kinesis Data Streams + SQS vs Step Functions",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Wrong | Kinesis Data Streams สำหรับ Streaming Records ที่ Consumers อ่านซ้ำได้ตาม Retention; SQS เป็น Durable Message Queue ให้ Worker Poll งาน; Step Functions ทำ Workflow Orchestration ไม่ใช่ Queue"
        },
        {
          "questionId": 57,
          "key": "local-set-07:q57",
          "topic": "Services — Amazon Connect vs Amazon WorkSpaces",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Amazon Connect เป็น Cloud Contact Center สำหรับ Customer Calls และ Agents; Amazon WorkSpaces เป็น Virtual Desktop Service ไม่ใช่ระบบ Call Routing"
        }
      ],
      "details": [
        {
          "questionId": 6,
          "result": "Correct",
          "topic": "L13 — Reliability + Performance Efficiency vs other pillars",
          "question": "An IoT platform must recover after a component outage and meet a strict event-processing latency target. Which TWO pillars are most directly addressed? (Select TWO.)",
          "questionTh": "IoT Platform ต้อง Recover หลัง Component Outage และต้องผ่าน Event-processing Latency Target ที่เข้มงวด ข้อใดสอง Pillars ตรงที่สุด",
          "selected": "Reliability + Performance Efficiency",
          "correct": "Reliability + Performance Efficiency",
          "rawFlags": [
            "🟡 Explain More",
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language",
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่มีธงขอทบทวนหรืออ่านภาษาอังกฤษไม่ชัด",
          "memoryCue": "recover after component outage → Reliability; strict event-processing latency target → Performance Efficiency",
          "notes": [
            "โจทย์มีสองส่วน: Recover หลัง Component Outage คือ Reliability ส่วน Latency Target คือ Performance Efficiency; คำว่า latency หมายถึงเวลาหน่วงในการประมวลผล",
            "A. Reliability — Reliability เป็นแนวคิดกว้างเรื่องการทำงานและฟื้นจาก failure ส่วนโจทย์เจาะจงความสามารถทำงานต่อเมื่อ component ล้มเหลว [คำตอบที่ถูก]",
            "B. Cost Optimization — Cost Optimization เป็นเป้าหมายกว้างในการลดค่าใช้จ่าย ส่วนโจทย์ระบุวิธีลดขนาด instance จาก usage ที่วัดได้",
            "C. Performance Efficiency — Performance Efficiency เป็น pillar ด้านประสิทธิภาพ แต่โจทย์ถามชื่อวิธีเลือกขนาด resource ให้พอดี [คำตอบที่ถูก]",
            "D. Operational Excellence — Operational Excellence เน้นการดำเนินงานและปรับปรุงกระบวนการ ไม่ได้เน้นการเลือก compute เพื่อให้ได้ throughput",
            "E. Sustainability — Sustainability เน้นผลกระทบต่อสิ่งแวดล้อม ไม่ใช่การเลือก resource ให้ได้ performance targets"
          ]
        },
        {
          "questionId": 9,
          "result": "Wrong",
          "topic": "L12 — Rehost vs Replatform vs Refactor",
          "question": "An independent software vendor cannot modify an old application, so it copies the virtual-machine workload onto EC2 with few changes. Which migration strategy matches?",
          "questionTh": "ผู้ขาย Software แก้ Application เก่าไม่ได้ จึง Copy Virtual-machine Workload ขึ้น EC2 โดยเปลี่ยนแปลงน้อย เป็น Strategy ใด",
          "selected": "Replatform",
          "correct": "Rehost",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement ตามเฉลย; ยังไม่ทราบเหตุผลที่คิดจริงขณะตอบ",
          "memoryCue": "copy VM to EC2 / cannot modify / few changes → Rehost; change hosting platform/service slightly → Replatform; rebuild architecture → Refactor",
          "notes": [
            "Rehost (lift-and-shift) ย้าย Virtual Machine/แอปแทบไม่เปลี่ยน ส่วน Replatform ต้องมีการเปลี่ยน Platform บางส่วน เช่นเปลี่ยน Self-managed Database เป็น RDS",
            "A. Refactor — Refactor ปรับ architecture/code เชิงลึก แต่โจทย์เปลี่ยน platform บางส่วนและแก้ code เพียงเล็กน้อย",
            "B. Rehost — Rehost คือ lift-and-shift โดยแก้ไขน้อย ไม่ใช่การปรับ architecture เป็น cloud-native [คำตอบที่ถูก]",
            "C. Replatform — Replatform เปลี่ยน platform บางส่วนโดยยังคงโครงสร้างหลัก แต่โจทย์ต้องการแยก monolith และออกแบบ cloud-native",
            "D. Retain — Retain คือคงระบบไว้ที่เดิม ไม่ได้เปลี่ยนสถาปัตยกรรมระหว่าง migration"
          ]
        },
        {
          "questionId": 11,
          "result": "Wrong",
          "topic": "L12 — AWS SCT + AWS DMS vs Application Migration Service",
          "question": "A database migration moves data between two database engines and requires conversion of incompatible schemas. Which TWO AWS services address these parts of the migration? (Select TWO.)",
          "questionTh": "Database Migration ต้องย้าย Data ระหว่าง Database Engines สองตัวและต้อง Convert Incompatible Schemas ข้อใดสอง Services ตอบโจทย์คนละส่วน",
          "selected": "AWS DMS + AWS Application Migration Service",
          "correct": "AWS SCT + AWS DMS",
          "rawFlags": [
            "🟡 Explain More",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "confidence"
          ],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement ตามเฉลย; ยังไม่ทราบเหตุผลที่คิดจริงขณะตอบ",
          "memoryCue": "schema conversion / incompatible database engines → AWS SCT; move or replicate database data → AWS DMS; move servers → Application Migration Service",
          "notes": [
            "AWS SCT แปลง Schema/SQL เมื่อ Database Engines ไม่เข้ากัน; AWS DMS ย้าย/Replicate Data; Application Migration Service (MGN) ย้าย Server ไม่ใช่แปลง Database Schema",
            "A. AWS SCT — ช่วยแปลง database schema ระหว่าง engines [คำตอบที่ถูก]",
            "B. AWS Application Migration Service — ย้าย servers โดยทำ lift-and-shift",
            "C. AWS DMS — ย้ายและ replicate databases [คำตอบที่ถูก]",
            "D. AWS Migration Hub — ติดตามความคืบหน้าการ migration",
            "E. AWS Migration Evaluator — ช่วยสร้าง business case และ cost assessment ก่อน migration"
          ]
        },
        {
          "questionId": 16,
          "result": "Correct",
          "topic": "L01 — Variable expense vs Capital expenditure",
          "question": "A cost accountant compares buying physical equipment once with variable invoices tied to cloud consumption. What category describes the cloud invoices?",
          "questionTh": "นักบัญชีเปรียบเทียบการซื้อ Physical Equipment ครั้งเดียวกับใบแจ้งหนี้ Cloud ที่เปลี่ยนตาม Consumption ค่า Cloud นี้จัดเป็นประเภทใด",
          "selected": "Variable expense",
          "correct": "Variable expense",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่มีธงขอทบทวนหรืออ่านภาษาอังกฤษไม่ชัด",
          "memoryCue": "variable invoices / tied to cloud consumption → Variable expense; buying physical equipment once → Capital expenditure",
          "notes": [
            "Invoice คือใบแจ้งหนี้; variable invoices คือใบแจ้งหนี้ที่ยอดขึ้นลงตามการใช้ ไม่ใช่ซื้อ Physical Assets เป็นเงินลงทุนล่วงหน้า",
            "A. Variable expense — ค่าใช้จ่ายที่เปลี่ยนตามการใช้งาน [คำตอบที่ถูก]",
            "B. Capital expenditure — ค่าใช้จ่ายลงทุนล่วงหน้าในสินทรัพย์",
            "C. Rightsizing — Rightsizing คือเลือกขนาด resource ให้เหมาะกับการใช้งานที่วัดได้ แต่ไม่ได้หมายถึงการเพิ่มลด capacity ตาม demand แบบต่อเนื่อง",
            "D. Economies of scale — Economies of scale คือข้อได้เปรียบด้านต้นทุนจากการใช้ทรัพยากรรวมจำนวนมาก ไม่ใช่การลดขนาด instance ของบริษัท"
          ]
        },
        {
          "questionId": 30,
          "result": "Wrong",
          "topic": "L09 — AWS Organizations vs Control Tower vs Identity Center",
          "question": "A company is standardizing access across AWS accounts and wants organizational units and service-control guardrails for each business division. Which service provides these features?",
          "questionTh": "บริษัทต้องการตั้ง AWS Accounts เป็น Organizational Units และกำหนด Service-control Guardrails ให้แต่ละ Division ใช้ Service ใด",
          "selected": "AWS Control Tower",
          "correct": "AWS Organizations",
          "rawFlags": [
            "🟡 Explain More",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "confidence"
          ],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement ตามเฉลย; ยังไม่ทราบเหตุผลที่คิดจริงขณะตอบ",
          "memoryCue": "organizational units (OUs) / service control policies (SCPs) → Organizations; multi-account landing zone / preconfigured guardrails → Control Tower",
          "notes": [
            "AWS Organizations จัด Accounts/OUs และ SCPs โดยตรง; Control Tower ช่วยตั้งและกำกับ Landing Zone ที่ใช้ Organizations เป็นส่วนประกอบ",
            "A. AWS Control Tower — ตั้งค่าและกำกับ multi-account landing zone",
            "B. AWS Organizations — จัดกลุ่มบัญชีและใช้ governance / consolidated billing [คำตอบที่ถูก]",
            "C. IAM Identity Center — จัดการการเข้าถึงหลายบัญชีสำหรับ workforce",
            "D. AWS IAM — กำหนด identities, roles และสิทธิ์เข้าถึง AWS"
          ]
        },
        {
          "questionId": 36,
          "result": "Wrong",
          "topic": "L03 — AWS CloudFormation vs AWS CDK",
          "question": "An infrastructure engineer must repeatedly launch identical network and compute environments from a declarative JSON file and track updates as stacks. Which service performs this provisioning?",
          "questionTh": "Infrastructure Engineer ต้อง Launch Network และ Compute Environments ที่เหมือนกันซ้ำ ๆ จาก Declarative JSON File และติดตาม Updates เป็น Stacks บริการใดทำ Provisioning",
          "selected": "AWS CDK",
          "correct": "AWS CloudFormation",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement ตามเฉลย; ยังไม่ทราบเหตุผลที่คิดจริงขณะตอบ",
          "memoryCue": "declarative JSON/YAML template / stack creation & updates → CloudFormation; TypeScript/Python constructs / synthesize templates → CDK",
          "notes": [
            "CloudFormation คือ Engine จัดการ IaC Stacks จาก JSON/YAML Templates; CDK ใช้ภาษาโปรแกรมสร้าง Infrastructure Definitions แล้ว Synthesize เป็น CloudFormation Templates",
            "A. AWS CDK — นิยาม cloud infrastructure ด้วย programming languages",
            "B. AWS Elastic Beanstalk — deploy applications พร้อมจัดการ underlying environment",
            "C. AWS CloudFormation — สร้างและจัดการ infrastructure จาก templates [คำตอบที่ถูก]",
            "D. AWS CodePipeline — automate release pipelines"
          ]
        },
        {
          "questionId": 39,
          "result": "Wrong",
          "topic": "L04 — Amazon CloudFront vs Edge location",
          "question": "A website's dynamic backend stays in one AWS Region, but static product pictures should be served through a global edge caching service. Which service provides the CDN?",
          "questionTh": "Backend ของเว็บยังอยู่ Region เดียว แต่ Static Product Pictures ต้องส่งผ่าน Global Edge Caching Service ใช้บริการใดเป็น CDN",
          "selected": "Edge location",
          "correct": "Amazon CloudFront",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement ตามเฉลย; ยังไม่ทราบเหตุผลที่คิดจริงขณะตอบ",
          "memoryCue": "which service provides CDN → CloudFront; which infrastructure location holds cached objects → Edge location",
          "notes": [
            "CloudFront เป็นชื่อ CDN Service ส่วน Edge Location คือจุดกระจาย Content/Cache ที่ CloudFront ใช้; โจทย์นี้ถามบริการ (service) จึงตอบ CloudFront",
            "A. Amazon Route 53 — DNS และ domain routing รวมถึง health checks",
            "B. Amazon CloudFront — content delivery network ที่ใช้ edge locations [คำตอบที่ถูก]",
            "C. Edge location — จุดกระจาย content ใกล้ผู้ใช้",
            "D. AWS Region — พื้นที่ทางภูมิศาสตร์ที่มีหลาย Availability Zones"
          ]
        },
        {
          "questionId": 41,
          "result": "Correct",
          "topic": "L03 — Amazon EKS + AWS Fargate vs ECS/EC2",
          "question": "A developer needs to keep an existing Kubernetes deployment model but wants its pods to use managed serverless compute instead of EC2 worker hosts. Which TWO services form this combination? (Select TWO.)",
          "questionTh": "Developer ต้องคง Kubernetes Deployment Model เดิม แต่ต้องการให้ Pods ใช้ Serverless Compute แทน EC2 Worker Hosts ข้อใดสอง Services ใช้ร่วมกัน",
          "selected": "Amazon EKS + AWS Fargate",
          "correct": "Amazon EKS + AWS Fargate",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่มีธงขอทบทวนหรืออ่านภาษาอังกฤษไม่ชัด",
          "memoryCue": "keep Kubernetes deployment and pods → EKS; serverless compute instead of EC2 workers → Fargate",
          "notes": [
            "EKS เป็น Managed Kubernetes Orchestration ส่วน Fargate ให้ Serverless Compute สำหรับ Pods/Containers ที่รองรับ; ถ้า ECS แทน EKS จะไม่ใช่ Kubernetes เดิม",
            "A. Amazon ECS — orchestrate containers ด้วย AWS-native control plane",
            "B. Amazon EKS — บริการ Kubernetes แบบ managed [คำตอบที่ถูก]",
            "C. AWS Fargate — compute engine สำหรับ containers โดยไม่จัดการ servers [คำตอบที่ถูก]",
            "D. Amazon EC2 — ให้ virtual servers ที่ลูกค้าจัดการ guest OS",
            "E. AWS Batch — จัดคิวและรัน batch computing jobs"
          ]
        },
        {
          "questionId": 47,
          "result": "Wrong",
          "topic": "L05 — Network ACL vs Security group",
          "question": "A network team must explicitly deny an IP range at the subnet boundary and understands that inbound and outbound rules are evaluated separately. Which control applies?",
          "questionTh": "ทีม Network ต้อง Deny IP Range ที่ Subnet Boundary และเข้าใจว่า Inbound/Outbound Rules ถูกประเมินแยกกัน ใช้ Control ใด",
          "selected": "Security group",
          "correct": "Network ACL",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement ตามเฉลย; ยังไม่ทราบเหตุผลที่คิดจริงขณะตอบ",
          "memoryCue": "subnet boundary / explicit deny / stateless / separate inbound-outbound → Network ACL; ENI/instance level / stateful / allow rules → Security group",
          "notes": [
            "Network ACL ทำ Allow/Deny ที่ Subnet Boundary และเป็น Stateless ต้องคิด Inbound/Outbound แยกกัน; Security Group เป็น Stateful ที่ ENI",
            "A. Security group — stateful firewall ที่ระดับ ENI/instance",
            "B. Network ACL — stateless filtering ที่ระดับ subnet [คำตอบที่ถูก]",
            "C. AWS WAF — กรอง HTTP(S) requests ตาม web ACL rules",
            "D. AWS Shield — ป้องกันการโจมตี DDoS"
          ]
        },
        {
          "questionId": 48,
          "result": "Wrong",
          "topic": "L05 — NAT Gateway vs Internet Gateway vs VPC endpoint",
          "question": "Private EC2 instances require outbound access to public operating-system package repositories without accepting direct inbound connections. Which network component is best?",
          "questionTh": "Private EC2 Instances ต้องออกไป Public OS Package Repositories แต่ไม่รับ Direct Inbound Connections ควรใช้ Network Component ใด",
          "selected": "Internet Gateway",
          "correct": "NAT Gateway",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement ตามเฉลย; ยังไม่ทราบเหตุผลที่คิดจริงขณะตอบ",
          "memoryCue": "private subnet outbound to public package repositories → NAT Gateway; public subnet internet route → Internet Gateway; private AWS service access → VPC endpoint",
          "notes": [
            "NAT Gateway ให้ Instances ใน Private Subnet เริ่ม Outbound Internet ผ่าน NAT; Internet Gateway เป็น Gateway ของ VPC แต่ Private Instances ไม่ควรออก Internet โดยตรงผ่าน IGW",
            "A. Internet Gateway — เชื่อม VPC กับอินเทอร์เน็ตตาม route และ security rules",
            "B. VPC endpoint — เข้าถึง AWS services แบบ private โดยไม่ผ่าน public internet",
            "C. NAT Gateway — ให้ private subnet เริ่ม outbound connections ไปอินเทอร์เน็ต [คำตอบที่ถูก]",
            "D. AWS Direct Connect — dedicated private network connection ไป AWS"
          ]
        },
        {
          "questionId": 49,
          "result": "Wrong",
          "topic": "L05 — AWS Site-to-Site VPN + VPC endpoint vs Direct Connect",
          "question": "A firm needs an encrypted tunnel from headquarters over its internet link, and separately wants an S3 private access path for EC2 instances inside its VPC. Which TWO AWS options match? (Select TWO.)",
          "questionTh": "บริษัทต้องการ Encrypted Tunnel จากสำนักงานใหญ่ผ่าน Internet และ S3 Private Access Path สำหรับ EC2 ใน VPC ข้อใดสอง Options ตรงโจทย์",
          "selected": "AWS Site-to-Site VPN + AWS Direct Connect",
          "correct": "AWS Site-to-Site VPN + VPC endpoint",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement ตามเฉลย; ยังไม่ทราบเหตุผลที่คิดจริงขณะตอบ",
          "memoryCue": "encrypted headquarters-to-AWS tunnel over internet → Site-to-Site VPN; private EC2-to-S3 inside VPC → VPC endpoint; dedicated network circuit → Direct Connect",
          "notes": [
            "Site-to-Site VPN ตอบ On-prem-to-AWS Encrypted Tunnel; VPC Endpoint ตอบ Private Access ไป S3; Direct Connect ใช้ Dedicated Circuit ไม่ใช่ Private Endpoint สำหรับ S3 จาก VPC",
            "A. AWS Site-to-Site VPN — เข้ารหัสการเชื่อมต่อเครือข่ายผ่านอินเทอร์เน็ต [คำตอบที่ถูก]",
            "B. AWS Direct Connect — dedicated private network connection ไป AWS",
            "C. VPC endpoint — เข้าถึง AWS services แบบ private โดยไม่ผ่าน public internet [คำตอบที่ถูก]",
            "D. Internet Gateway — เชื่อม VPC กับอินเทอร์เน็ตตาม route และ security rules",
            "E. AWS Transit Gateway — เชื่อม VPC และ on-premises networks แบบ hub"
          ]
        },
        {
          "questionId": 52,
          "result": "Correct",
          "topic": "L06 — AWS DataSync vs Snowball Edge vs Storage Gateway",
          "question": "A retail chain needs to transfer file data from an on-premises NAS to S3 continuously over its existing network rather than ship a physical appliance. Which service fits?",
          "questionTh": "ร้านค้าหลายสาขาต้อง Transfer Files จาก On-premises NAS ไป S3 ผ่าน Network เดิมอย่างต่อเนื่อง ไม่ต้องส่ง Physical Appliance ควรใช้ Service ใด",
          "selected": "AWS DataSync",
          "correct": "AWS DataSync",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่มีธงขอทบทวนหรืออ่านภาษาอังกฤษไม่ชัด",
          "memoryCue": "continuous transfer NAS to S3 over existing network → DataSync; physical/offline transfer → Snowball Edge; hybrid storage interface/gateway → Storage Gateway",
          "notes": [
            "AWS DataSync ย้ายหรือ Sync Files Online ผ่าน Network; Snowball Edge ใช้ Physical Appliance ขนข้อมูล; Storage Gateway เชื่อม Storage On-prem กับ AWS แบบ Hybrid",
            "A. AWS Snowball Edge — ย้ายข้อมูลจำนวนมากแบบ physical device",
            "B. AWS DataSync — ย้ายข้อมูลระหว่าง storage locations แบบ online [คำตอบที่ถูก]",
            "C. AWS Storage Gateway — เชื่อม on-premises applications กับ cloud storage",
            "D. Amazon EFS — shared elastic file system สำหรับ Linux workloads"
          ]
        },
        {
          "questionId": 56,
          "result": "Wrong",
          "topic": "Messaging — Amazon Kinesis Data Streams + SQS vs Step Functions",
          "question": "A telemetry pipeline needs a retained high-throughput event stream, while a separate workload needs a durable queue for jobs waiting on workers. Which TWO services meet the distinct patterns? (Select TWO.)",
          "questionTh": "Telemetry Pipeline ต้องมี High-throughput Event Stream ที่ Retain Records และอีก Workload ต้องมี Durable Queue เก็บ Jobs รอ Workers ข้อใดสอง Services ตรงงาน",
          "selected": "Amazon Kinesis Data Streams + AWS Step Functions",
          "correct": "Amazon Kinesis Data Streams + Amazon SQS",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement ตามเฉลย; ยังไม่ทราบเหตุผลที่คิดจริงขณะตอบ",
          "memoryCue": "retained high-throughput event stream → Kinesis Data Streams; durable queue for jobs waiting on workers → SQS; ordered multi-step workflow/state machine → Step Functions",
          "notes": [
            "Kinesis Data Streams สำหรับ Streaming Records ที่ Consumers อ่านซ้ำได้ตาม Retention; SQS เป็น Durable Message Queue ให้ Worker Poll งาน; Step Functions ทำ Workflow Orchestration ไม่ใช่ Queue",
            "A. Amazon Kinesis Data Streams — streaming data ingestion สำหรับ consumers [คำตอบที่ถูก]",
            "B. Amazon SNS — pub/sub notifications และ fan-out",
            "C. Amazon SQS — managed queues สำหรับ decoupling [คำตอบที่ถูก]",
            "D. Amazon EventBridge — event bus และ event routing ตาม rules",
            "E. AWS Step Functions — orchestrate workflows แบบ state machines"
          ]
        },
        {
          "questionId": 57,
          "result": "Wrong",
          "topic": "Services — Amazon Connect vs Amazon WorkSpaces",
          "question": "A call center wants a cloud contact-center solution that routes incoming customer calls to agents and supports customer service interactions. Which AWS service is intended?",
          "questionTh": "Call Center ต้องการ Cloud Contact-center Solution ที่ Route Incoming Customer Calls ไป Agents และรองรับ Customer Service Interaction ควรใช้ Service ใด",
          "selected": "Amazon WorkSpaces",
          "correct": "Amazon Connect",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Service หรือ Concept ที่เกี่ยวข้องแต่ไม่ตรง Requirement ตามเฉลย; ยังไม่ทราบเหตุผลที่คิดจริงขณะตอบ",
          "memoryCue": "call center / incoming calls / routing to agents → Amazon Connect; virtual desktops for employees → Amazon WorkSpaces",
          "notes": [
            "Amazon Connect เป็น Cloud Contact Center สำหรับ Customer Calls และ Agents; Amazon WorkSpaces เป็น Virtual Desktop Service ไม่ใช่ระบบ Call Routing",
            "A. Amazon SES — ส่งอีเมลผ่านบริการ managed",
            "B. Amazon Connect — cloud contact center [คำตอบที่ถูก]",
            "C. Amazon WorkSpaces — managed virtual desktops",
            "D. Amazon SNS — pub/sub notifications และ fan-out"
          ]
        }
      ],
      "englishNotes": [
        {
          "questionId": 6,
          "phrase": "recover after a component outage; strict event-processing latency target",
          "translation": "ต้องกู้คืน/ทำงานต่อหลังส่วนประกอบเสีย และต้องประมวลผล Events ได้ตามเวลา Latency ที่กำหนด"
        },
        {
          "questionId": 16,
          "phrase": "variable invoices tied to cloud consumption",
          "translation": "ใบแจ้งหนี้ที่ยอดเปลี่ยนตามปริมาณการใช้ Cloud"
        },
        {
          "questionId": 41,
          "phrase": "keep an existing Kubernetes deployment model; pods use managed serverless compute",
          "translation": "ยังใช้รูปแบบ Deploy Kubernetes เดิม แต่ให้ Pods ใช้ Serverless Compute แทน EC2 Worker Hosts"
        }
      ]
    },
    "local-set-08": {
      "title": "Local Mock Set 8",
      "note": "18 Nov 2026 · 56/65 correct (86.2%) · 9 wrong + 6 correct flagged · 5 Explain More, 4 English Unclear, 4 Concept/Recall Gap, 2 Clue/Distractor Gap; flags may overlap. Set 8 questions use a fixed mixed-domain shuffle.",
      "items": [
        {
          "questionId": 6,
          "key": "local-set-08:q6",
          "topic": "L13 — Security vs Reliability — Least privilege",
          "type": "clue",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "note": "Wrong | โจทย์จำกัดสิทธิ์อ่าน S3 Bucket เดียวและห้าม Delete เป็น IAM Least Privilege ซึ่งอยู่ใน Security Pillar ไม่ใช่ Reliability ที่เน้นความต่อเนื่องและการกู้คืน"
        },
        {
          "questionId": 8,
          "key": "local-set-08:q8",
          "topic": "L01 — Capital expenditure vs Variable expense",
          "type": "clue",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "note": "Correct; flagged for review | คำว่า buys server racks and network equipment upfront คือใช้เงินก้อนซื้อสินทรัพย์ล่วงหน้า (Capital expenditure) ไม่ใช่ค่าเช่า Compute ตามชั่วโมง"
        },
        {
          "questionId": 12,
          "key": "local-set-08:q12",
          "topic": "L11 — AWS Marketplace vs AWS Partner Network",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ต้องการซื้อ License และ Deploy Third-party Security Appliance ที่จำหน่ายบน AWS จึงค้นจาก AWS Marketplace ถ้าต้องการบริษัทผู้เชี่ยวชาญมาช่วย Implement หรือ Migrate จึงใช้ AWS Partner Network"
        },
        {
          "questionId": 13,
          "key": "local-set-08:q13",
          "topic": "L13 — Reliability + Performance Efficiency",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | โจทย์ Select TWO มีสอง Requirement ต่างกัน คือกู้บริการหลัง AZ Outage จึงเลือก Reliability และวัด Latency การประมวลผลจึงเลือก Performance Efficiency"
        },
        {
          "questionId": 14,
          "key": "local-set-08:q14",
          "topic": "L09 — Amazon Macie + GuardDuty vs Inspector",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์มีสองงานคือค้นหาข้อมูลอ่อนไหวใน S3 (Amazon Macie) และตรวจจับพฤติกรรมเข้าถึงที่น่าสงสัย (GuardDuty) ไม่ได้ขอ Scan Vulnerable Packages"
        },
        {
          "questionId": 19,
          "key": "local-set-08:q19",
          "topic": "L09 — IAM Identity Center vs Cognito vs Organizations",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Wrong | กลุ่มผู้ใช้คือพนักงานองค์กรที่ต้อง SSO เข้า AWS Accounts หลายบัญชีและรับ Roles/Permission Sets ผ่าน Portal กลาง จึงเป็น IAM Identity Center ไม่ใช่ Cognito สำหรับผู้ใช้แอป"
        },
        {
          "questionId": 23,
          "key": "local-set-08:q23",
          "topic": "L01 — Variable expense vs Capital expenditure",
          "type": "language",
          "rawFlags": [
            "🟡 Explain More",
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language",
            "confidence"
          ],
          "note": "Correct; flagged for review | Seasonal Demand หมายถึงความต้องการเปลี่ยนตามฤดูกาล เมื่อโจทย์ถาม 'Cost concept' ที่ค่าใช้จ่ายเพิ่มลดตาม Consumption จึงเป็น Variable expense"
        },
        {
          "questionId": 28,
          "key": "local-set-08:q28",
          "topic": "L05 — NAT Gateway vs VPC endpoint vs Internet Gateway",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Wrong | โจทย์ระบุ Public Repositories บน Internet และ EC2 อยู่ใน Private Subnet ต้องเริ่ม Outbound ได้โดยไม่เปิด Direct Inbound จึงใช้ NAT Gateway โดยทั่วไปผ่าน Public Subnet และ Internet Gateway"
        },
        {
          "questionId": 41,
          "key": "local-set-08:q41",
          "topic": "L09 — EC2 vs RDS — Shared Responsibility",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | เดิมบน EC2 ลูกค้าต้องดูแล Guest OS เอง เมื่อเปลี่ยนเป็น RDS ภาระ OS และ Managed Database Platform จึงย้ายให้ AWS ดูแล ส่วน AWS-owned Physical Servers เป็นหน้าที่ AWS ตั้งแต่เดิม ไม่ใช่หน้าที่ที่เพิ่งย้าย"
        },
        {
          "questionId": 43,
          "key": "local-set-08:q43",
          "topic": "L12 — Application Discovery Service + Migration Hub vs Migration Evaluator",
          "type": "concept",
          "rawFlags": [
            "🟡 Explain More",
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language",
            "confidence"
          ],
          "note": "Wrong | งานแรกต้องสำรวจ Server Dependencies ซึ่งเป็นหน้าที่ Application Discovery Service งานที่สองต้องติดตามสถานะจากหลาย Migration Tools ซึ่งเป็น Migration Hub ส่วน Evaluator ใช้สร้าง Financial Business Case"
        },
        {
          "questionId": 52,
          "key": "local-set-08:q52",
          "topic": "L05 — VPC endpoint + Site-to-Site VPN vs NAT/Direct Connect",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Correct; flagged for review | โจทย์มีสองเส้นทาง คนละการใช้งาน: Workload ภายใน VPC ไป S3 แบบ Private ใช้ VPC Endpoint ส่วน On-premises ไป AWS ผ่าน Encrypted Tunnel บน Internet เดิมใช้ Site-to-Site VPN"
        },
        {
          "questionId": 53,
          "key": "local-set-08:q53",
          "topic": "L09 — Customer data access vs AWS-managed S3 infrastructure",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | แม้ Amazon S3 จะเป็น Managed Object Storage แต่ผู้ใช้ยังต้องตัดสินใจว่าใครเข้าถึง Confidential Files ได้และตั้งค่า Bucket/IAM Policies ของตนเอง"
        },
        {
          "questionId": 57,
          "key": "local-set-08:q57",
          "topic": "L04 — AWS Region vs Availability Zone vs Edge location",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Wrong | โจทย์เน้นข้อกำหนดพื้นที่ภูมิศาสตร์เพื่อเก็บข้อมูล (Data Residency) จึงเลือก AWS Region ให้ตรงข้อกำหนดกฎหมาย ส่วน Availability Zone เป็นพื้นที่ย่อยภายใน Region ที่เลือกเพื่อ Availability"
        },
        {
          "questionId": 58,
          "key": "local-set-08:q58",
          "topic": "L09 — AWS EC2 Shared Responsibility — Physical Hosts + Hypervisor",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | AWS ดูแล Physical Servers และ Hypervisor/Virtualization ใต้ EC2 ส่วนลูกค้าดูแล Guest OS Patches และตั้งค่า Security Group Rules ของ EC2"
        },
        {
          "questionId": 61,
          "key": "local-set-08:q61",
          "topic": "L09 — AWS Firewall Manager vs WAF vs Security Hub",
          "type": "concept",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "note": "Wrong | เมื่อโจทย์เน้น Enforce WAF Rules ชุดเดียวกันหลาย AWS Accounts โดยจัดการ Policy จากศูนย์กลาง ควรใช้ AWS Firewall Manager ส่วน Security Hub รวม Findings และ AWS WAF เป็นตัวกรอง HTTP Requests"
        }
      ],
      "details": [
        {
          "questionId": 6,
          "result": "Wrong",
          "topic": "L13 — Security vs Reliability — Least privilege",
          "question": "A developer should only read objects from one S3 bucket and must not delete them. Which Well-Architected pillar MOST directly supports this least-privilege requirement?",
          "questionTh": "Developer ต้องอ่าน Objects จาก S3 Bucket เดียวแต่ห้าม Delete Records ข้อกำหนด Least Privilege นี้ตรงกับ Well-Architected Pillar ใดที่สุด",
          "selected": "Reliability",
          "correct": "Security",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตอบ Requirement เฉพาะตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "only read / must not delete / least privilege → Security; recover after failure / failover → Reliability",
          "notes": [
            "โจทย์จำกัดสิทธิ์อ่าน S3 Bucket เดียวและห้าม Delete เป็น IAM Least Privilege ซึ่งอยู่ใน Security Pillar ไม่ใช่ Reliability ที่เน้นความต่อเนื่องและการกู้คืน",
            "A. Security — Security Pillar เน้นการป้องกันข้อมูล Identity และ Authorization ให้เฉพาะ s3:GetObject ไม่ให้ s3:DeleteObject [คำตอบที่ถูก]",
            "B. Reliability — Reliability เน้น Availability, Fault Recovery และความทนทานต่อความล้มเหลว ไม่ใช่การกำหนด IAM Permission",
            "C. Cost Optimization — Cost Optimization ลดต้นทุนที่สูญเปล่า เช่น ปิด Resources ที่ไม่ได้ใช้งาน ไม่ใช่การจำกัดสิทธิ์อ่านไฟล์",
            "D. Operational Excellence — Operational Excellence เน้น Runbook, Incident Review และ Automation ของ Operations ไม่ใช่ Access Control"
          ]
        },
        {
          "questionId": 8,
          "result": "Correct",
          "topic": "L01 — Capital expenditure vs Variable expense",
          "question": "A manufacturer buys server racks and network equipment upfront rather than renting compute by the hour. Which expense category describes this purchase?",
          "questionTh": "ผู้ผลิตซื้อ Server Racks และ Network Equipment ด้วยเงินก้อนล่วงหน้า แทนการเช่า Compute รายชั่วโมง เป็นค่าใช้จ่ายประเภทใด",
          "selected": "Capital expenditure",
          "correct": "Capital expenditure",
          "rawFlags": [
            "🧩 Clue / Distractor Gap"
          ],
          "reviewedCauses": [
            "clue"
          ],
          "diagnosis": "ตอบถูก แต่ผู้สอบปักธงขอทบทวนหรือแจ้งว่าอ่านภาษาอังกฤษยังไม่ชัด",
          "memoryCue": "buys racks / upfront / owns physical hardware → Capital expenditure; consumption-based monthly bill → Variable expense",
          "notes": [
            "คำว่า buys server racks and network equipment upfront คือใช้เงินก้อนซื้อสินทรัพย์ล่วงหน้า (Capital expenditure) ไม่ใช่ค่าเช่า Compute ตามชั่วโมง",
            "A. Capital expenditure — ซื้อและถือครอง Physical Assets ล่วงหน้า เช่น Server Racks และ Networking Equipment [คำตอบที่ถูก]",
            "B. Variable expense — ค่าใช้จ่ายผันแปรตามการใช้ Cloud ในแต่ละช่วง เช่น Compute Hours",
            "C. Pay-as-you-go — หลักจ่ายตามปริมาณทรัพยากรที่ใช้ ไม่ใช่การซื้อ Hardware ล่วงหน้า",
            "D. Rightsizing — ปรับขนาด Instance ให้เหมาะกับ Usage ไม่ได้อธิบายรูปแบบซื้อทรัพย์สิน"
          ]
        },
        {
          "questionId": 12,
          "result": "Wrong",
          "topic": "L11 — AWS Marketplace vs AWS Partner Network",
          "question": "A team needs to license and deploy a supported third-party security appliance available through AWS. Where should it look first?",
          "questionTh": "ทีมต้องการซื้อ License และ Deploy Third-party Security Appliance ที่มีใน AWS ควรค้นจากบริการใดก่อน",
          "selected": "AWS Partner Network",
          "correct": "AWS Marketplace",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตอบ Requirement เฉพาะตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "license / deploy / subscribe third-party appliance → AWS Marketplace; find migration consultants or partners → AWS Partner Network",
          "notes": [
            "ต้องการซื้อ License และ Deploy Third-party Security Appliance ที่จำหน่ายบน AWS จึงค้นจาก AWS Marketplace ถ้าต้องการบริษัทผู้เชี่ยวชาญมาช่วย Implement หรือ Migrate จึงใช้ AWS Partner Network",
            "A. AWS Artifact — Portal สำหรับ AWS Compliance Reports และ Agreements ไม่ใช่ Third-party Product Catalog",
            "B. AWS Marketplace — Catalog สำหรับค้นหา ซื้อและ Deploy Third-party Software และ Security Appliances ที่รองรับ [คำตอบที่ถูก]",
            "C. AWS Trusted Advisor — ตรวจ Account Best Practices เช่น Security, Performance และ Cost ไม่ใช่ช่องทางซื้อ Appliances",
            "D. AWS Partner Network — เครือข่าย AWS Partners สำหรับหาผู้ให้บริการ Consulting หรือ Migration Projects ไม่ใช่หน้าซื้อ Software License โดยตรง"
          ]
        },
        {
          "questionId": 13,
          "result": "Correct",
          "topic": "L13 — Reliability + Performance Efficiency",
          "question": "A streaming platform measures processing latency while also planning recovery after an Availability Zone outage. Which TWO pillars are directly involved? (Select TWO.)",
          "questionTh": "แพลตฟอร์ม Streaming วัด Processing Latency และเตรียมการกู้บริการหลัง Availability Zone มีปัญหา Pillars สองข้อใดเกี่ยวข้องโดยตรง",
          "selected": "Reliability + Performance Efficiency",
          "correct": "Reliability + Performance Efficiency",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ผู้สอบปักธงขอทบทวนหรือแจ้งว่าอ่านภาษาอังกฤษยังไม่ชัด",
          "memoryCue": "recovery after AZ outage → Reliability; processing latency / throughput target → Performance Efficiency",
          "notes": [
            "โจทย์ Select TWO มีสอง Requirement ต่างกัน คือกู้บริการหลัง AZ Outage จึงเลือก Reliability และวัด Latency การประมวลผลจึงเลือก Performance Efficiency",
            "A. Reliability — ออกแบบระบบให้ทน Failure และกู้คืนตาม Recovery Objectives เช่น AZ Failover [คำตอบที่ถูก]",
            "B. Cost Optimization — ควบคุมต้นทุนและลด Idle Resources ไม่ได้เป็นเป้าหมายหลักของโจทย์นี้",
            "C. Security — ปกป้องข้อมูลและ Identity ไม่ใช่ Recovery/Latency ที่โจทย์ถาม",
            "D. Performance Efficiency — เลือกใช้ทรัพยากรเพื่อให้ได้ Latency/Throughput ตามเป้าหมาย [คำตอบที่ถูก]",
            "E. Sustainability — ลด Environmental Impact ไม่ใช่เป้าหมาย Latency หรือ AZ Recovery"
          ]
        },
        {
          "questionId": 14,
          "result": "Wrong",
          "topic": "L09 — Amazon Macie + GuardDuty vs Inspector",
          "question": "A company wants to detect personal identification numbers stored in Amazon S3 and investigate suspicious access patterns. Which TWO services cover the two requirements? (Select TWO.)",
          "questionTh": "บริษัทต้องการค้นเลขประจำตัวส่วนบุคคลใน S3 และตรวจจับรูปแบบการเข้าถึงที่น่าสงสัย บริการใดสองตัวตรงคนละส่วน",
          "selected": "Amazon Macie + Amazon Inspector",
          "correct": "Amazon Macie + Amazon GuardDuty",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตอบ Requirement เฉพาะตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "sensitive data / personal identifiers in S3 → Macie; suspicious access patterns → GuardDuty; software vulnerabilities / CVEs → Inspector",
          "notes": [
            "โจทย์มีสองงานคือค้นหาข้อมูลอ่อนไหวใน S3 (Amazon Macie) และตรวจจับพฤติกรรมเข้าถึงที่น่าสงสัย (GuardDuty) ไม่ได้ขอ Scan Vulnerable Packages",
            "A. Amazon Macie — ค้นหาและจัดประเภท Sensitive Data เช่น Personal Identifiers ใน S3 [คำตอบที่ถูก]",
            "B. Amazon Inspector — Scan Software Vulnerabilities/CVEs ใน EC2 หรือ ECR Images ที่รองรับ ไม่ใช่ตรวจพฤติกรรมการใช้ Credentials",
            "C. Amazon GuardDuty — ตรวจจับ Threat Indicators และ Suspicious Access/API Activity จากสัญญาณต่าง ๆ [คำตอบที่ถูก]",
            "D. AWS Artifact — ดาวน์โหลด Compliance Reports และ Agreements ของ AWS ไม่ใช่ Threat Detection",
            "E. AWS Config — ติดตาม Configuration และประเมิน Rules ของ Resources ไม่ใช่ค้น PII ใน S3"
          ]
        },
        {
          "questionId": 19,
          "result": "Wrong",
          "topic": "L09 — IAM Identity Center vs Cognito vs Organizations",
          "question": "An enterprise wants employees to sign in once and access assigned roles in multiple AWS accounts through a central portal. Which service BEST fits?",
          "questionTh": "องค์กรต้องการให้พนักงาน Sign in ครั้งเดียว แล้วเข้า AWS Accounts หลายบัญชีผ่าน Portal กลางพร้อม Assigned Roles ใช้บริการใด",
          "selected": "Amazon Cognito",
          "correct": "IAM Identity Center",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตอบ Requirement เฉพาะตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "employees / sign in once / central AWS access portal / multiple AWS accounts → IAM Identity Center; app customers/mobile sign-in → Cognito",
          "notes": [
            "กลุ่มผู้ใช้คือพนักงานองค์กรที่ต้อง SSO เข้า AWS Accounts หลายบัญชีและรับ Roles/Permission Sets ผ่าน Portal กลาง จึงเป็น IAM Identity Center ไม่ใช่ Cognito สำหรับผู้ใช้แอป",
            "A. AWS IAM — กำหนด IAM Users/Roles/Policies ของ AWS; ไม่ใช่ Workforce SSO Portal ข้ามหลายบัญชีโดยตรง",
            "B. Amazon Cognito — Authentication ของ End Users ใน Web/Mobile Applications เช่นลูกค้าหรือผู้เล่นเกม",
            "C. IAM Identity Center — Workforce SSO และ Permission Sets ข้าม AWS Accounts เชื่อม Corporate Identity Provider ได้ [คำตอบที่ถูก]",
            "D. AWS Organizations — จัด AWS Accounts/OUs/SCPs และ Consolidated Billing ไม่ใช่หน้าจอ Workforce Login"
          ]
        },
        {
          "questionId": 23,
          "result": "Correct",
          "topic": "L01 — Variable expense vs Capital expenditure",
          "question": "A finance team wants compute expenses to follow seasonal demand rather than buying hardware for the highest peak. Which cost concept is central?",
          "questionTh": "ทีม Finance ต้องการให้ค่า Compute เปลี่ยนตาม Seasonal Demand แทนซื้อ Hardware รองรับ Peak สูงสุด แนวคิดค่าใช้จ่ายใดเป็นหลัก",
          "selected": "Variable expense",
          "correct": "Variable expense",
          "rawFlags": [
            "🟡 Explain More",
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language",
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ผู้สอบปักธงขอทบทวนหรือแจ้งว่าอ่านภาษาอังกฤษยังไม่ชัด",
          "memoryCue": "compute expenses follow seasonal demand → Variable expense; buying peak hardware upfront → Capital expenditure",
          "notes": [
            "Seasonal Demand หมายถึงความต้องการเปลี่ยนตามฤดูกาล เมื่อโจทย์ถาม 'Cost concept' ที่ค่าใช้จ่ายเพิ่มลดตาม Consumption จึงเป็น Variable expense",
            "A. Capital expenditure — ลงทุนซื้อ Physical Servers รองรับ Peak ล่วงหน้า ไม่ใช่ค่าใช้จ่ายตาม Usage",
            "B. Variable expense — ค่าใช้จ่ายที่เปลี่ยนตาม Actual Cloud Consumption เช่น Compute ใช้มากช่วงเทศกาล [คำตอบที่ถูก]",
            "C. Economies of scale — ต้นทุนต่อหน่วยลดจากผู้ให้บริการดำเนินงานขนาดใหญ่ ไม่ใช่รูปแบบบิลตามฤดูกาล",
            "D. Consolidated billing — รวม Billing จากหลาย AWS Accounts ไม่ใช่ต้นทุนผันแปรตาม Workload"
          ]
        },
        {
          "questionId": 28,
          "result": "Wrong",
          "topic": "L05 — NAT Gateway vs VPC endpoint vs Internet Gateway",
          "question": "A private subnet hosts instances that must download software updates from public repositories but accept no direct incoming internet connections. Which component is used for outbound internet access?",
          "questionTh": "Private Subnet มี Instances ที่ต้องดาวน์โหลด Updates จาก Internet แต่ไม่รับ Inbound Connections โดยตรง ควรใช้ Component ใด",
          "selected": "VPC endpoint",
          "correct": "NAT Gateway",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตอบ Requirement เฉพาะตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "private subnet + outbound public software repositories → NAT Gateway; private access to S3/DynamoDB → VPC endpoint",
          "notes": [
            "โจทย์ระบุ Public Repositories บน Internet และ EC2 อยู่ใน Private Subnet ต้องเริ่ม Outbound ได้โดยไม่เปิด Direct Inbound จึงใช้ NAT Gateway โดยทั่วไปผ่าน Public Subnet และ Internet Gateway",
            "A. Internet Gateway — Gateway ระหว่าง VPC กับ Internet ใช้ร่วม Route Tables; Private Instance ไม่มี Public IP จึงไม่สามารถใช้ IGW ออกโดยตรงแบบ Public Instance",
            "B. VPC endpoint — ใช้ Private Connectivity จาก VPC ไป AWS Services ที่รองรับ เช่น S3 โดยไม่ใช้ Public Internet ไม่ใช่ทางออกไป Public Software Repositories ทั่วไป",
            "C. NAT Gateway — ช่วย Instances ใน Private Subnet เริ่ม Outbound Internet Connections ได้โดยไม่มี Direct Unsolicited Inbound กลับมาหา Instance [คำตอบที่ถูก]",
            "D. AWS Direct Connect — Dedicated Link ระหว่าง On-premises Data Center กับ AWS ไม่ได้ทำ Internet Egress ให้ Private Subnet โดยตัวมันเอง"
          ]
        },
        {
          "questionId": 41,
          "result": "Wrong",
          "topic": "L09 — EC2 vs RDS — Shared Responsibility",
          "question": "An organization replaces a self-hosted database on EC2 with Amazon RDS. Which responsibility does AWS take over for the managed database?",
          "questionTh": "องค์กรย้าย Database จาก EC2 ที่ดูแลเองไป Amazon RDS หน้าที่ใดเปลี่ยนไปให้ AWS รับผิดชอบสำหรับ Managed Database",
          "selected": "AWS-owned physical servers",
          "correct": "Guest operating system",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตอบ Requirement เฉพาะตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "which responsibility does AWS take over when EC2 database becomes RDS? → guest OS / managed database platform; physical hardware already AWS-managed",
          "notes": [
            "เดิมบน EC2 ลูกค้าต้องดูแล Guest OS เอง เมื่อเปลี่ยนเป็น RDS ภาระ OS และ Managed Database Platform จึงย้ายให้ AWS ดูแล ส่วน AWS-owned Physical Servers เป็นหน้าที่ AWS ตั้งแต่เดิม ไม่ใช่หน้าที่ที่เพิ่งย้าย",
            "A. Guest operating system — ลูกค้า Patch/Configure Guest OS ของ EC2 เอง แต่ AWS ดูแล OS ของ Managed RDS Infrastructure [คำตอบที่ถูก]",
            "B. Security group — ลูกค้ายังต้องกำหนด Network Access/Rules สำหรับ RDS ตามข้อกำหนด Workload",
            "C. AWS-owned physical servers — AWS ดูแล Physical Hardware ทั้งตอนใช้ EC2 และ RDS อยู่แล้ว จึงไม่ใช่ส่วนที่เปลี่ยนเจ้าของความรับผิดชอบ",
            "D. AWS IAM — ลูกค้ายังต้องออกแบบและกำหนด IAM Permissions/Access ที่เกี่ยวข้อง ไม่ใช่สิ่งที่ AWS รับช่วงกำหนดสิทธิ์แทน"
          ]
        },
        {
          "questionId": 43,
          "result": "Wrong",
          "topic": "L12 — Application Discovery Service + Migration Hub vs Migration Evaluator",
          "question": "A migration team needs one service to collect server dependencies and another to track progress of multiple migration tools. Which TWO fit? (Select TWO.)",
          "questionTh": "ทีมย้ายระบบต้องมีบริการหนึ่งรวบรวม Server Dependencies และอีกบริการติดตามความคืบหน้าจาก Migration Tools หลายตัว บริการใดสองข้อเหมาะ",
          "selected": "AWS Migration Evaluator + AWS Migration Hub",
          "correct": "AWS Migration Hub + AWS Application Discovery Service",
          "rawFlags": [
            "🟡 Explain More",
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language",
            "confidence"
          ],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตอบ Requirement เฉพาะตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "collect server dependencies → AWS Application Discovery Service; track progress across migration tools → AWS Migration Hub; cost/business case → Migration Evaluator",
          "notes": [
            "งานแรกต้องสำรวจ Server Dependencies ซึ่งเป็นหน้าที่ Application Discovery Service งานที่สองต้องติดตามสถานะจากหลาย Migration Tools ซึ่งเป็น Migration Hub ส่วน Evaluator ใช้สร้าง Financial Business Case",
            "A. AWS Migration Hub — ศูนย์กลางติดตาม Progress ของ Applications ที่ย้ายผ่านหลาย Tools [คำตอบที่ถูก]",
            "B. AWS SCT — ช่วยแปลง Database Schema/Code ระหว่าง Engines ไม่ใช่ติดตาม Migration Project",
            "C. AWS Application Discovery Service — เก็บ Server Inventory และ Dependencies ก่อนวาง Migration Waves [คำตอบที่ถูก]",
            "D. AWS DMS — ย้าย/Replicate Database Data ไม่ใช่เก็บ Dependencies ของ Servers",
            "E. AWS Migration Evaluator — ประเมิน TCO, Migration Costs และ Business Case ไม่ได้ใช้ทำ Server Dependency Mapping"
          ]
        },
        {
          "questionId": 52,
          "result": "Correct",
          "topic": "L05 — VPC endpoint + Site-to-Site VPN vs NAT/Direct Connect",
          "question": "A private workload needs network access to S3 without sending traffic over the public internet, and a company needs an encrypted tunnel to AWS over its existing internet link. Which TWO services satisfy these needs? (Select TWO.)",
          "questionTh": "Private Workload ต้องเข้าถึง S3 แบบ Private และบริษัทต้องเชื่อมเครือข่าย On-premises กับ AWS ผ่าน Encrypted Tunnel บน Internet เดิม บริการใดสองตัวตอบโจทย์",
          "selected": "VPC endpoint + AWS Site-to-Site VPN",
          "correct": "VPC endpoint + AWS Site-to-Site VPN",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "ตอบถูก แต่ผู้สอบปักธงขอทบทวนหรือแจ้งว่าอ่านภาษาอังกฤษยังไม่ชัด",
          "memoryCue": "S3 private without public internet → VPC endpoint; encrypted tunnel over existing internet → Site-to-Site VPN",
          "notes": [
            "โจทย์มีสองเส้นทาง คนละการใช้งาน: Workload ภายใน VPC ไป S3 แบบ Private ใช้ VPC Endpoint ส่วน On-premises ไป AWS ผ่าน Encrypted Tunnel บน Internet เดิมใช้ Site-to-Site VPN",
            "A. VPC endpoint — Private Connectivity จาก VPC ไป S3 หรือ AWS Services ที่รองรับ [คำตอบที่ถูก]",
            "B. NAT Gateway — ออก Public Internet จาก Private Subnet แต่ไม่ใช่ Private S3 Endpoint",
            "C. AWS Direct Connect — Dedicated Private Network Circuit ไม่ใช่ VPN Tunnel บน Internet เดิม",
            "D. AWS Site-to-Site VPN — Encrypted IPSec Tunnel เชื่อม On-premises Network กับ AWS ผ่าน Internet [คำตอบที่ถูก]",
            "E. Internet Gateway — ต่อ Internet ให้ VPC ตาม Route/IP ไม่ได้ทำ Private AWS Service Access"
          ]
        },
        {
          "questionId": 53,
          "result": "Correct",
          "topic": "L09 — Customer data access vs AWS-managed S3 infrastructure",
          "question": "A team uploads confidential files to Amazon S3. Which responsibility remains with the customer?",
          "questionTh": "ทีมอัปโหลดไฟล์ลับขึ้น Amazon S3 หน้าที่ใดยังคงเป็นความรับผิดชอบของลูกค้า",
          "selected": "The customer",
          "correct": "The customer",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่ผู้สอบปักธงขอทบทวนหรือแจ้งว่าอ่านภาษาอังกฤษยังไม่ชัด",
          "memoryCue": "confidential files / who controls permissions → The customer; physical hardware/data center → AWS",
          "notes": [
            "แม้ Amazon S3 จะเป็น Managed Object Storage แต่ผู้ใช้ยังต้องตัดสินใจว่าใครเข้าถึง Confidential Files ได้และตั้งค่า Bucket/IAM Policies ของตนเอง",
            "A. AWS-owned physical servers — เป็น Hardware ที่ AWS บำรุงรักษา ไม่ใช่ชื่อฝ่ายที่กำหนดสิทธิ์อ่านไฟล์ของลูกค้า",
            "B. Hypervisor — Virtualization Layer ที่ AWS ดูแล ไม่เกี่ยวกับการอนุญาตให้ผู้ใช้เปิด Confidential Data",
            "C. The customer — กำหนดการเข้าถึง S3 Data, IAM/Bucket Policies และ Data Classification ของไฟล์ลับ [คำตอบที่ถูก]",
            "D. AWS — ดูแล Security OF the Cloud เช่น S3 Service Infrastructure ไม่ใช่เป็นเจ้าของการกำหนด Data Permissions แทนลูกค้า"
          ]
        },
        {
          "questionId": 57,
          "result": "Wrong",
          "topic": "L04 — AWS Region vs Availability Zone vs Edge location",
          "question": "A company has legal requirements to keep customer data within a specific geographic area. Which AWS infrastructure choice is MOST relevant?",
          "questionTh": "บริษัทต้องเก็บ Customer Data อยู่ภายในพื้นที่ภูมิศาสตร์ตามข้อกำหนดกฎหมาย การเลือก Infrastructure ใดสำคัญที่สุด",
          "selected": "Availability Zone",
          "correct": "AWS Region",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตอบ Requirement เฉพาะตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "legal geographic requirements / data residency → AWS Region; fault isolation within same Region → Availability Zone",
          "notes": [
            "โจทย์เน้นข้อกำหนดพื้นที่ภูมิศาสตร์เพื่อเก็บข้อมูล (Data Residency) จึงเลือก AWS Region ให้ตรงข้อกำหนดกฎหมาย ส่วน Availability Zone เป็นพื้นที่ย่อยภายใน Region ที่เลือกเพื่อ Availability",
            "A. Availability Zone — Isolated Infrastructure ภายใน Region เหมาะกระจายระบบให้ทน AZ Failure ไม่ใช่หน่วยเลือก Geographic Area หลัก",
            "B. AWS Region — Geographic Area ที่ใช้เลือกสถานที่ Deploy/Store Data ให้ตรง Data Residency Requirements [คำตอบที่ถูก]",
            "C. Edge location — จุดใกล้ผู้ใช้สำหรับ Global Edge Delivery/Caching ไม่ใช่พื้นที่ Region สำหรับเก็บ Primary Workload",
            "D. Amazon CloudFront — CDN สำหรับ Content Delivery ผ่าน Edge Locations ไม่ใช่ Service สำหรับกำหนด Data Residency ของฐานข้อมูลโดยตรง"
          ]
        },
        {
          "questionId": 58,
          "result": "Correct",
          "topic": "L09 — AWS EC2 Shared Responsibility — Physical Hosts + Hypervisor",
          "question": "A company uses EC2 and wants to distinguish responsibilities. Which TWO are handled by AWS under the shared responsibility model? (Select TWO.)",
          "questionTh": "บริษัทใช้ EC2 และต้องแยกหน้าที่ตาม Shared Responsibility Model ข้อใดสองอย่าง AWS เป็นผู้ดูแล",
          "selected": "AWS-owned physical servers + Hypervisor",
          "correct": "AWS-owned physical servers + Hypervisor",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ผู้สอบปักธงขอทบทวนหรือแจ้งว่าอ่านภาษาอังกฤษยังไม่ชัด",
          "memoryCue": "AWS responsibilities on EC2 → physical servers + hypervisor; customer → guest OS + security groups",
          "notes": [
            "AWS ดูแล Physical Servers และ Hypervisor/Virtualization ใต้ EC2 ส่วนลูกค้าดูแล Guest OS Patches และตั้งค่า Security Group Rules ของ EC2",
            "A. AWS-owned physical servers — AWS บำรุงรักษา Physical Servers และ Data Centers ที่ใช้รัน EC2 [คำตอบที่ถูก]",
            "B. Guest operating system — ระบบ Linux/Windows ภายใน EC2 ที่ลูกค้าต้อง Patch/Configure",
            "C. Hypervisor — Virtualization Layer ใต้ EC2 ที่ AWS จัดการ [คำตอบที่ถูก]",
            "D. Security group — Customer-configured Stateful Network Firewall Rules ของ ENI",
            "E. The customer — เป็นฝ่ายผู้รับผิดชอบ Code/Data/Guest OS/Policies ไม่ใช่หนึ่งใน Physical Components ที่ถามหา"
          ]
        },
        {
          "questionId": 61,
          "result": "Wrong",
          "topic": "L09 — AWS Firewall Manager vs WAF vs Security Hub",
          "question": "A security leader wants the same AWS WAF rules enforced centrally across accounts in an organization. Which service is designed for centralized policy management?",
          "questionTh": "หัวหน้าทีม Security ต้องการใช้ AWS WAF Rules ชุดเดียวกันกับหลาย Accounts โดยบริหาร Policies จากส่วนกลาง ใช้บริการใด",
          "selected": "AWS Security Hub",
          "correct": "AWS Firewall Manager",
          "rawFlags": [
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept"
          ],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตอบ Requirement เฉพาะตามเฉลย เหตุผลที่ผู้สอบคิดจริงยังไม่ทราบ",
          "memoryCue": "same WAF rules centrally across AWS accounts → Firewall Manager; filter HTTP requests → WAF; aggregate findings → Security Hub",
          "notes": [
            "เมื่อโจทย์เน้น Enforce WAF Rules ชุดเดียวกันหลาย AWS Accounts โดยจัดการ Policy จากศูนย์กลาง ควรใช้ AWS Firewall Manager ส่วน Security Hub รวม Findings และ AWS WAF เป็นตัวกรอง HTTP Requests",
            "A. AWS WAF — กรอง/Block HTTP(S) Requests ที่ตรง Web ACL Rules เช่น SQL Injection และ XSS",
            "B. AWS Shield — DDoS Protection ไม่ได้เป็นบริการศูนย์กลางสำหรับกระจาย WAF Rules",
            "C. AWS Firewall Manager — จัดการและบังคับ Security Policies เช่น WAF Web ACLs ข้าม Accounts จากส่วนกลาง [คำตอบที่ถูก]",
            "D. AWS Security Hub — รวม Security Findings จาก GuardDuty/Inspector และแหล่งอื่น ไม่ได้ Deploy WAF Policy เป็นหน้าที่หลัก"
          ]
        }
      ],
      "englishNotes": [
        {
          "questionId": 23,
          "phrase": "compute expenses to follow seasonal demand rather than buying hardware for the highest peak",
          "translation": "ให้ค่า Compute เปลี่ยนตามความต้องการแต่ละฤดูกาล แทนลงทุนซื้อเครื่องเผื่อโหลดสูงสุด"
        },
        {
          "questionId": 43,
          "phrase": "collect server dependencies; track progress of multiple migration tools",
          "translation": "สำรวจว่า Servers ไหนมีการพึ่งพากัน และติดตามสถานะงานย้ายจากหลาย Migration Tools"
        },
        {
          "questionId": 53,
          "phrase": "confidential files; responsibility remains with the customer",
          "translation": "ไฟล์ลับและหน้าที่ด้านการควบคุมสิทธิ์เข้าถึงข้อมูลที่ยังเป็นความรับผิดชอบลูกค้า"
        },
        {
          "questionId": 57,
          "phrase": "legal requirements; within a specific geographic area",
          "translation": "ข้อกำหนดตามกฎหมายให้จัดเก็บข้อมูลอยู่ภายในพื้นที่ภูมิศาสตร์ที่ระบุ จึงพิจารณา AWS Region"
        }
      ]
    },
    "local-set-09": {
      "title": "Local Mock Set 9",
      "note": "20 Nov 2026 · 57/65 correct (87.7%) · 8 wrong + 5 correct flagged · 3 Explain More, 2 English Unclear, 1 Concept/Recall Gap, 0 Clue/Distractor Gap; overlapping flags counted independently. Fixed mixed-domain question shuffle.",
      "items": [
        {
          "questionId": 11,
          "key": "local-set-09:q11",
          "topic": "L02 — AWS IoT Core vs Kinesis Data Streams",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | โจทย์ต้องเชื่อม Devices เข้าสู่ Cloud ด้วยบริการที่ออกแบบสำหรับ IoT จึงเลือก AWS IoT Core; Kinesis Data Streams เหมาะเก็บและกระจาย Streaming Records ให้ Consumers หลังรับข้อมูลแล้ว"
        },
        {
          "questionId": 12,
          "key": "local-set-09:q12",
          "topic": "L01 — Pay-as-you-go vs Capital expenditure",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | จ่ายเฉพาะ Cloud Resources ที่ใช้จริง = Pay-as-you-go ส่วน Capital expenditure คือเงินลงทุนล่วงหน้าเพื่อซื้อเครื่องหรือสินทรัพย์จริง จึงตรงข้ามกับเงื่อนไขที่บริษัทต้องการ"
        },
        {
          "questionId": 13,
          "key": "local-set-09:q13",
          "topic": "L09 — IAM Identity Center + IAM Access Analyzer vs Cognito",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Select TWO ถามสองหน้าที่: พนักงานเข้า AWS หลาย Accounts ใช้ Identity Center และวิเคราะห์ Resource Policies ที่เปิด Public/Cross-account Access ใช้ Access Analyzer; Cognito จัด Login ให้ผู้ใช้ Web/Mobile Apps"
        },
        {
          "questionId": 15,
          "key": "local-set-09:q15",
          "topic": "L09 — AWS Firewall Manager vs AWS WAF",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Firewall Manager ควบคุมและกระจาย Web ACL/Firewall Policies ในหลาย AWS Accounts จากศูนย์กลาง ขณะที่ AWS WAF เป็นบริการกรอง HTTP Requests ตามกฎ Web ACL"
        },
        {
          "questionId": 20,
          "key": "local-set-09:q20",
          "topic": "L05 — Direct Connect + Transit Gateway vs Site-to-Site VPN",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Direct Connect เป็น Dedicated Network Connection จากองค์กรไป AWS; Transit Gateway เป็น Hub เชื่อมหลาย VPC/Networks; Site-to-Site VPN ส่ง Tunnel ที่เข้ารหัสผ่าน Internet เดิม ไม่ใช่ Dedicated Circuit"
        },
        {
          "questionId": 24,
          "key": "local-set-09:q24",
          "topic": "L03 — AWS Outposts vs AWS Direct Connect",
          "type": "concept",
          "rawFlags": [
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language"
          ],
          "note": "Correct; flagged for review | Outposts นำ AWS Infrastructure/บริการที่รองรับมาติดตั้งในสถานที่ขององค์กร จึงตอบโจทย์โรงงานต้องรันในอาคารเอง ส่วน Direct Connect เป็น Private Network Connection ไป AWS ไม่ได้นำ Hardware AWS ไปติดตั้ง"
        },
        {
          "questionId": 30,
          "key": "local-set-09:q30",
          "topic": "L13 — Cost Optimization + Security Well-Architected Pillars",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | Select TWO มีสองเป้าหมาย: ลด Waste ทางการเงิน = Cost Optimization และทำ Identity/Access Controls ให้รัดกุม = Security; strengthen หมายถึงทำให้เข้มงวดขึ้น"
        },
        {
          "questionId": 31,
          "key": "local-set-09:q31",
          "topic": "L03 — Amazon ECS vs EKS vs AWS Fargate",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | ECS จัด Scheduling/Orchestration ของ Containers แบบ AWS-native ส่วน Fargate เป็น Compute ที่รัน Containers โดยไม่จัดการ EC2 Hosts; EKS เป็น Managed Kubernetes Orchestrator"
        },
        {
          "questionId": 34,
          "key": "local-set-09:q34",
          "topic": "L03 — Elastic Beanstalk vs EC2/Fargate/Batch",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | Elastic Beanstalk ช่วย Deploy Web Application และบริหาร Environment/Scaling/Health; EC2 คือ VM ที่ต้องจัดระบบเพิ่ม ส่วน Fargate เป็น Compute สำหรับ Containers และ Batch ใช้กับ Batch Jobs"
        },
        {
          "questionId": 39,
          "key": "local-set-09:q39",
          "topic": "L02 — AWS CodeBuild + Step Functions vs CodePipeline",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | CodeBuild ทำ Build/Test Source Code; Step Functions Orchestrate Application Workflows ผ่าน State Machines; CodePipeline จัดลำดับ CI/CD Release Stages ไม่ได้เป็น State Machine ของ Application โดยตรง"
        },
        {
          "questionId": 40,
          "key": "local-set-09:q40",
          "topic": "L01 — Fault tolerance vs Durability vs High availability",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Fault tolerance หมายถึง Workload ทำงานต่อเมื่อส่วนประกอบหนึ่งล้มเหลว ขณะที่ Durability เน้นข้อมูลไม่สูญหาย และ High availability เน้นลด Downtime/เพิ่มความพร้อมให้บริการโดยรวม"
        },
        {
          "questionId": 42,
          "key": "local-set-09:q42",
          "topic": "L12 — AWS SCT + AWS DMS vs Application Migration Service",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | AWS SCT แปลง Database Schema/Code เพื่อให้เข้ากับ Target Engine ส่วน DMS ย้ายหรือ Replicate Database Records; Application Migration Service ย้าย Servers/VMs ไม่ได้ทำ Database Schema Conversion"
        },
        {
          "questionId": 62,
          "key": "local-set-09:q62",
          "topic": "L13 — Performance Efficiency vs Operational Excellence",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | Performance Efficiency เน้นเลือกประเภทและขนาดทรัพยากรเพื่อให้ได้ Throughput/Latency ตามเป้าหมาย ส่วน Operational Excellence เน้นวิธี Operate/Improve Workloads เช่น Runbooks และ Release Processes"
        }
      ],
      "details": [
        {
          "questionId": 11,
          "result": "Correct",
          "topic": "L02 — AWS IoT Core vs Kinesis Data Streams",
          "question": "A manufacturer connects devices that continuously send telemetry to the cloud using an IoT-specific managed service. Which service should it consider?",
          "questionTh": "ผู้ผลิตเชื่อม Devices ที่ส่ง Telemetry ขึ้น Cloud ต่อเนื่อง โดยต้องการ Managed Service เฉพาะงาน IoT ใช้บริการใด",
          "selected": "AWS IoT Core",
          "correct": "AWS IoT Core",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงว่าต้องการคำอธิบายเพิ่มหรือยังไม่มั่นใจ",
          "memoryCue": "IoT-specific managed service / devices continuously send telemetry → AWS IoT Core; streaming records and consumers → Kinesis Data Streams",
          "notes": [
            "โจทย์ต้องเชื่อม Devices เข้าสู่ Cloud ด้วยบริการที่ออกแบบสำหรับ IoT จึงเลือก AWS IoT Core; Kinesis Data Streams เหมาะเก็บและกระจาย Streaming Records ให้ Consumers หลังรับข้อมูลแล้ว",
            "A. AWS IoT Core — เชื่อม IoT Devices กับ AWS และรับส่ง Messages ผ่าน IoT Protocols เช่น MQTT [คำตอบที่ถูก]",
            "B. Amazon Kinesis Data Streams — รับ Streaming Records ต่อเนื่องโดย Consumers อ่านตาม Shards/Retention ได้",
            "C. Amazon SNS — Publish/Subscribe และ Fan-out Notifications ไปหลาย Subscribers",
            "D. Amazon SES — บริการส่งอีเมล Transactional/Bulk จาก Applications"
          ]
        },
        {
          "questionId": 12,
          "result": "Wrong",
          "topic": "L01 — Pay-as-you-go vs Capital expenditure",
          "question": "A company wants to avoid owning equipment and instead pay only for the cloud resources it actually consumes. Which financial cloud benefit is emphasized?",
          "questionTh": "บริษัทไม่อยากเป็นเจ้าของ Hardware และอยากจ่ายตาม Cloud Resources ที่ใช้จริง ประโยชน์ด้านการเงินใดตรงที่สุด",
          "selected": "Capital expenditure",
          "correct": "Pay-as-you-go",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตรง Requirement ของข้อสอบ; ยังไม่มีข้อมูลว่าผู้สอบใช้เหตุผลใดขณะเลือก",
          "memoryCue": "avoid owning equipment + pay only for actual consumption → Pay-as-you-go; buy servers upfront → Capital expenditure",
          "notes": [
            "จ่ายเฉพาะ Cloud Resources ที่ใช้จริง = Pay-as-you-go ส่วน Capital expenditure คือเงินลงทุนล่วงหน้าเพื่อซื้อเครื่องหรือสินทรัพย์จริง จึงตรงข้ามกับเงื่อนไขที่บริษัทต้องการ",
            "A. Economies of scale — Cloud Provider ดำเนินงาน/จัดซื้อขนาดใหญ่จนต้นทุนต่อหน่วยลดลง",
            "B. Capital expenditure — ลงทุนซื้อสินทรัพย์หรือ Hardware ล่วงหน้า เช่น Physical Servers",
            "C. Pay-as-you-go — จ่ายตามปริมาณการใช้ Cloud โดยไม่ต้องซื้อ Physical Hardware ล่วงหน้า [คำตอบที่ถูก]",
            "D. High availability — ออกแบบให้ Service พร้อมใช้งานและ Downtime ต่ำ เช่น Multi-AZ Failover"
          ]
        },
        {
          "questionId": 13,
          "result": "Wrong",
          "topic": "L09 — IAM Identity Center + IAM Access Analyzer vs Cognito",
          "question": "A security review wants workforce single sign-on and a way to detect public or cross-account resource exposure. Which TWO services match these needs? (Select TWO.)",
          "questionTh": "ทีม Security ต้องการ Workforce Single Sign-on และค้นหา Resources ที่เปิด Public/Cross-account Access สองบริการใดตรง",
          "selected": "Amazon Cognito + IAM Identity Center",
          "correct": "IAM Identity Center + IAM Access Analyzer",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตรง Requirement ของข้อสอบ; ยังไม่มีข้อมูลว่าผู้สอบใช้เหตุผลใดขณะเลือก",
          "memoryCue": "workforce SSO → IAM Identity Center; public/cross-account resource exposure → IAM Access Analyzer; customer app login → Cognito",
          "notes": [
            "Select TWO ถามสองหน้าที่: พนักงานเข้า AWS หลาย Accounts ใช้ Identity Center และวิเคราะห์ Resource Policies ที่เปิด Public/Cross-account Access ใช้ Access Analyzer; Cognito จัด Login ให้ผู้ใช้ Web/Mobile Apps",
            "A. IAM Identity Center — Workforce SSO ผ่าน Access Portal และ Permission Sets ข้าม AWS Accounts [คำตอบที่ถูก]",
            "B. AWS IAM — กำหนด AWS Identities, Roles, Trust/Permission Policies และ Temporary Access",
            "C. IAM Access Analyzer — วิเคราะห์ Resource Policies เพื่อค้นหาการเปิดสิทธิ์ Public/External/Cross-account [คำตอบที่ถูก]",
            "D. AWS Organizations — รวม/จัด AWS Accounts เป็น OUs ใช้ SCPs และ Consolidated Billing",
            "E. Amazon Cognito — Sign-up/Sign-in สำหรับ Customer หรือ App End Users ผ่าน Web/Mobile Apps"
          ]
        },
        {
          "questionId": 15,
          "result": "Wrong",
          "topic": "L09 — AWS Firewall Manager vs AWS WAF",
          "question": "A security team wants to apply standard web filtering policies across dozens of AWS accounts. Which governance service can centrally manage them?",
          "questionTh": "ทีม Security ต้อง Apply Web Filtering Policies มาตรฐานข้าม AWS Accounts หลายสิบบัญชี บริการใดจัดการส่วนกลาง",
          "selected": "AWS WAF",
          "correct": "AWS Firewall Manager",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตรง Requirement ของข้อสอบ; ยังไม่มีข้อมูลว่าผู้สอบใช้เหตุผลใดขณะเลือก",
          "memoryCue": "centralized web filtering policies across dozens of accounts → Firewall Manager; inspect and block individual HTTP requests → WAF",
          "notes": [
            "Firewall Manager ควบคุมและกระจาย Web ACL/Firewall Policies ในหลาย AWS Accounts จากศูนย์กลาง ขณะที่ AWS WAF เป็นบริการกรอง HTTP Requests ตามกฎ Web ACL",
            "A. AWS WAF — ตรวจ/อนุญาต/บล็อก HTTP(S) Requests ด้วย Web ACL Rules เช่น SQLi/XSS",
            "B. AWS Firewall Manager — ตั้งและบังคับใช้ Security Policies รวมถึง WAF ข้ามหลาย AWS Accounts จากศูนย์กลาง [คำตอบที่ถูก]",
            "C. AWS Shield — บริการป้องกัน DDoS",
            "D. AWS Config — บันทึก Resource Configurations และประเมิน Config Rules/Compliance"
          ]
        },
        {
          "questionId": 20,
          "result": "Wrong",
          "topic": "L05 — Direct Connect + Transit Gateway vs Site-to-Site VPN",
          "question": "A firm wants a dedicated connectivity path from its office to AWS and a central hub for many VPC networks. Which TWO services satisfy those different goals? (Select TWO.)",
          "questionTh": "บริษัทต้องการ Dedicated Connectivity จากสำนักงานสู่ AWS และ Hub สำหรับเชื่อมหลาย VPC Networks สองบริการใดตรงแต่ละหน้าที่",
          "selected": "AWS Transit Gateway + AWS Site-to-Site VPN",
          "correct": "AWS Direct Connect + AWS Transit Gateway",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตรง Requirement ของข้อสอบ; ยังไม่มีข้อมูลว่าผู้สอบใช้เหตุผลใดขณะเลือก",
          "memoryCue": "dedicated connectivity path from office → Direct Connect; central hub for many VPCs → Transit Gateway; encrypted over internet → Site-to-Site VPN",
          "notes": [
            "Direct Connect เป็น Dedicated Network Connection จากองค์กรไป AWS; Transit Gateway เป็น Hub เชื่อมหลาย VPC/Networks; Site-to-Site VPN ส่ง Tunnel ที่เข้ารหัสผ่าน Internet เดิม ไม่ใช่ Dedicated Circuit",
            "A. AWS Direct Connect — Dedicated Network Connection ระหว่าง On-premises กับ AWS ไม่ใช่ VPN ผ่าน Internet [คำตอบที่ถูก]",
            "B. AWS Site-to-Site VPN — สร้าง IPSec Encrypted Tunnel เชื่อม On-premises กับ AWS ผ่าน Internet",
            "C. AWS Transit Gateway — Network Hub เชื่อม VPCs และ On-premises Networks หลายวง [คำตอบที่ถูก]",
            "D. VPC endpoint — เชื่อมจาก VPC ไปบริการ AWS ที่รองรับแบบ Private โดยไม่ผ่าน Internet",
            "E. NAT Gateway — ให้ทรัพยากรใน Private Subnets เริ่ม Outbound Internet Connections"
          ]
        },
        {
          "questionId": 24,
          "result": "Correct",
          "topic": "L03 — AWS Outposts vs AWS Direct Connect",
          "question": "A factory must run supported AWS infrastructure and services inside its own facility to meet low-latency operational needs. Which AWS offering extends AWS infrastructure on premises?",
          "questionTh": "โรงงานต้องรัน AWS Infrastructure และ Services ที่รองรับภายในอาคารของตนเพื่อให้ Latency ต่ำ บริการใดนำ AWS Infrastructure ไปติดตั้ง On-premises",
          "selected": "AWS Outposts",
          "correct": "AWS Outposts",
          "rawFlags": [
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงว่าต้องการคำอธิบายเพิ่มหรือยังไม่มั่นใจ",
          "memoryCue": "AWS infrastructure physically inside own facility → Outposts; network link to AWS Region → Direct Connect",
          "notes": [
            "Outposts นำ AWS Infrastructure/บริการที่รองรับมาติดตั้งในสถานที่ขององค์กร จึงตอบโจทย์โรงงานต้องรันในอาคารเอง ส่วน Direct Connect เป็น Private Network Connection ไป AWS ไม่ได้นำ Hardware AWS ไปติดตั้ง",
            "A. AWS Outposts — บริการนำ AWS Infrastructure/บริการที่รองรับมาติดตั้งภายในสถานที่ขององค์กร [คำตอบที่ถูก]",
            "B. AWS Region — Geographic Area ที่ AWS ให้บริการและมีหลาย Availability Zones",
            "C. AWS Cloud Adoption Framework — กรอบแนวทางเตรียม People, Governance, Platform และอื่น ๆ สำหรับ Cloud Adoption",
            "D. AWS Direct Connect — Dedicated Network Connection ระหว่าง On-premises กับ AWS ไม่ใช่ VPN ผ่าน Internet"
          ]
        },
        {
          "questionId": 30,
          "result": "Correct",
          "topic": "L13 — Cost Optimization + Security Well-Architected Pillars",
          "question": "A board wants to reduce unnecessary spending and strengthen identity controls. Which TWO pillars address these separate goals? (Select TWO.)",
          "questionTh": "คณะกรรมการต้องการลดค่าใช้จ่ายที่ไม่จำเป็นและเพิ่มความเข้มงวดการจัดการ Identity โดยเป็นสองเป้าหมายแยกกัน Pillars ใดเกี่ยวข้อง",
          "selected": "Cost Optimization + Security",
          "correct": "Security + Cost Optimization",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงว่าต้องการคำอธิบายเพิ่มหรือยังไม่มั่นใจ",
          "memoryCue": "reduce unnecessary spending → Cost Optimization; strengthen identity controls → Security",
          "notes": [
            "Select TWO มีสองเป้าหมาย: ลด Waste ทางการเงิน = Cost Optimization และทำ Identity/Access Controls ให้รัดกุม = Security; strengthen หมายถึงทำให้เข้มงวดขึ้น",
            "A. Security — Well-Architected Pillar ด้านการป้องกัน Data/Systems และ Identity Controls [คำตอบที่ถูก]",
            "B. Reliability — Well-Architected Pillar ด้าน Recovery/Availability/Fault Resilience",
            "C. Cost Optimization — Well-Architected Pillar ด้านลด Financial Waste และจัดการต้นทุนให้คุ้มค่า [คำตอบที่ถูก]",
            "D. Sustainability — Well-Architected Pillar ด้านลด Environmental Impact/Energy Use",
            "E. Operational Excellence — Well-Architected Pillar ด้าน Runbooks, Change Processes และปรับปรุง Operations"
          ]
        },
        {
          "questionId": 31,
          "result": "Correct",
          "topic": "L03 — Amazon ECS vs EKS vs AWS Fargate",
          "question": "An organization wants AWS-native container orchestration and serverless compute for its containers. Which TWO services address these different parts? (Select TWO.)",
          "questionTh": "องค์กรต้องการ AWS-native Container Orchestration และ Serverless Compute ให้ Containers สองบริการใดช่วยคนละหน้าที่",
          "selected": "Amazon ECS + AWS Fargate",
          "correct": "Amazon ECS + AWS Fargate",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงว่าต้องการคำอธิบายเพิ่มหรือยังไม่มั่นใจ",
          "memoryCue": "AWS-native container orchestration → Amazon ECS; Kubernetes → Amazon EKS; serverless compute for containers → AWS Fargate",
          "notes": [
            "ECS จัด Scheduling/Orchestration ของ Containers แบบ AWS-native ส่วน Fargate เป็น Compute ที่รัน Containers โดยไม่จัดการ EC2 Hosts; EKS เป็น Managed Kubernetes Orchestrator",
            "A. Amazon ECS — AWS-native Container Orchestration ใช้ Tasks/Services และ Desired Count [คำตอบที่ถูก]",
            "B. Amazon EKS — Managed Kubernetes Control Plane สำหรับ Kubernetes Deployments/Pods",
            "C. AWS Fargate — Serverless Container Compute สำหรับ ECS/EKS โดยไม่ต้องดูแล EC2 Hosts [คำตอบที่ถูก]",
            "D. Amazon EC2 — Virtual Servers ที่ลูกค้าควบคุม Guest OS และ Instance Configuration",
            "E. AWS Batch — จัด Queue/Schedule/Run Batch Computing Jobs"
          ]
        },
        {
          "questionId": 34,
          "result": "Correct",
          "topic": "L03 — Elastic Beanstalk vs EC2/Fargate/Batch",
          "question": "A team wants to deploy a conventional web application while AWS handles much of the environment provisioning, scaling, and health monitoring. Which service helps?",
          "questionTh": "ทีมต้องการ Deploy Web Application แบบเดิม โดย AWS ช่วย Provision Environment, Scaling และ Health Monitoring ใช้บริการใด",
          "selected": "AWS Elastic Beanstalk",
          "correct": "AWS Elastic Beanstalk",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูก แต่ปักธงว่าต้องการคำอธิบายเพิ่มหรือยังไม่มั่นใจ",
          "memoryCue": "conventional web app + environment provisioning + scaling/health monitoring → Elastic Beanstalk",
          "notes": [
            "Elastic Beanstalk ช่วย Deploy Web Application และบริหาร Environment/Scaling/Health; EC2 คือ VM ที่ต้องจัดระบบเพิ่ม ส่วน Fargate เป็น Compute สำหรับ Containers และ Batch ใช้กับ Batch Jobs",
            "A. Amazon EC2 — Virtual Servers ที่ลูกค้าควบคุม Guest OS และ Instance Configuration",
            "B. AWS Elastic Beanstalk — Deploy Conventional Web Applications พร้อม Provision/Manage Application Environment [คำตอบที่ถูก]",
            "C. AWS Batch — จัด Queue/Schedule/Run Batch Computing Jobs",
            "D. AWS Fargate — Serverless Container Compute สำหรับ ECS/EKS โดยไม่ต้องดูแล EC2 Hosts"
          ]
        },
        {
          "questionId": 39,
          "result": "Wrong",
          "topic": "L02 — AWS CodeBuild + Step Functions vs CodePipeline",
          "question": "A development team needs a managed build service to compile and test source code, plus a service that models multi-step application state transitions. Which TWO fit? (Select TWO.)",
          "questionTh": "ทีม Developer ต้องใช้ Managed Build สำหรับ Compile/Test Code และบริการอีกตัวทำ Multi-step Application State Transitions สองบริการใดตอบโจทย์",
          "selected": "AWS CodePipeline + AWS CodeBuild",
          "correct": "AWS CodeBuild + AWS Step Functions",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตรง Requirement ของข้อสอบ; ยังไม่มีข้อมูลว่าผู้สอบใช้เหตุผลใดขณะเลือก",
          "memoryCue": "compile and test source code → CodeBuild; multi-step application state transitions → Step Functions; automate CI/CD release stages → CodePipeline",
          "notes": [
            "CodeBuild ทำ Build/Test Source Code; Step Functions Orchestrate Application Workflows ผ่าน State Machines; CodePipeline จัดลำดับ CI/CD Release Stages ไม่ได้เป็น State Machine ของ Application โดยตรง",
            "A. AWS CodeBuild — Managed Build/Test Jobs สำหรับ Compile, Unit Tests และ Artifacts [คำตอบที่ถูก]",
            "B. AWS CodePipeline — จัด CI/CD Release Pipeline เช่น Source → Build → Deploy",
            "C. AWS Step Functions — Orchestrate Multi-step Workflows ผ่าน State Machines, Retry, Branching [คำตอบที่ถูก]",
            "D. AWS X-Ray — Distributed Tracing เพื่อวิเคราะห์ Requests ข้าม Services",
            "E. Amazon EventBridge — Event Bus ที่ Route Events ตาม Rules/Patterns"
          ]
        },
        {
          "questionId": 40,
          "result": "Wrong",
          "topic": "L01 — Fault tolerance vs Durability vs High availability",
          "question": "A medical service must continue handling requests when one processing node fails unexpectedly. Which characteristic BEST matches this goal?",
          "questionTh": "บริการทางการแพทย์ต้องรับ Requests ต่อได้แม้ Processing Node ตัวหนึ่งหยุดทำงานกะทันหัน คุณสมบัติใดตรงที่สุด",
          "selected": "Durability",
          "correct": "Fault tolerance",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตรง Requirement ของข้อสอบ; ยังไม่มีข้อมูลว่าผู้สอบใช้เหตุผลใดขณะเลือก",
          "memoryCue": "continue processing requests when node fails → Fault tolerance; retain data without loss → Durability; overall service uptime → High availability",
          "notes": [
            "Fault tolerance หมายถึง Workload ทำงานต่อเมื่อส่วนประกอบหนึ่งล้มเหลว ขณะที่ Durability เน้นข้อมูลไม่สูญหาย และ High availability เน้นลด Downtime/เพิ่มความพร้อมให้บริการโดยรวม",
            "A. High availability — ออกแบบให้ Service พร้อมใช้งานและ Downtime ต่ำ เช่น Multi-AZ Failover",
            "B. Fault tolerance — ระบบสามารถทำงานต่อได้เมื่อบาง Component ล้มเหลว [คำตอบที่ถูก]",
            "C. Durability — ความคงอยู่ของข้อมูล ไม่ให้ข้อมูลสูญหาย",
            "D. Pay-as-you-go — จ่ายตามปริมาณการใช้ Cloud โดยไม่ต้องซื้อ Physical Hardware ล่วงหน้า"
          ]
        },
        {
          "questionId": 42,
          "result": "Wrong",
          "topic": "L12 — AWS SCT + AWS DMS vs Application Migration Service",
          "question": "A firm changes database engines and must convert incompatible schema definitions and then migrate records. Which TWO services handle the distinct stages? (Select TWO.)",
          "questionTh": "บริษัทเปลี่ยน Database Engine ต้อง Convert Incompatible Schemas ก่อน แล้วจึงย้าย Records สองบริการใดทำหน้าที่แยกกัน",
          "selected": "AWS SCT + AWS Application Migration Service",
          "correct": "AWS SCT + AWS DMS",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตรง Requirement ของข้อสอบ; ยังไม่มีข้อมูลว่าผู้สอบใช้เหตุผลใดขณะเลือก",
          "memoryCue": "incompatible database schema conversion → AWS SCT; migrate database records → AWS DMS; rehost servers → Application Migration Service",
          "notes": [
            "AWS SCT แปลง Database Schema/Code เพื่อให้เข้ากับ Target Engine ส่วน DMS ย้ายหรือ Replicate Database Records; Application Migration Service ย้าย Servers/VMs ไม่ได้ทำ Database Schema Conversion",
            "A. AWS SCT — Schema Conversion Tool สำหรับแปลง Database Schemas/SQL ระหว่าง Engines [คำตอบที่ถูก]",
            "B. AWS Application Migration Service — Replicate/Rehost Server/VM Workloads ไป AWS",
            "C. AWS DMS — Database Migration Service สำหรับย้าย/Replicate Database Data [คำตอบที่ถูก]",
            "D. AWS Migration Hub — ติดตามสถานะและ Progress ของ Migration Projects/Tools",
            "E. AWS Application Discovery Service — สำรวจ Server Inventory และ Dependencies ก่อน Migration"
          ]
        },
        {
          "questionId": 62,
          "result": "Wrong",
          "topic": "L13 — Performance Efficiency vs Operational Excellence",
          "question": "A company chooses an EC2 instance family based on memory needs so it can reach its throughput target without excess capacity. Which pillar is most relevant?",
          "questionTh": "บริษัทเลือก EC2 Instance Family จาก Memory Requirements เพื่อให้ Throughput ตามเป้าหมายโดยไม่ใช้ Capacity เกินจำเป็น Pillar ใดเด่น",
          "selected": "Operational Excellence",
          "correct": "Performance Efficiency",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือกตัวเลือกที่เกี่ยวข้องแต่ไม่ตรง Requirement ของข้อสอบ; ยังไม่มีข้อมูลว่าผู้สอบใช้เหตุผลใดขณะเลือก",
          "memoryCue": "choose EC2 instance family from memory needs + meet throughput target → Performance Efficiency; runbooks/change process → Operational Excellence",
          "notes": [
            "Performance Efficiency เน้นเลือกประเภทและขนาดทรัพยากรเพื่อให้ได้ Throughput/Latency ตามเป้าหมาย ส่วน Operational Excellence เน้นวิธี Operate/Improve Workloads เช่น Runbooks และ Release Processes",
            "A. Reliability — Well-Architected Pillar ด้าน Recovery/Availability/Fault Resilience",
            "B. Performance Efficiency — Well-Architected Pillar ด้านเลือก Compute/Storage/DB Resources ให้ถึง Performance Goals [คำตอบที่ถูก]",
            "C. Operational Excellence — Well-Architected Pillar ด้าน Runbooks, Change Processes และปรับปรุง Operations",
            "D. Sustainability — Well-Architected Pillar ด้านลด Environmental Impact/Energy Use"
          ]
        }
      ],
      "englishNotes": [
        {
          "questionId": 24,
          "phrase": "run supported AWS infrastructure and services inside its own facility",
          "translation": "รัน AWS Infrastructure และบริการที่รองรับภายในสถานที่ขององค์กรเอง → AWS Outposts; Direct Connect แค่เชื่อม Network"
        },
        {
          "questionId": 30,
          "phrase": "reduce unnecessary spending and strengthen identity controls",
          "translation": "ลดค่าใช้จ่ายที่ไม่จำเป็น (Cost Optimization) และทำ Identity Controls ให้รัดกุมขึ้น (Security) เป็นสองเป้าหมายแยกกัน"
        }
      ]
    },
    "local-set-10": {
      "title": "Local Mock Set 10",
      "note": "23 Nov 2026 · 54/65 correct (83.1%) · 11 wrong + 4 correct flagged · 4 Explain More, 2 English Unclear, 1 Concept / Recall Gap, 0 Clue / Distractor Gap; flags may overlap. Fixed mixed-domain question shuffle.",
      "items": [
        {
          "questionId": 1,
          "key": "local-set-10:q1",
          "topic": "L11 — On-Demand Capacity Reservations vs Reserved Instances / Savings Plans",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ต้องการ Reserve EC2 Capacity ให้พร้อมใน Availability Zone ที่ระบุ โดยไม่ผูกสัญญาส่วนลดระยะยาว จึงใช้ On-Demand Capacity Reservations ไม่ใช่ Reserved Instances ซึ่งโดยทั่วไปเป็น Pricing Benefit จาก Commitment"
        },
        {
          "questionId": 3,
          "key": "local-set-10:q3",
          "topic": "L09 — AWS WAF vs AWS Shield vs AWS Firewall Manager",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ต้อง Block HTTP Requests ที่ตรง Malicious Path Pattern จึงใช้ AWS WAF ตั้ง Web ACL Rules แม้คำว่า Many Requests อาจชวนให้คิด DDoS แต่โจทย์ระบุ Filtering by HTTP Path ไม่ใช่ Network Flooding"
        },
        {
          "questionId": 14,
          "key": "local-set-10:q14",
          "topic": "L04 — Multi-AZ vs Multi-Region deployment",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ถ้า Region ทั้งหมดใช้งานไม่ได้ AZ ทุกแห่งภายใน Region เดียวกันก็อาจได้รับผลกระทบ ดังนั้นต้อง Deploy Workload ใน Region ที่สองเพื่อรองรับ Regional Failure"
        },
        {
          "questionId": 21,
          "key": "local-set-10:q21",
          "topic": "L05 — Network ACL vs Security group",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | Network ACL ตรวจ Subnet Boundary แบบ Stateless และรองรับ Allow/Deny ขณะที่ Security Group ผูกกับ Network Interface และ Stateful คือ Response Traffic ที่อนุญาตกลับมาได้ตาม Connection State"
        },
        {
          "questionId": 26,
          "key": "local-set-10:q26",
          "topic": "L03 — AWS CDK vs CloudFormation vs CloudShell",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Correct; flagged for review | CDK ช่วยนิยาม Infrastructure ด้วย Programming Languages เช่น TypeScript แล้ว Synthesize CloudFormation Template ส่วน CloudFormation ใช้ Deploy/Update Stacks จาก Template และ CloudShell เป็น Browser Terminal"
        },
        {
          "questionId": 33,
          "key": "local-set-10:q33",
          "topic": "L13 — Security + Performance Efficiency vs Operational Excellence",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Wrong | ข้อ Select TWO มีสอง Requirement: ปกป้อง Credentials = Security และรักษา Response Times ตาม Target แม้ Traffic สูง = Performance Efficiency. Operational Excellence เน้นกระบวนการบริหารจัดการระบบ ไม่ใช่ Latency Target"
        },
        {
          "questionId": 35,
          "key": "local-set-10:q35",
          "topic": "L09 — Amazon Detective vs GuardDuty vs Security Hub",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ระบุว่ามี Alert อยู่แล้วและต้อง Investigate Related Entities/Timelines จึงเป็นงานของ Detective ไม่ใช่ GuardDuty ที่เน้น Detect Threats ตั้งแต่แรก"
        },
        {
          "questionId": 38,
          "key": "local-set-10:q38",
          "topic": "L03 — AWS CLI vs AWS CloudShell / Console / CloudFormation",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์เน้น Repeatable Shell Scripts ที่รันบน Workstation ของ Engineer จึงใช้ AWS CLI ซึ่งติดตั้งหรือรันเป็น Command-line Program บนเครื่องได้ ขณะที่ CloudShell เป็น Terminal ภายใน AWS Console"
        },
        {
          "questionId": 40,
          "key": "local-set-10:q40",
          "topic": "L11 — AWS Partner Network vs Support Center / Marketplace / re:Post",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | ต้องค้นหาบริษัท Consulting/Technology Partners ที่เชี่ยวชาญอุตสาหกรรม จึงใช้ AWS Partner Network (APN) ส่วน AWS Support Center มีหน้าที่เปิด AWS Support Cases ไม่ใช่ Partner Directory"
        },
        {
          "questionId": 44,
          "key": "local-set-10:q44",
          "topic": "L06 — AWS Storage Gateway + DataSync vs AWS Backup",
          "type": "confidence",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "note": "Wrong | Select TWO ถามสองงาน: Hybrid File Access ใช้ AWS Storage Gateway ส่วน Managed Data Transfer ใช้ AWS DataSync. AWS Backup จัดการ Backup Policies และ Jobs ไม่ใช่ Hybrid File Interface"
        },
        {
          "questionId": 51,
          "key": "local-set-10:q51",
          "topic": "L09 — AWS IAM Role vs Secrets Manager",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | EC2 Application ไม่ควรฝัง Long-lived Access Keys ใน Code ให้ใช้ IAM Role สำหรับ EC2 เพื่อได้ Temporary Credentials และตั้ง Policy ให้เข้าถึง S3 เท่าที่จำเป็น ส่วน Secrets Manager เหมาะกับ Database Password/API Secrets ไม่ใช่ทางเลือกแรกแทน IAM Role สำหรับ AWS Credentials"
        },
        {
          "questionId": 56,
          "key": "local-set-10:q56",
          "topic": "L09 — IAM Identity Center + AWS IAM Roles — Workforce vs Workloads",
          "type": "language",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "note": "Correct; flagged for review | โจทย์ Select TWO ถามคนละตัวตน Employee ต้องใช้ IAM Identity Center ทำ Workforce SSO ส่วน EC2 Workload ใช้ IAM Role ที่ได้ Temporary Credentials แบบจำกัดสิทธิ์"
        },
        {
          "questionId": 63,
          "key": "local-set-10:q63",
          "topic": "L01 — Variable expense vs Capital expenditure / Pay-as-you-go",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | โจทย์ถาม Expense Category ของบิลที่ขึ้นลงตาม Actual Compute Usage ซึ่งเป็น Variable expense ไม่ใช่ Capital expenditure ที่ซื้อ Server Assets ล่วงหน้า แม้เป็น Cloud เหมือนกันก็ต้องดูว่าถามประเภทต้นทุนหรือวิธีคิดเงิน"
        },
        {
          "questionId": 64,
          "key": "local-set-10:q64",
          "topic": "L05 — Internet Gateway + NAT Gateway vs VPC endpoint",
          "type": "concept",
          "rawFlags": [
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language"
          ],
          "note": "Correct; flagged for review | โจทย์ Select TWO แบ่งเส้นทาง Internet เป็น Public Subnet (ใช้ IGW) และ Private Subnet Outbound (NAT Gateway โดยมี IGW สำหรับทางออก Internet ใน Typical Setup) ส่วน VPC Endpoint ใช้เข้า Supported AWS Services โดยไม่ผ่าน Public Internet"
        },
        {
          "questionId": 65,
          "key": "local-set-10:q65",
          "topic": "L12 — Rehost vs Replatform vs Refactor vs Retain",
          "type": "review",
          "rawFlags": [],
          "reviewedCauses": [],
          "note": "Wrong | การ Copy VM-based App ไป EC2 และแทบไม่เปลี่ยน Code เป็น Lift-and-shift หรือ Rehost. Replatform ต้องมีการปรับ Platform บางส่วน เช่นเปลี่ยน Engine/Service โดยไม่เปลี่ยน Architecture มาก"
        }
      ],
      "details": [
        {
          "questionId": 1,
          "result": "Wrong",
          "topic": "L11 — On-Demand Capacity Reservations vs Reserved Instances / Savings Plans",
          "question": "An enterprise must reserve instance availability in a particular AZ for a future production launch but does not want to lock into an instance-discount commitment. Which option fits?",
          "questionTh": "องค์กรต้องสำรอง Instance Availability ใน AZ ที่กำหนดสำหรับวัน Launch แต่ไม่ต้องการ Instance-discount Commitment ควรใช้ตัวเลือกใด",
          "selected": "Reserved Instances",
          "correct": "On-Demand Capacity Reservations",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Option ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดขณะเลือกจริงยังไม่ทราบ",
          "memoryCue": "capacity available in a particular AZ + no discount commitment → On-Demand Capacity Reservations; long-term price discount → Reserved Instances / Savings Plans",
          "notes": [
            "โจทย์ต้องการ Reserve EC2 Capacity ให้พร้อมใน Availability Zone ที่ระบุ โดยไม่ผูกสัญญาส่วนลดระยะยาว จึงใช้ On-Demand Capacity Reservations ไม่ใช่ Reserved Instances ซึ่งโดยทั่วไปเป็น Pricing Benefit จาก Commitment",
            "A. On-Demand Capacity Reservations — จอง Capacity ของ Instance Type ใน AZ ที่ระบุให้พร้อมเปิดใช้งาน ไม่จำเป็นต้องทำ Discount Commitment [คำตอบที่ถูก]",
            "B. Savings Plans — ส่วนลดจาก Commit ค่า Compute เป็นจำนวนเงินต่อชั่วโมง 1 หรือ 3 ปี ไม่ใช่ตัวจอง EC2 Capacity",
            "C. Spot Instances — ใช้ Spare EC2 Capacity ราคาประหยัด แต่ AWS อาจ Reclaim/Interrupt ได้ ไม่เหมาะรับประกัน Capacity สำหรับ Launch",
            "D. Reserved Instances — ซื้อสิทธิ์รับส่วนลดค่า EC2 ตามเงื่อนไขการใช้งานและระยะเวลา บางชนิดมีคุณสมบัติ Capacity Reservation แต่โจทย์ระบุว่าไม่ต้องการ Commitment"
          ]
        },
        {
          "questionId": 3,
          "result": "Wrong",
          "topic": "L09 — AWS WAF vs AWS Shield vs AWS Firewall Manager",
          "question": "A public API has many unwanted requests matching a specific malicious HTTP path pattern. Which protection should the team configure?",
          "questionTh": "Public API มี Requests ที่ตรงกับ Malicious HTTP Path Pattern จำนวนมาก ทีมควรกำหนดการป้องกันผ่านบริการใด",
          "selected": "AWS Shield",
          "correct": "AWS WAF",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Option ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดขณะเลือกจริงยังไม่ทราบ",
          "memoryCue": "malicious HTTP path / URL pattern / web ACL rule → AWS WAF; volumetric network DDoS → AWS Shield; policies across accounts → Firewall Manager",
          "notes": [
            "ต้อง Block HTTP Requests ที่ตรง Malicious Path Pattern จึงใช้ AWS WAF ตั้ง Web ACL Rules แม้คำว่า Many Requests อาจชวนให้คิด DDoS แต่โจทย์ระบุ Filtering by HTTP Path ไม่ใช่ Network Flooding",
            "A. AWS Shield — ป้องกันการโจมตี DDoS โดยเฉพาะ Network/Transport Flooding ไม่ใช่ตัวหลักสำหรับ Match Malicious URL Path",
            "B. AWS WAF — ตรวจและบล็อก HTTP(S) Requests ตาม Path, Headers หรือ Rule Patterns ผ่าน Web ACL [คำตอบที่ถูก]",
            "C. Amazon GuardDuty — ตรวจจับ Threat Indicators จากกิจกรรมและสัญญาณต่าง ๆ ไม่ใช่ Inline HTTP Rule Filter",
            "D. AWS Firewall Manager — บริหาร WAF และ Security Policies จากส่วนกลางข้าม AWS Accounts ไม่ใช่ตัวกรอง HTTP Request รายตัว"
          ]
        },
        {
          "questionId": 14,
          "result": "Wrong",
          "topic": "L04 — Multi-AZ vs Multi-Region deployment",
          "question": "A business runs production in one Region and needs to withstand loss of an entire Region. Which placement strategy addresses this larger failure scope?",
          "questionTh": "บริษัทเปิด Production ใน Region เดียว แต่ต้องการรับมือเมื่อ Region ทั้งหมดใช้ไม่ได้ ควรวาง Workloads อย่างไร",
          "selected": "Multi-AZ deployment",
          "correct": "Multi-Region deployment",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Option ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดขณะเลือกจริงยังไม่ทราบ",
          "memoryCue": "entire Region outage → Multi-Region; one AZ failure → Multi-AZ; data residency geography → Region",
          "notes": [
            "ถ้า Region ทั้งหมดใช้งานไม่ได้ AZ ทุกแห่งภายใน Region เดียวกันก็อาจได้รับผลกระทบ ดังนั้นต้อง Deploy Workload ใน Region ที่สองเพื่อรองรับ Regional Failure",
            "A. Multi-AZ deployment — กระจายระบบข้าม Availability Zones ภายใน Region เดียว ลดผลกระทบจาก AZ Failure ไม่ป้องกัน Region Outage ทั้งหมด",
            "B. Multi-Region deployment — กระจาย Production/Disaster Recovery ข้าม AWS Regions เพื่อรับมือ Regional Failure [คำตอบที่ถูก]",
            "C. Edge location — จุด Cache/Content Delivery ใกล้ผู้ใช้สำหรับ CDN ไม่ใช่ตำแหน่งสำรองระบบ Production เต็มรูปแบบ",
            "D. Availability Zone — หน่วยโครงสร้างพื้นฐานที่แยกกันภายใน Region เดียว ไม่ได้หมายถึงข้าม Region"
          ]
        },
        {
          "questionId": 21,
          "result": "Correct",
          "topic": "L05 — Network ACL vs Security group",
          "question": "A network engineer wants stateless rules applied to an entire VPC subnet rather than to individual instances. Which security control fits?",
          "questionTh": "Network Engineer ต้องการ Stateless Rules ครอบคลุมทั้ง VPC Subnet แทนควบคุมเฉพาะ Instances ควรใช้สิ่งใด",
          "selected": "Network ACL",
          "correct": "Network ACL",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูกแต่ปักธงว่าอยากทบทวนการแยกตัวเลือกหรือภาษาอังกฤษเพิ่มเติม",
          "memoryCue": "stateless rules + entire subnet → Network ACL; stateful + ENI/instance → Security group",
          "notes": [
            "Network ACL ตรวจ Subnet Boundary แบบ Stateless และรองรับ Allow/Deny ขณะที่ Security Group ผูกกับ Network Interface และ Stateful คือ Response Traffic ที่อนุญาตกลับมาได้ตาม Connection State",
            "A. Security group — Stateful Firewall ที่ ENI/Instance รองรับ Allow Rules ไม่ใช่ NACL ระดับ Subnet",
            "B. Network ACL — Firewall ระดับ Subnet แบบ Stateless แยก Inbound/Outbound Rules และรองรับ Explicit Deny [คำตอบที่ถูก]",
            "C. AWS WAF — กรอง HTTP/HTTPS Requests ที่ระดับ Application ไม่ใช่ Firewall แบบ Stateless ครอบ Subnet",
            "D. AWS Shield — DDoS Protection ไม่ใช่ Subnet Firewall"
          ]
        },
        {
          "questionId": 26,
          "result": "Correct",
          "topic": "L03 — AWS CDK vs CloudFormation vs CloudShell",
          "question": "A development team wants to define AWS infrastructure in TypeScript and have the resulting CloudFormation templates generated for deployment. Which tool fits?",
          "questionTh": "ทีม Developer ต้องการนิยาม AWS Infrastructure ด้วย TypeScript และให้ Generate CloudFormation Templates สำหรับ Deploy ใช้เครื่องมือใด",
          "selected": "AWS CDK",
          "correct": "AWS CDK",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "ตอบถูกแต่ปักธงว่าอยากทบทวนการแยกตัวเลือกหรือภาษาอังกฤษเพิ่มเติม",
          "memoryCue": "TypeScript/Python constructs + synthesize templates → CDK; JSON/YAML infrastructure stacks → CloudFormation; browser terminal → CloudShell",
          "notes": [
            "CDK ช่วยนิยาม Infrastructure ด้วย Programming Languages เช่น TypeScript แล้ว Synthesize CloudFormation Template ส่วน CloudFormation ใช้ Deploy/Update Stacks จาก Template และ CloudShell เป็น Browser Terminal",
            "A. AWS CDK — นิยาม Infrastructure เป็น Code ด้วย TypeScript/Python แล้วสร้าง CloudFormation Templates [คำตอบที่ถูก]",
            "B. AWS CloudFormation — Infrastructure-as-Code Engine ใช้ JSON/YAML Templates เพื่อสร้างและจัดการ AWS Resource Stacks",
            "C. AWS CloudShell — Shell ใน AWS Console ผ่าน Browser ที่มีเครื่องมือ CLI พร้อมใช้ ไม่ใช่ Framework สำหรับเขียน Infrastructure Definitions",
            "D. AWS Config — ตรวจ/ติดตาม Resource Configurations และ Rules/Compliance ไม่ใช่ IaC Tool"
          ]
        },
        {
          "questionId": 33,
          "result": "Wrong",
          "topic": "L13 — Security + Performance Efficiency vs Operational Excellence",
          "question": "A business wants to protect user credentials and achieve predictable response times during heavy traffic. Which TWO Well-Architected pillars are directly targeted? (Select TWO.)",
          "questionTh": "ธุรกิจต้องการปกป้อง User Credentials และทำให้ Response Times เป็นไปตามเป้าหมายแม้ Traffic สูง Pillars สองข้อใดตรง",
          "selected": "Security + Operational Excellence",
          "correct": "Security + Performance Efficiency",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "เลือก Option ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดขณะเลือกจริงยังไม่ทราบ",
          "memoryCue": "protect user credentials → Security; predictable response time / latency under heavy traffic → Performance Efficiency; runbooks / procedures → Operational Excellence",
          "notes": [
            "ข้อ Select TWO มีสอง Requirement: ปกป้อง Credentials = Security และรักษา Response Times ตาม Target แม้ Traffic สูง = Performance Efficiency. Operational Excellence เน้นกระบวนการบริหารจัดการระบบ ไม่ใช่ Latency Target",
            "A. Security — Pillar ปกป้อง Systems/Information เช่น Credentials, Least Privilege, Encryption [คำตอบที่ถูก]",
            "B. Reliability — Pillar ด้าน Fault Recovery, Availability และ Resilience ไม่ใช่ Performance Target โดยตรง",
            "C. Performance Efficiency — Pillar เลือก/ปรับทรัพยากรให้รองรับ Latency, Throughput และ Response Time Targets เมื่อ Demand เปลี่ยน [คำตอบที่ถูก]",
            "D. Operational Excellence — Pillar ด้าน Operations, Runbooks, Change Management และ Continuous Improvement ไม่ได้เน้น Response Time",
            "E. Cost Optimization — Pillar ด้านลดต้นทุนส่วนเกินและปรับความคุ้มค่า ไม่ใช่ Target ในโจทย์"
          ]
        },
        {
          "questionId": 35,
          "result": "Wrong",
          "topic": "L09 — Amazon Detective vs GuardDuty vs Security Hub",
          "question": "A security team has an alert and wants to explore related entities, timelines, and activity to investigate its cause. Which service supports investigation?",
          "questionTh": "ทีม Security มี Alert แล้วต้องการสำรวจ Related Entities Timelines และ Activities เพื่อสืบสวนสาเหตุ ใช้บริการใด",
          "selected": "Amazon GuardDuty",
          "correct": "Amazon Detective",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Option ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดขณะเลือกจริงยังไม่ทราบ",
          "memoryCue": "existing alert + investigate entities / relationships / timelines → Detective; detect suspicious activity → GuardDuty; collect findings → Security Hub",
          "notes": [
            "โจทย์ระบุว่ามี Alert อยู่แล้วและต้อง Investigate Related Entities/Timelines จึงเป็นงานของ Detective ไม่ใช่ GuardDuty ที่เน้น Detect Threats ตั้งแต่แรก",
            "A. AWS Security Hub — Aggregate/Summarize Security Findings จาก Security Products ต่าง ๆ ไม่ใช่ตัวหลักในการสืบสวน Relationship Graph",
            "B. Amazon GuardDuty — Threat Detection เพื่อแจ้ง Suspicious/Compromised Activity เป็น Finding ก่อนขั้นสืบสวน",
            "C. Amazon Detective — Investigate Security Findings และความเชื่อมโยงของ Entities/Activities เพื่อช่วยหาสาเหตุ [คำตอบที่ถูก]",
            "D. Amazon Macie — ค้นหา/จัดประเภท Sensitive Data ใน S3 ไม่ใช่ Incident Investigation"
          ]
        },
        {
          "questionId": 38,
          "result": "Wrong",
          "topic": "L03 — AWS CLI vs AWS CloudShell / Console / CloudFormation",
          "question": "An engineer wants to manage AWS services from repeatable shell scripts running on a workstation, without clicking through web pages. Which tool provides the AWS commands?",
          "questionTh": "Engineer ต้อง Manage AWS Services จาก Shell Scripts ที่รันบน Workstation ซ้ำได้ โดยไม่คลิกหน้า Web ควรใช้เครื่องมือใด",
          "selected": "AWS CloudShell",
          "correct": "AWS CLI",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Option ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดขณะเลือกจริงยังไม่ทราบ",
          "memoryCue": "shell scripts on a workstation / automate aws commands locally → AWS CLI; browser-based preconfigured shell → AWS CloudShell",
          "notes": [
            "โจทย์เน้น Repeatable Shell Scripts ที่รันบน Workstation ของ Engineer จึงใช้ AWS CLI ซึ่งติดตั้งหรือรันเป็น Command-line Program บนเครื่องได้ ขณะที่ CloudShell เป็น Terminal ภายใน AWS Console",
            "A. AWS CLI — Command-line Interface สำหรับเรียก AWS Services จาก Local Workstation/Server/Automation Scripts [คำตอบที่ถูก]",
            "B. AWS Management Console — Graphical Interface บน Web Browser สำหรับ Click/Configure ไม่ใช่ Automation Script Tool",
            "C. AWS CloudFormation — Declarative IaC Templates/Stacks สำหรับจัดการ Infrastructure ไม่ใช่ตัวเลือกคำสั่ง AWS CLI ของ Shell Script ทั่วไป",
            "D. AWS CloudShell — Browser-based Terminal ภายใน AWS Console มี AWS CLI ให้ใช้ แต่ไม่ใช่เครื่องมือ Shell ที่รันบน Workstation ตามโจทย์"
          ]
        },
        {
          "questionId": 40,
          "result": "Wrong",
          "topic": "L11 — AWS Partner Network vs Support Center / Marketplace / re:Post",
          "question": "An enterprise wants help from an AWS consulting and technology partner with specialized industry experience. Which program helps locate such partners?",
          "questionTh": "องค์กรต้องการ Consulting/Technology Partner ของ AWS ที่มีความเชี่ยวชาญในอุตสาหกรรม ควรใช้โปรแกรมใดค้นหา",
          "selected": "AWS Support Center",
          "correct": "AWS Partner Network",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Option ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดขณะเลือกจริงยังไม่ทราบ",
          "memoryCue": "find consulting / technology partner with industry experience → AWS Partner Network; support cases → Support Center; buy software → Marketplace",
          "notes": [
            "ต้องค้นหาบริษัท Consulting/Technology Partners ที่เชี่ยวชาญอุตสาหกรรม จึงใช้ AWS Partner Network (APN) ส่วน AWS Support Center มีหน้าที่เปิด AWS Support Cases ไม่ใช่ Partner Directory",
            "A. AWS Partner Network — เครือข่าย AWS Partners พร้อมช่องทางค้นหาผู้เชี่ยวชาญ Consulting/Technology และ Industry Solutions [คำตอบที่ถูก]",
            "B. AWS Marketplace — Catalog สำหรับเลือกซื้อ Third-party Products/Software และ Offerings ที่เกี่ยวข้อง",
            "C. AWS Support Center — Portal เปิด/ติดตาม AWS Support Cases ตาม Support Plan",
            "D. AWS re:Post — Public Community Question-and-answer Forum สำหรับความรู้และปัญหา AWS"
          ]
        },
        {
          "questionId": 44,
          "result": "Wrong",
          "topic": "L06 — AWS Storage Gateway + DataSync vs AWS Backup",
          "question": "An on-premises team wants hybrid access to cloud-backed files and a managed service to move large data sets between existing storage systems. Which TWO AWS services fit? (Select TWO.)",
          "questionTh": "ทีม On-premises ต้องใช้ Hybrid Access กับ Cloud-backed Files และ Managed Service สำหรับโอนข้อมูลขนาดใหญ่ระหว่าง Storage Systems สองบริการใดตรง",
          "selected": "AWS Backup + AWS DataSync",
          "correct": "AWS Storage Gateway + AWS DataSync",
          "rawFlags": [
            "🟡 Explain More"
          ],
          "reviewedCauses": [
            "confidence"
          ],
          "diagnosis": "เลือก Option ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดขณะเลือกจริงยังไม่ทราบ",
          "memoryCue": "hybrid access to cloud-backed files from on-premises → Storage Gateway; transfer/sync large data sets → DataSync; schedule/retain backups → AWS Backup",
          "notes": [
            "Select TWO ถามสองงาน: Hybrid File Access ใช้ AWS Storage Gateway ส่วน Managed Data Transfer ใช้ AWS DataSync. AWS Backup จัดการ Backup Policies และ Jobs ไม่ใช่ Hybrid File Interface",
            "A. AWS Storage Gateway — Hybrid Storage Gateway ให้ On-premises Applications เข้าถึง Cloud-backed File/Volume/Tape Storage ผ่าน Interface ที่รองรับ [คำตอบที่ถูก]",
            "B. AWS DataSync — Managed Online Transfer/Synchronization ของข้อมูลระหว่าง On-premises/AWS Storage Locations ที่รองรับ [คำตอบที่ถูก]",
            "C. Amazon S3 Intelligent-Tiering — S3 Storage Class ที่ปรับ Storage Access Tiers ตามพฤติกรรมการเรียกข้อมูล ไม่ใช่ Data Transfer Service",
            "D. Amazon EBS — Persistent Block Volume สำหรับ EC2 ไม่ได้เชื่อม On-prem File Access โดยตรง",
            "E. AWS Backup — Centralized Backup Plans, Schedules, Retention Policies สำหรับ AWS Resources/Workloads ที่รองรับ"
          ]
        },
        {
          "questionId": 51,
          "result": "Wrong",
          "topic": "L09 — AWS IAM Role vs Secrets Manager",
          "question": "An EC2 application accesses S3. What should the team use instead of embedding long-lived AWS access keys inside the application?",
          "questionTh": "Application บน EC2 ต้องเข้าถึง S3 ทีมควรใช้ความสามารถใดแทนการฝัง Long-lived AWS Access Keys ใน Code",
          "selected": "AWS Secrets Manager",
          "correct": "AWS IAM",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Option ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดขณะเลือกจริงยังไม่ทราบ",
          "memoryCue": "EC2 needs S3 access without long-lived AWS keys → IAM Role + temporary credentials; store or rotate app/database password → Secrets Manager",
          "notes": [
            "EC2 Application ไม่ควรฝัง Long-lived Access Keys ใน Code ให้ใช้ IAM Role สำหรับ EC2 เพื่อได้ Temporary Credentials และตั้ง Policy ให้เข้าถึง S3 เท่าที่จำเป็น ส่วน Secrets Manager เหมาะกับ Database Password/API Secrets ไม่ใช่ทางเลือกแรกแทน IAM Role สำหรับ AWS Credentials",
            "A. AWS Secrets Manager — จัดเก็บ/Rotate Secrets เช่น Database Passwords/API Keys ที่จำเป็นต่อ App ไม่ใช่กลไกหลักสำหรับ EC2 Role Credentials",
            "B. AWS IAM — IAM Role สำหรับ EC2 Instance Profile ออก Temporary Credentials ที่ SDK/CLI ใช้เข้าถึง S3 ตาม Permissions [คำตอบที่ถูก]",
            "C. AWS Artifact — Portal ดาวน์โหลด Compliance Reports และ Agreements ของ AWS ไม่เกี่ยวกับ EC2 Credentials",
            "D. AWS Organizations — จัด Organization Accounts, OUs, SCPs ไม่ใช่ Issuer ของ EC2 Temporary Credentials"
          ]
        },
        {
          "questionId": 56,
          "result": "Correct",
          "topic": "L09 — IAM Identity Center + AWS IAM Roles — Workforce vs Workloads",
          "question": "A company wants centralized employee account access and tightly scoped temporary permissions for EC2 workloads. Which TWO AWS services or capabilities correspond to these needs? (Select TWO.)",
          "questionTh": "บริษัทต้องการ Centralized Employee Account Access และ Temporary Permissions ที่จำกัดสำหรับ EC2 Workloads สองบริการใดเกี่ยวข้อง",
          "selected": "IAM Identity Center + AWS IAM",
          "correct": "IAM Identity Center + AWS IAM",
          "rawFlags": [
            "📘 English Unclear"
          ],
          "reviewedCauses": [
            "language"
          ],
          "diagnosis": "ตอบถูกแต่ปักธงว่าอยากทบทวนการแยกตัวเลือกหรือภาษาอังกฤษเพิ่มเติม",
          "memoryCue": "employees + centralized SSO → IAM Identity Center; EC2 workload + temporary permissions → AWS IAM Role",
          "notes": [
            "โจทย์ Select TWO ถามคนละตัวตน Employee ต้องใช้ IAM Identity Center ทำ Workforce SSO ส่วน EC2 Workload ใช้ IAM Role ที่ได้ Temporary Credentials แบบจำกัดสิทธิ์",
            "A. IAM Identity Center — Workforce SSO/Permission Sets ให้พนักงานเข้า AWS Accounts ผ่าน Portal กลาง [คำตอบที่ถูก]",
            "B. AWS IAM — IAM Roles/Policies สำหรับ Application และ EC2 Workloads พร้อม Temporary Credentials ผ่าน Role/STS [คำตอบที่ถูก]",
            "C. AWS Organizations — จัด OUs/SCPs/Accounts ไม่ใช่ Workforce SSO Portal",
            "D. Amazon Cognito — Sign-up/Sign-in ของ Web/Mobile App Customers ไม่ใช่ AWS Workforce Portal",
            "E. AWS CloudTrail — Audit History ว่า AWS API Calls เกิดจาก Principal ใดเมื่อไร ไม่ใช่ตัวกำหนด Workforce Login"
          ]
        },
        {
          "questionId": 63,
          "result": "Wrong",
          "topic": "L01 — Variable expense vs Capital expenditure / Pay-as-you-go",
          "question": "A CFO wants to stop buying oversized servers for forecast peaks and pay operational bills that vary by actual compute use. Which expense category results?",
          "questionTh": "CFO จะเลิกซื้อ Servers ขนาดใหญ่รับ Peak ล่วงหน้า แล้วจ่าย Operational Bills ที่เปลี่ยนตาม Compute Usage เป็น Expense Category ใด",
          "selected": "Capital expenditure",
          "correct": "Variable expense",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Option ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดขณะเลือกจริงยังไม่ทราบ",
          "memoryCue": "operational bills vary by actual compute use → Variable expense; upfront server purchase → Capital expenditure; usage-based billing concept → Pay-as-you-go",
          "notes": [
            "โจทย์ถาม Expense Category ของบิลที่ขึ้นลงตาม Actual Compute Usage ซึ่งเป็น Variable expense ไม่ใช่ Capital expenditure ที่ซื้อ Server Assets ล่วงหน้า แม้เป็น Cloud เหมือนกันก็ต้องดูว่าถามประเภทต้นทุนหรือวิธีคิดเงิน",
            "A. Capital expenditure — ค่าใช้จ่ายลงทุนซื้อ Physical Server/Asset ล่วงหน้าเป็นเจ้าของ ไม่ใช่ Operational Bill ที่แปรผันตามการใช้",
            "B. Variable expense — ค่าใช้จ่ายที่เปลี่ยนขึ้นลงตาม Actual Usage เช่น Cloud Compute Hours [คำตอบที่ถูก]",
            "C. Economies of scale — ต้นทุนต่อหน่วยของ Cloud Provider ลดลงจากการดำเนินงานขนาดใหญ่ ไม่ใช่ Expense Category ของผู้ใช้",
            "D. Rightsizing — ปรับขนาด Resource ให้พอดีกับ Workload เพื่อไม่จ่ายส่วนเกิน ไม่ใช่ประเภทค่าใช้จ่าย"
          ]
        },
        {
          "questionId": 64,
          "result": "Correct",
          "topic": "L05 — Internet Gateway + NAT Gateway vs VPC endpoint",
          "question": "A VPC architecture requires an internet route for resources in a public subnet and outbound-only internet access for private subnet instances. Which TWO gateways address the distinct needs? (Select TWO.)",
          "questionTh": "VPC ต้องมี Internet Route ให้ Public Subnet และให้ Private Subnet Instances ออก Internet ได้โดยไม่รับการเชื่อมต่อเข้าโดยตรง Gateways ใดสองตัวทำหน้าที่",
          "selected": "Internet Gateway + NAT Gateway",
          "correct": "Internet Gateway + NAT Gateway",
          "rawFlags": [
            "📘 English Unclear",
            "🧠 Concept / Recall Gap"
          ],
          "reviewedCauses": [
            "concept",
            "language"
          ],
          "diagnosis": "ตอบถูกแต่ปักธงว่าอยากทบทวนการแยกตัวเลือกหรือภาษาอังกฤษเพิ่มเติม",
          "memoryCue": "public subnet internet route → Internet Gateway; private subnet outbound internet → NAT Gateway; private access to AWS service → VPC endpoint",
          "notes": [
            "โจทย์ Select TWO แบ่งเส้นทาง Internet เป็น Public Subnet (ใช้ IGW) และ Private Subnet Outbound (NAT Gateway โดยมี IGW สำหรับทางออก Internet ใน Typical Setup) ส่วน VPC Endpoint ใช้เข้า Supported AWS Services โดยไม่ผ่าน Public Internet",
            "A. Internet Gateway — เชื่อม VPC กับ Internet สำหรับ Public Routing และ Egress ของ NAT Gateway ที่อยู่ Public Subnet [คำตอบที่ถูก]",
            "B. NAT Gateway — ให้ EC2 ใน Private Subnet เริ่ม Outbound Internet Connections โดยไม่เปิด Direct Inbound [คำตอบที่ถูก]",
            "C. VPC endpoint — Private Connection จาก VPC ไปบริการ AWS ที่รองรับ เช่น S3 ไม่ใช่ Public Internet Egress",
            "D. AWS Direct Connect — Dedicated Network Link จาก On-premises ไป AWS ไม่ใช่ Gateway ของ Public/Private Subnets",
            "E. AWS Transit Gateway — Hub เชื่อมหลาย VPCs/On-prem Networks ไม่ใช่ VPC Internet Egress Gateway"
          ]
        },
        {
          "questionId": 65,
          "result": "Wrong",
          "topic": "L12 — Rehost vs Replatform vs Refactor vs Retain",
          "question": "A company copies an existing virtual machine-based application to EC2 and changes almost no application code. Which migration strategy is it using?",
          "questionTh": "บริษัท Copy Application จาก Virtual Machines เดิมขึ้น EC2 และแทบไม่แก้ Code เลย เป็น Migration Strategy ใด",
          "selected": "Replatform",
          "correct": "Rehost",
          "rawFlags": [],
          "reviewedCauses": [],
          "diagnosis": "เลือก Option ที่เกี่ยวข้องแต่ไม่ตรง Requirement หลักตามเฉลย เหตุผลที่ผู้สอบคิดขณะเลือกจริงยังไม่ทราบ",
          "memoryCue": "copy VM to EC2 + almost no code change / lift-and-shift → Rehost; change part of hosting platform → Replatform; redesign architecture → Refactor",
          "notes": [
            "การ Copy VM-based App ไป EC2 และแทบไม่เปลี่ยน Code เป็น Lift-and-shift หรือ Rehost. Replatform ต้องมีการปรับ Platform บางส่วน เช่นเปลี่ยน Engine/Service โดยไม่เปลี่ยน Architecture มาก",
            "A. Replatform — ย้ายขึ้น Cloud พร้อมปรับ Platform บางส่วน เช่นเปลี่ยน Database ไป Managed RDS โดยยังคง Logic หลัก",
            "B. Rehost — Lift-and-shift ย้าย VM/App แบบ As-is หรือเปลี่ยน Code น้อยมาก เช่นย้ายเดิมไป EC2 [คำตอบที่ถูก]",
            "C. Refactor — เปลี่ยน Application Code/Architecture อย่างมากเพื่อ Cloud-native เช่น Monolith → Microservices",
            "D. Retain — เก็บ Workload ไว้ที่เดิมและยังไม่ย้ายในรอบนี้"
          ]
        }
      ],
      "englishNotes": [
        {
          "questionId": 56,
          "phrase": "centralized employee account access and tightly scoped temporary permissions for EC2 workloads",
          "translation": "ต้องการทั้ง Workforce SSO สำหรับพนักงาน และสิทธิ์ชั่วคราวแบบจำกัดสำหรับ EC2 Workloads: ใช้ IAM Identity Center + IAM Roles"
        },
        {
          "questionId": 64,
          "phrase": "an internet route for resources in a public subnet and outbound-only internet access for private subnet instances",
          "translation": "Public Subnet ใช้ Internet Route ผ่าน Internet Gateway ส่วน Private Subnet ออก Internet ผ่าน NAT Gateway โดยไม่เปิดรับ Inbound Direct Connections"
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
    },
    {
      "setId": "local-set-05",
      "label": "Local Mock Set 5 · 16 Nov 2026",
      "score": 54,
      "total": 65,
      "percent": 83,
      "concept": 2,
      "confidence": 4,
      "language": 1,
      "clue": 1
    },
    {
      "setId": "local-set-06",
      "label": "Local Mock Set 6 · 16 Nov 2026",
      "score": 61,
      "total": 65,
      "percent": 94,
      "concept": 3,
      "confidence": 5,
      "language": 6,
      "clue": 1
    },
    {
      "setId": "local-set-07",
      "label": "Local Mock Set 7 · 17 Nov 2026",
      "score": 55,
      "total": 65,
      "percent": 85,
      "concept": 2,
      "confidence": 5,
      "language": 3,
      "clue": 1
    },
    {
      "setId": "local-set-08",
      "label": "Local Mock Set 8 · 18 Nov 2026",
      "score": 56,
      "total": 65,
      "percent": 86,
      "concept": 4,
      "confidence": 5,
      "language": 4,
      "clue": 2
    },
    {
      "setId": "local-set-09",
      "label": "Local Mock Set 9 · 20 Nov 2026",
      "score": 57,
      "total": 65,
      "percent": 88,
      "concept": 1,
      "confidence": 3,
      "language": 2,
      "clue": 0
    },
    {
      "setId": "local-set-10",
      "label": "Local Mock Set 10 · 23 Nov 2026",
      "score": 54,
      "total": 65,
      "percent": 83,
      "concept": 1,
      "confidence": 4,
      "language": 2,
      "clue": 0
    }
  ],
  "topicStatus": [],
  "languageTrend": [],
  "languageFocus": []
};

window.REVIEW_INSIGHTS.sets["local-set-11"] = {
  "title": "Local Mock Set 11",
  "note": "24 Nov 2026 · 54/65 correct (83.1%) · 11 wrong + 18 correct flagged · 9 Explain More, 6 English Unclear, 4 Concept / Recall Gap, 2 Clue / Distractor Gap; flags may overlap.",
  "items": [
    {
      "questionId": 2,
      "key": "local-set-11:q2",
      "topic": "AWS Prescriptive Guidance vs APN",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More",
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "confidence",
        "language"
      ],
      "note": "Correct; flagged for review | AWS Prescriptive Guidance รวบรวม Patterns/Playbooks ด้าน Migration/Modernization ส่วน Partner Network ค้นหาพันธมิตรและ Marketplace ค้นหา Software/Offerings"
    },
    {
      "questionId": 3,
      "key": "local-set-11:q3",
      "topic": "OpenSearch vs CloudWatch / Athena / Quick Sight",
      "type": "concept",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "note": "Correct; flagged for review | OpenSearch Service เป็น Managed Search/Log Analytics Engine สำหรับ Indexed Log Search ส่วน Athena SQL Query บน S3 และ Quick Sight สร้าง BI Dashboards"
    },
    {
      "questionId": 4,
      "key": "local-set-11:q4",
      "topic": "Variable expense vs CapEx",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Variable expense เปลี่ยนตามการใช้ทรัพยากรจริง ต่างจาก CapEx ที่ลงทุนซื้อ Asset ล่วงหน้าและ Fixed expense ที่ไม่แปรตามการใช้ระยะสั้น"
    },
    {
      "questionId": 5,
      "key": "local-set-11:q5",
      "topic": "Reliability — Stop guessing capacity",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Stop guessing capacity เป็น Design Principle ภายใต้ Reliability เพื่อลดการเตรียม Capacity ผิด ส่วน Performance Efficiency เน้นการเลือก/ใช้ทรัพยากรให้ตอบ Performance Requirements"
    },
    {
      "questionId": 7,
      "key": "local-set-11:q7",
      "topic": "Amplify vs Cognito / Beanstalk / API Gateway",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "note": "Correct; flagged for review | Amplify ช่วยสร้าง/Deploy Frontend Web/Mobile Apps และ Integrate Backend Services ส่วน Cognito เป็น Identity Component และ API Gateway เป็น API Front Door"
    },
    {
      "questionId": 9,
      "key": "local-set-11:q9",
      "topic": "Global Accelerator vs Route 53 / CloudFront / ELB",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "note": "Correct; flagged for review | Global Accelerator ใช้ Anycast Static IPs และ AWS Global Network ไปยัง Healthy Regional Endpoints ขณะที่ CloudFront ทำ CDN Caching และ Route 53 เป็น DNS Routing"
    },
    {
      "questionId": 10,
      "key": "local-set-11:q10",
      "topic": "Data transfer out",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "note": "Correct; flagged for review | Data Transfer Out จาก AWS ไป Internet โดยทั่วไปมีค่าใช้จ่ายตามการใช้งาน ส่วน Data Transfer In อาจมีนโยบายราคาแตกต่างและไม่ตอบโจทย์เส้นทาง Outbound นี้"
    },
    {
      "questionId": 15,
      "key": "local-set-11:q15",
      "topic": "S3 Lifecycle vs Intelligent-Tiering",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | S3 Lifecycle Rules ใช้กำหนด Time-based Transition/Expiration ตามอายุ Object ส่วน Intelligent-Tiering เปลี่ยน Tier ตาม Access Patterns ไม่ใช่ Rule ตามอายุที่กำหนดเอง"
    },
    {
      "questionId": 23,
      "key": "local-set-11:q23",
      "topic": "RDS shared responsibility",
      "type": "language",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "note": "Correct; flagged for review | AWS ดูแล Physical Hardware และ Underlying Managed Infrastructure ของ RDS ขณะที่ลูกค้าดูแล Data, Schema และ Access Permissions"
    },
    {
      "questionId": 24,
      "key": "local-set-11:q24",
      "topic": "Firewall Manager vs WAF / Shield",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "note": "Correct; flagged for review | Firewall Manager กระจาย/บังคับใช้ Security Policies ข้าม AWS Accounts ส่วน WAF เป็นบริการกรอง HTTP Requests จริง"
    },
    {
      "questionId": 27,
      "key": "local-set-11:q27",
      "topic": "Consolidated billing and discount sharing",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "note": "Correct; flagged for review | Consolidated Billing อาจรวม Eligible Usage เพื่อ Volume Discounts และแชร์ RI/Savings Plans Benefits ตาม Eligibility/Sharing Settings แต่ Accounts ยังมี IAM/Root Security Boundaries แยกกัน / Consolidated Billing อาจรวม Eligible Usage เพื่อ Volume Discounts และแชร์ RI/Savings Plans Benefits ตาม Eligibility/Sharing Settings แต่ Accounts ยังมี IAM/Root Security Boundaries แยกกัน"
    },
    {
      "questionId": 28,
      "key": "local-set-11:q28",
      "topic": "IAM Identity Center vs Cognito",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | IAM Identity Center ใช้ Workforce SSO และ Permission Sets เพื่อเข้าถึง AWS Accounts ต่างจาก Cognito ที่จัดการ App End Users"
    },
    {
      "questionId": 29,
      "key": "local-set-11:q29",
      "topic": "PrivateLink vs NAT / VPN",
      "type": "concept",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "note": "Correct; flagged for review | PrivateLink ให้ Private Connectivity ถึง Endpoint Services ผ่าน VPC Endpoints โดยไม่ต้องมี Public Internet Routing หรือ NAT Gateway"
    },
    {
      "questionId": 31,
      "key": "local-set-11:q31",
      "topic": "Compute Optimizer vs Pricing Calculator",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Compute Optimizer วิเคราะห์ Utilization/Performance Metrics เพื่อแนะนำ Resource Type/Size ส่วน Cost Explorer แสดง Actual Costs/Trends และ Pricing Calculator ประเมินราคาก่อนใช้"
    },
    {
      "questionId": 33,
      "key": "local-set-11:q33",
      "topic": "EMR vs Glue / Redshift / Athena",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | EMR รองรับ Big Data Frameworks เช่น Spark/Hadoop ใน Managed Clusters ส่วน Athena คือ Serverless SQL Query และ Glue เน้น Data Integration/ETL"
    },
    {
      "questionId": 34,
      "key": "local-set-11:q34",
      "topic": "CloudHSM vs KMS",
      "type": "concept",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "note": "Correct; flagged for review | AWS CloudHSM ให้ Dedicated HSMs ที่ลูกค้าควบคุมสำหรับ Cryptographic Operations ส่วน KMS เน้น Managed Keys และ ACM เน้น TLS Certificates"
    },
    {
      "questionId": 36,
      "key": "local-set-11:q36",
      "topic": "Savings Plans underutilization",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More",
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "confidence",
        "language"
      ],
      "note": "Correct; flagged for review | Savings Plans มี Hourly Spend Commitment ที่ไม่ลดตาม Demand โดยอัตโนมัติ หากซื้อเผื่อ Peak สั้น ๆ Usage ในชั่วโมงปกติอาจไม่ครอบคลุม Commitment"
    },
    {
      "questionId": 37,
      "key": "local-set-11:q37",
      "topic": "Client VPN vs Site-to-Site VPN",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | AWS Client VPN ใช้ Remote Users/Devices เข้า AWS Networks ผ่าน VPN Client ส่วน Site-to-Site VPN เชื่อมเครือข่ายสองฝั่ง และ Direct Connect เป็น Dedicated Link"
    },
    {
      "questionId": 39,
      "key": "local-set-11:q39",
      "topic": "Total Cost of Ownership",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More",
        "🧩 Clue / Distractor Gap"
      ],
      "reviewedCauses": [
        "confidence",
        "clue"
      ],
      "note": "Correct; flagged for review | TCO รวมต้นทุนทั้งหมดของการเป็นเจ้าของระบบทั้ง CapEx, ค่าใช้จ่ายดำเนินงาน, บุคลากรและ Facilities เพื่อประเมิน On-premises เทียบ Cloud"
    },
    {
      "questionId": 41,
      "key": "local-set-11:q41",
      "topic": "Storage Gateway hybrid access",
      "type": "language",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "note": "Correct; flagged for review | Storage Gateway ให้ Hybrid File/Volume/Tape Access ที่เชื่อม AWS Storage ส่วน DataSync เน้น Transfer/Sync ข้อมูล และ Snowball Edge เหมาะกับ Offline Data Transfer/Edge"
    },
    {
      "questionId": 42,
      "key": "local-set-11:q42",
      "topic": "Service Catalog approved products",
      "type": "concept",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "note": "Correct; flagged for review | AWS Service Catalog จัด Approved Products/Portfolios ให้ผู้ใช้ Self-service Provision ตาม Governance โดย CloudFormation เน้นการ Deploy Templates เป็น Infrastructure Stacks"
    },
    {
      "questionId": 44,
      "key": "local-set-11:q44",
      "topic": "AWS compliance vs customer controls",
      "type": "language",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "note": "Correct; flagged for review | AWS Report รับรอง Controls ภายในขอบเขต AWS แต่ไม่รับรอง Application/Configuration ของลูกค้าโดยอัตโนมัติ ลูกค้ายังต้องทำ Controls ที่เกี่ยวข้อง"
    },
    {
      "questionId": 51,
      "key": "local-set-11:q51",
      "topic": "CloudFormation repeatable stacks",
      "type": "confidence",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "note": "Correct; flagged for review | CloudFormation ใช้ Templates นิยามและ Deploy Infrastructure เป็น Stacks ได้ซ้ำหลายครั้ง ไม่ต้องคลิก Resource ทีละรายการ"
    },
    {
      "questionId": 53,
      "key": "local-set-11:q53",
      "topic": "Durability vs fault tolerance",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Durability วัดความคงอยู่ของข้อมูล ไม่ใช่ความพร้อมตอบ Request แบบ High availability หรือความสามารถประมวลผลต่อเมื่อ Node เสียแบบ Fault tolerance"
    },
    {
      "questionId": 54,
      "key": "local-set-11:q54",
      "topic": "Application Discovery Service vs Migration Evaluator",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Application Discovery Service รวบรวม Server Inventory และ Dependencies เพื่อวางแผนย้าย แตกต่างจาก Migration Evaluator ที่เน้นข้อมูลสำหรับ Business Case/TCO"
    },
    {
      "questionId": 56,
      "key": "local-set-11:q56",
      "topic": "IAM role vs KMS",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | ใช้ IAM Role/Instance Profile ให้ EC2 ได้ Temporary Credentials พร้อม S3 Policy ตาม Least Privilege ไม่ใช่ฝัง Static Keys หรือเก็บ Static Keys ใน Secrets Manager"
    },
    {
      "questionId": 57,
      "key": "local-set-11:q57",
      "topic": "Transcribe vs Polly",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Transcribe แปลง Speech-to-Text ส่วน Polly เป็น Text-to-Speech, Comprehend วิเคราะห์ Text และ Textract ดึง Text จากเอกสาร"
    },
    {
      "questionId": 63,
      "key": "local-set-11:q63",
      "topic": "Elastic Disaster Recovery",
      "type": "clue",
      "rawFlags": [
        "🧩 Clue / Distractor Gap"
      ],
      "reviewedCauses": [
        "clue"
      ],
      "note": "Correct; flagged for review | AWS Elastic Disaster Recovery เน้น Continuous Replication เพื่อ Recover Servers เมื่อเกิด Disaster ส่วน Backup เน้น Restore Points และ Application Migration Service เน้นย้าย Workloads"
    },
    {
      "questionId": 64,
      "key": "local-set-11:q64",
      "topic": "Region and data residency",
      "type": "language",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "note": "Correct; flagged for review | เลือก AWS Region ที่สอดคล้องกับข้อกำหนด Data Residency ก่อน เพราะ AZ และ Subnets อยู่ภายใน Region ไม่ใช่ตัวระบุพื้นที่ภูมิศาสตร์หลัก"
    }
  ],
  "details": [
    {
      "questionId": 2,
      "result": "Correct",
      "topic": "AWS Prescriptive Guidance vs APN",
      "question": "An enterprise wants an AWS-authored collection of migration design patterns and step-by-step guidance before choosing a consulting partner. Which resource should it read?",
      "questionTh": "องค์กรต้องการอ่าน AWS-authored Migration Patterns/Guidance ก่อนคัดเลือก Consulting Partner ควรเริ่มจากแหล่งข้อมูลใด",
      "selected": "C. AWS Prescriptive Guidance",
      "correct": "C. AWS Prescriptive Guidance",
      "rawFlags": [
        "🟡 Explain More",
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "confidence",
        "language"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "AWS Prescriptive Guidance รวบรวม Patterns/Playbooks ด้าน Migration/Modernization ส่วน Partner Network ค้นหาพันธมิตรและ Marketplace ค้นหา Software/Offerings",
      "notes": [
        "AWS Prescriptive Guidance รวบรวม Patterns/Playbooks ด้าน Migration/Modernization ส่วน Partner Network ค้นหาพันธมิตรและ Marketplace ค้นหา Software/Offerings",
        "A. AWS Marketplace — ค้นหาและซื้อซอฟต์แวร์/บริการจาก third parties",
        "B. AWS Support Center — เปิดและติดตาม support cases",
        "C. AWS Prescriptive Guidance — AWS Prescriptive Guidance รวบรวม Patterns/Playbooks ด้าน Migration/Modernization ส่วน Partner Network ค้นหาพันธมิตรและ Marketplace ค้นหา Software/Offerings",
        "D. AWS Partner Network — เครือข่ายคู่ค้าของ AWS"
      ]
    },
    {
      "questionId": 3,
      "result": "Correct",
      "topic": "OpenSearch vs CloudWatch / Athena / Quick Sight",
      "question": "A security operations team needs to index and search large volumes of application logs with near-real-time dashboards. Which service is designed for search analytics?",
      "questionTh": "SOC ต้อง Index/Search Application Logs จำนวนมากและทำ Near-real-time Search Dashboards บริการใดเน้น Search Analytics",
      "selected": "C. Amazon OpenSearch Service",
      "correct": "C. Amazon OpenSearch Service",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "OpenSearch Service เป็น Managed Search/Log Analytics Engine สำหรับ Indexed Log Search ส่วน Athena SQL Query บน S3 และ Quick Sight สร้าง BI Dashboards",
      "notes": [
        "OpenSearch Service เป็น Managed Search/Log Analytics Engine สำหรับ Indexed Log Search ส่วน Athena SQL Query บน S3 และ Quick Sight สร้าง BI Dashboards",
        "A. Amazon CloudWatch — เก็บ metrics, logs และสร้าง alarms สำหรับการติดตามระบบ เช่น สร้าง Alarm จาก CPUUtilization หรือ application errors",
        "B. Amazon Quick Sight — business intelligence dashboards",
        "C. Amazon OpenSearch Service — OpenSearch Service เป็น Managed Search/Log Analytics Engine สำหรับ Indexed Log Search ส่วน Athena SQL Query บน S3 และ Quick Sight สร้าง BI Dashboards",
        "D. Amazon Athena — query data ใน S3 ด้วย SQL เช่น ใช้ SQL query logs ที่เก็บใน S3"
      ]
    },
    {
      "questionId": 4,
      "result": "Wrong",
      "topic": "Variable expense vs CapEx",
      "question": "An organization prefers bills that rise and fall with compute usage rather than purchasing fixed peak servers. What cost category does it move toward?",
      "questionTh": "องค์กรอยากให้บิลขึ้นลงตาม Compute Usage แทนการซื้อ Server รองรับ Peak แบบถาวร ค่าใช้จ่ายกำลังเปลี่ยนไปเป็นประเภทใด",
      "selected": "B. Capital expenditure",
      "correct": "D. Variable expense",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ตรงเงื่อนไขหลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Variable expense เปลี่ยนตามการใช้ทรัพยากรจริง ต่างจาก CapEx ที่ลงทุนซื้อ Asset ล่วงหน้าและ Fixed expense ที่ไม่แปรตามการใช้ระยะสั้น",
      "notes": [
        "Variable expense เปลี่ยนตามการใช้ทรัพยากรจริง ต่างจาก CapEx ที่ลงทุนซื้อ Asset ล่วงหน้าและ Fixed expense ที่ไม่แปรตามการใช้ระยะสั้น",
        "A. Fixed expense — รายจ่ายที่ไม่แปรผันตาม Usage ระยะสั้น",
        "B. Capital expenditure — ค่าใช้จ่ายลงทุนล่วงหน้าในสินทรัพย์ เช่น ซื้อ physical servers ก่อนเริ่มใช้งาน",
        "C. Economies of scale — ลดต้นทุนต่อหน่วยจากการใช้ทรัพยากรในปริมาณมาก เช่น AWS กระจายต้นทุนโครงสร้างพื้นฐานให้ลูกค้าจำนวนมาก",
        "D. Variable expense — Variable expense เปลี่ยนตามการใช้ทรัพยากรจริง ต่างจาก CapEx ที่ลงทุนซื้อ Asset ล่วงหน้าและ Fixed expense ที่ไม่แปรตามการใช้ระยะสั้น"
      ]
    },
    {
      "questionId": 5,
      "result": "Wrong",
      "topic": "Reliability — Stop guessing capacity",
      "question": "Which Well-Architected pillar specifically includes the design principle of replacing capacity forecasts with automated adjustment to demand?",
      "questionTh": "หลักการ Well-Architected ที่แนะนำไม่ให้เดา Capacity ล่วงหน้า แต่ปรับตาม Demand อยู่ใน Pillar ใด",
      "selected": "B. Performance Efficiency",
      "correct": "A. Reliability",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ตรงเงื่อนไขหลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Stop guessing capacity เป็น Design Principle ภายใต้ Reliability เพื่อลดการเตรียม Capacity ผิด ส่วน Performance Efficiency เน้นการเลือก/ใช้ทรัพยากรให้ตอบ Performance Requirements",
      "notes": [
        "Stop guessing capacity เป็น Design Principle ภายใต้ Reliability เพื่อลดการเตรียม Capacity ผิด ส่วน Performance Efficiency เน้นการเลือก/ใช้ทรัพยากรให้ตอบ Performance Requirements",
        "A. Reliability — Stop guessing capacity เป็น Design Principle ภายใต้ Reliability เพื่อลดการเตรียม Capacity ผิด ส่วน Performance Efficiency เน้นการเลือก/ใช้ทรัพยากรให้ตอบ Performance Requirements",
        "B. Performance Efficiency — เน้นการใช้ทรัพยากรให้เหมาะกับ workload เช่น เลือก EC2 Instance Type ให้เหมาะกับงาน CPU-intensive เพื่อให้ได้ throughput ตามเป้าหมาย",
        "C. Operational Excellence — เน้นการดำเนินงาน การปรับปรุง และการเรียนรู้ เช่น ทำ post-incident review แล้วปรับ deployment procedure",
        "D. Cost Optimization — เน้นคุณค่าที่ได้รับเทียบค่าใช้จ่าย เช่น ปิด development EC2 ที่ไม่ได้ใช้เพื่อลดค่าใช้จ่าย"
      ]
    },
    {
      "questionId": 7,
      "result": "Correct",
      "topic": "Amplify vs Cognito / Beanstalk / API Gateway",
      "question": "A mobile team wants to publish a hosted frontend and connect authentication and backend features with an AWS-oriented developer workflow. Which service helps build these frontend applications?",
      "questionTh": "ทีม Mobile ต้อง Deploy Frontend และเชื่อม Authentication กับ Backend Features ผ่าน Developer Workflow ของ AWS บริการใดเหมาะ",
      "selected": "C. AWS Amplify",
      "correct": "C. AWS Amplify",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "Amplify ช่วยสร้าง/Deploy Frontend Web/Mobile Apps และ Integrate Backend Services ส่วน Cognito เป็น Identity Component และ API Gateway เป็น API Front Door",
      "notes": [
        "Amplify ช่วยสร้าง/Deploy Frontend Web/Mobile Apps และ Integrate Backend Services ส่วน Cognito เป็น Identity Component และ API Gateway เป็น API Front Door",
        "A. Amazon Cognito — จัดการการลงชื่อเข้าใช้ของลูกค้าใน web/mobile applications",
        "B. AWS Elastic Beanstalk — deploy applications พร้อมจัดการ underlying environment",
        "C. AWS Amplify — Amplify ช่วยสร้าง/Deploy Frontend Web/Mobile Apps และ Integrate Backend Services ส่วน Cognito เป็น Identity Component และ API Gateway เป็น API Front Door",
        "D. Amazon API Gateway — จัดการและเผยแพร่ APIs"
      ]
    },
    {
      "questionId": 9,
      "result": "Correct",
      "topic": "Global Accelerator vs Route 53 / CloudFront / ELB",
      "question": "An application needs a static global entry point that routes users over the AWS global network to healthy regional endpoints. Which service is designed for this?",
      "questionTh": "Application ต้องมี Global Entry Point แบบ Static IP และส่ง Traffic ผ่าน AWS Global Network ไป Regional Endpoints ที่ Healthy ใช้บริการใด",
      "selected": "A. AWS Global Accelerator",
      "correct": "A. AWS Global Accelerator",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "Global Accelerator ใช้ Anycast Static IPs และ AWS Global Network ไปยัง Healthy Regional Endpoints ขณะที่ CloudFront ทำ CDN Caching และ Route 53 เป็น DNS Routing",
      "notes": [
        "Global Accelerator ใช้ Anycast Static IPs และ AWS Global Network ไปยัง Healthy Regional Endpoints ขณะที่ CloudFront ทำ CDN Caching และ Route 53 เป็น DNS Routing",
        "A. AWS Global Accelerator — Global Accelerator ใช้ Anycast Static IPs และ AWS Global Network ไปยัง Healthy Regional Endpoints ขณะที่ CloudFront ทำ CDN Caching และ Route 53 เป็น DNS Routing",
        "B. Amazon Route 53 — DNS และ domain routing รวมถึง health checks เช่น กำหนด DNS record ให้ domain ชี้ไป ALB",
        "C. Amazon CloudFront — content delivery network ที่ใช้ edge locations เช่น cache static assets ใกล้ผู้ใช้",
        "D. Elastic Load Balancing — กระจาย incoming traffic ไปยัง targets เช่น กระจาย HTTP requests ไปหลาย EC2 targets"
      ]
    },
    {
      "questionId": 10,
      "result": "Correct",
      "topic": "Data transfer out",
      "question": "An application will send a large volume of data from its AWS Region to clients on the public internet. Which cost element deserves explicit attention?",
      "questionTh": "Application ส่งข้อมูลปริมาณมากจาก AWS Region ไปยังผู้ใช้งานบน Public Internet ต้องระวัง Cost Element ใดเป็นพิเศษ",
      "selected": "B. Data transfer out",
      "correct": "B. Data transfer out",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "Data Transfer Out จาก AWS ไป Internet โดยทั่วไปมีค่าใช้จ่ายตามการใช้งาน ส่วน Data Transfer In อาจมีนโยบายราคาแตกต่างและไม่ตอบโจทย์เส้นทาง Outbound นี้",
      "notes": [
        "Data Transfer Out จาก AWS ไป Internet โดยทั่วไปมีค่าใช้จ่ายตามการใช้งาน ส่วน Data Transfer In อาจมีนโยบายราคาแตกต่างและไม่ตอบโจทย์เส้นทาง Outbound นี้",
        "A. Cost allocation tags — Cost allocation tags ใช้จัดหมวดค่าใช้จ่าย ไม่ใช่ประเภทค่า Data Transfer",
        "B. Data transfer out — Data Transfer Out จาก AWS ไป Internet โดยทั่วไปมีค่าใช้จ่ายตามการใช้งาน ส่วน Data Transfer In อาจมีนโยบายราคาแตกต่างและไม่ตอบโจทย์เส้นทาง Outbound นี้",
        "C. Consolidated billing — Consolidated billing รวมบิลหลายบัญชี ไม่ใช่การคิดราคาของ Traffic Out",
        "D. Data transfer in — Inbound Data Transfer เข้าสู่ AWS ไม่ใช่ทิศทาง Traffic ที่โจทย์กล่าวถึง"
      ]
    },
    {
      "questionId": 15,
      "result": "Wrong",
      "topic": "S3 Lifecycle vs Intelligent-Tiering",
      "question": "A business reads S3 objects frequently for a month and then moves them to lower-cost storage classes based on each object's age. Which S3 feature automates that time-based transition?",
      "questionTh": "บริษัทอ่าน S3 Objects บ่อยช่วงเดือนแรก จากนั้นต้องย้ายไป Storage Class ราคาถูกตามอายุ Object โดยอัตโนมัติ ใช้ Feature ใด",
      "selected": "A. Amazon S3 Intelligent-Tiering",
      "correct": "D. S3 Lifecycle rules",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ตรงเงื่อนไขหลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "S3 Lifecycle Rules ใช้กำหนด Time-based Transition/Expiration ตามอายุ Object ส่วน Intelligent-Tiering เปลี่ยน Tier ตาม Access Patterns ไม่ใช่ Rule ตามอายุที่กำหนดเอง",
      "notes": [
        "S3 Lifecycle Rules ใช้กำหนด Time-based Transition/Expiration ตามอายุ Object ส่วน Intelligent-Tiering เปลี่ยน Tier ตาม Access Patterns ไม่ใช่ Rule ตามอายุที่กำหนดเอง",
        "A. Amazon S3 Intelligent-Tiering — Intelligent-Tiering ติดตาม Access Patterns เพื่อปรับ Tier ไม่ใช่ Time-based Lifecycle Rule",
        "B. AWS DataSync — DataSync เป็น Data Transfer/Synchronization ไม่ใช่ S3 Lifecycle",
        "C. AWS Backup — AWS Backup เน้น Backup Plans/Retention ของ Workloads ไม่ใช่ S3 Object Transitions",
        "D. S3 Lifecycle rules — S3 Lifecycle Rules ใช้กำหนด Time-based Transition/Expiration ตามอายุ Object ส่วน Intelligent-Tiering เปลี่ยน Tier ตาม Access Patterns ไม่ใช่ Rule ตามอายุที่กำหนดเอง"
      ]
    },
    {
      "questionId": 23,
      "result": "Correct",
      "topic": "RDS shared responsibility",
      "question": "An Amazon RDS user wants to know who replaces malfunctioning physical storage devices beneath the database. Which party owns this activity?",
      "questionTh": "ผู้ใช้ Amazon RDS สงสัยว่าใครเปลี่ยนอุปกรณ์ Storage จริงที่เสียใต้ Managed Database หน้าที่นี้เป็นของใคร",
      "selected": "C. AWS",
      "correct": "C. AWS",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "AWS ดูแล Physical Hardware และ Underlying Managed Infrastructure ของ RDS ขณะที่ลูกค้าดูแล Data, Schema และ Access Permissions",
      "notes": [
        "AWS ดูแล Physical Hardware และ Underlying Managed Infrastructure ของ RDS ขณะที่ลูกค้าดูแล Data, Schema และ Access Permissions",
        "A. AWS Support Center — เปิดและติดตาม support cases",
        "B. The customer — ลูกค้า AWS ผู้ดูแลข้อมูลและสิทธิ์เข้าถึงข้อมูลของตน เช่น ลูกค้ากำหนดสิทธิ์เข้าถึงข้อมูลและ configuration ของตน",
        "C. AWS — AWS ดูแล Physical Hardware และ Underlying Managed Infrastructure ของ RDS ขณะที่ลูกค้าดูแล Data, Schema และ Access Permissions",
        "D. AWS Systems Manager — ช่วยจัดการและปฏิบัติงานกับ AWS Resources แบบรวมศูนย์ เช่น Automation และ Patch"
      ]
    },
    {
      "questionId": 24,
      "result": "Correct",
      "topic": "Firewall Manager vs WAF / Shield",
      "question": "A team wants to apply the same HTTP filtering policy to applications in many member accounts without configuring each Web ACL manually. Which service centrally manages policies?",
      "questionTh": "ทีมต้องใช้ HTTP Filtering Rules เดียวกันกับ Applications ในหลาย AWS Accounts โดยไม่จัดการ Web ACL ทีละบัญชี ใช้บริการใด",
      "selected": "C. AWS Firewall Manager",
      "correct": "C. AWS Firewall Manager",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "Firewall Manager กระจาย/บังคับใช้ Security Policies ข้าม AWS Accounts ส่วน WAF เป็นบริการกรอง HTTP Requests จริง",
      "notes": [
        "Firewall Manager กระจาย/บังคับใช้ Security Policies ข้าม AWS Accounts ส่วน WAF เป็นบริการกรอง HTTP Requests จริง",
        "A. AWS Shield — ป้องกันการโจมตี DDoS เช่น ช่วยป้องกันการโจมตี DDoS",
        "B. AWS Security Hub — รวม findings และสถานะ security จากหลายแหล่ง เช่น รวม security findings จากหลายบริการ",
        "C. AWS Firewall Manager — Firewall Manager กระจาย/บังคับใช้ Security Policies ข้าม AWS Accounts ส่วน WAF เป็นบริการกรอง HTTP Requests จริง",
        "D. AWS WAF — กรอง HTTP(S) requests ตาม web ACL rules เช่น บล็อก HTTP request ที่มีรูปแบบ SQL injection"
      ]
    },
    {
      "questionId": 27,
      "result": "Correct",
      "topic": "Consolidated billing and discount sharing",
      "question": "A company combines billing for member AWS accounts. Which TWO benefits are possible without merging account identities? (Select TWO.)",
      "questionTh": "องค์กรรวม Billing ของ AWS Member Accounts สองประโยชน์ใดทำได้ โดยยังคง Identity Boundaries แยกกัน",
      "selected": "A. Eligible aggregated usage volume discounts, B. Eligible Reserved Instances and Savings Plans discount sharing",
      "correct": "A. Eligible aggregated usage volume discounts, B. Eligible Reserved Instances and Savings Plans discount sharing",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "Consolidated Billing อาจรวม Eligible Usage เพื่อ Volume Discounts และแชร์ RI/Savings Plans Benefits ตาม Eligibility/Sharing Settings แต่ Accounts ยังมี IAM/Root Security Boundaries แยกกัน / Consolidated Billing อาจรวม Eligible Usage เพื่อ Volume Discounts และแชร์ RI/Savings Plans Benefits ตาม Eligibility/Sharing Settings แต่ Accounts ยังมี IAM/Root Security Boundaries แยกกัน",
      "notes": [
        "Consolidated Billing อาจรวม Eligible Usage เพื่อ Volume Discounts และแชร์ RI/Savings Plans Benefits ตาม Eligibility/Sharing Settings แต่ Accounts ยังมี IAM/Root Security Boundaries แยกกัน / Consolidated Billing อาจรวม Eligible Usage เพื่อ Volume Discounts และแชร์ RI/Savings Plans Benefits ตาม Eligibility/Sharing Settings แต่ Accounts ยังมี IAM/Root Security Boundaries แยกกัน",
        "A. Eligible aggregated usage volume discounts — Consolidated Billing อาจรวม Eligible Usage เพื่อ Volume Discounts และแชร์ RI/Savings Plans Benefits ตาม Eligibility/Sharing Settings แต่ Accounts ยังมี IAM/Root Security Boundaries แยกกัน",
        "B. Eligible Reserved Instances and Savings Plans discount sharing — Consolidated Billing อาจรวม Eligible Usage เพื่อ Volume Discounts และแชร์ RI/Savings Plans Benefits ตาม Eligibility/Sharing Settings แต่ Accounts ยังมี IAM/Root Security Boundaries แยกกัน",
        "C. Automatic permission grants across accounts — ผิด: Billing รวมไม่ได้ Grant IAM Permissions ระหว่าง Accounts",
        "D. A single shared security group for all VPCs — ผิด: VPC Security Groups ไม่ถูก Shared โดยการรวมบิล",
        "E. Shared root user credentials for all accounts — ผิด: Root User และ Account Identities ไม่ถูก Merge"
      ]
    },
    {
      "questionId": 28,
      "result": "Wrong",
      "topic": "IAM Identity Center vs Cognito",
      "question": "Employees need one sign-in experience across multiple AWS accounts, while customers use a separate application login. Which identity service is specifically for employees?",
      "questionTh": "พนักงานต้องใช้ Sign-in เดียวข้ามหลาย AWS Accounts ส่วนลูกค้ามี Login ของ App แยกต่างหาก Identity Service ใดใช้กับพนักงาน",
      "selected": "C. Amazon Cognito",
      "correct": "D. IAM Identity Center",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ตรงเงื่อนไขหลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "IAM Identity Center ใช้ Workforce SSO และ Permission Sets เพื่อเข้าถึง AWS Accounts ต่างจาก Cognito ที่จัดการ App End Users",
      "notes": [
        "IAM Identity Center ใช้ Workforce SSO และ Permission Sets เพื่อเข้าถึง AWS Accounts ต่างจาก Cognito ที่จัดการ App End Users",
        "A. AWS IAM — กำหนด identities, roles และสิทธิ์เข้าถึง AWS เช่น กำหนด IAM policy ให้ application อ่าน S3 ได้",
        "B. AWS Organizations — จัดกลุ่มบัญชีและใช้ governance / consolidated billing",
        "C. Amazon Cognito — จัดการการลงชื่อเข้าใช้ของลูกค้าใน web/mobile applications",
        "D. IAM Identity Center — IAM Identity Center ใช้ Workforce SSO และ Permission Sets เพื่อเข้าถึง AWS Accounts ต่างจาก Cognito ที่จัดการ App End Users"
      ]
    },
    {
      "questionId": 29,
      "result": "Correct",
      "topic": "PrivateLink vs NAT / VPN",
      "question": "A private application in a VPC must reach a partner's endpoint service without placing traffic on the public internet. Which AWS connectivity feature enables this model?",
      "questionTh": "Private Application ใน VPC ต้องเข้า Partner Endpoint Service โดยไม่วิ่งผ่าน Public Internet ความสามารถใดรองรับ",
      "selected": "C. AWS PrivateLink",
      "correct": "C. AWS PrivateLink",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "PrivateLink ให้ Private Connectivity ถึง Endpoint Services ผ่าน VPC Endpoints โดยไม่ต้องมี Public Internet Routing หรือ NAT Gateway",
      "notes": [
        "PrivateLink ให้ Private Connectivity ถึง Endpoint Services ผ่าน VPC Endpoints โดยไม่ต้องมี Public Internet Routing หรือ NAT Gateway",
        "A. NAT Gateway — ให้ private subnet เริ่ม outbound connections ไปอินเทอร์เน็ต เช่น ให้ private subnet เริ่ม outbound internet connections",
        "B. Internet Gateway — เชื่อม VPC กับอินเทอร์เน็ตตาม route และ security rules เช่น เปิดเส้นทาง internet สำหรับ VPC ตาม route",
        "C. AWS PrivateLink — PrivateLink ให้ Private Connectivity ถึง Endpoint Services ผ่าน VPC Endpoints โดยไม่ต้องมี Public Internet Routing หรือ NAT Gateway",
        "D. AWS Site-to-Site VPN — เข้ารหัสการเชื่อมต่อเครือข่ายผ่านอินเทอร์เน็ต เช่น สร้าง encrypted tunnel ผ่าน internet"
      ]
    },
    {
      "questionId": 31,
      "result": "Wrong",
      "topic": "Compute Optimizer vs Pricing Calculator",
      "question": "A team wants a recommendation of a smaller EC2 instance family based on historical CPU and memory usage, rather than merely a cost chart. Which service gives this resource recommendation?",
      "questionTh": "ทีมต้องการคำแนะนำปรับ EC2 Instance Family จาก CPU/Memory Metrics ไม่ใช่แค่กราฟค่าใช้จ่าย เครื่องมือใดเหมาะ",
      "selected": "B. AWS Pricing Calculator",
      "correct": "C. AWS Compute Optimizer",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ตรงเงื่อนไขหลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Compute Optimizer วิเคราะห์ Utilization/Performance Metrics เพื่อแนะนำ Resource Type/Size ส่วน Cost Explorer แสดง Actual Costs/Trends และ Pricing Calculator ประเมินราคาก่อนใช้",
      "notes": [
        "Compute Optimizer วิเคราะห์ Utilization/Performance Metrics เพื่อแนะนำ Resource Type/Size ส่วน Cost Explorer แสดง Actual Costs/Trends และ Pricing Calculator ประเมินราคาก่อนใช้",
        "A. AWS Cost Explorer — วิเคราะห์ค่าใช้จ่ายจริงและแนวโน้ม เช่น ดูแนวโน้มค่า EC2 และ S3 ย้อนหลัง",
        "B. AWS Pricing Calculator — ประเมินค่าใช้จ่ายก่อนใช้งาน เช่น ประเมินราคา workload ก่อน deploy",
        "C. AWS Compute Optimizer — Compute Optimizer วิเคราะห์ Utilization/Performance Metrics เพื่อแนะนำ Resource Type/Size ส่วน Cost Explorer แสดง Actual Costs/Trends และ Pricing Calculator ประเมินราคาก่อนใช้",
        "D. AWS Budgets — กำหนด budgets และแจ้งเตือนตาม thresholds เช่น แจ้งเตือนเมื่อค่าใช้จ่ายคาดว่าจะเกินงบ"
      ]
    },
    {
      "questionId": 33,
      "result": "Wrong",
      "topic": "EMR vs Glue / Redshift / Athena",
      "question": "A company runs large-scale Spark jobs on its data lake and wants a managed big-data execution platform. Which AWS service specializes in this?",
      "questionTh": "บริษัทต้องรัน Spark Jobs ขนาดใหญ่กับ Data Lake และอยากได้ Managed Platform สำหรับ Big Data Processing ควรใช้บริการใด",
      "selected": "A. Amazon Redshift",
      "correct": "D. Amazon EMR",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ตรงเงื่อนไขหลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "EMR รองรับ Big Data Frameworks เช่น Spark/Hadoop ใน Managed Clusters ส่วน Athena คือ Serverless SQL Query และ Glue เน้น Data Integration/ETL",
      "notes": [
        "EMR รองรับ Big Data Frameworks เช่น Spark/Hadoop ใน Managed Clusters ส่วน Athena คือ Serverless SQL Query และ Glue เน้น Data Integration/ETL",
        "A. Amazon Redshift — cloud data warehouse สำหรับ analytics",
        "B. Amazon Athena — query data ใน S3 ด้วย SQL เช่น ใช้ SQL query logs ที่เก็บใน S3",
        "C. AWS Glue — serverless data integration และ catalog เช่น สร้าง Data Catalog และทำ ETL",
        "D. Amazon EMR — EMR รองรับ Big Data Frameworks เช่น Spark/Hadoop ใน Managed Clusters ส่วน Athena คือ Serverless SQL Query และ Glue เน้น Data Integration/ETL"
      ]
    },
    {
      "questionId": 34,
      "result": "Correct",
      "topic": "CloudHSM vs KMS",
      "question": "A company has specific regulatory requirements to operate cryptographic keys in dedicated hardware under its control. Which AWS security service is designed for that model?",
      "questionTh": "บริษัทต้องการควบคุม Cryptographic Keys ภายใน Dedicated Hardware Security Modules ตามข้อกำหนดเฉพาะ ใช้บริการใด",
      "selected": "A. AWS CloudHSM",
      "correct": "A. AWS CloudHSM",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "AWS CloudHSM ให้ Dedicated HSMs ที่ลูกค้าควบคุมสำหรับ Cryptographic Operations ส่วน KMS เน้น Managed Keys และ ACM เน้น TLS Certificates",
      "notes": [
        "AWS CloudHSM ให้ Dedicated HSMs ที่ลูกค้าควบคุมสำหรับ Cryptographic Operations ส่วน KMS เน้น Managed Keys และ ACM เน้น TLS Certificates",
        "A. AWS CloudHSM — AWS CloudHSM ให้ Dedicated HSMs ที่ลูกค้าควบคุมสำหรับ Cryptographic Operations ส่วน KMS เน้น Managed Keys และ ACM เน้น TLS Certificates",
        "B. AWS KMS — สร้างและควบคุม encryption keys เช่น ควบคุม encryption key ที่ใช้กับ S3",
        "C. AWS Certificate Manager — ออกและจัดการ TLS certificates ที่รองรับ",
        "D. AWS Secrets Manager — เก็บและหมุนเวียน secrets เช่น database credentials เช่น เก็บและหมุนเวียน database password"
      ]
    },
    {
      "questionId": 36,
      "result": "Correct",
      "topic": "Savings Plans underutilization",
      "question": "A small company commits to Savings Plans spending at the level of a rare monthly product launch spike. What is its most likely cost risk?",
      "questionTh": "บริษัทตั้ง Savings Plans Commitment ตามยอด Compute ที่สูงเฉพาะวัน Launch เดือนละครั้ง ความเสี่ยงด้านค่าใช้จ่ายคืออะไร",
      "selected": "D. Unused hourly commitment during normal periods",
      "correct": "D. Unused hourly commitment during normal periods",
      "rawFlags": [
        "🟡 Explain More",
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "confidence",
        "language"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "Savings Plans มี Hourly Spend Commitment ที่ไม่ลดตาม Demand โดยอัตโนมัติ หากซื้อเผื่อ Peak สั้น ๆ Usage ในชั่วโมงปกติอาจไม่ครอบคลุม Commitment",
      "notes": [
        "Savings Plans มี Hourly Spend Commitment ที่ไม่ลดตาม Demand โดยอัตโนมัติ หากซื้อเผื่อ Peak สั้น ๆ Usage ในชั่วโมงปกติอาจไม่ครอบคลุม Commitment",
        "A. Automatic reduction of commitment as traffic falls — ผิด: Savings Plans ไม่ปรับ Commitment ลดเองทุกชั่วโมงตาม Demand",
        "B. Guaranteed EC2 capacity during launch — ผิด: Savings Plans เป็นส่วนลดจาก Commitment ไม่ใช่การจอง EC2 Capacity",
        "C. Automatic full refund of unused spending — ผิด: ไม่ควรคาดหวังคืนเงินส่วน Commitment ที่ใช้ไม่ครบ",
        "D. Unused hourly commitment during normal periods — Savings Plans มี Hourly Spend Commitment ที่ไม่ลดตาม Demand โดยอัตโนมัติ หากซื้อเผื่อ Peak สั้น ๆ Usage ในชั่วโมงปกติอาจไม่ครอบคลุม Commitment"
      ]
    },
    {
      "questionId": 37,
      "result": "Wrong",
      "topic": "Client VPN vs Site-to-Site VPN",
      "question": "Contractors working remotely need encrypted client connections into a VPC, without a permanent office-to-AWS network link. Which service is tailored to their devices?",
      "questionTh": "Contractors ทำงานระยะไกล ต้องใช้ Client Connections เข้าสู่ VPC แบบเข้ารหัส ไม่ได้เชื่อม Data Center ถาวร ใช้บริการใด",
      "selected": "A. AWS Site-to-Site VPN",
      "correct": "C. AWS Client VPN",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ตรงเงื่อนไขหลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "AWS Client VPN ใช้ Remote Users/Devices เข้า AWS Networks ผ่าน VPN Client ส่วน Site-to-Site VPN เชื่อมเครือข่ายสองฝั่ง และ Direct Connect เป็น Dedicated Link",
      "notes": [
        "AWS Client VPN ใช้ Remote Users/Devices เข้า AWS Networks ผ่าน VPN Client ส่วน Site-to-Site VPN เชื่อมเครือข่ายสองฝั่ง และ Direct Connect เป็น Dedicated Link",
        "A. AWS Site-to-Site VPN — เข้ารหัสการเชื่อมต่อเครือข่ายผ่านอินเทอร์เน็ต เช่น สร้าง encrypted tunnel ผ่าน internet",
        "B. AWS Transit Gateway — เชื่อม VPC และ on-premises networks แบบ hub",
        "C. AWS Client VPN — AWS Client VPN ใช้ Remote Users/Devices เข้า AWS Networks ผ่าน VPN Client ส่วน Site-to-Site VPN เชื่อมเครือข่ายสองฝั่ง และ Direct Connect เป็น Dedicated Link",
        "D. AWS Direct Connect — dedicated private network connection ไป AWS เช่น ใช้ dedicated network connection เชื่อม data center กับ AWS"
      ]
    },
    {
      "questionId": 39,
      "result": "Correct",
      "topic": "Total Cost of Ownership",
      "question": "A finance manager counts power, facilities, hardware depreciation, staff effort, and support contracts when comparing on-premises with cloud. Which framework helps assess the full ownership cost?",
      "questionTh": "Finance รวมค่าไฟ สถานที่ ค่าเสื่อม Hardware บุคลากร และ Support เพื่อเทียบต้นทุน On-premises กับ Cloud แนวคิดการรวมต้นทุนทั้งหมดคืออะไร",
      "selected": "B. Total Cost of Ownership (TCO)",
      "correct": "B. Total Cost of Ownership (TCO)",
      "rawFlags": [
        "🟡 Explain More",
        "🧩 Clue / Distractor Gap"
      ],
      "reviewedCauses": [
        "confidence",
        "clue"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "TCO รวมต้นทุนทั้งหมดของการเป็นเจ้าของระบบทั้ง CapEx, ค่าใช้จ่ายดำเนินงาน, บุคลากรและ Facilities เพื่อประเมิน On-premises เทียบ Cloud",
      "notes": [
        "TCO รวมต้นทุนทั้งหมดของการเป็นเจ้าของระบบทั้ง CapEx, ค่าใช้จ่ายดำเนินงาน, บุคลากรและ Facilities เพื่อประเมิน On-premises เทียบ Cloud",
        "A. Capital expenditure — ค่าใช้จ่ายลงทุนล่วงหน้าในสินทรัพย์ เช่น ซื้อ physical servers ก่อนเริ่มใช้งาน",
        "B. Total Cost of Ownership (TCO) — TCO รวมต้นทุนทั้งหมดของการเป็นเจ้าของระบบทั้ง CapEx, ค่าใช้จ่ายดำเนินงาน, บุคลากรและ Facilities เพื่อประเมิน On-premises เทียบ Cloud",
        "C. Pay-as-you-go — จ่ายตามปริมาณทรัพยากรที่ใช้ เช่น หยุดจ่ายค่า compute เมื่อปิดทรัพยากรที่คิดตามเวลาใช้งาน",
        "D. Economies of scale — ลดต้นทุนต่อหน่วยจากการใช้ทรัพยากรในปริมาณมาก เช่น AWS กระจายต้นทุนโครงสร้างพื้นฐานให้ลูกค้าจำนวนมาก"
      ]
    },
    {
      "questionId": 41,
      "result": "Correct",
      "topic": "Storage Gateway hybrid access",
      "question": "An office requires continuing access to cloud-backed shared files while it migrates other storage. Which hybrid service exposes familiar file interfaces on premises?",
      "questionTh": "สำนักงานต้องใช้ Shared Files ที่มี Cloud Storage เป็น Backend อย่างต่อเนื่องระหว่าง Migration บริการ Hybrid ใดมี File Interfaces ให้ On-premises",
      "selected": "D. AWS Storage Gateway",
      "correct": "D. AWS Storage Gateway",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "Storage Gateway ให้ Hybrid File/Volume/Tape Access ที่เชื่อม AWS Storage ส่วน DataSync เน้น Transfer/Sync ข้อมูล และ Snowball Edge เหมาะกับ Offline Data Transfer/Edge",
      "notes": [
        "Storage Gateway ให้ Hybrid File/Volume/Tape Access ที่เชื่อม AWS Storage ส่วน DataSync เน้น Transfer/Sync ข้อมูล และ Snowball Edge เหมาะกับ Offline Data Transfer/Edge",
        "A. AWS Snowball Edge — ย้ายข้อมูลจำนวนมากแบบ physical device",
        "B. Amazon EFS — shared elastic file system สำหรับ Linux workloads เช่น ให้หลาย Linux EC2 mount file system เดียวกัน",
        "C. AWS DataSync — ย้ายข้อมูลระหว่าง storage locations แบบ online",
        "D. AWS Storage Gateway — Storage Gateway ให้ Hybrid File/Volume/Tape Access ที่เชื่อม AWS Storage ส่วน DataSync เน้น Transfer/Sync ข้อมูล และ Snowball Edge เหมาะกับ Offline Data Transfer/Edge"
      ]
    },
    {
      "questionId": 42,
      "result": "Correct",
      "topic": "Service Catalog approved products",
      "question": "An IT organization wants employees to request only approved infrastructure products from a managed portfolio. Which service provides such controlled self-service?",
      "questionTh": "องค์กร IT อยากให้พนักงานเลือก Provision ได้เฉพาะ Infrastructure Products ที่อนุมัติแล้วใน Portfolio กลาง ใช้บริการใด",
      "selected": "B. AWS Service Catalog",
      "correct": "B. AWS Service Catalog",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "AWS Service Catalog จัด Approved Products/Portfolios ให้ผู้ใช้ Self-service Provision ตาม Governance โดย CloudFormation เน้นการ Deploy Templates เป็น Infrastructure Stacks",
      "notes": [
        "AWS Service Catalog จัด Approved Products/Portfolios ให้ผู้ใช้ Self-service Provision ตาม Governance โดย CloudFormation เน้นการ Deploy Templates เป็น Infrastructure Stacks",
        "A. AWS CloudFormation — สร้างและจัดการ infrastructure จาก templates",
        "B. AWS Service Catalog — AWS Service Catalog จัด Approved Products/Portfolios ให้ผู้ใช้ Self-service Provision ตาม Governance โดย CloudFormation เน้นการ Deploy Templates เป็น Infrastructure Stacks",
        "C. AWS Control Tower — ตั้งค่าและกำกับ multi-account landing zone",
        "D. AWS Systems Manager — ช่วยจัดการและปฏิบัติงานกับ AWS Resources แบบรวมศูนย์ เช่น Automation และ Patch"
      ]
    },
    {
      "questionId": 44,
      "result": "Correct",
      "topic": "AWS compliance vs customer controls",
      "question": "An auditor reviews AWS's SOC report for a cloud service. Which statement correctly describes the customer's own application compliance obligations?",
      "questionTh": "Auditor อ่าน AWS SOC Report ของ Cloud Service แล้ว ข้อความใดอธิบาย Compliance ของ Application ฝั่งลูกค้าได้ถูกต้อง",
      "selected": "B. Customer application controls must still meet applicable requirements",
      "correct": "B. Customer application controls must still meet applicable requirements",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "AWS Report รับรอง Controls ภายในขอบเขต AWS แต่ไม่รับรอง Application/Configuration ของลูกค้าโดยอัตโนมัติ ลูกค้ายังต้องทำ Controls ที่เกี่ยวข้อง",
      "notes": [
        "AWS Report รับรอง Controls ภายในขอบเขต AWS แต่ไม่รับรอง Application/Configuration ของลูกค้าโดยอัตโนมัติ ลูกค้ายังต้องทำ Controls ที่เกี่ยวข้อง",
        "A. An AWS provider report certifies all customer configurations automatically — ผิด: Provider Report ไม่ครอบคลุม Customer Configuration ทุกส่วน",
        "B. Customer application controls must still meet applicable requirements — AWS Report รับรอง Controls ภายในขอบเขต AWS แต่ไม่รับรอง Application/Configuration ของลูกค้าโดยอัตโนมัติ ลูกค้ายังต้องทำ Controls ที่เกี่ยวข้อง",
        "C. A customer support plan replaces the customer's compliance assessment — ผิด: Support Plan ไม่ใช่ใบรับรอง Compliance",
        "D. Any application on AWS is automatically compliant with every industry rule — ผิด: Industry Compliance ยังขึ้นกับ Service Eligibility และ Customer Controls"
      ]
    },
    {
      "questionId": 51,
      "result": "Correct",
      "topic": "CloudFormation repeatable stacks",
      "question": "A new team wants to make an approved AWS environment from the same resource definitions in multiple accounts. Which AWS capability is designed for repeatable stacks?",
      "questionTh": "ทีมใหม่ต้องสร้าง AWS Environments จาก Resource Definitions ชุดเดียวกันในหลาย Accounts แบบทำซ้ำได้ ควรใช้เครื่องมือใด",
      "selected": "A. AWS CloudFormation",
      "correct": "A. AWS CloudFormation",
      "rawFlags": [
        "🟡 Explain More"
      ],
      "reviewedCauses": [
        "confidence"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "CloudFormation ใช้ Templates นิยามและ Deploy Infrastructure เป็น Stacks ได้ซ้ำหลายครั้ง ไม่ต้องคลิก Resource ทีละรายการ",
      "notes": [
        "CloudFormation ใช้ Templates นิยามและ Deploy Infrastructure เป็น Stacks ได้ซ้ำหลายครั้ง ไม่ต้องคลิก Resource ทีละรายการ",
        "A. AWS CloudFormation — CloudFormation ใช้ Templates นิยามและ Deploy Infrastructure เป็น Stacks ได้ซ้ำหลายครั้ง ไม่ต้องคลิก Resource ทีละรายการ",
        "B. AWS CLI — Command-line Interface สำหรับเรียก AWS APIs ผ่านคำสั่งหรือ Scripts",
        "C. AWS Management Console — Graphical Web Interface สำหรับจัดการ AWS Services ผ่าน Browser",
        "D. AWS Systems Manager — ช่วยจัดการและปฏิบัติงานกับ AWS Resources แบบรวมศูนย์ เช่น Automation และ Patch"
      ]
    },
    {
      "questionId": 53,
      "result": "Wrong",
      "topic": "Durability vs fault tolerance",
      "question": "A storage service is designed to keep a customer's records intact over many years, even when an individual storage component fails. Which property is emphasized?",
      "questionTh": "Storage Service ต้องรักษา Records ไม่ให้สูญหายในระยะยาว แม้อุปกรณ์บางชิ้นเสีย คุณสมบัติใดเป็นหัวใจหลัก",
      "selected": "D. Fault tolerance",
      "correct": "A. Durability",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ตรงเงื่อนไขหลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Durability วัดความคงอยู่ของข้อมูล ไม่ใช่ความพร้อมตอบ Request แบบ High availability หรือความสามารถประมวลผลต่อเมื่อ Node เสียแบบ Fault tolerance",
      "notes": [
        "Durability วัดความคงอยู่ของข้อมูล ไม่ใช่ความพร้อมตอบ Request แบบ High availability หรือความสามารถประมวลผลต่อเมื่อ Node เสียแบบ Fault tolerance",
        "A. Durability — Durability วัดความคงอยู่ของข้อมูล ไม่ใช่ความพร้อมตอบ Request แบบ High availability หรือความสามารถประมวลผลต่อเมื่อ Node เสียแบบ Fault tolerance",
        "B. Reliability — เน้นการฟื้นตัวและการทำงานตามที่คาดหวัง เช่น วางระบบหลาย Availability Zones และทดสอบ failover",
        "C. High availability — ออกแบบให้บริการพร้อมใช้งานต่อเนื่อง เช่น วาง Application Load Balancer หน้า EC2 หลาย AZ เพื่อลด downtime",
        "D. Fault tolerance — ทำงานต่อได้เมื่อบางส่วนล้มเหลว เช่น ให้ component สำรองรับงานต่อได้เมื่อ component หลักล้มเหลว"
      ]
    },
    {
      "questionId": 54,
      "result": "Wrong",
      "topic": "Application Discovery Service vs Migration Evaluator",
      "question": "Before moving a legacy estate, a team wants to identify which servers communicate with each other and group applications accordingly. Which service assists with this discovery?",
      "questionTh": "ก่อน Migration ทีมต้องรู้ว่า Servers ตัวใดสื่อสารกัน เพื่อจัดกลุ่ม Applications และ Dependencies ควรใช้บริการใด",
      "selected": "D. AWS Migration Evaluator",
      "correct": "C. AWS Application Discovery Service",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ตรงเงื่อนไขหลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Application Discovery Service รวบรวม Server Inventory และ Dependencies เพื่อวางแผนย้าย แตกต่างจาก Migration Evaluator ที่เน้นข้อมูลสำหรับ Business Case/TCO",
      "notes": [
        "Application Discovery Service รวบรวม Server Inventory และ Dependencies เพื่อวางแผนย้าย แตกต่างจาก Migration Evaluator ที่เน้นข้อมูลสำหรับ Business Case/TCO",
        "A. AWS Migration Hub — ติดตามความคืบหน้าการ migration เช่น ติดตามสถานะการย้ายแอปจากหลาย tools",
        "B. AWS Application Migration Service — ย้าย servers โดยทำ lift-and-shift เช่น replicate และย้าย servers ไป AWS แบบ lift-and-shift",
        "C. AWS Application Discovery Service — Application Discovery Service รวบรวม Server Inventory และ Dependencies เพื่อวางแผนย้าย แตกต่างจาก Migration Evaluator ที่เน้นข้อมูลสำหรับ Business Case/TCO",
        "D. AWS Migration Evaluator — ช่วยสร้าง business case และ cost assessment ก่อน migration เช่น ประเมิน business case และค่าใช้จ่ายก่อน migration"
      ]
    },
    {
      "questionId": 56,
      "result": "Wrong",
      "topic": "IAM role vs KMS",
      "question": "An EC2 service writes objects to S3. The security team rejects long-lived access keys embedded in its image. What should be attached to the instance?",
      "questionTh": "EC2 Service ต้องเขียน S3 แต่ห้ามฝัง Long-lived Access Keys ใน Image ต้องกำหนดอะไรให้ Instance",
      "selected": "A. AWS KMS",
      "correct": "C. AWS IAM",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ตรงเงื่อนไขหลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "ใช้ IAM Role/Instance Profile ให้ EC2 ได้ Temporary Credentials พร้อม S3 Policy ตาม Least Privilege ไม่ใช่ฝัง Static Keys หรือเก็บ Static Keys ใน Secrets Manager",
      "notes": [
        "ใช้ IAM Role/Instance Profile ให้ EC2 ได้ Temporary Credentials พร้อม S3 Policy ตาม Least Privilege ไม่ใช่ฝัง Static Keys หรือเก็บ Static Keys ใน Secrets Manager",
        "A. AWS KMS — สร้างและควบคุม encryption keys เช่น ควบคุม encryption key ที่ใช้กับ S3",
        "B. AWS Secrets Manager — เก็บและหมุนเวียน secrets เช่น database credentials เช่น เก็บและหมุนเวียน database password",
        "C. AWS IAM — ใช้ IAM Role/Instance Profile ให้ EC2 ได้ Temporary Credentials พร้อม S3 Policy ตาม Least Privilege ไม่ใช่ฝัง Static Keys หรือเก็บ Static Keys ใน Secrets Manager",
        "D. IAM Access Analyzer — วิเคราะห์ resource access และ external access"
      ]
    },
    {
      "questionId": 57,
      "result": "Wrong",
      "topic": "Transcribe vs Polly",
      "question": "A call center wants transcripts of voice calls to feed into a text analytics pipeline. Which managed AI capability converts audio to words?",
      "questionTh": "Call Center ต้องแปลงเสียงสนทนาเป็น Text Transcript เพื่อส่งต่อ Text Analytics ใช้บริการ AI ใด",
      "selected": "B. Amazon Polly",
      "correct": "A. Amazon Transcribe",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ตรงเงื่อนไขหลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "Transcribe แปลง Speech-to-Text ส่วน Polly เป็น Text-to-Speech, Comprehend วิเคราะห์ Text และ Textract ดึง Text จากเอกสาร",
      "notes": [
        "Transcribe แปลง Speech-to-Text ส่วน Polly เป็น Text-to-Speech, Comprehend วิเคราะห์ Text และ Textract ดึง Text จากเอกสาร",
        "A. Amazon Transcribe — Transcribe แปลง Speech-to-Text ส่วน Polly เป็น Text-to-Speech, Comprehend วิเคราะห์ Text และ Textract ดึง Text จากเอกสาร",
        "B. Amazon Polly — แปลงข้อความเป็นเสียงพูด",
        "C. Amazon Comprehend — บริการ NLP วิเคราะห์ข้อความ เช่น Sentiment, Entities และ Key Phrases",
        "D. Amazon Textract — ดึงข้อความและโครงสร้างจากเอกสาร"
      ]
    },
    {
      "questionId": 63,
      "result": "Correct",
      "topic": "Elastic Disaster Recovery",
      "question": "An organization needs replication of physical and virtual servers to AWS and a recovery environment for a major data-center outage. Which storage-related disaster recovery service is purpose-built?",
      "questionTh": "องค์กรต้อง Replicate Physical/Virtual Servers ไป AWS เพื่อกู้คืนเมื่อ Data Center ใช้งานไม่ได้ ใช้บริการ DR ใด",
      "selected": "C. AWS Elastic Disaster Recovery",
      "correct": "C. AWS Elastic Disaster Recovery",
      "rawFlags": [
        "🧩 Clue / Distractor Gap"
      ],
      "reviewedCauses": [
        "clue"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "AWS Elastic Disaster Recovery เน้น Continuous Replication เพื่อ Recover Servers เมื่อเกิด Disaster ส่วน Backup เน้น Restore Points และ Application Migration Service เน้นย้าย Workloads",
      "notes": [
        "AWS Elastic Disaster Recovery เน้น Continuous Replication เพื่อ Recover Servers เมื่อเกิด Disaster ส่วน Backup เน้น Restore Points และ Application Migration Service เน้นย้าย Workloads",
        "A. AWS Backup — รวมศูนย์การตั้งค่า backup policies",
        "B. AWS Storage Gateway — เชื่อม on-premises applications กับ cloud storage",
        "C. AWS Elastic Disaster Recovery — AWS Elastic Disaster Recovery เน้น Continuous Replication เพื่อ Recover Servers เมื่อเกิด Disaster ส่วน Backup เน้น Restore Points และ Application Migration Service เน้นย้าย Workloads",
        "D. AWS Application Migration Service — ย้าย servers โดยทำ lift-and-shift เช่น replicate และย้าย servers ไป AWS แบบ lift-and-shift"
      ]
    },
    {
      "questionId": 64,
      "result": "Correct",
      "topic": "Region and data residency",
      "question": "A regulated application needs proof that its data remains in the permitted geographic area. Which deployment-level AWS concept should be checked first?",
      "questionTh": "แอปที่อยู่ภายใต้กฎต้องเก็บข้อมูลในพื้นที่ภูมิศาสตร์ที่กำหนด องค์ประกอบระดับ Deployment ใดเป็นตัวเลือกแรกที่ต้องตรวจ",
      "selected": "B. AWS Region",
      "correct": "B. AWS Region",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "เลือก AWS Region ที่สอดคล้องกับข้อกำหนด Data Residency ก่อน เพราะ AZ และ Subnets อยู่ภายใน Region ไม่ใช่ตัวระบุพื้นที่ภูมิศาสตร์หลัก",
      "notes": [
        "เลือก AWS Region ที่สอดคล้องกับข้อกำหนด Data Residency ก่อน เพราะ AZ และ Subnets อยู่ภายใน Region ไม่ใช่ตัวระบุพื้นที่ภูมิศาสตร์หลัก",
        "A. Availability Zone — พื้นที่โครงสร้างพื้นฐานที่แยกจาก AZ อื่นใน Region เช่น แยก infrastructure เพื่อกระจายความเสี่ยงภายใน Region",
        "B. AWS Region — เลือก AWS Region ที่สอดคล้องกับข้อกำหนด Data Residency ก่อน เพราะ AZ และ Subnets อยู่ภายใน Region ไม่ใช่ตัวระบุพื้นที่ภูมิศาสตร์หลัก",
        "C. Edge location — จุดกระจาย content ใกล้ผู้ใช้ เช่น ให้ CloudFront ส่ง content จาก edge ใกล้ผู้ใช้",
        "D. Multi-AZ deployment — ออกแบบ resilience ภายใน Region ด้วยหลาย AZ เช่น วาง database standby ในอีก AZ เพื่อรองรับ failover"
      ]
    }
  ],
  "englishNotes": [
    {
      "questionId": 2,
      "phrase": "An enterprise wants an AWS-authored collection of migration design patterns and step-by-step guidance before choosing a consulting partner. Which resource should it read?",
      "translation": "องค์กรต้องการอ่าน AWS-authored Migration Patterns/Guidance ก่อนคัดเลือก Consulting Partner ควรเริ่มจากแหล่งข้อมูลใด"
    },
    {
      "questionId": 23,
      "phrase": "An Amazon RDS user wants to know who replaces malfunctioning physical storage devices beneath the database. Which party owns this activity?",
      "translation": "ผู้ใช้ Amazon RDS สงสัยว่าใครเปลี่ยนอุปกรณ์ Storage จริงที่เสียใต้ Managed Database หน้าที่นี้เป็นของใคร"
    },
    {
      "questionId": 36,
      "phrase": "A small company commits to Savings Plans spending at the level of a rare monthly product launch spike. What is its most likely cost risk?",
      "translation": "บริษัทตั้ง Savings Plans Commitment ตามยอด Compute ที่สูงเฉพาะวัน Launch เดือนละครั้ง ความเสี่ยงด้านค่าใช้จ่ายคืออะไร"
    },
    {
      "questionId": 41,
      "phrase": "An office requires continuing access to cloud-backed shared files while it migrates other storage. Which hybrid service exposes familiar file interfaces on premises?",
      "translation": "สำนักงานต้องใช้ Shared Files ที่มี Cloud Storage เป็น Backend อย่างต่อเนื่องระหว่าง Migration บริการ Hybrid ใดมี File Interfaces ให้ On-premises"
    },
    {
      "questionId": 44,
      "phrase": "An auditor reviews AWS's SOC report for a cloud service. Which statement correctly describes the customer's own application compliance obligations?",
      "translation": "Auditor อ่าน AWS SOC Report ของ Cloud Service แล้ว ข้อความใดอธิบาย Compliance ของ Application ฝั่งลูกค้าได้ถูกต้อง"
    },
    {
      "questionId": 64,
      "phrase": "A regulated application needs proof that its data remains in the permitted geographic area. Which deployment-level AWS concept should be checked first?",
      "translation": "แอปที่อยู่ภายใต้กฎต้องเก็บข้อมูลในพื้นที่ภูมิศาสตร์ที่กำหนด องค์ประกอบระดับ Deployment ใดเป็นตัวเลือกแรกที่ต้องตรวจ"
    }
  ]
};
window.REVIEW_INSIGHTS.history.push({
  "setId": "local-set-11",
  "label": "Local Mock Set 11 · 24 Nov 2026",
  "score": 54,
  "total": 65,
  "percent": 83,
  "confidence": 9,
  "language": 6,
  "concept": 4,
  "clue": 2
});

window.REVIEW_INSIGHTS.sets["local-set-12"] = {
  "title": "Local Mock Set 12",
  "note": "27 Nov 2026 · 50/65 correct (76.9%) · 15 wrong + 3 correct flagged · 0 Explain More, 3 English Unclear, 5 Concept / Recall Gap, 0 Clue / Distractor Gap; flags may overlap.",
  "items": [
    {
      "questionId": 2,
      "key": "local-set-12:q2",
      "topic": "L01 — Fault tolerance vs High availability vs Durability",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Fault tolerance ให้ระบบทำงานต่อเมื่อ Component ล้มเหลว ส่วน Durability เน้นความคงอยู่ของข้อมูล แยกจาก High availability ที่เน้นลด Downtime โดยรวม"
    },
    {
      "questionId": 6,
      "key": "local-set-12:q6",
      "topic": "L10 — Shared responsibility and compliance eligibility",
      "type": "language",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "note": "Correct; flagged for review | ต้องตรวจ Service Eligibility/Agreements ที่เกี่ยวข้องและดำเนิน Customer-side Controls; AWS Provider Attestation ไม่รับรอง Application ของลูกค้าอัตโนมัติ"
    },
    {
      "questionId": 14,
      "key": "local-set-12:q14",
      "topic": "L05 — Route 53 DNS failover vs ELB / Global Accelerator",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Route 53 รองรับ DNS Failover Routing และ Health Checks ส่วน CloudFront เน้น Content Delivery และ ELB กระจาย Traffic ภายใน Load Balancer"
    },
    {
      "questionId": 16,
      "key": "local-set-12:q16",
      "topic": "L09 — Firewall Manager vs Security Hub / WAF / Shield",
      "type": "concept",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "note": "Wrong | Firewall Manager เป็น Central Security Policy Management สำหรับหลาย Accounts ส่วน WAF กรอง Web Requests ตาม Rules"
    },
    {
      "questionId": 17,
      "key": "local-set-12:q17",
      "topic": "L13 — Well-Architected Tool vs Trusted Advisor / CAF",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Well-Architected Tool ใช้ Review Workloads เทียบ AWS Well-Architected Framework และบันทึก Risks/Improvements ขณะที่ CAF เน้นการเปลี่ยนผ่านทั้งองค์กร"
    },
    {
      "questionId": 19,
      "key": "local-set-12:q19",
      "topic": "L12 — Application Migration Service vs DMS / SCT / Migration Hub",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Application Migration Service ทำ Server-based Lift-and-shift ด้วย Replication ส่วน DMS ย้าย Data และ SCT แปลง Database Schema/Code"
    },
    {
      "questionId": 24,
      "key": "local-set-12:q24",
      "topic": "L12 — CAF People Perspective",
      "type": "concept",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "note": "Correct; flagged for review | People Perspective ดูความพร้อมบุคลากร Culture/Training และ Organizational Change ส่วน Governance เน้น Controls/Risk Policies และ Platform เน้น Technical Architecture"
    },
    {
      "questionId": 26,
      "key": "local-set-12:q26",
      "topic": "L04 — Outposts vs Direct Connect / Global Accelerator",
      "type": "concept",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "note": "Wrong | Outposts นำ AWS Infrastructure/บริการที่รองรับมาวาง On-premises เพื่อ Low Latency/Local Processing ส่วน Direct Connect แค่เชื่อมเครือข่ายไป AWS"
    },
    {
      "questionId": 36,
      "key": "local-set-12:q36",
      "topic": "L12 — Relocate vs Rehost",
      "type": "language",
      "rawFlags": [
        "📘 English Unclear",
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "language",
        "concept"
      ],
      "note": "Wrong | Relocate หมายถึงย้าย Virtualized Infrastructure ไปยัง Compatible Cloud Environment โดยเปลี่ยน Application น้อย ต่างจาก Rehost ที่ย้าย Server/App แบบ Lift-and-shift ไป Infrastructure ใหม่"
    },
    {
      "questionId": 39,
      "key": "local-set-12:q39",
      "topic": "L09 — EC2 shared responsibility: guest OS vs hypervisor",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | ลูกค้า EC2 ต้อง Update Guest OS ของตนเอง AWS จัดการ Underlying Hosts/Hypervisor ไม่ใช่ Patch OS ของ EC2 ที่ลูกค้าควบคุม"
    },
    {
      "questionId": 40,
      "key": "local-set-12:q40",
      "topic": "L10 — Artifact vs Audit Manager",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Artifact เป็นแหล่งรายงาน/เอกสาร Compliance ของ AWS ส่วน Audit Manager ช่วยรวบรวม Assessment Evidence จากลูกค้า"
    },
    {
      "questionId": 43,
      "key": "local-set-12:q43",
      "topic": "L13 — Security + Cost Optimization",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Security เกี่ยวกับ Identity/Access Protection ส่วน Cost Optimization ลด Idle Spend ไม่ใช่เป้าหมายด้าน Environmental Impact โดยตรง"
    },
    {
      "questionId": 46,
      "key": "local-set-12:q46",
      "topic": "L13 — Cost Optimization vs Performance Efficiency",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Cost Optimization มุ่งเลือกการใช้เงินเพื่อให้ได้ Business Outcomes ที่ต้องการ ต่างจาก Performance Efficiency ซึ่งเน้น Performance/Capacity ตามโจทย์เป็นหลัก"
    },
    {
      "questionId": 48,
      "key": "local-set-12:q48",
      "topic": "L11 — Cost allocation tags vs Cost Explorer",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Cost Allocation Tags ใช้จัด Cost ตาม Team/Product ส่วน Consolidated Billing รวมค่าใช้จ่ายตาม Accounts ไม่ระบุ Product Labels ให้เอง"
    },
    {
      "questionId": 52,
      "key": "local-set-12:q52",
      "topic": "L11 — Compute Optimizer vs Trusted Advisor",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | Compute Optimizer วิเคราะห์ Utilization Metrics เพื่อแนะนำประเภท/ขนาด Compute ส่วน EC2 Auto Scaling เปลี่ยนจำนวน Instances ตาม Scaling Policies"
    },
    {
      "questionId": 53,
      "key": "local-set-12:q53",
      "topic": "L01 — Capital expenditure vs Variable expense",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | ลด Capital Expenditure ด้าน Assets ที่ต้องลงทุนล่วงหน้าแล้วเปลี่ยนสู่ Variable Expense ที่จ่ายตาม Usage ส่วน Rightsizing เป็นเทคนิคปรับ Resource Size"
    },
    {
      "questionId": 62,
      "key": "local-set-12:q62",
      "topic": "L09 — Resource Access Manager vs Control Tower",
      "type": "review",
      "rawFlags": [],
      "reviewedCauses": [],
      "note": "Wrong | AWS RAM แชร์ AWS Resources ที่รองรับข้าม Accounts อย่างมีขอบเขต ส่วน Organizations จัดโครงสร้าง Accounts/OUs และ Access Analyzer ตรวจ External Permissions"
    },
    {
      "questionId": 63,
      "key": "local-set-12:q63",
      "topic": "L09 — CloudHSM vs KMS",
      "type": "language",
      "rawFlags": [
        "📘 English Unclear",
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "language",
        "concept"
      ],
      "note": "Correct; flagged for review | CloudHSM ให้ลูกค้าควบคุม HSMs สำหรับ Cryptographic Operations ส่วน KMS เป็น Managed Encryption Key Service"
    }
  ],
  "details": [
    {
      "questionId": 2,
      "result": "Wrong",
      "topic": "L01 — Fault tolerance vs High availability vs Durability",
      "question": "A payment workload should stay operational when a single processing component stops abruptly, and customer records should remain intact. Which TWO properties are most directly requested? (Select TWO.)",
      "questionTh": "ระบบ Payment ต้องประมวลผลต่อได้เมื่อ Node หนึ่งเสียทันที และข้อมูลลูกค้าไม่สูญหาย สองคุณสมบัติใดตรงแต่ละเป้าหมาย",
      "selected": "C. Durability, E. High availability",
      "correct": "C. Durability, A. Fault tolerance",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "component failure + keep operating → Fault tolerance; data intact → Durability; minimize downtime → High availability",
      "notes": [
        "Fault tolerance ให้ระบบทำงานต่อเมื่อ Component ล้มเหลว ส่วน Durability เน้นความคงอยู่ของข้อมูล แยกจาก High availability ที่เน้นลด Downtime โดยรวม",
        "A. Fault tolerance — Fault tolerance ให้ระบบทำงานต่อเมื่อ Component ล้มเหลว ส่วน Durability เน้นความคงอยู่ของข้อมูล แยกจาก High availability ที่เน้นลด Downtime โดยรวม [คำตอบที่ถูก]",
        "B. Agility — จัดสรรและทดลองทรัพยากรได้รวดเร็ว เช่น สร้าง test environment ใหม่ภายในไม่กี่นาที",
        "C. Durability — Fault tolerance ให้ระบบทำงานต่อเมื่อ Component ล้มเหลว ส่วน Durability เน้นความคงอยู่ของข้อมูล แยกจาก High availability ที่เน้นลด Downtime โดยรวม [คำตอบที่ถูก]",
        "D. Global reach — ใช้ AWS Global Infrastructure และ Regions เพื่อให้บริการลูกค้าหลายพื้นที่ได้โดยไม่สร้าง Data Centers เอง",
        "E. High availability — ออกแบบให้บริการพร้อมใช้งานต่อเนื่อง เช่น วาง Application Load Balancer หน้า EC2 หลาย AZ เพื่อลด downtime"
      ]
    },
    {
      "questionId": 6,
      "result": "Correct",
      "topic": "L10 — Shared responsibility and compliance eligibility",
      "question": "A security program asks whether a healthcare workload can process regulated patient data merely because the AWS infrastructure has compliance reports. Which TWO checks are still necessary? (Select TWO.)",
      "questionTh": "โครงการ Healthcare ต้องตรวจว่าประมวลผลข้อมูลผู้ป่วยบน AWS ได้ถูกต้องหรือไม่ แม้ AWS มี Compliance Reports สองสิ่งใดยังต้องทำ",
      "selected": "D. Implement required customer-side controls, E. Verify the relevant service eligibility and AWS agreements",
      "correct": "D. Implement required customer-side controls, E. Verify the relevant service eligibility and AWS agreements",
      "rawFlags": [
        "📘 English Unclear"
      ],
      "reviewedCauses": [
        "language"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "provider compliance report ≠ customer application compliance; verify service eligibility and agreements + implement customer controls",
      "notes": [
        "ต้องตรวจ Service Eligibility/Agreements ที่เกี่ยวข้องและดำเนิน Customer-side Controls; AWS Provider Attestation ไม่รับรอง Application ของลูกค้าอัตโนมัติ",
        "A. Use a free support plan as proof of compliance — ผิด: Support Plan ไม่ใช่ใบรับรอง Compliance",
        "B. Assume AWS reports automatically certify the application — ผิด: Provider Report ไม่รับรอง Application อัตโนมัติ",
        "C. Assume every AWS service supports regulated health data — ผิด: Service Eligibility ไม่ได้เท่ากันทุกบริการ",
        "D. Implement required customer-side controls — ต้องตรวจ Service Eligibility/Agreements ที่เกี่ยวข้องและดำเนิน Customer-side Controls; AWS Provider Attestation ไม่รับรอง Application ของลูกค้าอัตโนมัติ [คำตอบที่ถูก]",
        "E. Verify the relevant service eligibility and AWS agreements — ต้องตรวจ Service Eligibility/Agreements ที่เกี่ยวข้องและดำเนิน Customer-side Controls; AWS Provider Attestation ไม่รับรอง Application ของลูกค้าอัตโนมัติ [คำตอบที่ถูก]"
      ]
    },
    {
      "questionId": 14,
      "result": "Wrong",
      "topic": "L05 — Route 53 DNS failover vs ELB / Global Accelerator",
      "question": "A company wants its web hostname to direct users to a backup endpoint when health checks fail. Which DNS service supports this routing decision?",
      "questionTh": "บริษัทต้องการ DNS ของเว็บไซต์ส่งผู้ใช้ไป Backup Endpoint เมื่อ Primary Health Check ไม่ผ่าน ใช้บริการใด",
      "selected": "B. Elastic Load Balancing",
      "correct": "D. Amazon Route 53",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "hostname + DNS failover → Route 53; healthy targets within load balancer → ELB",
      "notes": [
        "Route 53 รองรับ DNS Failover Routing และ Health Checks ส่วน CloudFront เน้น Content Delivery และ ELB กระจาย Traffic ภายใน Load Balancer",
        "A. AWS Global Accelerator — เพิ่มประสิทธิภาพเส้นทางการเชื่อมต่อ TCP/UDP ไปยัง AWS Application Endpoints ด้วย Global Network",
        "B. Elastic Load Balancing — กระจาย incoming traffic ไปยัง targets เช่น กระจาย HTTP requests ไปหลาย EC2 targets",
        "C. Amazon CloudFront — content delivery network ที่ใช้ edge locations เช่น cache static assets ใกล้ผู้ใช้",
        "D. Amazon Route 53 — Route 53 รองรับ DNS Failover Routing และ Health Checks ส่วน CloudFront เน้น Content Delivery และ ELB กระจาย Traffic ภายใน Load Balancer [คำตอบที่ถูก]"
      ]
    },
    {
      "questionId": 16,
      "result": "Wrong",
      "topic": "L09 — Firewall Manager vs Security Hub / WAF / Shield",
      "question": "A company wants to manage baseline WAF rules across a large AWS Organizations environment. Which service governs their rollout centrally?",
      "questionTh": "บริษัทต้องการใช้ Baseline WAF Rules ข้าม AWS Accounts ใน Organization และบริหาร Rollout จากส่วนกลาง บริการใด",
      "selected": "A. AWS Security Hub",
      "correct": "D. AWS Firewall Manager",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "central rollout of WAF policies across accounts → Firewall Manager; collect findings → Security Hub",
      "notes": [
        "Firewall Manager เป็น Central Security Policy Management สำหรับหลาย Accounts ส่วน WAF กรอง Web Requests ตาม Rules",
        "A. AWS Security Hub — รวม findings และสถานะ security จากหลายแหล่ง เช่น รวม security findings จากหลายบริการ",
        "B. AWS Shield — ป้องกันการโจมตี DDoS เช่น ช่วยป้องกันการโจมตี DDoS",
        "C. AWS WAF — กรอง HTTP(S) requests ตาม web ACL rules เช่น บล็อก HTTP request ที่มีรูปแบบ SQL injection",
        "D. AWS Firewall Manager — Firewall Manager เป็น Central Security Policy Management สำหรับหลาย Accounts ส่วน WAF กรอง Web Requests ตาม Rules [คำตอบที่ถูก]"
      ]
    },
    {
      "questionId": 17,
      "result": "Wrong",
      "topic": "L13 — Well-Architected Tool vs Trusted Advisor / CAF",
      "question": "An AWS architect uses a review tool to evaluate an existing workload against six pillar-based best practices and receive recommended improvements. Which AWS resource supports this process?",
      "questionTh": "Architect ต้อง Review Workload ที่มีอยู่ตาม 6 Pillars และรับ Recommendations ตาม Best Practices ใช้เครื่องมือใด",
      "selected": "C. AWS Trusted Advisor",
      "correct": "D. AWS Well-Architected Tool",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "review workload against six pillars → Well-Architected Tool; automated resource checks → Trusted Advisor",
      "notes": [
        "Well-Architected Tool ใช้ Review Workloads เทียบ AWS Well-Architected Framework และบันทึก Risks/Improvements ขณะที่ CAF เน้นการเปลี่ยนผ่านทั้งองค์กร",
        "A. AWS Cloud Adoption Framework — กรอบแนวทางการเปลี่ยนผ่านองค์กรสู่ cloud เช่น ประเมิน People, Governance, Platform และมุมมองอื่นก่อน adoption",
        "B. AWS Control Tower — ตั้งค่าและกำกับ multi-account landing zone",
        "C. AWS Trusted Advisor — ตรวจ best practices รวมถึงต้นทุนและ security",
        "D. AWS Well-Architected Tool — Well-Architected Tool ใช้ Review Workloads เทียบ AWS Well-Architected Framework และบันทึก Risks/Improvements ขณะที่ CAF เน้นการเปลี่ยนผ่านทั้งองค์กร [คำตอบที่ถูก]"
      ]
    },
    {
      "questionId": 19,
      "result": "Wrong",
      "topic": "L12 — Application Migration Service vs DMS / SCT / Migration Hub",
      "question": "An IT team needs a lift-and-shift service that continuously replicates servers to AWS for final migration, rather than translating a database schema. Which tool fits?",
      "questionTh": "ทีม IT ต้อง Replicate Servers ไป AWS เพื่อ Lift-and-shift Migration ไม่ได้แปลง Database Schema ควรใช้บริการใด",
      "selected": "A. AWS DMS",
      "correct": "D. AWS Application Migration Service",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "replicate whole servers → Application Migration Service; database records → DMS; schema conversion → SCT",
      "notes": [
        "Application Migration Service ทำ Server-based Lift-and-shift ด้วย Replication ส่วน DMS ย้าย Data และ SCT แปลง Database Schema/Code",
        "A. AWS DMS — ย้ายและ replicate databases เช่น replicate ข้อมูลจากฐานข้อมูลต้นทางไปปลายทาง",
        "B. AWS Migration Hub — ติดตามความคืบหน้าการ migration เช่น ติดตามสถานะการย้ายแอปจากหลาย tools",
        "C. AWS SCT — ช่วยแปลง database schema ระหว่าง engines เช่น แปลง database schema ระหว่าง engines",
        "D. AWS Application Migration Service — Application Migration Service ทำ Server-based Lift-and-shift ด้วย Replication ส่วน DMS ย้าย Data และ SCT แปลง Database Schema/Code [คำตอบที่ถูก]"
      ]
    },
    {
      "questionId": 24,
      "result": "Correct",
      "topic": "L12 — CAF People Perspective",
      "question": "A cloud transformation program focuses on workforce skills, operating roles, training, and a change-management plan. Which AWS CAF perspective is primarily involved?",
      "questionTh": "Cloud Transformation เน้น Skills, Job Roles, Training และ Change Management ของพนักงาน ตรงกับ AWS CAF Perspective ใด",
      "selected": "C. People Perspective",
      "correct": "C. People Perspective",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "skills + training + organizational change → CAF People",
      "notes": [
        "People Perspective ดูความพร้อมบุคลากร Culture/Training และ Organizational Change ส่วน Governance เน้น Controls/Risk Policies และ Platform เน้น Technical Architecture",
        "A. Governance Perspective — AWS CAF มุมมองการบริหาร Risk, Policies, Controls และ Compliance ขององค์กร",
        "B. Platform Perspective — AWS CAF มุมมอง Architecture/Infrastructure ของ Cloud Platform",
        "C. People Perspective — People Perspective ดูความพร้อมบุคลากร Culture/Training และ Organizational Change ส่วน Governance เน้น Controls/Risk Policies และ Platform เน้น Technical Architecture [คำตอบที่ถูก]",
        "D. Business Perspective — AWS CAF มุมมอง Business Outcomes, Investments และ Value ของ Cloud Adoption"
      ]
    },
    {
      "questionId": 26,
      "result": "Wrong",
      "topic": "L04 — Outposts vs Direct Connect / Global Accelerator",
      "question": "A factory needs supported AWS compute and services physically installed on its own premises because local processes cannot tolerate the round trip to a Region. Which offering fits?",
      "questionTh": "โรงงานต้องการ AWS Compute/Services บางส่วนมาติดตั้งในโรงงานจริง เพราะการส่งข้อมูลไป Region มี Latency สูงเกินไป ควรใช้บริการใด",
      "selected": "D. AWS Global Accelerator",
      "correct": "C. AWS Outposts",
      "rawFlags": [
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "concept"
      ],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "AWS infrastructure physically on premises → Outposts; dedicated network link → Direct Connect; global network routing → Global Accelerator",
      "notes": [
        "Outposts นำ AWS Infrastructure/บริการที่รองรับมาวาง On-premises เพื่อ Low Latency/Local Processing ส่วน Direct Connect แค่เชื่อมเครือข่ายไป AWS",
        "A. AWS Client VPN — Managed VPN ให้ Remote Users/Devices เชื่อม AWS Networks จาก Client",
        "B. AWS Direct Connect — dedicated private network connection ไป AWS เช่น ใช้ dedicated network connection เชื่อม data center กับ AWS",
        "C. AWS Outposts — Outposts นำ AWS Infrastructure/บริการที่รองรับมาวาง On-premises เพื่อ Low Latency/Local Processing ส่วน Direct Connect แค่เชื่อมเครือข่ายไป AWS [คำตอบที่ถูก]",
        "D. AWS Global Accelerator — เพิ่มประสิทธิภาพเส้นทางการเชื่อมต่อ TCP/UDP ไปยัง AWS Application Endpoints ด้วย Global Network"
      ]
    },
    {
      "questionId": 36,
      "result": "Wrong",
      "topic": "L12 — Relocate vs Rehost",
      "question": "A company moves VMware virtual machines as a group to a compatible virtualization environment hosted on AWS without converting each VM into an individually rehosted EC2 instance. Which strategy describes this move?",
      "questionTh": "บริษัทต้องย้าย VMware VMs ทั้ง Environment ไป Virtualization Platform ที่รองรับบน AWS โดยไม่แปลงทุก VM เป็น EC2 ใหม่ทีละตัว เป็น Strategy ใด",
      "selected": "D. Rehost",
      "correct": "B. Relocate",
      "rawFlags": [
        "📘 English Unclear",
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "language",
        "concept"
      ],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "move virtualization environment without converting individual VMs → Relocate; lift individual servers to EC2 → Rehost",
      "notes": [
        "Relocate หมายถึงย้าย Virtualized Infrastructure ไปยัง Compatible Cloud Environment โดยเปลี่ยน Application น้อย ต่างจาก Rehost ที่ย้าย Server/App แบบ Lift-and-shift ไป Infrastructure ใหม่",
        "A. Repurchase — แทน Application เดิมด้วยผลิตภัณฑ์/SaaS สำเร็จรูป (Drop and Shop)",
        "B. Relocate — Relocate หมายถึงย้าย Virtualized Infrastructure ไปยัง Compatible Cloud Environment โดยเปลี่ยน Application น้อย ต่างจาก Rehost ที่ย้าย Server/App แบบ Lift-and-shift ไป Infrastructure ใหม่ [คำตอบที่ถูก]",
        "C. Replatform — ย้ายและปรับแพลตฟอร์มบางส่วน เช่น ย้าย database ไป RDS โดยแก้แอปเพียงเล็กน้อย",
        "D. Rehost — ย้าย workload โดยเปลี่ยนแปลงน้อยที่สุด เช่น ย้าย virtual machine ไป EC2 โดยแทบไม่แก้แอป"
      ]
    },
    {
      "questionId": 39,
      "result": "Wrong",
      "topic": "L09 — EC2 shared responsibility: guest OS vs hypervisor",
      "question": "A customer creates an EC2 instance from a Linux image and never applies its operating-system security updates. Under shared responsibility, which component did the customer neglect?",
      "questionTh": "ลูกค้าสร้าง Linux EC2 แล้วไม่ลง Security Updates หน้าที่ที่ลูกค้าละเลยคือ Component ใด",
      "selected": "A. Hypervisor",
      "correct": "C. Guest operating system",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "EC2 guest OS patches → customer; physical hosts and hypervisor → AWS",
      "notes": [
        "ลูกค้า EC2 ต้อง Update Guest OS ของตนเอง AWS จัดการ Underlying Hosts/Hypervisor ไม่ใช่ Patch OS ของ EC2 ที่ลูกค้าควบคุม",
        "A. Hypervisor — ระบบ virtualization underlying EC2 ที่ AWS ดูแล เช่น AWS ดูแล virtualization layer ใต้ EC2",
        "B. AWS-owned physical servers — เครื่อง server จริงใน AWS data centers ที่ AWS ดูแล เช่น AWS ดูแล hardware จริงใน data center",
        "C. Guest operating system — ลูกค้า EC2 ต้อง Update Guest OS ของตนเอง AWS จัดการ Underlying Hosts/Hypervisor ไม่ใช่ Patch OS ของ EC2 ที่ลูกค้าควบคุม [คำตอบที่ถูก]",
        "D. AWS — ผู้ให้บริการ cloud ที่ดูแลความปลอดภัยของ infrastructure เช่น AWS ดูแลความปลอดภัยของ physical cloud infrastructure"
      ]
    },
    {
      "questionId": 40,
      "result": "Wrong",
      "topic": "L10 — Artifact vs Audit Manager",
      "question": "A compliance team wants official AWS audit agreements and downloadable provider certifications, not evidence about its own application configuration. Which service matches?",
      "questionTh": "ทีม Compliance ต้องดาวน์โหลด AWS Provider Reports/Agreements ไม่ได้เก็บ Evidence ของ App ตัวเอง ควรใช้บริการใด",
      "selected": "B. AWS Audit Manager",
      "correct": "C. AWS Artifact",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "download AWS provider reports/agreements → Artifact; collect customer audit evidence → Audit Manager",
      "notes": [
        "Artifact เป็นแหล่งรายงาน/เอกสาร Compliance ของ AWS ส่วน Audit Manager ช่วยรวบรวม Assessment Evidence จากลูกค้า",
        "A. AWS Config — ติดตามและประเมิน configuration ของทรัพยากรตามกฎ เช่น ตรวจว่า S3 bucket เป็นไปตาม configuration rules หรือไม่",
        "B. AWS Audit Manager — ช่วยรวบรวมและจัดระเบียบ Audit Evidence สำหรับ Audit Assessments จาก AWS Resources และ Accounts ที่รองรับ",
        "C. AWS Artifact — Artifact เป็นแหล่งรายงาน/เอกสาร Compliance ของ AWS ส่วน Audit Manager ช่วยรวบรวม Assessment Evidence จากลูกค้า [คำตอบที่ถูก]",
        "D. AWS CloudTrail — บันทึกกิจกรรม API และการดำเนินการในบัญชี AWS เช่น ตรวจว่า IAM principal ใดเรียก DeleteBucket เมื่อไร"
      ]
    },
    {
      "questionId": 43,
      "result": "Wrong",
      "topic": "L13 — Security + Cost Optimization",
      "question": "A system design review finds weak identity controls and waste from unused resources. Which TWO pillars should the team improve? (Select TWO.)",
      "questionTh": "Review ระบบพบทั้ง Identity Controls อ่อนและ Idle Resources ที่สิ้นเปลือง ควรปรับปรุง Pillars สองข้อใด",
      "selected": "E. Sustainability, C. Operational Excellence",
      "correct": "B. Security, D. Cost Optimization",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "weak identity controls → Security; wasted spend → Cost Optimization",
      "notes": [
        "Security เกี่ยวกับ Identity/Access Protection ส่วน Cost Optimization ลด Idle Spend ไม่ใช่เป้าหมายด้าน Environmental Impact โดยตรง",
        "A. Reliability — เน้นการฟื้นตัวและการทำงานตามที่คาดหวัง เช่น วางระบบหลาย Availability Zones และทดสอบ failover",
        "B. Security — Security เกี่ยวกับ Identity/Access Protection ส่วน Cost Optimization ลด Idle Spend ไม่ใช่เป้าหมายด้าน Environmental Impact โดยตรง [คำตอบที่ถูก]",
        "C. Operational Excellence — เน้นการดำเนินงาน การปรับปรุง และการเรียนรู้ เช่น ทำ post-incident review แล้วปรับ deployment procedure",
        "D. Cost Optimization — Security เกี่ยวกับ Identity/Access Protection ส่วน Cost Optimization ลด Idle Spend ไม่ใช่เป้าหมายด้าน Environmental Impact โดยตรง [คำตอบที่ถูก]",
        "E. Sustainability — ลดผลกระทบด้านสิ่งแวดล้อมของ workloads เช่น ลดทรัพยากรที่ไม่จำเป็นเพื่อลดการใช้พลังงาน"
      ]
    },
    {
      "questionId": 46,
      "result": "Wrong",
      "topic": "L13 — Cost Optimization vs Performance Efficiency",
      "question": "A team removes wasted cloud spending while preserving required performance. Which pillar is the primary objective?",
      "questionTh": "ทีมลดทรัพยากรที่เปลืองค่าใช้จ่าย แต่ยังรักษา Performance Requirements เดิม เป้าหมายหลักตรง Pillar ใด",
      "selected": "D. Performance Efficiency",
      "correct": "B. Cost Optimization",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "reduce waste while preserving required performance → Cost Optimization; meet performance needs with efficient resources → Performance Efficiency",
      "notes": [
        "Cost Optimization มุ่งเลือกการใช้เงินเพื่อให้ได้ Business Outcomes ที่ต้องการ ต่างจาก Performance Efficiency ซึ่งเน้น Performance/Capacity ตามโจทย์เป็นหลัก",
        "A. Reliability — เน้นการฟื้นตัวและการทำงานตามที่คาดหวัง เช่น วางระบบหลาย Availability Zones และทดสอบ failover",
        "B. Cost Optimization — Cost Optimization มุ่งเลือกการใช้เงินเพื่อให้ได้ Business Outcomes ที่ต้องการ ต่างจาก Performance Efficiency ซึ่งเน้น Performance/Capacity ตามโจทย์เป็นหลัก [คำตอบที่ถูก]",
        "C. Sustainability — ลดผลกระทบด้านสิ่งแวดล้อมของ workloads เช่น ลดทรัพยากรที่ไม่จำเป็นเพื่อลดการใช้พลังงาน",
        "D. Performance Efficiency — เน้นการใช้ทรัพยากรให้เหมาะกับ workload เช่น เลือก EC2 Instance Type ให้เหมาะกับงาน CPU-intensive เพื่อให้ได้ throughput ตามเป้าหมาย"
      ]
    },
    {
      "questionId": 48,
      "result": "Wrong",
      "topic": "L11 — Cost allocation tags vs Cost Explorer",
      "question": "A multi-product business wants to attribute AWS spend to Product A and Product B without breaking consolidated organization billing. Which mechanism supports cost attribution?",
      "questionTh": "บริษัทมีหลายผลิตภัณฑ์ ต้องแยกค่า AWS ตาม Product A/B แต่ยังรวม Billing ทั้ง Organization ควรใช้อะไร",
      "selected": "C. AWS Cost Explorer",
      "correct": "D. Cost allocation tags",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "assign spend to product or department → Cost allocation tags; analyze grouped spending → Cost Explorer",
      "notes": [
        "Cost Allocation Tags ใช้จัด Cost ตาม Team/Product ส่วน Consolidated Billing รวมค่าใช้จ่ายตาม Accounts ไม่ระบุ Product Labels ให้เอง",
        "A. Consolidated billing — รวมการเรียกเก็บเงินหลายบัญชีใน Organizations เช่น รวมค่าใช้จ่ายหลาย AWS accounts ไว้ที่ payer account",
        "B. AWS Budgets — กำหนด budgets และแจ้งเตือนตาม thresholds เช่น แจ้งเตือนเมื่อค่าใช้จ่ายคาดว่าจะเกินงบ",
        "C. AWS Cost Explorer — วิเคราะห์ค่าใช้จ่ายจริงและแนวโน้ม เช่น ดูแนวโน้มค่า EC2 และ S3 ย้อนหลัง",
        "D. Cost allocation tags — Cost Allocation Tags ใช้จัด Cost ตาม Team/Product ส่วน Consolidated Billing รวมค่าใช้จ่ายตาม Accounts ไม่ระบุ Product Labels ให้เอง [คำตอบที่ถูก]"
      ]
    },
    {
      "questionId": 52,
      "result": "Wrong",
      "topic": "L11 — Compute Optimizer vs Trusted Advisor",
      "question": "A performance analyst wants recommendations for more appropriate EC2 sizes based on measured usage, rather than an automatic workload scaler. Which tool is designed for recommendations?",
      "questionTh": "Performance Analyst ต้องการ Recommendations เปลี่ยน EC2 Sizes จากข้อมูล Usage ไม่ใช่ระบบ Scale ตาม Traffic บริการใด",
      "selected": "D. AWS Trusted Advisor",
      "correct": "B. AWS Compute Optimizer",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "recommend instance type/size from utilization → Compute Optimizer; broad best-practice checks → Trusted Advisor",
      "notes": [
        "Compute Optimizer วิเคราะห์ Utilization Metrics เพื่อแนะนำประเภท/ขนาด Compute ส่วน EC2 Auto Scaling เปลี่ยนจำนวน Instances ตาม Scaling Policies",
        "A. EC2 Auto Scaling — ปรับจำนวน EC2 instances ตาม demand เช่น เพิ่มหรือลดจำนวน EC2 ตาม metric",
        "B. AWS Compute Optimizer — Compute Optimizer วิเคราะห์ Utilization Metrics เพื่อแนะนำประเภท/ขนาด Compute ส่วน EC2 Auto Scaling เปลี่ยนจำนวน Instances ตาม Scaling Policies [คำตอบที่ถูก]",
        "C. AWS Cost Explorer — วิเคราะห์ค่าใช้จ่ายจริงและแนวโน้ม เช่น ดูแนวโน้มค่า EC2 และ S3 ย้อนหลัง",
        "D. AWS Trusted Advisor — ตรวจ best practices รวมถึงต้นทุนและ security"
      ]
    },
    {
      "questionId": 53,
      "result": "Wrong",
      "topic": "L01 — Capital expenditure vs Variable expense",
      "question": "A department wants to move from large one-time purchases of data-center machines to bills based on actual services consumed. Which TWO financial concepts describe the change? (Select TWO.)",
      "questionTh": "แผนกเปลี่ยนจากซื้อ Data Center Hardware เป็นก้อนมาเป็นจ่ายตาม Service Usage จริง สองแนวคิดด้านการเงินใดเกี่ยวข้อง",
      "selected": "A. Capital expenditure, E. Rightsizing",
      "correct": "D. Variable expense, A. Capital expenditure",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "upfront asset purchase → CapEx; usage-dependent bills → Variable expense; resize resources → Rightsizing",
      "notes": [
        "ลด Capital Expenditure ด้าน Assets ที่ต้องลงทุนล่วงหน้าแล้วเปลี่ยนสู่ Variable Expense ที่จ่ายตาม Usage ส่วน Rightsizing เป็นเทคนิคปรับ Resource Size",
        "A. Capital expenditure — ลด Capital Expenditure ด้าน Assets ที่ต้องลงทุนล่วงหน้าแล้วเปลี่ยนสู่ Variable Expense ที่จ่ายตาม Usage ส่วน Rightsizing เป็นเทคนิคปรับ Resource Size [คำตอบที่ถูก]",
        "B. Economies of scale — ลดต้นทุนต่อหน่วยจากการใช้ทรัพยากรในปริมาณมาก เช่น AWS กระจายต้นทุนโครงสร้างพื้นฐานให้ลูกค้าจำนวนมาก",
        "C. High availability — ออกแบบให้บริการพร้อมใช้งานต่อเนื่อง เช่น วาง Application Load Balancer หน้า EC2 หลาย AZ เพื่อลด downtime",
        "D. Variable expense — ลด Capital Expenditure ด้าน Assets ที่ต้องลงทุนล่วงหน้าแล้วเปลี่ยนสู่ Variable Expense ที่จ่ายตาม Usage ส่วน Rightsizing เป็นเทคนิคปรับ Resource Size [คำตอบที่ถูก]",
        "E. Rightsizing — เลือกขนาดทรัพยากรให้ตรงความต้องการ เช่น ลด EC2 จากขนาดใหญ่เป็นขนาดเล็กหลังตรวจ CPU/Memory utilization"
      ]
    },
    {
      "questionId": 62,
      "result": "Wrong",
      "topic": "L09 — Resource Access Manager vs Control Tower",
      "question": "A platform team wants member accounts to share a supported centrally owned AWS resource without duplicating it in each account. Which service handles controlled resource sharing?",
      "questionTh": "Platform Team ต้องแชร์ AWS Resource ที่รองรับจากบัญชีกลางให้ Member Accounts โดยไม่ต้องสร้างใหม่ทุก Account ใช้บริการใด",
      "selected": "A. AWS Control Tower",
      "correct": "D. AWS Resource Access Manager",
      "rawFlags": [],
      "reviewedCauses": [],
      "diagnosis": "คำตอบที่เลือกไม่ครบหรือไม่ตรง Requirement หลักตามเฉลย ไม่ทราบเหตุผลจริงขณะเลือก",
      "memoryCue": "share supported resources across accounts → RAM; multi-account landing zone → Control Tower",
      "notes": [
        "AWS RAM แชร์ AWS Resources ที่รองรับข้าม Accounts อย่างมีขอบเขต ส่วน Organizations จัดโครงสร้าง Accounts/OUs และ Access Analyzer ตรวจ External Permissions",
        "A. AWS Control Tower — ตั้งค่าและกำกับ multi-account landing zone",
        "B. AWS Organizations — จัดกลุ่มบัญชีและใช้ governance / consolidated billing",
        "C. IAM Access Analyzer — วิเคราะห์ resource access และ external access",
        "D. AWS Resource Access Manager — AWS RAM แชร์ AWS Resources ที่รองรับข้าม Accounts อย่างมีขอบเขต ส่วน Organizations จัดโครงสร้าง Accounts/OUs และ Access Analyzer ตรวจ External Permissions [คำตอบที่ถูก]"
      ]
    },
    {
      "questionId": 63,
      "result": "Correct",
      "topic": "L09 — CloudHSM vs KMS",
      "question": "A bank's policy requires customer-controlled dedicated hardware security modules rather than a general managed key service. Which service aligns most directly with that condition?",
      "questionTh": "นโยบายธนาคารบังคับให้ใช้ Dedicated Hardware Security Modules ที่ลูกค้าควบคุม ไม่ใช่เพียง Managed Key Service ทั่วไป ควรเลือกอะไร",
      "selected": "B. AWS CloudHSM",
      "correct": "B. AWS CloudHSM",
      "rawFlags": [
        "📘 English Unclear",
        "🧠 Concept / Recall Gap"
      ],
      "reviewedCauses": [
        "language",
        "concept"
      ],
      "diagnosis": "ตอบถูกแต่มี Flag สำหรับทบทวน",
      "memoryCue": "dedicated customer-controlled HSM → CloudHSM; managed encryption keys → KMS",
      "notes": [
        "CloudHSM ให้ลูกค้าควบคุม HSMs สำหรับ Cryptographic Operations ส่วน KMS เป็น Managed Encryption Key Service",
        "A. AWS Secrets Manager — เก็บและหมุนเวียน secrets เช่น database credentials เช่น เก็บและหมุนเวียน database password",
        "B. AWS CloudHSM — CloudHSM ให้ลูกค้าควบคุม HSMs สำหรับ Cryptographic Operations ส่วน KMS เป็น Managed Encryption Key Service [คำตอบที่ถูก]",
        "C. AWS KMS — สร้างและควบคุม encryption keys เช่น ควบคุม encryption key ที่ใช้กับ S3",
        "D. AWS Certificate Manager — ออกและจัดการ TLS certificates ที่รองรับ"
      ]
    }
  ],
  "englishNotes": [
    {
      "questionId": 6,
      "phrase": "A security program asks whether a healthcare workload can process regulated patient data merely because the AWS infrastructure has compliance reports. Which TWO checks are still necessary? (Select TWO.)",
      "translation": "โครงการ Healthcare ต้องตรวจว่าประมวลผลข้อมูลผู้ป่วยบน AWS ได้ถูกต้องหรือไม่ แม้ AWS มี Compliance Reports สองสิ่งใดยังต้องทำ"
    },
    {
      "questionId": 36,
      "phrase": "A company moves VMware virtual machines as a group to a compatible virtualization environment hosted on AWS without converting each VM into an individually rehosted EC2 instance. Which strategy describes this move?",
      "translation": "บริษัทต้องย้าย VMware VMs ทั้ง Environment ไป Virtualization Platform ที่รองรับบน AWS โดยไม่แปลงทุก VM เป็น EC2 ใหม่ทีละตัว เป็น Strategy ใด"
    },
    {
      "questionId": 63,
      "phrase": "A bank's policy requires customer-controlled dedicated hardware security modules rather than a general managed key service. Which service aligns most directly with that condition?",
      "translation": "นโยบายธนาคารบังคับให้ใช้ Dedicated Hardware Security Modules ที่ลูกค้าควบคุม ไม่ใช่เพียง Managed Key Service ทั่วไป ควรเลือกอะไร"
    }
  ]
};
window.REVIEW_INSIGHTS.history.push({
  "setId": "local-set-12",
  "label": "Local Mock Set 12 · 27 Nov 2026",
  "score": 50,
  "total": 65,
  "percent": 77,
  "confidence": 0,
  "language": 3,
  "concept": 5,
  "clue": 0
});
