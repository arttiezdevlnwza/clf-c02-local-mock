(() => {
  const rows = window.LOCAL_SET_07_ROWS = window.LOCAL_SET_07_ROWS || [];
  rows.push(...[
  [
    "4.1",
    "An organization is migrating a license tied to a known number of physical CPU cores and needs a dedicated physical machine. Which EC2 purchasing option best supports the license constraint?",
    "องค์กรย้าย License ที่คิดตามจำนวน Physical CPU Cores และต้องการ Physical Machine แบบ Dedicated ควรเลือก EC2 Purchasing Option ใด",
    "Reserved Instances|Dedicated Hosts|On-Demand Instances|On-Demand Capacity Reservations",
    "1",
    "Dedicated Hosts จัด Physical Server เฉพาะให้ลูกค้า รองรับบางข้อกำหนด BYOL/License ตาม Physical Cores; Capacity Reservations จอง Capacity ไม่ได้ยืนยัน Physical Host เฉพาะ"
  ],
  [
    "4.1",
    "A ticket platform expects a major launch and must reserve the capacity of a specific EC2 instance type in one AZ even before traffic arrives. Which option specifically reserves that capacity?",
    "Ticket Platform มี Major Launch และต้อง Reserve Capacity ของ EC2 Instance Type ใน AZ ที่กำหนดก่อน Traffic มา ควรเลือกอะไร",
    "Savings Plans|Reserved Instances|On-Demand Capacity Reservations|Spot Instances",
    "2",
    "On-Demand Capacity Reservations จอง EC2 Capacity ภายใน AZ โดยเฉพาะ; Savings Plans/RI เน้น Pricing Commitment"
  ],
  [
    "4.1",
    "A retailer has stable long-term compute usage eligible for spend-commitment discounts and a separate batch job that can restart after EC2 interruptions. Which TWO options suit these patterns? (Select TWO.)",
    "ร้านค้ามี Long-term Compute Usage คงที่ซึ่งรับ Spend-commitment Discounts ได้ และมี Batch Job ที่ Restart หลัง EC2 Interruptions ได้ ข้อใดสอง Purchasing Options เหมาะ",
    "Savings Plans|On-Demand Instances|Dedicated Hosts|Spot Instances|On-Demand Capacity Reservations",
    "0,3",
    "Savings Plans ให้ส่วนลดตาม Hourly Spend Commitment ขณะที่ Spot ใช้ Spare Capacity ราคาถูกและอาจถูก Interrupt"
  ],
  [
    "4.2",
    "A team wants a warning if the forecast of this month's AWS costs will pass an approved spending amount. Which billing service directly supports the alert?",
    "ทีมต้องการ Warning เมื่อ Forecast ค่า AWS เดือนนี้จะเกิน Spending Amount ที่อนุมัติ ใช้ Billing Service ใดโดยตรง",
    "AWS Cost Anomaly Detection|AWS Budgets|AWS Cost Explorer|AWS Pricing Calculator",
    "1",
    "AWS Budgets แจ้งเตือน Actual/Forecast Costs เมื่อถึง Threshold ที่ตั้งไว้; Cost Anomaly Detection ตรวจ Spending Pattern ผิดปกติ"
  ],
  [
    "4.2",
    "Before deployment, an architect models the estimated monthly prices of a planned three-tier application using EC2, load balancing, and RDS. Which AWS tool is appropriate?",
    "ก่อน Deploy สถาปนิกต้อง Estimate Monthly Prices ของ Planned Three-tier Application ที่ใช้ EC2, Load Balancer และ RDS ใช้ Tool ใด",
    "AWS Cost Explorer|AWS Cost and Usage Report|AWS Pricing Calculator|AWS Budgets",
    "2",
    "Pricing Calculator ประเมินราคา Planned AWS Architecture ก่อนใช้งานจริง; Cost Explorer แสดง Historical Usage/Costs"
  ],
  [
    "4.2",
    "A business wants to attribute cloud charges to individual project teams across shared infrastructure, and has activated billing tags on resources. Which feature supports this analysis?",
    "ธุรกิจต้อง Allocate Cloud Charges ให้ Project Teams แม้ใช้ Shared Infrastructure และ Activate Billing Tags บน Resources แล้ว ใช้ Feature ใด",
    "Consolidated billing|Cost allocation tags|AWS Budgets|AWS Cost Anomaly Detection",
    "1",
    "Cost allocation tags ช่วยแยกค่าใช้จ่ายตาม Project/Team สำหรับ Chargeback; Consolidated billing รวมบิลจากหลาย Accounts"
  ],
  [
    "4.3",
    "A small developer wants to search a public AWS community for explanations of service error messages rather than file a private support ticket. Which AWS resource fits?",
    "Developer รายเล็กต้องการค้น Community สาธารณะเรื่อง AWS Service Error Messages ไม่ได้ต้องการ Private Support Ticket ใช้ Resource ใด",
    "AWS Support Center|AWS re:Post|AWS Marketplace|AWS Partner Network",
    "1",
    "AWS re:Post เป็น Community Q&A และ Knowledge Sharing; Support Center ใช้เปิด Case แบบ Private"
  ],
  [
    "4.3",
    "A production team has a service incident and needs to contact AWS technical support through an authorized support case. Which resource should they open?",
    "ทีม Production มี Service Incident และต้องติดต่อ AWS Technical Support ผ่าน Authorized Support Case ควรเปิดที่ Resource ใด",
    "AWS Partner Network|AWS Marketplace|AWS Support Center|AWS re:Post",
    "2",
    "AWS Support Center เป็นช่องทางเปิด Cases ตาม Support Plan; re:Post เป็น Public Forum"
  ]
]);
})();
