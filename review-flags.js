(() => {
  const CLUE_FIELD = 'clueGap';
  const CONCEPT_FIELD = 'conceptGap';

  const flagConfig = [
    {
      field: CLUE_FIELD,
      checkboxId: 'clueGapCheck',
      labelId: 'clueGapLabel',
      className: 'clue-gap-flag',
      icon: '🧩',
      title: 'รู้ concept แต่จับ clue / แยกตัวเลือกไม่ออก',
      help: 'ติ๊กเมื่อพอรู้เรื่อง แต่ยังจับไม่ได้ว่าโจทย์ชี้ไปที่ไหน หรือแยก close distractor / ก่อน-หลังไม่ออก',
      copyLabel: 'CLUE / DISTRACTOR GAP'
    },
    {
      field: CONCEPT_FIELD,
      checkboxId: 'conceptGapCheck',
      labelId: 'conceptGapLabel',
      className: 'concept-gap-flag',
      icon: '🧠',
      title: 'จำ concept / service ไม่ได้',
      help: 'ติ๊กเมื่อแปลโจทย์ได้ แต่จำไม่ได้จริง ๆ ว่า concept, service หรือหน้าที่นั้นคืออะไร',
      copyLabel: 'CONCEPT / RECALL GAP'
    }
  ];

  function ensureMap(st, field) {
    if (!st[field] || typeof st[field] !== 'object' || Array.isArray(st[field])) st[field] = {};
    return st[field];
  }

  function marked(q, field, st = state()) {
    return !!(st && st[field] && st[field][q.id]);
  }

  function setMarked(field, value) {
    if (!activeSet) return;
    const q = activeSet.questions[currentIndex];
    const st = state();
    ensureMap(st, field)[q.id] = !!value;
    if (!value) delete st[field][q.id];
    renderQuestionGrid();
    saveState();
  }

  function injectStyles() {
    if (document.getElementById('reviewFlagV2Styles')) return;
    const style = document.createElement('style');
    style.id = 'reviewFlagV2Styles';
    style.textContent = `
      .review-flag-row.review-flag-grid-v2{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;align-items:stretch}
      .review-flag-row.review-flag-grid-v2 .review-flag{margin:0;min-width:0;height:100%;padding:9px 10px}
      .review-flag-row.review-flag-grid-v2 .review-flag strong{font-size:.92rem;line-height:1.2}
      .review-flag-row.review-flag-grid-v2 .review-flag small{font-size:.76rem;line-height:1.25}
      .review-flag.clue-gap-flag.active{background:rgba(124,58,237,.08);border-color:rgba(124,58,237,.42)}
      .review-flag.concept-gap-flag.active{background:rgba(220,38,38,.07);border-color:rgba(220,38,38,.4)}
      .review-flag.english-review-flag.active{background:rgba(14,165,233,.08);border-color:rgba(14,165,233,.42)}
      .qnav.clue-gap{box-shadow:inset 0 -3px 0 rgba(124,58,237,.72)}
      .qnav.concept-gap{box-shadow:inset 0 3px 0 rgba(220,38,38,.72)}
      .qnav.english-unclear{outline:2px solid rgba(14,165,233,.45)}
      .status-clue{background:rgba(124,58,237,.12)}
      .status-concept-gap{background:rgba(220,38,38,.12)}
      .status-english{background:rgba(14,165,233,.12)}
      @media(max-width:1050px){.review-flag-row.review-flag-grid-v2{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:560px){.review-flag-row.review-flag-grid-v2{gap:6px}.review-flag-row.review-flag-grid-v2 .review-flag{padding:8px}}
    `;
    document.head.appendChild(style);
  }

  function updateExistingLabels() {
    const yellow = document.getElementById('reviewFlagLabel');
    if (yellow) {
      const strong = yellow.querySelector('strong');
      const small = yellow.querySelector('small');
      if (strong) strong.textContent = '🟡 ไม่มั่นใจ / ขออธิบายเพิ่ม';
      if (small) small.textContent = 'ติ๊กเมื่อคิดว่าน่าจะตอบได้ แต่ confidence ยังไม่พอ หรืออยากให้ทวน concept เพิ่ม';
    }
    const english = document.getElementById('englishFlagLabel');
    if (english) {
      const strong = english.querySelector('strong');
      const small = english.querySelector('small');
      if (strong) strong.textContent = '📘 ไม่เข้าใจโจทย์ภาษาอังกฤษ';
      if (small) small.textContent = 'ติ๊กเมื่อศัพท์หรือโครงสร้างประโยคทำให้ตีความโจทย์ไม่ออก แม้จะรู้ concept อยู่ก็ตาม';
    }
  }

  function ensureControls() {
    injectStyles();
    const row = document.querySelector('.review-flag-row');
    if (!row) return;
    row.classList.add('review-flag-grid-v2');
    updateExistingLabels();
    flagConfig.forEach(config => {
      if (document.getElementById(config.checkboxId)) return;
      const label = document.createElement('label');
      label.id = config.labelId;
      label.className = `review-flag ${config.className}`;
      label.htmlFor = config.checkboxId;
      label.innerHTML = `
        <input id="${config.checkboxId}" type="checkbox">
        <span><strong>${config.icon} ${config.title}</strong><small>${config.help}</small></span>`;
      row.appendChild(label);
      label.querySelector('input').addEventListener('change', event => setMarked(config.field, event.target.checked));
    });
  }

  function syncControls() {
    ensureControls();
    if (!activeSet) return;
    const q = activeSet.questions[currentIndex];
    const st = state();
    flagConfig.forEach(config => {
      const checkbox = document.getElementById(config.checkboxId);
      const label = document.getElementById(config.labelId);
      const value = marked(q, config.field, st);
      if (checkbox) checkbox.checked = value;
      label?.classList.toggle('active', value);
    });
  }

  const previousRenderQuiz = renderQuiz;
  renderQuiz = function () {
    previousRenderQuiz();
    syncControls();
  };

  const previousRenderQuestionGrid = renderQuestionGrid;
  renderQuestionGrid = function () {
    previousRenderQuestionGrid();
    if (!activeSet) return;
    const st = state();
    const buttons = [...document.querySelectorAll('#questionGrid .qnav')];
    activeSet.questions.forEach((q, index) => {
      const button = buttons[index];
      if (!button) return;
      const clue = marked(q, CLUE_FIELD, st);
      const concept = marked(q, CONCEPT_FIELD, st);
      button.classList.toggle('clue-gap', clue);
      button.classList.toggle('concept-gap', concept);
      const extras = [];
      if (clue) extras.push('🧩 clue / distractor gap');
      if (concept) extras.push('🧠 concept / recall gap');
      if (extras.length) button.title = `${button.title ? `${button.title} · ` : ''}${extras.join(' · ')}`;
    });
  };

  const previousRenderSummaryList = renderSummaryList;
  renderSummaryList = function () {
    previousRenderSummaryList();
    if (!activeSet) return;
    const st = state();
    const items = activeSet.questions.map((q, i) => ({
      q, i,
      ok: isCorrect(q, currentAnswer(q, st)),
      flag: needsExplanation(q, st),
      clue: marked(q, CLUE_FIELD, st),
      concept: marked(q, CONCEPT_FIELD, st)
    }));
    const shown = summaryFilter === 'wrong'
      ? items.filter(item => !item.ok)
      : summaryFilter === 'explain'
        ? items.filter(item => item.flag)
        : items;
    const cards = [...document.querySelectorAll('#summaryList .wrong-summary-card')];
    shown.forEach((item, index) => {
      const tags = cards[index]?.querySelector('.summary-card-tags');
      if (!tags) return;
      if (item.clue && !tags.querySelector('.status-clue')) tags.insertAdjacentHTML('beforeend', '<span class="status-pill status-clue">🧩 Clue / distractor gap</span>');
      if (item.concept && !tags.querySelector('.status-concept-gap')) tags.insertAdjacentHTML('beforeend', '<span class="status-pill status-concept-gap">🧠 Concept / recall gap</span>');
    });
  };

  const previousBuildReviewText = buildReviewText;
  buildReviewText = function () {
    const text = previousBuildReviewText();
    if (!activeSet) return text;
    const st = state();
    let currentQ = null;
    const output = [];
    text.split('\n').forEach(line => {
      const match = line.match(/^Q(\d+)\s/);
      if (match) {
        currentQ = activeSet.questions.find(q => Number(q.id) === Number(match[1])) || null;
        if (currentQ && marked(currentQ, CLUE_FIELD, st) && !line.includes('CLUE / DISTRACTOR GAP')) line += ' | 🧩 CLUE / DISTRACTOR GAP';
        if (currentQ && marked(currentQ, CONCEPT_FIELD, st) && !line.includes('CONCEPT / RECALL GAP')) line += ' | 🧠 CONCEPT / RECALL GAP';
      }
      output.push(line);
      if (currentQ && line.startsWith('Question:')) {
        if (marked(currentQ, CLUE_FIELD, st)) output.push('Gap: 🧩 รู้ concept แต่จับ clue / แยกตัวเลือกไม่ออก');
        if (marked(currentQ, CONCEPT_FIELD, st)) output.push('Gap: 🧠 จำ concept / service ไม่ได้');
      }
    });
    return output.join('\n');
  };

  const previousSanitizeImportedState = sanitizeImportedState;
  sanitizeImportedState = function (set, incoming) {
    const out = previousSanitizeImportedState(set, incoming);
    const source = incoming && typeof incoming === 'object' ? incoming : {};
    flagConfig.forEach(config => {
      const raw = source[config.field] && typeof source[config.field] === 'object' ? source[config.field] : {};
      out[config.field] = {};
      set.questions.forEach(q => { if (raw[q.id]) out[config.field][q.id] = true; });
    });
    return out;
  };

  const previousQuestionHasData = questionHasData;
  questionHasData = function (st, q) {
    return previousQuestionHasData(st, q) || flagConfig.some(config => !!(st && st[config.field] && st[config.field][q.id]));
  };

  const previousMergeSetStates = mergeSetStates;
  mergeSetStates = function (set, localState, importedState) {
    const merged = previousMergeSetStates(set, localState, importedState);
    const local = sanitizeImportedState(set, localState);
    const incoming = sanitizeImportedState(set, importedState);
    flagConfig.forEach(config => {
      merged[config.field] = {};
      set.questions.forEach(q => {
        if (local[config.field]?.[q.id] || incoming[config.field]?.[q.id]) merged[config.field][q.id] = true;
      });
    });
    return merged;
  };

  const previousCollectProgressPayload = collectProgressPayload;
  collectProgressPayload = function () {
    const payload = previousCollectProgressPayload();
    payload.features = { ...(payload.features || {}), reviewFlagsV2:true, clueGap:true, conceptGap:true };
    return payload;
  };

  injectStyles();
})();