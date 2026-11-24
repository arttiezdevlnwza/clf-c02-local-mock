// CLF-C02 Info Library | Set 11–13 coverage: Domain 4 (Tasks 4.1–4.3)
(() => {
  const guide=window.EXAM_FAMILY_GUIDE;
  if(!guide)return;
  const group=guide.groups.find(g=>g.id==='billing-support');
  if(!group)throw Error('billing-support group missing');
  const rows=[
    ['On-Demand Capacity Reservations','สำรอง EC2 Capacity ของ Instance Attributes ใน AZ ที่กำหนดให้พร้อม Launch; โดยตัว Reservation ไม่ใช่ระยะสัญญาส่วนลด','Guarantee capacity in a specific AZ / no discount commitment','Savings Plans/Reserved Instances เน้น Discount Commitment','บริษัทจอง Capacity ล่วงหน้าสำหรับ Launch วันสำคัญ'],
    ['Reserved Instances','EC2 Pricing Benefit จาก Commitment แบบ 1 หรือ 3 ปีตามเงื่อนไข โดยบางประเภทอาจให้ Capacity Reservation Benefit ได้','Reserved commitment discount','On-Demand Capacity Reservations จอง Capacity ได้โดยไม่ต้อง Discount Commitment','Production ใช้ Instance แบบเดิมต่อเนื่องและต้องการลดราคา'],
    ['Savings Plans utilization','ต้อง Commit ยอด Compute Spend ต่อชั่วโมง 1/3 ปี; ถ้า Commit ตาม Peak สั้น ๆ อาจเหลือ Unused Commitment ในชั่วโมงปกติ','Commitment underused outside the peak','Savings Plans ไม่ลด Commitment ลงเองอัตโนมัติตาม Auto Scaling','ระบบใช้สูงเดือนละหนึ่งวันแต่ซื้อ Commitment เท่าช่วง Peak'],
    ['Dedicated Hosts','Dedicated Physical Host พร้อม Host-level Visibility/Placement สำหรับ Software Licensing Conditions บางรูปแบบ','Host-based license / physical host control','Dedicated Instances = Hardware Isolation แต่ไม่ได้ให้ Host-level Control แบบเดียวกัน','นำ BYOL ที่ผูก Physical Host มาใช้ภายใต้ License Terms'],
    ['Dedicated Instances','EC2 Instances ที่ใช้ Hardware ที่แยกจาก Instances ของลูกค้ารายอื่น แต่ไม่ให้ Host Control/Visibility เหมือน Dedicated Hosts','Single-customer physical isolation','Dedicated Hosts = เจาะจง Physical Host และ Licensing Visibility','Workload ต้องใช้ Dedicated Tenancy แต่ไม่ได้ต้อง Manage Host ID'],
    ['AWS License Manager','ติดตาม Software License Inventory/Usage และช่วยกำหนด Licensing Rules สำหรับ Software ที่รองรับ','Track software entitlements and license consumption','Dedicated Hosts = EC2 Physical Compute Option; BYOL = License Model','ติดตาม License Usage ของ Software บน EC2 Hosts'],
    ['Data transfer out','Data Transfer จาก AWS ไป Internet/ปลายทางอื่นตาม Pricing Rules ของบริการนั้น อาจเป็น Cost Driver เมื่อ Users Download ข้อมูลมาก','Egress to internet / download large files','Data transfer in คือขาขึ้น AWS; ต้องดู Pricing/เส้นทางจริงก่อนประเมินราคา','Video Platform ส่งไฟล์จาก AWS ให้ลูกค้าจำนวนมาก'],
    ['Consolidated billing','รวมค่าใช้จ่าย AWS Member Accounts ใน Organization และอาจมี Eligible Volume Discounts/RI/Savings Plans Benefits ตาม Sharing Settings','One payer bill + eligible benefit sharing','ไม่ได้รวม IAM/Root Credentials และไม่ Grant ข้าม Account','องค์กรมี 5 Accounts รวม Bill ที่ Management Account'],
    ['Cost allocation tags','ใช้ Tags ที่เปิดสำหรับ Cost Allocation แยกรายจ่ายตาม Product, Project หรือ Team ใน Billing Reports','Attribute costs by product/team tags','Consolidated Billing = รวมค่าบริการตาม Accounts ไม่ได้สร้าง Product Cost Labels','ติด Product=A กับ Resources เพื่อ Filter Cost ตาม Product'],
    ['AWS Cost Anomaly Detection','ตรวจจับ Spending Patterns ที่ผิดปกติจาก Baseline พร้อมส่ง Alert ตามการตั้งค่า','Unexpected unusual spend spike','AWS Budgets = เทียบ Actual/Forecast กับ Threshold คงที่','แจ้งเตือนค่าใช้จ่ายพุ่งแบบไม่ตรงพฤติกรรมปกติ'],
    ['AWS Cost and Usage Report (CUR)','Detailed Raw Cost/Usage Line Items สำหรับทำ Custom Analytics; รุ่นปัจจุบันใช้ AWS Data Exports/CUR 2.0 ตามบริการ','Granular cost/usage export','Cost Explorer = GUI Cost Trends; Pricing Calculator = Future Estimate','ใช้ S3 + Athena วิเคราะห์ค่าใช้บริการราย Resource'],
    ['AWS Professional Services','AWS Consulting/Delivery Team ให้คำแนะนำและช่วยโครงการ Migration/Modernization ภายใต้ Engagement','AWS-led transformation engagement','AWS Partner Network = เครือข่าย Partner; Marketplace = Catalog Software/Offerings','องค์กรให้ AWS Specialists ช่วยออกแบบ Cloud Modernization'],
    ['AWS Partner Network (APN)','เครือข่าย AWS Consulting/Technology Partners และช่องทางค้นหาพันธมิตรตามความเชี่ยวชาญ','Find external consulting/technology partner','AWS Support Center = Support Cases; Professional Services = AWS Consulting Team','หาบริษัท Partner ที่เชี่ยวชาญอุตสาหกรรม Healthcare'],
    ['AWS Prescriptive Guidance','เอกสาร Patterns/Playbooks และแนวทางปฏิบัติสำหรับ Cloud Migration/Modernization ที่ AWS เผยแพร่','AWS migration patterns / step-by-step guidance','APN = หาพันธมิตร; Professional Services = Consulting Engagement','อ่าน Migration Playbook ก่อนเลือก Strategy'],
    ['Service Quotas','ดู Default/Applied Resource Quotas ของ AWS Services และร้องขอเพิ่ม Limits ที่รองรับ','Request service quota increase','Trusted Advisor = Best-practice Recommendations; Health = Service Impact Events','ทีมจะใช้ VPC Endpoints เกิน Quota ต้องขอเพิ่ม'],
    ['AWS Health Dashboard','แสดง AWS Service Health Events และ Account-specific Impact ต่อ Resources ที่เกี่ยวข้อง','Is my account affected by AWS disruption?','CloudWatch = Workload Metrics; Config = Resource Configurations','ตรวจว่า AWS Maintenance Event กระทบ EC2 ใน Account หรือไม่'],
    ['AWS Trusted Advisor','ตรวจ Best-practice Checks เกี่ยวกับ Cost, Security, Performance/Service Limits และ Fault Tolerance ตาม Plan/Feature ที่รองรับ','Best-practice findings and recommendations','Service Quotas = ตรวจ/ขอเพิ่ม Limit; Health = AWS Event Impact','ตรวจ Resource Recommendations ด้าน Security/Cost'],
    ['AWS Marketplace','Catalog สำหรับซื้อ/Subscribe Software และ Offerings จากผู้ขายต่าง ๆ รวม Solutions ที่รองรับ','Buy third-party software/services','AWS Partner Network = ค้น Partners; re:Post = Community Q&A','เลือก Software Appliance ผ่าน Marketplace'],
    ['AWS re:Post','Community Knowledge/Q&A สำหรับถามตอบปัญหา AWS แบบ Public ตามประเภทบริการ','Peer community technical question','AWS Support Center = Open/Manage Technical Support Cases','ถามคำถามเกี่ยวกับ AWS Service ทั่วไปใน Community']
  ];
  for(const [name,use,cue,confuse,example] of rows){
    const item={name,use,cue,confuse,example};
    const i=group.items.findIndex(x=>x.name===name);
    if(i<0)group.items.push(item);else Object.assign(group.items[i],item);
  }
  guide.updated='2026-11-24';
  guide.sources = guide.sources || [];
  for(const source of [
    {name:'AWS Amplify Hosting',url:'https://docs.aws.amazon.com/amplify/latest/userguide/'},
    {name:'AWS Quick current naming',url:'https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-quick-aws-quick/'},
    {name:'AWS CLF-C02 in-scope services',url:'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html'}
  ])if(!guide.sources.some(x=>x.url===source.url))guide.sources.push(source);
  group.summary='Pricing Models, Capacity vs Discounts, Billing Tools, Support & AWS Professional Resources';
})();
