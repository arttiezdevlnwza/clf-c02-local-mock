(() => {
 const rows=window.LOCAL_SET_13_ROWS=window.LOCAL_SET_13_ROWS||[];
 rows.push(...[
  [
    "1.1",
    "A regional news website must stay accessible while one data-center location is taken offline for planned work. Which cloud benefit is primarily being sought?",
    "เว็บไซต์ข่าวต้องให้บริการต่อเมื่อ Data Center Location หนึ่งปิด Maintenance ชั่วคราว คุณสมบัติใดเป็นเป้าหมายหลัก",
    "Elasticity|Durability|High availability|Agility",
    "2",
    "High availability เน้นให้ Service พร้อมใช้งานและลด Downtime ผ่านการออกแบบ Redundancy/Failover ส่วน Durability เน้นรักษาข้อมูล"
  ],
  [
    "1.1",
    "A global mobile application wants to put application backends geographically close to customers in several countries while maintaining local data rules. Which cloud capability enables geographic placement?",
    "Mobile App ต้องวาง Application Backends ใกล้ผู้ใช้ต่างประเทศและคำนึงถึง Data Location ความสามารถ Cloud ใดช่วยกระจายการใช้งานหลายพื้นที่",
    "Elasticity|Global reach|Fault tolerance|Pay-as-you-go",
    "1",
    "Global reach ช่วย Deploy Workloads ไปยัง Regions ต่าง ๆ ตามผู้ใช้/ข้อกำหนดข้อมูล ส่วน Elasticity ปรับ Capacity ตาม Demand"
  ],
  [
    "1.1",
    "A request-processing service should keep accepting work after a worker crashes unexpectedly without waiting for manual intervention. Which concept is most direct?",
    "Service ประมวลผล Requests ต้องรับงานต่อเมื่อ Worker หนึ่งตัว Crash ทันที โดยไม่รอ Manual Intervention แนวคิดใดตรงที่สุด",
    "High availability|Fault tolerance|Durability|Scalability",
    "1",
    "Fault tolerance เน้นทำงานต่อได้เมื่อ Component หนึ่งล้มเหลว ขณะที่ High availability เน้น Uptime โดยรวม และ Durability เน้น Data Preservation"
  ],
  [
    "1.2",
    "A workload's large instance sizes meet performance goals but consume energy that could be avoided. Which TWO pillars are most directly concerned with performance needs and environmental impact? (Select TWO.)",
    "Workload ใช้ EC2 ขนาดใหญ่เพื่อให้ได้ Performance Target แต่ใช้พลังงานเกินจำเป็น สอง Pillars ใดเกี่ยวกับ Performance และ Environmental Impact",
    "Performance Efficiency|Sustainability|Security|Reliability|Operational Excellence",
    "0,1",
    "Performance Efficiency ประเมินว่าทรัพยากรเหมาะกับ Performance Requirements หรือไม่ ส่วน Sustainability มุ่งลดผลกระทบด้านพลังงาน/สิ่งแวดล้อม"
  ],
  [
    "1.2",
    "A team routinely tests disaster recovery against defined recovery-time and recovery-point objectives. Which pillar is most closely linked to recovery from failures?",
    "ทีมทดสอบ Disaster Recovery โดยกำหนด Recovery Time/Point Objectives และตรวจความสามารถกู้คืนเป็นประจำ ควรจัดใน Pillar ใด",
    "Operational Excellence|Cost Optimization|Reliability|Performance Efficiency",
    "2",
    "Reliability เน้น Recovery from Failures และ Availability แม้ Operational Excellence จะช่วยด้าน Runbooks แต่ Requirement เฉพาะคือ Recovery Objectives"
  ],
  [
    "1.2",
    "Engineers use incident retrospectives to refine deployment procedures and reduce manual operational error. Which pillar specifically encourages learning from operations?",
    "วิศวกรทบทวน Incident เพื่อปรับ Deployment Procedures ลด Human Error และปรับ Operations ตรงกับ Pillar ใด",
    "Security|Reliability|Operational Excellence|Sustainability",
    "2",
    "Operational Excellence เน้นการเรียนรู้และปรับปรุง Processes/Automation ในการ Operate Workloads ส่วน Reliability เน้นความต่อเนื่อง/การฟื้นตัว"
  ],
  [
    "1.2",
    "A cloud design team chooses an instance type that meets latency targets at sustainable cost rather than selecting the cheapest option that fails the SLA. Which pillar primarily governs resource performance selection?",
    "ทีมเลือก Instance Type ให้ Latency ผ่าน SLA ในต้นทุนที่รับได้ แทนเลือกตัวถูกที่สุดที่ไม่ผ่าน Performance เป้าหมาย นี่เป็น Pillar ใด",
    "Performance Efficiency|Cost Optimization|Reliability|Sustainability",
    "0",
    "Performance Efficiency ให้เลือก Resource Type/Size เพื่อให้ถึง Latency/Throughput Targets โดย Cost Optimization อาจเป็นข้อพิจารณาคู่กัน แต่โจทย์ถามด้าน Performance Selection"
  ],
  [
    "1.3",
    "A business has three applications: one is retired, another remains on-premises, and the third is rebuilt as cloud-native microservices. Which TWO named strategies apply to the first two applications? (Select TWO.)",
    "ธุรกิจมีสาม Apps: ตัวแรกยกเลิกใช้งาน ตัวที่สองยังอยู่ On-premises และตัวที่สามปรับเป็น Microservices ถาม Strategies ของสองตัวแรก",
    "Retire|Retain|Refactor|Rehost|Repurchase",
    "0,1",
    "Retire เลิกใช้ Application ที่หมดความจำเป็น ส่วน Retain เก็บไว้ที่เดิม; ตัวที่สามเข้าข่าย Refactor แต่โจทย์ถามเพียงสองตัวแรก"
  ],
  [
    "1.3",
    "A legacy finance team migrates the same application VM to EC2 with essentially no application-level changes. Which migration strategy is used?",
    "ทีม Finance ย้าย Application VM เดิมขึ้น EC2 โดยแทบไม่ปรับ Application Code หรือ Platform ใช้ Migration Strategy ใด",
    "Refactor|Rehost|Replatform|Repurchase",
    "1",
    "Rehost คือ Lift-and-shift VM/Application แบบ As-is ส่วน Replatform เปลี่ยน Hosting Platform/Managed Services บางส่วน และ Refactor เปลี่ยน Architecture"
  ],
  [
    "1.3",
    "An organization replaces a self-hosted customer-support application with an unrelated SaaS helpdesk product while retaining its customer data. Which migration strategy is this?",
    "องค์กรเลิกใช้ Self-hosted Helpdesk แล้วเปลี่ยนเป็น SaaS Helpdesk อีกผลิตภัณฑ์หนึ่ง โดยนำข้อมูลลูกค้าไปด้วย จัดเป็น Strategy ใด",
    "Rehost|Repurchase|Replatform|Refactor",
    "1",
    "Repurchase คือแทนที่ Software เดิมด้วย Product/SaaS ใหม่ ไม่ใช่ Replatform ที่เปลี่ยน Infrastructure/Platform ของ Application เดิม"
  ],
  [
    "1.3",
    "A planning team must map server dependencies and separately calculate a migration business case. Which TWO AWS services fulfill the different planning tasks? (Select TWO.)",
    "ทีม Planning ต้องสำรวจ Server Dependencies และคำนวณ Migration Business Case แยกกัน สองบริการใดช่วย",
    "AWS DMS|AWS Migration Evaluator|AWS Migration Hub|AWS Application Discovery Service|AWS Application Migration Service",
    "1,3",
    "Application Discovery Service หา Inventory/Dependencies ส่วน Migration Evaluator ประเมิน Business Case/TCO ของการย้าย ขณะที่ Migration Hub ติดตาม Progress"
  ],
  [
    "1.3",
    "A steering committee examines workforce capabilities, policy governance, operating processes, and platform readiness before launching migration. Which framework organizes these organizational perspectives?",
    "คณะกรรมการตรวจ Skills, Governance, Operations และ Platform Readiness ก่อน Migration Framework ใดจัดหมวดมุมมองเหล่านี้",
    "AWS Well-Architected Framework|AWS Cloud Adoption Framework|AWS Migration Hub|AWS Well-Architected Tool",
    "1",
    "AWS CAF ใช้ Perspectives ด้าน Business, People, Governance, Platform, Security, Operations เพื่อเตรียม Organizational Transformation ส่วน Well-Architected Review Workloads"
  ],
  [
    "1.4",
    "A CFO compares a data center's one-time hardware purchase with AWS operating bills that vary with actual usage. Which TWO expense concepts describe these different costs? (Select TWO.)",
    "CFO เปรียบเทียบการซื้อ Data Center Hardware ล่วงหน้าเป็นก้อน กับ AWS Operating Bills ที่แปรผันตาม Usage จริง สองแนวคิดค่าใช้จ่ายใดตรง",
    "Economies of scale|Capital expenditure|Variable expense|Rightsizing|Global reach",
    "1,2",
    "Capital expenditure คือเงินลงทุนซื้อ Hardware/Assets ล่วงหน้า ส่วน Variable expense เป็นค่าใช้จ่ายดำเนินงานที่ขึ้นลงตาม Actual Cloud Usage"
  ],
  [
    "1.4",
    "An app team reduces repeated manual environment setup by deploying infrastructure from approved templates. Which cloud economics benefit of automation is most relevant?",
    "ทีม App ลดงานสร้าง Environment ซ้ำ ๆ โดยใช้ Approved Templates/Automation ประโยชน์ด้าน Cloud Economics ใดตรง",
    "Durability|Economies of scale|Rightsizing|Agility",
    "3",
    "Automation ลดเวลาจัดเตรียม/ทดสอบ Environment จึงส่งเสริม Agility และลด Operational Effort ไม่ใช่ประโยชน์จาก Provider Buying Power แบบ Economies of scale"
  ],
  [
    "1.4",
    "An AWS customer evaluates whether existing commercial OS licenses can be used in the cloud rather than paying license-included rates. What must be validated first?",
    "ลูกค้าจะนำ OS License เดิมขึ้น AWS แทน License-included Pricing ต้องตรวจสิ่งใดก่อน",
    "Reserved Instances|AWS Cost Explorer|On-Demand Instances|Bring Your Own License (BYOL)",
    "3",
    "ต้องตรวจสิทธิ์ BYOL ภายใต้ Vendor License Agreements/Allowed Tenancy ก่อน ไม่ใช่ถือว่าทุก License สามารถย้ายไป AWS ได้"
  ],
  [
    "1.4",
    "A retailer moves from buying large fixed capacity for annual sales peaks to paying as resources are consumed. What billing philosophy does this illustrate?",
    "Retailer เลิกซื้อเครื่องเผื่อ Peak ของปีและเปลี่ยนมาจ่ายเมื่อใช้ Cloud Resources จริง เป็นแนวคิดคิดค่าบริการใด",
    "Economies of scale|Capital expenditure|Rightsizing|Pay-as-you-go",
    "3",
    "Pay-as-you-go คือคิดค่าบริการตาม Resources/Usage จริง ส่วน Economies of scale คือเรื่อง Provider Cost ต่อหน่วย ไม่ใช่วิธีคิดบิลลูกค้า"
  ]
]);
})();
