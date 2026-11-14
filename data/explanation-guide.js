/* CLF-C02: structured post-answer explanations. Does not change questions or answer keys. */
(() => {
  // Keywords are taken verbatim from each English question, not invented or taken from answer choices.
  const signals = [
    [/\b(?:Reliability|Operational Excellence|Performance Efficiency|Cost Optimization|Sustainability|Security) pillar\b/i,'เป็นชื่อ Well-Architected Pillar ต้องเข้าใจจุดเน้นของ Pillar นั้นก่อนเลือกแนวทาง'],
    [/\bwithout (?:managing|maintaining|provisioning|installing|buying|purchasing|building|sharing|relying|waiting)[^.?,;]*/i,'ข้อจำกัดสำคัญ: ต้องทำได้โดยไม่ต้องทำสิ่งที่ระบุ'],
    [/\b(?:no|minimal|little|almost no) (?:code|application|server|infrastructure|manual|long-term)[^.?,;]*/i,'เน้นลดสิ่งที่ต้องจัดการหรือเปลี่ยนแปลง'],
    [/\b(?:Select TWO|Choose TWO|Select THREE|Choose THREE)\b/i,'โจทย์ต้องการมากกว่าหนึ่งคำตอบ'],
    [/\b(?:sudden|unpredictable|spikes?|surge|fluctuat\w*|varying|varies|peak demand)\b/i,'ปริมาณงานเปลี่ยนแปลง ต้องพิจารณาการปรับ capacity'],
    [/\b(?:grow and shrink|add or remove|increase or decrease|scale up and down)\b/i,'เน้นเพิ่มและลดทรัพยากรตาม demand'],
    [/\b(?:multiple countries|different continents|global audience|global customers|geographic areas|closer to (?:users|viewers|customers))\b/i,'ต้องรองรับผู้ใช้หลายภูมิภาคหรือลดระยะทาง'],
    [/\b(?:recover|recovery|failover|failure|failures|resilien\w*|continue operating|continue running)\b/i,'ต้องรับมือกับความล้มเหลวหรือฟื้นตัว'],
    [/\b(?:high availability|downtime|availability)\b/i,'เน้นความพร้อมใช้งานของระบบ'],
    [/\b(?:environmental impact|carbon|sustainab\w*|energy consumption)\b/i,'พิจารณาผลกระทบต่อสิ่งแวดล้อม'],
    [/\b(?:incident|lessons learned|deployment procedures|operations as code|continuous improvement)\b/i,'เน้นการปรับปรุงกระบวนการดำเนินงาน'],
    [/\b(?:performance|throughput|latency|response time)\b/i,'พิจารณาประสิทธิภาพและความเร็วของ workload'],
    [/\b(?:cost|spending|charges|budget|expense|billing|savings)\b/i,'เน้นต้นทุนหรือการเรียกเก็บเงิน'],
    [/\b(?:upfront|purchase physical|buy hardware|own hardware|data center build)\b/i,'เปรียบเทียบการลงทุนล่วงหน้ากับการจ่ายตามใช้'],
    [/\b(?:underutilized|idle|overprovision\w*|excess capacity)\b/i,'ทรัพยากรเกินความจำเป็น อาจต้องลดขนาดหรือหยุดใช้'],
    [/\b(?:short-term|temporary|unpredictable usage|no long-term commitment)\b/i,'งานระยะสั้น ต้องปรับหรือเลิกใช้ทรัพยากรได้ตามความจำเป็น'],
    [/\b(?:interrupt\w*|restart after interruption|spare capacity)\b/i,'workload ยอมให้ถูกขัดจังหวะได้'],
    [/\b(?:commit\w*|long-running|steady production|continuously for years)\b/i,'มีการใช้ต่อเนื่องและยอมรับ commitment'],
    [/\b(?:physical cores|physical server|software license|dedicated host)\b/i,'มีข้อกำหนดเรื่อง physical hardware หรือ licensing'],
    [/\b(?:capacity (?:to be )?available|specific AZ|reserve capacity)\b/i,'ต้องการความมั่นใจว่ามี compute capacity'],
    [/\b(?:7Rs|Rehost|Replatform|Refactor|Repurchase|Relocate|Retain|Retire)\b/i,'แยกกลยุทธ์การย้ายระบบตามระดับการเปลี่ยนแปลง'],
    [/\b(?:migrat\w*|move to AWS|lift.and.shift|replicat\w*|schema conversion)\b/i,'เน้นงาน migration ต้องดูว่าย้ายอะไรและเปลี่ยนอะไร'],
    [/\b(?:on.premises|hybrid cloud)\b/i,'มีทรัพยากรในองค์กรที่ต้องเชื่อมกับ cloud'],
    [/\b(?:API calls?|who (?:deleted|made|called)|which identity|account activity|audit history)\b/i,'ต้องตรวจว่าใครทำอะไรกับ AWS เมื่อใด'],
    [/\b(?:configuration changes?|configuration history|drift|approved baseline|compliance rules)\b/i,'ต้องตรวจ configuration และการเปลี่ยนแปลงของทรัพยากร'],
    [/\b(?:CPU utilization|metrics?|logs?|alarms?|threshold)\b/i,'ต้องติดตาม metrics/logs หรือแจ้งเตือน'],
    [/\b(?:compliance reports?|SOC reports?|third.party audit|audit reports?)\b/i,'ต้องการเอกสารรับรองหรือรายงาน compliance ของ AWS'],
    [/\b(?:suspicious|threat|credential misuse|malicious activity)\b/i,'ต้องตรวจจับพฤติกรรมหรือภัยคุกคาม'],
    [/\b(?:vulnerab\w*|vulnerable packages|software packages|network exposure)\b/i,'ต้องตรวจช่องโหว่ของ workloads'],
    [/\b(?:sensitive data|personally identifiable|PII|confidential objects)\b/i,'ข้อมูลอ่อนไหว ต้องดูการค้นหาและการปกป้อง'],
    [/\b(?:SQL injection|malicious HTTP|web requests?|web application layer)\b/i,'การโจมตีผ่าน HTTP(S) ต้องพิจารณา web request filtering'],
    [/\b(?:DDoS|volumetric attacks|exhaust public network)\b/i,'โจทย์เน้นการป้องกัน DDoS'],
    [/\b(?:cross.account|multiple AWS accounts|permission sets|workforce)\b/i,'ต้องจัดการสิทธิ์หรือ governance ข้ามหลายบัญชี'],
    [/\b(?:temporary credentials|long.term credentials|access keys|assume role)\b/i,'ต้องหลีกเลี่ยง long-term credentials'],
    [/\b(?:least privilege|only read|never delete|minimum permissions)\b/i,'ต้องให้สิทธิ์เท่าที่จำเป็น'],
    [/\b(?:root user|MFA|privileged access)\b/i,'เน้นป้องกันบัญชีที่มีสิทธิ์สูง'],
    [/\b(?:encryption keys?|cryptographic keys?|passwords?|rotate secrets?)\b/i,'ต้องแยกการจัดการ encryption keys กับ secrets'],
    [/\b(?:Kubernetes|control plane)\b/i,'ต้องการ orchestration ที่เข้ากันกับ Kubernetes'],
    [/\b(?:containers?|container hosts?|EC2 hosts?)\b/i,'ต้องแยก container orchestration จาก compute ที่ใช้รัน'],
    [/\b(?:short functions?|triggered by|event.driven|without a persistent server)\b/i,'งานประมวลผลเกิดตาม event ไม่จำเป็นต้องมี server ตลอด'],
    [/\b(?:scheduled|batch jobs?|queueing|scientific jobs?|simulations?)\b/i,'ต้องจัดคิวงานประมวลผลหรือรันงานเป็นชุด'],
    [/\b(?:incoming traffic|distribut\w* requests?|load balanc\w*)\b/i,'ต้องกระจาย requests ไปยังหลาย targets'],
    [/\b(?:relational|SQL Server|PostgreSQL|MySQL|Aurora)\b/i,'ข้อมูลหรือ engine เป็น relational database'],
    [/\b(?:NoSQL|key.value|document database|player profiles|key lookups)\b/i,'เน้น NoSQL หรือการเข้าถึงด้วย key'],
    [/\b(?:graph|relationships?|fraud rings|nodes? and edges?)\b/i,'เน้นความสัมพันธ์ระหว่างข้อมูล'],
    [/\b(?:data warehouse|analytical queries|historical datasets)\b/i,'เน้น analytics บนข้อมูลขนาดใหญ่'],
    [/\b(?:in.memory|cach\w*|frequently accessed)\b/i,'ต้องลดเวลาอ่านข้อมูลซ้ำด้วย cache'],
    [/\b(?:public subnet|private subnet|inbound|outbound|internet connections)\b/i,'ดูทิศทาง traffic และชนิด subnet'],
    [/\b(?:dedicated connection|encrypted connectivity|VPN|private access|public internet)\b/i,'ดูว่าต้องการ dedicated link, encryption หรือ private connectivity'],
    [/\b(?:VPCs|network connectivity|network filtering|security groups?|Network ACL)\b/i,'เน้นการเชื่อมต่อหรือการกรองเครือข่าย'],
    [/\b(?:DNS|domain name|traffic routing)\b/i,'เน้นการแปลงชื่อโดเมนหรือ routing'],
    [/\b(?:object storage|objects?|buckets?|S3)\b/i,'เน้น object storage หรือการจัดการ S3'],
    [/\b(?:block storage|volumes?|scratch storage|instance store)\b/i,'ต้องแยก block storage ถาวรกับ temporary local storage'],
    [/\b(?:file share|shared file|SMB|mount\w*|Windows servers)\b/i,'ต้องการ file system ที่ใช้ร่วมกันหรือ protocol เฉพาะ'],
    [/\b(?:archive|archival|rarely retrieved|years|long retrieval)\b/i,'เน้นข้อมูล archive ที่เรียกคืนไม่บ่อย'],
    [/\b(?:access patterns?|automatically move|infrequent access|storage tiers?)\b/i,'ต้องเลือก storage class ตามความถี่เข้าถึง'],
    [/\b(?:backup policies|centralized backup|disaster recovery)\b/i,'ต้องการการสำรองหรือการกู้คืนข้อมูล'],
    [/\b(?:streaming|clickstream|real.time events|live events)\b/i,'ข้อมูลไหลเข้าต่อเนื่องแบบ real time'],
    [/\b(?:SQL directly on|query.*S3|without provisioning database)\b/i,'ต้องการ query ข้อมูลใน S3 โดยไม่ดูแล server'],
    [/\b(?:ETL|Data Catalog|data integration)\b/i,'เน้นเตรียมและแปลงข้อมูล'],
    [/\b(?:chatbot|utterances|conversational)\b/i,'ต้องการ chatbot หรือการเข้าใจข้อความ/เสียงสนทนา'],
    [/\b(?:scanned|invoices|extract.*text|tables from)\b/i,'ต้องดึงข้อมูลจากเอกสาร'],
    [/\b(?:queue|buffer tasks|downstream outage|decoupl\w*)\b/i,'ต้องเก็บข้อความรอประมวลผลและแยกส่วนระบบ'],
    [/\b(?:pub.sub|subscribers?|notifications?|fan.out)\b/i,'ต้องกระจายข้อความไปหลาย subscribers'],
    [/\b(?:event types|event bus|matching event)\b/i,'ต้อง route events ตามเงื่อนไข'],
    [/\b(?:build and test|release stages|continuous delivery|pipeline|CodeBuild)\b/i,'เกี่ยวกับกระบวนการ build และ deploy software'],
    [/\b(?:estimate|before deploy|planned architecture|projected spending)\b/i,'ต้องประมาณค่าใช้จ่ายก่อนใช้จริง'],
    [/\b(?:line.item|detailed.*usage|custom analysis)\b/i,'ต้องการข้อมูลต้นทุนแบบละเอียดระดับรายการ'],
    [/\b(?:unusual spending|anomal\w*|unexpected charges)\b/i,'ต้องตรวจจับค่าใช้จ่ายผิดปกติ'],
    [/\b(?:consolidated billing|single payer|cost center|departments?)\b/i,'ต้องจัดกลุ่มหรือรวมการเรียกเก็บเงิน'],
    [/\b(?:support cases?|support plans?|technical support)\b/i,'ต้องการช่องทางหรือระดับ AWS Support'],
    [/\b(?:security risk|protect systems and data|security monitoring|identity controls|encryption)\b/i,'เน้นการปกป้องระบบ ข้อมูล และการควบคุมสิทธิ์'],
    [/\b(?:provisioning and shutdown|shutdown outside business hours|unused development instances|stop paying)\b/i,'ลดค่าใช้จ่ายโดยปิดทรัพยากรที่ไม่จำเป็น'],
    [/\b(?:one.time manual change|graphical interface|through a browser|browser.based)\b/i,'ต้องการจัดการ AWS ผ่านหน้าเว็บหรือ GUI'],
    [/\b(?:repeatable template|identical infrastructure|version control|infrastructure as code)\b/i,'ต้องสร้าง infrastructure ซ้ำได้จาก code หรือ template'],
    [/\b(?:community.based|technical knowledge|questions and answers)\b/i,'ต้องการแหล่งความรู้หรือชุมชนถามตอบ'],
    [/\b(?:AWS service event|affecting its account|health event)\b/i,'ต้องตรวจเหตุการณ์ AWS ที่กระทบบัญชีหรือทรัพยากร'],
    [/\b(?:product ideas|experiment|prototypes|rapidly)\b/i,'ต้องทดลองหรือสร้างสิ่งใหม่ได้อย่างรวดเร็ว'],
    [/\b(?:business, people, governance|organizational perspectives|cloud adoption framework|AWS CAF)\b/i,'เน้นกรอบมุมมององค์กรสำหรับการนำ cloud มาใช้'],
    [/\b(?:MOST|BEST|LEAST|PRIMARY|directly|primarily)\b/i,'ต้องเลือกตัวเลือกที่ตรงเงื่อนไขที่สุด ไม่ใช่แค่เกี่ยวข้อง']
  ];
  // Explain the meaning of the concepts named in the question before discussing answers.
  // Match only the question stem/translation, never distractor choices or the answer key.
  const conceptGlossary = [
  {
    "term": "Reliability pillar",
    "pattern": "\\bReliability(?:\\s+pillar)?\\b",
    "meaning": "หนึ่งใน 6 Pillars ของ AWS Well-Architected Framework เน้นให้ workload ทำงานได้ตามที่คาดหวัง และฟื้นตัวจากความล้มเหลว",
    "example": "ใช้ Multi-AZ และทดสอบ Failover"
  },
  {
    "term": "Operational Excellence pillar",
    "pattern": "\\bOperational Excellence(?:\\s+pillar)?\\b",
    "meaning": "Pillar ที่เน้นกระบวนการดำเนินงาน การสังเกตผล การเรียนรู้จาก Incident และการปรับปรุงต่อเนื่อง",
    "example": "ทำ Post-incident Review แล้วปรับขั้นตอน Deployment"
  },
  {
    "term": "Performance Efficiency pillar",
    "pattern": "\\bPerformance Efficiency(?:\\s+pillar)?\\b",
    "meaning": "Pillar ที่เน้นเลือกและใช้ทรัพยากรให้ได้ประสิทธิภาพเหมาะกับ workload",
    "example": "เลือก EC2 Instance Type ให้ได้ Throughput ตามเป้าหมาย"
  },
  {
    "term": "Cost Optimization pillar",
    "pattern": "\\bCost Optimization(?:\\s+pillar)?\\b",
    "meaning": "Pillar ที่เน้นลดต้นทุนที่ไม่จำเป็นและได้รับความคุ้มค่าจากทรัพยากร",
    "example": "ปิด Dev EC2 เมื่อไม่ใช้งาน"
  },
  {
    "term": "Sustainability pillar",
    "pattern": "\\bSustainability(?:\\s+pillar)?\\b",
    "meaning": "Pillar ที่เน้นลดผลกระทบต่อสิ่งแวดล้อมจากการใช้ Cloud",
    "example": "ลบทรัพยากรที่ไม่ได้ใช้งานเพื่อลดการใช้พลังงาน"
  },
  {
    "term": "Security pillar",
    "pattern": "\\bSecurity pillar\\b",
    "meaning": "Pillar ที่เน้นปกป้องข้อมูล ระบบ และสิทธิ์เข้าถึง",
    "example": "ใช้ IAM Least Privilege และเข้ารหัสข้อมูล"
  },
  {
    "term": "Well-Architected Framework",
    "pattern": "\\bWell.Architected(?:\\s+Framework)?\\b",
    "meaning": "กรอบแนวทางของ AWS สำหรับประเมินและออกแบบ workload ผ่าน 6 Pillars",
    "example": "ตรวจสอบทั้ง Reliability, Security และ Cost Optimization ก่อนเปิด Production"
  },
  {
    "term": "AWS Cloud Adoption Framework",
    "pattern": "\\b(?:AWS\\s+CAF|Cloud Adoption Framework)\\b",
    "meaning": "กรอบวางแผน Cloud Adoption ในระดับองค์กรผ่าน 6 Perspectives เช่น People, Governance และ Platform",
    "example": "ประเมินทักษะทีมและกระบวนการก่อน Migration"
  },
  {
    "term": "Shared Responsibility Model",
    "pattern": "\\bShared Responsibility(?:\\s+Model)?\\b",
    "meaning": "AWS ดูแล Security OF the Cloud ส่วนลูกค้าดูแล Security IN the Cloud โดยขอบเขตต่างกันตามบริการ",
    "example": "บน EC2 ลูกค้าต้อง Patch Guest OS แต่ AWS ดูแล Physical Servers"
  },
  {
    "term": "High availability",
    "pattern": "\\bHigh availability\\b",
    "meaning": "ความสามารถให้บริการพร้อมใช้งานต่อเนื่อง โดยลดผลกระทบจาก Component หรือ AZ ล้มเหลว",
    "example": "ใช้ Load Balancer กับ EC2 หลาย AZ"
  },
  {
    "term": "Fault tolerance",
    "pattern": "\\bFault tolerance\\b",
    "meaning": "ความสามารถทำงานต่อได้แม้บางส่วนของระบบล้มเหลว โดยอาศัยส่วนสำรองหรือการออกแบบรองรับความผิดพลาด",
    "example": "Component สำรองรับงานต่อเมื่อ Component หลักล้ม"
  },
  {
    "term": "Durability",
    "pattern": "\\bDurability\\b",
    "meaning": "ความสามารถรักษาข้อมูลไม่ให้สูญหายตามระยะเวลาที่เก็บ ไม่ใช่ความพร้อมใช้งานของบริการ",
    "example": "เก็บไฟล์ใน Amazon S3 ที่ออกแบบเพื่อ Durability สูง"
  },
  {
    "term": "Elasticity",
    "pattern": "\\bElasticity\\b",
    "meaning": "การเพิ่มและลดทรัพยากรตาม Demand ที่เปลี่ยนแปลง",
    "example": "ใช้ Auto Scaling เพิ่ม EC2 ช่วงยอดผู้ใช้สูงและลดหลังจบ"
  },
  {
    "term": "Scalability",
    "pattern": "\\bScalability\\b",
    "meaning": "ความสามารถขยายระบบให้รองรับ Workload ที่เพิ่มขึ้น",
    "example": "เพิ่มจำนวน Web Servers เมื่อจำนวนผู้ใช้โต"
  },
  {
    "term": "Agility",
    "pattern": "\\bAgility\\b",
    "meaning": "ความคล่องตัวในการสร้าง ทดลอง และเปลี่ยนแปลงระบบได้เร็ว",
    "example": "สร้าง Test Environment ในไม่กี่นาที"
  },
  {
    "term": "Rightsizing",
    "pattern": "\\bRightsizing\\b",
    "meaning": "การเลือกขนาดและชนิดทรัพยากรให้เหมาะกับการใช้งานจริง",
    "example": "ลดขนาด EC2 หลังพบว่า CPU ใช้น้อย"
  },
  {
    "term": "Pay-as-you-go",
    "pattern": "\\bPay.as.you.go\\b",
    "meaning": "จ่ายตามการใช้งานจริง แทนการซื้อทรัพยากรล่วงหน้า",
    "example": "ปิด Test EC2 เมื่อทดสอบเสร็จเพื่อลดค่าใช้จ่าย"
  },
  {
    "term": "Economies of scale",
    "pattern": "\\bEconomies of scale\\b",
    "meaning": "ข้อได้เปรียบด้านต้นทุนต่อหน่วยจากการให้บริการในปริมาณมาก",
    "example": "AWS ซื้อ Hardware จำนวนมากและกระจายต้นทุนให้ลูกค้า"
  },
  {
    "term": "Capital expenditure",
    "pattern": "\\b(?:Capital expenditure|CapEx)\\b",
    "meaning": "ค่าใช้จ่ายลงทุนซื้อสินทรัพย์ล่วงหน้า เช่น Hardware ของ Data Center",
    "example": "ซื้อ Physical Servers ก่อนเริ่มให้บริการ"
  },
  {
    "term": "Variable expense",
    "pattern": "\\b(?:Variable expense|OpEx)\\b",
    "meaning": "ค่าใช้จ่ายที่เปลี่ยนตามปริมาณการใช้งาน ไม่ต้องลงทุนทรัพยากรทั้งหมดล่วงหน้า",
    "example": "จ่ายค่า Compute มากขึ้นเฉพาะเดือนที่มีงานมาก"
  },
  {
    "term": "Rehost",
    "pattern": "\\b(?:Rehost|lift.and.shift)\\b",
    "meaning": "กลยุทธ์ย้าย Workload ไป Cloud โดยแทบไม่เปลี่ยนแอป",
    "example": "ย้าย Virtual Machine เดิมไป EC2"
  },
  {
    "term": "Replatform",
    "pattern": "\\bReplatform\\b",
    "meaning": "ย้ายระบบโดยปรับ Platform บางส่วน แต่ไม่เปลี่ยนสถาปัตยกรรมหลัก",
    "example": "เปลี่ยน Self-managed Database เป็น Amazon RDS"
  },
  {
    "term": "Refactor",
    "pattern": "\\b(?:Refactor|re.architect)\\b",
    "meaning": "ปรับโค้ดหรือสถาปัตยกรรมเพื่อใช้ประโยชน์จาก Cloud-native Services",
    "example": "แยก Monolith เป็น Microservices"
  },
  {
    "term": "Retain",
    "pattern": "\\bRetain\\b",
    "meaning": "คง Workload ไว้ที่เดิมในช่วงที่ยังไม่พร้อมย้าย",
    "example": "เก็บแอปที่ติดข้อกำกับดูแลไว้ใน Data Center"
  },
  {
    "term": "Retire",
    "pattern": "\\bRetire\\b",
    "meaning": "เลิกใช้งานแอปที่ไม่มีความจำเป็น แทนการย้ายขึ้น Cloud",
    "example": "ปิดระบบเก่าที่ไม่มีผู้ใช้"
  },
  {
    "term": "AWS Config",
    "pattern": "\\bAWS Config\\b",
    "meaning": "ติดตามประวัติ Configuration ของ AWS Resources และประเมิน Compliance เทียบ Rules",
    "example": "ตรวจว่า S3 Bucket ไม่เปิด Public Access"
  },
  {
    "term": "AWS CloudTrail",
    "pattern": "\\b(?:AWS )?CloudTrail\\b",
    "meaning": "บันทึกกิจกรรม API เพื่อสืบค้นว่าใครทำอะไรใน AWS เมื่อใด",
    "example": "ตรวจว่าใครเรียก DeleteBucket"
  },
  {
    "term": "Amazon CloudWatch",
    "pattern": "\\b(?:Amazon )?CloudWatch\\b",
    "meaning": "ติดตาม Metrics, Logs และสร้าง Alarms เพื่อเฝ้าดูสุขภาพระบบ",
    "example": "แจ้งเตือนเมื่อ EC2 CPUUtilization สูง"
  },
  {
    "term": "AWS Artifact",
    "pattern": "\\bAWS Artifact\\b",
    "meaning": "แหล่งดาวน์โหลดรายงาน Audit และ Compliance ของ AWS ไม่ได้ตรวจ Resource Configuration",
    "example": "ดาวน์โหลด SOC Report ให้ Auditor"
  },
  {
    "term": "AWS Audit Manager",
    "pattern": "\\bAWS Audit Manager\\b",
    "meaning": "ช่วยรวบรวมและจัดการหลักฐานสำหรับการตรวจประเมิน Compliance",
    "example": "เก็บ Evidence จาก AWS Resources เพื่อเตรียม Audit"
  },
  {
    "term": "Amazon GuardDuty",
    "pattern": "\\b(?:Amazon )?GuardDuty\\b",
    "meaning": "ตรวจจับภัยคุกคามและกิจกรรมที่น่าสงสัยใน AWS",
    "example": "แจ้งเตือนการใช้ Credentials ผิดปกติ"
  },
  {
    "term": "Amazon Inspector",
    "pattern": "\\b(?:Amazon )?Inspector\\b",
    "meaning": "ค้นหา Software Vulnerabilities ใน Workloads ที่รองรับ",
    "example": "พบ CVE ใน EC2 หรือ ECR Image"
  },
  {
    "term": "AWS WAF",
    "pattern": "\\bAWS WAF\\b",
    "meaning": "กรอง HTTP/HTTPS Requests ด้วย Rules ระดับ Web Application",
    "example": "บล็อก SQL Injection ก่อนถึง ALB"
  },
  {
    "term": "AWS Shield",
    "pattern": "\\bAWS Shield\\b",
    "meaning": "บริการป้องกันการโจมตีแบบ DDoS",
    "example": "ป้องกัน Traffic Flood ไปยัง Public Endpoint"
  },
  {
    "term": "IAM Role",
    "pattern": "\\bIAM Role\\b",
    "meaning": "Identity ที่ Workload หรือผู้ใช้ Assume เพื่อรับ Temporary Credentials",
    "example": "Lambda ใช้ Execution Role อ่าน DynamoDB"
  },
  {
    "term": "Least privilege",
    "pattern": "\\bLeast privilege\\b",
    "meaning": "หลักให้สิทธิ์เท่าที่จำเป็นต่อการทำงานเท่านั้น",
    "example": "ให้ Lambda อ่าน S3 Bucket เดียวแทนการให้สิทธิ์ทุก Bucket"
  },
  {
    "term": "Amazon ECS",
    "pattern": "\\b(?:Amazon )?ECS\\b",
    "meaning": "บริการจัดการและ Orchestrate Containers แบบ AWS-native โดยไม่ต้องใช้ Kubernetes",
    "example": "รัน Docker Tasks บน ECS Fargate"
  },
  {
    "term": "Amazon EKS",
    "pattern": "\\b(?:Amazon )?EKS\\b",
    "meaning": "Managed Kubernetes Service ที่ AWS ดูแล Kubernetes Control Plane",
    "example": "รัน Kubernetes Deployments บน EKS"
  },
  {
    "term": "AWS Fargate",
    "pattern": "\\b(?:AWS )?Fargate\\b",
    "meaning": "Compute สำหรับ Containers โดยไม่ต้องจัดการ EC2 Hosts",
    "example": "รัน ECS Task โดยไม่ดูแล Server"
  },
  {
    "term": "AWS Lambda",
    "pattern": "\\b(?:AWS )?Lambda\\b",
    "meaning": "รันโค้ดตาม Event โดยไม่ต้อง Provision Servers",
    "example": "ประมวลผลไฟล์เมื่อมี Object ใหม่ใน S3"
  },
  {
    "term": "Amazon S3",
    "pattern": "\\b(?:Amazon )?S3\\b",
    "meaning": "Object Storage สำหรับไฟล์ Backups และ Static Assets",
    "example": "เก็บรูปสินค้าใน S3 Bucket"
  },
  {
    "term": "Amazon EBS",
    "pattern": "\\b(?:Amazon )?EBS\\b",
    "meaning": "Persistent Block Storage สำหรับ EC2",
    "example": "แนบ Volume เป็น Disk ให้ EC2"
  },
  {
    "term": "Amazon EFS",
    "pattern": "\\b(?:Amazon )?EFS\\b",
    "meaning": "Shared File Storage ที่ Linux Instances หลายตัว Mount ร่วมกันได้",
    "example": "EC2 หลายเครื่องอ่านไฟล์จาก EFS เดียวกัน"
  },
  {
    "term": "Amazon RDS",
    "pattern": "\\b(?:Amazon )?RDS\\b",
    "meaning": "Managed Relational Database รองรับ SQL และลดงานดูแล Database",
    "example": "ใช้ PostgreSQL บน RDS เก็บ Orders"
  },
  {
    "term": "Amazon DynamoDB",
    "pattern": "\\b(?:Amazon )?DynamoDB\\b",
    "meaning": "Managed NoSQL Database สำหรับ Key-value/Document ที่ต้องการ Scale",
    "example": "เก็บ Session ด้วย Partition Key"
  },
  {
    "term": "Amazon SQS",
    "pattern": "\\b(?:Amazon )?SQS\\b",
    "meaning": "Message Queue สำหรับแยกส่วนระบบและรอประมวลผลแบบ Asynchronous",
    "example": "Order Service ส่ง Message ให้ Worker"
  },
  {
    "term": "Amazon SNS",
    "pattern": "\\b(?:Amazon )?SNS\\b",
    "meaning": "Pub/Sub สำหรับกระจาย Notification ไปหลาย Subscribers",
    "example": "ส่ง Notification ไป Email และ SQS"
  },
  {
    "term": "Amazon EventBridge",
    "pattern": "\\b(?:Amazon )?EventBridge\\b",
    "meaning": "Event Bus ที่ Route Events ไป Targets ตาม Rules",
    "example": "ส่ง Order Event ไป Lambda"
  },
  {
    "term": "Amazon Athena",
    "pattern": "\\b(?:Amazon )?Athena\\b",
    "meaning": "Serverless SQL Query สำหรับข้อมูลที่เก็บบน S3",
    "example": "Query Access Logs บน S3"
  },
  {
    "term": "AWS Glue",
    "pattern": "\\bAWS Glue\\b",
    "meaning": "Data Integration และ ETL รวมถึง Data Catalog",
    "example": "สร้าง Table Metadata ให้ Athena"
  },
  {
    "term": "Spot Instances",
    "pattern": "\\bSpot Instances?\\b",
    "meaning": "EC2 Spare Capacity ราคาลดลงแต่ AWS อาจ Interrupt ได้",
    "example": "รัน Batch Jobs ที่ Retry ได้"
  },
  {
    "term": "Savings Plans",
    "pattern": "\\bSavings Plans\\b",
    "meaning": "ส่วนลด Compute แลกกับ Commitment การใช้จ่ายต่อชั่วโมง",
    "example": "ใช้กับ Production ที่มี Compute Usage สม่ำเสมอ"
  },
  {
    "term": "AWS Budgets",
    "pattern": "\\bAWS Budgets\\b",
    "meaning": "ตั้ง Budget และแจ้งเตือนเมื่อค่าใช้จ่ายจริงหรือคาดการณ์ถึง Threshold",
    "example": "แจ้งเตือนเมื่อ Forecast ค่า AWS เกินงบ"
  },
  {
    "term": "AWS Cost Explorer",
    "pattern": "\\b(?:AWS )?Cost Explorer\\b",
    "meaning": "ดูและวิเคราะห์ค่าใช้จ่าย AWS ย้อนหลังและแนวโน้ม",
    "example": "เปรียบเทียบค่า EC2 เดือนนี้กับเดือนก่อน"
  },
  {
    "term": "AWS Pricing Calculator",
    "pattern": "\\b(?:AWS )?Pricing Calculator\\b",
    "meaning": "ประเมินค่าใช้จ่ายก่อนสร้าง Workload",
    "example": "คำนวณค่า EC2 และ RDS ก่อน Deploy"
  },
  {
    "term": "Data Exports / CUR 2.0",
    "pattern": "\\b(?:CUR 2\\.0|Data Exports|Cost and Usage Report)\\b",
    "meaning": "ส่งออกรายงาน Cost/Usage แบบละเอียดไป S3 เพื่อวิเคราะห์ต่อ",
    "example": "ใช้ Athena Query CUR 2.0 บน S3"
  },
  {
    "term": "Availability Zone",
    "pattern": "\\b(?:Availability Zones?|Multi.AZ)\\b",
    "meaning": "พื้นที่โครงสร้างพื้นฐานแยกจาก AZ อื่นภายใน Region เพื่อกระจายความเสี่ยง",
    "example": "วาง EC2 หรือ RDS ข้าม AZ เพื่อรองรับ Failure"
  },
  {
    "term": "AWS Region",
    "pattern": "\\b(?:AWS )?Regions?\\b",
    "meaning": "พื้นที่ทางภูมิศาสตร์ที่ AWS ให้บริการ โดยแต่ละ Region มีหลาย Availability Zones",
    "example": "เลือก Region ใกล้ผู้ใช้เพื่อลด Latency"
  },
  {
    "term": "Multi-Region",
    "pattern": "\\bMulti.Region\\b",
    "meaning": "การกระจาย Workloads ข้าม AWS Regions เพื่อรองรับข้อกำหนดด้าน DR หรือผู้ใช้หลายพื้นที่",
    "example": "มีระบบสำรองในอีก Region"
  },
  {
    "term": "DDoS",
    "pattern": "\\bDDoS\\b",
    "meaning": "การโจมตีส่ง Traffic จำนวนมากเพื่อทำให้บริการใช้งานไม่ได้",
    "example": "ใช้ AWS Shield ช่วยป้องกัน DDoS"
  },
  {
    "term": "ETL",
    "pattern": "\\bETL\\b",
    "meaning": "Extract, Transform, Load คือการดึง แปลง และโหลดข้อมูล",
    "example": "ใช้ AWS Glue เตรียมข้อมูลก่อนวิเคราะห์"
  },
  {
    "term": "NoSQL",
    "pattern": "\\bNoSQL\\b",
    "meaning": "ฐานข้อมูลที่ไม่จำเป็นต้องใช้ Relational Tables แบบ SQL",
    "example": "ใช้ DynamoDB เก็บ Key-value Data"
  },
  {
    "term": "Relational database",
    "pattern": "\\b(?:relational databases?|SQL database)\\b",
    "meaning": "ฐานข้อมูลที่จัดข้อมูลเป็นตารางและรองรับความสัมพันธ์",
    "example": "ใช้ RDS PostgreSQL เก็บ Orders และ Customers"
  },
  {
    "term": "Serverless",
    "pattern": "\\bServerless\\b",
    "meaning": "ใช้บริการโดยไม่ต้อง Provision หรือจัดการ Servers เอง แต่ยังต้องดูแล Code/Configuration ที่เกี่ยวข้อง",
    "example": "ใช้ Lambda ประมวลผล Event"
  },
  {
    "term": "Container orchestration",
    "pattern": "\\b(?:container orchestration|Kubernetes)\\b",
    "meaning": "ระบบจัดการ Deployment, Scheduling และการทำงานของ Containers หลายตัว",
    "example": "ใช้ ECS หรือ EKS จัดการ Container Services"
  }
].map(entry=>({...entry,rx:new RegExp(entry.pattern,'i')}));
  function concepts(q){
    const source=String(q.question||'')+' '+String(q.questionTh||'');
    const found=[];
    for(const entry of conceptGlossary){
      if(!entry.rx.test(source))continue;
      // Prefer the specific named concept over the broad framework it belongs to.
      if(entry.term==='Well-Architected Framework'&&found.some(x=>/pillar$/.test(x.term)))continue;
      found.push({term:entry.term,meaning:entry.meaning,example:entry.example});
      if(found.length===2)break;
    }
    return found;
  }
  const esc = value => String(value==null?'':value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function keywords(q){
    const question=String(q.question||'');
    const found=[];
    for(const [pattern,meaning] of signals){
      const m=question.match(pattern);
      if(!m)continue;
      const phrase=m[0].trim().replace(/[.?,;:]$/,'');
      if(!phrase||found.some(x=>x.phrase.toLowerCase()===phrase.toLowerCase()))continue;
      found.push({phrase,meaning});
      if(found.length===3)break;
    }
    // A qualifier such as MOST/BEST is not sufficient by itself: show the actual scenario clue too.
    if(!found.length || found.every(x=>/^(MOST|BEST|LEAST|PRIMARY|directly|primarily)$/i.test(x.phrase))){
      const stem=question.split(/\b(?:Which|What|Who)\b[^?]*\?/i)[0].trim() || question.replace(/^Which\s+(?:TWO\s+)?/i,'');
      const match=stem.match(/\b(?:needs?|wants?|requires?|must|to|for|with|without|uses?|has|sees)\b\s+(.{12,95})/i);
      let phrase=(match?match[0]:stem.slice(-100)).trim().replace(/[.?,;:]$/,'');
      if(phrase.length>105)phrase=phrase.slice(0,105).trim();
      if(phrase && !found.some(x=>x.phrase===phrase))found.unshift({phrase,meaning:'เงื่อนไขหลักของสถานการณ์ที่ต้องใช้ตัดสินใจเลือกคำตอบ'});
    }
    return found.slice(0,3);
  }
  function intent(q){
    const text=String(q.questionTh||'').trim();
    // Identify the actual question in Thai instead of repeating the whole translation.
    const patterns=[/(?:ควรเลือก|ควรใช้|ควรพิจารณา|ควรตั้งค่า|ต้องใช้|ต้องเลือก|บริการใด|เครื่องมือใด|แนวทางใด|กลยุทธ์ใด|คุณสมบัติใด|หลักการใด|ใครรับผิดชอบ|ข้อใด(?:สองข้อ)?|ตัวเลือกใด|เป็น pillar ใด|เป็น strategy ใด|สอดคล้อง pillar ใด|เป็นรูปแบบค่าใช้จ่ายใด).{0,120}$/i];
    for(const p of patterns){const m=text.match(p);if(m)return m[0].replace(/[?？]$/,'');}
    const cleaned=text.replace(/[?？]\s*$/,'');
    if(/^(?:ทำไม|Requirement ใด|ข้อความใด)/i.test(cleaned))return cleaned;
    const ask=cleaned.match(/(?:ประโยชน์|แนวคิด|บริการ|เครื่องมือ|กลยุทธ์|คุณสมบัติ|รูปแบบ|ตัวเลือก|แนวทาง|หลักการ|ความสามารถ|ความรับผิดชอบ|การกระทำ|องค์ประกอบ|ข้อใด|pillar|concept|framework|option|resource|ใคร|อะไร)[^.!?？]{0,110}$/);
    if(ask)return ask[0];
    const tail=cleaned.match(/[^\s]{0,50}(?:ใด|อะไร|ไหน|อย่างไร|ใคร|หรือไม่)[^\s]{0,50}$/);
    if(tail)return tail[0];
    return 'ให้ระบุ'+(q.type==='multiple'?'คำตอบทั้งหมด':'คำตอบ')+'ที่ตอบความต้องการหลักของสถานการณ์ ไม่ใช่เพียงตัวเลือกที่เกี่ยวข้อง';
  }
  function choiceReasons(q){
    const byKey={};
    String(q.explanation||'').split(/\n/).forEach(line=>{
      const m=line.trim().match(/^[✅❌]\s*([A-Z])\s*(?:—|–|-|=)\s*(.*)$/);
      if(m)byKey[m[1]]=m[2].trim();
    });
    return byKey;
  }
  function rows(q,map){
    const reasons=choiceReasons(q);
    return Object.keys(q.choices||{}).map(k=>({
      key:k, shown:map[k]||k, name:q.choices[k], correct:(q.answer||[]).includes(k),
      reason:reasons[k]||'คำอธิบายของตัวเลือกนี้ยังไม่มีในคลังข้อสอบ'
    })).sort((a,b)=>a.shown.localeCompare(b.shown));
  }
  function html(q,map){
    const keys=keywords(q), opts=rows(q,map), answer=opts.filter(o=>o.correct);
    return '<div class="guided-explanation">'+
      '<section class="guide-section"><h4>1. คำแปลโจทย์</h4><p>'+esc(q.questionTh||'ยังไม่มีคำแปลโจทย์')+'</p></section>'+
      '<section class="guide-section"><h4>2. โจทย์ถามอะไร?</h4><p>'+esc(intent(q))+'</p>'+concepts(q).map(c=>'<div class="guide-concept"><strong>'+esc(c.term)+' คืออะไร?</strong><p>'+esc(c.meaning)+'</p><p><em>ตัวอย่าง:</em> '+esc(c.example)+'</p></div>').join('')+'</section>'+
      '<section class="guide-section"><h4>3. Keywords ที่พาไปสู่คำตอบ</h4><ul class="guide-keywords">'+
      keys.map(k=>'<li><strong>'+esc(k.phrase)+'</strong><span>'+esc(k.meaning)+'</span></li>').join('')+
      '</ul></section>'+
      '<section class="guide-section"><h4>4. เฉลย: '+esc(answer.map(o=>o.shown+' — '+o.name).join(' / '))+'</h4><div class="guide-choice-list">'+
      opts.map(o=>'<div class="guide-choice '+(o.correct?'guide-choice-correct':'guide-choice-wrong')+'"><div class="guide-choice-title"><strong>'+(o.correct?'✅':'❌')+' '+esc(o.shown)+'. '+esc(o.name)+'</strong><span>'+(o.correct?'ถูก':'ผิด')+'</span></div><p>'+esc(o.reason)+'</p></div>').join('')+
      '</div></section></div>';
  }
  function plain(q,map){
    const opts=rows(q,map);
    return ['คำแปลโจทย์: '+(q.questionTh||'ยังไม่มีคำแปลโจทย์'),
      'โจทย์ถามอะไร: '+intent(q),
      ...concepts(q).flatMap(c=>[c.term+' คืออะไร: '+c.meaning,'ตัวอย่าง: '+c.example]),
      'Keywords:',...keywords(q).map(k=>'- '+k.phrase+' = '+k.meaning),
      'เฉลย: '+opts.filter(o=>o.correct).map(o=>o.shown+'. '+o.name).join(', '),
      'เหตุผลแต่ละตัวเลือก:',...opts.map(o=>(o.correct?'✅ ':'❌ ')+o.shown+'. '+o.name+' — '+o.reason)].join('\n');
  }
  window.CLF_EXPLANATION_GUIDE={html,plain,keywords,rows,intent,concepts};
})();