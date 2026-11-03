(() => {
  const guide = window.EXAM_FAMILY_GUIDE;
  const root = document.getElementById('dashboardFamilyGuide');
  if (!guide || !root) return;

  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  })[c]);

  const ICONS = {
    'cloud-concepts':'☁️','well-architected':'🏛️','migration':'🚚','shared-responsibility':'🛡️',
    'iam-security':'🔐','compute-containers':'🖥️','database-storage':'🗄️','networking-global':'🌐',
    'monitoring-analytics':'📊','billing-support':'💳'
  };

  const totalItems = guide.groups.reduce((sum, group) => sum + group.items.length, 0);

  root.innerHTML = `
    <div class="family-guide-toolbar">
      <input id="familyGuideSearch" class="family-guide-search" type="search" placeholder="ค้นหา เช่น IAM, KMS, EC2, S3, Route 53, Budgets...">
      <button id="familyGuideOpenAll" class="ghost family-guide-action" type="button">เปิดทั้งหมด</button>
      <button id="familyGuideCloseAll" class="ghost family-guide-action" type="button">ย่อทั้งหมด</button>
      <span class="family-guide-count">${guide.groups.length} กลุ่ม · ${totalItems} หัวข้อ</span>
    </div>

    <div class="family-guide-visual">
      <div class="family-guide-visual-head">
        <div><strong>Visual Topic Map</strong><span>กดการ์ดเพื่อกระโดดไปยังหัวข้อนั้น</span></div>
      </div>
      <div id="familyGuideMap" class="family-guide-map"></div>
    </div>

    <div id="familyGuideGroups" class="family-guide-groups"></div>
    <p class="dashboard-note family-guide-note">อัปเดต ${esc(guide.updated)} · ทำเป็น quick-reference สำหรับแยก service/concept ที่ชื่อหรือหน้าที่คล้ายกันใน CLF-C02</p>`;

  const groupsRoot = document.getElementById('familyGuideGroups');
  const mapRoot = document.getElementById('familyGuideMap');
  const search = document.getElementById('familyGuideSearch');
  const openAll = document.getElementById('familyGuideOpenAll');
  const closeAll = document.getElementById('familyGuideCloseAll');

  function renderMap(query='') {
    const q = query.trim().toLowerCase();
    mapRoot.innerHTML = guide.groups.map(group => {
      const haystack = [group.title, group.summary, ...group.items.flatMap(item => [item.name,item.use,item.cue,item.confuse])].join(' ').toLowerCase();
      if (q && !haystack.includes(q)) return '';
      const sample = group.items.slice(0, 3).map(item => item.name).join(' · ');
      return `
        <button class="family-map-card" type="button" data-family-target="${esc(group.id)}">
          <span class="family-map-icon" aria-hidden="true">${ICONS[group.id] || '📚'}</span>
          <strong>${esc(group.title.replace(/\s+—.*$/, ''))}</strong>
          <small>${esc(sample)}${group.items.length > 3 ? ' …' : ''}</small>
          <b>${group.items.length}</b>
        </button>`;
    }).join('') || '<div class="dashboard-empty">ไม่พบกลุ่มที่ค้นหา</div>';

    mapRoot.querySelectorAll('.family-map-card').forEach(button => {
      button.addEventListener('click', () => {
        const id = button.dataset.familyTarget;
        const target = groupsRoot.querySelector(`[data-family-id="${CSS.escape(id)}"]`);
        if (!target) return;
        target.open = true;
        target.scrollIntoView({ behavior:'smooth', block:'start' });
      });
    });
  }

  function renderGroups(query='') {
    const q = query.trim().toLowerCase();
    const groups = guide.groups.map(group => {
      const matchedItems = group.items.filter(item => !q || [group.title,group.summary,item.name,item.use,item.cue,item.confuse].join(' ').toLowerCase().includes(q));
      if (q && !matchedItems.length) return '';

      return `
        <details class="family-guide-group" data-family-id="${esc(group.id)}" ${q ? 'open' : ''}>
          <summary>
            <div class="family-guide-summary-copy">
              <span class="family-guide-summary-icon" aria-hidden="true">${ICONS[group.id] || '📚'}</span>
              <div><strong>${esc(group.title)}</strong><span>${esc(group.summary)}</span></div>
            </div>
            <b>${matchedItems.length}</b>
          </summary>

          <div class="family-quick-strip">
            ${matchedItems.map(item => `
              <div class="family-quick-card">
                <strong>${esc(item.name)}</strong>
                <span>${esc(item.cue)}</span>
              </div>`).join('')}
          </div>

          <div class="family-guide-body">
            ${matchedItems.map(item => `
              <article class="family-guide-item">
                <div class="family-guide-item-head"><strong>${esc(item.name)}</strong><span>${esc(item.use)}</span></div>
                <div class="family-guide-memory">🧠 จำสั้น ๆ: ${esc(item.cue)}</div>
                <div class="family-guide-confuse">⚠️ อย่าสับสน: ${esc(item.confuse)}</div>
              </article>`).join('')}
          </div>
        </details>`;
    }).join('');
    groupsRoot.innerHTML = groups || '<div class="dashboard-empty">ไม่พบหัวข้อที่ค้นหา</div>';
  }

  function render(query='') {
    renderMap(query);
    renderGroups(query);
  }

  search.addEventListener('input', () => render(search.value));
  openAll.addEventListener('click', () => groupsRoot.querySelectorAll('details').forEach(item => { item.open = true; }));
  closeAll.addEventListener('click', () => groupsRoot.querySelectorAll('details').forEach(item => { item.open = false; }));

  const infoLibraryBtn = document.getElementById('infoLibraryBtn');
  const infoLibraryView = document.getElementById('infoLibraryView');
  const infoLibraryHomeBtn = document.getElementById('infoLibraryHomeBtn');

  function hideInfoLibrary() {
    infoLibraryView?.classList.add('hidden');
  }

  function openInfoLibrary() {
    ['homeView', 'dashboardView', 'quizView', 'summaryView'].forEach(id => document.getElementById(id)?.classList.add('hidden'));
    infoLibraryView?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  infoLibraryBtn?.addEventListener('click', openInfoLibrary);
  infoLibraryHomeBtn?.addEventListener('click', () => {
    hideInfoLibrary();
    document.getElementById('homeView')?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.getElementById('homeBtn')?.addEventListener('click', hideInfoLibrary);
  document.getElementById('dashboardBtn')?.addEventListener('click', hideInfoLibrary);

  render();
})();