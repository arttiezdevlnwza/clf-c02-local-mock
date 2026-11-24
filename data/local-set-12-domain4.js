(() => {
 const rows=window.LOCAL_SET_12_ROWS=window.LOCAL_SET_12_ROWS||[];
 rows.push(...[
  [
    "4.1",
    "A production application needs EC2 capacity available in one particular Availability Zone next Monday, but its owner does not want a term-based pricing discount. Which EC2 option reserves availability?",
    "Production ต้องจอง EC2 Capacity ใน AZ ที่ระบุให้พร้อมวันจันทร์ แต่ไม่ต้องการ Discount Commitment ระยะยาว ตัวเลือกใดตรง",
    "Spot Instances|Reserved Instances|On-Demand Capacity Reservations|Savings Plans",
    "2",
    "On-Demand Capacity Reservations สำรอง EC2 Capacity ใน AZ ที่กำหนดโดยไม่จำเป็นต้องทำ Discount Commitment ส่วน Reserved Instances/Savings Plans เป็น Pricing Commitments"
  ],
  [
    "4.1",
    "A software company brings existing database licenses to AWS and needs to track licenses used across EC2 hosts and enforce licensing rules. Which management service helps?",
    "บริษัทใช้ Database Licenses เดิมบน EC2 และต้องติดตาม License Consumption พร้อมบังคับ License Rules ควรใช้บริการใด",
    "AWS Marketplace|AWS License Manager|Dedicated Hosts|AWS Compute Optimizer",
    "1",
    "License Manager ช่วยบริหาร Software License Inventory/Usage/Rules ส่วน Dedicated Hosts เป็น EC2 Physical Host Option ไม่ใช่ License Management Service"
  ],
  [
    "4.1",
    "A researcher accepts interruption and can restart stateless compute jobs to minimize the hourly EC2 bill. Which purchasing option is designed for spare capacity?",
    "นักวิจัยยอมให้ Jobs ถูก Interrupt และ Restart ใหม่ได้ ต้องการลดค่า EC2 ต่อชั่วโมงด้วย Spare Capacity ใช้รูปแบบใด",
    "Reserved Instances|Spot Instances|On-Demand Instances|Dedicated Hosts",
    "1",
    "Spot ใช้ Spare EC2 Capacity ราคาส่วนลดพร้อมความเสี่ยงถูก Reclaim ส่วน Reserved Instances เน้น Discount Commitment และ Dedicated Hosts เป็น Dedicated Physical Server"
  ],
  [
    "4.2",
    "A platform owner wants a detailed raw data export showing line-item usage and billing charges to build custom analyses. Which AWS cost dataset fits?",
    "Platform Owner ต้องการ Export ข้อมูล Usage/Billing แบบ Line Items ที่ละเอียดเพื่อทำ Custom Analytics ใช้ Dataset ใด",
    "AWS Cost and Usage Report|AWS Budgets|AWS Cost Explorer|AWS Pricing Calculator",
    "0",
    "CUR ให้ Detailed Billing/Usage Data สำหรับ Custom Reports ส่วน Cost Explorer เป็น Cost Exploration Dashboard และ Budgets ใช้กำหนด Threshold Alerts"
  ],
  [
    "4.2",
    "A multi-product business wants to attribute AWS spend to Product A and Product B without breaking consolidated organization billing. Which mechanism supports cost attribution?",
    "บริษัทมีหลายผลิตภัณฑ์ ต้องแยกค่า AWS ตาม Product A/B แต่ยังรวม Billing ทั้ง Organization ควรใช้อะไร",
    "Cost allocation tags|AWS Cost Explorer|Consolidated billing|AWS Budgets",
    "0",
    "Cost Allocation Tags ใช้จัด Cost ตาม Team/Product ส่วน Consolidated Billing รวมค่าใช้จ่ายตาม Accounts ไม่ระบุ Product Labels ให้เอง"
  ],
  [
    "4.2",
    "An organization wants to identify an unexpected spending spike with a changing baseline and separately alert when its forecast exceeds a fixed monthly budget. Which TWO services serve these different purposes? (Select TWO.)",
    "องค์กรต้องตรวจ Spending Anomaly จาก Baseline ที่เปลี่ยนแปลง และแจ้งเตือนเมื่อ Forecast เกิน Budget คงที่ สองบริการใดทำแต่ละหน้าที่",
    "AWS Budgets|AWS Cost Explorer|AWS Pricing Calculator|AWS Cost Anomaly Detection|AWS Cost and Usage Report",
    "0,3",
    "Cost Anomaly Detection ตรวจรูปแบบ Spend ที่ผิดปกติ ส่วน Budgets เปรียบเทียบ Actual/Forecast Cost กับ Target Threshold"
  ],
  [
    "4.3",
    "A customer notices a regional AWS service event and wants to know if its own account resources are affected. Which resource provides account-specific service health?",
    "ลูกค้าเห็น AWS Regional Event แล้วอยากรู้ว่า Resources ใน Account ตนได้รับผลกระทบหรือไม่ ต้องดูจากบริการใด",
    "Amazon CloudWatch|AWS Health Dashboard|AWS Trusted Advisor|AWS Config",
    "1",
    "Health Dashboard แสดง AWS Events ที่กระทบ Account Resources ส่วน CloudWatch Monitor Workload Metrics และ Config ติดตาม Resource Settings"
  ],
  [
    "4.3",
    "A company needs AWS specialists to deliver a scoped cloud modernization engagement, rather than buying software from a catalog. Which AWS resource best describes this direct consulting service?",
    "บริษัทต้องการผู้เชี่ยวชาญ AWS ร่วมทำโครงการ Modernization แบบ Consulting Engagement ไม่ได้จะซื้อ Software จาก Catalog ใช้บริการใด",
    "AWS Professional Services|AWS Marketplace|AWS re:Post|AWS Support Center",
    "0",
    "AWS Professional Services เป็น Consulting/Delivery Services ของ AWS ภายใต้ Engagement ส่วน Marketplace เป็น Product/Offering Catalog และ Support Center จัด Support Cases"
  ]
]);
})();
