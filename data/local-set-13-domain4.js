(() => {
 const rows=window.LOCAL_SET_13_ROWS=window.LOCAL_SET_13_ROWS||[];
 rows.push(...[
  [
    "4.1",
    "An enterprise commits to predictable EC2 compute spend for one year but does not need reserved instance capacity in a particular AZ. Which pricing model offers an hourly spend commitment discount?",
    "องค์กรยอม Commit ยอด Compute Spend ต่อชั่วโมง 1 ปีเพื่อส่วนลด แต่ไม่ได้ต้องจอง EC2 Capacity ใน AZ ใด ควรใช้ Pricing Model ใด",
    "Spot Instances|On-Demand Capacity Reservations|Savings Plans|Dedicated Hosts",
    "2",
    "Savings Plans ลดราคาจาก Spend Commitment ต่อชั่วโมง ส่วน Capacity Reservations สำรอง Capacity ใน AZ โดยไม่จำเป็นต้องมี Discount Commitment"
  ],
  [
    "4.1",
    "A company needs hardware isolation from other customers on dedicated physical hosts and wants visibility into server placement for host-based software licensing. Which choice is intended?",
    "บริษัทต้องมี Physical Host ส่วนตัว พร้อม Visibility ของ Host Placement เพื่อบริหาร License ผูกกับ Physical Server ควรใช้ตัวเลือกใด",
    "Dedicated Instances|Reserved Instances|Dedicated Hosts|Savings Plans",
    "2",
    "Dedicated Hosts ให้ Dedicated Physical Server พร้อม Host-level Visibility/Control สำหรับ Licensing ต่างจาก Dedicated Instances ที่ให้ Physical Isolation แต่ไม่ให้ Control แบบ Host-level เดียวกัน",
    [
      "Dedicated Instances แยก Hardware จากลูกค้ารายอื่น แต่ไม่ให้ Host-level Licensing Control แบบ Dedicated Hosts",
      "",
      "",
      ""
    ]
  ],
  [
    "4.1",
    "An AWS application uploads data from the internet and then serves large video downloads back to customers. Which network data-transfer direction is more likely to drive a typical usage-based charge?",
    "AWS Application รับ Uploads จาก Internet และส่ง Video Downloads กลับให้ลูกค้าจำนวนมาก ทิศทาง Transfer ใดมักเป็น Cost Driver",
    "Data transfer in|Data transfer out|Cost allocation tags|AWS Cost and Usage Report",
    "1",
    "Outbound Transfer จาก AWS ไป Internet โดยทั่วไปมีค่าใช้จ่ายตาม Usage และควรประมาณตาม GB ส่วน Data Transfer In ต่างกันตามบริการและไม่ใช่ทิศทางดาวน์โหลดกลับลูกค้า",
    [
      "Incoming Data เป็นทิศทาง Client Upload ซึ่งไม่ใช่ Video Download Egress",
      "Outgoing GB to Internet เป็นค่าใช้จ่ายตามการใช้ที่ควรประมาณ",
      "Tags ใช้ Cost Attribution ไม่ใช่ Transfer Category",
      "CUR เป็นชุดข้อมูล Bill ไม่ใช่ทิศทาง Network Traffic"
    ]
  ],
  [
    "4.2",
    "A large organization wants a unified payer bill while preserving independent IAM boundaries for every member account. Which feature provides the shared billing arrangement?",
    "องค์กรต้องรวม Payer Bill แต่ให้ IAM Account Boundaries ของ Member Accounts ยังแยกกัน Feature ใดทำหน้าที่รวม Billing",
    "Consolidated billing|Cost allocation tags|AWS Budgets|AWS Organizations",
    "0",
    "Consolidated Billing รวมค่าใช้จ่ายและช่วยใช้ Eligible Discounts ข้าม Accounts ได้ แต่ไม่รวม IAM/Root Identities ของแต่ละ Account"
  ],
  [
    "4.2",
    "A team wants to analyze spending by service and Region for the last six months and separately estimate a proposed new environment before launch. Which TWO tools fit? (Select TWO.)",
    "ทีมต้องวิเคราะห์ค่าใช้จ่ายย้อนหลังตาม Service/Region และประเมินราคาของ Environment ใหม่ก่อน Deploy สองเครื่องมือใด",
    "AWS Budgets|AWS Cost Anomaly Detection|AWS Cost Explorer|AWS Pricing Calculator|AWS Cost and Usage Report",
    "2,3",
    "Cost Explorer ทำ Interactive Historical Cost Analysis ส่วน Pricing Calculator Estimate Future Workload Costs ก่อน Deployment; CUR เหมาะ Raw Detailed Export"
  ],
  [
    "4.2",
    "A cost administrator receives a warning when projected spend is likely to exceed a monthly threshold. Which service provides this budget-based alert?",
    "Cost Admin ต้อง Alert เมื่อ Forecast Spend จะเกิน Monthly Threshold ที่กำหนด เครื่องมือใดมี Budget Alerts",
    "AWS Cost Anomaly Detection|AWS Cost Explorer|AWS Budgets|AWS Pricing Calculator",
    "2",
    "AWS Budgets แจ้งเตือน Actual/Forecast Spend เทียบ Budget Thresholds ส่วน Cost Anomaly Detection ตรวจรูปแบบ Spending ที่ผิดปกติ"
  ],
  [
    "4.3",
    "A new engineer needs a self-service community discussion for a common AWS question rather than opening a technical support case. Which resource is suited to peer Q&A?",
    "Engineer ใหม่อยากถามคำถาม AWS ทั่วไปใน Community แทนเปิด Technical Support Case ต้องใช้แหล่งข้อมูลใด",
    "AWS Partner Network|AWS Support Center|AWS re:Post|AWS Marketplace",
    "2",
    "re:Post เป็น AWS Community Q&A สำหรับความรู้และปัญหาทั่วไป ส่วน Support Center ใช้เปิด/ติดตาม Cases ตาม Support Plan"
  ],
  [
    "4.3",
    "An AWS operator needs an account-level notice of infrastructure events affecting resources and separately a check of cost/security best practices. Which TWO tools serve these tasks? (Select TWO.)",
    "Operator ต้องดู AWS Infrastructure Events ที่กระทบ Resources ของ Account และตรวจ Best Practices ด้าน Cost/Security สองเครื่องมือใดตอบโจทย์",
    "AWS Health Dashboard|AWS Trusted Advisor|Amazon CloudWatch|AWS Config|AWS CloudTrail",
    "0,1",
    "Health Dashboard แสดง AWS Service Events/Account Impact ส่วน Trusted Advisor ตรวจ Best-practice Findings ด้าน Cost, Security และ Operations"
  ]
]);
})();
