(() => {
  const rows = window.LOCAL_SET_04_ROWS = window.LOCAL_SET_04_ROWS || [];
  rows.push(...[
  [
    "4.1",
    "A video-encoding workload can resume from checkpoints if its EC2 instances are interrupted. The team wants the lowest compute price and accepts this risk. Which option fits?",
    "งาน Encode Video สามารถ Resume จาก Checkpoints หาก EC2 ถูก Interrupt ทีมต้องการราคาต่ำและยอมรับความเสี่ยงนี้ ควรเลือกอะไร",
    "On-Demand Instances|Savings Plans|Spot Instances|Reserved Instances",
    "2",
    "Spot Instances ใช้ EC2 Spare Capacity ราคาลดลงโดยอาจถูก Interrupt ได้ เหมาะกับงานที่ Resume หรือ Retry ได้"
  ],
  [
    "4.1",
    "A company must have EC2 instance capacity available in one specific Availability Zone for a planned launch, without buying a long-term discount commitment. Which option addresses this?",
    "บริษัทต้องให้ EC2 Capacity พร้อมใน Availability Zone เฉพาะสำหรับวัน Launch โดยไม่ผูกสัญญาส่วนลดระยะยาว ควรเลือกอะไร",
    "Reserved Instances|Dedicated Hosts|On-Demand Capacity Reservations|Savings Plans",
    "2",
    "On-Demand Capacity Reservations จอง Capacity ใน AZ ที่กำหนดโดยไม่จำเป็นต้องมี Discount Commitment แบบ Savings Plans หรือ RI"
  ],
  [
    "4.1",
    "Which TWO EC2 purchasing options are respectively suited to short-term ordinary usage without a long-term commitment and to interruptible spare capacity without a term commitment? (Select TWO.)",
    "ตัวเลือกซื้อ EC2 สองแบบใดใช้กับงานทั่วไปช่วงสั้นแบบไม่มี Long-term Commitment และงานที่ยอมให้ Interrupt จาก Spare Capacity โดยไม่ผูกสัญญาระยะยาว",
    "Spot Instances|Reserved Instances|Savings Plans|On-Demand Instances|On-Demand Capacity Reservations",
    "0,3",
    "On-Demand Instances จ่ายตามการใช้โดยไม่ต้อง Commit ระยะยาว ส่วน Spot ใช้ Spare Capacity ราคาลดและถูก Interrupt ได้; Capacity Reservations ใช้จอง Capacity ไม่ใช่คำตอบสองรูปแบบที่ถาม"
  ],
  [
    "4.2",
    "Finance wants an email alert when forecast spending is likely to exceed a fixed monthly limit, even before the month ends. Which service is designed for this?",
    "ฝ่ายการเงินต้องการ Email Alert เมื่อ Forecast Spending กำลังจะเกินวงเงินรายเดือนก่อนเดือนจบ ใช้บริการใด",
    "AWS Cost Explorer|AWS Budgets|AWS Cost Anomaly Detection|AWS Pricing Calculator",
    "1",
    "AWS Budgets ใช้กำหนด Budget Threshold และแจ้งเตือน Actual/Forecast Costs; Cost Anomaly Detection เน้น Pattern ค่าใช้จ่ายผิดปกติ"
  ],
  [
    "4.2",
    "An analyst wants to filter actual AWS charges from the previous quarter by service and linked account, then view the spending trend. Which tool fits?",
    "นักวิเคราะห์ต้อง Filter ค่า AWS ที่จ่ายจริงไตรมาสก่อนตาม Service และ Linked Account พร้อมดู Trend ใช้เครื่องมือใด",
    "AWS Cost and Usage Report|AWS Budgets|AWS Pricing Calculator|AWS Cost Explorer",
    "3",
    "AWS Cost Explorer ใช้วิเคราะห์ค่าใช้จ่ายย้อนหลังและแนวโน้มตามมิติที่เลือก; CUR ให้ Raw Line-item สำหรับวิเคราะห์เชิงละเอียดเอง"
  ],
  [
    "4.2",
    "Before deploying an EC2 and RDS architecture, a project manager wants a monthly price estimate based on expected configurations. Which tool should be used?",
    "ก่อน Deploy Architecture ที่มี EC2 และ RDS ผู้จัดการต้องการประมาณค่ารายเดือนจาก Configurations ที่คาดไว้ ใช้เครื่องมือใด",
    "AWS Cost Explorer|AWS Pricing Calculator|AWS Budgets|AWS Cost and Usage Report",
    "1",
    "AWS Pricing Calculator สร้าง Estimate จาก Planned Configurations ก่อน Deploy; Cost Explorer ดูค่าใช้จ่ายที่เกิดขึ้นแล้ว"
  ],
  [
    "4.3",
    "An engineer has a general AWS design question and wants to learn from a public AWS community rather than open a private technical support case. Which resource is suitable?",
    "วิศวกรมีคำถามทั่วไปเรื่องออกแบบ AWS และต้องการคำตอบจาก Community สาธารณะ ไม่ใช่เปิด Private Support Case ควรไปที่ใด",
    "AWS Support Center|AWS re:Post|AWS Partner Network|AWS Marketplace",
    "1",
    "AWS re:Post เป็น Community ถามตอบและแบ่งปันความรู้; Support Center ใช้เปิด Support Cases ส่วน APN เป็นเครือข่าย Partners"
  ],
  [
    "4.3",
    "A company needs to hire an external AWS-qualified specialist to execute an application migration rather than purchase a software product or ask a forum question. Which resource should it use?",
    "บริษัทต้องการจ้างผู้เชี่ยวชาญ AWS ภายนอกให้ลงมือทำ Application Migration ไม่ใช่ซื้อ Software หรือถาม Forum ควรใช้ช่องทางใด",
    "AWS Marketplace|AWS re:Post|AWS Support Center|AWS Partner Network",
    "3",
    "AWS Partner Network ช่วยค้นหาคู่ค้าที่มีความเชี่ยวชาญ AWS และให้บริการ Migration ต่างจาก Marketplace ซึ่งเป็น Catalog ของ Products/Services"
  ]
]);
})();
