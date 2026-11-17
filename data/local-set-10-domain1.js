(() => {
  const rows=window.LOCAL_SET_10_ROWS=window.LOCAL_SET_10_ROWS||[];
  rows.push(...[
  [
    "1.1",
    "An online banking portal must be reachable most of the time and avoid prolonged downtime during infrastructure maintenance. Which cloud characteristic is MOST relevant?",
    "Internet Banking ต้องเปิดให้ใช้งานได้แทบตลอดและลด Downtime ระหว่าง Infrastructure Maintenance คุณสมบัติใดสำคัญที่สุด",
    "Durability|High availability|Elasticity|Agility",
    "1",
    "High availability เน้นให้บริการใช้งานได้ต่อเนื่องและลด Downtime ส่วน Durability เน้นไม่ให้ข้อมูลสูญหาย"
  ],
  [
    "1.1",
    "A startup can test a new customer-facing feature without waiting for hardware procurement approval. Which cloud advantage is the primary reason?",
    "Startup ทดลอง Feature ใหม่ได้ทันทีโดยไม่รอจัดซื้อ Hardware ข้อได้เปรียบของ Cloud ใดเป็นเหตุผลหลัก",
    "Economies of scale|Agility|Pay-as-you-go|Fault tolerance",
    "1",
    "Agility คือความรวดเร็วในการทดลองหรือ Release สิ่งใหม่ ส่วน Pay-as-you-go เน้นการคิดค่าใช้จ่ายตาม Usage"
  ],
  [
    "1.1",
    "A video application must add capacity during a one-day livestream and return to normal capacity afterward. Which feature describes this behavior?",
    "Video Application ต้องเพิ่ม Capacity ในวันที่มี Livestream และลดกลับเมื่อจบงาน พฤติกรรมนี้เรียกว่าอะไร",
    "Scalability|Elasticity|Reliability|Durability",
    "1",
    "Elasticity เพิ่มลด Capacity ตามการเปลี่ยน Demand ส่วน Scalability เน้นระบบรองรับการเติบโตโดยรวม"
  ],
  [
    "1.1",
    "A business wants to serve overseas users from nearby infrastructure while reducing downtime from a single location failure. Which TWO benefits are involved? (Select TWO.)",
    "บริษัทต้องการให้ผู้ใช้ต่างประเทศเข้า Service จาก Infrastructure ใกล้ตัว และลด Downtime เมื่อ Location หนึ่งมีปัญหา ประโยชน์ใดสองข้อเกี่ยวข้อง",
    "Global reach|High availability|Capital expenditure|Pay-as-you-go|Rightsizing",
    "0,1",
    "Global reach ช่วยให้กระจาย Workload ใกล้ลูกค้าต่างประเทศ ส่วน High availability ช่วยลดผลกระทบจาก Infrastructure Failure"
  ],
  [
    "1.2",
    "An organization wants to minimize the environmental effects of cloud infrastructure while meeting business requirements. Which Well-Architected pillar is targeted?",
    "องค์กรต้องการลดผลกระทบต่อสิ่งแวดล้อมจาก Cloud Infrastructure โดยยังรองรับ Business Requirements Pillar ใดถูกเน้น",
    "Cost Optimization|Sustainability|Reliability|Operational Excellence",
    "1",
    "Sustainability มุ่งลด Environmental Impact ส่วน Cost Optimization มุ่งค่าใช้จ่ายแม้บางการปรับปรุงช่วยได้ทั้งสอง"
  ],
  [
    "1.2",
    "A business wants to protect user credentials and achieve predictable response times during heavy traffic. Which TWO Well-Architected pillars are directly targeted? (Select TWO.)",
    "ธุรกิจต้องการปกป้อง User Credentials และทำให้ Response Times เป็นไปตามเป้าหมายแม้ Traffic สูง Pillars สองข้อใดตรง",
    "Security|Reliability|Performance Efficiency|Operational Excellence|Cost Optimization",
    "0,2",
    "Security ปกป้อง Identities/Credentials ส่วน Performance Efficiency เน้น Latency และ Throughput ตาม Target"
  ],
  [
    "1.2",
    "A team creates measurable service recovery objectives and regularly tests disaster recovery. Which pillar does this practice primarily support?",
    "ทีมกำหนด Service Recovery Objectives ที่วัดได้และทดสอบ Disaster Recovery เป็นประจำ ตรงกับ Pillar ใด",
    "Operational Excellence|Reliability|Performance Efficiency|Cost Optimization",
    "1",
    "Reliability เน้นความสามารถ Workload ฟื้นตัวหลัง Failure ส่วน Operational Excellence เน้นกระบวนการ Operations โดยรวม"
  ],
  [
    "1.2",
    "A product group reviews cloud spending and removes idle resources with no business value. Which pillar is central to this decision?",
    "ทีม Product ตรวจ Cloud Spending และลบ Idle Resources ที่ไม่สร้าง Business Value Pillar ใดเป็นหลัก",
    "Sustainability|Cost Optimization|Operational Excellence|Performance Efficiency",
    "1",
    "Cost Optimization เน้นลดค่าใช้จ่ายที่ไม่สร้าง Value ส่วน Sustainability เน้นลดผลกระทบสิ่งแวดล้อมโดยตรง"
  ],
  [
    "1.3",
    "A company copies an existing virtual machine-based application to EC2 and changes almost no application code. Which migration strategy is it using?",
    "บริษัท Copy Application จาก Virtual Machines เดิมขึ้น EC2 และแทบไม่แก้ Code เลย เป็น Migration Strategy ใด",
    "Replatform|Rehost|Refactor|Retain",
    "1",
    "Rehost คือ Lift-and-shift ย้ายแทบไม่แก้ Workload ส่วน Replatform เปลี่ยน Platform บางส่วน และ Refactor เปลี่ยน Architecture"
  ],
  [
    "1.3",
    "A company has two old internal systems: one remains on premises because of a contract, and the other is no longer used. Which TWO migration decisions apply? (Select TWO.)",
    "บริษัทมี Internal Systems เก่าสองตัว ตัวแรกต้องอยู่ On-premises เพราะสัญญา ส่วนอีกตัวไม่มีผู้ใช้แล้ว ควรใช้ Migration Decisions ใดสองข้อ",
    "Retain|Rehost|Retire|Replatform|Refactor",
    "0,2",
    "Retain คงระบบที่ยังจำเป็นไว้ On-premises และ Retire คือยกเลิกระบบที่ไม่มีการใช้งาน"
  ],
  [
    "1.3",
    "A cloud adoption program is evaluating skills, governance, and business alignment before moving any workloads. Which framework is relevant?",
    "โครงการ Cloud Adoption กำลังประเมิน Skills Governance และ Business Alignment ก่อนเริ่มย้าย Workloads ควรใช้ Framework ใด",
    "AWS Well-Architected Framework|AWS Cloud Adoption Framework|AWS Migration Hub|AWS SCT",
    "1",
    "AWS CAF ช่วยองค์กรวางมุมมองการเปลี่ยนผ่านทั้ง Business People Governance Platform ส่วน Well-Architected เน้นทบทวน Workload Design"
  ],
  [
    "1.3",
    "An IT team decides to modernize a monolithic application into separately deployable cloud-native components. Which migration strategy matches?",
    "ทีม IT ต้องการ Modernize Monolithic Application เป็น Cloud-native Components ที่ Deploy แยกกัน Strategy ใดตรง",
    "Rehost|Retain|Replatform|Refactor",
    "3",
    "Refactor เปลี่ยน Application Architecture มากพอเพื่อใช้ Cloud-native Patterns ไม่ใช่เพียงย้ายหรือเปลี่ยน Hosting Platform"
  ],
  [
    "1.4",
    "A CFO wants to stop buying oversized servers for forecast peaks and pay operational bills that vary by actual compute use. Which expense category results?",
    "CFO จะเลิกซื้อ Servers ขนาดใหญ่รับ Peak ล่วงหน้า แล้วจ่าย Operational Bills ที่เปลี่ยนตาม Compute Usage เป็น Expense Category ใด",
    "Capital expenditure|Variable expense|Economies of scale|Rightsizing",
    "1",
    "Variable expense เปลี่ยนตามการใช้งานและช่วยลดการลงทุนล่วงหน้า ส่วน CapEx คือซื้อทรัพย์สิน"
  ],
  [
    "1.4",
    "A team learns that moving from a large unused EC2 size to a smaller one can lower monthly costs without changing user experience. What is the action called?",
    "ทีมพบว่าลด EC2 Instance Size ที่ใช้เกินความจำเป็นช่วยลด Monthly Cost โดยไม่กระทบ User Experience การกระทำนี้คืออะไร",
    "Rightsizing|Economies of scale|Consolidated billing|High availability",
    "0",
    "Rightsizing ปรับ Resource Size ให้เหมาะกับ Workload ส่วน Economies of scale เกี่ยวกับ Cost per Unit จากขนาดการดำเนินงาน"
  ],
  [
    "1.4",
    "Which principle explains why AWS's very large infrastructure purchasing volume can yield lower per-unit costs?",
    "หลักการใดอธิบายว่าการจัดซื้อ Infrastructure ปริมาณมากของ AWS ช่วยลดต้นทุนต่อหน่วยได้",
    "Capital expenditure|Economies of scale|Pay-as-you-go|Elasticity",
    "1",
    "Economies of scale ทำให้ Unit Costs ต่ำลงเมื่อดำเนินงานในขนาดใหญ่ Pay-as-you-go เป็นวิธีคิดค่าบริการกับลูกค้า"
  ],
  [
    "1.4",
    "A finance team compares buying new physical servers with consumption-based cloud billing. Which term refers specifically to the upfront purchase?",
    "ทีม Finance เปรียบเทียบการซื้อ Physical Servers ใหม่กับ Cloud Billing ที่คิดตามการใช้ คำใดเรียกเงินซื้อเครื่องล่วงหน้า",
    "Variable expense|Pay-as-you-go|Capital expenditure|Rightsizing",
    "2",
    "Capital expenditure เป็นเงินลงทุนซื้อ Asset ล่วงหน้า ต่างจาก Variable expense ที่เปลี่ยนตาม Consumption"
  ]
]);
})();
