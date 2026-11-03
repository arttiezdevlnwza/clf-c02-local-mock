(() => {
  const ENGLISH_FIELD = 'englishUnclear';

  function ensureEnglishMap(st) {
    if (!st[ENGLISH_FIELD] || typeof st[ENGLISH_FIELD] !== 'object' || Array.isArray(st[ENGLISH_FIELD])) st[ENGLISH_FIELD] = {};
    return st[ENGLISH_FIELD];
  }

  function englishUnclear(q, st = state()) {
    return !!(st && st[ENGLISH_FIELD] && st[ENGLISH_FIELD][q.id]);
  }

  function setEnglishUnclear(value) {
    if (!activeSet) return;
    const q = activeSet.questions[currentIndex];
    const st = state();
    ensureEnglishMap(st)[q.id] = !!value;
    if (!value) delete st[ENGLISH_FIELD][q.id];
    const label = document.getElementById('englishFlagLabel');
    if (label) label.classList.toggle('active', !!value);
    renderQuestionGrid();
    saveState();
  }

  function ensureEnglishControl() {
    const row = document.querySelector('.review-flag-row');
    if (!row || document.getElementById('englishUnclearCheck')) return;

    const label = document.createElement('label');
    label.id = 'englishFlagLabel';
    label.className = 'review-flag english-review-flag';
    label.htmlFor = 'englishUnclearCheck';
    label.innerHTML = `
      <input id="englishUnclearCheck" type="checkbox">
      <span><strong>📘 ไม่เข้าใจโจทย์ภาษาอังกฤษ</strong><small>ติ๊กเมื่อศัพท์หรือโครงสร้างประโยคทำให้ตีความโจทย์ไม่ออก แม้จะรู้ concept อยู่ก็ตาม</small></span>`;
    row.appendChild(label);
    label.querySelector('input').addEventListener('change', event => setEnglishUnclear(event.target.checked));
  }

  function syncEnglishControl() {
    ensureEnglishControl();
    const checkbox = document.getElementById('englishUnclearCheck');
    const label = document.getElementById('englishFlagLabel');
    if (!checkbox || !activeSet) return;
    const value = englishUnclear(activeSet.questions[currentIndex], state());
    checkbox.checked = value;
    label?.classList.toggle('active', value);
  }

  const originalRenderQuiz = renderQuiz;
  renderQuiz = function () {
    originalRenderQuiz();
    syncEnglishControl();
  };

  const originalRenderQuestionGrid = renderQuestionGrid;
  renderQuestionGrid = function () {
    originalRenderQuestionGrid();
    if (!activeSet) return;
    const st = state();
    const buttons = [...document.querySelectorAll('#questionGrid .qnav')];
    activeSet.questions.forEach((q, index) => {
      const button = buttons[index];
      if (!button) return;
      const marked = englishUnclear(q, st);
      button.classList.toggle('english-unclear', marked);
      if (marked) button.title = `${button.title ? `${button.title} · ` : ''}📘 ไม่เข้าใจโจทย์ภาษาอังกฤษ`;
    });
  };

  const originalRenderSummaryList = renderSummaryList;
  renderSummaryList = function () {
    originalRenderSummaryList();
    if (!activeSet) return;
    const st = state();
    const items = activeSet.questions.map((q, i) => ({
      q, i,
      ok: isCorrect(q, currentAnswer(q, st)),
      flag: needsExplanation(q, st),
      english: englishUnclear(q, st)
    }));
    const shown = summaryFilter === 'wrong'
      ? items.filter(item => !item.ok)
      : summaryFilter === 'explain'
        ? items.filter(item => item.flag)
        : items;
    const cards = [...document.querySelectorAll('#summaryList .wrong-summary-card')];
    shown.forEach((item, index) => {
      if (!item.english) return;
      const tags = cards[index]?.querySelector('.summary-card-tags');
      if (tags && !tags.querySelector('.status-english')) {
        tags.insertAdjacentHTML('beforeend', '<span class="status-pill status-english">📘 English unclear</span>');
      }
    });
  };

  const originalBuildReviewText = buildReviewText;
  buildReviewText = function () {
    const text = originalBuildReviewText();
    if (!activeSet) return text;
    const st = state();
    let currentQ = null;
    const output = [];
    text.split('\n').forEach(line => {
      const match = line.match(/^Q(\d+)\s/);
      if (match) {
        currentQ = activeSet.questions.find(q => Number(q.id) === Number(match[1])) || null;
        if (currentQ && englishUnclear(currentQ, st) && !line.includes('ENGLISH UNCLEAR')) line += ' | 📘 ENGLISH UNCLEAR';
      }
      output.push(line);
      if (currentQ && englishUnclear(currentQ, st) && line.startsWith('Question:')) output.push('Language: 📘 ไม่เข้าใจโจทย์ภาษาอังกฤษ');
    });
    return output.join('\n');
  };

  const originalSanitizeImportedState = sanitizeImportedState;
  sanitizeImportedState = function (set, incoming) {
    const out = originalSanitizeImportedState(set, incoming);
    const source = incoming && typeof incoming === 'object' && incoming[ENGLISH_FIELD] && typeof incoming[ENGLISH_FIELD] === 'object'
      ? incoming[ENGLISH_FIELD] : {};
    out[ENGLISH_FIELD] = {};
    set.questions.forEach(q => { if (source[q.id]) out[ENGLISH_FIELD][q.id] = true; });
    return out;
  };

  const originalQuestionHasData = questionHasData;
  questionHasData = function (st, q) {
    return originalQuestionHasData(st, q) || !!(st && st[ENGLISH_FIELD] && st[ENGLISH_FIELD][q.id]);
  };

  const originalMergeSetStates = mergeSetStates;
  mergeSetStates = function (set, localState, importedState) {
    const merged = originalMergeSetStates(set, localState, importedState);
    const local = sanitizeImportedState(set, localState);
    const incoming = sanitizeImportedState(set, importedState);
    merged[ENGLISH_FIELD] = {};
    set.questions.forEach(q => {
      if (local[ENGLISH_FIELD]?.[q.id] || incoming[ENGLISH_FIELD]?.[q.id]) merged[ENGLISH_FIELD][q.id] = true;
    });
    return merged;
  };

  const originalRenderProgressToolStatus = renderProgressToolStatus;
  renderProgressToolStatus = function () {
    originalRenderProgressToolStatus();
    const el = document.getElementById('progressToolStatus');
    if (!el) return;
    let count = 0;
    sets.forEach(set => {
      const stored = storedStateForSet(set);
      if (!stored || !stored[ENGLISH_FIELD]) return;
      count += Object.values(stored[ENGLISH_FIELD]).filter(Boolean).length;
    });
    if (count) el.textContent += ` · 📘 ${count} ข้อ`;
  };

  const originalCollectProgressPayload = collectProgressPayload;
  collectProgressPayload = function () {
    const payload = originalCollectProgressPayload();
    payload.features = { ...(payload.features || {}), englishUnclear: true };
    return payload;
  };
})();