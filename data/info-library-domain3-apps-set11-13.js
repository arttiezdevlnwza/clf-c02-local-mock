// CLF-C02 Info Library | Set 11–13 coverage: Domain 3 analytics/AI, integration and Task 3.8
(() => {
  const guide=window.EXAM_FAMILY_GUIDE;
  if(!guide) return;
  const ensure=(id,title,summary)=>{
    let group=guide.groups.find(g=>g.id===id);
    if(!group){group={id,title,summary,items:[]};guide.groups.push(group);}
    return group;
  };
  const add=(id,rows)=>{
    const group=guide.groups.find(g=>g.id===id);
    if(!group) throw Error('Info Library group missing: '+id);
    for(const [name,use,cue,confuse,example] of rows){
      const item={name,use,cue,confuse,example};
      const idx=group.items.findIndex(i=>i.name===name);
      if(idx<0)group.items.push(item);else Object.assign(group.items[idx],item);
    }
  };
  ensure('analytics-ai-ml','Domain 3 · Task 3.7 — AI, ML & Analytics','จำแยก Data Ingestion, Search, BI, NLP, Speech และ Generative AI');
  ensure('frontend-mobile-enduser','Domain 3 · Task 3.8 — Frontend, End-user & Other Services','Frontend Web/Mobile, Device Connectivity, Contact Center, Email และ Desktop/App Streaming');
  add('monitoring-analytics', [
    ['Amazon Kinesis Data Streams','รับ/จัดเก็บ Stream Records แบบต่อเนื่องให้ Consumer Applications ประมวลผล Near Real Time','High-volume streaming data ingest','Athena = Query Data ที่เก็บแล้วใน S3; EventBridge = Route Event ตาม Pattern','รับ Clickstream Events ไปให้ Consumers'],
    ['Amazon EventBridge','Event Bus สำหรับ Route Application/AWS/SaaS Events ไป Targets ตาม Event Patterns/Rules','Match event content/source → different targets','SNS = Fan-out Publish/Subscribe; SQS = Durable Queue','OrderPlaced Event Route ไป Workflow Target'],
    ['AWS Step Functions','Orchestrate Multi-step Workflows ด้วย State Machines รวม Retries/Branching/Error Handling','Workflow steps/states','AWS Batch = Queue และ Schedule Independent Jobs','ประสาน Payment → Fulfillment → Notification'],
    ['Amazon SES','Managed Email Service สำหรับ Transactional/Marketing Email จาก Applications','Send order confirmation emails','SNS = Pub/Sub Notifications; Connect = Contact Center','ส่งใบเสร็จ/อีเมลยืนยันการสั่งซื้อให้ลูกค้า'],
    ['Amazon OpenSearch Service','Managed Search/Analytics Engine สำหรับ Index Logs/Documents และค้นหา/ทำ Dashboards แบบ Search-based','Indexed log search / search dashboard','Athena = SQL Query S3; CloudWatch = Metrics/Logs/Alarms','SOC ค้น Keyword จาก Application Logs หลายล้านรายการ'],
    ['Amazon EMR','Managed Big Data Platform สำหรับ Frameworks เช่น Apache Spark/Hadoop บน Data Processing Clusters/Executions','Large-scale Spark/Hadoop jobs','AWS Glue = Data Integration/ETL; Athena = Serverless SQL Query','รัน Spark Batch Transform หลาย TB จาก Data Lake'],
    ['AWS Quick / Quick Sight (ชื่อเดิม QuickSight)','AWS Quick เป็น Analytics/AI Workspace ที่วิวัฒน์จาก Amazon QuickSight; Quick Sight คือ BI Dashboard/Visualization Capability ของแพลตฟอร์ม','Interactive business dashboards','Athena = SQL S3; Redshift = Warehouse; AWS Quick = Visualization/Analytics Experience','ทำ Sales KPI Dashboard ให้ผู้บริหาร']
  ]);
  add('analytics-ai-ml', [
    ['Amazon Transcribe','Automatic Speech Recognition แปลง Audio/Speech เป็น Written Text Transcript','Speech to text','Amazon Polly = Text to Speech; Comprehend = Analyze Text','แปลงเสียง Call Center เป็น Transcript'],
    ['Amazon Polly','แปลง Text เป็นเสียงพูดสังเคราะห์ (Text-to-Speech)','Text → natural speech audio','Amazon Transcribe = Audio → Text','สร้างเสียงอ่านคำแนะนำใน App'],
    ['Amazon Comprehend','Managed Natural Language Processing วิเคราะห์ Text เช่น Sentiment, Entities และ Key Phrases','Sentiment/entities from existing text','Textract = Extract Text จาก Scans; Transcribe = Speech to Text','วิเคราะห์ความคิดเห็นลูกค้าเพื่อหา Sentiment'],
    ['Amazon Textract','Extract Text และ Document Structures เช่น Forms/Tables จาก Scanned Documents','OCR scanned invoices/forms/tables','Comprehend = ทำ NLP กับ Text ที่ได้แล้ว','ดึงข้อมูลตารางจาก Scanned Invoice'],
    ['Amazon Rekognition','Image/Video Analysis เช่น Detect Objects/Labels และความสามารถอื่นตามบริการ','Analyze images or videos','Textract = เอกสาร/OCR; Comprehend = Language Analysis','จัดหมวดภาพสินค้าตาม Visual Labels'],
    ['Amazon Lex','สร้าง Conversational Interfaces/Chatbots ด้วย Intents, Slots และ Dialogs','Booking chatbot + intent/slot recognition','Amazon Q = Generative AI Assistant; Transcribe = Speech Recognition','Bot ขอวันที่จองและจำนวนผู้ใช้ผ่าน Dialog'],
    ['Amazon Q','ตระกูล AI Assistants ของ AWS; Amazon Q Business ช่วยผู้ใช้องค์กรถามคำถามจาก Connected Enterprise Content ตาม Permissions','Enterprise AI assistant using company documents','Lex = Intent-based Bot; Textract = OCR','พนักงานถามนโยบาย HR จากเอกสารองค์กร'],
    ['Amazon SageMaker AI','บริการสำหรับ Build/Train/Deploy Machine Learning Models และ MLOps ตามฟีเจอร์ที่รองรับ','Train and deploy custom ML model','Pretrained AI services เช่น Comprehend/Transcribe ใช้ API งานเฉพาะทาง','ฝึก Fraud Detection Model จาก Customer Data'],
    ['AWS Glue','Serverless Data Integration, ETL และ Data Catalog เพื่อเตรียม/จัดทำ Metadata ของ Data Lake','Data catalog / ETL','Athena = SQL Query บน S3; EMR = Managed Big Data Frameworks','Crawler ทำ Schema Catalog แล้ว ETL Data ก่อน Query'],
    ['Amazon Athena','Serverless SQL Queries บน Data Stored in S3 ผ่าน Tables/Metadata ที่ตั้งค่า','SQL on S3 without managing cluster','Redshift = Warehouse; OpenSearch = Indexed Search','Query S3 Parquet ด้วย SQL'],
    ['Amazon Redshift (Analytics)','Managed Data Warehouse สำหรับ Analytical SQL, Complex Aggregations และ Historical Reporting','Structured warehouse analytics','RDS/Aurora = Operational Transactions','Aggregate ยอดขายย้อนหลังหลายปี']
  ]);
  add('frontend-mobile-enduser', [
    ['AWS Amplify','แพลตฟอร์มช่วยสร้างและ Deploy Frontend Web/Mobile Applications พร้อมเชื่อม Backend Services เช่น Authentication, Data และ Storage; Amplify Hosting รองรับ Git-based CI/CD และ CDN','Build/deploy frontend or fullstack web app','Cognito = Login Component; API Gateway = API Front Door; Elastic Beanstalk = Managed App Environment','ทีม React/Next.js ทำ Web Frontend เชื่อม Auth และ Backend แล้ว Deploy ผ่าน Amplify Hosting'],
    ['AWS Amplify vs Cognito vs API Gateway','Amplify = Developer Workflow และ Frontend Hosting/Backend Integration; Cognito = User Sign-up/Sign-in; API Gateway = สร้าง/จัดการ HTTP/REST/WebSocket APIs','Frontend/fullstack workflow → Amplify','อย่าเลือก Cognito ถ้าถาม Hosting/Deploy Frontend ทั้งระบบ','Frontend บน Amplify เชื่อม Cognito Sign-in และ API Gateway Endpoint'],
    ['AWS AppSync','Managed GraphQL APIs/Real-time Data Synchronization ที่เชื่อม Data Sources ให้ Web/Mobile Apps ตามฟีเจอร์ที่รองรับ','GraphQL API / real-time data sync','Amplify = Fullstack Developer/Hosting Workflow; API Gateway = API Front Door','Mobile App ใช้ GraphQL Query Backend ผ่าน AppSync'],
    ['Amazon API Gateway','Create, Publish, Secure, Monitor และ Manage APIs สำหรับ Applications และ AWS Integrations','Managed REST/HTTP/WebSocket API endpoint','Amplify = Frontend Dev/Hosting; Cognito = Authentication','Expose Lambda เป็น Public HTTPS API'],
    ['Amazon WorkSpaces','Managed Virtual Desktop Infrastructure สำหรับผู้ใช้ที่ต้องการ Desktop Environment','Full virtual desktop','AppStream 2.0 = Stream Individual Apps; Secure Browser = Browser Sessions','พนักงานใช้ Managed Desktop จาก Laptop ส่วนตัว'],
    ['Amazon AppStream 2.0','Managed Application Streaming ของ Desktop Applications ผ่าน Browser/Client โดยไม่ต้องให้ Full Virtual Desktop','Stream individual Windows desktop apps','WorkSpaces = Full Desktop; Secure Browser = Managed Web Browser','ลูกค้าเปิด CAD Application ผ่าน Browser'],
    ['Amazon WorkSpaces Secure Browser','Managed Browser Sessions ที่แยกสภาพแวดล้อมเพื่อเข้าถึง Web Apps อย่างปลอดภัย','Secure browser session for web apps','AppStream 2.0 = Desktop App Streaming; WorkSpaces = Full Virtual Desktop','Contractor เปิด Internal Web Apps ผ่าน Managed Browser'],
    ['AWS IoT Core','เชื่อม Authenticate และ Route Messages จาก IoT Devices ผ่าน IoT Protocols/Rules ตามความสามารถบริการ','Device connectivity + MQTT/telemetry','Kinesis = Streaming Records; EventBridge = Event Router','เซ็นเซอร์ส่ง Temperature ผ่าน MQTT ให้ Cloud'],
    ['Amazon Connect','Managed Cloud Contact Center รองรับ Customer Agent Channels เช่น Voice/Chat','Contact center agents voice/chat','SNS = Notifications; SES = Email Delivery; WorkSpaces = Virtual Desktops','สร้าง Contact Center ให้ทีมบริการลูกค้า'],
    ['Amazon SES','Managed Service ส่ง Email จาก Applications เช่น Transactional Notifications','Send transactional emails','SNS = Pub/Sub; Amazon Connect = Agent Contact Center','ส่งอีเมลยืนยันการชำระเงิน'],
    ['AWS Elastic Beanstalk vs Amplify','Elastic Beanstalk เน้น Deploy Server-side/Web Application พร้อม Managed Environment; Amplify เน้น Frontend/Fullstack Workflow และ Hosting ที่เชื่อม Backend Services','Backend app environment vs frontend hosting','ทั้งสอง Deploy Web Apps ได้บางประเภท แต่โจทย์ต้องดูว่าถาม Hosting Frontend, App Server หรือ API','Backend Java App ใช้ Beanstalk ส่วน Frontend React ใช้ Amplify']
  ]);
})();
