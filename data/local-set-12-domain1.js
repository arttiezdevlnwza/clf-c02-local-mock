(() => {
 const rows=window.LOCAL_SET_12_ROWS=window.LOCAL_SET_12_ROWS||[];
 rows.push(...[
  [
    "1.1",
    "A retailer can test a new checkout workflow in a temporary AWS environment the same afternoon that the idea is approved. Which cloud benefit best describes this speed?",
    "Retailer ได้อนุมัติแนวคิด Checkout ใหม่ตอนเช้าและสร้าง Temporary Test Environment ได้ภายในวันเดียว ประโยชน์ Cloud ใดตรง",
    "Agility|Elasticity|High availability|Global reach",
    "0",
    "Agility ทำให้ Provision/ทดลองและเปลี่ยนแปลงได้รวดเร็วโดยไม่ต้องรอจัดซื้อ Hardware ส่วน Elasticity เน้นปรับ Capacity ตาม Load"
  ],
  [
    "1.1",
    "A streaming service expects gradual subscriber growth over two years, with no requirement to automatically scale down after each event. Which property primarily ensures it can support that growth?",
    "Streaming Service คาดว่าผู้ใช้เพิ่มอย่างต่อเนื่องในอีกสองปี ไม่ได้ระบุให้ลดทรัพยากรตาม Event ความสามารถใดช่วยรองรับการเติบโต",
    "Scalability|Elasticity|Agility|Durability",
    "0",
    "Scalability คือระบบสามารถเพิ่ม Capacity รองรับ Workload ที่ขยายตัวได้ ส่วน Elasticity เน้นเพิ่มลดตามความผันผวนของ Demand ระยะสั้น"
  ],
  [
    "1.1",
    "A payment workload should stay operational when a single processing component stops abruptly, and customer records should remain intact. Which TWO properties are most directly requested? (Select TWO.)",
    "ระบบ Payment ต้องประมวลผลต่อได้เมื่อ Node หนึ่งเสียทันที และข้อมูลลูกค้าไม่สูญหาย สองคุณสมบัติใดตรงแต่ละเป้าหมาย",
    "Durability|Global reach|Fault tolerance|High availability|Agility",
    "0,2",
    "Fault tolerance ให้ระบบทำงานต่อเมื่อ Component ล้มเหลว ส่วน Durability เน้นความคงอยู่ของข้อมูล แยกจาก High availability ที่เน้นลด Downtime โดยรวม"
  ],
  [
    "1.2",
    "An AWS architect uses a review tool to evaluate an existing workload against six pillar-based best practices and receive recommended improvements. Which AWS resource supports this process?",
    "Architect ต้อง Review Workload ที่มีอยู่ตาม 6 Pillars และรับ Recommendations ตาม Best Practices ใช้เครื่องมือใด",
    "AWS Well-Architected Tool|AWS Trusted Advisor|AWS Cloud Adoption Framework|AWS Control Tower",
    "0",
    "Well-Architected Tool ใช้ Review Workloads เทียบ AWS Well-Architected Framework และบันทึก Risks/Improvements ขณะที่ CAF เน้นการเปลี่ยนผ่านทั้งองค์กร"
  ],
  [
    "1.2",
    "A team removes wasted cloud spending while preserving required performance. Which pillar is the primary objective?",
    "ทีมลดทรัพยากรที่เปลืองค่าใช้จ่าย แต่ยังรักษา Performance Requirements เดิม เป้าหมายหลักตรง Pillar ใด",
    "Sustainability|Performance Efficiency|Cost Optimization|Reliability",
    "2",
    "Cost Optimization มุ่งเลือกการใช้เงินเพื่อให้ได้ Business Outcomes ที่ต้องการ ต่างจาก Performance Efficiency ซึ่งเน้น Performance/Capacity ตามโจทย์เป็นหลัก"
  ],
  [
    "1.2",
    "A platform team is documenting safe release procedures, automating routine changes, and learning from operational failures. Which pillar is being applied?",
    "Platform Team ทำ Release Procedures ที่ปลอดภัย ใช้ Automation ลดงานซ้ำ และเรียนรู้จาก Operational Failures เข้ากับ Pillar ใด",
    "Security|Operational Excellence|Reliability|Performance Efficiency",
    "1",
    "Operational Excellence เป็นกระบวนการ Manage/Operate Workloads และปรับปรุงให้ดีขึ้นอย่างต่อเนื่อง ไม่ใช่เน้นแค่ Security หรือ Performance"
  ],
  [
    "1.2",
    "A system design review finds weak identity controls and waste from unused resources. Which TWO pillars should the team improve? (Select TWO.)",
    "Review ระบบพบทั้ง Identity Controls อ่อนและ Idle Resources ที่สิ้นเปลือง ควรปรับปรุง Pillars สองข้อใด",
    "Reliability|Security|Cost Optimization|Sustainability|Operational Excellence",
    "1,2",
    "Security เกี่ยวกับ Identity/Access Protection ส่วน Cost Optimization ลด Idle Spend ไม่ใช่เป้าหมายด้าน Environmental Impact โดยตรง"
  ],
  [
    "1.3",
    "An IT team needs a lift-and-shift service that continuously replicates servers to AWS for final migration, rather than translating a database schema. Which tool fits?",
    "ทีม IT ต้อง Replicate Servers ไป AWS เพื่อ Lift-and-shift Migration ไม่ได้แปลง Database Schema ควรใช้บริการใด",
    "AWS Application Migration Service|AWS SCT|AWS DMS|AWS Migration Hub",
    "0",
    "Application Migration Service ทำ Server-based Lift-and-shift ด้วย Replication ส่วน DMS ย้าย Data และ SCT แปลง Database Schema/Code"
  ],
  [
    "1.3",
    "Before approving migration funding, a CFO wants a data-based business case comparing on-premises operating costs with AWS costs. Which tool supports this assessment?",
    "ก่อนอนุมัติงบ Migration CFO ต้องใช้ข้อมูล On-premises Cost/Usage สร้าง Business Case เทียบ AWS Cost ใช้เครื่องมือใด",
    "AWS Migration Hub|AWS Migration Evaluator|AWS Application Discovery Service|AWS Application Migration Service",
    "1",
    "Migration Evaluator สร้าง Data-driven Migration Business Case และ TCO Estimates ส่วน Discovery Service เน้น Server/Dependency Inventory"
  ],
  [
    "1.3",
    "A company wants to move a supported virtualized estate as a group to its corresponding AWS-supported hosting solution with minimal application-level changes. Which migration strategy describes moving the environment?",
    "บริษัทต้องย้าย Virtualized Environment ไป Hosting บน AWS แบบคง Workloads เดิมและแทบไม่เปลี่ยน Application Code เป็น Strategy ใด",
    "Rehost|Replatform|Relocate|Repurchase",
    "2",
    "Relocate ใช้กับการย้าย Infrastructure/Virtualized Environment ไป Cloud โดยคง Application Changes ต่ำ ขณะที่ Rehost เน้นย้าย Application/Server แบบ Lift-and-shift"
  ],
  [
    "1.3",
    "A company replaces an aging payroll application with a commercially hosted SaaS subscription, while another mission-critical application stays in its data center for legal reasons. Which TWO migration decisions apply? (Select TWO.)",
    "บริษัทเปลี่ยน Payroll App เดิมไปใช้ SaaS และเก็บอีก App ไว้ Data Center ต่อเพราะกฎหมาย สอง Migration Strategies ใดตรง",
    "Rehost|Refactor|Retain|Repurchase|Retire",
    "2,3",
    "Repurchase แทน App เดิมด้วย SaaS Commercial Product ส่วน Retain เก็บ App ที่ยังไม่สามารถย้ายได้ไว้ On-premises"
  ],
  [
    "1.3",
    "A cloud transformation program focuses on workforce skills, operating roles, training, and a change-management plan. Which AWS CAF perspective is primarily involved?",
    "Cloud Transformation เน้น Skills, Job Roles, Training และ Change Management ของพนักงาน ตรงกับ AWS CAF Perspective ใด",
    "People Perspective|Governance Perspective|Business Perspective|Platform Perspective",
    "0",
    "People Perspective ดูความพร้อมบุคลากร Culture/Training และ Organizational Change ส่วน Governance เน้น Controls/Risk Policies และ Platform เน้น Technical Architecture"
  ],
  [
    "1.4",
    "A business wants to estimate the cost of its own servers including electricity, maintenance, software, staff and data-center space, before comparing with AWS. Which financial measure should it calculate?",
    "ธุรกิจต้องรวมค่า Server, ไฟฟ้า, Maintenance, Software, พนักงาน และ Data Center ก่อนเทียบ AWS ควรคำนวณต้นทุนประเภทใด",
    "Variable expense|Total Cost of Ownership (TCO)|Capital expenditure|Economies of scale",
    "1",
    "TCO รวมต้นทุน Direct/Indirect ของระบบตลอด Lifecycle ต่างจาก CapEx ซึ่งเป็นเพียงส่วนลงทุนซื้อ Assets ล่วงหน้า"
  ],
  [
    "1.4",
    "A workload has average CPU usage far below its provisioned capacity. The operations team changes to a more suitable smaller instance after checking memory needs. What practice is it applying?",
    "Workload ใช้ CPU ต่ำกว่าที่เตรียมไว้มาก ทีมจึงลด EC2 Instance ให้เหมาะโดยดู Memory Requirement ด้วย แนวปฏิบัติใด",
    "Pay-as-you-go|Rightsizing|Economies of scale|Agility",
    "1",
    "Rightsizing เลือก Resource Type/Size ให้พอดีกับการใช้งานจริง ส่วน Economies of scale คือประโยชน์ต้นทุนจากการดำเนินงานขนาดใหญ่ของผู้ให้บริการ"
  ],
  [
    "1.4",
    "A vendor agreement prohibits cloud use of an existing on-premises license. What must a customer consider before assuming a BYOL cost advantage?",
    "License เดิมของ Vendor ห้ามนำไปใช้บน Cloud ลูกค้าควรพิจารณาเงื่อนไขใดก่อนคิดว่าจะประหยัดด้วย BYOL",
    "Savings Plans|Reserved Instances|AWS Marketplace|Bring Your Own License (BYOL)",
    "3",
    "BYOL ทำได้เฉพาะเมื่อ Vendor Licensing Terms อนุญาต ต้องตรวจ License Eligibility ไม่ใช่ถือว่าซื้อ Software เดิมแล้วจะย้ายไป AWS ได้เสมอ"
  ],
  [
    "1.4",
    "A department wants to move from large one-time purchases of data-center machines to bills based on actual services consumed. Which TWO financial concepts describe the change? (Select TWO.)",
    "แผนกเปลี่ยนจากซื้อ Data Center Hardware เป็นก้อนมาเป็นจ่ายตาม Service Usage จริง สองแนวคิดด้านการเงินใดเกี่ยวข้อง",
    "Economies of scale|Variable expense|Rightsizing|High availability|Capital expenditure",
    "1,4",
    "ลด Capital Expenditure ด้าน Assets ที่ต้องลงทุนล่วงหน้าแล้วเปลี่ยนสู่ Variable Expense ที่จ่ายตาม Usage ส่วน Rightsizing เป็นเทคนิคปรับ Resource Size"
  ]
]);
})();
