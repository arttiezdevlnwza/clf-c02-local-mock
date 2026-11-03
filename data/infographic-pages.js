window.CLF_INFOGRAPHIC_PAGES = [
  {page:1,title:'Cloud Value & Economics',tags:['Agility','Elasticity','Economics'],sections:[
    {title:'Cloud value',items:['Agility = provision/experiment quickly','Elasticity = capacity follows demand','Global reach = deploy in multiple geographic areas']},
    {title:'Economics',items:['Variable expense instead of large fixed upfront investment','Rightsize resources to actual need','Automate shutdown of unused resources','Economies of scale can lower unit costs']}
  ]},
  {page:2,title:'Well-Architected 6 Pillars',tags:['Well-Architected','Pillars'],sections:[
    {title:'Operate & Protect',items:['Operational Excellence = run and improve','Security = protect data and systems','Reliability = recover and continue operating']},
    {title:'Use Resources Wisely',items:['Performance Efficiency = use resources efficiently','Cost Optimization = avoid unnecessary spend','Sustainability = reduce environmental impact']}
  ]},
  {page:3,title:'Shared Responsibility',tags:['Security','Shared Responsibility'],sections:[
    {title:'AWS',items:['Security OF the cloud','Facilities, physical hardware and underlying infrastructure']},
    {title:'Customer',items:['Security IN the cloud','Data, identities, permissions and workload configuration','Responsibility changes with service abstraction']}
  ]},
  {page:4,title:'Security Service Finder',tags:['IAM','Security','Compliance'],sections:[
    {title:'Identity & Encryption',items:['IAM / IAM Identity Center = access','KMS = encryption keys','Secrets Manager = secrets']},
    {title:'Detect & Protect',items:['GuardDuty = threat detection','Inspector = vulnerabilities','WAF = web request filtering','Shield = DDoS','Artifact = AWS compliance reports']}
  ]},
  {page:5,title:'Compute & Containers',tags:['EC2','Lambda','ECS','EKS'],sections:[
    {title:'Compute choices',items:['EC2 = virtual server + OS control','Lambda = event-driven serverless code','Fargate = serverless container compute']},
    {title:'Container orchestration',items:['ECS = AWS-native orchestration','EKS = managed Kubernetes']}
  ]},
  {page:6,title:'Storage & Database Finder',tags:['S3','EBS','EFS','RDS','DynamoDB'],sections:[
    {title:'Storage',items:['S3 = object','EBS = block','EFS = shared file','Instance Store = ephemeral local block']},
    {title:'Database',items:['RDS/Aurora = relational','DynamoDB = NoSQL key-value/document','ElastiCache = in-memory cache']}
  ]},
  {page:7,title:'Networking & Global Infrastructure',tags:['VPC','Region','AZ','Route 53'],sections:[
    {title:'Global',items:['Region contains multiple Availability Zones','Multi-AZ improves availability','Multi-Region can support DR, latency and sovereignty']},
    {title:'Network',items:['VPC = isolated network','Route 53 = DNS','Direct Connect = dedicated connectivity','Site-to-Site VPN = encrypted tunnel over internet','CloudFront = CDN']}
  ]},
  {page:8,title:'Monitoring, Audit & Governance',tags:['CloudWatch','CloudTrail','Config'],sections:[
    {title:'Know the clue',items:['CloudWatch = metrics/logs/alarms','CloudTrail = API/account activity','Config = resource configuration/compliance rules','Trusted Advisor = best-practice checks']},
    {title:'Avoid confusion',items:['Who did what? → CloudTrail','How is resource configured? → Config','How is system performing? → CloudWatch']}
  ]},
  {page:9,title:'Analytics & Integration',tags:['Athena','Glue','SQS','SNS'],sections:[
    {title:'Analytics',items:['Athena = serverless SQL on S3','Glue = catalog/data integration/ETL','Quick Sight = BI visualization','Kinesis = streaming data']},
    {title:'Integration',items:['SQS = queue and decoupling','SNS = pub/sub fan-out','EventBridge = event bus/routing','Step Functions = workflow orchestration']}
  ]},
  {page:10,title:'Pricing, Cost & Support',tags:['Budgets','Cost Explorer','Support'],sections:[
    {title:'Pricing',items:['On-Demand = no long commitment','Spot = spare capacity + interruption','Savings Plans = commitment discount','Dedicated Hosts = dedicated physical host']},
    {title:'Cost & support',items:['Budgets = thresholds/alerts','Cost Explorer = analyze trends','Pricing Calculator = estimate','Support Center = support cases','re:Post = community knowledge']}
  ]}
];