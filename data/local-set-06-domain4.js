(() => {
  const rows = window.LOCAL_SET_06_ROWS = window.LOCAL_SET_06_ROWS || [];
  rows.push(...[
  [
    "4.1",
    "A customer uses EC2 for a short proof-of-concept with an uncertain end date. Interruptions would lose work, and no long-term contract is desired. Which option fits?",
    "ลูกค้าใช้ EC2 ทำ Proof-of-concept ระยะสั้นที่ยังไม่รู้วันจบ ห้ามถูก Interrupt และไม่อยาก Commitment ระยะยาว ควรซื้อแบบใด",
    "Spot Instances|Reserved Instances|On-Demand Instances|Savings Plans",
    "2",
    "On-Demand Instances ไม่มี Long-term Commitment และไม่ได้มีความเสี่ยงถูก Reclaim แบบ Spot; RI/Savings เน้นส่วนลดจาก Commitment"
  ],
  [
    "4.1",
    "For a business launch, specific EC2 instance capacity must be available in a chosen AZ at the launch time even if utilization remains low beforehand. Which reservation mechanism addresses availability of capacity?",
    "การเปิดธุรกิจต้องมี EC2 Capacity ใน AZ ที่กำหนดให้พร้อมใช้วัน Launch แม้ก่อนหน้านั้นจะใช้น้อย ควรใช้ Reservation แบบใดเพื่อจอง Capacity",
    "Reserved Instances|On-Demand Capacity Reservations|Savings Plans|Dedicated Hosts",
    "1",
    "On-Demand Capacity Reservations จอง EC2 Capacity ใน AZ; Savings Plans/RI เน้น Pricing Discounts ไม่รับประกัน Capacity โดยตัวมันเอง"
  ],
  [
    "4.1",
    "An application has stable one-year EC2 usage eligible for a commitment discount, while a separate test workload can be interrupted to save money. Which TWO purchasing models address these different patterns? (Select TWO.)",
    "Application ใช้ EC2 คงที่หนึ่งปีและรับ Commitment Discount ได้ ส่วน Test Workload อีกงานยอมถูก Interrupt เพื่อประหยัดเงิน ข้อใดสอง Purchasing Models เหมาะ",
    "Reserved Instances|On-Demand Capacity Reservations|On-Demand Instances|Spot Instances|Dedicated Hosts",
    "0,3",
    "Reserved Instances ให้ส่วนลดตาม Commitment ที่ตรงเงื่อนไข ส่วน Spot ราคาต่ำเพราะใช้ Spare Capacity และอาจถูก Interrupt"
  ],
  [
    "4.2",
    "A billing analyst wants to see an interactive chart of EC2 charges for the last six months grouped by service and linked account. Which tool is built for this analysis?",
    "Billing Analyst ต้องการ Interactive Chart ดูค่า EC2 ย้อนหลังหกเดือนแยก Service และ Linked Account Tool ใดออกแบบมาทำงานนี้",
    "AWS Budgets|AWS Cost Explorer|AWS Cost and Usage Report|AWS Pricing Calculator",
    "1",
    "Cost Explorer แสดง Historical Trends และ Filters ผ่าน UI; CUR ให้ Detailed Data สำหรับ Custom Analysis"
  ],
  [
    "4.2",
    "Finance sees an unexpected S3 spending spike without a known fixed budget threshold. Which tool focuses on detecting anomalies relative to expected spending patterns?",
    "ฝ่าย Finance พบค่า S3 เพิ่มผิดปกติโดยไม่ได้กำหนด Fixed Budget Threshold เครื่องมือใดเน้นตรวจ Spending Anomalies เมื่อเทียบกับ Pattern เดิม",
    "AWS Cost Explorer|AWS Budgets|AWS Cost Anomaly Detection|AWS Pricing Calculator",
    "2",
    "Cost Anomaly Detection ตรวจรูปแบบค่าใช้จ่ายที่ผิดปกติจาก Baseline; Budgets เน้น Threshold/Forecast Alerts"
  ],
  [
    "4.2",
    "A department requests a forecast for a proposed fleet of EC2 instances and database resources before any of them are deployed. Which AWS tool calculates estimates?",
    "แผนกต้องการ Estimate ค่า Fleet EC2 และ Database ที่วางแผนไว้ก่อน Deploy Resources ใด ๆ Tool ใดใช้คำนวณ",
    "AWS Cost Explorer|AWS Pricing Calculator|AWS Cost and Usage Report|AWS Budgets",
    "1",
    "AWS Pricing Calculator ประเมินค่าใช้จ่ายจาก Planned Resource Configurations ก่อน Deploy; Cost Explorer วิเคราะห์ค่าใช้จ่ายจริงย้อนหลัง"
  ],
  [
    "4.3",
    "A company needs a direct private channel to AWS technical support for a production API incident. Which resource is used to open a support case?",
    "บริษัทต้องการช่องทาง Private ติดต่อ AWS Technical Support สำหรับ Production API Incident ควรเปิด Case ผ่าน Resource ใด",
    "AWS re:Post|AWS Support Center|AWS Partner Network|AWS Marketplace",
    "1",
    "AWS Support Center ใช้เปิด AWS Support Cases; re:Post เป็น Public Community Q&A และ Partner Network เป็นเครือข่ายที่ปรึกษาภายนอก"
  ],
  [
    "4.3",
    "A team needs to subscribe to a third-party virtual appliance product offered through AWS billing rather than hire a migration consulting partner. Which resource is suitable?",
    "ทีมต้องการ Subscribe Third-party Virtual Appliance Product ผ่านระบบ AWS Billing แทนการจ้าง Migration Consultant ใช้ Resource ใด",
    "AWS Marketplace|AWS Partner Network|AWS Support Center|AWS re:Post",
    "0",
    "AWS Marketplace เป็น Product/Service Catalog สำหรับ Third-party Software/Offerings; APN ช่วยค้นหา Partners"
  ]
]);
})();
