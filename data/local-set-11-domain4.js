(() => {
 const rows=window.LOCAL_SET_11_ROWS=window.LOCAL_SET_11_ROWS||[];
 rows.push(...[
  [
    "4.1",
    "A small company commits to Savings Plans spending at the level of a rare monthly product launch spike. What is its most likely cost risk?",
    "บริษัทตั้ง Savings Plans Commitment ตามยอด Compute ที่สูงเฉพาะวัน Launch เดือนละครั้ง ความเสี่ยงด้านค่าใช้จ่ายคืออะไร",
    "Unused hourly commitment during normal periods|Automatic reduction of commitment as traffic falls|Automatic full refund of unused spending|Guaranteed EC2 capacity during launch",
    "0",
    "Savings Plans มี Hourly Spend Commitment ที่ไม่ลดตาม Demand โดยอัตโนมัติ หากซื้อเผื่อ Peak สั้น ๆ Usage ในชั่วโมงปกติอาจไม่ครอบคลุม Commitment",
    [
      "ถูก: Commitment อาจใช้ไม่เต็มเมื่อ Workload กลับสู่ Baseline",
      "ผิด: Savings Plans ไม่ปรับ Commitment ลดเองทุกชั่วโมงตาม Demand",
      "ผิด: ไม่ควรคาดหวังคืนเงินส่วน Commitment ที่ใช้ไม่ครบ",
      "ผิด: Savings Plans เป็นส่วนลดจาก Commitment ไม่ใช่การจอง EC2 Capacity"
    ]
  ],
  [
    "4.1",
    "An enterprise needs to run licensed server software on specific underlying physical machines under a host-based license agreement. Which EC2 purchase model best matches?",
    "องค์กรมี Software License ที่อ้างอิงเครื่อง Physical Host ที่กำหนด ต้องใช้ EC2 Purchasing Option ใดเพื่อรองรับข้อกำหนด Host-level Licensing",
    "Dedicated Hosts|Dedicated Instances|On-Demand Capacity Reservations|Reserved Instances",
    "0",
    "Dedicated Hosts ให้ Visibility/Control ของ Dedicated Physical Server เพื่อรองรับ License Terms แบบผูก Host ส่วน Dedicated Instances ให้ Hardware Isolation แต่ไม่มอบ Host-level Control แบบเดียวกัน"
  ],
  [
    "4.1",
    "An application will send a large volume of data from its AWS Region to clients on the public internet. Which cost element deserves explicit attention?",
    "Application ส่งข้อมูลปริมาณมากจาก AWS Region ไปยังผู้ใช้งานบน Public Internet ต้องระวัง Cost Element ใดเป็นพิเศษ",
    "Consolidated billing|Data transfer out|Data transfer in|Cost allocation tags",
    "1",
    "Data Transfer Out จาก AWS ไป Internet โดยทั่วไปมีค่าใช้จ่ายตามการใช้งาน ส่วน Data Transfer In อาจมีนโยบายราคาแตกต่างและไม่ตอบโจทย์เส้นทาง Outbound นี้",
    [
      "Consolidated billing รวมบิลหลายบัญชี ไม่ใช่การคิดราคาของ Traffic Out",
      "ค่า Data Transfer Out ไป Internet เป็น Cost Driver สำคัญและควรประมาณตามปริมาณข้อมูล",
      "Inbound Data Transfer เข้าสู่ AWS ไม่ใช่ทิศทาง Traffic ที่โจทย์กล่าวถึง",
      "Cost allocation tags ใช้จัดหมวดค่าใช้จ่าย ไม่ใช่ประเภทค่า Data Transfer"
    ]
  ],
  [
    "4.2",
    "A company combines billing for member AWS accounts. Which TWO benefits are possible without merging account identities? (Select TWO.)",
    "องค์กรรวม Billing ของ AWS Member Accounts สองประโยชน์ใดทำได้ โดยยังคง Identity Boundaries แยกกัน",
    "Shared root user credentials for all accounts|Eligible aggregated usage volume discounts|A single shared security group for all VPCs|Eligible Reserved Instances and Savings Plans discount sharing|Automatic permission grants across accounts",
    "1,3",
    "Consolidated Billing อาจรวม Eligible Usage เพื่อ Volume Discounts และแชร์ RI/Savings Plans Benefits ตาม Eligibility/Sharing Settings แต่ Accounts ยังมี IAM/Root Security Boundaries แยกกัน",
    [
      "ผิด: Root User และ Account Identities ไม่ถูก Merge",
      "ถูก: Eligible Usage อาจรวมเพื่อประเมิน Volume Pricing Benefits",
      "ผิด: VPC Security Groups ไม่ถูก Shared โดยการรวมบิล",
      "ถูก: Sharing RI/Savings Plans Discounts ทำได้ตามเงื่อนไขและการตั้งค่า",
      "ผิด: Billing รวมไม่ได้ Grant IAM Permissions ระหว่าง Accounts"
    ]
  ],
  [
    "4.2",
    "A team wants a recommendation of a smaller EC2 instance family based on historical CPU and memory usage, rather than merely a cost chart. Which service gives this resource recommendation?",
    "ทีมต้องการคำแนะนำปรับ EC2 Instance Family จาก CPU/Memory Metrics ไม่ใช่แค่กราฟค่าใช้จ่าย เครื่องมือใดเหมาะ",
    "AWS Budgets|AWS Cost Explorer|AWS Compute Optimizer|AWS Pricing Calculator",
    "2",
    "Compute Optimizer วิเคราะห์ Utilization/Performance Metrics เพื่อแนะนำ Resource Type/Size ส่วน Cost Explorer แสดง Actual Costs/Trends และ Pricing Calculator ประเมินราคาก่อนใช้"
  ],
  [
    "4.2",
    "A finance lead wants a warning when forecast monthly spend exceeds a predefined target before the bill arrives. Which service should raise this threshold alert?",
    "Finance ต้องการ Alert เมื่อ Forecast Monthly Spending มีแนวโน้มเกิน Target Budget ก่อนถึงวันเรียกเก็บเงิน ใช้บริการใด",
    "AWS Cost Anomaly Detection|AWS Budgets|AWS Cost Explorer|AWS Cost and Usage Report",
    "1",
    "AWS Budgets แจ้งเตือนเมื่อ Actual/Forecast Spend เกิน Budget Thresholds ส่วน Cost Anomaly Detection ตรวจรูปแบบค่าใช้จ่ายผิดปกติที่ไม่จำเป็นต้องเกิน Budget"
  ],
  [
    "4.3",
    "An enterprise wants an AWS-authored collection of migration design patterns and step-by-step guidance before choosing a consulting partner. Which resource should it read?",
    "องค์กรต้องการอ่าน AWS-authored Migration Patterns/Guidance ก่อนคัดเลือก Consulting Partner ควรเริ่มจากแหล่งข้อมูลใด",
    "AWS Partner Network|AWS Prescriptive Guidance|AWS Support Center|AWS Marketplace",
    "1",
    "AWS Prescriptive Guidance รวบรวม Patterns/Playbooks ด้าน Migration/Modernization ส่วน Partner Network ค้นหาพันธมิตรและ Marketplace ค้นหา Software/Offerings"
  ],
  [
    "4.3",
    "A team expects its account to exceed the default maximum number of a supported AWS resource and wants to request a higher limit. Where should it check and request the quota?",
    "ทีมคาดว่าจะใช้ Resource เกิน Default Limit ของ AWS Service และต้องขอเพิ่ม Service Quota ควรใช้บริการใด",
    "Service Quotas|AWS Health Dashboard|AWS Trusted Advisor|AWS Support Center",
    "0",
    "Service Quotas แสดง Default/Applied Limits และรับคำขอเพิ่ม Quota ของบริการที่รองรับ ส่วน Trusted Advisor ตรวจ Best Practices และ Health Dashboard แจ้ง Service Events"
  ]
]);
})();
