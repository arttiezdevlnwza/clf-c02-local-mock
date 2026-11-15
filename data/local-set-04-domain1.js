(() => {
  const rows = window.LOCAL_SET_04_ROWS = window.LOCAL_SET_04_ROWS || [];
  rows.push(...[
  [
    "1.1",
    "A research team needs an analytics prototype on the same day its requirement changes, without waiting for hardware procurement. Which cloud benefit is MOST relevant?",
    "ทีมวิจัยต้องสร้าง Analytics Prototype ภายในวันเดียวหลัง Requirement เปลี่ยน โดยไม่รอจัดซื้อ Hardware เป็นประโยชน์ Cloud ใดที่ตรงที่สุด",
    "Scalability|Agility|Elasticity|Pay-as-you-go",
    "1",
    "Agility ทำให้ Provision และทดลอง Solution ได้รวดเร็วโดยไม่รอการจัดซื้อ ส่วนโจทย์ไม่ได้ถามการเพิ่ม Capacity หรือต้นทุนเป็นหลัก"
  ],
  [
    "1.1",
    "An airline booking site is busy during promotions but quiet overnight. Which capability allows compute capacity to shrink again after the promotion ends?",
    "เว็บจองตั๋วมีโหลดสูงช่วงโปรโมชันแต่เงียบตอนกลางคืน ความสามารถใดช่วยลด Compute Capacity กลับลงเมื่อโหลดลด",
    "Scalability|Rightsizing|Elasticity|High availability",
    "2",
    "Elasticity ปรับ Capacity เพิ่มและลดตาม Demand ที่เปลี่ยนไป โดยไม่ต้องคง Capacity ช่วงพีคไว้ตลอดเวลา"
  ],
  [
    "1.1",
    "A ticketing company wants to add compute during short spikes and avoid compute charges for resources after they are terminated. Which TWO cloud characteristics support these needs? (Select TWO.)",
    "บริษัทขายตั๋วต้องเพิ่ม Compute เมื่อ Traffic พุ่งสั้น ๆ และหยุดจ่าย Compute ที่ยุติใช้งาน ข้อใดสองลักษณะรองรับโดยตรง",
    "Pay-as-you-go|Fault tolerance|High availability|Elasticity|Scalability",
    "0,3",
    "Pay-as-you-go ช่วยจ่ายตามการใช้ และ Elasticity เพิ่มลดทรัพยากรตาม Traffic โดยต้องพิจารณาค่า Storage ที่อาจยังคงอยู่"
  ],
  [
    "1.1",
    "A photo archive must preserve uploaded objects after an underlying storage component fails; whether the upload website stays online is a separate requirement. Which characteristic is MOST relevant?",
    "คลังรูปต้องเก็บ Objects ไม่ให้สูญหายแม้ Storage Component ล้มเหลว โดยไม่ได้ถามว่าเว็บพร้อมใช้งานหรือไม่ คุณสมบัติใดสำคัญที่สุด",
    "High availability|Reliability|Durability|Fault tolerance",
    "2",
    "Durability มุ่งให้ข้อมูลยังคงอยู่ไม่สูญหาย แตกต่างจาก High availability ที่มุ่งให้ Service พร้อมใช้งาน"
  ],
  [
    "1.2",
    "A payment workload defines recovery objectives, conducts failover drills, and prepares for an Availability Zone failure. Which Well-Architected pillar guides these decisions?",
    "ระบบชำระเงินกำหนด Recovery Objectives ซ้อม Failover และเตรียมรับ Availability Zone ล่ม สอดคล้องกับ Pillar ใด",
    "Operational Excellence|Reliability|Performance Efficiency|Security",
    "1",
    "Reliability ครอบคลุม Recovery Planning และการให้บริการได้ตามที่ออกแบบเมื่อมีความล้มเหลว"
  ],
  [
    "1.2",
    "A team must both meet strict response-time targets by choosing suitable compute resources and eliminate spending on idle environments. Which TWO pillars apply MOST directly? (Select TWO.)",
    "ทีมต้องเลือก Compute ให้ผ่าน Response-time Target และลดค่าใช้จ่ายของ Environment ที่ว่าง ข้อใดสอง Pillars ที่ตรงที่สุด",
    "Sustainability|Performance Efficiency|Reliability|Cost Optimization|Operational Excellence",
    "1,3",
    "Performance Efficiency เน้นทรัพยากรให้ได้ Response Time ตามเป้าหมาย ส่วน Cost Optimization ลดต้นทุนของทรัพยากรที่ไม่จำเป็น"
  ],
  [
    "1.2",
    "After a failed release, a team updates runbooks and deployment checks, and makes incident retrospectives routine. Which pillar is the PRIMARY focus?",
    "หลัง Release ล้มเหลว ทีมปรับ Runbooks และขั้นตอนตรวจ Deploy และทบทวน Incident เป็นประจำ Pillar ใดเป็นจุดเน้นหลัก",
    "Reliability|Security|Operational Excellence|Performance Efficiency",
    "2",
    "Operational Excellence มุ่งปรับวิธีทำงานและเรียนรู้จาก Incident เพื่อพัฒนากระบวนการอย่างต่อเนื่อง"
  ],
  [
    "1.2",
    "A processing system changes retention and compute practices specifically to reduce power use and environmental footprint. Which pillar applies?",
    "ระบบประมวลผลเปลี่ยนการเก็บข้อมูลและ Compute เพื่อประหยัดพลังงานและลดผลกระทบสิ่งแวดล้อมโดยตรง สอดคล้อง Pillar ใด",
    "Cost Optimization|Performance Efficiency|Sustainability|Operational Excellence",
    "2",
    "Sustainability ลดผลกระทบสิ่งแวดล้อมของ Workload แม้มาตรการเดียวกันอาจลด Cost หรือเพิ่ม Efficiency ได้"
  ],
  [
    "1.3",
    "A licensed third-party application cannot be modified. The company moves its existing VMs to EC2 while keeping the software stack nearly unchanged. Which strategy is used?",
    "แอป Third Party แก้โค้ดไม่ได้ บริษัทจึงย้าย VMs ไป EC2 โดยคง Software Stack เกือบเดิม ใช้ Migration Strategy ใด",
    "Replatform|Rehost|Refactor|Retain",
    "1",
    "Rehost คือ Lift-and-shift โดยเปลี่ยน Application และ Architecture ให้น้อยที่สุดขณะย้ายไป AWS"
  ],
  [
    "1.3",
    "A retailer replaces a synchronous monolithic order system with independent event-driven services during migration. Which strategy BEST describes this?",
    "ร้านค้าปรับ Monolithic Order System เป็น Independent Event-driven Services ระหว่าง Migration เป็น Strategy ใด",
    "Replatform|Retain|Rehost|Refactor",
    "3",
    "Refactor เปลี่ยน Architecture เชิงลึกให้เหมาะกับ Cloud-native ไม่ใช่แค่เปลี่ยน Platform บางส่วน"
  ],
  [
    "1.3",
    "Before migration, a firm must map dependencies among on-premises servers and separately create a financial business case for executives. Which TWO services help? (Select TWO.)",
    "ก่อน Migration บริษัทต้องทำแผน Dependencies ของ Servers และทำ Financial Business Case ให้ผู้บริหาร ข้อใดสองบริการที่รองรับ",
    "AWS Migration Evaluator|AWS Migration Hub|AWS DMS|AWS Application Discovery Service|AWS Application Migration Service",
    "0,3",
    "Application Discovery Service รวบรวม Inventory/Dependencies ส่วน Migration Evaluator ประเมินต้นทุนและความคุ้มค่าก่อน Migration"
  ],
  [
    "1.3",
    "A company moves its application and replaces a self-hosted MySQL server with Amazon RDS while preserving business logic and schema. Which migration strategy is MOST accurate?",
    "บริษัทย้ายแอปและเปลี่ยน MySQL ที่ดูแลเองเป็น RDS โดยคง Business Logic และ Schema เป็นส่วนใหญ่ จัดเป็น Strategy ใด",
    "Refactor|Rehost|Replatform|Retain",
    "2",
    "Replatform เปลี่ยน Platform บางส่วนไปใช้ Managed Service โดยไม่ต้องออกแบบ Architecture ใหม่ทั้งหมด"
  ],
  [
    "1.4",
    "A cloud provider negotiates lower network and hardware prices by operating infrastructure for millions of customers. Which economic concept explains this?",
    "ผู้ให้บริการ Cloud ต่อรองราคา Network และ Hardware ได้ต่ำเพราะดูแล Infrastructure ให้ลูกค้าจำนวนมหาศาล เป็นแนวคิดใด",
    "Rightsizing|Economies of scale|Variable expense|Capital expenditure",
    "1",
    "Economies of scale ทำให้ต้นทุนต่อหน่วยต่ำลงจากการดำเนินงานปริมาณมากและกระจายต้นทุนร่วมกัน"
  ],
  [
    "1.4",
    "A business has oversized database instances and disposable development compute used only during office hours. Which TWO approaches directly reduce paying for excess compute? (Select TWO.)",
    "บริษัทมี Database Instance ใหญ่เกินโหลดและ Dev Compute ที่ต้องใช้แค่เวลาทำงาน ข้อใดสองแนวทางช่วยลดค่า Compute ส่วนเกินโดยตรง",
    "AWS Budgets|Rightsizing|Consolidated billing|Pay-as-you-go|Cost allocation tags",
    "1,3",
    "Rightsizing ลดขนาด Instance ให้พอดี และ Pay-as-you-go ช่วยลดค่า Compute เมื่อปิดทรัพยากรที่ไม่จำเป็น"
  ],
  [
    "1.4",
    "A company switches from buying physical servers to a cloud bill that varies monthly with its consumption. Which expense model now dominates?",
    "บริษัทเปลี่ยนจากซื้อ Physical Servers เป็นบิล Cloud ที่เปลี่ยนทุกเดือนตามการใช้ เป็น Expense Model ใด",
    "Capital expenditure|Variable expense|Savings Plans|Consolidated billing",
    "1",
    "Variable expense เปลี่ยนตามการใช้บริการจริง ต่างจาก Capital expenditure ที่ลงทุนซื้อสินทรัพย์ล่วงหน้า"
  ],
  [
    "1.4",
    "After reviewing six months of database utilization, an administrator reduces an underused instance size without changing workload requirements. Which practice is this?",
    "หลังดู Database Utilization หกเดือน ผู้ดูแลลด Instance ที่ใช้งานไม่เต็มโดย Requirement เดิมไม่เปลี่ยน ใช้แนวทางใด",
    "Cost Optimization|Economies of scale|Rightsizing|Elasticity",
    "2",
    "Rightsizing คือปรับ Resource Size ให้พอดีกับการใช้งานที่วัดได้ ต่างจาก Elasticity ที่เพิ่มลดตาม Demand"
  ]
]);
})();
