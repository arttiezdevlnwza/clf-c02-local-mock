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
    }
  ],
  "topicStatus": [],
  "languageTrend": [],
  "languageFocus": []
};
