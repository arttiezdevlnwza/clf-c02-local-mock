(() => {
  const rows=window.LOCAL_SET_09_ROWS=window.LOCAL_SET_09_ROWS||[];
  rows.push(...[
  [
    "1.1",
    "A subscription business expects the number of paying users to triple steadily over the next two years. It wants its application to support that growth. Which property matters most?",
    "ธุรกิจ Subscription คาดว่าผู้ใช้จะเพิ่มขึ้นสามเท่าต่อเนื่องในสองปี และต้องการให้ Application รองรับการเติบโต คุณสมบัติใดสำคัญที่สุด",
    "Elasticity|Scalability|Agility|Durability",
    "1",
    "Scalability คือความสามารถขยาย Capacity รองรับ Workload ที่เติบโตต่อเนื่อง ส่วน Elasticity เน้นปรับขึ้นลงตาม Demand ระยะสั้น"
  ],
  [
    "1.1",
    "A medical service must continue handling requests when one processing node fails unexpectedly. Which characteristic BEST matches this goal?",
    "บริการทางการแพทย์ต้องรับ Requests ต่อได้แม้ Processing Node ตัวหนึ่งหยุดทำงานกะทันหัน คุณสมบัติใดตรงที่สุด",
    "High availability|Fault tolerance|Durability|Pay-as-you-go",
    "1",
    "Fault tolerance เน้นทำงานต่อได้เมื่อ Component หนึ่ง Fail ต่างจาก High availability ที่เน้นลด Downtime โดยรวมและ Durability ที่เน้นรักษาข้อมูล"
  ],
  [
    "1.1",
    "A company wants to avoid owning equipment and instead pay only for the cloud resources it actually consumes. Which financial cloud benefit is emphasized?",
    "บริษัทไม่อยากเป็นเจ้าของ Hardware และอยากจ่ายตาม Cloud Resources ที่ใช้จริง ประโยชน์ด้านการเงินใดตรงที่สุด",
    "Economies of scale|Capital expenditure|Pay-as-you-go|High availability",
    "2",
    "Pay-as-you-go ผูกค่าบริการกับ Usage ขณะที่ Economies of scale คือประโยชน์จากต้นทุนต่อหน่วยของผู้ให้บริการขนาดใหญ่"
  ],
  [
    "1.1",
    "A startup wants fast deployment near customers abroad and the ability to release experiments quickly. Which TWO cloud benefits apply? (Select TWO.)",
    "Startup อยาก Deploy ใกล้ลูกค้าต่างประเทศเร็ว ๆ และทดลอง Releases ได้รวดเร็ว Cloud Benefits สองข้อใดช่วยตรง",
    "Global reach|Durability|Scalability|Agility|High availability",
    "0,3",
    "Global reach ทำให้กระจายบริการใกล้ลูกค้าต่างประเทศได้ และ Agility ลดเวลาจาก Idea ไปสู่การทดลองจริง"
  ],
  [
    "1.2",
    "A company chooses an EC2 instance family based on memory needs so it can reach its throughput target without excess capacity. Which pillar is most relevant?",
    "บริษัทเลือก EC2 Instance Family จาก Memory Requirements เพื่อให้ Throughput ตามเป้าหมายโดยไม่ใช้ Capacity เกินจำเป็น Pillar ใดเด่น",
    "Reliability|Performance Efficiency|Operational Excellence|Sustainability",
    "1",
    "Performance Efficiency เน้นเลือกทรัพยากรให้ได้ Performance ตามความต้องการ ส่วน Sustainability เน้นผลกระทบสิ่งแวดล้อม"
  ],
  [
    "1.2",
    "An organization practices backup restoration and failover ahead of expected outages. Which pillar guides this work?",
    "องค์กรซ้อม Restore Backups และ Failover ก่อนเกิด Outages ตรงกับ Well-Architected Pillar ใด",
    "Reliability|Security|Cost Optimization|Operational Excellence",
    "0",
    "Reliability ให้ Workloads ทำงานและฟื้นจาก Failures ได้ ส่วน Security มุ่งป้องกันข้อมูลและสิทธิ์"
  ],
  [
    "1.2",
    "A board wants to reduce unnecessary spending and strengthen identity controls. Which TWO pillars address these separate goals? (Select TWO.)",
    "คณะกรรมการต้องการลดค่าใช้จ่ายที่ไม่จำเป็นและเพิ่มความเข้มงวดการจัดการ Identity โดยเป็นสองเป้าหมายแยกกัน Pillars ใดเกี่ยวข้อง",
    "Security|Reliability|Cost Optimization|Sustainability|Operational Excellence",
    "0,2",
    "Cost Optimization ลด Waste ทางการเงิน ส่วน Security ใช้ Identity Controls และ Least Privilege เพื่อปกป้องระบบ"
  ],
  [
    "1.2",
    "After outages caused by manual release errors, a platform team improves change procedures and operational playbooks. Which pillar addresses the process improvement?",
    "หลัง Outage ที่เกิดจากการ Release ด้วยมือ ทีม Platform ปรับ Change Procedures และ Operational Playbooks Pillar ใดเกี่ยวกับการปรับกระบวนการ",
    "Reliability|Operational Excellence|Performance Efficiency|Cost Optimization",
    "1",
    "Operational Excellence เน้นวิธี Operations และ Continuous Improvement ไม่ใช่เพียงผลลัพธ์ด้าน Uptime"
  ],
  [
    "1.3",
    "A company discovers an unused internal reporting tool that has no owners or consumers. Which migration strategy would eliminate it instead of migrating it?",
    "บริษัทพบ Internal Reporting Tool ที่ไม่มี Owner หรือ User แล้ว ควรใช้ Migration Strategy ใดเพื่อหยุดใช้แทนการย้าย",
    "Retain|Replatform|Retire|Rehost",
    "2",
    "Retire คือยุติระบบที่ไม่จำเป็น ต่างจาก Retain ที่คงระบบไว้ชั่วคราวแม้ยังไม่ได้ย้าย"
  ],
  [
    "1.3",
    "Before migration, leaders need a business-case estimate comparing on-premises total cost with AWS operating costs. Which service focuses on that assessment?",
    "ก่อน Migration ผู้บริหารต้องการ Business Case เปรียบเทียบ Total Cost ของ On-premises กับค่าใช้จ่ายบน AWS บริการใดเน้นงานนี้",
    "AWS Migration Hub|AWS Migration Evaluator|AWS Application Discovery Service|AWS DMS",
    "1",
    "AWS Migration Evaluator ช่วยประเมิน Business Case และ Financial Readiness ส่วน Discovery Service รวบรวม Inventory และ Dependencies"
  ],
  [
    "1.3",
    "A business wants to lift server workloads to AWS with minimal app changes and separately move relational database data. Which TWO migration services serve those needs? (Select TWO.)",
    "บริษัทต้องย้าย Server Workloads ขึ้น AWS แบบแก้น้อย และย้ายข้อมูล Relational Database แยกกัน บริการใดสองตัวตรง",
    "AWS Application Migration Service|AWS SCT|AWS DMS|AWS Migration Hub|AWS Migration Evaluator",
    "0,2",
    "Application Migration Service ใช้ Rehost Servers ส่วน DMS ย้ายหรือ Replicate Database Data ไม่ได้ใช้แทนการย้าย Entire Servers"
  ],
  [
    "1.3",
    "A legacy application is redesigned into independently deployed APIs and event-driven components as part of cloud migration. Which strategy is used?",
    "Legacy Application ถูกออกแบบใหม่เป็น APIs และ Event-driven Components ที่ Deploy แยกกันในการย้าย Cloud ใช้ Strategy ใด",
    "Rehost|Replatform|Refactor|Retain",
    "2",
    "Refactor ปรับ Code และ Architecture เพื่อใช้ Cloud-native Design ต่างจาก Replatform ที่เปลี่ยน Platform เพียงบางส่วน"
  ],
  [
    "1.4",
    "An IT department replaces a fixed server purchase plan with monthly bills that rise and fall with compute usage. What is the new expense type?",
    "ฝ่าย IT เปลี่ยนจากแผนซื้อ Server Fixed Cost มาเป็นรายจ่ายรายเดือนที่ขึ้นลงตาม Compute Usage จัดเป็นค่าใช้จ่ายประเภทใด",
    "Capital expenditure|Variable expense|Economies of scale|Rightsizing",
    "1",
    "Variable expense เปลี่ยนตาม Usage ส่วน Capital expenditure เป็นการลงทุนซื้อสินทรัพย์ล่วงหน้า"
  ],
  [
    "1.4",
    "A department reduces cloud costs by deleting unused development environments while keeping required environments intact. What practice does this demonstrate most directly?",
    "แผนกลดค่า Cloud โดยลบ Development Environments ที่ไม่มีผู้ใช้ และคงระบบที่ยังจำเป็นไว้ แนวคิดใดตรงที่สุด",
    "Rightsizing|Cost Optimization|Global reach|Economies of scale",
    "1",
    "Cost Optimization ลด Resource Waste และควบคุม Spending ส่วน Rightsizing มักเน้นปรับขนาด Resource ให้พอดีกับ Load"
  ],
  [
    "1.4",
    "A team compares physical on-premises servers with cloud. Which term describes the upfront cost of purchasing the physical equipment?",
    "ทีมเปรียบเทียบ On-premises Servers กับ Cloud คำใดเรียกเงินที่ต้องจ่ายก้อนล่วงหน้าเพื่อซื้อเครื่อง Server",
    "Variable expense|Pay-as-you-go|Capital expenditure|Consolidated billing",
    "2",
    "Capital expenditure เป็นการลงทุนซื้อ Hardware เป็นทรัพย์สิน ส่วน Pay-as-you-go เป็นวิธีคิดตามการใช้ Resource"
  ],
  [
    "1.4",
    "A software company chooses smaller EC2 instance types after reviewing sustained low CPU utilization. What action is this?",
    "บริษัท Software เปลี่ยนเป็น EC2 Instance Types ที่เล็กลงหลังพบ CPU Utilization ต่ำต่อเนื่อง การปรับนี้เรียกว่าอะไร",
    "Rightsizing|Elasticity|Scalability|Economies of scale",
    "0",
    "Rightsizing เปลี่ยนขนาด Instance ตามการใช้จริง ไม่ใช่ Elasticity ที่เพิ่มลด Capacity ตาม Demand"
  ]
]);
})();
