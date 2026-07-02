(function () {
  const PLANT_ID  = document.querySelector('.plant-name')?.textContent?.trim() ?? 'plant';
  const LS_PREFIX = `sabm-${PLANT_ID}-`;
  const GLOBAL_LEAD_KEY = 'sabm_verified_b2b_lead';
  
  function $(id) { return document.getElementById(id); }

  const dtabs   = document.querySelectorAll('.tab-btn');
  const dpanels = document.querySelectorAll('.tab-panel');
  
  function activateTab(id) {
    dtabs.forEach(t => { const on = t.dataset.id === id; t.classList.toggle('active', on); t.setAttribute('aria-selected', on ? 'true' : 'false'); });
    dpanels.forEach(p => p.classList.toggle('active', p.id === `panel-${id}`));
    if (id !== 'datasheet') checkB2BGateState(id);
    $('content-wrap')?.scrollTo(0, 0);
  }
  dtabs.forEach(t => t.addEventListener('click', () => activateTab(t.dataset.id)));

  function checkB2BGateState(tabId) {
    const overlay = $(`b2b-gate-overlay-${tabId}`);
    const clearContent = $(`b2b-content-${tabId}`);
    if (!overlay || !clearContent) return;
    if (localStorage.getItem(GLOBAL_LEAD_KEY) === 'true') {
      overlay.style.display = 'none';
      clearContent.style.display = 'block';
    } else {
      overlay.style.display = 'block';
      clearContent.style.display = 'none';
    }
  }

  document.getElementById('explore-trigger')?.addEventListener('click', () => document.getElementById('mob-tab-list').style.display = 'flex');
  document.getElementById('mob-close')?.addEventListener('click', () => document.getElementById('mob-tab-list').style.display = 'none');
  
  document.querySelectorAll('[data-b2b-form]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await fetch(e.target.action, { method: 'POST', body: new FormData(e.target), headers: { 'Accept': 'application/json' } }).catch(() => {});
      localStorage.setItem(GLOBAL_LEAD_KEY, 'true');
      document.querySelectorAll('.b2b-gate-overlay').forEach(o => o.style.display = 'none');
      document.querySelectorAll('.hidden-b2b-content').forEach(c => c.style.display = 'block');
    });
  });

  $('btn-suppliers')?.addEventListener('click', () => $('modal-suppliers')?.classList.add('open'));
  $('btn-buyers')?.addEventListener('click', () => $('modal-buyers')?.classList.add('open'));
  document.querySelectorAll('[data-close]').forEach(btn => { btn.addEventListener('click', () => $(`modal-${btn.dataset.close}`)?.classList.remove('open')); });
})();
