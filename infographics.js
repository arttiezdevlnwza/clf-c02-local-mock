(() => {
  const pages = window.CLF_INFOGRAPHIC_PAGES || [];
  const gallery = document.getElementById('infographicGallery');
  const topicPanel = document.getElementById('infoTopicPanel');
  const infographicPanel = document.getElementById('infoInfographicPanel');
  const topicBtn = document.getElementById('infoTopicTabBtn');
  const infographicBtn = document.getElementById('infoInfographicTabBtn');
  const modal = document.getElementById('infographicModal');
  const modalTitle = document.getElementById('infographicModalTitle');
  const modalBody = document.getElementById('infographicModalBody');
  const modalClose = document.getElementById('infographicModalClose');
  if (!gallery || !topicPanel || !infographicPanel || !topicBtn || !infographicBtn || !modal) return;

  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  })[c]);
  const ICONS = ['☁️','🏛️','🛡️','🔐','🖥️','🗄️','🌐','📊','🔁','💳'];

  function openTab(kind) {
    const showInfographic = kind === 'infographic';
    topicPanel.classList.toggle('hidden', showInfographic);
    infographicPanel.classList.toggle('hidden', !showInfographic);
    topicBtn.classList.toggle('active', !showInfographic);
    infographicBtn.classList.toggle('active', showInfographic);
  }

  function makeCard(page) {
    const tags=(page.tags||[]).map(tag=>'<span>'+esc(tag)+'</span>').join('');
    const preview=(page.sections||[]).flatMap(s=>s.items||[]).slice(0,4).map(x=>'<li>'+esc(x)+'</li>').join('');
    return '<article class="infographic-page-card" data-page="'+page.page+'">' +
      '<button class="infographic-preview" type="button" data-open-infographic="'+page.page+'" aria-label="เปิด Page '+page.page+': '+esc(page.title)+'">' +
      '<div style="font-size:2rem;margin-bottom:8px">'+(ICONS[(page.page-1)%ICONS.length]||'📚')+'</div>'+
      '<strong>Page '+page.page+' — '+esc(page.title)+'</strong>'+
      '<ul style="text-align:left;margin:8px 0 0;padding-left:18px">'+preview+'</ul>'+
      '<span class="infographic-open-label">เปิดสรุปเต็ม →</span></button>'+
      '<div class="infographic-card-meta"><div class="infographic-tag-row">'+tags+'</div></div></article>';
  }

  function renderGallery(query='') {
    const q=query.trim().toLowerCase();
    const filtered=pages.filter(page=>{
      if(!q) return true;
      return [page.title,...(page.tags||[]),...(page.sections||[]).flatMap(s=>[s.title,...(s.items||[])])].join(' ').toLowerCase().includes(q);
    });
    gallery.innerHTML=filtered.map(makeCard).join('') || '<div class="dashboard-empty">ไม่พบหัวข้อที่ค้นหา</div>';
  }

  function openPage(pageNumber) {
    const page=pages.find(item=>item.page===Number(pageNumber));
    if(!page) return;
    modalTitle.textContent='Page '+page.page+' — '+page.title;
    const tags=(page.tags||[]).map(tag=>'<span>'+esc(tag)+'</span>').join('');
    const sections=(page.sections||[]).map((section,index)=>
      '<section class="infographic-full-section"><div class="infographic-section-head"><span>'+(index+1)+'</span><strong>'+esc(section.title)+'</strong></div>'+
      '<div class="infographic-section-items">'+(section.items||[]).map(item=>'<div><span class="infographic-dot"></span><p>'+esc(item)+'</p></div>').join('')+'</div></section>'
    ).join('');
    modalBody.innerHTML='<div class="infographic-full-page"><div class="infographic-full-head"><div class="infographic-tag-row">'+tags+
      '</div></div><div class="infographic-full-grid">'+sections+'</div></div>';
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }

  function closeModal(){ modal.classList.add('hidden'); document.body.classList.remove('modal-open'); }

  topicBtn.addEventListener('click',()=>openTab('topic'));
  infographicBtn.addEventListener('click',()=>openTab('infographic'));
  document.getElementById('infographicSearch')?.addEventListener('input',e=>renderGallery(e.target.value));
  gallery.addEventListener('click',e=>{ const t=e.target.closest('[data-open-infographic]'); if(t) openPage(t.dataset.openInfographic); });
  modalClose?.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{ if(e.target===modal) closeModal(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&!modal.classList.contains('hidden')) closeModal(); });

  renderGallery('');
  openTab('topic');
})();