(() => {
  const rows = window.LOCAL_SET_05_ROWS = window.LOCAL_SET_05_ROWS || [];
  rows.push(...[
  [
    "1.1",
    "A film studio can start a rendering experiment immediately when the director requests a change, instead of submitting a hardware purchase request. Which benefit is demonstrated?",
    "สตูดิโอเริ่มทดลอง Render แบบใหม่ได้ทันทีเมื่อผู้กำกับขอเปลี่ยน โดยไม่ต้องรออนุมัติซื้อเครื่อง แสดงประโยชน์ Cloud ใด",
    "Agility|Elasticity|Scalability|Pay-as-you-go",
    "0",
    "Agility เน้นความเร็วในการเริ่มทดลองและเปลี่ยนแปลง Workload โดยไม่ต้องรอจัดซื้อ Hardware; Elasticity ใช้กับ Capacity ตาม Demand"
  ],
  [
    "1.1",
    "During a livestream the number of viewers changes sharply each minute. The application increases and then decreases its instances automatically. Which property is being used?",
    "ระหว่าง Livestream ผู้ชมเพิ่มลดอย่างรวดเร็ว ระบบเพิ่มแล้วลดจำนวน Instances อัตโนมัติ คุณสมบัติใดถูกใช้อยู่",
    "High availability|Scalability|Elasticity|Rightsizing",
    "2",
    "Elasticity ปรับ Capacity ขึ้นลงตาม Demand จริง ส่วน Scalability คือความสามารถรองรับโหลดเพิ่ม ไม่จำเป็นต้องปรับลงอัตโนมัติ"
  ],
  [
    "1.1",
    "A new app is being introduced in Asia and Europe, and customers must reach nearby AWS infrastructure without the company constructing local data centers. Which benefit is the main enabler?",
    "แอปใหม่เปิดให้ลูกค้าในเอเชียและยุโรปใช้งานจากโครงสร้างพื้นฐาน AWS ใกล้ตัว โดยไม่ต้องสร้าง Data Center เอง ข้อใดเป็นประโยชน์หลัก",
    "Multi-AZ deployment|Global reach|Durability|High availability",
    "1",
    "Global reach ทำให้ Deploy Workload ใน AWS Regions ทั่วโลกใกล้ผู้ใช้ได้รวดเร็ว; Multi-AZ เน้น Availability ใน Region ไม่ใช่ขยายสู่หลายทวีป"
  ],
  [
    "1.1",
    "A retailer needs to start an online promotion rapidly and increase compute only while shoppers are active. Which TWO cloud attributes best address these different needs? (Select TWO.)",
    "ร้านค้าต้องเริ่มโปรโมชันออนไลน์อย่างรวดเร็วและเพิ่ม Compute เฉพาะตอนมีลูกค้าเข้ามามาก ข้อใดสองคุณสมบัติตอบโจทย์แยกกันนี้",
    "Agility|Durability|Fault tolerance|Elasticity|High availability",
    "0,3",
    "Agility ช่วยเปิด Environment ได้เร็ว ส่วน Elasticity เพิ่มและลด Compute Capacity ให้สอดคล้อง Traffic; Durability เน้นการเก็บข้อมูลไม่สูญหาย"
  ],
  [
    "1.2",
    "A ticketing platform must restore service within its defined recovery time after a deployment component fails. Which Well-Architected pillar addresses the recovery objective?",
    "ระบบขายตั๋วต้องกลับมาให้บริการภายใน Recovery Time ที่กำหนดเมื่อ Deployment Component เสีย Pillar ใดมุ่งตอบโจทย์นี้",
    "Operational Excellence|Reliability|Security|Performance Efficiency",
    "1",
    "Reliability มุ่งออกแบบให้ Workload ฟื้นตัวจาก Failure ตาม Recovery Objective ส่วน Operational Excellence เน้นขั้นตอนการทำงานและปรับปรุงกระบวนการ"
  ],
  [
    "1.2",
    "A developer wants both to reduce API response time and to stop paying for idle development compute. Which TWO pillars match those separate objectives? (Select TWO.)",
    "Developer ต้องการลด Response Time ของ API และหยุดค่าใช้จ่าย Compute สำหรับ Development ที่ไม่ใช้งาน ข้อใดสอง Pillars ที่ตรงเป้าหมาย",
    "Performance Efficiency|Reliability|Cost Optimization|Sustainability|Operational Excellence",
    "0,2",
    "Performance Efficiency เน้น Latency/Throughput ของทรัพยากร ส่วน Cost Optimization เน้นกำจัดค่าใช้จ่ายที่สูญเปล่า"
  ],
  [
    "1.2",
    "Following a production incident, the operations team makes runbooks clearer, improves change approvals, and automates recurring manual work. Which pillar is most closely aligned?",
    "หลัง Production Incident ทีม Ops ปรับ Runbooks ขั้นตอนอนุมัติ Change และ Automate งานซ้ำ ๆ นี่ตรงกับ Pillar ใดที่สุด",
    "Reliability|Cost Optimization|Operational Excellence|Security",
    "2",
    "Operational Excellence เน้นการปฏิบัติงาน เรียนรู้จาก Incident และปรับกระบวนการ; Reliability เน้น Recovery และการทนต่อ Failure"
  ],
  [
    "1.2",
    "A company reduces unnecessary stored copies of data specifically to lower the energy consumed by its workload. Which pillar is driving this decision?",
    "บริษัทลดสำเนาข้อมูลที่ไม่จำเป็นโดยมีจุดประสงค์หลักเพื่อลดพลังงานที่ Workload ใช้ Pillar ใดเป็นตัวขับเคลื่อน",
    "Sustainability|Performance Efficiency|Reliability|Cost Optimization",
    "0",
    "Sustainability มุ่งลดผลกระทบสิ่งแวดล้อมและการใช้พลังงาน ไม่ใช่เพียงลดค่าใช้จ่ายด้าน Infrastructure"
  ],
  [
    "1.3",
    "An organization moves a server-based payroll application to EC2 unchanged, retaining its operating system and application design. Which migration strategy is this?",
    "องค์กรย้าย Payroll Application ที่รันบน Server ไป EC2 โดยคง OS และ Application Design แทบทั้งหมด เป็น Migration Strategy ใด",
    "Replatform|Retain|Rehost|Refactor",
    "2",
    "Rehost คือ Lift-and-shift เปลี่ยนสถานที่รันแต่แก้โค้ดและ Architecture น้อยที่สุด; Replatform จะเปลี่ยนบางส่วนไป Managed Platform"
  ],
  [
    "1.3",
    "An insurance company rebuilds a large legacy application as independently deployable microservices while moving to AWS. Which approach describes this work?",
    "บริษัทประกันปรับ Legacy Application ขนาดใหญ่เป็น Microservices ที่ Deploy แยกกันได้ระหว่างย้ายขึ้น AWS เป็นแนวทางใด",
    "Replatform|Refactor|Retire|Rehost",
    "1",
    "Refactor เปลี่ยน Architecture ของแอปอย่างมีนัยสำคัญ ไม่ใช่ย้าย VM ตรง ๆ แบบ Rehost"
  ],
  [
    "1.3",
    "Before moving workloads, a team wants a dependency map of existing machines and a separate projected migration cost assessment. Which TWO services target those tasks? (Select TWO.)",
    "ก่อนย้าย Workload ทีมต้องการ Dependency Map ของเครื่องเดิม และรายงานประเมินต้นทุน Migration แยกต่างหาก ข้อใดสอง Services ที่ตรงงาน",
    "AWS Migration Hub|AWS Application Discovery Service|AWS Application Migration Service|AWS DMS|AWS Migration Evaluator",
    "1,4",
    "Application Discovery Service เก็บ Inventory/Dependency ของ Servers ส่วน Migration Evaluator ช่วยประเมินต้นทุนและสร้าง Business Case"
  ],
  [
    "1.3",
    "An e-commerce company replaces a self-managed relational database with RDS during migration but leaves application behavior nearly unchanged. Which 7R strategy is the closest match?",
    "บริษัท E-commerce เปลี่ยน Relational Database ที่ดูแลเองเป็น RDS ระหว่าง Migration แต่คงพฤติกรรมแอปแทบเดิม จัดเป็น 7R ใด",
    "Refactor|Rehost|Replatform|Retain",
    "2",
    "Replatform ปรับ Platform บางส่วนเพื่อใช้ Managed Service โดยไม่จำเป็นต้อง Re-architect Application"
  ],
  [
    "1.4",
    "A company moves from purchasing servers up front to receiving a fluctuating bill based on actual cloud use. Which cost model is illustrated?",
    "บริษัทเปลี่ยนจากซื้อ Server ล่วงหน้าเป็นบิล Cloud ที่เปลี่ยนตามการใช้งานจริง นี่คือต้นทุนแบบใด",
    "Economies of scale|Capital expenditure|Variable expense|Rightsizing",
    "2",
    "Variable expense ผันแปรตาม Usage ของ Cloud ส่วน Capital expenditure คือการลงทุนซื้อ Physical Assets ล่วงหน้า"
  ],
  [
    "1.4",
    "A cloud provider can buy servers and networking equipment in large volumes and offer lower unit costs to customers. What explains this economic advantage?",
    "ผู้ให้บริการ Cloud ซื้อ Server และ Network Equipment จำนวนมากจึงมีต้นทุนต่อหน่วยต่ำกว่า แนวคิดใดอธิบายข้อได้เปรียบนี้",
    "Rightsizing|Economies of scale|Pay-as-you-go|Capital expenditure",
    "1",
    "Economies of scale ทำให้ต้นทุนต่อหน่วยลดลงเมื่อดำเนินงานหรือจัดซื้อปริมาณมาก; Rightsizing คือเลือกขนาด Resource ให้พอดีกับโหลด"
  ],
  [
    "1.4",
    "A developer routinely leaves temporary EC2 environments running even after tests finish. Which TWO actions or principles directly reduce unnecessary compute expenses? (Select TWO.)",
    "Developer มักเปิด EC2 ทดสอบทิ้งไว้หลังงานเสร็จ ข้อใดสองแนวทางช่วยลดค่า Compute ส่วนเกินโดยตรง",
    "AWS Budgets|Pay-as-you-go|Consolidated billing|Rightsizing|Cost allocation tags",
    "1,3",
    "Pay-as-you-go ช่วยไม่จ่ายค่า Compute ที่หยุดใช้งาน และ Rightsizing เลือก Instance ที่ไม่ใหญ่เกินโหลด; Budgets แค่แจ้งเตือนค่าใช้จ่าย"
  ],
  [
    "1.4",
    "Monitoring shows a production database consistently uses only a small portion of its assigned memory and CPU. The team moves it to a smaller instance size. What practice is this?",
    "Metrics พบว่า Production Database ใช้ CPU และ Memory น้อยกว่าที่จัดสรรมากเป็นเวลานาน ทีมเปลี่ยนเป็น Instance เล็กลง เป็นแนวทางใด",
    "Elasticity|Rightsizing|Cost Optimization|Economies of scale",
    "1",
    "Rightsizing คือปรับ Size ให้เหมาะกับการใช้จริงจาก Metrics ส่วน Elasticity เน้นเพิ่มและลด Capacity ตาม Demand"
  ]
]);
})();
