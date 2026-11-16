(() => {
  const rows = window.LOCAL_SET_06_ROWS = window.LOCAL_SET_06_ROWS || [];
  rows.push(...[
  [
    "1.1",
    "An independent developer runs experiments for only three afternoons per month and wants compute charges to stop once each experiment is finished. Which cloud economic benefit fits best?",
    "นักพัฒนาอิสระทดลองระบบเพียงสามบ่ายต่อเดือนและอยากหยุดค่า Compute หลังจบทดลองแต่ละครั้ง ประโยชน์ด้านเศรษฐศาสตร์ Cloud ใดตรงที่สุด",
    "Elasticity|Pay-as-you-go|Scalability|Agility",
    "1",
    "Pay-as-you-go คิดค่าใช้จ่ายตามการใช้ Compute จริง; Agility เน้นเริ่มทดลองได้เร็วและ Elasticity เน้นปรับ Capacity ตามโหลด"
  ],
  [
    "1.1",
    "A subscription platform expects a sustained tenfold increase in customers over the next two years and needs an architecture that can handle the growth. Which quality is being described?",
    "Subscription Platform คาดว่าลูกค้าจะเพิ่มสิบเท่าในสองปีและต้องออกแบบ Architecture ให้รองรับการเติบโต คุณสมบัติใดตรงที่สุด",
    "Scalability|Elasticity|High availability|Fault tolerance",
    "0",
    "Scalability คือความสามารถขยายรองรับ Workload ที่โตระยะยาว; Elasticity เน้นเพิ่มลด Capacity ตาม Demand ในแต่ละช่วง"
  ],
  [
    "1.1",
    "A software vendor wants customers in North America and Asia to access deployments near their locations, without owning overseas data centers. Which benefit matters most?",
    "ผู้ขาย Software ต้องการ Deploy ใกล้ลูกค้าในอเมริกาเหนือและเอเชียโดยไม่เป็นเจ้าของ Data Center ต่างประเทศ ประโยชน์ใดสำคัญที่สุด",
    "Global reach|Multi-AZ deployment|Durability|Reliability",
    "0",
    "Global reach อาศัย AWS Global Infrastructure ให้ Deploy ใกล้ผู้ใช้ได้หลายภูมิภาค ไม่ใช่ Multi-AZ ซึ่งเน้น Failure Isolation ภายใน Region"
  ],
  [
    "1.1",
    "A media portal needs users to keep reaching its site when one Availability Zone is down, and it must separately preserve uploaded media against storage-component loss. Which TWO qualities directly match? (Select TWO.)",
    "Media Portal ต้องให้ผู้ใช้เข้าเว็บได้แม้ AZ หนึ่งล่ม และต้องรักษา Uploaded Media ไม่ให้สูญหายเมื่อ Storage Component เสีย ข้อใดสองคุณสมบัติตรงงาน",
    "High availability|Scalability|Durability|Agility|Pay-as-you-go",
    "0,2",
    "High availability เน้นให้ Service พร้อมใช้งานเมื่อ AZ มีปัญหา ส่วน Durability เน้นรักษาข้อมูลให้ไม่สูญหาย"
  ],
  [
    "1.2",
    "A security architect designs access controls, encryption, and incident protection for customer data. Which Well-Architected pillar is the focus?",
    "Security Architect ออกแบบ Access Controls, Encryption และ Incident Protection สำหรับข้อมูลลูกค้า กำลังเน้น Pillar ใด",
    "Reliability|Security|Operational Excellence|Cost Optimization",
    "1",
    "Security Pillar มุ่งปกป้องข้อมูลและ Workloads เช่น IAM/Encryption ต่างจาก Reliability ที่เน้น Recovery"
  ],
  [
    "1.2",
    "A company must rehearse recovery from a regional outage and also standardize its incident-response runbooks. Which TWO pillars address these separate concerns? (Select TWO.)",
    "บริษัทต้องซ้อม Recovery เมื่อ Region มีปัญหาและต้องทำ Incident-response Runbooks ให้เป็นมาตรฐาน ข้อใดสอง Pillars ตอบโจทย์",
    "Security|Reliability|Sustainability|Operational Excellence|Performance Efficiency",
    "1,3",
    "Reliability ครอบคลุม Disaster Recovery Testing ส่วน Operational Excellence ครอบคลุม Runbooks และการปรับปรุงกระบวนการ Incident"
  ],
  [
    "1.2",
    "A service meets its uptime goal but API responses are too slow. The team selects a more suitable instance architecture to improve throughput. Which pillar is most relevant?",
    "Service ทำ Uptime ตามเป้าแต่ API ตอบช้า ทีมเลือก Instance Architecture ใหม่เพื่อเพิ่ม Throughput Pillar ใดตรงที่สุด",
    "Cost Optimization|Operational Excellence|Performance Efficiency|Reliability",
    "2",
    "Performance Efficiency เน้นเลือกและปรับทรัพยากรเพื่อให้ได้ Latency/Throughput เป้าหมาย ไม่ใช่เพียง Availability"
  ],
  [
    "1.2",
    "An organization measures its cloud workload's energy efficiency and removes redundant computing to meet environmental impact goals. Which pillar guides it?",
    "องค์กรวัด Energy Efficiency ของ Cloud Workload และลด Compute ที่ซ้ำซ้อนเพื่อให้ถึงเป้าหมายผลกระทบสิ่งแวดล้อม Pillar ใดตรงที่สุด",
    "Cost Optimization|Performance Efficiency|Sustainability|Reliability",
    "2",
    "Sustainability เน้นลด Environmental Footprint และการใช้พลังงาน แม้อาจลดค่าใช้จ่ายด้วย"
  ],
  [
    "1.3",
    "After an application inventory review, a firm decides a discontinued HR tool has no users and should be decommissioned instead of migrated. Which migration strategy applies?",
    "หลัง Review Inventory บริษัทพบ HR Tool ที่ไม่มีผู้ใช้แล้วและตัดสินใจปิดถาวรแทนการย้าย เป็น Migration Strategy ใด",
    "Retain|Rehost|Retire|Replatform",
    "2",
    "Retire หมายถึง Decommission Application ที่เลิกใช้แล้ว ส่วน Retain คือเก็บไว้ไม่ย้ายในตอนนี้"
  ],
  [
    "1.3",
    "A legacy banking component cannot move to the cloud this year because of its hardware dependency, so the company keeps it in its data center. Which strategy describes the decision?",
    "Banking Component รุ่นเก่าย้าย Cloud ไม่ได้ปีนี้เพราะผูก Hardware จึงเก็บใน Data Center ต่อไป เป็น Migration Strategy ใด",
    "Rehost|Retain|Retire|Refactor",
    "1",
    "Retain คือคง Workload ไว้ที่เดิมหรือเลื่อน Migration ออกไป ไม่ใช่ Retire ที่เลิกใช้ระบบ"
  ],
  [
    "1.3",
    "A migration team wants to track progress across applications in a central dashboard and use a service to replicate and move source servers to AWS. Which TWO tools meet these distinct needs? (Select TWO.)",
    "ทีม Migration ต้องติดตาม Progress ของหลาย Applications ใน Central Dashboard และต้องใช้ Service เพื่อ Replicate/Y้าย Servers ไป AWS ข้อใดสอง Services ตรงงาน",
    "AWS Application Migration Service|AWS Migration Hub|AWS Migration Evaluator|AWS DMS|AWS SCT",
    "0,1",
    "Migration Hub ใช้ดู Migration Progress จากส่วนกลาง ส่วน Application Migration Service ใช้ Replicate และย้าย Servers จริง"
  ],
  [
    "1.3",
    "During migration, a software company moves its self-managed SQL database to a managed relational service, with only minor connection changes in the application. Which strategy is being used?",
    "ระหว่าง Migration บริษัท Software เปลี่ยน SQL Database ที่ดูแลเองไป Managed Relational Service โดยแก้ Application Connections เล็กน้อย ใช้ Strategy ใด",
    "Replatform|Rehost|Refactor|Retain",
    "0",
    "Replatform ปรับส่วนของ Platform เพื่อใช้ Managed Service โดยคง Architecture หลัก ส่วน Refactor ปรับสถาปัตยกรรมมาก"
  ],
  [
    "1.4",
    "A manufacturer buys physical servers before launching a product and depreciates those servers over several years. Which expense category describes the purchase?",
    "บริษัทผู้ผลิตซื้อ Physical Servers ก่อนเปิดสินค้าและคิดค่าเสื่อมหลายปี ค่าใช้จ่ายนี้จัดเป็นแบบใด",
    "Capital expenditure|Variable expense|Pay-as-you-go|Economies of scale",
    "0",
    "Capital expenditure คือเงินลงทุนซื้อ Assets ล่วงหน้า ต่างจาก Cloud Variable Expense ที่ขึ้นลงตาม Usage"
  ],
  [
    "1.4",
    "A cost report shows an EC2 instance with 3% average CPU and almost no network activity for weeks. The team chooses a smaller appropriate instance. Which practice is this?",
    "Cost Report พบ EC2 ใช้ CPU เฉลี่ย 3% และมี Network Activity น้อยหลายสัปดาห์ ทีมเลือก Instance เล็กลงให้เหมาะกับงาน เป็นวิธีใด",
    "Elasticity|Economies of scale|Rightsizing|Scalability",
    "2",
    "Rightsizing ลดหรือเปลี่ยนขนาด Resource ให้ตรง Usage ที่วัดได้ ไม่ใช่ Auto Scale ตาม Peak Traffic"
  ],
  [
    "1.4",
    "A retailer wants to avoid purchasing peak-capacity hardware and also benefit from the provider's lower unit costs gained from operating at enormous scale. Which TWO benefits apply? (Select TWO.)",
    "ร้านค้าต้องการไม่ซื้อ Hardware เผื่อ Peak Load ล่วงหน้าและต้องการประโยชน์จากต้นทุนต่อหน่วยต่ำของ Cloud Provider ที่มี Scale ใหญ่มาก ข้อใดสองแนวคิดตรงงาน",
    "Capital expenditure|Pay-as-you-go|Rightsizing|Economies of scale|High availability",
    "1,3",
    "Pay-as-you-go ลดภาระซื้อ Hardware ล่วงหน้าและจ่ายตามใช้ ส่วน Economies of scale อธิบายต้นทุนต่อหน่วยที่ต่ำจาก Provider ที่ดำเนินงานขนาดใหญ่"
  ],
  [
    "1.4",
    "A company's spending moves from a fixed hardware purchase budget to recurring charges that rise and fall with consumption. Which cost classification describes the new spending?",
    "ต้นทุนบริษัทเปลี่ยนจากงบซื้อ Hardware คงที่เป็นค่าใช้จ่ายประจำที่ขึ้นลงตาม Consumption จัดเป็นต้นทุนชนิดใด",
    "Rightsizing|Economies of scale|Variable expense|Capital expenditure",
    "2",
    "Variable expense เปลี่ยนไปตาม Consumption; Capital expenditure คือการซื้อทรัพย์สินและลงทุนล่วงหน้า"
  ]
]);
})();
