(() => {
  const defs = {
    'AWS CloudTrail':'บันทึกกิจกรรม API และการดำเนินการในบัญชี AWS',
    'AWS CloudFront':'content delivery network ใช้ edge locations เพื่อส่ง content ใกล้ผู้ใช้',
    'Amazon Cognito':'จัดการการลงชื่อเข้าใช้ของลูกค้าใน web/mobile applications',
    'Amazon CloudWatch':'เก็บ metrics, logs และสร้าง alarms สำหรับการติดตามระบบ',
    'AWS Config':'ติดตามและประเมิน configuration ของทรัพยากรตามกฎ',
    'AWS Artifact':'ให้ดาวน์โหลดรายงานและเอกสารด้าน compliance ของ AWS',
    'Amazon GuardDuty':'ตรวจจับภัยคุกคามจากสัญญาณและกิจกรรมที่น่าสงสัย',
    'Amazon Inspector':'สแกนช่องโหว่ของ workload ที่รองรับ',
    'AWS Security Hub':'รวม findings และสถานะ security จากหลายแหล่ง',
    'Amazon Detective':'ช่วยสืบสวนความสัมพันธ์ของเหตุการณ์ security',
    'AWS WAF':'กรอง HTTP(S) requests ตาม web ACL rules',
    'AWS Shield':'ป้องกันการโจมตี DDoS',
    'AWS Firewall Manager':'จัดการ security policies ส่วนกลางข้ามบัญชี',
    'AWS IAM':'กำหนด identities, roles และสิทธิ์เข้าถึง AWS',
    'IAM Identity Center':'จัดการการเข้าถึงหลายบัญชีสำหรับ workforce',
    'AWS Organizations':'จัดกลุ่มบัญชีและใช้ governance / consolidated billing',
    'AWS Control Tower':'ตั้งค่าและกำกับ multi-account landing zone',
    'AWS KMS':'สร้างและควบคุม encryption keys',
    'AWS Secrets Manager':'เก็บและหมุนเวียน secrets เช่น database credentials',
    'AWS Certificate Manager':'ออกและจัดการ TLS certificates ที่รองรับ',
    'Amazon Macie':'ค้นหาและจัดประเภทข้อมูลอ่อนไหวใน Amazon S3',
    'IAM Access Analyzer':'วิเคราะห์ resource access และ external access',
    'AWS Trusted Advisor':'ตรวจ best practices รวมถึงต้นทุนและ security',
    'AWS Health Dashboard':'แสดงเหตุการณ์ AWS ที่กระทบทรัพยากรหรือบริการ',
    'Amazon EC2':'ให้ virtual servers ที่ลูกค้าจัดการ guest OS',
    'AWS Lambda':'รันโค้ดแบบ event-driven โดยไม่จัดการ servers',
    'Amazon ECS':'orchestrate containers ด้วย AWS-native control plane',
    'Amazon EKS':'บริการ Kubernetes แบบ managed',
    'AWS Fargate':'compute engine สำหรับ containers โดยไม่จัดการ servers',
    'AWS Batch':'จัดคิวและรัน batch computing jobs',
    'AWS Elastic Beanstalk':'deploy applications พร้อมจัดการ underlying environment',
    'Amazon Lightsail':'bundled virtual servers สำหรับงานเริ่มต้นที่ไม่ซับซ้อน',
    'EC2 Auto Scaling':'ปรับจำนวน EC2 instances ตาม demand',
    'Elastic Load Balancing':'กระจาย incoming traffic ไปยัง targets',
    'AWS CloudFormation':'สร้างและจัดการ infrastructure จาก templates',
    'AWS CDK':'นิยาม cloud infrastructure ด้วย programming languages',
    'AWS CloudShell':'shell ผ่าน browser ที่มี AWS tools พร้อมใช้',
    'AWS Outposts':'นำ AWS infrastructure และ services ไปติดตั้ง on premises',
    'Amazon VPC':'กำหนดเครือข่ายเสมือนแบบแยกส่วนใน AWS',
    'Internet Gateway':'เชื่อม VPC กับอินเทอร์เน็ตตาม route และ security rules',
    'NAT Gateway':'ให้ private subnet เริ่ม outbound connections ไปอินเทอร์เน็ต',
    'VPC endpoint':'เข้าถึง AWS services แบบ private โดยไม่ผ่าน public internet',
    'AWS Transit Gateway':'เชื่อม VPC และ on-premises networks แบบ hub',
    'AWS Direct Connect':'dedicated private network connection ไป AWS',
    'AWS Site-to-Site VPN':'เข้ารหัสการเชื่อมต่อเครือข่ายผ่านอินเทอร์เน็ต',
    'Amazon Route 53':'DNS และ domain routing รวมถึง health checks',
    'Amazon CloudFront':'content delivery network ที่ใช้ edge locations',
    'Amazon API Gateway':'จัดการและเผยแพร่ APIs',
    'Security group':'stateful firewall ที่ระดับ ENI/instance',
    'Network ACL':'stateless filtering ที่ระดับ subnet',
    'Amazon S3':'durable object storage',
    'Amazon S3 Glacier Deep Archive':'archival object storage สำหรับข้อมูลเข้าถึงน้อยมากและยอมรอการกู้คืน',
    'Amazon S3 Intelligent-Tiering':'ปรับ access tiers ตามรูปแบบการเข้าถึงอัตโนมัติ',
    'Amazon S3 Standard-IA':'เก็บข้อมูลเข้าถึงไม่บ่อยแต่ต้องการ retrieval ทันที',
    'Amazon EBS':'persistent block volumes สำหรับ EC2',
    'Instance store':'temporary local block storage ผูกกับ host',
    'Amazon EFS':'shared elastic file system สำหรับ Linux workloads',
    'Amazon FSx for Windows File Server':'managed Windows file shares ด้วย SMB',
    'AWS Storage Gateway':'เชื่อม on-premises applications กับ cloud storage',
    'AWS DataSync':'ย้ายข้อมูลระหว่าง storage locations แบบ online',
    'AWS Snowball Edge':'ย้ายข้อมูลจำนวนมากแบบ physical device',
    'AWS Backup':'รวมศูนย์การตั้งค่า backup policies',
    'Amazon RDS':'managed relational databases',
    'Amazon Aurora':'relational database engine ที่เข้ากันได้กับ MySQL/PostgreSQL',
    'Amazon DynamoDB':'managed NoSQL key-value/document database',
    'Amazon ElastiCache':'managed in-memory caching',
    'Amazon Redshift':'cloud data warehouse สำหรับ analytics',
    'Amazon DocumentDB':'managed document database ที่รองรับ MongoDB-compatible workloads',
    'Amazon Neptune':'managed graph database',
    'AWS DMS':'ย้ายและ replicate databases',
    'AWS SCT':'ช่วยแปลง database schema ระหว่าง engines',
    'AWS Migration Hub':'ติดตามความคืบหน้าการ migration',
    'AWS Application Migration Service':'ย้าย servers โดยทำ lift-and-shift',
    'AWS Application Discovery Service':'รวบรวมข้อมูล servers และ dependencies เพื่อวางแผน migration',
    'AWS Migration Evaluator':'ช่วยสร้าง business case และ cost assessment ก่อน migration',
    'AWS Cloud Adoption Framework':'กรอบแนวทางการเปลี่ยนผ่านองค์กรสู่ cloud',
    'AWS Well-Architected Framework':'แนวทางออกแบบ workloads ตาม 6 pillars',
    'AWS Well-Architected Tool':'ประเมิน workloads เทียบ best practices',
    'AWS Pricing Calculator':'ประเมินค่าใช้จ่ายก่อนใช้งาน',
    'AWS Cost Explorer':'วิเคราะห์ค่าใช้จ่ายจริงและแนวโน้ม',
    'AWS Budgets':'กำหนด budgets และแจ้งเตือนตาม thresholds',
    'AWS Cost and Usage Report':'ข้อมูลค่าใช้จ่ายและการใช้งานละเอียด',
    'AWS Cost Anomaly Detection':'ตรวจพบรูปแบบค่าใช้จ่ายผิดปกติ',
    'AWS Support Center':'เปิดและติดตาม support cases',
    'AWS re:Post':'ชุมชนถามตอบเกี่ยวกับ AWS',
    'AWS Marketplace':'ค้นหาและซื้อซอฟต์แวร์/บริการจาก third parties',
    'AWS Partner Network':'เครือข่ายคู่ค้าของ AWS',
    'Amazon SNS':'pub/sub notifications และ fan-out',
    'Amazon SQS':'managed queues สำหรับ decoupling',
    'Amazon EventBridge':'event bus และ event routing ตาม rules',
    'AWS Step Functions':'orchestrate workflows แบบ state machines',
    'Amazon Kinesis Data Streams':'streaming data ingestion สำหรับ consumers',
    'AWS Glue':'serverless data integration และ catalog',
    'Amazon Athena':'query data ใน S3 ด้วย SQL',
    'Amazon Quick Sight':'business intelligence dashboards',
    'Amazon SageMaker AI':'สร้าง ฝึก และ deploy machine learning models',
    'Amazon Bedrock':'ใช้งาน foundation models ผ่าน managed APIs',
    'Amazon Lex':'สร้าง conversational interfaces',
    'Amazon Polly':'แปลงข้อความเป็นเสียงพูด',
    'Amazon Rekognition':'วิเคราะห์ภาพและวิดีโอ',
    'Amazon Textract':'ดึงข้อความและโครงสร้างจากเอกสาร',
    'AWS CodeBuild':'build และ test source code',
    'AWS CodePipeline':'automate release pipelines',
    'AWS X-Ray':'trace distributed application requests',
    'Amazon SES':'ส่งอีเมลผ่านบริการ managed',
    'Amazon Connect':'cloud contact center',
    'Amazon WorkSpaces':'managed virtual desktops',
    'Amazon AppStream 2.0':'stream desktop applications ไปยัง users',
    'AWS Amplify':'เครื่องมือสร้างและโฮสต์ web/mobile applications',
    'AWS IoT Core':'เชื่อมและจัดการ messages จาก IoT devices',
    'Availability Zone':'พื้นที่โครงสร้างพื้นฐานที่แยกจาก AZ อื่นใน Region',
    'AWS Region':'พื้นที่ทางภูมิศาสตร์ที่มีหลาย Availability Zones',
    'Edge location':'จุดกระจาย content ใกล้ผู้ใช้',
    'Multi-AZ deployment':'ออกแบบ resilience ภายใน Region ด้วยหลาย AZ',
    'Multi-Region deployment':'กระจาย workloads ข้าม Regions',
    'Elasticity':'ปรับทรัพยากรเพิ่มลดตาม demand',
    'Scalability':'ความสามารถรองรับภาระงานที่เพิ่มขึ้น',
    'Agility':'จัดสรรและทดลองทรัพยากรได้รวดเร็ว',
    'High availability':'ออกแบบให้บริการพร้อมใช้งานต่อเนื่อง',
    'Durability':'โอกาสที่ข้อมูลยังคงอยู่ไม่สูญหาย',
    'Fault tolerance':'ทำงานต่อได้เมื่อบางส่วนล้มเหลว',
    'Operational Excellence':'เน้นการดำเนินงาน การปรับปรุง และการเรียนรู้',
    'Security':'เน้นปกป้องข้อมูล ระบบ และ assets',
    'Reliability':'เน้นการฟื้นตัวและการทำงานตามที่คาดหวัง',
    'Performance Efficiency':'เน้นการใช้ทรัพยากรให้เหมาะกับ workload',
    'Cost Optimization':'เน้นคุณค่าที่ได้รับเทียบค่าใช้จ่าย',
    'Sustainability':'ลดผลกระทบด้านสิ่งแวดล้อมของ workloads',
    'Rehost':'ย้าย workload โดยเปลี่ยนแปลงน้อยที่สุด',
    'Replatform':'ย้ายและปรับแพลตฟอร์มบางส่วน',
    'Refactor':'ปรับสถาปัตยกรรมแอปเพื่อใช้ cloud-native',
    'Retire':'เลิกใช้แอปที่ไม่จำเป็น',
    'Retain':'เก็บแอปไว้ในสภาพแวดล้อมเดิม',
    'On-Demand Instances':'คิดเงินตามการใช้งานโดยไม่มีสัญญาระยะยาว',
    'Spot Instances':'ใช้ EC2 spare capacity ที่อาจถูกขัดจังหวะ',
    'Reserved Instances':'ส่วนลดตาม commitment และคุณสมบัติที่กำหนด',
    'Savings Plans':'ส่วนลดตาม commitment ด้านการใช้ compute',
    'Dedicated Hosts':'physical server ที่สงวนให้ลูกค้ารายเดียว',
    'On-Demand Capacity Reservations':'จอง capacity ใน AZ โดยไม่ผูกกับส่วนลดค่าใช้งาน',
    'Cost allocation tags':'แยกค่าใช้จ่ายตาม tags ของทรัพยากร',
    'Consolidated billing':'รวมการเรียกเก็บเงินหลายบัญชีใน Organizations',
    'Economies of scale':'ลดต้นทุนต่อหน่วยจากการใช้ทรัพยากรในปริมาณมาก',
    'Pay-as-you-go':'จ่ายตามปริมาณทรัพยากรที่ใช้',
    'Rightsizing':'เลือกขนาดทรัพยากรให้ตรงความต้องการ',
    'Capital expenditure':'ค่าใช้จ่ายลงทุนล่วงหน้าในสินทรัพย์',
    'Variable expense':'ค่าใช้จ่ายที่เปลี่ยนตามการใช้งาน'
  };
  // Cross-service responsibility and security-principle distractors
  Object.assign(defs, {
    "Configuring IAM permissions": "ลูกค้ากำหนดสิทธิ์ IAM identities และ resource access ที่จำเป็น",
    "Managing customer encryption key policies": "ลูกค้ากำหนดนโยบายการใช้ encryption keys ที่ควบคุมเอง",
    "Securing AWS data centers": "หน้าที่ของ AWS ในการรักษาความปลอดภัยศูนย์ข้อมูลทางกายภาพ",
    "Maintaining AWS physical servers": "หน้าที่ของ AWS ในการบำรุงรักษา hardware underlying services",
    "Maintaining AWS global network infrastructure": "หน้าที่ของ AWS ในการดูแลเครือข่าย backbone ของ AWS",
    "The customer": "ลูกค้า AWS ผู้ดูแลข้อมูลและสิทธิ์เข้าถึงข้อมูลของตน",
    "AWS": "ผู้ให้บริการ cloud ที่ดูแลความปลอดภัยของ infrastructure",
    "AWS Support": "ทีมสนับสนุนเพื่อช่วยแก้ปัญหาการใช้บริการ ไม่ได้กำหนดสิทธิ์ข้อมูลแทนลูกค้า",
    "The third-party auditor": "ผู้ตรวจประเมินภายนอก ไม่ได้เป็นเจ้าของนโยบายการเข้าถึงของลูกค้า",
    "The internet service provider": "ผู้ให้บริการอินเทอร์เน็ต ไม่ได้เป็นผู้กำหนดสิทธิ์ใน S3",
    "Least privilege": "หลักให้สิทธิ์เท่าที่จำเป็นต่อการทำงาน",
    "Defense in depth": "หลักใช้มาตรการรักษาความปลอดภัยหลายชั้น",
    "Separation of duties": "หลักแยกหน้าที่หรืออำนาจสำคัญเพื่อป้องกันการใช้งานผิด",
    "Zero Trust": "หลักไม่เชื่อถือโดยอัตโนมัติและตรวจสอบการเข้าถึงต่อเนื่อง",
    "Managing customer-data encryption settings": "ลูกค้าตั้งค่าการเข้ารหัสข้อมูลตามข้อกำหนดของตน",
    "Defining data-access permissions": "ลูกค้ากำหนดว่า identity ใดเข้าถึงข้อมูลอะไรได้",
    "Patching AWS-owned physical hosts": "หน้าที่ของ AWS ในการดูแลระบบ host ทางกายภาพที่ตนเป็นเจ้าของ",
    "Guest operating system": "ระบบปฏิบัติการภายใน EC2 ที่ลูกค้าต้องกำหนดค่าและ patch",
    "Hypervisor": "ระบบ virtualization underlying EC2 ที่ AWS ดูแล",
    "AWS-owned physical servers": "เครื่อง server จริงใน AWS data centers ที่ AWS ดูแล",
    "AWS data center power systems": "ระบบไฟฟ้าและโครงสร้างพื้นฐานของ data centers ที่ AWS ดูแล"
  });
  // Explain each distractor by its real function and the distinction from this question's requirement.
  // Preserve existing answer keys and the authored explanation for correct choices.
  const specificContrasts = {
    'Agility|Elasticity': {
      'Rightsizing':'Rightsizing คือการเลือกขนาด resource ให้พอดีกับ workload ไม่ได้อธิบายทั้งการทดลองได้เร็วและการปรับ capacity ขึ้นลงตาม demand',
      'Scalability':'Scalability คือความสามารถรองรับ workload ที่เติบโต แต่ไม่ใช่ความคล่องตัวในการสร้าง environment และไม่ได้เน้นการลด capacity เมื่อ demand ลด',
      'High availability':'High availability เน้นให้บริการพร้อมใช้งานแม้บางส่วนมีปัญหา ไม่ใช่ความเร็วในการทดลองหรือการปรับ capacity ตาม demand'
    },
    'Agility': {
      'Elasticity':'Elasticity คือการเพิ่มลด capacity ตาม demand ส่วนโจทย์นี้เน้นความเร็วในการสร้างและเลิกใช้ test environment',
      'Scalability':'Scalability คือการรองรับ workload ที่เพิ่มขึ้น แต่โจทย์เน้นความเร็วในการทดลองและ deploy',
      'Pay-as-you-go':'Pay-as-you-go คือจ่ายตามการใช้งานจริง แม้ช่วยเรื่องค่าใช้จ่าย แต่ไม่ใช่คุณสมบัติที่อธิบายความเร็วในการสร้าง environment'
    },
    'Elasticity': {
      'Scalability':'Scalability คือความสามารถรองรับโหลดที่เพิ่มขึ้น ส่วน Elasticity เน้นปรับทั้งเพิ่มและลด capacity ตาม demand ที่เปลี่ยนไป',
      'Rightsizing':'Rightsizing คือเลือกขนาด resource ให้เหมาะกับการใช้งานที่วัดได้ แต่ไม่ได้หมายถึงการเพิ่มลด capacity ตาม demand แบบต่อเนื่อง',
      'High availability':'High availability เน้นลด downtime เมื่อระบบบางส่วนล้มเหลว ไม่ใช่การปรับ capacity ตามจำนวนผู้ใช้'
    },
    'Fault tolerance': {
      'High availability':'High availability มุ่งให้บริการพร้อมใช้งานโดยรวม แต่อาจมีช่วง failover; โจทย์นี้เน้นทำงานต่อได้แม้ component หยุดกะทันหัน',
      'Reliability':'Reliability เป็นแนวคิดกว้างเรื่องการทำงานและฟื้นจาก failure ส่วนโจทย์เจาะจงความสามารถทำงานต่อเมื่อ component ล้มเหลว',
      'Multi-AZ deployment':'Multi-AZ deployment เป็นวิธีวางระบบข้าม AZ เพื่อเพิ่ม resilience ไม่ใช่ชื่อคุณสมบัติที่โจทย์ถาม'
    },
    'Performance Efficiency': {
      'Cost Optimization':'Cost Optimization เน้นความคุ้มค่าของค่าใช้จ่าย ส่วนโจทย์นี้วัดการเลือก instance ให้ได้ throughput ตามเป้าหมาย',
      'Operational Excellence':'Operational Excellence เน้นการดำเนินงานและปรับปรุงกระบวนการ ไม่ได้เน้นการเลือก compute เพื่อให้ได้ throughput',
      'Sustainability':'Sustainability เน้นผลกระทบต่อสิ่งแวดล้อม ไม่ใช่การเลือก resource ให้ได้ performance targets'
    },
    'Rehost': {
      'Replatform':'Replatform มีการปรับ platform บางส่วน เช่นเปลี่ยนไปใช้ managed database แต่โจทย์ระบุว่าแทบไม่เปลี่ยนแอป',
      'Refactor':'Refactor ปรับ architecture/code มากเพื่อใช้ cloud-native แต่โจทย์ระบุว่ามีการเปลี่ยนแปลงน้อยมาก',
      'Retain':'Retain คือยังเก็บ workload ไว้ที่เดิม ไม่ใช่ย้ายขึ้น AWS virtual machines'
    },
    'Replatform': {
      'Rehost':'Rehost ย้ายโดยแทบไม่ปรับ platform แต่โจทย์มีการเปลี่ยน self-managed database เป็น RDS',
      'Refactor':'Refactor ปรับ architecture/code เชิงลึก แต่โจทย์เปลี่ยน platform บางส่วนและแก้ code เพียงเล็กน้อย',
      'Retain':'Retain คือเก็บระบบไว้ที่เดิม ไม่ใช่ย้ายแอปขึ้น AWS'
    },
    'Refactor': {
      'Replatform':'Replatform เปลี่ยน platform บางส่วนโดยยังคงโครงสร้างหลัก แต่โจทย์ต้องการแยก monolith และออกแบบ cloud-native',
      'Rehost':'Rehost คือ lift-and-shift โดยแก้ไขน้อย ไม่ใช่การปรับ architecture เป็น cloud-native',
      'Retain':'Retain คือคงระบบไว้ที่เดิม ไม่ได้เปลี่ยนสถาปัตยกรรมระหว่าง migration'
    },
    'Rightsizing': {
      'Cost Optimization':'Cost Optimization เป็นเป้าหมายกว้างในการลดค่าใช้จ่าย ส่วนโจทย์ระบุวิธีลดขนาด instance จาก usage ที่วัดได้',
      'Performance Efficiency':'Performance Efficiency เป็น pillar ด้านประสิทธิภาพ แต่โจทย์ถามชื่อวิธีเลือกขนาด resource ให้พอดี',
      'Economies of scale':'Economies of scale คือข้อได้เปรียบด้านต้นทุนจากการใช้ทรัพยากรรวมจำนวนมาก ไม่ใช่การลดขนาด instance ของบริษัท'
    },
    'AWS Config': {
      'AWS CloudTrail':'CloudTrail ติดตาม API activity ว่าใครทำอะไร แต่ไม่ได้ประเมิน configuration compliance เทียบ rules ตามเวลา',
      'Amazon CloudWatch':'CloudWatch ดู metrics/logs/alarms ไม่ได้เป็นบริการหลักสำหรับประเมิน resource configurations เทียบ rules',
      'AWS Audit Manager':'Audit Manager ช่วยรวบรวมหลักฐานการตรวจประเมิน ไม่ได้ติดตาม resource configuration history เป็นหลัก'
    }
  };
  const distractorExamples = {
  "Performance Efficiency": "เลือก EC2 Instance Type ให้เหมาะกับงาน CPU-intensive เพื่อให้ได้ throughput ตามเป้าหมาย",
  "Security": "ใช้ IAM จำกัดสิทธิ์และ AWS KMS จัดการ encryption keys",
  "Operational Excellence": "ทำ post-incident review แล้วปรับ deployment procedure",
  "Reliability": "วางระบบหลาย Availability Zones และทดสอบ failover",
  "Cost Optimization": "ปิด development EC2 ที่ไม่ได้ใช้เพื่อลดค่าใช้จ่าย",
  "Sustainability": "ลดทรัพยากรที่ไม่จำเป็นเพื่อลดการใช้พลังงาน",
  "High availability": "วาง Application Load Balancer หน้า EC2 หลาย AZ เพื่อลด downtime",
  "Fault tolerance": "ให้ component สำรองรับงานต่อได้เมื่อ component หลักล้มเหลว",
  "Durability": "เก็บ objects ใน Amazon S3 เพื่อลดความเสี่ยงข้อมูลสูญหาย",
  "Agility": "สร้าง test environment ใหม่ภายในไม่กี่นาที",
  "Elasticity": "ใช้ Auto Scaling เพิ่ม instance ช่วง traffic สูงและลดลงเมื่อ traffic ต่ำ",
  "Scalability": "ขยายระบบให้รองรับจำนวนผู้ใช้ที่เพิ่มขึ้น",
  "Rightsizing": "ลด EC2 จากขนาดใหญ่เป็นขนาดเล็กหลังตรวจ CPU/Memory utilization",
  "Pay-as-you-go": "หยุดจ่ายค่า compute เมื่อปิดทรัพยากรที่คิดตามเวลาใช้งาน",
  "Economies of scale": "AWS กระจายต้นทุนโครงสร้างพื้นฐานให้ลูกค้าจำนวนมาก",
  "Capital expenditure": "ซื้อ physical servers ก่อนเริ่มใช้งาน",
  "Variable expense": "จ่ายค่า compute ตามการใช้งานแต่ละเดือน",
  "Multi-AZ deployment": "วาง database standby ในอีก AZ เพื่อรองรับ failover",
  "Multi-Region deployment": "ให้บริการ workload จากมากกว่าหนึ่ง AWS Region",
  "Cost allocation tags": "ติด tag Project หรือ Team เพื่อแยกค่าใช้จ่าย",
  "Consolidated billing": "รวมค่าใช้จ่ายหลาย AWS accounts ไว้ที่ payer account",
  "AWS Budgets": "แจ้งเตือนเมื่อค่าใช้จ่ายคาดว่าจะเกินงบ",
  "AWS Cost Explorer": "ดูแนวโน้มค่า EC2 และ S3 ย้อนหลัง",
  "AWS Pricing Calculator": "ประเมินราคา workload ก่อน deploy",
  "Savings Plans": "commit ค่า compute ต่อชั่วโมงเพื่อรับส่วนลด",
  "Spot Instances": "รัน batch jobs ที่ทนต่อ interruption ได้",
  "On-Demand Instances": "เปิด EC2 สำหรับงานชั่วคราวโดยไม่ต้อง commit",
  "Reserved Instances": "รับส่วนลดจาก commitment สำหรับการใช้งานตามเงื่อนไข",
  "Rehost": "ย้าย virtual machine ไป EC2 โดยแทบไม่แก้แอป",
  "Replatform": "ย้าย database ไป RDS โดยแก้แอปเพียงเล็กน้อย",
  "Refactor": "ปรับ monolith เป็น microservices ที่ใช้ managed services",
  "Retain": "เก็บแอปไว้ใน data center เดิมก่อน",
  "Retire": "เลิกใช้แอปที่ไม่มีผู้ใช้งาน",
  "AWS CloudTrail": "ตรวจว่า IAM principal ใดเรียก DeleteBucket เมื่อไร",
  "Amazon CloudWatch": "สร้าง Alarm จาก CPUUtilization หรือ application errors",
  "AWS Config": "ตรวจว่า S3 bucket เป็นไปตาม configuration rules หรือไม่",
  "AWS Artifact": "ดาวน์โหลด SOC report สำหรับทีม Audit",
  "Amazon GuardDuty": "ตรวจพบการใช้ credentials ที่น่าสงสัย",
  "Amazon Inspector": "ตรวจพบ CVE ใน EC2 หรือ ECR container image",
  "AWS Security Hub": "รวม security findings จากหลายบริการ",
  "AWS WAF": "บล็อก HTTP request ที่มีรูปแบบ SQL injection",
  "AWS Shield": "ช่วยป้องกันการโจมตี DDoS",
  "AWS Firewall Manager": "จัดการ WAF policies ข้ามหลาย accounts",
  "AWS IAM": "กำหนด IAM policy ให้ application อ่าน S3 ได้",
  "IAM Identity Center": "ให้พนักงานใช้ SSO เข้า AWS accounts",
  "AWS KMS": "ควบคุม encryption key ที่ใช้กับ S3",
  "AWS Secrets Manager": "เก็บและหมุนเวียน database password",
  "Amazon EC2": "ติดตั้งแอปและดูแล guest OS บน virtual server",
  "AWS Lambda": "รันโค้ดเมื่อ S3 มี object ใหม่",
  "Amazon ECS": "จัดการ container tasks และ services",
  "Amazon EKS": "รัน Kubernetes workloads โดย AWS ดูแล control plane",
  "AWS Fargate": "รัน ECS tasks โดยไม่ต้องดูแล EC2 hosts",
  "AWS Batch": "จัดคิวและประมวลผล batch jobs",
  "EC2 Auto Scaling": "เพิ่มหรือลดจำนวน EC2 ตาม metric",
  "Elastic Load Balancing": "กระจาย HTTP requests ไปหลาย EC2 targets",
  "Amazon RDS": "ใช้ managed PostgreSQL เก็บข้อมูลธุรกรรม",
  "Amazon DynamoDB": "เก็บ key-value data ที่ต้องการ low latency",
  "Amazon ElastiCache": "cache ผลลัพธ์ query ที่อ่านซ้ำบ่อย",
  "Amazon S3": "เก็บรูปภาพหรือ backup files เป็น objects",
  "Amazon EBS": "แนบ block volume เป็น disk ให้ EC2",
  "Amazon EFS": "ให้หลาย Linux EC2 mount file system เดียวกัน",
  "Amazon VPC": "แยก public subnet และ private subnet",
  "Amazon Route 53": "กำหนด DNS record ให้ domain ชี้ไป ALB",
  "Amazon CloudFront": "cache static assets ใกล้ผู้ใช้",
  "Amazon SQS": "เก็บ messages รอ worker ประมวลผล",
  "Amazon SNS": "ส่ง notification จาก topic ไปหลาย subscribers",
  "Amazon EventBridge": "route events ไป targets ตาม event patterns",
  "AWS Step Functions": "จัดลำดับขั้นตอนของ workflow",
  "Amazon Athena": "ใช้ SQL query logs ที่เก็บใน S3",
  "AWS Glue": "สร้าง Data Catalog และทำ ETL",
  "Amazon Kinesis Data Streams": "รับ streaming records แบบต่อเนื่อง",
  "AWS DMS": "replicate ข้อมูลจากฐานข้อมูลต้นทางไปปลายทาง",
  "AWS SCT": "แปลง database schema ระหว่าง engines",
  "AWS Migration Hub": "ติดตามสถานะการย้ายแอปจากหลาย tools",
  "AWS Application Discovery Service": "เก็บ server inventory และ dependencies ก่อน migration",
  "AWS Migration Evaluator": "ประเมิน business case และค่าใช้จ่ายก่อน migration",
  "AWS Application Migration Service": "replicate และย้าย servers ไป AWS แบบ lift-and-shift",
  "AWS Well-Architected Framework": "ทบทวนการออกแบบ workload ตาม 6 pillars",
  "AWS Cloud Adoption Framework": "ประเมิน People, Governance, Platform และมุมมองอื่นก่อน adoption",
  "Availability Zone": "แยก infrastructure เพื่อกระจายความเสี่ยงภายใน Region",
  "AWS Region": "เลือก Region ใกล้ผู้ใช้หรือสอดคล้องข้อกำหนดข้อมูล",
  "Edge location": "ให้ CloudFront ส่ง content จาก edge ใกล้ผู้ใช้",
  "AWS Direct Connect": "ใช้ dedicated network connection เชื่อม data center กับ AWS",
  "AWS Site-to-Site VPN": "สร้าง encrypted tunnel ผ่าน internet",
  "VPC endpoint": "ให้ private subnet ติดต่อ AWS service แบบ private",
  "NAT Gateway": "ให้ private subnet เริ่ม outbound internet connections",
  "Internet Gateway": "เปิดเส้นทาง internet สำหรับ VPC ตาม route",
  "Security group": "ควบคุม inbound/outbound traffic ระดับ ENI",
  "Network ACL": "กรอง traffic ระดับ subnet แบบ stateless",
  "Guest operating system": "ลูกค้า patch และ configure Linux บน EC2",
  "Hypervisor": "AWS ดูแล virtualization layer ใต้ EC2",
  "AWS-owned physical servers": "AWS ดูแล hardware จริงใน data center",
  "The customer": "ลูกค้ากำหนดสิทธิ์เข้าถึงข้อมูลและ configuration ของตน",
  "AWS": "AWS ดูแลความปลอดภัยของ physical cloud infrastructure"
};
  function explainDistractor(option, correctOptions, why) {
    const key=correctOptions.join('|');
    const specific=specificContrasts[key] && specificContrasts[key][option];
    if(specific) return specific;
    // Give each wrong option its own function and practical example.
    // Do not repeat the correct-answer explanation under every distractor.
    const definition=defs[option];
    const example=distractorExamples[option];
    return definition+(example?' เช่น '+example:'');
  }
  const domainNames={1:'Cloud Concepts',2:'Security and Compliance',3:'Cloud Technology and Services',4:'Billing, Pricing, and Support'};
  const tasks=['1.1','1.2','1.3','1.4','2.1','2.2','2.3','2.4','3.1','3.2','3.3','3.4','3.5','3.6','3.7','3.8','4.1','4.2','4.3'];
  function build(setNumber,rows){
    const errors=[],domainCount={},taskCount={},typeCount={},seen=new Set();
    const questions=rows.map((r,i)=>{
      const [task,question,questionTh,optionString,correctString,why]=r;
      const options=optionString.split('|'),correct=correctString.split(',').map(Number);
      const type=correct.length===1?'single':'multiple';
      const choices=Object.fromEntries(options.map((o,j)=>[String.fromCharCode(65+j),o]));
      const answer=correct.map(j=>String.fromCharCode(65+j));
      const explanation=options.map((o,j)=>{
        const letter=String.fromCharCode(65+j);
        return correct.includes(j)?'✅ '+letter+' — '+why:'❌ '+letter+' — '+explainDistractor(o,correct.map(index=>options[index]),why);
      }).join('\n');
      const domain=Number(task[0]);
      domainCount[domain]=(domainCount[domain]||0)+1;taskCount[task]=(taskCount[task]||0)+1;typeCount[type]=(typeCount[type]||0)+1;
      if(!tasks.includes(task))errors.push('Unknown task '+task);
      if(seen.has(question.toLowerCase()))errors.push('Repeated stem '+(i+1));seen.add(question.toLowerCase());
      if(!questionTh||questionTh.length<20)errors.push('Thai translation missing '+(i+1));
      if(!why||why.length<25)errors.push('Short explanation '+(i+1));
      if(type==='single'&&(options.length!==4||correct.length!==1))errors.push('Bad single '+(i+1));
      if(type==='multiple'&&(options.length<5||!question.includes('Select TWO')||correct.length!==2))errors.push('Bad multiple '+(i+1));
      if(new Set(options).size!==options.length)errors.push('Duplicate options '+(i+1));
      if(options.some(o=>!defs[o]))errors.push('Missing option definition '+(i+1)+': '+options.filter(o=>!defs[o]).join(','));
      if(correct.some(j=>j<0||j>=options.length))errors.push('Bad answer '+(i+1));
      return {id:i+1,domain,domainName:domainNames[domain],task,type,question,questionTh,choices,answer,explanation,vocab:[]};
    });
    if(questions.length!==65)errors.push('Expected 65 questions, got '+questions.length);
    for(const [d,n] of Object.entries({1:16,2:19,3:22,4:8}))if(domainCount[d]!==n)errors.push('Domain '+d+' count '+domainCount[d]);
    for(const t of tasks)if(!taskCount[t])errors.push('Missing task '+t);
    if((typeCount.multiple||0)<8)errors.push('Not enough multiple-response questions');
    const id='local-set-0'+setNumber;
    const set={id,title:'Local Mock Set '+setNumber,subtitle:'65 Questions · Official CLF-C02 Blueprint · Original Exam-Style Questions',questionCount:65,questions,_blueprint:{domains:domainCount,types:typeCount,tasks:taskCount,qualityProblems:errors,sourceNote:['Official AWS CLF-C02 Exam Guide and AWS service documentation; independently authored questions, not sourced from AWS Learning Hub.']}};
    window['LOCAL_SET_0'+setNumber+'_VALIDATION']={ok:errors.length===0,problems:errors};
    if(errors.length){console.error('CLF-C02 Set '+setNumber+' validation failed',errors);return;}
    const sets=window.QUIZ_SETS=window.QUIZ_SETS||[];
    const idx=sets.findIndex(s=>s.id===id);
    if(idx>=0)sets[idx]=set;else sets.push(set);
  }
  window.buildClfLocalExamSet=build;
})();