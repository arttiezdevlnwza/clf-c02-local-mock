# CLF-C02 Local Mock — Blueprint

Last reviewed: 2026-09-30

This document defines the current exam blueprint and the local mock design baseline for AWS Certified Cloud Practitioner (CLF-C02).

## 1. Authoritative exam baseline

Current official exam facts:

- Exam: AWS Certified Cloud Practitioner (CLF-C02)
- Level: Foundational
- Duration: 90 minutes
- Total questions: 65
- Scored questions: 50
- Unscored questions: 15
- Passing score: 700 on a scaled 100–1,000 scale
- Official question types:
  - Multiple choice: 1 correct + 3 distractors
  - Multiple response: 2 or more correct responses from 5 or more options

Important:

- AWS does not identify which 15 questions are unscored.
- Domain weights apply to scored content.
- AWS does not publish Task Statement sub-weights.
- The official service and technology lists are non-exhaustive and subject to change.
- The order of items in the official technologies/concepts list does not indicate their weight or importance.

## 2. Official domains and weights

| Domain | Official weight | 65-question local-mock target |
|---|---:|---:|
| Domain 1 — Cloud Concepts | 24% | 16 |
| Domain 2 — Security and Compliance | 30% | 19 |
| Domain 3 — Cloud Technology and Services | 34% | 22 |
| Domain 4 — Billing, Pricing, and Support | 12% | 8 |
| **Total** | **100%** | **65** |

The 16 / 19 / 22 / 8 allocation is a local mock design choice that is the nearest practical integer distribution to the official domain percentages across 65 practice questions. It is not a claim that a real 65-question exam form uses those exact counts, because AWS applies the published weights to scored content and includes 15 unidentified unscored questions.

## 3. Official Task Statements

### Domain 1 — Cloud Concepts (24%)

**1.1 Define the benefits of the AWS Cloud**
- Value proposition of AWS Cloud.
- Benefits of global infrastructure.
- High availability, elasticity, and agility.

**1.2 Identify design principles of the AWS Cloud**
- AWS Well-Architected Framework.
- Six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability.
- Differences between the pillars.

**1.3 Understand the benefits of and strategies for migration to the AWS Cloud**
- Cloud adoption strategies.
- Resources supporting migration.
- AWS Cloud Adoption Framework (AWS CAF).
- Appropriate migration strategies.

**1.4 Understand concepts of cloud economics**
- Cloud economics and cost savings.
- Fixed vs variable costs.
- On-premises costs.
- BYOL vs included licenses.
- Rightsizing.
- Benefits of automation.
- Economies of scale.

### Domain 2 — Security and Compliance (30%)

**2.1 Understand the AWS shared responsibility model**
- AWS, customer, and shared responsibilities.
- How responsibility changes by service type, including examples such as EC2, RDS, and Lambda.

**2.2 Understand AWS Cloud security, governance, and compliance concepts**
- Compliance and governance.
- Cloud-security benefits and encryption.
- Security logs.
- AWS Artifact and compliance information.
- Geographic/industry compliance needs.
- Security services including Inspector, Security Hub, GuardDuty, Shield.
- Encryption in transit / at rest.
- CloudWatch, CloudTrail, AWS Config, and access reports for monitoring/auditing/governance.

**2.3 Identify AWS access management capabilities**
- IAM.
- Root-user protection.
- Least privilege.
- IAM Identity Center.
- Access keys, password policies, and credential storage.
- MFA, cross-account roles, federation.
- Users, groups, custom policies, managed policies.

**2.4 Identify components and resources for security**
- AWS security capabilities and documentation.
- WAF, Firewall Manager, Shield, GuardDuty.
- Third-party security products in AWS Marketplace.
- AWS security information/resources.
- Trusted Advisor for identifying security issues.

### Domain 3 — Cloud Technology and Services (34%)

**3.1 Define methods of deploying and operating in the AWS Cloud**
- Console vs APIs/SDKs/CLI vs infrastructure as code.
- One-time operations vs repeatable processes.
- Cloud, hybrid, and on-premises deployment models.

**3.2 Define the AWS global infrastructure**
- Regions, Availability Zones, edge locations.
- High availability.
- Multi-AZ.
- Multi-Region use cases: DR, business continuity, low latency, data sovereignty.

**3.3 Identify AWS compute services**
- EC2 instance families/use cases.
- ECS / EKS.
- Fargate / Lambda.
- Auto Scaling and elasticity.
- Load balancers.

**3.4 Identify AWS database services**
- Managed vs EC2-hosted databases.
- RDS / Aurora.
- DynamoDB.
- ElastiCache.
- DMS / SCT.

**3.5 Identify AWS network services**
- VPC components.
- Subnets and gateways.
- Security groups and network ACLs.
- Route 53.
- VPN / Direct Connect.

**3.6 Identify AWS storage services**
- Object storage.
- S3 storage classes.
- EBS / instance store.
- EFS / FSx.
- Storage Gateway.
- Lifecycle policies.
- AWS Backup.

**3.7 Identify AWS AI/ML services and analytics services**
- AI/ML service use cases such as SageMaker AI and Lex.
- Analytics services such as Athena, Kinesis, Glue, and Quick Sight.

**3.8 Identify services from other in-scope AWS service categories**
- EventBridge / SNS / SQS.
- Connect / SES.
- AWS Support.
- CodeBuild / CodePipeline / X-Ray.
- AppStream 2.0 / WorkSpaces / WorkSpaces Secure Browser.
- Amplify.
- IoT Core.
- Select the appropriate service for messaging, notifications, business applications, support, developer tooling, end-user computing, frontend/mobile, and IoT.

### Domain 4 — Billing, Pricing, and Support (12%)

**4.1 Compare AWS pricing models**
- On-Demand, Reserved Instances, Spot Instances, Savings Plans.
- Dedicated Hosts, Dedicated Instances, Capacity Reservations.
- Storage options and tiers.
- RI flexibility and Organizations behavior.
- Incoming/outgoing and inter-Region data transfer.
- Storage pricing choices.

**4.2 Understand resources for billing, budget, and cost management**
- Billing and pricing information.
- Organizations.
- Cost allocation tags.
- Budgets.
- Cost Explorer.
- Pricing Calculator.
- Consolidated billing.
- Cost and Usage Reports.

**4.3 Identify AWS technical resources and AWS Support options**
- Official AWS documentation/resources.
- AWS Support plans.
- AWS Partner Network.
- Support Center.
- Prescriptive Guidance, Knowledge Center, re:Post.
- Trusted Advisor, Health Dashboard, Health API.
- Trust and Safety.
- AWS Marketplace.
- Professional Services and solutions architects.

## 4. Task Statement coverage policy

There are 19 official Task Statements:

- Domain 1: 4
- Domain 2: 4
- Domain 3: 8
- Domain 4: 3

AWS does not publish an official percentage for each Task Statement. Therefore the local mock will not invent one.

For every normal 65-question full mock:

- Cover all 19 Task Statements at least once.
- Keep the official domain totals at 16 / 19 / 22 / 8 unless a set is explicitly marked as a targeted review set.
- Allocate the remaining questions by breadth and foundational importance of the official knowledge/skills, while checking cross-set coverage so the same few services do not dominate.
- Do not interpret the number of bullet points under a Task Statement as an official exam weight.

This makes Task Statement coverage explicit without pretending AWS published sub-domain weights.

## 5. Question-type blueprint

Official AWS evidence currently supports only:

1. Multiple choice.
2. Multiple response.

The local mock therefore supports only those two exam question types by default.

### Multiple choice

- 4 total options.
- Exactly 1 correct.
- 3 plausible distractors.

### Multiple response

- 5 or more options.
- 2 or more correct.
- The local UI should state a fixed count such as "Select TWO" when the answer validator requires an exact number.
- Correct-answer metadata must match the displayed selection count.

### Not used

- Matching.
- Ordering.

These are intentionally excluded because the current CLF-C02 Exam Guide does not list them.

## 6. Question style blueprint

The mock should approximate the nature of an AWS foundational exam, not artificially increase difficulty.

Target mix should contain all of these styles:

- Direct recognition.
- Short application.
- Requirement → service/feature.
- Close distractor.

Design principles:

- Concise stems are normal.
- Long scenarios are allowed only when the scenario itself is necessary.
- Service-name → definition questions may appear, but should not dominate.
- Prefer understanding the requirement and choosing the best AWS concept/service.
- Distractors should usually come from the same conceptual neighborhood.
- Avoid trivial distractors that can be eliminated without knowing AWS.

AIF-C01 observations are style evidence only. They do not define CLF-C02 content or question-type frequency.

## 7. Official exam-scope boundaries

The Official Exam Guide says the target candidate is not expected to perform these job tasks:

- Coding.
- Designing cloud architecture.
- Troubleshooting.
- Implementation.
- Load and performance testing.

Therefore mock questions should test foundational recognition, selection, explanation, cost/security/responsibility concepts, and service positioning rather than implementation detail.

Examples of things to avoid as core CLF questions:

- Writing SDK code.
- Debugging a failing CloudFormation stack.
- Choosing low-level tuning parameters.
- Designing a detailed production architecture.
- Performing service implementation steps.

## 8. Technologies and concepts explicitly referenced by the current guide

The current guide lists these as technologies/concepts that might appear:

- APIs.
- Benefits of migrating to AWS Cloud.
- AWS CAF.
- AWS Compliance.
- Compute.
- Cost management.
- Databases.
- EC2 purchasing/instance concepts.
- AWS global infrastructure.
- Infrastructure as code.
- AWS Knowledge Center.
- Machine learning.
- Management and governance.
- Migration and data transfer.
- Network services.
- AWS Partner Network.
- AWS Prescriptive Guidance.
- AWS Pricing Calculator.
- AWS Professional Services.
- AWS re:Post.
- AWS SDKs.
- Security.
- AWS Security Blog.
- AWS shared responsibility model.
- AWS solutions architects.
- Storage.
- AWS Support Center.
- AWS Support plans.
- AWS Well-Architected Framework.

This list is non-exhaustive and its order is not a weighting signal.

## 9. Current official in-scope AWS services

The following list is copied structurally from the current official Exam Guide and is used as the service-scope baseline.

### Analytics
- Amazon Athena
- Amazon EMR
- AWS Glue
- Amazon Kinesis
- Amazon OpenSearch Service
- Amazon Quick Sight
- Amazon Redshift

### Application Integration
- Amazon EventBridge
- Amazon SNS
- Amazon SQS
- AWS Step Functions

### Business Applications
- Amazon Connect
- Amazon SES

### Cloud Financial Management
- AWS Budgets
- AWS Cost and Usage Reports
- AWS Cost Explorer
- AWS Marketplace

### Compute
- AWS Batch
- Amazon EC2
- AWS Elastic Beanstalk
- Amazon Lightsail
- AWS Outposts

### Containers
- Amazon ECR
- Amazon ECS
- Amazon EKS

### Customer Enablement
- AWS Support

### Database
- Amazon Aurora
- Amazon DocumentDB
- Amazon DynamoDB
- Amazon ElastiCache
- Amazon Neptune
- Amazon RDS

### Developer Tools
- AWS CLI
- AWS CodeBuild
- AWS CodePipeline
- AWS X-Ray

### End User Computing
- Amazon AppStream 2.0
- Amazon WorkSpaces
- Amazon WorkSpaces Secure Browser

### Frontend Web and Mobile
- AWS Amplify

### IoT
- AWS IoT Core

### Machine Learning
- Amazon Comprehend
- Amazon Lex
- Amazon Polly
- Amazon Q
- Amazon Rekognition
- Amazon SageMaker AI
- Amazon Textract
- Amazon Transcribe
- Amazon Translate

### Management and Governance
- AWS Auto Scaling
- AWS CloudFormation
- AWS CloudTrail
- Amazon CloudWatch
- AWS Compute Optimizer
- AWS Config
- AWS Control Tower
- AWS Health Dashboard
- AWS License Manager
- AWS Management Console
- AWS Organizations
- AWS Service Catalog
- Service Quotas
- AWS Systems Manager
- AWS Trusted Advisor
- AWS Well-Architected Tool

### Migration and Transfer
- AWS Application Discovery Service
- AWS Application Migration Service
- AWS Database Migration Service (AWS DMS)
- Migration Evaluator
- AWS Migration Hub
- AWS Schema Conversion Tool (AWS SCT)

### Networking and Content Delivery
- Amazon API Gateway
- Amazon CloudFront
- AWS Direct Connect
- AWS Global Accelerator
- AWS PrivateLink
- Amazon Route 53
- AWS Transit Gateway
- Amazon VPC
- AWS VPN
- AWS Site-to-Site VPN
- AWS Client VPN

### Security, Identity, and Compliance
- AWS Artifact
- AWS Certificate Manager (ACM)
- AWS CloudHSM
- Amazon Cognito
- Amazon Detective
- AWS Directory Service
- AWS Firewall Manager
- Amazon GuardDuty
- AWS IAM
- AWS IAM Identity Center
- Amazon Inspector
- AWS KMS
- Amazon Macie
- AWS Resource Access Manager (AWS RAM)
- AWS Secrets Manager
- AWS Security Hub
- AWS Shield
- AWS WAF

### Serverless
- AWS Fargate
- AWS Lambda

### Storage
- AWS Backup
- Amazon EBS
- Amazon EFS
- AWS Elastic Disaster Recovery
- Amazon FSx
- Amazon S3
- Amazon S3 Glacier
- AWS Storage Gateway

## 10. Current official out-of-scope AWS services

Explicitly out of scope in the current guide:

### Analytics
- Amazon AppFlow
- AWS Clean Rooms
- AWS Data Exchange
- Amazon DataZone
- Amazon MSK

### Application Integration
- AWS AppFabric
- Amazon Simple Workflow Service

### Business Applications
- Amazon WorkDocs

### Compute
- AWS Copilot
- AWS Wavelength

### Cost Management
- AWS Application Cost Profiler
- Amazon DevPay

### Customer Enablement
- AWS Activate
- AWS IQ
- AWS Managed Services (AMS)

### Cloud Financial Management
- AWS Billing Conductor

### Database
- Amazon Keyspaces
- Amazon MemoryDB for Redis OSS
- AWS AppConfig

### Developer Tools
- AWS Application Composer
- AWS CodeArtifact
- AWS CodeDeploy
- Amazon CodeGuru
- AWS CloudShell
- AWS Device Farm

### Game Tech
- Amazon GameLift
- Amazon Lumberyard

### IoT
- AWS IoT Device Defender
- AWS IoT Greengrass
- Amazon Monitron

### Machine Learning
- Amazon Fraud Detector
- Amazon Lookout for Metrics
- AWS Panorama
- Amazon Personalize

### Management and Governance
- AWS Chatbot
- Amazon Data Lifecycle Manager
- Amazon Elastic Transcoder
- AWS Launch Wizard

### Media Services
- AWS Elemental Appliances and Software
- AWS Elemental MediaConnect
- AWS Elemental MediaConvert
- AWS Elemental MediaLive
- AWS Elemental MediaPackage
- AWS Elemental MediaStore
- AWS Elemental MediaTailor
- Amazon Interactive Video Service (Amazon IVS)

### Migration and Transfer
- AWS Migration Hub Refactor Spaces
- AWS Transfer Family

### Networking and Content Delivery
- AWS Cloud Map
- AWS Network Access Analyzer
- AWS Ground Station
- Amazon VPC Lattice

### Security, Identity, and Compliance
- Amazon Cloud Directory
- AWS Network Firewall

### Robotics
- AWS RoboMaker

### Storage
- Amazon FSx for Lustre

The official out-of-scope list is non-exhaustive and subject to change.

## 11. Local Mock Set 1 baseline

Set 1 will use:

- Total: 65 questions.
- Domain distribution: D1 16 / D2 19 / D3 22 / D4 8.
- All 19 Task Statements represented.
- Only multiple-choice and multiple-response.
- English exam stem/options by default.
- Thai teaching explanation and optional Thai summary.
- Vocabulary only where it is a real reading barrier.
- Plausible distractors.
- No matching or ordering.
- No implementation/coding/troubleshooting tasks.
- No forced long-scenario bias.

Exact Task Statement counts and MC/MR counts will be chosen during Set 1 construction and recorded by the builder as local design metadata. They must not be labeled as official AWS distribution.

## 12. Builder acceptance criteria

Each full-set builder must fail validation when any of these occur:

- Question count is not 65.
- Domain count differs from the set blueprint.
- Any required Task Statement is absent.
- Duplicate question ID exists.
- Unsupported question type exists.
- Multiple-choice question has anything other than exactly one correct answer.
- Multiple-choice question does not have four total options.
- Multiple-response question has fewer than five options.
- Multiple-response question has fewer than two correct answers.
- Displayed selection count conflicts with answer metadata.
- Required domain/task metadata is missing.

Duplicate/near-duplicate semantic checking can be reviewed separately; it should not be faked as a deterministic builder check unless an actual similarity mechanism exists.

## 13. Learning Hub mapping — next content pass

User lesson reference:

https://aws-learning-hub-theta.vercel.app/#/clf-c02/01-introduction-to-the-cloud

The Learning Hub is a supporting lesson source, not the authority for scope.

Before generating a large question bank, map its lessons against this blueprint with three states:

- COVERED — lesson content supports the current official Task Statement.
- GAP — official Task Statement/knowledge/skill is not adequately covered by the lessons.
- OUTSIDE CURRENT SCOPE — lesson material is no longer supported by the current exam scope or is deeper than the foundational target.

When a lesson conflicts with current official AWS material, update the lesson mapping from official AWS sources rather than changing the blueprint to preserve old lesson content.

## 14. Evidence used for this baseline

Official sources reviewed on 2026-09-30:

- CLF-C02 Exam Guide:
  https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html
- CLF-C02 Exam Guide PDF:
  https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.pdf
- AWS Certified Cloud Practitioner certification page:
  https://aws.amazon.com/certification/certified-cloud-practitioner/

The certification page confirms 65 questions, 90 minutes, and that the exam format is multiple choice or multiple response. It directs candidates to the AWS Certification Official Practice Question Set and Official Practice Exam in Skill Builder for official exam-style practice.

Because the public Exam Guide does not publish a fixed MC/MR ratio, Task Statement sub-weights, or the identities/domains of the 15 unscored questions, this blueprint intentionally does not invent those values.


## 15. Official practice-set evidence

Current AWS Skill Builder metadata confirms:

- Official Practice Question Set: AWS Certified Cloud Practitioner (CLF-C02) contains 20 AWS-developed questions intended to demonstrate certification-exam style.
- Each practice-set question includes detailed feedback for answer choices and recommended resources.
- Official Practice Exam: AWS Certified Cloud Practitioner (CLF-C02) contains 65 questions with a 90-minute limit.
- AWS states that the Official Practice Exam uses the same question style and rigor as the certification exam.
- AWS Skill Builder may require sign-in/subscription for some content. Publicly indexed metadata exposes the assessment description, but not the full 20-question item text used for style analysis.

Design consequence:

- Use the Official Exam Guide for supported question types and scope.
- Do not invent a fixed MC/MR ratio from unavailable item text.
- When the actual Official Practice Question Set is available to this project later, use its question wording and distractor construction as the primary CLF-specific style reference, without copying its questions into the mock.
