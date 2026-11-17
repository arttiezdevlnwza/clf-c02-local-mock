(() => {
  const rows=window.LOCAL_SET_09_ROWS=window.LOCAL_SET_09_ROWS||[];
  rows.push(...[
  [
    "4.1",
    "A company has steady long-term EC2 compute spending and wants discounts by committing to an hourly compute spend rather than one fixed instance family. Which option fits?",
    "บริษัทมี Compute Spend ของ EC2 ค่อนข้างคงที่ระยะยาว ต้องการส่วนลดจากการ Commit ยอดค่า Compute ต่อชั่วโมง ไม่ผูกกับ Instance Family เดียว ควรเลือกอะไร",
    "Savings Plans|Spot Instances|On-Demand Capacity Reservations|On-Demand Instances",
    "0",
    "Savings Plans ให้ส่วนลดตาม Commitment การใช้ Compute ต่อชั่วโมง ขณะที่ Spot อาจ Interrupt และ Capacity Reservation เน้นรับประกัน Capacity"
  ],
  [
    "4.1",
    "A laboratory runs an EC2 experiment for only three days and cannot tolerate interruption. Which purchasing model avoids long commitments and Spot interruption risk?",
    "ห้อง Lab ใช้ EC2 ทดลองเพียงสามวันและรับไม่ได้หากงานถูก Interrupt โมเดลใดไม่ต้อง Commit ระยะยาวและไม่เสี่ยง Spot Interruption",
    "Spot Instances|Reserved Instances|Savings Plans|On-Demand Instances",
    "3",
    "On-Demand เหมาะกับช่วงสั้นที่ต้องการ Capacity ปกติไม่ Commit Savings Plans หรือ RI และไม่ยอมรับ Spot Interruptions"
  ],
  [
    "4.1",
    "A company requires software licensing tied to dedicated physical host capacity. Which EC2 purchasing option is relevant?",
    "บริษัทมี Software License ที่ผูกกับ Dedicated Physical Host Capacity ควรพิจารณา EC2 Purchasing Option ใด",
    "Dedicated Hosts|On-Demand Instances|Spot Instances|Savings Plans",
    "0",
    "Dedicated Hosts ให้ใช้ Physical Host เฉพาะและช่วยตรง License Requirements ต่างจากการซื้อ Compute Discount อย่าง Savings Plans"
  ],
  [
    "4.2",
    "A team needs to compare total EC2 spending month by month and filter by service and Region. Which tool is designed for cost trend exploration?",
    "ทีมต้องเปรียบเทียบ EC2 Spending รายเดือน และ Filter ตาม Service/Region ใช้เครื่องมือใดสำรวจ Cost Trends",
    "AWS Budgets|AWS Cost Explorer|AWS Pricing Calculator|AWS Cost and Usage Report",
    "1",
    "Cost Explorer วิเคราะห์ Historical/Future Cost Trends ได้ ส่วน Budgets เน้น Target และ Alerts และ CUR เป็น Detailed Raw Data"
  ],
  [
    "4.2",
    "An organization wants to combine charges from many linked AWS accounts into one payer bill. Which feature addresses this?",
    "องค์กรต้องการรวม Charges จาก Linked AWS Accounts หลายบัญชีไว้ใน Payer Bill เดียว ใช้ความสามารถใด",
    "Cost allocation tags|Consolidated billing|AWS Cost Anomaly Detection|AWS Budgets",
    "1",
    "Consolidated Billing รวมค่าใช้จ่ายหลาย Accounts ส่วน Cost Allocation Tags แยก Attribution ตาม Projects/Teams"
  ],
  [
    "4.2",
    "A finance manager wants to estimate AWS costs before launching a new database and application workload. Which service is intended for pre-deployment estimates?",
    "Finance Manager ต้องประเมิน AWS Cost ก่อนเปิดระบบ Database และ Application ใหม่ ควรใช้บริการใด",
    "AWS Cost Explorer|AWS Budgets|AWS Pricing Calculator|AWS Cost and Usage Report",
    "2",
    "Pricing Calculator ใช้ Estimate ค่าใช้บริการล่วงหน้าตาม Configuration สมมติ ส่วน Cost Explorer วิเคราะห์ Usage/Cost ที่เกิดขึ้น"
  ],
  [
    "4.3",
    "A learner cannot open a paid technical support case and wants community answers and AWS expertise for common questions. Which resource fits?",
    "ผู้เรียนไม่สามารถเปิด Paid Technical Support Case และต้องการคำตอบจาก Community/AWS Experts สำหรับคำถามทั่วไป ใช้ Resource ใด",
    "AWS Support Center|AWS re:Post|AWS Health Dashboard|AWS Marketplace",
    "1",
    "AWS re:Post เป็น Community Q&A สำหรับ AWS ส่วน Support Center จัดการ Support Cases ตามสิทธิ์ของ Plan"
  ],
  [
    "4.3",
    "A company wants automated recommendations on underutilized AWS resources and checks on security best practices, not notices about an AWS outage. Which tool fits?",
    "บริษัทต้องการ Recommendations เรื่อง Underutilized AWS Resources และ Security Best-practice Checks ไม่ใช่แจ้ง Service Outage ควรใช้",
    "AWS Health Dashboard|AWS Trusted Advisor|AWS Artifact|AWS Support Center",
    "1",
    "Trusted Advisor ให้ Best-practice Checks เรื่อง Cost Security และอื่น ๆ ส่วน Health Dashboard รายงาน AWS Events ที่ส่งผลต่อบริการ"
  ]
]);
})();
