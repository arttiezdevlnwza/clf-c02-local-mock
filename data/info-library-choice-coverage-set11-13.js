// Supplemental exact-choice names occurring in Sets 11–13 (especially distractors).
(() => {
  const guide=window.EXAM_FAMILY_GUIDE;
  if(!guide)return;
  const add=(id,rows)=>{
    const g=guide.groups.find(x=>x.id===id);
    if(!g)throw Error('Info group missing '+id);
    for(const [name,use,cue,confuse,example] of rows)
      if(!g.items.some(x=>x.name===name))g.items.push({name,use,cue,confuse,example});
  };
  add('cloud-concepts',[
    ['Fixed expense','ค่าใช้จ่ายที่ไม่ขึ้นลงทันทีตามการใช้ทรัพยากร เช่น ค่าเช่าพื้นที่รายเดือนในสัญญาคงที่','Cost stays constant within period','Variable expense = Cost changes with consumption','เช่าพื้นที่ Data Center เป็นรายเดือนตามสัญญา']
  ]);
  add('well-architected',[
    ['AWS Well-Architected Framework','กรอบ Design/Review Workloads ตาม 6 Pillars เช่น Security, Reliability และ Performance Efficiency','Six workload design pillars','AWS CAF = Organizational Adoption Perspectives','ประเมิน Architecture ของ Production Application']
  ]);
  add('shared-responsibility',[
    ['Guest operating system','OS ใน EC2 Instance ที่ลูกค้าต้องกำหนดค่า Patch และดูแล Package Security','EC2 guest OS patch = customer','Hypervisor/Physical Servers = AWS Responsibility','อัปเดต Linux Kernel ของ EC2'],
    ['Hypervisor','Infrastructure Virtualization Layer ใต้ EC2 Guests ซึ่ง AWS ดูแลใน Shared Responsibility','AWS secures underlying virtualization','Guest OS ใน EC2 เป็นของลูกค้าดูแล','AWS ดูแล Virtualization Layer'],
    ['AWS-owned physical servers','Hardware จริงใน AWS Data Centers ที่ AWS ดูแล Security/Replacement','Physical infrastructure = AWS','Software ที่ลูกค้าติดตั้งใน EC2 Guest OS ต้องดูแลเอง','AWS เปลี่ยน Disk/Host ที่มีปัญหา']
  ]);
  add('iam-security',[
    ['AWS Control Tower','ช่วย Setup/Govern Multi-account Landing Zone ด้วย Guardrails/Controls และ Account Baselines','Govern AWS multi-account landing zone','AWS Organizations จัด OUs/SCPs; Service Catalog จัด Approved Products','ตั้ง Landing Zone มาตรฐานให้ Development/Production Accounts']
  ]);
  add('compute-containers',[
    ['AWS Management Console','Web-based Graphical Interface สำหรับจัดการ AWS Services ผ่าน Browser','Click/manage AWS services in browser','AWS CLI = Script AWS Commands จาก Workstation; CloudShell = Browser Terminal','เปิดหน้า EC2 Console เพื่อ Launch Instance'],
    ['AWS CodeBuild','Fully Managed Build Service ที่ Compile, Test และ Package Source Code หรือ Container Images','Build and test source','CodePipeline = Connect CI/CD Stages; ECR = Store Container Images','Build Docker Image ก่อน Push ไป ECR'],
    ['AWS CodePipeline','Continuous Delivery Workflow ที่ประสาน Source, Build และ Deploy Stages','Automated release pipeline','CodeBuild = Build/Test Stage ไม่ใช่ตัวคุมทั้ง Pipeline','Git Commit Trigger Build/Test/Deploy ผ่าน Pipeline'],
    ['M family (general purpose)','EC2 Family สมดุล Compute, Memory และ Networking สำหรับ Workloads ทั่วไป','General-purpose balanced workload','T = Burstable; R = Memory-optimized; I = Storage-optimized','Web Application ใช้ CPU/RAM ปานกลาง'],
    ['R family (memory optimized)','EC2 Family สำหรับ Memory-intensive Workloads','Large RAM / memory-heavy workload','C = Compute-optimized; I = Local Storage-optimized','In-memory Data Processing ที่ต้องใช้ RAM มาก'],
    ['I family (storage optimized)','EC2 Family เน้น High Local Storage Throughput/IO และ Local Storage','High IOPS/local storage workload','R = Memory-optimized; T = Burstable CPU','Database Workload ที่ต้องใช้ Local Storage I/O สูง']
  ]);
  add('database-storage',[
    ['Amazon S3 Standard-IA','Storage Class สำหรับ Object ที่เข้าถึงไม่บ่อยแต่ต้อง Retrieve ทันที มี Retrieval/Minimum Duration Considerations','Infrequent access + immediate retrieval','Glacier Deep Archive = Retrieval ช้าหลายชั่วโมง','เก็บ Backup Files ที่เรียกคืนนาน ๆ ครั้งแต่ต้องได้ทันที'],
    ['S3 Lifecycle rules','ตั้ง S3 Object Transition/Expiration ตาม Age/Conditions ด้วย Lifecycle Configuration','Move after N days','Intelligent-Tiering = Adapt according to access patterns','เปลี่ยน S3 Standard ไป Glacier หลังครบ 90 วัน']
  ]);
  add('networking-global',[
    ['Edge location','จุดกระจาย CDN/Edge Delivery ที่ CloudFront สามารถ Cache Content ใกล้ผู้ใช้','Cache static content near users','Availability Zone = Host Compute/Storage Workloads ภายใน Region','CloudFront ส่งรูปจาก Edge ใกล้ผู้ใช้'],
    ['Multi-AZ deployment','กระจาย Workload หรือ Standby ไปหลาย Availability Zones ใน Region เดียวเพื่อรองรับ AZ Failure','One AZ fails → other AZ serves','Multi-Region deployment = ทน Outage ทั้ง Region','วาง RDS Multi-AZ Standby ใน AZ สำรอง']
  ]);
  add('billing-support',[
    ['On-Demand Instances','EC2 Pay-as-you-use Pricing ไม่ต้องทำ Long-term Discount Commitment','Short or unpredictable EC2 use','Spot = Interruptible Spare Capacity; Savings Plans = Spend Commitment','เปิด EC2 Test Server ชั่วคราว'],
    ['Spot Instances','ใช้ EC2 Spare Capacity ในราคาส่วนลด โดย AWS สามารถ Interrupt/Reclaim ได้','Fault-tolerant / restartable jobs','On-Demand = ไม่มี Interruption จาก Capacity Reclaim แบบ Spot','รัน Batch Jobs ที่ Retry ได้'],
    ['Amazon Quick Sight (formerly QuickSight)','BI Visualization/Dashboards ภายใต้ AWS Quick (ชื่อบริการเดิม Amazon QuickSight/Quick Sight)','Dashboard and interactive business reports','Athena = SQL Data Query; AWS Quick = broader Analytics/AI Experience','ผู้บริหารดู Dashboard ของ KPI รายเดือน']
  ]);
})();
