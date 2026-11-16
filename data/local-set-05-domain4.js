(() => {
  const rows = window.LOCAL_SET_05_ROWS = window.LOCAL_SET_05_ROWS || [];
  rows.push(...[
  [
    "4.1",
    "A team runs fault-tolerant video transcoding on EC2 and saves progress frequently so jobs can resume after interruption. Which purchasing option is typically most cost effective?",
    "ทีมรัน Video Transcoding บน EC2 ที่หยุดกลางทางแล้ว Resume ได้และมีการบันทึก Progress บ่อย Purchasing Option ใดมักคุ้มต้นทุนที่สุด",
    "Reserved Instances|On-Demand Instances|Spot Instances|Savings Plans",
    "2",
    "Spot ใช้ Spare EC2 Capacity ราคาถูกลงแต่เสี่ยงถูก Interrupt เหมาะกับงานที่ Resume/Retry ได้"
  ],
  [
    "4.1",
    "A company has predictable continuous compute spend for three years and is willing to commit to a fixed hourly spend in exchange for flexible discounts across eligible compute usage. Which option best matches?",
    "บริษัทมี Compute Spend คงที่ต่อเนื่องสามปีและยอม Commit ค่าใช้จ่ายต่อชั่วโมงเพื่อรับส่วนลดกับ Eligible Compute ที่ยืดหยุ่น Purchasing Option ใดตรงที่สุด",
    "Reserved Instances|Spot Instances|Savings Plans|On-Demand Capacity Reservations",
    "2",
    "Savings Plans ให้ส่วนลดตาม Hourly Compute Spend Commitment; Reserved Instances มีเงื่อนไขด้าน Instance/Service และ Capacity Reservations ไม่ใช่ Discount Plan"
  ],
  [
    "4.1",
    "One workload needs ordinary temporary EC2 without term commitment; another requires an entire physical host for software licensing by physical core. Which TWO options match? (Select TWO.)",
    "Workload แรกต้องใช้ EC2 ชั่วคราวแบบไม่ Commit ระยะยาว ส่วนอีกงานต้องการ Physical Host เฉพาะเพื่อใช้ Software License ตาม Physical Core ข้อใดสองตัวเลือกตรงงาน",
    "On-Demand Instances|Savings Plans|Reserved Instances|Dedicated Hosts|Spot Instances",
    "0,3",
    "On-Demand เหมาะกับ Compute ชั่วคราวไม่ Commitment ระยะยาว; Dedicated Hosts รองรับ Physical Server Isolation/Licensing"
  ],
  [
    "4.2",
    "Finance needs to know which internal project generated last month's storage bill using activated project tags. Which AWS billing capability supports chargeback?",
    "ฝ่าย Finance ต้องแยกว่า Project ใดทำให้เกิด Storage Bill เดือนก่อนจาก Project Tags ที่ Activate ไว้ ใช้ Billing Capability ใด",
    "Cost allocation tags|Consolidated billing|AWS Budgets|AWS Cost Anomaly Detection",
    "0",
    "Cost allocation tags ใช้แยกต้นทุนตาม Project/Department; Consolidated billing รวมบิลหลาย Accounts ไม่ได้แยกตาม Tag โดยตัวมันเอง"
  ],
  [
    "4.2",
    "A team requires the most granular line-item cost and usage data for custom SQL analysis in S3 and Athena. Which billing dataset should it export?",
    "ทีมต้องการ Granular Cost/Usage Line Items สำหรับ Custom SQL Analysis ใน S3 และ Athena ควร Export Billing Dataset ใด",
    "AWS Cost Explorer|AWS Cost and Usage Report|AWS Budgets|AWS Pricing Calculator",
    "1",
    "AWS Cost and Usage Report ให้ Detailed Line Items เพื่อวิเคราะห์ต่อ; Cost Explorer ให้ Interactive Views และ Trends"
  ],
  [
    "4.2",
    "A finance manager wants alerts when a department's forecast monthly spend is about to cross a predefined threshold. Which service should they configure?",
    "ผู้จัดการการเงินต้องการ Alert เมื่อ Forecast Monthly Spend ของแผนกใกล้เกิน Threshold ที่ตั้งไว้ ใช้ Service ใด",
    "AWS Cost Explorer|AWS Cost Anomaly Detection|AWS Budgets|AWS Pricing Calculator",
    "2",
    "Budgets ใช้ Threshold และ Alerts สำหรับ Actual/Forecast Costs; Cost Anomaly Detection เน้น Unusual Spend Patterns"
  ],
  [
    "4.3",
    "A developer wants public community discussion of an AWS service behavior rather than opening a private case with an AWS support engineer. Which resource fits?",
    "Developer ต้องการ Community Discussion เกี่ยวกับพฤติกรรม AWS Service แทนการเปิด Private Case กับ AWS Support Engineer ใช้ Resource ใด",
    "AWS Support Center|AWS re:Post|AWS Partner Network|AWS Marketplace",
    "1",
    "AWS re:Post เป็น Public AWS Community Q&A; Support Center ใช้เปิด Support Cases"
  ],
  [
    "4.3",
    "A firm wants a third-party organization to implement its cloud migration, not merely purchase a product listing. Where should it find qualified AWS partners?",
    "บริษัทต้องการองค์กร Third-party มาลงมือทำ Cloud Migration ไม่ได้ต้องการซื้อ Product Listing ควรหา Qualified AWS Partners ที่ไหน",
    "AWS Marketplace|AWS Partner Network|AWS re:Post|AWS Support Center",
    "1",
    "AWS Partner Network ช่วยค้นหา Partners ที่ให้บริการด้าน Migration/Consulting; Marketplace เป็น Catalog ของ Products/Offerings"
  ]
]);
})();
