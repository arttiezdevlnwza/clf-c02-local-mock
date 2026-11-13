(() => {
  const rows = [
  [
    "1.1",
    "A company opens temporary test environments for each software release and deletes them afterward. Which cloud benefit makes this approach practical?",
    "บริษัทสร้างสภาพแวดล้อมทดสอบชั่วคราวสำหรับแต่ละ release แล้วลบทิ้ง ประโยชน์ cloud ใดรองรับแนวทางนี้",
    "Agility|Durability|Fault tolerance|Economies of scale",
    "0",
    "Agility ช่วยให้ทีมสร้างและเลิกใช้สภาพแวดล้อมได้รวดเร็ว ลดเวลารอการจัดหา hardware"
  ],
  [
    "1.1",
    "An online event has unpredictable peaks. The company wants to avoid keeping maximum capacity running all month. Which concept is MOST relevant?",
    "งานออนไลน์มีผู้ใช้งานพุ่งไม่แน่นอน บริษัทไม่อยากเปิด capacity สูงสุดทั้งเดือน ควรใช้แนวคิดใด",
    "Elasticity|High availability|Durability|Capital expenditure",
    "0",
    "Elasticity เพิ่มและลดทรัพยากรตาม demand จึงไม่จำเป็นต้องคง capacity สูงสุดไว้ตลอด"
  ],
  [
    "1.1",
    "Which TWO cloud characteristics can help a business experiment rapidly and handle varying demand? (Select TWO.)",
    "ลักษณะ cloud สองข้อใดช่วยให้ธุรกิจทดลองได้เร็วและรับมือ demand ที่เปลี่ยนแปลง",
    "Agility|Elasticity|Durability|Capital expenditure|Retain",
    "0,1",
    "Agility ทำให้ทดลองและ deploy ได้เร็ว ส่วน Elasticity ปรับ capacity ตาม demand"
  ],
  [
    "1.1",
    "A payment application must continue operating when a component unexpectedly stops. Which characteristic describes this requirement?",
    "แอปชำระเงินต้องทำงานต่อแม้ส่วนประกอบหนึ่งหยุดกะทันหัน คุณสมบัติใดตรงที่สุด",
    "Fault tolerance|Agility|Economies of scale|Variable expense",
    "0",
    "Fault tolerance คือความสามารถของระบบที่จะทำงานต่อแม้ส่วนประกอบบางส่วนล้มเหลว"
  ],
  [
    "1.2",
    "An operations team reviews incidents, documents lessons learned, and improves deployment procedures. Which Well-Architected pillar is MOST relevant?",
    "ทีม operations ทบทวน incident บันทึกบทเรียนและปรับปรุงการ deploy สอดคล้อง pillar ใด",
    "Operational Excellence|Security|Sustainability|Cost Optimization",
    "0",
    "Operational Excellence เน้นเรียนรู้จากการดำเนินงานและปรับปรุงขั้นตอนอย่างต่อเนื่อง"
  ],
  [
    "1.2",
    "A company wants to reduce unnecessary computing resources to lower the environmental impact of its application. Which pillar applies?",
    "บริษัทต้องการลดทรัพยากร compute ที่ไม่จำเป็นเพื่อลดผลกระทบต่อสิ่งแวดล้อม เป็น pillar ใด",
    "Sustainability|Reliability|Security|Operational Excellence",
    "0",
    "Sustainability พิจารณาผลกระทบสิ่งแวดล้อมตลอดวงจรการใช้ทรัพยากร cloud"
  ],
  [
    "1.2",
    "Which TWO practices are consistent with the Reliability pillar? (Select TWO.)",
    "แนวทางสองข้อใดสอดคล้องกับ Reliability pillar",
    "Multi-AZ deployment|Fault tolerance|Cost allocation tags|AWS Pricing Calculator|Retire",
    "0,1",
    "Multi-AZ deployment ลด single point of failure และ Fault tolerance ทำให้ระบบรับมือความล้มเหลวได้"
  ],
  [
    "1.2",
    "A team tests alternative instance sizes to deliver the required throughput without excessive resources. Which pillar guides this decision?",
    "ทีมทดลองขนาด instance เพื่อให้ throughput ตามต้องการโดยไม่ใช้ทรัพยากรเกิน เป็น pillar ใด",
    "Performance Efficiency|Operational Excellence|Security|Sustainability",
    "0",
    "Performance Efficiency เน้นเลือกและปรับเทคโนโลยีให้ได้ประสิทธิภาพตรงตามความต้องการ workload"
  ],
  [
    "1.3",
    "A legacy application is moved to AWS virtual machines with almost no application changes. Which migration strategy is used?",
    "แอปเก่าถูกย้ายไป virtual machines บน AWS โดยแทบไม่เปลี่ยนโค้ด เป็น migration strategy ใด",
    "Rehost|Refactor|Retire|Retain",
    "0",
    "Rehost คือ lift-and-shift โดยย้าย workload ด้วยการเปลี่ยนแปลงน้อยที่สุด"
  ],
  [
    "1.3",
    "A company keeps a regulated application in its own data center for now while migrating other applications. Which strategy describes that application?",
    "บริษัทเก็บแอปที่ติดข้อกำกับดูแลไว้ใน data center เดิมก่อน ขณะที่ย้ายแอปอื่น เป็น strategy ใด",
    "Retain|Retire|Replatform|Refactor",
    "0",
    "Retain หมายถึงคงแอปไว้ในสภาพแวดล้อมเดิมโดยยังไม่ย้าย"
  ],
  [
    "1.3",
    "A migration project needs inventory data about on-premises servers and their dependencies before planning migration waves. Which service helps?",
    "โครงการ migration ต้องการข้อมูล inventory ของ server และ dependencies ก่อนวางแผนย้าย ควรใช้บริการใด",
    "AWS Application Discovery Service|AWS DMS|AWS Backup|AWS CodePipeline",
    "0",
    "Application Discovery Service เก็บข้อมูลระบบเดิมและความสัมพันธ์เพื่อช่วยวางแผน migration"
  ],
  [
    "1.3",
    "A team wants to replace a monolithic architecture with cloud-native managed components during migration. Which strategy BEST describes this?",
    "ทีมต้องการเปลี่ยน monolith เป็นส่วนประกอบ cloud-native managed ระหว่างย้ายระบบ เป็น strategy ใด",
    "Refactor|Rehost|Retain|Retire",
    "0",
    "Refactor คือปรับสถาปัตยกรรมแอปเพื่อใช้ความสามารถ cloud-native มากขึ้น"
  ],
  [
    "1.4",
    "A company chooses a smaller instance after measuring sustained utilization. Which cost-management practice is demonstrated?",
    "บริษัทวัดการใช้งานจริงแล้วเลือก instance ขนาดเล็กลง เป็นแนวทางจัดการต้นทุนใด",
    "Rightsizing|Consolidated billing|Economies of scale|Replatform",
    "0",
    "Rightsizing คือปรับขนาดทรัพยากรให้พอดีกับ workload ที่วัดได้"
  ],
  [
    "1.4",
    "Which TWO changes can reduce unnecessary cloud expenditure without buying hardware? (Select TWO.)",
    "การเปลี่ยนแปลงสองข้อใดช่วยลดค่าใช้จ่าย cloud ที่ไม่จำเป็น",
    "Rightsizing|Pay-as-you-go|Capital expenditure|Dedicated Hosts|Retain",
    "0,1",
    "Rightsizing ลด overprovisioning และ Pay-as-you-go ช่วยหลีกเลี่ยงการจ่ายสำหรับ capacity ที่ไม่ได้ใช้"
  ],
  [
    "1.4",
    "A company pays for actual cloud usage instead of purchasing equipment before demand is known. Which expense model does it adopt?",
    "บริษัทจ่ายตามการใช้ cloud จริงแทนการซื้อเครื่องล่วงหน้าก่อนรู้ demand เป็นรูปแบบค่าใช้จ่ายใด",
    "Variable expense|Capital expenditure|Consolidated billing|Cost allocation tags",
    "0",
    "Variable expense เปลี่ยนตามปริมาณการใช้งาน ต่างจากการลงทุนซื้อสินทรัพย์ล่วงหน้า"
  ],
  [
    "1.4",
    "A company can launch a product without funding a large data center build-out first. Which economic concept is MOST directly illustrated?",
    "บริษัทเปิดตัวผลิตภัณฑ์ได้โดยไม่ต้องลงทุนสร้าง data center ก่อน เป็นแนวคิดเศรษฐศาสตร์ใด",
    "Pay-as-you-go|Durability|Fault tolerance|Rehost",
    "0",
    "Pay-as-you-go ทำให้เริ่มใช้งานโดยจ่ายตามการใช้แทนการลงทุนโครงสร้างพื้นฐานขนาดใหญ่ก่อน"
  ],
  [
    "2.1",
    "A company deploys a custom application to EC2. Who must configure inbound access rules for the instance?",
    "บริษัทติดตั้งแอปบน EC2 ใครต้องตั้งค่ากฎอนุญาต inbound access ของ instance",
    "AWS IAM|AWS CloudTrail|Security group|AWS Shield",
    "2",
    "ลูกค้าต้องกำหนด Security group rules ให้ตรงความจำเป็น แม้ AWS จะดูแล underlying infrastructure"
  ],
  [
    "2.1",
    "A managed database runs on Amazon RDS. Which task is still the customer's responsibility?",
    "ฐานข้อมูลรันบน Amazon RDS งานใดยังคงเป็นความรับผิดชอบของลูกค้า",
    "AWS IAM|AWS KMS|AWS Artifact|AWS Backup",
    "0",
    "ลูกค้าต้องจัดการสิทธิ์การเข้าถึงข้อมูลและฐานข้อมูล แม้ AWS จะจัดการ infrastructure และงานดูแลระบบหลายส่วน"
  ],
  [
    "2.1",
    "Which TWO responsibilities generally remain with customers when using managed AWS services? (Select TWO.)",
    "ความรับผิดชอบสองข้อใดยังคงอยู่กับลูกค้าเมื่อใช้ AWS managed services",
    "AWS IAM|AWS KMS|AWS CloudTrail|AWS Artifact|AWS Shield",
    "0,1",
    "ลูกค้าต้องกำหนด IAM permissions และตัดสินใจเรื่อง encryption/key access ตามลักษณะบริการ"
  ],
  [
    "2.1",
    "An organization stores personal records in Amazon S3. Who is responsible for deciding who may read the objects?",
    "องค์กรเก็บข้อมูลส่วนบุคคลใน Amazon S3 ใครรับผิดชอบตัดสินใจว่าใครอ่าน objects ได้",
    "AWS IAM|Amazon CloudFront|AWS Shield|Amazon EC2",
    "0",
    "ลูกค้าต้องออกแบบ IAM policies และ resource permissions เพื่อควบคุมการเข้าถึง objects"
  ],
  [
    "2.2",
    "An investigator needs to know which identity deleted an AWS resource yesterday. Which service is the PRIMARY source?",
    "ผู้ตรวจสอบต้องการทราบว่า identity ใดลบทรัพยากร AWS เมื่อวานนี้ ควรดูบริการใดเป็นหลัก",
    "AWS CloudTrail|Amazon CloudWatch|AWS Config|AWS Trusted Advisor",
    "0",
    "CloudTrail บันทึก API events พร้อมข้อมูลผู้เรียกและเวลาที่เกิดเหตุการณ์"
  ],
  [
    "2.2",
    "A compliance team must retrieve AWS's current third-party audit reports. Which service is intended for this?",
    "ทีม compliance ต้องดาวน์โหลดรายงาน audit ของ AWS จากหน่วยงานภายนอก ควรใช้บริการใด",
    "AWS Artifact|AWS Security Hub|AWS Config|AWS Health Dashboard",
    "0",
    "AWS Artifact เป็นช่องทางเข้าถึงรายงาน compliance และข้อตกลงของ AWS"
  ],
  [
    "2.2",
    "Which TWO services are useful for investigating changes in AWS account activity and resource configuration? (Select TWO.)",
    "บริการสองข้อใดใช้ตรวจการกระทำในบัญชีและการเปลี่ยน configuration ของทรัพยากร",
    "AWS CloudTrail|AWS Config|AWS Marketplace|Amazon Polly|AWS Pricing Calculator",
    "0,1",
    "CloudTrail ตอบว่าใครเรียก API เมื่อใด ส่วน AWS Config บันทึกและประเมินการเปลี่ยน configuration"
  ],
  [
    "2.2",
    "A company wants to find S3 buckets that may contain sensitive customer information. Which service fits this data-discovery task?",
    "บริษัทต้องการค้นหา S3 buckets ที่อาจมีข้อมูลลูกค้าอ่อนไหว ควรใช้บริการใด",
    "Amazon Macie|Amazon Inspector|Amazon Detective|AWS WAF",
    "0",
    "Amazon Macie ใช้ machine learning และ pattern matching เพื่อค้นหาข้อมูลอ่อนไหวใน S3"
  ],
  [
    "2.2",
    "A security analyst wants a central view of findings produced by several AWS security tools. Which service is the BEST choice?",
    "นักวิเคราะห์ต้องการมุมมอง findings จากหลายเครื่องมือ AWS Security ในที่เดียว ควรใช้บริการใด",
    "AWS Security Hub|Amazon GuardDuty|AWS Artifact|AWS Config",
    "0",
    "Security Hub รวม security findings เพื่อช่วยจัดลำดับและติดตามสถานะความปลอดภัย"
  ],
  [
    "2.3",
    "A company wants employees to access AWS accounts using its existing corporate identity provider. Which capability is MOST appropriate?",
    "บริษัทต้องการให้พนักงานใช้ identity provider ขององค์กรเพื่อเข้าถึง AWS accounts ควรใช้บริการใด",
    "IAM Identity Center|Amazon Cognito|AWS Artifact|AWS Certificate Manager",
    "0",
    "IAM Identity Center รองรับ workforce federation และการกำหนดสิทธิ์ข้ามหลาย AWS accounts"
  ],
  [
    "2.3",
    "An application running on EC2 needs AWS permissions that expire automatically. What should it use?",
    "แอปบน EC2 ต้องการ AWS permissions ที่ใช้ temporary credentials ควรใช้แนวทางใด",
    "AWS IAM|AWS Secrets Manager|AWS Certificate Manager|AWS Artifact",
    "0",
    "ใช้ IAM role กับ EC2 instance profile เพื่อรับ temporary credentials โดยไม่ฝัง long-term access keys"
  ],
  [
    "2.3",
    "Which TWO controls help reduce the risk of privileged account compromise? (Select TWO.)",
    "การควบคุมสองข้อใดช่วยลดความเสี่ยงบัญชีสิทธิ์สูงถูกยึด",
    "AWS IAM|IAM Identity Center|AWS Pricing Calculator|Amazon Athena|AWS DMS",
    "0,1",
    "IAM ช่วยจำกัดสิทธิ์แบบ least privilege และ Identity Center ช่วยรวมศูนย์การจัดการการเข้าถึง workforce"
  ],
  [
    "2.3",
    "An auditor wants to identify S3 resources that permit access from outside an AWS organization. Which tool helps?",
    "ผู้ตรวจสอบต้องการค้นหา S3 resources ที่อนุญาตการเข้าถึงจากนอกองค์กร ควรใช้เครื่องมือใด",
    "IAM Access Analyzer|AWS CloudShell|Amazon CloudWatch|Amazon Textract",
    "0",
    "IAM Access Analyzer วิเคราะห์ policies เพื่อระบุ external access ที่อาจไม่ได้ตั้งใจ"
  ],
  [
    "2.3",
    "A developer should be able to read objects but never delete them. Which principle should shape the IAM policy?",
    "นักพัฒนาควรอ่าน objects ได้แต่ห้ามลบ ควรใช้หลักการใดออกแบบ IAM policy",
    "AWS IAM|AWS Organizations|AWS CloudTrail|AWS Shield",
    "0",
    "ใช้ IAM policy ตาม least privilege โดยอนุญาตเฉพาะ read actions ที่จำเป็น ไม่ให้ delete permissions"
  ],
  [
    "2.4",
    "An organization needs consistent WAF rules across multiple AWS accounts. Which service centrally manages these policies?",
    "องค์กรต้องการใช้ WAF rules ที่สอดคล้องกันข้ามหลาย AWS accounts ควรใช้บริการใด",
    "AWS Firewall Manager|AWS WAF|AWS Shield|Amazon Inspector",
    "0",
    "Firewall Manager ช่วยบังคับและจัดการ security policies แบบรวมศูนย์ข้ามบัญชี"
  ],
  [
    "2.4",
    "A team sees suspicious API calls and possible credential misuse. Which managed service is designed to detect this threat?",
    "ทีมพบ API calls น่าสงสัยและอาจมีการใช้ credentials ผิดปกติ บริการใดออกแบบมาตรวจจับ",
    "Amazon GuardDuty|Amazon Inspector|AWS Artifact|Amazon Macie",
    "0",
    "GuardDuty วิเคราะห์สัญญาณภัยคุกคามและพฤติกรรมผิดปกติในบัญชีและ workloads"
  ],
  [
    "2.4",
    "Which TWO services address different layers of protection for a public web application? (Select TWO.)",
    "บริการสองข้อใดป้องกัน public web application คนละชั้น",
    "AWS WAF|AWS Shield|AWS Backup|AWS DMS|Amazon Athena",
    "0,1",
    "WAF ช่วยกรอง web requests ส่วน Shield ป้องกัน DDoS"
  ],
  [
    "2.4",
    "A security engineer needs to find vulnerable packages in supported EC2 workloads. Which service should be used?",
    "วิศวกรต้องการค้นหา vulnerable packages ใน EC2 workloads ที่รองรับ ควรใช้บริการใด",
    "Amazon Inspector|Amazon GuardDuty|Amazon Detective|AWS Config",
    "0",
    "Inspector ตรวจช่องโหว่ของ software packages และการเปิดรับเครือข่ายใน workloads ที่รองรับ"
  ],
  [
    "2.4",
    "A team needs to investigate relationships between suspicious entities after a threat detection finding. Which service is the BEST fit?",
    "ทีมต้องการสืบสวนความเชื่อมโยงระหว่าง entities หลังพบ security finding ควรใช้บริการใด",
    "Amazon Detective|Amazon GuardDuty|AWS Security Hub|AWS WAF",
    "0",
    "Detective ช่วยสืบสวนและเชื่อมโยงข้อมูลเหตุการณ์ security เพื่อหาสาเหตุ"
  ],
  [
    "3.1",
    "A developer wants to execute AWS CLI commands from a browser without installing CLI locally. Which tool is suitable?",
    "นักพัฒนาต้องการรัน AWS CLI จาก browser โดยไม่ติดตั้งในเครื่อง ควรใช้เครื่องมือใด",
    "AWS CloudShell|AWS CloudFormation|AWS CodeBuild|Amazon EC2",
    "0",
    "CloudShell มี browser-based shell พร้อม AWS CLI ให้ใช้งาน"
  ],
  [
    "3.1",
    "An infrastructure team wants to define resources in a familiar programming language and synthesize templates. Which tool fits?",
    "ทีม infrastructure ต้องการเขียนทรัพยากรด้วยภาษาโปรแกรมแล้วสร้าง templates ควรใช้เครื่องมือใด",
    "AWS CDK|AWS CloudShell|AWS CloudTrail|AWS Artifact",
    "0",
    "AWS CDK นิยาม infrastructure เป็น code แล้ว synthesize เป็น CloudFormation templates"
  ],
  [
    "3.2",
    "A company must keep application data in a particular geographic area for regulatory reasons. Which AWS infrastructure choice matters MOST?",
    "บริษัทต้องเก็บข้อมูลในพื้นที่ภูมิศาสตร์ที่กำหนดตามกฎระเบียบ ควรพิจารณาองค์ประกอบใด",
    "AWS Region|Availability Zone|Edge location|AWS CloudFront",
    "0",
    "เลือก Region ให้ตรงข้อกำหนด data residency ก่อนเลือก AZ ภายใน Region"
  ],
  [
    "3.2",
    "A global video site wants content cached closer to viewers without deploying its origin in every country. Which infrastructure concept is central?",
    "เว็บวิดีโอต้องการ cache content ใกล้ผู้ชมโดยไม่ตั้ง origin ทุกประเทศ แนวคิดใดสำคัญ",
    "Edge location|Availability Zone|AWS Region|Multi-AZ deployment",
    "0",
    "Edge locations ช่วยให้ CDN ส่ง cached content ใกล้ผู้ใช้และลด latency"
  ],
  [
    "3.3",
    "A company already uses Kubernetes and wants AWS to manage the Kubernetes control plane. Which service should it choose?",
    "บริษัทใช้ Kubernetes อยู่แล้วและต้องการให้ AWS ดูแล control plane ควรใช้บริการใด",
    "Amazon EKS|Amazon ECS|AWS Batch|AWS Elastic Beanstalk",
    "0",
    "EKS ให้ managed Kubernetes control plane และทำงานกับ Kubernetes workloads"
  ],
  [
    "3.3",
    "An organization runs thousands of scheduled scientific jobs with queueing and compute provisioning. Which service is designed for this?",
    "องค์กรรันงานวิทยาศาสตร์จำนวนมากตามคิวและต้องจัดสรร compute ควรใช้บริการใด",
    "AWS Batch|AWS Lambda|Amazon Lightsail|Amazon Connect",
    "0",
    "AWS Batch ช่วยจัดคิวและ provision compute เพื่อรัน batch jobs"
  ],
  [
    "3.3",
    "Which TWO AWS services can run containers without customers managing the underlying server fleet? (Select TWO.)",
    "บริการสองข้อใดช่วยรัน containers โดยไม่ต้องดูแล server fleet เอง",
    "AWS Fargate|Amazon ECS|Amazon EC2|AWS CloudShell|AWS Backup",
    "0,1",
    "Fargate เป็น serverless compute สำหรับ containers และ ECS เป็น container orchestration ที่ใช้ Fargate ได้"
  ],
  [
    "3.3",
    "A small business wants a simple bundled virtual server with predictable monthly pricing. Which AWS offering fits best?",
    "ธุรกิจขนาดเล็กต้องการ virtual server แบบ bundled และค่าใช้จ่ายรายเดือนคาดการณ์ง่าย ควรเลือกใด",
    "Amazon Lightsail|Amazon EKS|AWS Batch|AWS Outposts",
    "0",
    "Lightsail เหมาะกับ workload เริ่มต้นที่ต้องการบริการแบบ bundled และตั้งค่าง่าย"
  ],
  [
    "3.4",
    "An application needs to model relationships such as fraud rings between customers and transactions. Which database is suitable?",
    "แอปต้องวิเคราะห์ความสัมพันธ์ระหว่างลูกค้าและธุรกรรม เช่น fraud rings ควรใช้ฐานข้อมูลใด",
    "Amazon Neptune|Amazon DynamoDB|Amazon RDS|Amazon ElastiCache",
    "0",
    "Neptune เป็น graph database เหมาะกับข้อมูล nodes และ edges ที่มีความสัมพันธ์ซับซ้อน"
  ],
  [
    "3.4",
    "A company needs a warehouse for complex analytical queries across large historical datasets. Which service is intended for this?",
    "บริษัทต้องการ data warehouse เพื่อทำ analytical queries กับข้อมูลประวัติจำนวนมาก ควรใช้บริการใด",
    "Amazon Redshift|Amazon ElastiCache|Amazon DynamoDB|Amazon DocumentDB",
    "0",
    "Redshift เป็น cloud data warehouse สำหรับ analytics แบบ SQL"
  ],
  [
    "3.4",
    "A team migrates from one database engine to another and needs help converting incompatible schema objects. Which tool should it use?",
    "ทีมย้ายฐานข้อมูลข้าม engine และต้องแปลง schema ที่เข้ากันไม่ได้ ควรใช้เครื่องมือใด",
    "AWS SCT|AWS DMS|AWS DataSync|AWS Backup",
    "0",
    "Schema Conversion Tool ช่วยแปลง schema และ code objects ระหว่าง database engines"
  ],
  [
    "3.5",
    "An EC2 instance in a private subnet needs to download software updates but must not accept unsolicited inbound internet connections. What should be configured?",
    "EC2 ใน private subnet ต้องดาวน์โหลด updates แต่ไม่รับ inbound internet connections ควรตั้งค่าใด",
    "NAT Gateway|Internet Gateway|VPC endpoint|AWS Direct Connect",
    "0",
    "NAT Gateway รองรับ outbound internet จาก private subnet โดยไม่เปิด inbound connections ที่เริ่มจากอินเทอร์เน็ต"
  ],
  [
    "3.5",
    "Which TWO statements about VPC network filtering are correct? (Select TWO.)",
    "ข้อใดสองข้ออธิบาย network filtering ใน VPC ถูกต้อง",
    "Security group|Network ACL|Amazon Route 53|AWS Direct Connect|Amazon CloudFront",
    "0,1",
    "Security group เป็น stateful control ที่ instance/ENI และ Network ACL เป็น stateless control ที่ subnet"
  ],
  [
    "3.5",
    "A company wants private access from its VPC to a supported AWS service without traversing the public internet. Which feature helps?",
    "บริษัทต้องการเข้าถึง AWS service จาก VPC แบบ private โดยไม่ผ่าน public internet ควรใช้ใด",
    "VPC endpoint|Internet Gateway|NAT Gateway|Edge location",
    "0",
    "VPC endpoint เชื่อมต่อ AWS services แบบ private ตามชนิด endpoint ที่รองรับ"
  ],
  [
    "3.6",
    "A Windows application needs a managed SMB file share accessible by multiple Windows servers. Which service fits?",
    "แอป Windows ต้องการ managed SMB file share ที่หลาย servers ใช้ร่วมกันได้ ควรใช้บริการใด",
    "Amazon FSx for Windows File Server|Amazon EFS|Amazon EBS|Instance store",
    "0",
    "FSx for Windows File Server ให้ managed Windows file shares ผ่าน SMB"
  ],
  [
    "3.6",
    "An organization needs centralized backup policies across supported AWS resources. Which service helps?",
    "องค์กรต้องการกำหนด backup policies ส่วนกลางสำหรับ AWS resources ที่รองรับ ควรใช้บริการใด",
    "AWS Backup|AWS DataSync|Amazon S3|AWS Storage Gateway",
    "0",
    "AWS Backup รวมศูนย์การตั้งค่าและติดตาม backup ของบริการที่รองรับ"
  ],
  [
    "3.6",
    "A company stores records that must be retained for years and are almost never retrieved. Long retrieval times are acceptable. Which S3 class fits?",
    "บริษัทเก็บเอกสารหลายปี แทบไม่เคยเรียกคืน และรอ retrieval นานได้ ควรเลือก S3 class ใด",
    "Amazon S3 Glacier Deep Archive|Amazon S3 Standard-IA|Amazon S3 Intelligent-Tiering|Amazon EBS",
    "0",
    "Glacier Deep Archive เหมาะกับ archival ระยะยาวและการเข้าถึงที่น้อยมาก"
  ],
  [
    "3.7",
    "A retailer wants to analyze live clickstream events as they arrive for multiple downstream consumers. Which service is appropriate?",
    "ร้านค้าต้องการประมวลผล clickstream แบบ streaming ให้หลาย consumers ควรใช้บริการใด",
    "Amazon Kinesis Data Streams|AWS Glue|Amazon Athena|Amazon Redshift",
    "0",
    "Kinesis Data Streams ใช้รับและกระจาย streaming records ไปยัง consumers"
  ],
  [
    "3.7",
    "A contact center wants a conversational chatbot that can interpret customer utterances. Which service is the BEST fit?",
    "contact center ต้องการ chatbot ที่เข้าใจคำพูดของลูกค้า ควรใช้บริการใด",
    "Amazon Lex|Amazon Polly|Amazon Rekognition|Amazon Textract",
    "0",
    "Lex ช่วยสร้าง conversational interfaces สำหรับข้อความและเสียง"
  ],
  [
    "3.8",
    "An order-processing system must buffer tasks so a temporary downstream outage does not lose work. Which service is appropriate?",
    "ระบบคำสั่งซื้อต้องเก็บงานเข้าคิวเมื่อ downstream ล่มชั่วคราว ควรใช้บริการใด",
    "Amazon SQS|Amazon SNS|Amazon EventBridge|Amazon SES",
    "0",
    "SQS เก็บข้อความใน queue เพื่อ decouple producer และ consumer"
  ],
  [
    "3.8",
    "Which TWO AWS services are commonly used in continuous delivery of application code? (Select TWO.)",
    "บริการสองข้อใดใช้ในกระบวนการ continuous delivery ของ application code",
    "AWS CodeBuild|AWS CodePipeline|AWS CloudTrail|Amazon GuardDuty|Amazon Connect",
    "0,1",
    "CodeBuild รัน build/test ส่วน CodePipeline orchestrate release stages"
  ],
  [
    "3.8",
    "A company needs a cloud-based contact center for customer support agents. Which service fits?",
    "บริษัทต้องการ contact center บน cloud ให้เจ้าหน้าที่บริการลูกค้า ควรใช้บริการใด",
    "Amazon Connect|Amazon SES|Amazon WorkSpaces|AWS IoT Core",
    "0",
    "Amazon Connect เป็นบริการ cloud contact center"
  ],
  [
    "4.1",
    "An organization needs dedicated physical server visibility to satisfy a software license tied to physical cores. Which EC2 option fits?",
    "องค์กรต้องใช้ physical server สำหรับ license ที่ผูกกับ physical cores ควรเลือก EC2 option ใด",
    "Dedicated Hosts|On-Demand Instances|Spot Instances|Savings Plans",
    "0",
    "Dedicated Hosts ให้ physical server สำหรับลูกค้ารายเดียวและรองรับ use case licensing ที่ต้องทราบ host"
  ],
  [
    "4.1",
    "A workload requires EC2 capacity to be available in a specific AZ for a planned event, without committing to a discounted pricing term. Which option helps?",
    "workload ต้องการจอง EC2 capacity ใน AZ สำหรับงานที่กำหนด โดยไม่ต้องการสัญญาส่วนลด ควรเลือกใด",
    "On-Demand Capacity Reservations|Reserved Instances|Spot Instances|Dedicated Hosts",
    "0",
    "Capacity Reservations จอง capacity ใน AZ ตามคุณสมบัติที่กำหนด ไม่ใช่การรับส่วนลดโดยตัวมันเอง"
  ],
  [
    "4.1",
    "Which TWO purchasing approaches are based on a commitment rather than interruptible spare capacity? (Select TWO.)",
    "ตัวเลือกซื้อสองแบบใดอาศัย commitment ไม่ใช่ spare capacity ที่อาจถูกขัดจังหวะ",
    "Reserved Instances|Savings Plans|Spot Instances|On-Demand Instances|On-Demand Capacity Reservations",
    "0,1",
    "Reserved Instances และ Savings Plans ให้ส่วนลดจาก commitment ต่างจาก Spot ที่อาจถูกขัดจังหวะ"
  ],
  [
    "4.2",
    "A finance analyst needs detailed line-item records of usage and charges for custom analysis. Which resource is MOST appropriate?",
    "นักวิเคราะห์การเงินต้องการข้อมูล line-item ค่าใช้จ่ายและการใช้งานเพื่อวิเคราะห์เอง ควรใช้ใด",
    "AWS Cost and Usage Report|AWS Cost Explorer|AWS Budgets|AWS Pricing Calculator",
    "0",
    "Cost and Usage Report ให้ข้อมูลการใช้และค่าใช้จ่ายระดับละเอียดสำหรับการวิเคราะห์"
  ],
  [
    "4.2",
    "A company wants to identify sudden unusual spending patterns without first defining a fixed monthly budget threshold. Which feature fits?",
    "บริษัทต้องการตรวจค่าใช้จ่ายผิดปกติโดยไม่ตั้ง budget threshold ตายตัวก่อน ควรใช้ใด",
    "AWS Cost Anomaly Detection|AWS Budgets|AWS Pricing Calculator|Cost allocation tags",
    "0",
    "Cost Anomaly Detection ใช้ตรวจรูปแบบค่าใช้จ่ายที่ผิดปกติและแจ้งเตือน"
  ],
  [
    "4.2",
    "A team needs to estimate the monthly AWS cost of a planned architecture before deploying it. Which tool is intended for this?",
    "ทีมต้องประเมินค่า AWS รายเดือนของสถาปัตยกรรมก่อน deploy ควรใช้เครื่องมือใด",
    "AWS Pricing Calculator|AWS Cost Explorer|AWS Budgets|AWS Artifact",
    "0",
    "Pricing Calculator ช่วยสร้าง estimate จาก configuration ที่คาดว่าจะใช้ก่อน deploy"
  ],
  [
    "4.3",
    "A company wants to engage a third-party AWS specialist to help implement a migration. Which program helps locate qualified partners?",
    "บริษัทต้องการผู้เชี่ยวชาญภายนอกช่วยทำ migration บน AWS ควรใช้โปรแกรมใด",
    "AWS Partner Network|AWS Marketplace|AWS Support Center|AWS re:Post",
    "0",
    "AWS Partner Network เป็นเครือข่ายคู่ค้าและผู้ให้บริการที่ช่วยลูกค้าใช้ AWS"
  ],
  [
    "4.3",
    "A customer wants to see whether an AWS service event is affecting its account resources. Which dashboard should it consult?",
    "ลูกค้าต้องการดูว่าเหตุการณ์ AWS service กระทบทรัพยากรในบัญชีหรือไม่ ควรดู dashboard ใด",
    "AWS Health Dashboard|AWS Trusted Advisor|AWS Cost Explorer|AWS Artifact",
    "0",
    "Health Dashboard ให้ข้อมูลเหตุการณ์บริการ AWS รวมถึงผลกระทบที่เกี่ยวกับบัญชี"
  ]
];
  window.buildClfLocalExamSet(2,rows);
})();
