# CLF-C02 Local Mock — Rules

Last reviewed: 2026-09-30

This file is the single source of workflow rules for creating and reviewing CLF-C02 local mock exams.

## 1. Source hierarchy

Use sources in this order:

1. Current AWS Certified Cloud Practitioner (CLF-C02) Official Exam Guide.
2. Current official AWS documentation, AWS Skill Builder, and official AWS certification learning material.
3. The user's AWS Learning Hub notes as a lesson/content reference. These notes originated from AWS Skill Builder and were later refreshed, but they are not authoritative when they conflict with current official AWS material.
4. Secondary sources only when official material is insufficient.

Rules:

- The current Official Exam Guide decides exam scope, domains, task statements, domain weights, question types, and official in-scope/out-of-scope service lists.
- Do not keep obsolete content merely because it appeared in an older CLF exam or an older lesson.
- Do not infer exam frequency from the order of services in the exam guide. AWS explicitly states that list order does not indicate weight or importance.
- If a source conflicts with current official AWS material, use the current official AWS source.

## 2. Creation Rules

### 2.1 Goal

The mock is designed to be as representative of the real CLF-C02 exam as practical and to teach why an answer is correct. It is not designed to be artificially difficult.

### 2.2 Blueprint

- Follow the current CLF-C02 domain weights:
  - Domain 1 — Cloud Concepts: 24%
  - Domain 2 — Security and Compliance: 30%
  - Domain 3 — Cloud Technology and Services: 34%
  - Domain 4 — Billing, Pricing, and Support: 12%
- Cover every official Task Statement across the mock bank.
- Each 65-question full mock should cover every Task Statement at least once unless an explicit set design documents a justified exception.
- AWS does not publish Task Statement sub-weights. Do not present locally chosen Task Statement counts as official AWS weighting.
- Do not overweight a topic merely because it has many bullets in the exam guide or many lesson pages.
- Track coverage across sets so repeated sets do not drift toward the same small group of services or concepts.

### 2.3 Supported question types

The current CLF-C02 Official Exam Guide documents only:

- Multiple choice: one correct response and three distractors.
- Multiple response: two or more correct responses from five or more options.

Therefore:

- Do not create Matching or Ordering questions for CLF-C02 unless a future official AWS source explicitly adds those formats.
- Multiple response questions must state the required selection count clearly when the mock UI expects a fixed count, for example "Select TWO."
- The answer key must contain exactly the stated number of correct responses.

### 2.4 Question style

Use a mix of:

- Direct recognition.
- Short application.
- Requirement → best AWS service/feature.
- Close distractors where alternatives are plausible but one answer best satisfies the requirement.

Do not make long scenarios the default. Difficulty should primarily come from understanding the requirement and distinguishing plausible alternatives, not unnecessary text.

AIF-C01 Local Mock Set 25 may be used only as a style reference for concise stems and plausible distractors. Do not copy AIF subject matter, question-type frequency, or remembered exam content into CLF-C02.

### 2.5 Distractors

- Distractors must be plausible to a learner with incomplete knowledge.
- Avoid obviously unrelated or absurd options used only to make a question easy.
- Avoid multiple answers that are equally correct under the stated requirement.
- If wording such as MOST cost-effective, LEAST operational overhead, or BEST meets is necessary, the explanation must show why that qualifier determines the answer.

### 2.6 Service and concept scope

- Prefer services and concepts explicitly supported by the current Exam Guide and official learning material.
- The official in-scope service list is non-exhaustive, so a service not listed is not automatically forbidden when an official Task Statement or current official learning material clearly requires it.
- Services explicitly listed as out of scope must not be tested as required CLF-C02 knowledge while they remain out of scope.
- Do not turn the mock into service-name trivia. Prefer use case → service, concept recognition, responsibility boundaries, cost/support decisions, and foundational cloud reasoning.

### 2.7 Explanations

Every scored question must contain:

- Correct answer.
- A concise explanation of why it is correct.
- A concise explanation of why each other option is wrong.
- Thai explanation that teaches the concept rather than merely translating the answer.
- Domain and Task Statement metadata.

Where useful, include a short Thai translation/summary of the question.

### 2.8 Vocabulary helper

- Add vocabulary only when English wording is a real reading barrier.
- Do not translate AWS service or feature names.
- Do not add a vocabulary hint that reveals the answer.
- Vocabulary is optional and does not need to appear on every question.

### 2.9 Duplicate control

Within and across sets:

- Avoid exact duplicates.
- Avoid near-duplicates that test the same fact with only cosmetic changes.
- Re-testing a weak concept is allowed when the scenario, reasoning path, or distractor pattern is meaningfully different.

### 2.10 IDs and builder validation

Each set builder should validate at minimum:

- Total question count.
- Domain distribution.
- Required Task Statement coverage.
- Supported question types.
- Unique question IDs.
- No duplicate IDs.
- Answer format.
- Multiple-response answer count consistency.

### 2.11 Progress

Local progress should support:

- Resume from the previous question.
- Saved answers.
- Checked state.
- Correct/wrong state.
- Confidence or explain-more flag.
- Summary state.
- Historical scores.
- Overall unique-question progress.

Repeating a previously completed question must not increase unique-question progress again.

## 3. Review Rules

When the user submits a completed mock:

### 3.1 Wrong answers

For every wrong answer, do not immediately dump the full explanation.

Review one wrong question at a time:

1. Ask what the user was thinking.
2. Ask why the user chose that option.
3. After the user responds, explain which part of the reasoning was correct or incorrect.
4. Teach the relevant concept.
5. Record the topic as a weak point where appropriate.

### 3.2 Also review

Review:

- Questions explicitly flagged as unsure or explain-more.
- English vocabulary that caused a misread.
- Distractor patterns that successfully misled the user.

### 3.3 End-of-set summary

Summarize:

- Weak topics.
- Concepts to revisit.
- Vocabulary to remember.
- Q → lesson/domain mapping when useful.

Do not convert AWS scaled scores into raw percentages.

## 4. General Workflow Rules

- Do the requested scope first. Do not redesign or expand it without a request.
- If required information is missing, state what is missing instead of guessing.
- Separate facts from assumptions and local design decisions.
- When reviewing work, classify findings as:
  - Blocker
  - Required
  - Optional
- Optional items must remain optional.
- Patch review covers only changed files/IDs unless new evidence shows a real cross-cutting issue.
- Environment limitations are reported as BLOCKED_ENVIRONMENT, not code/content failure.
- Do not reopen completed review loops after acceptance criteria are satisfied and no Blocker remains.
- Troubleshooting commands must have a stated purpose: what question the command answers.

## 5. Current official references

- CLF-C02 Exam Guide: https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html
- CLF-C02 Exam Guide PDF: https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.pdf
- AWS Certified Cloud Practitioner certification page: https://aws.amazon.com/certification/certified-cloud-practitioner/
- User lesson reference: https://aws-learning-hub-theta.vercel.app/#/clf-c02/01-introduction-to-the-cloud
