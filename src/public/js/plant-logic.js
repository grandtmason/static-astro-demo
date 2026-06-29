(function () {

  const PLANT_ID  = document.querySelector('.plant-name')?.textContent?.trim() ?? 'plant';

  const LS_PREFIX = 'sabm-' + PLANT_ID + '-';

  const GLOBAL_LEAD_KEY = 'sabm_verified_b2b_lead';

  

  function $(id) { return document.getElementById(id); }



  const dtabs   = document.querySelectorAll('.tab-btn');

  const dpanels = document.querySelectorAll('.tab-panel');

  

  function activateTab(id) {

    dtabs.forEach(t => { const on = t.dataset.id === id; t.classList.toggle('active', on); t.setAttribute('aria-selected', on ? 'true' : 'false'); });

    dpanels.forEach(p => p.classList.toggle('active', p.id === 'panel-' + id));

    if (id !== 'datasheet') checkB2BGateState(id);

    document.getElementById('content-wrap')?.scrollTo(0, 0);

  }

  dtabs.forEach(t => t.addEventListener('click', () => activateTab(t.dataset.id)));



  function checkB2BGateState(tabId) {

    const overlay = $('b2b-gate-overlay-' + tabId);

    const clearContent = $('b2b-content-' + tabId);

    if (!overlay || !clearContent) return;

    if (localStorage.getItem(GLOBAL_LEAD_KEY) === 'true') {

      overlay.style.display = 'none';

      clearContent.style.display = 'block';

    } else {

      overlay.style.display = 'block';

      clearContent.style.display = 'none';

    }

  }



  document.getElementById('explore-trigger').addEventListener('click', () => document.getElementById('mob-tab-list').style.display = 'flex');

  document.getElementById('mob-close').addEventListener('click', () => document.getElementById('mob-tab-list').style.display = 'none');

  

  document.querySelectorAll('.mob-tab-row').forEach(btn => {

    btn.addEventListener('click', () => {

      const id = btn.dataset.id;

      if (id) {

        document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + id));

        document.getElementById('mob-tab-list').style.display = 'none';

      }

    });

  });



  const imgs = document.querySelectorAll('.carousel-img');

  const counter = $('c-count');

  let cIdx = 0;

  function showImg(i) { imgs.forEach((img, n) => img.classList.toggle('active', n === i)); if (counter) counter.textContent = (i + 1) + ' of ' + imgs.length; cIdx = i; }

  $('c-prev')?.addEventListener('click', () => showImg((cIdx - 1 + imgs.length) % imgs.length));

  $('c-next')?.addEventListener('click', () => showImg((cIdx + 1) % imgs.length));



  document.querySelectorAll('[data-b2b-form]').forEach(form => {

    form.addEventListener('submit', async (e) => {

      e.preventDefault();

      const currentForm = e.target;

      try {

        await fetch(currentForm.action, { method: 'POST', body: new FormData(currentForm), headers: { 'Accept': 'application/json' } });

      } catch (err) {}

      localStorage.setItem(GLOBAL_LEAD_KEY, 'true');

      document.querySelectorAll('.b2b-gate-overlay').forEach(o => o.style.display = 'none');

      document.querySelectorAll('.hidden-b2b-content').forEach(c => c.style.display = 'block');

    });

  });



  $('btn-suppliers')?.addEventListener('click', () => $('modal-suppliers')?.classList.add('open'));

  $('btn-buyers')?.addEventListener('click', () => $('modal-buyers')?.classList.add('open'));

  document.querySelectorAll('[data-close]').forEach(btn => { btn.addEventListener('click', () => $('modal-' + btn.dataset.close)?.classList.remove('open')); });

  document.querySelectorAll('.modal-overlay').forEach(o => { o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); }); });

  

  ['suppliers','buyers'].forEach(type => {

    $('form-' + type)?.addEventListener('submit', async e => {

      e.preventDefault();

      const form = e.target;

      try { await fetch(form.action, { method:'POST', body: new FormData(form), headers:{ Accept:'application/json' } }); } catch {}

      form.style.display = 'none';

      $('thanks-' + type).style.display = 'block';

    });

  });

})(); 


