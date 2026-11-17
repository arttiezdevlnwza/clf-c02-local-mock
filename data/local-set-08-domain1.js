(() => {
  const rows = window.LOCAL_SET_08_ROWS = window.LOCAL_SET_08_ROWS || [];
  rows.push(...[
  [
    "1.1",
    "A ticketing service sees unpredictable 20-minute bursts after concert announcements and wants capacity to shrink again once queues clear. Which cloud benefit BEST fits?",
    "ระบบขายตั๋วมีผู้ใช้งานพุ่งขึ้นแบบคาดเดายากช่วงสั้น ๆ หลังประกาศคอนเสิร์ต และต้องการลด Capacity เมื่อลูกค้าลดลง ประโยชน์ใดตรงที่สุด",
    "Scalability|Elasticity|Agility|Global reach",
    "1",
    "Elasticity ปรับ Capacity ขึ้นและลงตาม Demand ที่ผันผวนช่วงสั้น ต่างจาก Scalability ซึ่งเน้นรองรับการเติบโตของปริมาณงาน"
  ],
  [
    "1.1",
    "An online publisher plans to offer its service in new countries without building physical data centers there. Which TWO advantages of the AWS Cloud directly help? (Select TWO.)",
    "สำนักพิมพ์ออนไลน์จะให้บริการในประเทศใหม่โดยไม่สร้าง Data Center เอง ประโยชน์ Cloud สองข้อใดช่วยได้โดยตรง",
    "Economies of scale|Global reach|Capital expenditure|Agility|Durability",
    "1,3",
    "Global reach ทำให้ใช้ AWS Regions ใกล้ตลาดใหม่ และ Agility ช่วย Provision Resources ได้รวดเร็ว โดยไม่ซื้อศูนย์ข้อมูลเอง"
  ],
  [
    "1.1",
    "An engineering team can provision a test stack in minutes instead of waiting weeks for purchased hardware. Which benefit does this MOST clearly demonstrate?",
    "ทีม Engineer สร้าง Test Stack ได้ภายในไม่กี่นาที แทนการรอซื้อ Hardware หลายสัปดาห์ เป็นประโยชน์ใดชัดที่สุด",
    "Pay-as-you-go|High availability|Agility|Scalability",
    "2",
    "Agility วัดความรวดเร็วในการสร้างและทดลองระบบ ไม่ใช่รูปแบบคิดเงินหรือความสามารถรองรับปริมาณงาน"
  ],
  [
    "1.1",
    "A photo archive must preserve uploaded originals over many years even when a storage component fails. Which concept is central to this requirement?",
    "คลังภาพต้องรักษาไฟล์ต้นฉบับให้ไม่สูญหายในระยะยาวแม้อุปกรณ์ Storage บางชิ้นเสีย แนวคิดใดตรงความต้องการ",
    "High availability|Fault tolerance|Durability|Elasticity",
    "2",
    "Durability เน้นการคงอยู่ของข้อมูล ส่วน High availability เน้นเข้าถึงบริการได้ และ Fault tolerance เน้นทำงานต่อระหว่างส่วนหนึ่งเสีย"
  ],
  [
    "1.2",
    "A team evaluates whether its infrastructure uses electricity efficiently and minimizes environmental impact. Which Well-Architected pillar applies?",
    "ทีมประเมินว่า Infrastructure ใช้พลังงานคุ้มค่าและลดผลกระทบต่อสิ่งแวดล้อมหรือไม่ ตรงกับ Well-Architected Pillar ใด",
    "Cost Optimization|Operational Excellence|Sustainability|Performance Efficiency",
    "2",
    "Sustainability วัดผลกระทบต่อสิ่งแวดล้อม ส่วน Cost Optimization วัดความคุ้มค่าทางการเงิน แม้บางแนวทางช่วยทั้งสองอย่าง"
  ],
  [
    "1.2",
    "A streaming platform measures processing latency while also planning recovery after an Availability Zone outage. Which TWO pillars are directly involved? (Select TWO.)",
    "แพลตฟอร์ม Streaming วัด Processing Latency และเตรียมการกู้บริการหลัง Availability Zone มีปัญหา Pillars สองข้อใดเกี่ยวข้องโดยตรง",
    "Reliability|Cost Optimization|Security|Performance Efficiency|Sustainability",
    "0,3",
    "Reliability เกี่ยวกับการรับมือและฟื้นตัวจาก Failure ส่วน Performance Efficiency เกี่ยวกับ Latency และประสิทธิภาพตามเป้าหมาย"
  ],
  [
    "1.2",
    "A payment platform enforces MFA, least privilege, and encryption before a new release. Which pillar is the MAIN focus?",
    "ระบบชำระเงินบังคับ MFA Least Privilege และ Encryption ก่อนปล่อย Version ใหม่ Pillar ใดเป็นจุดเน้นหลัก",
    "Operational Excellence|Security|Reliability|Cost Optimization",
    "1",
    "Security Pillar มุ่งปกป้องระบบ ข้อมูล และ Identity ส่วน Operational Excellence เน้นวิธีปฏิบัติงานและการปรับปรุงกระบวนการ"
  ],
  [
    "1.2",
    "A retail site repeatedly improves runbooks and deployment procedures using lessons from incidents. Which pillar is represented most directly?",
    "เว็บไซต์ค้าปลีกปรับ Runbook และ Deployment Procedures จากบทเรียน Incident อย่างต่อเนื่อง Pillar ใดตรงที่สุด",
    "Reliability|Performance Efficiency|Operational Excellence|Sustainability",
    "2",
    "Operational Excellence คือการปรับปรุง Operations ผ่าน Feedback และการเรียนรู้ ส่วน Reliability เป็นผลลัพธ์ด้านความต่อเนื่องและ Recovery"
  ],
  [
    "1.3",
    "An enterprise chooses to keep a regulated legacy database on premises temporarily while migrating less constrained applications. Which migration choice describes the database?",
    "องค์กรคง Legacy Database ที่มีข้อกำหนดด้านกฎหมายไว้ On-premises ชั่วคราว แต่ย้าย Applications อื่นขึ้น Cloud Database นี้ใช้ Migration Strategy ใด",
    "Replatform|Retain|Retire|Rehost",
    "1",
    "Retain หมายถึงเก็บ Workload ไว้ในที่เดิมในรอบนี้ ต่างจาก Retire คือเลิกใช้งาน และ Rehost คือย้ายขึ้น Cloud"
  ],
  [
    "1.3",
    "A team wants a migration readiness assessment covering people, governance, skills and platform capabilities, not a server-by-server inventory. Which resource fits?",
    "ทีมต้องการประเมินความพร้อม Migration ครอบคลุมบุคลากร Governance ทักษะ และ Platform ไม่ใช่รายการ Server รายเครื่อง ควรใช้แนวทางใด",
    "AWS Migration Hub|AWS Cloud Adoption Framework|AWS Application Discovery Service|AWS DMS",
    "1",
    "AWS Cloud Adoption Framework ใช้พิจารณาความพร้อมด้าน People Governance Platform และ Perspectives อื่น ต่างจาก Discovery Service ที่เก็บ Inventory"
  ],
  [
    "1.3",
    "A migration team needs one service to collect server dependencies and another to track progress of multiple migration tools. Which TWO fit? (Select TWO.)",
    "ทีมย้ายระบบต้องมีบริการหนึ่งรวบรวม Server Dependencies และอีกบริการติดตามความคืบหน้าจาก Migration Tools หลายตัว บริการใดสองข้อเหมาะ",
    "AWS Migration Hub|AWS SCT|AWS Application Discovery Service|AWS DMS|AWS Migration Evaluator",
    "0,2",
    "Application Discovery Service เก็บ Inventory และ Dependencies ก่อนย้าย ส่วน Migration Hub รวมการติดตามสถานะการย้ายจากหลายเครื่องมือ"
  ],
  [
    "1.3",
    "A company replaces a self-managed MySQL server with Amazon RDS while keeping most application logic unchanged. Which migration strategy BEST describes the change?",
    "บริษัทเปลี่ยน MySQL Server ที่ดูแลเองเป็น Amazon RDS โดยแก้ Application Logic เพียงเล็กน้อย เป็น Migration Strategy ใด",
    "Rehost|Refactor|Replatform|Retire",
    "2",
    "Replatform ย้ายพร้อมปรับบางส่วนไปใช้ Managed Platform เช่น RDS โดยไม่ยกเครื่อง Architecture ต่างจาก Rehost และ Refactor"
  ],
  [
    "1.4",
    "A finance team wants compute expenses to follow seasonal demand rather than buying hardware for the highest peak. Which cost concept is central?",
    "ทีม Finance ต้องการให้ค่า Compute เปลี่ยนตาม Seasonal Demand แทนซื้อ Hardware รองรับ Peak สูงสุด แนวคิดค่าใช้จ่ายใดเป็นหลัก",
    "Capital expenditure|Variable expense|Economies of scale|Consolidated billing",
    "1",
    "Variable expense เปลี่ยนตามการใช้จริง แทน Capital expenditure ที่ซื้อ Hardware ก้อนใหญ่ล่วงหน้า"
  ],
  [
    "1.4",
    "An organization measures EC2 utilization and moves oversized workloads to smaller instances. What is this practice called?",
    "องค์กรดู EC2 Utilization แล้วเปลี่ยน Workloads ที่ใช้ Instance ใหญ่เกินไปให้เล็กลง แนวทางนี้เรียกว่าอะไร",
    "Rightsizing|Elasticity|Economies of scale|Consolidated billing",
    "0",
    "Rightsizing คือปรับขนาด Resources ให้เหมาะกับ Usage ปัจจุบัน ไม่ใช่ Elasticity ที่ปรับจำนวนตาม Demand อัตโนมัติ"
  ],
  [
    "1.4",
    "A manufacturer buys server racks and network equipment upfront rather than renting compute by the hour. Which expense category describes this purchase?",
    "ผู้ผลิตซื้อ Server Racks และ Network Equipment ด้วยเงินก้อนล่วงหน้า แทนการเช่า Compute รายชั่วโมง เป็นค่าใช้จ่ายประเภทใด",
    "Capital expenditure|Variable expense|Pay-as-you-go|Rightsizing",
    "0",
    "Capital expenditure คือเงินลงทุนซื้อ Physical Equipment ล่วงหน้า ส่วน Variable expense เปลี่ยนตามการใช้บริการ"
  ],
  [
    "1.4",
    "AWS purchases infrastructure at a huge scale so the unit cost is lower than for most individual companies. What principle explains this?",
    "AWS จัดซื้อ Infrastructure ปริมาณมหาศาลจนต้นทุนต่อหน่วยต่ำกว่าองค์กรส่วนใหญ่ เป็นหลักการใด",
    "Pay-as-you-go|Economies of scale|Rightsizing|Agility",
    "1",
    "Economies of scale ทำให้ต้นทุนต่อหน่วยลดลงจากการดำเนินงานขนาดใหญ่ ต่างจาก Pay-as-you-go ที่เป็นวิธีคิดค่าบริการ"
  ]
]);
})();
