(() => {
  const rows = window.LOCAL_SET_07_ROWS = window.LOCAL_SET_07_ROWS || [];
  rows.push(...[
  [
    "1.1",
    "A small bank anticipates a sustained increase in daily transactions as it gains new branches. It needs an application that can grow its processing capacity without a fundamental redesign. What quality matters most?",
    "ธนาคารขนาดเล็กคาดว่า Transactions รายวันจะเพิ่มต่อเนื่องจากการขยายสาขา ต้องการ Application ที่ขยาย Processing Capacity ได้โดยไม่ Redesign ใหม่ คุณสมบัติใดสำคัญ",
    "Elasticity|Scalability|Agility|Durability",
    "1",
    "Scalability ช่วยให้ Architecture รองรับจำนวน Transactions ที่เพิ่มต่อเนื่อง; Elasticity เน้นเพิ่มลด Capacity ตาม Demand ช่วงสั้น"
  ],
  [
    "1.1",
    "A startup needs to launch and discard multiple proof-of-concept environments in the same working day without purchasing servers. Which cloud advantage is illustrated?",
    "Startup ต้อง Launch และเลิกใช้ Proof-of-concept Environments หลายชุดในวันทำงานเดียวโดยไม่ต้องซื้อ Servers แสดงข้อดี Cloud ใด",
    "Global reach|Agility|Pay-as-you-go|High availability",
    "1",
    "Agility คือความเร็วในการ Provision/ทดลอง/เปลี่ยนแปลง Workload; Pay-as-you-go เน้นรูปแบบคิดค่าใช้จ่าย"
  ],
  [
    "1.1",
    "An application keeps serving requests during an instance failure by shifting traffic to remaining healthy instances. Which characteristic is being highlighted?",
    "Application ยังรับ Requests ต่อได้ระหว่าง Instance ตัวหนึ่งล้มเหลว โดยส่ง Traffic ไป Healthy Instances ที่เหลือ แสดงคุณสมบัติใดเด่นที่สุด",
    "Durability|Fault tolerance|Elasticity|Scalability",
    "1",
    "Fault tolerance มุ่งให้ระบบทำงานต่อเมื่อ Component ล้มเหลว; Durability มุ่งข้อมูลไม่สูญหาย"
  ],
  [
    "1.1",
    "A company must quickly make an existing application available to new overseas customers and scale capacity up and down for international seasonal demand. Which TWO cloud benefits address these goals? (Select TWO.)",
    "บริษัทต้องให้ลูกค้าต่างประเทศใช้งาน Application ได้อย่างรวดเร็วและเพิ่มลด Capacity ตาม Seasonal Demand ระหว่างประเทศ ข้อใดสอง Cloud Benefits ตอบโจทย์",
    "Elasticity|Multi-AZ deployment|Global reach|Fault tolerance|Durability",
    "0,2",
    "Global reach ช่วย Deploy ใกล้ผู้ใช้ต่างประเทศ ส่วน Elasticity เพิ่มลด Capacity ตาม Seasonal Demand; Multi-AZ ไม่ใช่การขยายไปต่างประเทศ"
  ],
  [
    "1.2",
    "A design review requires that encryption, identity verification, and protection of customer records be included from the start. Which Well-Architected pillar is primarily tested?",
    "Design Review กำหนด Encryption, Identity Verification และการป้องกัน Customer Records ตั้งแต่เริ่ม Pillar ใดเป็นหลัก",
    "Security|Reliability|Operational Excellence|Performance Efficiency",
    "0",
    "Security Pillar เน้นปกป้อง Data/Systems, Identity และ Encryption ไม่ใช่การกู้ระบบเมื่อ Failures"
  ],
  [
    "1.2",
    "An IoT platform must recover after a component outage and meet a strict event-processing latency target. Which TWO pillars are most directly addressed? (Select TWO.)",
    "IoT Platform ต้อง Recover หลัง Component Outage และต้องผ่าน Event-processing Latency Target ที่เข้มงวด ข้อใดสอง Pillars ตรงที่สุด",
    "Reliability|Cost Optimization|Performance Efficiency|Operational Excellence|Sustainability",
    "0,2",
    "Reliability เน้น Recover/Availability หลัง Failure ส่วน Performance Efficiency เน้น Latency/Throughput Targets"
  ],
  [
    "1.2",
    "Following repeated failed deployments, a team introduces automated approval stages and learns from release postmortems. Which pillar best describes the improvements?",
    "หลัง Deployment ล้มเหลวซ้ำ ทีมเพิ่ม Automated Approval Stages และเรียนรู้จาก Release Postmortems การปรับปรุงนี้ตรง Pillar ใด",
    "Security|Operational Excellence|Cost Optimization|Reliability",
    "1",
    "Operational Excellence เน้นวิธีดำเนินงานและการปรับปรุงต่อเนื่องจาก Lessons Learned; Reliability เน้น Recovery Targets"
  ],
  [
    "1.2",
    "A team identifies unnecessary duplicate instances and shuts them down to reduce spending, while service performance remains adequate. Which pillar is the primary driver?",
    "ทีมพบ Duplicate Instances ที่ไม่จำเป็นและปิดเพื่อลดค่าใช้จ่าย โดย Service Performance ยังพอเพียง Pillar ใดเป็นแรงขับหลัก",
    "Cost Optimization|Sustainability|Performance Efficiency|Reliability",
    "0",
    "Cost Optimization เน้นลด Waste และเลือกค่าใช้จ่ายที่เหมาะกับคุณค่าของ Workload; Sustainability เน้นผลกระทบสิ่งแวดล้อม"
  ],
  [
    "1.3",
    "An independent software vendor cannot modify an old application, so it copies the virtual-machine workload onto EC2 with few changes. Which migration strategy matches?",
    "ผู้ขาย Software แก้ Application เก่าไม่ได้ จึง Copy Virtual-machine Workload ขึ้น EC2 โดยเปลี่ยนแปลงน้อย เป็น Strategy ใด",
    "Refactor|Rehost|Replatform|Retain",
    "1",
    "Rehost เป็น Lift-and-shift ย้าย Workload แทบไม่เปลี่ยน Architecture; Replatform ปรับบางส่วนไปใช้ Platform ใหม่"
  ],
  [
    "1.3",
    "During modernization, an organization breaks its single large application into separately deployable services connected with events. Which strategy is described?",
    "ระหว่าง Modernization องค์กรแยก Application ขนาดใหญ่เป็น Services ที่ Deploy แยกกันและเชื่อมด้วย Events เป็น Strategy ใด",
    "Rehost|Refactor|Retire|Replatform",
    "1",
    "Refactor เปลี่ยน Code/Architecture เพื่อใช้ Cloud-native Patterns อย่าง Microservices; Replatform ไม่ปรับ Architecture มากขนาดนี้"
  ],
  [
    "1.3",
    "A database migration moves data between two database engines and requires conversion of incompatible schemas. Which TWO AWS services address these parts of the migration? (Select TWO.)",
    "Database Migration ต้องย้าย Data ระหว่าง Database Engines สองตัวและต้อง Convert Incompatible Schemas ข้อใดสอง Services ตอบโจทย์คนละส่วน",
    "AWS SCT|AWS Application Migration Service|AWS DMS|AWS Migration Hub|AWS Migration Evaluator",
    "0,2",
    "AWS SCT ใช้ Schema Conversion สำหรับ Heterogeneous Database Migrations ส่วน AWS DMS ย้าย/Replicate Data"
  ],
  [
    "1.3",
    "A business-critical legacy app must remain at the company's facility this year because its licensing cannot yet be moved. Which 7R decision describes this?",
    "Legacy Application สำคัญต้องอยู่ที่สำนักงานต่อในปีนี้เพราะ License ยังย้ายไม่ได้ เป็นการตัดสินใจตาม 7R ใด",
    "Retire|Retain|Rehost|Replatform",
    "1",
    "Retain เก็บ Workload ไว้ที่เดิมและไม่ย้ายในรอบนี้; Retire คือปิดใช้ Application ถาวร"
  ],
  [
    "1.4",
    "A manufacturer spends a large amount once to buy and own the server hardware for a new factory. Which economic term applies to the purchase?",
    "โรงงานใช้เงินก้อนซื้อและเป็นเจ้าของ Server Hardware สำหรับโรงงานใหม่ นี่เป็น Economic Term ใด",
    "Variable expense|Capital expenditure|Economies of scale|Pay-as-you-go",
    "1",
    "Capital expenditure คือการซื้อสินทรัพย์ล่วงหน้าขององค์กร; Variable expense เปลี่ยนตาม Usage"
  ],
  [
    "1.4",
    "An AWS provider purchases enormous amounts of network capacity and passes part of its lower unit cost to customers. Which economic principle explains this?",
    "ผู้ให้บริการ Cloud ซื้อ Network Capacity จำนวนมากและส่งต่อประโยชน์จากต้นทุนต่อหน่วยที่ลดลงให้ลูกค้า เป็นหลักเศรษฐศาสตร์ใด",
    "Rightsizing|Pay-as-you-go|Economies of scale|Variable expense",
    "2",
    "Economies of scale คือการที่ต้นทุนต่อหน่วยลดเมื่อจัดซื้อและดำเนินงานที่ Scale ใหญ่"
  ],
  [
    "1.4",
    "An engineering team will choose smaller instance sizes based on utilization and stop nonproduction compute whenever the lab is closed. Which TWO cost practices are being combined? (Select TWO.)",
    "ทีม Engineer จะเลือกขนาด Instance ให้เล็กลงตาม Utilization และปิด Nonproduction Compute เมื่อ Lab ปิด ข้อใดสอง Cost Practices ใช้ร่วมกัน",
    "Rightsizing|AWS Budgets|Consolidated billing|Pay-as-you-go|Economies of scale",
    "0,3",
    "Rightsizing ทำให้ขนาด Instance พอดีกับงาน ส่วน Pay-as-you-go ลดค่า Compute จากชั่วโมงที่หยุดใช้; Budgets แค่แจ้งเตือน"
  ],
  [
    "1.4",
    "A cost accountant compares buying physical equipment once with variable invoices tied to cloud consumption. What category describes the cloud invoices?",
    "นักบัญชีเปรียบเทียบการซื้อ Physical Equipment ครั้งเดียวกับใบแจ้งหนี้ Cloud ที่เปลี่ยนตาม Consumption ค่า Cloud นี้จัดเป็นประเภทใด",
    "Variable expense|Capital expenditure|Rightsizing|Economies of scale",
    "0",
    "Variable expense เปลี่ยนตาม Usage; Capital expenditure คือการลงทุนซื้อสินทรัพย์"
  ]
]);
})();
