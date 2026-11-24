// CLF-C02 Info Library | Set 11–13 coverage: Domain 1 (Tasks 1.1–1.4)
(() => {
  const guide = window.EXAM_FAMILY_GUIDE;
  if (!guide) return;
  const add = (id, rows) => {
    const group = guide.groups.find(g => g.id === id);
    if (!group) throw Error('Info Library group missing: ' + id);
    for (const [name, use, cue, confuse, example] of rows) {
      const item = {name, use, cue, confuse, example};
      const index = group.items.findIndex(x => x.name === name);
      if (index < 0) group.items.push(item);
      else Object.assign(group.items[index], item);
    }
  };
  add('cloud-concepts', [
    ['Scalability','ระบบสามารถเพิ่ม Capacity รองรับจำนวนผู้ใช้หรือข้อมูลที่เติบโต โดยอาจ Scale Up หรือ Scale Out','รองรับ Growth ต่อเนื่อง','Elasticity = เพิ่มและลด Capacity ตาม Demand ที่เปลี่ยนสั้น ๆ','ยอดผู้ใช้โตทุกปีจึงเพิ่มจำนวน EC2 Instances'],
    ['Fault tolerance','ส่วนหนึ่งของระบบเสีย แต่ส่วนที่เหลือรับงานต่อได้โดยไม่หยุดการประมวลผลทั้งหมด','Component crashes → service continues','High Availability = ลด Downtime โดยรวม อาจต้องมี Failover','Worker ตัวหนึ่งล้มเหลวแต่ Worker อื่นยังรับ Queue ได้'],
    ['Durability','ความคงอยู่ของข้อมูลในระยะยาว แม้ Storage Components บางส่วนเสีย','Do not lose stored records','High Availability = ระบบอ่าน/เขียนได้ต่อเนื่อง ไม่ใช่คำรับประกันข้อมูลไม่สูญ','จัดเก็บภาพ/Backup ใน S3 โดยคำนึงถึงความคงทนของ Object'],
    ['Global reach','ใช้ AWS Regions หลายพื้นที่เพื่อนำบริการเข้าใกล้ผู้ใช้ทั่วโลกโดยไม่สร้าง Data Center เอง','Deploy near overseas users','Agility = ทดลอง/ออก Feature ได้เร็ว ไม่ใช่ขอบเขตทางภูมิศาสตร์','เปิด Web Backend ใน Region ใกล้ลูกค้าต่างประเทศ'],
    ['Pay-as-you-go','คิดค่าบริการตามทรัพยากรและช่วงเวลาที่ใช้งาน ตาม Pricing Model ของบริการนั้น','Pay for actual consumption','Variable expense = ประเภทต้นทุนที่ขึ้นลง ส่วน Pay-as-you-go = หลักคิดค่าบริการ','หยุด Instance ที่คิดตาม Usage เมื่อไม่จำเป็น'],
    ['Capital expenditure (CapEx)','เงินลงทุนซื้อ Assets ล่วงหน้า เช่น Physical Servers และอุปกรณ์ Data Center','Upfront purchase / own servers','Variable expense = ค่าใช้จ่ายที่เปลี่ยนตาม Usage','ซื้อเครื่องไว้รองรับ Peak Traffic ตลอดปี'],
    ['Variable expense','ค่าใช้จ่ายขึ้นลงตามปริมาณที่ใช้งานจริง เช่น Compute Hours หรือ Data Transfer','Operational bill varies by usage','CapEx = ลงทุนซื้อ Hardware ล่วงหน้า','ยอด Compute ลดลงเดือนนี้ บิลส่วนที่คิดตาม Usage จึงลด'],
    ['Total Cost of Ownership (TCO)','ต้นทุนรวมตลอดวงจรชีวิตระบบ ทั้งค่า Hardware, Software, Network, Electricity, Facilities, People และ Maintenance','Compare full ownership cost','CapEx = เฉพาะการลงทุน Assets ไม่ครอบคลุม Operational Costs ทั้งหมด','ประเมิน TCO Data Center เทียบ AWS ก่อน Migration'],
    ['Rightsizing','เลือก Resource Type/Size ให้ตรง CPU, Memory, Network และ Business Requirements โดยไม่ Overprovision','Resource larger than needed → reduce appropriately','Economies of Scale = AWS ลดต้นทุนต่อหน่วยจากปริมาณการดำเนินงานใหญ่','ย้ายจาก EC2 ขนาดใหญ่ไปขนาดเหมาะกับ Metrics'],
    ['Bring Your Own License (BYOL)','นำ Software License ที่มีอยู่มาใช้บน AWS เมื่อ Vendor License Terms/Cloud Eligibility อนุญาต','Existing license + verify vendor conditions','License-included = ค่าใช้ License รวมอยู่ในค่าบริการที่เลือก','ตรวจ SQL Server/OS Licensing ก่อนเลือก Dedicated Host หรือ EC2'],
    ['License-included model','จ่ายค่าบริการที่มีสิทธิ์ Software License รวมอยู่ ไม่ต้องนำ License เดิมมาเอง','License is part of the cloud price','BYOL = นำ License ที่มีอยู่มาเองตาม Vendor Terms','เลือก Windows EC2 ที่คิดค่า License ในอัตราที่เกี่ยวข้อง']
  ]);
  add('well-architected', [
    ['Stop guessing capacity','Reliability Design Principle ให้ใช้ Demand/Telemetry และ Elasticity ช่วยรองรับ Capacity แทนกำหนดขนาดจากการคาดเดา','Stop guessing capacity → Reliability','Performance Efficiency = เลือกทรัพยากรเพื่อได้ Latency/Throughput ตาม Target','Auto Scaling ช่วยรับ Traffic Spikes โดยไม่กำหนด Server จำนวนคงที่'],
    ['AWS Well-Architected Tool','ใช้ Review Workload ตาม 6 Well-Architected Pillars บันทึก Risks และ Improvement Actions','Review existing workload against six pillars','AWS CAF = ประเมินความพร้อมการเปลี่ยนผ่านทั้งองค์กร','ทีมทำ Well-Architected Review ก่อน Production Launch']
  ]);
  add('migration', [
    ['Replatform','ย้าย Application/Database พร้อมเปลี่ยน Platform บางส่วนเพื่อรับ Managed Service แต่ไม่ Redesign Architecture มาก','Self-managed MySQL VM → Amazon RDS','Rehost = ย้าย VM/App แทบไม่แก้ Hosting Model','ย้าย PostgreSQL ที่ดูแลเองไป RDS for PostgreSQL'],
    ['Refactor','เปลี่ยน Application Code/Architecture เพื่อใช้ Cloud-native Features เช่นแยก Monolith','Redesign into cloud-native architecture','Replatform = เปลี่ยน Platform เพียงบางส่วน','ปรับ Monolith เป็น Microservices และ Managed Services'],
    ['Repurchase','ทิ้ง Commercial/Product Implementation เดิมแล้วซื้อหรือสมัคร SaaS ใหม่แทน (Drop and Shop)','Old app → different SaaS product','Replatform = ย้าย Application เดิมไป Managed Platform','เลิก Helpdesk ที่ Host เอง แล้วสมัคร SaaS Helpdesk'],
    ['Relocate','ย้าย Virtualized Infrastructure/VM Estate ไปยัง Compatible Cloud Environment โดยเปลี่ยน Application น้อย','Move virtualization estate / VM environment','Rehost = ย้าย Application/Server ไป Infrastructure ใหม่แบบ Lift-and-shift','ย้าย Supported VMware VM Environment ไป Hosting ที่เข้ากันบน AWS'],
    ['Retain','เก็บ Workload ไว้ที่เดิมเมื่อมีเหตุผลด้านสัญญา ความเสี่ยง หรือกำหนดการ','Keep system on-premises','Retire = ยกเลิกระบบเพราะไม่ใช้แล้ว','Core Application ต้องอยู่ Data Center ตาม Contract'],
    ['Retire','ปิดและเลิกใช้งาน Application ที่ไม่จำเป็นแล้ว เพื่อลดต้นทุน/ความซับซ้อน','No active users → decommission','Retain = ยังใช้งานอยู่แต่ไม่ย้าย','ยกเลิก Legacy Reporting Application ที่ไม่มีผู้ใช้'],
    ['AWS Application Discovery Service','เก็บ Server Inventory และ Dependency Data เพื่อวางแผนจัดกลุ่ม Application ก่อน Migration','Discover servers and dependencies','Migration Evaluator = Business Case / Cost Assessment','ค้นว่า VM ไหนเชื่อม Database และ Application ไหนก่อนย้าย'],
    ['AWS Migration Evaluator','ใช้ข้อมูล On-premises Estate เพื่อวิเคราะห์ Business Case และประมาณ TCO Savings/ค่าใช้จ่ายการ Migration','Business case / compare AWS vs on-prem cost','Application Discovery Service = Inventory/Dependencies','CFO ต้องการตัวเลขประกอบการอนุมัติ Migration Budget'],
    ['AWS Application Migration Service','Replicate Source Servers และช่วย Lift-and-shift Applications ไป AWS','Server migration / lift-and-shift','AWS DMS = Database Records; AWS SCT = Schema','ย้าย VM Application จาก On-premises ไป EC2'],
    ['AWS SCT','Database Schema Conversion Tool สำหรับแปลง Schema และ Database Code ระหว่าง Engines','Schema conversion / heterogeneous migration','AWS DMS = ย้ายหรือ Replicate Database Data','แปลง Schema เดิมให้ Target PostgreSQL-Compatible'],
    ['AWS Cloud Adoption Framework (CAF) Perspectives','Business = คุณค่าธุรกิจ; People = ทักษะบุคลากร; Governance = Policies/Risks; Platform = Architecture; Security = Controls; Operations = การดำเนินงาน','Six organizational perspectives','Well-Architected = Six workload design pillars','วางแผนฝึกคน กำกับงบ และออกแบบ Cloud Landing Zone'],
    ['People Perspective','AWS CAF: คน ทักษะ การฝึกอบรม บทบาท และ Organizational Change','Skills / training / workforce change','Governance Perspective = Policies/Risk Controls','บริษัทเตรียม Upskill พนักงานก่อน Adopt Cloud'],
    ['Governance Perspective','AWS CAF: กรอบการบริหาร Policies, Risk, Budget/Controls และ Regulatory Alignment','Policies / risk / expenditure controls','Business Perspective = Business Outcomes/Value','ตั้งนโยบายการอนุมัติ Cloud Spend และ Risk Management'],
    ['Business Perspective','AWS CAF: ผลลัพธ์ธุรกิจ มูลค่าการลงทุน และเป้าหมาย Transformation','Business outcomes / business value','Governance = Controls ไม่ใช่ Business Value โดยตรง','ผู้บริหารตั้งเป้าระยะเวลานำสินค้าออกตลาดและผลตอบแทนจาก Cloud'],
    ['Platform Perspective','AWS CAF: โครงสร้างและเทคโนโลยี Cloud Architecture/Infrastructure','Architecture / platform readiness','People = Skills; Governance = Policies','ออกแบบ Cloud Network/Platform ก่อน Migration'],
    ['Operations Perspective','AWS CAF: Operating Model, Operations Processes และบริการที่ใช้ดูแลระบบ','Operating model / run operations','Operational Excellence = Well-Architected Pillar ไม่ใช่ CAF Perspective','วาง Service Operations และ Operating Procedures'],
    ['Security Perspective','AWS CAF: กรอบ Identity, Detection, Protection และ Security Governance สำหรับ Cloud Adoption','Organizational security capabilities','Well-Architected Security = ทบทวน Security ของ Workload','กำหนดทีมและระบบ Security Baseline ระหว่าง Migration']
  ]);
})();
