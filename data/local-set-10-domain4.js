(() => {
  const rows=window.LOCAL_SET_10_ROWS=window.LOCAL_SET_10_ROWS||[];
  rows.push(...[
  [
    "4.1",
    "A company runs steady predictable compute for three years and is willing to make a usage commitment to reduce rates. Which pricing model provides a flexible compute-spend commitment?",
    "บริษัทมี Compute Usage สม่ำเสมอสามปีและยอม Commit เพื่อรับส่วนลด โมเดลใดใช้ Commitment ยอด Compute Spend ที่ยืดหยุ่น",
    "Savings Plans|On-Demand Instances|Spot Instances|On-Demand Capacity Reservations",
    "0",
    "Savings Plans ให้ส่วนลดจาก Commitment ต่อชั่วโมง ส่วน Capacity Reservations สำรอง Capacity แต่ไม่ได้รับประกันส่วนลด"
  ],
  [
    "4.1",
    "A research institute must run fault-tolerant simulations at the lowest possible EC2 price and can handle interruptions. Which option is tailored to this?",
    "สถาบันวิจัยรัน Simulations ที่ทน Interruptions ได้ และต้องการ EC2 ราคาต่ำที่สุดเท่าที่เหมาะสม ควรใช้โมเดลใด",
    "Reserved Instances|Spot Instances|Dedicated Hosts|On-Demand Instances",
    "1",
    "Spot Instances เหมาะกับงาน Flexible และ Interruptible เพื่อรับส่วนลดสูง ต่างจาก Reserved Instances ที่เป็น Discount Commitment"
  ],
  [
    "4.1",
    "An enterprise must reserve instance availability in a particular AZ for a future production launch but does not want to lock into an instance-discount commitment. Which option fits?",
    "องค์กรต้องสำรอง Instance Availability ใน AZ ที่กำหนดสำหรับวัน Launch แต่ไม่ต้องการ Instance-discount Commitment ควรใช้ตัวเลือกใด",
    "On-Demand Capacity Reservations|Savings Plans|Spot Instances|Reserved Instances",
    "0",
    "On-Demand Capacity Reservations เน้น Reserve EC2 Capacity ใน AZ ที่ระบุ ไม่ได้ผูกส่วนลดระยะยาวแบบ Savings Plans"
  ],
  [
    "4.2",
    "A company sees an unexpected jump in spending that does not follow its normal usage pattern. Which tool automatically identifies cost anomalies?",
    "บริษัทเห็นค่าใช้จ่ายพุ่งผิดปกติจาก Usage Pattern เดิม เครื่องมือใดตรวจจับ Cost Anomalies อัตโนมัติ",
    "AWS Budgets|AWS Cost Anomaly Detection|AWS Pricing Calculator|AWS Cost Explorer",
    "1",
    "Cost Anomaly Detection ตรวจ Spending Patterns ที่ผิดปกติ ส่วน Budgets แจ้งเมื่อ Actual/Forecast Costs เกิน Thresholds ที่ตั้ง"
  ],
  [
    "4.2",
    "A business wants to allocate cloud charges to individual product lines using tags while keeping a consolidated organization bill. Which specific feature performs the product-level allocation?",
    "บริษัทต้องการแบ่ง Cloud Charges ตาม Product Lines ด้วย Tags แม้ Billing รวมเป็น Organization เดียว Feature ใดช่วย Allocate ตาม Product",
    "Consolidated billing|AWS Cost Explorer|Cost allocation tags|AWS Budgets",
    "2",
    "Cost Allocation Tags ใช้ผูก Cost กับ Product/Team ส่วน Consolidated Billing รวมบิลระดับ Accounts"
  ],
  [
    "4.2",
    "A finance analyst needs the most granular raw AWS usage and cost data to create custom reports. Which billing dataset is suitable?",
    "Finance Analyst ต้องการ Raw AWS Usage/Cost Data ละเอียดที่สุดเพื่อทำ Custom Reports ควรใช้ Billing Dataset ใด",
    "AWS Cost and Usage Report|AWS Cost Explorer|AWS Budgets|AWS Pricing Calculator",
    "0",
    "Cost and Usage Report ให้ Detailed Usage/Charge Line Items ส่วน Cost Explorer เป็น Exploration Dashboard ไม่ใช่ Detailed Raw Export"
  ],
  [
    "4.3",
    "An AWS customer wants to know whether a service disruption specifically affects resources tied to their account. Which tool is designed to surface such events?",
    "ลูกค้า AWS ต้องการรู้ว่า Service Disruption กระทบ Resources ในบัญชีตัวเองหรือไม่ เครื่องมือใดแสดง Events แบบนี้",
    "AWS Health Dashboard|AWS Trusted Advisor|Amazon CloudWatch|AWS Config",
    "0",
    "Health Dashboard ให้ข้อมูล AWS Service Events ที่อาจเกี่ยวกับ Account Resources ส่วน CloudWatch ดู Workload Metrics"
  ],
  [
    "4.3",
    "An enterprise wants help from an AWS consulting and technology partner with specialized industry experience. Which program helps locate such partners?",
    "องค์กรต้องการ Consulting/Technology Partner ของ AWS ที่มีความเชี่ยวชาญในอุตสาหกรรม ควรใช้โปรแกรมใดค้นหา",
    "AWS Partner Network|AWS Marketplace|AWS Support Center|AWS re:Post",
    "0",
    "AWS Partner Network เป็นเครือข่ายผู้ให้บริการและที่ปรึกษาพันธมิตร ส่วน Marketplace เป็น Catalog Software/Services ที่ซื้อได้"
  ]
]);
})();
