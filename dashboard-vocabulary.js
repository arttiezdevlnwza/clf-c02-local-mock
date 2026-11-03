(() => {
  const STORAGE_PREFIX = 'clf-c02-local-mock:v1:';
  const DEFAULT_MEANINGS = {
    agility:'ความคล่องตัวในการสร้าง/ทดลอง/เปลี่ยน resource ได้รวดเร็ว',
    elasticity:'ความสามารถในการเพิ่มหรือลด capacity ตาม demand',
    availability:'ความพร้อมใช้งาน',
    durability:'ความทนทานของข้อมูล',
    scalable:'ขยายรองรับงานได้',
    scalability:'ความสามารถในการขยายรองรับงาน',
    provision:'จัดเตรียม resource',
    provisioning:'การจัดเตรียม resource',
    underlying:'ที่อยู่เบื้องล่าง / โครงสร้างรองรับ',
    compliance:'การปฏิบัติตามข้อกำหนด',
    governance:'การกำกับดูแล',
    principal:'ตัวตนที่ทำ action เช่น user หรือ role',
    privileged:'มีสิทธิ์สูง',
    privilege:'สิทธิ์การเข้าถึง',
    least:'น้อยที่สุด',
    vulnerability:'ช่องโหว่',
    exposure:'การเปิดเผย/เปิดให้เข้าถึง',
    malicious:'เป็นอันตราย',
    dedicated:'เฉพาะ / แยกเฉพาะ',
    commitment:'ข้อผูกพัน',
    predictable:'คาดการณ์ได้',
    unpredictable:'คาดการณ์ได้ยาก',
    capacity:'ความสามารถรองรับงาน / ความจุ',
    threshold:'ค่าขีดจำกัด',
    forecast:'การคาดการณ์',
    historical:'ย้อนหลัง',
    consolidated:'รวมเข้าด้วยกัน',
    estimate:'ประมาณการ',
    workload:'ภาระงาน/ระบบที่รันอยู่',
    migration:'การย้ายระบบ',
    resilience:'ความสามารถในการทนและฟื้นจากปัญหา',
    recover:'ฟื้นกลับมา',
    redundant:'ซ้ำซ้อนเพื่อรองรับ failure',
    isolated:'แยกออกจากกัน',
    throughput:'ปริมาณข้อมูลที่รองรับต่อเวลา',
    latency:'ความหน่วง',
    persistent:'คงอยู่',
    ephemeral:'ชั่วคราว',
    concurrent:'พร้อมกัน',
    relational:'เชิงสัมพันธ์',
    cache:'หน่วยเก็บข้อมูลชั่วคราวเพื่อเร่งการเข้าถึง',
    audit:'การตรวจสอบย้อนหลัง',
    configuration:'การตั้งค่า',
    alert:'แจ้งเตือน',
    monitoring:'การเฝ้าติดตาม',
    decouple:'แยก dependency ระหว่าง components',
    queue:'คิวข้อความ',
    subscriber:'ผู้รับข้อความ',
    orchestration:'การควบคุมและจัดลำดับ workflow',
    sovereignty:'ข้อกำหนดว่าข้อมูลต้องอยู่/ประมวลผลในเขตที่กำหนด',
    residency:'ตำแหน่งที่ข้อมูลถูกจัดเก็บ',
    'member accounts':'บัญชีสมาชิกภายใต้ AWS Organizations',
    'in exchange for':'แลกกับ',
    'rather than':'แทนที่จะเป็น'
  };

  function normalize(value) {
    return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    })[char]);
  }

  function loadState(setId) {
    try {
      const state = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}${setId}`) || '{}');
      return state && typeof state === 'object' ? state : {};
    } catch {
      return {};
    }
  }

  function buildGlossary() {
    const glossary = new Map(Object.entries(DEFAULT_MEANINGS));
    (window.QUIZ_SETS || []).forEach(set => {
      (set.questions || []).forEach(question => {
        (question.vocab || []).forEach(item => {
          const key = normalize(item.term);
          const meaning = String(item.th || '').trim();
          if (key && meaning && !glossary.has(key)) glossary.set(key, meaning);
        });
      });
    });
    return glossary;
  }

  function collectAllNotes() {
    const glossary = buildGlossary();
    const grouped = new Map();

    (window.QUIZ_SETS || []).forEach(set => {
      const state = loadState(set.id);
      const notes = state.englishNotes && typeof state.englishNotes === 'object' ? state.englishNotes : {};
      const meanings = state.englishNoteMeanings && typeof state.englishNoteMeanings === 'object' ? state.englishNoteMeanings : {};
      const label = String(set.title || set.id).replace('Local Mock ', '');

      Object.entries(notes).forEach(([questionId, values]) => {
        if (!Array.isArray(values)) return;
        values.forEach(raw => {
          const term = String(raw || '').trim().replace(/\s+/g, ' ');
          const key = normalize(term);
          if (!key) return;
          if (!grouped.has(key)) grouped.set(key, { key, term, meaning: '', refs: [] });
          const item = grouped.get(key);
          const saved = String(meanings[key] || '').trim();
          if (!item.meaning && saved) item.meaning = saved;
          const ref = `${label} Q${questionId}`;
          if (!item.refs.includes(ref)) item.refs.push(ref);
        });
      });
    });

    grouped.forEach(item => {
      if (!item.meaning) item.meaning = glossary.get(item.key) || 'ยังไม่มีคำแปลในคลัง';
    });

    return [...grouped.values()].sort((a, b) => a.term.localeCompare(b.term, 'en'));
  }

  function ensurePanel() {
    let root = document.getElementById('dashboardEnglishGlossary');
    if (root) return root;

    const reviewQueue = document.getElementById('dashboardReviewQueue')?.closest('.dashboard-panel');
    const dashboard = document.getElementById('dashboardView');
    if (!dashboard) return null;

    const section = document.createElement('section');
    section.className = 'dashboard-panel';
    section.id = 'dashboardEnglishGlossaryPanel';
    section.innerHTML = `
      <div class="dashboard-panel-head">
        <div>
          <h3>📝 English Notes Glossary — ทุก Set</h3>
          <p class="muted">รวมศัพท์/วลีที่จดไว้จากทุก Local Mock พร้อมคำแปล และรวมคำซ้ำให้เป็นรายการเดียว</p>
        </div>
      </div>
      <div id="dashboardEnglishGlossary"></div>`;

    if (reviewQueue) reviewQueue.insertAdjacentElement('beforebegin', section);
    else dashboard.appendChild(section);
    return section.querySelector('#dashboardEnglishGlossary');
  }

  function injectStyles() {
    if (document.getElementById('dashboardVocabularyStyles')) return;
    const style = document.createElement('style');
    style.id = 'dashboardVocabularyStyles';
    style.textContent = `
      .dashboard-vocab-meta{margin:0 0 10px;color:var(--muted,#6b7280);font-size:.82rem}
      .dashboard-vocab-list{display:flex;flex-direction:column;border:1px solid var(--border,#e5e7eb);border-radius:10px;overflow:hidden;background:var(--card,#fff)}
      .dashboard-vocab-row{display:grid;grid-template-columns:minmax(150px,.75fr) minmax(260px,1.5fr) minmax(150px,.8fr);gap:12px;padding:9px 10px;border-bottom:1px solid var(--border,#e5e7eb);align-items:start}
      .dashboard-vocab-row:last-child{border-bottom:0}
      .dashboard-vocab-row strong{overflow-wrap:anywhere}
      .dashboard-vocab-meaning{line-height:1.45}
      .dashboard-vocab-refs{color:var(--muted,#6b7280);font-size:.75rem;line-height:1.4}
      @media(max-width:760px){.dashboard-vocab-row{grid-template-columns:1fr}.dashboard-vocab-refs{margin-top:-4px}}
    `;
    document.head.appendChild(style);
  }

  function renderGlossary() {
    injectStyles();
    const root = ensurePanel();
    if (!root) return;
    const items = collectAllNotes();

    if (!items.length) {
      root.innerHTML = '<p class="muted">ยังไม่มี English Notes ใน progress ของ browser เครื่องนี้</p>';
      return;
    }

    root.innerHTML = `
      <p class="dashboard-vocab-meta">รวม ${items.length} คำ/วลีจาก progress ปัจจุบัน</p>
      <div class="dashboard-vocab-list">
        ${items.map(item => `
          <div class="dashboard-vocab-row">
            <strong>${escapeHtml(item.term)}</strong>
            <span class="dashboard-vocab-meaning">${escapeHtml(item.meaning)}</span>
            <span class="dashboard-vocab-refs">${escapeHtml(item.refs.join(' · '))}</span>
          </div>`).join('')}
      </div>`;
  }

  const originalRender = window.renderStudyDashboard;
  if (typeof originalRender === 'function') {
    window.renderStudyDashboard = function () {
      originalRender();
      renderGlossary();
    };
  }

  document.getElementById('dashboardBtn')?.addEventListener('click', () => {
    setTimeout(renderGlossary, 0);
  });
})();
