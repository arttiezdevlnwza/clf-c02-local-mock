(() => {
  const rows=window.LOCAL_SET_08_ROWS=window.LOCAL_SET_08_ROWS||[];
  rows.push(...[
  [
    "4.1",
    "A rendering studio can restart failed jobs and wants the largest potential discount on unused EC2 capacity. Which purchasing option fits?",
    "สตูดิโอ Render สามารถ Restart Jobs ที่ถูก Interrupt ได้ และอยากได้ส่วนลดจาก EC2 Capacity ที่เหลือ ควรเลือกอะไร",
    "Reserved Instances|On-Demand Instances|Spot Instances|On-Demand Capacity Reservations",
    "2",
    "Spot Instances เสนอส่วนลดมากสำหรับ Workloads ที่ทน Interruptions ได้ ต่างจาก On-Demand ที่ไม่เน้นส่วนลดแบบนี้"
  ],
  [
    "4.1",
    "A business has unpredictable EC2 usage for a short pilot and does not want a long-term spend commitment. Which model fits best?",
    "บริษัทใช้ EC2 สำหรับ Pilot ระยะสั้นโดย Usage ไม่แน่นอนและไม่ต้องการ Commitment ระยะยาว โมเดลใดเหมาะ",
    "Savings Plans|On-Demand Instances|Reserved Instances|Dedicated Hosts",
    "1",
    "On-Demand ไม่ต้องทำ Commitment ระยะยาวและจ่ายตามการใช้ ส่วน Savings Plans และ Reserved Instances ต้องมี Commitment ตามเงื่อนไข"
  ],
  [
    "4.1",
    "A critical workload needs assurance that a specific Availability Zone has EC2 capacity available, without requiring a discount. Which option focuses on capacity assurance?",
    "Workload สำคัญต้องมั่นใจว่า AZ ที่เลือกมี EC2 Capacity พร้อมใช้ โดยไม่ได้ต้องการส่วนลด Option ใดเน้นการสำรอง Capacity",
    "Spot Instances|Savings Plans|Reserved Instances|On-Demand Capacity Reservations",
    "3",
    "On-Demand Capacity Reservations สำรอง EC2 Capacity ใน AZ ที่ระบุ ส่วน Savings Plans มุ่งลดราคาตาม Commitment ไม่ได้สำรอง Capacity โดยตัวมันเอง"
  ],
  [
    "4.2",
    "A project owner wants an email alert when forecast monthly spend is expected to exceed an approved amount. Which tool is meant for this?",
    "Project Owner ต้องการ Email Alert เมื่อ Forecast Monthly Spend คาดว่าจะเกินงบที่อนุมัติ ใช้เครื่องมือใด",
    "AWS Cost Explorer|AWS Budgets|AWS Pricing Calculator|AWS Cost and Usage Report",
    "1",
    "AWS Budgets ตั้ง Thresholds และ Alerts ได้ทั้ง Actual/Forecast Cost ส่วน Cost Explorer ใช้วิเคราะห์แนวโน้มย้อนหลัง"
  ],
  [
    "4.2",
    "An accounting team wants to attribute EC2 and S3 charges to different internal products by applying metadata to resources. Which feature helps?",
    "Accounting Team ต้องแยกค่า EC2 และ S3 ตาม Products ภายในบริษัทด้วย Metadata ที่ผูกกับ Resources ใช้อะไร",
    "Consolidated billing|Cost allocation tags|AWS Cost Explorer|AWS Budgets",
    "1",
    "Cost allocation tags ช่วยจัดกลุ่มและ Allocate Costs ตาม Product/Team ส่วน Consolidated Billing รวมค่าใช้จ่ายหลาย Accounts"
  ],
  [
    "4.2",
    "A finance analyst needs detailed usage line items for custom chargeback analysis beyond a high-level cost chart. Which billing source fits?",
    "Finance Analyst ต้องการ Usage Line Items แบบละเอียดเพื่อทำ Custom Chargeback มากกว่าแค่ Cost Chart ใช้ข้อมูลใด",
    "AWS Pricing Calculator|AWS Budgets|AWS Cost and Usage Report|AWS Cost Explorer",
    "2",
    "Cost and Usage Report หรือ Data Exports ให้รายละเอียด Cost/Usage ระดับ Line Items ส่วน Cost Explorer เหมาะกับการสำรวจแนวโน้ม"
  ],
  [
    "4.3",
    "An engineer needs to open an AWS technical support case under their eligible support plan. Which portal should be used?",
    "Engineer ต้องการเปิด Technical Support Case ตาม Support Plan ที่มีสิทธิ์ใช้งาน ควรใช้ Portal ใด",
    "AWS re:Post|AWS Support Center|AWS Partner Network|AWS Marketplace",
    "1",
    "AWS Support Center ใช้จัดการ Support Cases ส่วน re:Post เป็น Community Knowledge Forum ไม่ใช่ช่องเปิด Case โดยตรง"
  ],
  [
    "4.3",
    "A team wants to view AWS service events that could affect resources in its account, rather than performance metrics of its application. Which service fits?",
    "ทีมต้องการดู AWS Service Events ที่อาจกระทบ Resources ในบัญชี ไม่ใช่ Performance Metrics ของ Application บริการใดเหมาะ",
    "Amazon CloudWatch|AWS Trusted Advisor|AWS Health Dashboard|AWS Config",
    "2",
    "AWS Health Dashboard รายงาน Service/Account Events ที่อาจกระทบ Workload ส่วน CloudWatch ดู Application Metrics และ Logs"
  ]
]);
})();
