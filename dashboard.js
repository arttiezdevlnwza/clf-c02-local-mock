(() => {
  const STORAGE_PREFIX = 'clf-c02-local-mock:v1:';
  const sets = window.QUIZ_SETS || [];
  const reviewInsights = window.REVIEW_INSIGHTS || { sets: {} };
  const byId = id => document.getElementById(id);

  const DOMAIN_NAMES = {
    1: 'Cloud Concepts',
    2: 'Security and Compliance',
    3: 'Cloud Technology and Services',
    4: 'Billing, Pricing, and Support'
  };
  const PRESTUDY_BASELINE = {
    score: { correct: 51, total: 65, wrong: 14, accuracy: 78.5 },
    domains: [
      { id: 1, name: 'Cloud Concepts', correct: 13, total: 16, wrong: 3 },
      { id: 2, name: 'Security and Compliance', correct: 15, total: 19, wrong: 4 },
      { id: 3, name: 'Cloud Technology and Services', correct: 18, total: 22, wrong: 4 },
      { id: 4, name: 'Billing, Pricing, and Support', correct: 5, total: 8, wrong: 3 }
    ],
    chapters: [
      { id: 'L09', title: 'Security', file: '09-security.md', questions: [15, 16, 48], topics: 'Amazon Inspector vs GuardDuty · AWS WAF vs AWS Shield' },
      { id: 'L13', title: 'Well-Architected Solutions', file: '13-well-architected-solutions.md', questions: [4, 26, 33], topics: 'Operational Excellence vs Performance Efficiency · Amazon SES · Performance Efficiency vs Sustainability' },
      { id: 'L02', title: 'Compute in the Cloud', file: '02-compute-in-the-cloud.md', questions: [27, 62], topics: 'EC2 Spot vs On-Demand vs Dedicated Hosts' },
      { id: 'L06', title: 'Storage', file: '06-storage.md', questions: [23, 59], topics: 'Amazon EFS shared file system · Amazon EBS vs Instance Store' },
      { id: 'L10', title: 'Monitoring, Compliance, and Governance in the AWS Cloud', file: '10-monitoring-compliance-governance.md', questions: [12], topics: 'AWS Config evaluates resource configurations against rules' },
      { id: 'L07', title: 'Databases', file: '07-databases.md', questions: [56], topics: 'Amazon RDS relational database vs DynamoDB NoSQL' },
      { id: 'L11', title: 'Pricing and Support', file: '11-pricing-and-support.md', questions: [63], topics: 'AWS Budgets alerts vs Cost Explorer analysis', note: 'เป็นบทเสริมด้าน pricing สำหรับ Q27 และ Q62; บทหลักของ EC2 purchasing options คือ L02' },
      { id: 'L01', title: 'Introduction to the Cloud', file: '01-introduction-to-the-cloud.md', questions: [6], topics: 'Fixed expense vs Variable expense' }
    ],
    questions: [
      { id: 4, domain: 1, lesson: 'L13', topic: 'Operational Excellence vs Performance Efficiency' },
      { id: 6, domain: 1, lesson: 'L01', topic: 'Fixed expense vs Variable expense' },
      { id: 12, domain: 2, lesson: 'L10', topic: 'AWS Config: resource configuration compliance vs Amazon Inspector' },
      { id: 15, domain: 2, lesson: 'L09', topic: 'Amazon Inspector: vulnerability scanning vs GuardDuty: threat detection' },
      { id: 16, domain: 2, lesson: 'L09', topic: 'AWS WAF: filtering malicious HTTP requests vs AWS Shield: DDoS protection' },
      { id: 23, domain: 3, lesson: 'L06', topic: 'Amazon EFS: shared file system across multiple EC2 instances' },
      { id: 26, domain: 3, lesson: 'L13', topic: 'Amazon SES: email delivery vs Step Functions: workflow orchestration' },
      { id: 27, domain: 4, lesson: 'L02', topic: 'EC2 Spot: interruptible capacity for fault-tolerant workloads' },
      { id: 33, domain: 1, lesson: 'L13', topic: 'Performance Efficiency vs Sustainability' },
      { id: 48, domain: 2, lesson: 'L09', topic: 'AWS Shield: DDoS protection vs AWS WAF: HTTP request filtering' },
      { id: 56, domain: 3, lesson: 'L07', topic: 'Amazon RDS: managed relational database vs DynamoDB: NoSQL' },
      { id: 59, domain: 3, lesson: 'L06', topic: 'Amazon EBS: persistent block storage vs EC2 Instance Store: temporary local storage' },
      { id: 62, domain: 4, lesson: 'L02', topic: 'EC2 On-Demand vs Dedicated Hosts for short-term unpredictable usage' },
      { id: 63, domain: 4, lesson: 'L11', topic: 'AWS Budgets: budget/forecast alerts vs Cost Explorer: cost analysis' }
    ],
    lessonBaseUrl: 'https://github.com/arttiezdevlnwza/aws-learning-hub/blob/main/public/lessons/clf-c02/'
  };

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    })[char]);
  }

  function storageKey(setId) {
    return `${STORAGE_PREFIX}${setId}`;
  }

  function loadState(setId) {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey(setId)) || '{}');
      return {
        answers: parsed.answers || {},
        checked: parsed.checked || {},
        orderDrafts: parsed.orderDrafts || {},
        explainMore: parsed.explainMore || {}
      };
    } catch {
      return { answers: {}, checked: {}, orderDrafts: {}, explainMore: {} };
    }
  }

  function currentAnswer(question, state) {
    if (question.type === 'ordering') return state.orderDrafts[question.id] || [];
    return state.answers[question.id] || [];
  }

  function sameAnswer(left, right) {
    const a = [...(left || [])].sort();
    const b = [...(right || [])].sort();
    return a.length === b.length && a.every((value, index) => value === b[index]);
  }

  function isCorrect(question, answer) {
    if (question.type === 'ordering') {
      const values = answer || [];
      return values.length === question.answer.length &&
        values.every((value, index) => value === question.answer[index]);
    }
    return sameAnswer(answer, question.answer);
  }

  function detailedSetSummary(set) {
    const state = loadState(set.id);
    let checked = 0;
    let correct = 0;
    let flagged = 0;
    let flaggedCorrect = 0;
    let wrong = 0;

    set.questions.forEach(question => {
      const checkedQuestion = !!state.checked[question.id];
      const flag = !!state.explainMore[question.id];
      const answer = currentAnswer(question, state);
      const ok = checkedQuestion && isCorrect(question, answer);
      if (checkedQuestion) {
        checked++;
        if (ok) correct++;
        else wrong++;
      }
      if (flag) {
        flagged++;
        if (ok) flaggedCorrect++;
      }
    });

    return { state, checked, correct, wrong, flagged, flaggedCorrect };
  }

  function effectiveSetSummary(set, detail) {
    if (detail.checked === set.questionCount) {
      return { checked: detail.checked, correct: detail.correct, source: 'current' };
    }
    if (Number.isFinite(set.historicalAnswered) && Number.isFinite(set.historicalScore)) {
      return {
        checked: Math.min(set.questionCount, set.historicalAnswered),
        correct: set.historicalScore,
        source: 'history'
      };
    }
    return { checked: detail.checked, correct: detail.correct, source: 'current' };
  }

  function rating(pct, checked) {
    if (!checked) return { label: 'ยังไม่มีข้อมูล', className: 'neutral' };
    if (pct >= 85) return { label: 'Strong', className: 'strong' };
    if (pct >= 75) return { label: 'Good', className: 'good' };
    return { label: 'Review', className: 'review' };
  }

  function flattenReviewedInsights() {
    const items = [];
    Object.entries(reviewInsights.sets || {}).forEach(([setId, reviewSet]) => {
      (reviewSet.items || []).forEach(item => {
        items.push({
          ...item,
          setId,
          setTitle: reviewSet.title || setId
        });
      });
    });
    return items;
  }

  function groupReviewedItems(items) {
    const grouped = {};
    items.forEach(item => {
      const key = item.key || `${item.setId}:${item.questionId}`;
      if (!grouped[key]) {
        grouped[key] = {
          key,
          topic: item.topic || key,
          type: item.type,
          refs: [],
          notes: []
        };
      }
      grouped[key].refs.push(`${item.setTitle.replace('Local Mock ', '')} Q${item.questionId}`);
      if (item.note) grouped[key].notes.push(item.note);
    });
    return Object.values(grouped).sort((a, b) => b.refs.length - a.refs.length || a.topic.localeCompare(b.topic));
  }

  function collectDashboardData() {
    const setRows = [];
    const domains = Object.keys(DOMAIN_NAMES).reduce((acc, key) => {
      acc[key] = { domain: Number(key), name: DOMAIN_NAMES[key], checked: 0, correct: 0, wrong: 0, flagged: 0 };
      return acc;
    }, {});
    const reviewItems = [];

    let effectiveChecked = 0;
    let effectiveCorrect = 0;
    let detailedChecked = 0;
    let totalFlagged = 0;
    let completedSets = 0;
    let historicalOnlySets = 0;

    sets.forEach(set => {
      const detail = detailedSetSummary(set);
      const effective = effectiveSetSummary(set, detail);
      const setPct = effective.checked ? Math.round(effective.correct / effective.checked * 100) : 0;
      const complete = effective.checked === set.questionCount;

      if (complete) completedSets++;
      if (effective.source === 'history' && detail.checked < set.questionCount) historicalOnlySets++;
      effectiveChecked += effective.checked;
      effectiveCorrect += effective.correct;
      detailedChecked += detail.checked;
      totalFlagged += detail.flagged;

      setRows.push({ set, detail, effective, setPct, complete });

      set.questions.forEach(question => {
        const checkedQuestion = !!detail.state.checked[question.id];
        const flag = !!detail.state.explainMore[question.id];
        const answer = currentAnswer(question, detail.state);
        const ok = checkedQuestion && isCorrect(question, answer);
        const domain = domains[String(question.domain)];

        if (checkedQuestion && domain) {
          domain.checked++;
          if (ok) domain.correct++;
          else domain.wrong++;
        }
        if (flag && domain) domain.flagged++;

        if ((checkedQuestion && !ok) || flag) {
          reviewItems.push({
            setId: set.id,
            setTitle: set.title,
            questionId: question.id,
            question: question.question,
            domain: question.domain,
            domainName: question.domainName,
            wrong: checkedQuestion && !ok,
            flagged: flag,
            checked: checkedQuestion
          });
        }
      });
    });

    const domainRows = Object.values(domains).map(row => {
      const pct = row.checked ? Math.round(row.correct / row.checked * 100) : 0;
      return { ...row, pct, rating: rating(pct, row.checked) };
    });

    const reviewedItems = flattenReviewedInsights();
    const reviewed = {
      items: reviewedItems,
      concept: reviewedItems.filter(item => item.type === 'concept'),
      confidence: reviewedItems.filter(item => item.type === 'confidence'),
      language: reviewedItems.filter(item => item.type === 'language'),
      clue: reviewedItems.filter(item => item.type === 'clue')
    };

    return {
      setRows,
      domainRows,
      reviewItems,
      reviewed,
      effectiveChecked,
      effectiveCorrect,
      detailedChecked,
      totalFlagged,
      completedSets,
      historicalOnlySets,
      totalQuestions: sets.reduce((sum, set) => sum + set.questionCount, 0)
    };
  }


  function renderPrestudyDiagnostic() {
    const baseline = PRESTUDY_BASELINE;
    const scoreRoot = byId('prestudyDiagnosticSummary');
    const domainRoot = byId('prestudyDiagnosticDomains');
    const chapterRoot = byId('prestudyDiagnosticChapters');
    const questionRoot = byId('prestudyDiagnosticQuestions');
    if (!scoreRoot || !domainRoot || !chapterRoot || !questionRoot) return;

    scoreRoot.innerHTML = [
      ['คะแนนรวม', `${baseline.score.correct}/${baseline.score.total}`],
      ['Accuracy', `${baseline.score.accuracy}%`],
      ['ตอบถูก', String(baseline.score.correct)],
      ['ตอบผิด', String(baseline.score.wrong)]
    ].map(([label, value]) => `
      <div class="prestudy-stat">
        <span>${label}</span>
        <strong>${value}</strong>
      </div>`).join('');

    domainRoot.innerHTML = baseline.domains.map(domain => {
      const pct = (domain.correct / domain.total * 100).toFixed(1);
      return `
        <div class="prestudy-domain-card">
          <div class="prestudy-domain-head">
            <div><strong>Domain ${domain.id}</strong><span>${escapeHtml(domain.name)}</span></div>
            <strong>${pct}%</strong>
          </div>
          <div class="dashboard-track"><div class="dashboard-fill" style="width:${pct}%"></div></div>
          <small>ถูก ${domain.correct}/${domain.total} · ผิด ${domain.wrong}</small>
        </div>`;
    }).join('');

    chapterRoot.innerHTML = baseline.chapters.map(chapter => {
      const url = baseline.lessonBaseUrl + chapter.file;
      return `
        <div class="prestudy-chapter-row">
          <div class="prestudy-chapter-main">
            <a href="${url}" target="_blank" rel="noopener noreferrer"><strong>${chapter.id} · ${escapeHtml(chapter.title)}</strong></a>
            <span>${escapeHtml(chapter.topics)}</span>
            ${chapter.note ? `<small>${escapeHtml(chapter.note)}</small>` : ''}
          </div>
          <div class="prestudy-chapter-questions">
            <strong>${chapter.questions.length}</strong>
            <span>Q${chapter.questions.join(', Q')}</span>
          </div>
        </div>`;
    }).join('');

    const lessonById = Object.fromEntries(baseline.chapters.map(chapter => [chapter.id, chapter]));
    questionRoot.innerHTML = baseline.questions.map(question => {
      const lesson = lessonById[question.lesson];
      const url = baseline.lessonBaseUrl + lesson.file;
      return `
        <div class="prestudy-question-row">
          <strong>Q${question.id}</strong>
          <span>Domain ${question.domain}</span>
          <span>${escapeHtml(question.topic)}</span>
          <a href="${url}" target="_blank" rel="noopener noreferrer">${question.lesson} · ${escapeHtml(lesson.title)}</a>
        </div>`;
    }).join('');
  }

  function renderOverview(data) {
    const overallPct = data.effectiveChecked
      ? Math.round(data.effectiveCorrect / data.effectiveChecked * 100)
      : 0;
    const remaining = Math.max(0, data.totalQuestions - data.effectiveChecked);

    byId('dashboardOverview').innerHTML = `
      <div class="dashboard-stat-card">
        <span>Overall accuracy</span>
        <strong>${overallPct}%</strong>
        <small>${data.effectiveCorrect}/${data.effectiveChecked || 0} ข้อที่มีผล</small>
      </div>
      <div class="dashboard-stat-card">
        <span>Completed sets</span>
        <strong>${data.completedSets}/${sets.length}</strong>
        <small>Local Mock Set 1–10</small>
      </div>
      <div class="dashboard-stat-card concept-stat">
        <span>Concept / Recall gaps</span>
        <strong>${data.reviewed.concept.length}</strong>
        <small>จากผล review ที่บันทึกไว้</small>
      </div>
      <div class="dashboard-stat-card confidence-stat">
        <span>Confidence gaps</span>
        <strong>${data.reviewed.confidence.length}</strong>
        <small>ตอบถูกแต่ยังไม่มั่นใจ</small>
      </div>
      <div class="dashboard-stat-card language-stat">
        <span>Language gaps</span>
        <strong>${data.reviewed.language.length}</strong>
        <small>อังกฤษทำให้ตีความโจทย์พลาด</small>
      </div>
      <div class="dashboard-stat-card clue-stat">
        <span>Clue / Distractor gaps</span>
        <strong>${data.reviewed.clue.length}</strong>
        <small>รู้บางส่วน แต่จับคำถาม/ตัวลวงพลาด</small>
      </div>
      <div class="dashboard-stat-card">
        <span>Remaining</span>
        <strong>${remaining}</strong>
        <small>ข้อที่ยังไม่มีผลครบ</small>
      </div>`;
  }

  function renderSetPerformance(data) {
    const rows = data.setRows.map(row => {
      const pct = row.effective.checked ? row.setPct : 0;
      const source = row.effective.source === 'history' ? 'ผลเดิม' : row.complete ? 'ครบแล้ว' : 'กำลังทำ';
      const score = row.effective.checked
        ? `${row.effective.correct}/${row.effective.checked}`
        : 'ยังไม่มีผล';
      const width = row.effective.checked ? Math.max(2, Math.min(100, pct)) : 0;
      return `
        <div class="dashboard-set-row">
          <div class="dashboard-set-head">
            <strong>${escapeHtml(row.set.title)}</strong>
            <span>${score} · ${pct}% · ${source}</span>
          </div>
          <div class="dashboard-track"><div class="dashboard-fill" style="width:${width}%"></div></div>
        </div>`;
    }).join('');

    byId('dashboardSets').innerHTML = rows || '<p class="muted">ยังไม่มีข้อมูล</p>';
  }

  function renderDomains(data) {
    byId('dashboardDomains').innerHTML = data.domainRows.map(row => `
      <div class="domain-performance-row">
        <div class="domain-performance-head">
          <div><strong>Domain ${row.domain}</strong><span>${escapeHtml(row.name)}</span></div>
          <div class="domain-score"><strong>${row.checked ? `${row.pct}%` : '—'}</strong><span class="dashboard-rating ${row.rating.className}">${row.rating.label}</span></div>
        </div>
        <div class="dashboard-track"><div class="dashboard-fill" style="width:${row.checked ? row.pct : 0}%"></div></div>
        <div class="domain-performance-meta">ถูก ${row.correct}/${row.checked} · ผิด ${row.wrong} · 🟡 ${row.flagged}</div>
      </div>`).join('');
  }

  function renderStrengths(data) {
    const withData = data.domainRows.filter(row => row.checked > 0);
    const strongest = [...withData].sort((a, b) => b.pct - a.pct || b.checked - a.checked).slice(0, 2);
    const weakest = [...withData].sort((a, b) => a.pct - b.pct || b.checked - a.checked).slice(0, 2);

    const domainList = rows => rows.length
      ? rows.map(row => `<li><strong>Domain ${row.domain}</strong> — ${escapeHtml(row.name)} <span>${row.pct}% (${row.correct}/${row.checked})</span></li>`).join('')
      : '<li>ยังไม่มีข้อมูลละเอียดพอ</li>';

    byId('dashboardStrengths').innerHTML = `
      <div class="insight-card strength-card">
        <h3>จุดเด่นตอนนี้</h3>
        <ul>${domainList(strongest)}</ul>
      </div>
      <div class="insight-card weakness-card">
        <h3>ควรทบทวนก่อน</h3>
        <ul>${domainList(weakest)}</ul>
      </div>`;
  }

  function reviewedGroupHtml(items, emptyText) {
    const groups = groupReviewedItems(items);
    if (!groups.length) return `<div class="dashboard-empty">${escapeHtml(emptyText)}</div>`;
    return groups.map(group => `
      <div class="reviewed-gap-item">
        <div class="reviewed-gap-main">
          <strong>${escapeHtml(group.topic)}</strong>
          <span>${escapeHtml(group.refs.join(' · '))}</span>
        </div>
        ${group.refs.length > 1 ? `<span class="reviewed-count">${group.refs.length} ครั้ง</span>` : ''}
        ${group.notes.length ? `<small>${escapeHtml(group.notes.join(' / '))}</small>` : ''}
      </div>`).join('');
  }

  function renderReviewedInsights(data) {
    const root = byId('dashboardReviewInsights');
    if (!root) return;

    root.innerHTML = `
      <div class="reviewed-gap-grid">
        <section class="reviewed-gap-column concept-column">
          <div class="reviewed-gap-head">
            <div><strong>🔴 Concept / Recall</strong><span>ผิดเพราะ concept ยังดึงออกมาใช้ไม่ได้</span></div>
            <b>${data.reviewed.concept.length}</b>
          </div>
          <div class="reviewed-gap-list">${reviewedGroupHtml(data.reviewed.concept, 'ยังไม่มี concept gap ที่บันทึกไว้')}</div>
        </section>
        <section class="reviewed-gap-column confidence-column">
          <div class="reviewed-gap-head">
            <div><strong>🟡 Confidence</strong><span>ตอบถูก แต่ยังไม่มั่นใจ</span></div>
            <b>${data.reviewed.confidence.length}</b>
          </div>
          <div class="reviewed-gap-list">${reviewedGroupHtml(data.reviewed.confidence, 'ยังไม่มี confidence gap ที่บันทึกไว้')}</div>
        </section>
        <section class="reviewed-gap-column language-column">
          <div class="reviewed-gap-head">
            <div><strong>📘 Language</strong><span>ภาษาอังกฤษทำให้เข้าใจ scenario หรือ choice ไม่พอ</span></div>
            <b>${data.reviewed.language.length}</b>
          </div>
          <div class="reviewed-gap-list">${reviewedGroupHtml(data.reviewed.language, 'ยังไม่มี language gap ที่บันทึกไว้')}</div>
        </section>
        <section class="reviewed-gap-column clue-column">
          <div class="reviewed-gap-head">
            <div><strong>🧩 Clue / Distractor</strong><span>พลาดจุดตัดสินของโจทย์หรือแยกตัวลวงไม่ขาด</span></div>
            <b>${data.reviewed.clue.length}</b>
          </div>
          <div class="reviewed-gap-list">${reviewedGroupHtml(data.reviewed.clue, 'ยังไม่มี clue/distractor gap ที่บันทึกไว้')}</div>
        </section>
      </div>
      <p class="dashboard-note reviewed-note">ส่วนนี้มาจาก post-review metadata หลังถามเหตุผลผู้เรียน ไม่ได้อนุมานจากคะแนนหรือ raw flag อัตโนมัติ จึงยังคงอยู่แม้ browser ไม่มีรายละเอียด attempt เก่า</p>`;
  }

  function renderCoverage(data) {
    const unfinished = data.setRows.filter(row => !row.complete);
    const detailedPct = data.totalQuestions
      ? Math.round(data.detailedChecked / data.totalQuestions * 100)
      : 0;

    byId('dashboardCoverage').innerHTML = `
      <div class="coverage-grid">
        <div><strong>${data.detailedChecked}/${data.totalQuestions}</strong><span>ข้อที่มีคำตอบละเอียดใน browser</span></div>
        <div><strong>${detailedPct}%</strong><span>Detailed coverage</span></div>
        <div><strong>${data.historicalOnlySets}</strong><span>ชุดที่อาศัยคะแนนเดิมบางส่วน</span></div>
      </div>
      <p class="dashboard-note">กราฟ Domain และรายการข้อผิดใช้เฉพาะ attempt ที่ยังมีรายละเอียดคำตอบใน localStorage; คะแนนเดิมที่มีแค่ score รวมยังใช้ในกราฟราย Set/Overall ได้ แต่แยก Domain ไม่ได้</p>
      ${unfinished.length ? `<div class="unfinished-list"><strong>Set ที่ยังไม่มีผลครบ:</strong> ${unfinished.map(row => escapeHtml(row.set.title)).join(', ')}</div>` : '<div class="unfinished-list all-done">ครบทุก Set ที่มีผลแล้ว</div>'}`;
  }

  function renderReviewQueue(data) {
    const root = byId('dashboardReviewQueue');
    if (!data.reviewItems.length) {
      root.innerHTML = '<div class="dashboard-empty">ยังไม่มีข้อผิดหรือข้อ Flag 🟡 ในข้อมูลละเอียด</div>';
      return;
    }

    const grouped = {};
    data.reviewItems.forEach(item => {
      const key = String(item.domain);
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    });

    root.innerHTML = Object.keys(grouped).sort().map(key => {
      const items = grouped[key];
      const wrongCount = items.filter(item => item.wrong).length;
      const flagCount = items.filter(item => item.flagged).length;
      return `
        <details class="review-domain" ${wrongCount ? 'open' : ''}>
          <summary>
            <span><strong>Domain ${key}</strong> · ${escapeHtml(items[0].domainName)}</span>
            <span>❌ ${wrongCount} · 🟡 ${flagCount}</span>
          </summary>
          <div class="review-domain-body">
            ${items.map(item => `
              <button class="review-item" type="button" data-set-id="${escapeHtml(item.setId)}" data-question-id="${item.questionId}">
                <span class="review-item-tags">${item.wrong ? '<b class="tag-wrong">❌ Wrong</b>' : ''}${item.flagged ? '<b class="tag-flag">🟡 Flag</b>' : ''}</span>
                <strong>${escapeHtml(item.setTitle)} · Q${item.questionId}</strong>
                <span>${escapeHtml(item.question)}</span>
              </button>`).join('')}
          </div>
        </details>`;
    }).join('');

    root.querySelectorAll('.review-item').forEach(button => {
      button.addEventListener('click', () => {
        const setId = button.dataset.setId;
        const questionId = Number(button.dataset.questionId);
        const targetSet = sets.find(set => set.id === setId);
        if (!targetSet || typeof window.openSet !== 'function') return;
        byId('dashboardView').classList.add('hidden');
        window.openSet(setId);
        const index = targetSet.questions.findIndex(question => question.id === questionId);
        if (index >= 0) {
          try {
            currentIndex = index;
            if (typeof window.renderQuiz === 'function') window.renderQuiz();
          } catch {}
        }
      });
    });
  }

  function renderDashboard() {
    if (typeof window.saveState === 'function') {
      try { window.saveState(); } catch {}
    }
    const data = collectDashboardData();
    renderPrestudyDiagnostic();
    renderOverview(data);
    renderSetPerformance(data);
    renderDomains(data);
    renderStrengths(data);
    renderReviewedInsights(data);
    renderCoverage(data);
    renderReviewQueue(data);
  }

  function openDashboard() {
    ['homeView', 'quizView', 'summaryView'].forEach(id => byId(id)?.classList.add('hidden'));
    byId('dashboardView').classList.remove('hidden');
    renderDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const dashboardBtn = byId('dashboardBtn');
  if (dashboardBtn) dashboardBtn.addEventListener('click', openDashboard);

  const homeBtn = byId('homeBtn');
  if (homeBtn) homeBtn.addEventListener('click', () => byId('dashboardView')?.classList.add('hidden'));

  window.renderStudyDashboard = renderDashboard;
})();
