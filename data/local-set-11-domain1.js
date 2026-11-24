(() => {
 const rows=window.LOCAL_SET_11_ROWS=window.LOCAL_SET_11_ROWS||[];
 rows.push(...[
  [
    "1.1",
    "A media startup can deliver a new feature to customers overseas this week without acquiring facilities in those countries. Which benefit BEST explains the geographical speed?",
    "Startup สื่อเปิด Feature ให้ลูกค้าต่างประเทศภายในสัปดาห์เดียว โดยไม่ต้องสร้างศูนย์ข้อมูลในประเทศเหล่านั้น ประโยชน์ใดเน้นความเร็วในการเข้าถึงตลาด",
    "Global reach|Agility|High availability|Elasticity",
    "0",
    "Global reach ช่วย Deploy ไปยัง AWS Regions ต่าง ๆ เพื่อให้บริการผู้ใช้ทั่วโลก โดยไม่ต้องสร้าง Data Center เอง ส่วน Agility เน้นความเร็วในการทดลองและเปลี่ยนแปลงงาน"
  ],
  [
    "1.1",
    "A live-streaming system adds resources during events and releases them once viewers leave. Which characteristic avoids paying for permanent peak capacity?",
    "ระบบ Livestream เพิ่มทรัพยากรตอนคนดูเยอะและลดลงเมื่อเลิกดู คุณสมบัติใดช่วยไม่ให้ต้องจัด Capacity เผื่อ Peak ถาวร",
    "Elasticity|Fault tolerance|Scalability|Rightsizing",
    "0",
    "Elasticity ปรับ Capacity เพิ่มหรือลดตาม Demand ที่ขึ้นลงระยะสั้น ส่วน Scalability คือความสามารถรองรับการเติบโต แต่ไม่ได้บอกว่าลดอัตโนมัติตาม Demand เสมอ"
  ],
  [
    "1.1",
    "A storage service is designed to keep a customer's records intact over many years, even when an individual storage component fails. Which property is emphasized?",
    "Storage Service ต้องรักษา Records ไม่ให้สูญหายในระยะยาว แม้อุปกรณ์บางชิ้นเสีย คุณสมบัติใดเป็นหัวใจหลัก",
    "Fault tolerance|Durability|High availability|Reliability",
    "1",
    "Durability วัดความคงอยู่ของข้อมูล ไม่ใช่ความพร้อมตอบ Request แบบ High availability หรือความสามารถประมวลผลต่อเมื่อ Node เสียแบบ Fault tolerance"
  ],
  [
    "1.2",
    "Which Well-Architected pillar specifically includes the design principle of replacing capacity forecasts with automated adjustment to demand?",
    "หลักการ Well-Architected ที่แนะนำไม่ให้เดา Capacity ล่วงหน้า แต่ปรับตาม Demand อยู่ใน Pillar ใด",
    "Reliability|Operational Excellence|Performance Efficiency|Cost Optimization",
    "0",
    "Stop guessing capacity เป็น Design Principle ภายใต้ Reliability เพื่อลดการเตรียม Capacity ผิด ส่วน Performance Efficiency เน้นการเลือก/ใช้ทรัพยากรให้ตอบ Performance Requirements"
  ],
  [
    "1.2",
    "A team wants repeatable deployment procedures and post-incident lessons to improve day-to-day operations. Which pillar owns these practices?",
    "ทีมต้องการขั้นตอน Deploy ที่ทำซ้ำได้และนำบทเรียนจาก Incident มาปรับปรุงการดำเนินงาน เป็น Pillar ใด",
    "Security|Reliability|Operational Excellence|Performance Efficiency",
    "2",
    "Operational Excellence เน้นการดำเนินงานแบบเป็นกระบวนการ Automation และปรับปรุงต่อเนื่อง ไม่ใช่เพียงบริการพร้อมใช้หรือความเร็วของระบบ"
  ],
  [
    "1.2",
    "An application must protect API tokens and sustain its latency target as traffic grows. Which TWO pillars correspond to these distinct requirements? (Select TWO.)",
    "Application ต้องปกป้อง API Tokens และรักษา Latency เมื่อ Traffic เติบโต ให้เลือกสอง Pillars ที่ตรงกับแต่ละเป้าหมาย",
    "Reliability|Security|Performance Efficiency|Operational Excellence|Cost Optimization",
    "1,2",
    "Security ครอบคลุมการปกป้อง Secrets และ Access ส่วน Performance Efficiency มุ่ง Latency/Throughput ตามเป้าหมาย เมื่อ Traffic เพิ่มขึ้น"
  ],
  [
    "1.2",
    "A team reduces unnecessary CPU use and also tracks energy-related impact of its workload. Which pillar is the most direct fit for the environmental objective?",
    "ทีมลด CPU ที่ใช้เกินจำเป็นและวัดผลกระทบด้านพลังงานของ Workload โดยมุ่งสิ่งแวดล้อมโดยตรง ควรเลือก Pillar ใด",
    "Performance Efficiency|Cost Optimization|Sustainability|Operational Excellence",
    "2",
    "Sustainability มุ่งลดผลกระทบด้านสิ่งแวดล้อมของ Workload ส่วน Cost Optimization มุ่งความคุ้มค่าด้านการใช้จ่าย แม้บางกิจกรรมให้ผลดีทั้งสองด้าน"
  ],
  [
    "1.3",
    "A manufacturer will replace its custom purchasing application with a subscription to an established SaaS product. Which migration decision is this?",
    "โรงงานเลิกใช้ Application ที่เขียนเองแล้วสมัคร SaaS สำเร็จรูปแทนทั้งหมด จัดเป็น Migration Strategy ใด",
    "Rehost|Repurchase|Replatform|Refactor",
    "1",
    "Repurchase หรือ Drop and Shop คือการแทนที่ระบบเดิมด้วย Commercial Software/SaaS ไม่ใช่แค่ย้าย VM หรือปรับ Platform ของระบบเดิม"
  ],
  [
    "1.3",
    "A cloud adoption committee is drafting organization-wide controls for expenditure approvals, risks, and policies. Which AWS CAF perspective is most directly concerned?",
    "คณะกรรมการ Cloud กำหนด Policies ควบคุมการอนุมัติค่าใช้จ่าย ความเสี่ยง และกฎองค์กร นี่เป็นมุมมองใดของ AWS CAF",
    "Governance Perspective|Business Perspective|People Perspective|Platform Perspective",
    "0",
    "Governance Perspective ของ AWS CAF ครอบคลุม Risk, Policies, Expenditure Controls และ Compliance ส่วน Business Perspective เน้น Business Outcomes และการลงทุน"
  ],
  [
    "1.3",
    "Before moving a legacy estate, a team wants to identify which servers communicate with each other and group applications accordingly. Which service assists with this discovery?",
    "ก่อน Migration ทีมต้องรู้ว่า Servers ตัวใดสื่อสารกัน เพื่อจัดกลุ่ม Applications และ Dependencies ควรใช้บริการใด",
    "AWS Application Discovery Service|AWS Migration Hub|AWS Migration Evaluator|AWS Application Migration Service",
    "0",
    "Application Discovery Service รวบรวม Server Inventory และ Dependencies เพื่อวางแผนย้าย แตกต่างจาก Migration Evaluator ที่เน้นข้อมูลสำหรับ Business Case/TCO"
  ],
  [
    "1.3",
    "Which TWO decisions match an application that must remain in the data center due to a contract and another application that nobody uses anymore? (Select TWO.)",
    "ระบบแรกต้องอยู่ Data Center ต่อไปตามสัญญา ส่วนระบบที่สองไม่มีใครใช้งานแล้ว ควรเลือก Migration Decisions สองข้อใด",
    "Retire|Retain|Rehost|Repurchase|Replatform",
    "0,1",
    "Retain เก็บระบบไว้ที่เดิมตามข้อจำกัด ส่วน Retire ยกเลิกระบบที่หมดความจำเป็น ไม่ใช่ย้ายระบบเก่าไป Cloud"
  ],
  [
    "1.4",
    "A company wants to reuse its existing licensed database software on EC2 when the vendor agreement permits it. Which concept applies?",
    "บริษัทต้องนำ License ของ Database ที่ซื้อไว้แล้วมาใช้บน EC2 ภายใต้เงื่อนไข Vendor ที่อนุญาต เรียกหลักการใด",
    "Bring Your Own License (BYOL)|Reserved Instances|Rightsizing|Consolidated billing",
    "0",
    "BYOL คือการนำ Software License ที่มีอยู่แล้วมาใช้ใน Cloud ตามสิทธิ์การใช้ License ไม่ใช่ Reserved Instances ซึ่งเป็น EC2 Pricing Commitment"
  ],
  [
    "1.4",
    "A finance manager counts power, facilities, hardware depreciation, staff effort, and support contracts when comparing on-premises with cloud. Which framework helps assess the full ownership cost?",
    "Finance รวมค่าไฟ สถานที่ ค่าเสื่อม Hardware บุคลากร และ Support เพื่อเทียบต้นทุน On-premises กับ Cloud แนวคิดการรวมต้นทุนทั้งหมดคืออะไร",
    "Capital expenditure|Total Cost of Ownership (TCO)|Economies of scale|Pay-as-you-go",
    "1",
    "TCO รวมต้นทุนทั้งหมดของการเป็นเจ้าของระบบทั้ง CapEx, ค่าใช้จ่ายดำเนินงาน, บุคลากรและ Facilities เพื่อประเมิน On-premises เทียบ Cloud"
  ],
  [
    "1.4",
    "An organization prefers bills that rise and fall with compute usage rather than purchasing fixed peak servers. What cost category does it move toward?",
    "องค์กรอยากให้บิลขึ้นลงตาม Compute Usage แทนการซื้อ Server รองรับ Peak แบบถาวร ค่าใช้จ่ายกำลังเปลี่ยนไปเป็นประเภทใด",
    "Variable expense|Fixed expense|Capital expenditure|Economies of scale",
    "0",
    "Variable expense เปลี่ยนตามการใช้ทรัพยากรจริง ต่างจาก CapEx ที่ลงทุนซื้อ Asset ล่วงหน้าและ Fixed expense ที่ไม่แปรตามการใช้ระยะสั้น"
  ],
  [
    "1.4",
    "A team identifies over-provisioned compute by comparing instance utilization with performance needs. Which action saves money without sacrificing required capacity?",
    "ทีมใช้ข้อมูล Utilization เทียบกับ Performance Requirements พบ EC2 ใหญ่เกินไป ควรทำสิ่งใดเพื่อลดต้นทุนโดยยังรองรับ Workload",
    "Pay-as-you-go|Economies of scale|Rightsizing|Global reach",
    "2",
    "Rightsizing เลือกประเภทและขนาดทรัพยากรให้พอดีกับ Workload ไม่ใช่ Economies of scale ซึ่งเกิดจากการดำเนินงานขนาดใหญ่ของผู้ให้บริการ"
  ],
  [
    "1.4",
    "An AWS provider spreads infrastructure purchasing across many customers to reduce the average cost of each compute unit. Which concept explains the pricing advantage?",
    "ผู้ให้บริการ Cloud รวมการซื้อ Infrastructure ขนาดใหญ่จากลูกค้าหลายราย ทำให้ต้นทุนต่อ Compute Unit ลดลง เรียกหลักการใด",
    "Pay-as-you-go|Economies of scale|Variable expense|Rightsizing",
    "1",
    "Economies of scale เป็นผลจากปริมาณการดำเนินงาน/จัดซื้อที่มาก ทำให้ต้นทุนต่อหน่วยต่ำลง ต่างจาก Pay-as-you-go ซึ่งเป็นรูปแบบการคิดเงินผู้ใช้"
  ]
]);
})();
