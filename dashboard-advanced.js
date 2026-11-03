(() => {
  const REVIEW = window.REVIEW_INSIGHTS || {};
  const STORAGE_PREFIX = 'clf-c02-local-mock:v1:';
  let reviewedGapOrigin = null;

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    })[char]);
  }

  function ensurePanel(id, title, subtitle) {
    let panel = document.getElementById(id);
    if (panel) return panel;

    const anchor = document.getElementById('dashboardReviewInsights')?.closest('.dashboard-panel') ||
      document.getElementById('dashboardCoverage')?.closest('.dashboard-panel');
    if (!anchor) return null;

    const advancedPanels = [...document.querySelectorAll('.dashboard-panel[data-advanced="true"]')];
    const insertAfter = advancedPanels.length ? advancedPanels[advancedPanels.length - 1] : anchor;

    const section = document.createElement('section');
    section.className = 'dashboard-panel';
    section.dataset.advanced = 'true';
    section.innerHTML = `
      <div class="dashboard-panel-head">
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p class="muted">${escapeHtml(subtitle)}</p>
        </div>
      </div>
      <div id="${id}"></div>`;
    insertAfter.insertAdjacentElement('afterend', section);
    return section.querySelector(`#${id}`);
  }

  function statusLabel(status) {
    return ({
      repeated: '🔴 Repeated weakness',
      unstable: '🔴 Unstable',
      improving: '🟠 Improving',
      open: '🟠 Open gap',
      confidence: '🟡 Confidence gap',
      recovered: '🟢 Recovered'
    })[status] || status;
  }

  function renderTrend() {
    const root = ensurePanel(
      'dashboardTrendAdvanced',
      'Reviewed Set Trend',
      'ใช้ผลหลัง review ที่บันทึกไว้เป็น metadata; raw flags ไม่แทน diagnosis หลังคุย'
    );
    if (!root) return;
    const history = REVIEW.history || [];
    root.innerHTML = `
      <div class="advanced-dashboard-grid">
        <div class="advanced-card">
          <h4>Score trend</h4>
          <div class="study-trend">
            ${history.map(item => `
              <div class="study-trend-item">
                <strong>${item.percent}%</strong>
                <div class="study-trend-bar-wrap"><div class="study-trend-bar" style="height:${item.percent}%"></div></div>
                <span>${escapeHtml(item.label)}</span>
              </div>`).join('')}
          </div>
        </div>
        <div class="advanced-card">
          <h4>Concept / Recall</h4>
          <strong class="big">${history.reduce((sum, item) => sum + (item.concept || 0), 0)}</strong>
          <p>จำนวน occurrence ที่ review แล้วว่าเป็น knowledge/recall gap</p>
        </div>
        <div class="advanced-card">
          <h4>English trend</h4>
          <strong class="big">${(REVIEW.languageTrend || []).reduce((sum, item) => sum + item.count, 0)}</strong>
          <p>${(REVIEW.languageTrend || []).map(item => `${item.label}: ${item.count}`).join(' · ') || 'ยังไม่มีข้อมูล'}</p>
        </div>
      </div>`;
  }

  function renderTopicHealth() {
    const root = ensurePanel(
      'dashboardTopicHealth',
      'Topic Health',
      'แยก Repeated / Unstable / Improving / Recovered เพื่อไม่ให้หัวข้อที่ดีขึ้นแล้วยังแดงค้าง'
    );
    if (!root) return;

    const rows = [...(REVIEW.topicStatus || [])].sort((a, b) => {
      const order = { must: 0, review: 1, stable: 2 };
      return (order[a.priority] ?? 9) - (order[b.priority] ?? 9);
    });

    root.innerHTML = `<div class="topic-health-list">${rows.map(item => `
      <div class="topic-health-row">
        <strong>${escapeHtml(item.topic)}</strong>
        <span class="topic-badge ${escapeHtml(item.status)}">${escapeHtml(statusLabel(item.status))}</span>
        <small>${escapeHtml(item.note || '')}</small>
      </div>`).join('')}</div>`;
  }

  function renderPriorities() {
    const root = ensurePanel(
      'dashboardPreExamPriority',
      'Pre-exam Priority',
      'ลำดับอ่านจากผลจริง: ต้องทวนก่อน → ถ้ามีเวลา → ตอนนี้ถือว่า stable/recovered'
    );
    if (!root) return;

    const groups = {
      must: (REVIEW.topicStatus || []).filter(item => item.priority === 'must'),
      review: (REVIEW.topicStatus || []).filter(item => item.priority === 'review'),
      stable: (REVIEW.topicStatus || []).filter(item => item.priority === 'stable')
    };

    const list = items => items.length
      ? `<ul>${items.map(item => `<li>${escapeHtml(item.topic)}</li>`).join('')}</ul>`
      : '<p class="muted">ไม่มี</p>';

    root.innerHTML = `
      <div class="priority-columns">
        <div class="priority-box must"><h4>🔴 Must review</h4>${list(groups.must)}</div>
        <div class="priority-box review"><h4>🟠 Review if time</h4>${list(groups.review)}</div>
        <div class="priority-box stable"><h4>🟢 Stable / Recovered</h4>${list(groups.stable)}</div>
      </div>`;
  }

  function liveEnglishFlagCount() {
    let count = 0;
    for (const set of window.QUIZ_SETS || []) {
      try {
        const state = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}${set.id}`) || '{}');
        count += Object.values(state.englishUnclear || {}).filter(Boolean).length;
      } catch {}
    }
    return count;
  }

  function renderLanguage() {
    const root = ensurePanel(
      'dashboardLanguageAdvanced',
      'English Comprehension',
      'แยก language gap ออกจาก concept gap และเก็บศัพท์ที่เคยทำให้ตีความโจทย์สะดุด'
    );
    if (!root) return;

    const trend = REVIEW.languageTrend || [];
    const improving = trend.length >= 2 && trend[trend.length - 1].count < trend[0].count;
    const live = liveEnglishFlagCount();

    root.innerHTML = `
      <div class="advanced-dashboard-grid">
        <div class="advanced-card">
          <h4>Trend</h4>
          <strong class="big">${improving ? 'Improving' : 'Tracking'}</strong>
          <p>${trend.map(item => `${item.label}: ${item.count}`).join(' → ')}</p>
        </div>
        <div class="advanced-card">
          <h4>Manual review</h4>
          <strong class="big">${trend.reduce((sum, item) => sum + item.count, 0)}</strong>
          <p>language-gap occurrences ที่ยืนยันจาก post-review evidence</p>
        </div>
        <div class="advanced-card">
          <h4>Live 📘 flags</h4>
          <strong class="big">${live}</strong>
          <p>ข้อที่ติ๊ก “ไม่เข้าใจโจทย์ภาษาอังกฤษ” ใน progress ปัจจุบัน</p>
        </div>
      </div>
      <div class="language-chips">${(REVIEW.languageFocus || []).map(word => `<span class="language-chip">${escapeHtml(word)}</span>`).join('')}</div>
      <div class="live-language-note">📘 ปุ่มภาษาอังกฤษจะไม่กระทบคะแนน และจะถูกแนบไปกับ Copy for review เพื่อแยก Language gap ออกจาก Concept/Confidence โดยตรง</div>`;
  }

  function fallbackReviewDetails(reviewSet) {
    const grouped = {};
    (reviewSet?.items || []).forEach(item => {
      const id = Number(item.questionId);
      if (!grouped[id]) {
        grouped[id] = {
          questionId: id,
          result: /^Wrong\b/i.test(item.note || '') ? 'Wrong' : /^Correct\b/i.test(item.note || '') ? 'Correct' : 'Reviewed',
          topic: item.topic || 'Reviewed question',
          rawFlags: [],
          reviewedCauses: [],
          notes: []
        };
      }
      const row = grouped[id];
      (item.rawFlags || []).forEach(flag => {
        if (!row.rawFlags.includes(flag)) row.rawFlags.push(flag);
      });
      const causes = item.reviewedCauses?.length ? item.reviewedCauses : [item.type];
      causes.filter(Boolean).forEach(cause => {
        if (!row.reviewedCauses.includes(cause)) row.reviewedCauses.push(cause);
      });
      if (item.note && !row.notes.includes(item.note)) row.notes.push(item.note);
    });
    return Object.values(grouped).sort((a, b) => a.questionId - b.questionId);
  }

  function reviewCauseLabel(cause) {
    return ({
      concept: 'Concept / Recall',
      confidence: 'Confidence',
      language: 'Language',
      clue: 'Clue / Distractor'
    })[cause] || cause;
  }

  function reviewDetailRows(reviewSet) {
    if (Array.isArray(reviewSet?.details) && reviewSet.details.length) {
      return [...reviewSet.details].sort((a, b) => Number(a.questionId) - Number(b.questionId));
    }
    return fallbackReviewDetails(reviewSet);
  }

  function quizQuestionFor(setId, questionId) {
    const set = (window.QUIZ_SETS || []).find(item => item.id === setId);
    return set?.questions?.find(question => Number(question.id) === Number(questionId)) || null;
  }

  function renderReviewSetDetail(setId) {
    const root = document.getElementById('dashboardReviewDetail');
    if (!root) return;
  
    const reviewSet = REVIEW.sets?.[setId];
    const history = (REVIEW.history || []).find(item => item.setId === setId);
    if (!reviewSet) {
      root.innerHTML = '<div class="dashboard-empty">ชุดนี้มีคะแนน review history แต่ยังไม่มีรายละเอียดรายข้อที่บันทึกไว้</div>';
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
  
    const rows = reviewDetailRows(reviewSet);
    const score = history ? `${history.score}/${history.total} (${history.percent}%)` : '';
    root.innerHTML = `
      <div class="review-set-detail-head">
        <div>
          <span class="review-set-detail-kicker">Review Detail</span>
          <h4>${escapeHtml(reviewSet.title || history?.label || setId)}</h4>
          <p>${score ? `Score ${score} · ` : ''}${escapeHtml(reviewSet.note || '')}</p>
        </div>
        <button class="ghost review-detail-close" type="button">ซ่อนรายละเอียด</button>
      </div>
      <div class="review-set-question-list">
        ${rows.map(row => {
          const causes = (row.reviewedCauses || []).map(reviewCauseLabel);
          const rawFlags = row.rawFlags || [];
          const notes = row.notes || [];
          const quizQuestion = quizQuestionFor(setId, row.questionId);
          const questionText = row.question || quizQuestion?.question || '';
          const questionTh = row.questionTh || quizQuestion?.questionTh || '';
          const resultClass = String(row.result || '').toLowerCase() === 'wrong' ? 'wrong' : 'correct';
          return `
            <details class="review-history-question">
              <summary>
                <div class="review-history-question-title">
                  <span class="review-result ${resultClass}">${escapeHtml(row.result || 'Reviewed')}</span>
                  <strong>Q${row.questionId} · ${escapeHtml(row.topic || '')}</strong>
                </div>
                <div class="review-cause-chips">
                  ${causes.map(cause => `<span>${escapeHtml(cause)}</span>`).join('')}
                </div>
              </summary>
              <div class="review-history-question-body">
                ${questionText ? `<div class="review-detail-wide review-question-text"><b>โจทย์ถามอะไร</b><p>${escapeHtml(questionText)}</p>${questionTh ? `<small>${escapeHtml(questionTh)}</small>` : ''}</div>` : ''}
                ${row.selected ? `<div><b>Selected</b><p>${escapeHtml(row.selected)}</p></div>` : ''}
                ${row.correct ? `<div><b>Correct</b><p>${escapeHtml(row.correct)}</p></div>` : ''}
                ${rawFlags.length ? `<div><b>Raw flags</b><p>${escapeHtml(rawFlags.join(' · '))}</p></div>` : ''}
                ${row.userReasoning ? `<div class="review-detail-wide"><b>ตอนทำคิดอะไร</b><p>${escapeHtml(row.userReasoning)}</p></div>` : ''}
                ${row.diagnosis ? `<div class="review-detail-wide"><b>Final diagnosis</b><p>${escapeHtml(row.diagnosis)}</p></div>` : ''}
                ${row.memoryCue ? `<div class="review-detail-wide"><b>จำสั้น ๆ</b><p>${escapeHtml(row.memoryCue)}</p></div>` : ''}
                ${notes.length ? `<div class="review-detail-wide"><b>Review notes</b><p>${escapeHtml(notes.join(' / '))}</p></div>` : ''}
              </div>
            </details>`;
        }).join('') || '<div class="dashboard-empty">ยังไม่มีรายละเอียดรายข้อ</div>'}
      </div>`;
  
    root.querySelector('.review-detail-close')?.addEventListener('click', () => {
      root.innerHTML = '<div class="dashboard-empty review-history-hint">เลือก “ดู Review” จากตารางด้านบนเพื่อเปิดรายละเอียดราย Set</div>';
    });
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderHistory() {
    const root = ensurePanel(
      'dashboardReviewHistory',
      'Review History',
      'กด “ดู Review” เพื่อเปิดเหตุผลหลังรีวิวรายข้อของแต่ละ Set'
    );
    if (!root) return;
  
    const history = REVIEW.history || [];
    root.innerHTML = `
      <div class="review-history-table-wrap">
        <table class="review-history-table">
          <thead><tr><th>Source</th><th>Score</th><th>Concept</th><th>Confidence</th><th>Language</th><th>Clue</th><th></th></tr></thead>
          <tbody>${history.map(item => {
            const hasReview = !!REVIEW.sets?.[item.setId];
            return `
              <tr>
                <td>${escapeHtml(item.label)}</td>
                <td>${item.score}/${item.total} (${item.percent}%)</td>
                <td>${item.concept}</td>
                <td>${item.confidence}</td>
                <td>${item.language}</td>
                <td>${item.clue || 0}</td>
                <td>${hasReview ? `<button class="review-history-open" type="button" data-review-set-id="${escapeHtml(item.setId)}">ดู Review</button>` : '<span class="muted">—</span>'}</td>
              </tr>`;
          }).join('')}</tbody>
        </table>
      </div>
      <div id="dashboardReviewDetail">
        <div class="dashboard-empty review-history-hint">เลือก “ดู Review” จากตารางด้านบนเพื่อเปิดรายละเอียดราย Set</div>
      </div>`;
  
    root.querySelectorAll('.review-history-open').forEach(button => {
      button.addEventListener('click', () => renderReviewSetDetail(button.dataset.reviewSetId));
    });
  }
  function reviewedGroups(type) {
    const grouped = {};
    Object.entries(REVIEW.sets || {}).forEach(([setId, reviewSet]) => {
      (reviewSet.items || []).forEach(item => {
        if (item.type !== type) return;
        const key = item.key || `${setId}:${item.questionId}`;
        if (!grouped[key]) {
          grouped[key] = { key, topic: item.topic || key, refs: [] };
        }
        const label = `${String(reviewSet.title || setId).replace('Local Mock ', '')} Q${item.questionId}`;
        const refKey = `${setId}:${item.questionId}`;
        if (!grouped[key].refs.some(ref => ref.refKey === refKey)) {
          grouped[key].refs.push({ refKey, label, setId, questionId: Number(item.questionId) });
        }
      });
    });
    return Object.values(grouped).sort((a, b) => b.refs.length - a.refs.length || a.topic.localeCompare(b.topic));
  }

  function injectReviewedGapStyles() {
    if (document.getElementById('reviewedGapLinkStyles')) return;
    const style = document.createElement('style');
    style.id = 'reviewedGapLinkStyles';
    style.textContent = `
      .reviewed-gap-ref-list{display:flex!important;flex-wrap:wrap;align-items:center;gap:2px 4px}
      .reviewed-gap-ref{appearance:none;border:0;background:transparent;padding:0;color:var(--accent,#2563eb);font:inherit;line-height:inherit;cursor:pointer;text-decoration:underline;text-decoration-style:dotted;text-underline-offset:2px}
      .reviewed-gap-ref:hover{color:var(--accent,#2563eb);text-decoration-style:solid}
      .reviewed-gap-ref:focus-visible{outline:2px solid var(--accent,#2563eb);outline-offset:2px;border-radius:3px}
      .reviewed-gap-separator{color:var(--muted,#6b7280)}
      .reviewed-gap-ref.return-highlight{border-radius:4px;box-shadow:0 0 0 3px rgba(37,99,235,.22);background:rgba(37,99,235,.1)}
    `;
    document.head.appendChild(style);
  }

  function ensureReviewedGapBackButton() {
    const actions = document.querySelector('#quizView .quiz-toolbar .toolbar-actions');
    if (!actions) return;
    let button = document.getElementById('reviewedGapBackBtn');
    if (!button) {
      button = document.createElement('button');
      button.id = 'reviewedGapBackBtn';
      button.type = 'button';
      button.className = 'ghost hidden';
      button.textContent = '← กลับ Reviewed Gaps';
      button.addEventListener('click', restoreReviewedGap);
      actions.prepend(button);
    }
    const sameSet = reviewedGapOrigin && activeSet && reviewedGapOrigin.setId === activeSet.id;
    button.classList.toggle('hidden', !sameSet);
  }

  function openReviewedGapQuestion(button) {
    const setId = button.dataset.setId;
    const questionId = Number(button.dataset.questionId);
    const targetSet = (window.QUIZ_SETS || []).find(set => set.id === setId);
    if (!targetSet || typeof window.openSet !== 'function') return;

    const list = button.closest('.reviewed-gap-list');
    reviewedGapOrigin = {
      scrollY: window.scrollY,
      listScrollTop: list ? list.scrollTop : 0,
      type: button.dataset.gapType,
      setId,
      questionId,
      refId: button.dataset.reviewRefId
    };

    document.getElementById('dashboardView')?.classList.add('hidden');
    window.openSet(setId);
    const index = targetSet.questions.findIndex(question => Number(question.id) === questionId);
    if (index >= 0) {
      currentIndex = index;
      if (typeof window.renderQuiz === 'function') window.renderQuiz();
    }
  }

  function restoreReviewedGap() {
    if (!reviewedGapOrigin) return;
    try { saveState(); } catch {}

    document.getElementById('homeView')?.classList.add('hidden');
    document.getElementById('quizView')?.classList.add('hidden');
    document.getElementById('summaryView')?.classList.add('hidden');
    document.getElementById('dashboardView')?.classList.remove('hidden');
    if (typeof window.renderStudyDashboard === 'function') window.renderStudyDashboard();

    const origin = reviewedGapOrigin;
    reviewedGapOrigin = null;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const list = document.querySelector(`.${origin.type}-column .reviewed-gap-list`);
        if (list) list.scrollTop = origin.listScrollTop;
        window.scrollTo({ top: origin.scrollY, behavior: 'auto' });
        const selector = `[data-review-ref-id="${CSS.escape(origin.refId || '')}"]`;
        const item = document.querySelector(selector);
        if (item) {
          item.classList.add('return-highlight');
          setTimeout(() => item.classList.remove('return-highlight'), 1800);
        }
        ensureReviewedGapBackButton();
      });
    });
  }

  function enhanceReviewedGapLinks() {
    injectReviewedGapStyles();
    const configs = [
      { type: 'concept', selector: '.concept-column' },
      { type: 'confidence', selector: '.confidence-column' },
      { type: 'language', selector: '.language-column' },
      { type: 'clue', selector: '.clue-column' }
    ];

    configs.forEach(({ type, selector }) => {
      const groups = reviewedGroups(type);
      const items = [...document.querySelectorAll(`${selector} .reviewed-gap-item`)];
      items.forEach((item, groupIndex) => {
        const group = groups[groupIndex];
        const line = item.querySelector('.reviewed-gap-main > span');
        if (!group || !line) return;
        line.classList.add('reviewed-gap-ref-list');
        line.innerHTML = group.refs.map((ref, refIndex) => {
          const refId = `${type}|${group.key}|${ref.setId}|${ref.questionId}|${refIndex}`;
          const separator = refIndex ? '<span class="reviewed-gap-separator">·</span>' : '';
          return `${separator}<button class="reviewed-gap-ref" type="button" data-gap-type="${escapeHtml(type)}" data-set-id="${escapeHtml(ref.setId)}" data-question-id="${ref.questionId}" data-review-ref-id="${escapeHtml(refId)}" title="เปิด ${escapeHtml(ref.label)}">${escapeHtml(ref.label)}</button>`;
        }).join('');
      });
    });

    document.querySelectorAll('.reviewed-gap-ref').forEach(button => {
      if (button.dataset.bound === '1') return;
      button.dataset.bound = '1';
      button.addEventListener('click', () => openReviewedGapQuestion(button));
    });
  }

  function renderAdvancedDashboard() {
    renderTrend();
    renderTopicHealth();
    renderPriorities();
    renderLanguage();
    renderHistory();
    enhanceReviewedGapLinks();
  }

  const dashboardBtn = document.getElementById('dashboardBtn');
  dashboardBtn?.addEventListener('click', () => setTimeout(renderAdvancedDashboard, 0));

  const originalRender = window.renderStudyDashboard;
  if (typeof originalRender === 'function') {
    window.renderStudyDashboard = function () {
      originalRender();
      renderAdvancedDashboard();
    };
  }

  const previousRenderQuiz = renderQuiz;
  renderQuiz = function () {
    previousRenderQuiz();
    ensureReviewedGapBackButton();
  };

  document.addEventListener('click', event => {
    if (event.target.closest?.('#homeBtn')) reviewedGapOrigin = null;
  }, true);

  injectReviewedGapStyles();
  ensureReviewedGapBackButton();
  window.renderAdvancedStudyDashboard = renderAdvancedDashboard;
})();
