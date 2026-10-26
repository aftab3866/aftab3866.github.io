/* ============================================================
   Dr. Aftab Alam — portfolio script
   All content below comes from the CV. Edit DATA to update the site.
   ============================================================ */

const CONFIG = {
  name: "Dr. Aftab Alam",
  email: "aftabal@uaeu.ac.ae",
  secondaryEmail: "aftab07alig@gmail.com",

  links: [
    {
      label: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/aftab-jmi/"
    },
    {
      label: "Google Scholar",
      icon: "fas fa-graduation-cap",
      url: "https://scholar.google.com/citations?user=PwA6xWsAAAAJ&hl=en"
    },
    {
      label: "ResearchGate",
      icon: "fab fa-researchgate",
      url: "https://www.researchgate.net/profile/Aftab-Alam-12/research"
    },
    {
      label: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/aftab3866"
    },
    {
      label: "ORCID",
      icon: "fab fa-orcid",
      url: "https://orcid.org/0000-0002-6989-9398"
    },
    {
      label: "Scopus",
      icon: "fas fa-database",
      url: "https://www.scopus.com/authid/detail.uri?authorId=57191078261&origin=AuthorEval"
    }
  ]
};

const DATA = {
  interests: [
    "Bioinformatics & Computational Genomics", "Multi-omics Data Integration", "Drug Design and Development", "Immunoinformatics",
    "Pharmacogenomics", "Structure-Based Bioinformatics", "AI/ML for Omics Analysis", "Metabolomics and  Microbiome Data Science",
    "Personalized Medicine", "Network and Systems Biology", "Big Data Analyses"
  ],
  
skills: [
    ["fa-layer-group", "Multi-Omics Data Integration and Systems Biology"],
    ["fa-robot", "Machine Learning and AI in Bioinformatics"],
    ["fa-bacteria", "Metagenomics and Microbiome Analysis"],
    ["fa-code", "R and Python Programming"],
    ["fa-chalkboard-user", "Advanced Bioinformatics Teaching, Training and Mentoring"],
    ["fa-pen-nib", "Scientific Writing, Manuscript Preparation and Grant Writing"],
    ["fa-cube", "Structural Bioinformatics"],
    ["fa-diagram-project", "Project Management and Research Coordination"],
    ["fa-handshake", "Scientific Collaboration and Interpersonal Skills"],
    ["fa-user-doctor", "Personalized Medicine and Health Informatics"]
  ],
   
  /* tags drive the filter buttons */
  pubs: [
    { year: 2026, authors: "Aftab Alam, Siddiqui MF, Kali S, Labania L, Attoub S, Fernandez-Cabezudo MJ, Al-Ramadi BK",
      title: "Network Analysis and Machine Learning Approach Identifies HSP90-Associated Synthetic Lethal Targets and Drug Responses in Breast Cancer",
      journal: "npj Precision Oncology", doi: "10.1038/s41698-026-01738-x", tags: ["ai-ml", "cancer", "network"] },
    { year: 2026, authors: "Kali SK, Remya PG, Aftab Alam, Fernandez-Cabezudo M, Aydah M, Uday K, Al-Ramadi BK",
      title: "Rethinking PDAC: From Immunological Silence to Therapeutic Opportunity",
      journal: "Frontiers in Immunology", doi: "10.3389/fimmu.2026.1909191", tags: ["cancer", "immuno"] },
    { year: 2026, authors: "Ahmed M, Haneefa SM, Aftab Alam, Arafat K, Kali SK, Mohamed YA, Naser HT, Idriss I, Labania L, Al-Sbiei A, Attoub S, Rincon M, Fernandez-Cabezudo M, Al-Ramadi BK",
      title: "Modulation of the immunogenic landscape in colorectal cancer by mitochondrial DNAJC15 protein",
      journal: "Molecular Biomedicine", doi: "10.1186/s43556-026-00466-9", tags: ["cancer", "immuno"] },
    { year: 2026, authors: "Aftab Alam, Fernandez-Cabezudo M, Hamoudi RA, Al-Ramadi BK",
      title: "Targeting protein–protein interactions and their modulators to enable new therapeutic strategies for human diseases",
      journal: "npj Systems Biology and Applications", doi: "10.1038/s41540-026-00698-z", tags: ["network", "drug"] },
    { year: 2025, authors: "Aftab Alam, Siddiqui MF, Hamoudi RA, Kishore U, Fernandez-Cabezudo M, Al-Ramadi BK",
      title: "A Systems Biology Approach to Unveil Shared Therapeutic Targets and Pathological Pathways Across Major Human Cancers",
      journal: "Computational and Structural Biotechnology Journal", doi: "10.1016/j.csbj.2025.11.061", tags: ["network", "cancer"] },
    { year: 2024, authors: "Idriss I†, Ali AH†, Aftab Alam†, Fernandez-Cabezudo M, Ayyash M, Al-Ramadi BK",
      title: "Differential in vitro cytotoxic effects and metabolomic insights into raw and powdered Manuka honey through UPLC-Q-TOF-MS",
      journal: "Scientific Reports", doi: "10.1038/s41598-024-68387-7", tags: ["cancer", "omics"] },
    { year: 2024, authors: "Tamkeen N, Farooqui A, Aftab Alam, Najma, Tazyeen S, Ahmad MM, Ahmad N, Ishrat R",
      title: "Identification of common candidate genes and pathways for Spina Bifida and Wilm's Tumor using an integrative bioinformatics analysis",
      journal: "Journal of Biomolecular Structure and Dynamics", doi: "10.1080/07391102.2023.2199080", tags: ["network", "cancer"] },
    { year: 2023, authors: "Rodina A, Xu C, Digwal CS, Joshi S, Patel Y, Santhaseela AR, Bay S, Merugu S, Alam Aftab, Yan P, Yang C",
      title: "Systems-level analyses of protein-protein interaction network dysfunctions via epichaperomics identify cancer-specific mechanisms of stress adaptation",
      journal: "Nature Communications", doi: "10.1038/s41467-023-39241-7", tags: ["network", "cancer"] },
    { year: 2023, authors: "Nikhat Imam†, Aftab Alam†, Siddiqui MF, Veg A, Bay S, Khan MJI, Ishrat R",
      title: "Network-Medicine Approach for the Identification of Genetic Association of Parathyroid Adenoma with Cardiovascular Disease and Type-2 Diabetes",
      journal: "Briefings in Functional Genomics", doi: "10.1093/bfgp/elac054", tags: ["network"] },
    { year: 2022, authors: "Aftab Alam, Bagabir HA, Sultan A, Siddiqui MF, Imam N, Alkhanani MF, Alsulimani A, Haque S, Ishrat R",
      title: "An Integrative Network Approach to Identify Common Genes for the Therapeutics in Tuberculosis and Its Overlapping Non-Communicable Diseases",
      journal: "Frontiers in Pharmacology", doi: "10.3389/fphar.2021.770762", tags: ["network", "infection"] },
    { year: 2022, authors: "Majid N, Siddiqi K, Aftab Alam, Malik S, Ali W, Khan RH",
      title: "Cholic acid inhibits amyloid fibrillation: Interplay of protonation and deprotonation",
      journal: "International Journal of Biological Macromolecules", doi: "10.1016/j.ijbiomac.2022.09.019", tags: ["structural"] },
    { year: 2021, authors: "Aftab Alam, Khan A, Imam N, Siddiqui MF, Malik MZ, Ishrat R",
      title: "Design of an Epitope-Based Peptide Vaccine against the Severe Acute Respiratory Syndrome Coronavirus-2 (SARS-CoV-2): A Vaccine Informatics Approach",
      journal: "Briefings in Bioinformatics", doi: "10.1093/bib/bbaa340", tags: ["immuno", "infection", "structural"] },
    { year: 2021, authors: "Aftab Alam, Imam N, Siddiqui MF, Ali MK, Ahmed MM, Ishrat R",
      title: "Human Gene Expression Profiling Identifies Key Therapeutic Targets in Tuberculosis Infection: A Systematic Network Meta-Analysis",
      journal: "Infection, Genetics and Evolution", doi: "10.1016/j.meegid.2020.104649", tags: ["network", "infection", "omics"] }
  ],
  tags: [
    ["all", "All"], ["network", "Network / Systems"], ["cancer", "Cancer"], ["ai-ml", "AI / ML"],
    ["immuno", "Immunology"], ["infection", "Infection"], ["omics", "Omics"], ["structural", "Structural"], ["drug", "Drug design"]
  ],
  pipeline: [
    { status: "Submitted", authors: "Idriss I, Ahmed M, Al-Sbiei A, Alam A, Abubacker A, Bashir GH, Mohamed YA, Labania L, Kishore U, Al-Marzooq F, Fernandez-Cabezudo MZ, Al-Ramadi BK",
      title: "Gut Microbiota-Dependent Immune Remodeling Mediates the Therapeutic Antitumor Activity of Oral Manuka Honey in Experimental Colorectal Cancer",
      journal: "Frontiers in Immunology (2026) — manuscript submitted" },
    { status: "In preparation", authors: "Chkier D†, Alam A†, Al-Sbiei A, Mohamed YA, Fernandez-Cabezudo MJ, Liu W, Al-Ramadi BK",
      title: "MyD88 regulates the threshold of antigen receptor signaling in B lymphocytes",
      journal: "(2026) — manuscript in preparation" },
    { status: "In preparation", authors: "Alam A†, Kali SK†, Al-Ramadi BK",
      title: "Multi-Omics Profiling Identifies and Validates Prognostic Biomarkers and Therapeutically Relevant Cellular States in Pancreatic Ductal Adenocarcinoma",
      journal: "(2027) — manuscript in preparation" }
  ]
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const doiUrl = d => `https://doi.org/${d}`;
/* Bold the CV owner's name in author lists */
const boldMe = a => esc(a).replace(/(Aftab Alam|Alam Aftab|\bAlam A\b)(†?)/g, '<b>$1$2</b>');

/* ---------- theme & menu ---------- */
function toggleTheme() {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch { }
  $$('.theme-icon').forEach(i => i.className = (dark ? 'fas fa-sun' : 'fas fa-moon') + ' theme-icon');
}
function toggleMenu() { $('#nav-list').classList.toggle('active'); }
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-list') && !e.target.closest('.nav-toggle')) $('#nav-list').classList.remove('active');
  if (!e.target.closest('.pub-actions')) $$('.cite-menu').forEach(m => m.classList.remove('show'));
});
function copyText(text, btn) {
  const done = () => { const o = btn.innerHTML; btn.innerHTML = '<i class="fas fa-check"></i>'; setTimeout(() => btn.innerHTML = o, 1500); };
  (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(done).catch(() => {
    const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); done();
  });
}

/* ---------- render static data ---------- */
function renderStatic() {
  $('#profile-links').innerHTML = CONFIG.links.map(l =>
    `<a href="${l.url}" target="_blank" rel="noopener noreferrer"><i class="${l.icon}"></i> ${l.label}</a>`).join('');
  $('#interests').innerHTML = DATA.interests.map(i => `<span class="chip">${esc(i)}</span>`).join('');
  $('#skill-grid').innerHTML = DATA.skills.map(([ic, t]) => `<div class="skill"><i class="fas ${ic}"></i><span>${esc(t)}</span></div>`).join('');
  $('#yr').textContent = new Date().getFullYear();
  $('#tag-row').innerHTML = DATA.tags.map(([k, l]) =>
    `<button class="tag-btn${k === 'all' ? ' active' : ''}" data-tag="${k}" onclick="setTag('${k}')">${l}</button>`).join('');
  $('#pipeline-list').innerHTML = DATA.pipeline.map(p => `
    <li class="pub-item"><span class="status-pill">${p.status}</span>
      <span class="pub-title">${esc(p.title)}</span>
      <div class="pub-authors">${boldMe(p.authors)}</div>
      <div class="pub-meta"><em>${esc(p.journal)}</em></div></li>`).join('');
$('#section-rail').innerHTML = ['recent', 'about', 'vision', 'experience', 'publications', 'skills', 'education', 'grants', 'gallery', 'important-links', 'contact'].map(id => `<button class="rail-dot" data-target="${id}" data-label="${id[0].toUpperCase() + id.slice(1)}" aria-label="${id}"></button>`).join('');
}
/* ---------- publications ---------- */
let pubTag = 'all';
function renderPubs() {
  $('#pub-list').innerHTML = DATA.pubs.map((p, i) => `
    <li class="pub-item" data-i="${i}">
      <span class="pub-title">${esc(p.title)}</span>
      <div class="pub-authors">${boldMe(p.authors)}</div>
      <div class="pub-meta"><span class="pub-year">${p.year}</span><em>${esc(p.journal)}</em>
        <span class="pub-actions">
          <a href="${doiUrl(p.doi)}" target="_blank" rel="noopener noreferrer"><i class="fas fa-link"></i> DOI</a>
          <button onclick="toggleCite(event,${i})">Cite <i class="fas fa-caret-down"></i></button>
          <button onclick="pubSummary(${i})" title="Short summary">✨</button>
          <span class="cite-menu" id="cite-${i}">
            <button onclick="cite(${i},'apa',this)"><i class="fas fa-copy"></i> Copy APA</button>
            <button onclick="cite(${i},'bib',this)"><i class="fas fa-file-code"></i> Download BibTeX</button>
            <button onclick="cite(${i},'ris',this)"><i class="fas fa-file-export"></i> Download EndNote (RIS)</button>
          </span>
        </span></div>
    </li>`).join('');
  filterPubs();
}
function setTag(t) {
  pubTag = t;
  $$('.tag-btn').forEach(b => b.classList.toggle('active', b.dataset.tag === t));
  filterPubs();
}
function filterPubs() {
  const q = $('#pub-search').value.trim().toLowerCase();
  let n = 0;
  $$('#pub-list .pub-item').forEach(li => {
    const p = DATA.pubs[+li.dataset.i];
    const hay = `${p.title} ${p.authors} ${p.journal} ${p.year}`.toLowerCase();
    const ok = (!q || hay.includes(q)) && (pubTag === 'all' || p.tags.includes(pubTag));
    li.style.display = ok ? '' : 'none';
    const t = $('.pub-title', li);
    t.innerHTML = ok && q ? esc(p.title).replace(new RegExp('(' + reEsc(esc(q)) + ')', 'gi'), '<mark>$1</mark>') : esc(p.title);
    if (ok) n++;
  });
  $('#pub-status').textContent = (q || pubTag !== 'all') ? `Showing ${n} of ${DATA.pubs.length} publications.` : `${DATA.pubs.length} publications listed.`;
}
function toggleCite(e, i) {
  e.stopPropagation();
  const m = $('#cite-' + i), open = m.classList.contains('show');
  $$('.cite-menu').forEach(x => x.classList.remove('show'));
  if (!open) m.classList.add('show');
}

/* Citation formats. Authors come from the CV; Crossref is tried for fuller metadata. */
function parseAuthors(str) {
  return str.replace(/[†]/g, '').split(/,\s*/).map(a => a.trim()).filter(Boolean).map(a => {
    const parts = a.split(/\s+/);
    if (/^[A-Z]{1,3}$/.test(parts[parts.length - 1]) && parts.length > 1) return { last: parts.slice(0, -1).join(' '), init: parts[parts.length - 1].split('').join('. ') + '.' };
    const last = parts.pop(); return { last, init: parts.map(x => x[0] + '.').join(' ') };
  });
}
async function metaFor(p) {
  let m = { authors: parseAuthors(p.authors), title: p.title, journal: p.journal, year: p.year, volume: '', issue: '', pages: '', doi: doiUrl(p.doi) };
  try {
    const r = await fetch(`https://api.crossref.org/works/${encodeURIComponent(p.doi)}`);
    if (r.ok) {
      const d = (await r.json()).message;
      if (d.author) m.authors = d.author.map(x => ({ last: x.family || '', init: (x.given || '').split(/[\s.-]+/).filter(Boolean).map(n => n[0] + '.').join(' ') }));
      m.volume = d.volume || ''; m.issue = d.issue || ''; m.pages = d.page || d['article-number'] || '';
    }
  } catch { /* offline: fall back to CV data */ }
  return m;
}
const fmtAPA = m => {
  const a = m.authors.map(x => `${x.last}, ${x.init}`);
  const au = a.length > 1 ? a.slice(0, -1).join(', ') + ', & ' + a[a.length - 1] : (a[0] || '');
  return `${au} (${m.year}). ${m.title}. ${m.journal}${m.volume ? ', ' + m.volume : ''}${m.issue ? '(' + m.issue + ')' : ''}${m.pages ? ', ' + m.pages : ''}. ${m.doi}`;
};
const fmtBib = m => `@article{${(m.authors[0]?.last || 'alam').replace(/\W/g, '')}${m.year},\n  author = {${m.authors.map(a => `${a.last}, ${a.init}`).join(' and ')}},\n  title = {${m.title}},\n  journal = {${m.journal}},\n  year = {${m.year}},\n  volume = {${m.volume}},\n  number = {${m.issue}},\n  pages = {${m.pages}},\n  doi = {${m.doi.replace('https://doi.org/', '')}}\n}`;
const fmtRIS = m => `TY  - JOUR\nTI  - ${m.title}\n${m.authors.map(a => `AU  - ${a.last}, ${a.init}\n`).join('')}JO  - ${m.journal}\nPY  - ${m.year}\nVL  - ${m.volume}\nIS  - ${m.issue}\nSP  - ${m.pages}\nDO  - ${m.doi.replace('https://doi.org/', '')}\nER  -`;
function download(content, name, type) {
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([content], { type })); a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
}
async function cite(i, kind, btn) {
  const orig = btn.innerHTML; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fetching…';
  const p = DATA.pubs[i], m = await metaFor(p);
  if (kind === 'apa') { try { await navigator.clipboard.writeText(fmtAPA(m)); } catch { prompt('Copy citation:', fmtAPA(m)); } }
  else if (kind === 'bib') download(fmtBib(m), `alam${p.year}.bib`, 'text/plain');
  else download(fmtRIS(m), `alam${p.year}.ris`, 'application/x-research-info-systems');
  btn.innerHTML = '<i class="fas fa-check"></i> Done';
  setTimeout(() => { btn.innerHTML = orig; btn.closest('.cite-menu').classList.remove('show'); }, 1200);
}

/* Offline "summary": built from the title + (when reachable) the Crossref abstract. No AI service needed. */
async function pubSummary(i) {
  const p = DATA.pubs[i];
  showModal(`<h3>${esc(p.title)}</h3><p class="muted">${esc(p.journal)} · ${p.year}</p><p id="ps-body"><i class="fas fa-spinner fa-spin"></i> Loading abstract…</p>
    <p><a href="${doiUrl(p.doi)}" target="_blank" rel="noopener noreferrer">Read the full article →</a></p>`);
  let abs = '';
  try {
    const r = await fetch(`https://api.crossref.org/works/${encodeURIComponent(p.doi)}`);
    if (r.ok) abs = String((await r.json()).message.abstract || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').replace(/^\s*Abstract[:.]?\s*/i, '').trim();
  } catch { }
  const body = $('#ps-body');
  if (body) body.textContent = abs ? abs.slice(0, 900) + (abs.length > 900 ? '…' : '') : 'No abstract is available from Crossref for this article. Please use the DOI link for details.';
}

/* ---------- recent publications: running ticker ---------- */
function renderRecent() {
  const cards = DATA.pubs.slice(0, 6).map(p => `
    <div class="mq-card">
      <span class="mq-journal">${esc(p.journal)} · ${p.year}</span>
      <span class="mq-title">${esc(p.title)}</span>
      <a href="${doiUrl(p.doi)}" target="_blank" rel="noopener noreferrer"><i class="fas fa-link"></i> DOI</a>
    </div>`).join('');
  /* content is doubled so the loop is seamless */
  $('#recent-track').innerHTML = cards + cards.replace(/<a /g, '<a tabindex="-1" ');
}

/* ---------- lab gallery ----------
   Put your photos in the "gallery" folder and list them here.
   Add or remove lines freely; captions are optional. */
const GALLERY = [
  { src: 'gallery/1.png', caption: 'My Mentor & Research Team' },
  { src: 'gallery/2.png', caption: 'Team at work' },
  { src: 'gallery/3.png', caption: 'Lab equipment' },
  { src: 'gallery/lab4.png', caption: 'Group meeting' },
  { src: 'gallery/lab5.png', caption: 'Conference / event' },
  { src: 'gallery/lab6.png', caption: 'Lab members' }
];
let lbIndex = 0;
function renderGallery() {
  $('#gallery-grid').innerHTML = GALLERY.map((g, i) => `
    <figure class="g-item" data-i="${i}">
      <div class="g-empty"><i class="fas fa-image"></i><span>Add <code>${esc(g.src)}</code></span></div>
      <img src="${esc(g.src)}" alt="${esc(g.caption || 'Lab photo')}" loading="lazy"
           onload="this.parentElement.classList.add('ok')" onerror="this.style.display='none'">
      ${g.caption ? `<figcaption class="g-cap">${esc(g.caption)}</figcaption>` : ''}
    </figure>`).join('');
  $$('.g-item').forEach(f => f.addEventListener('click', () => { if (f.classList.contains('ok')) openLightbox(+f.dataset.i); }));
}
function openLightbox(i) {
  const avail = $$('.g-item.ok').map(f => +f.dataset.i);
  if (!avail.length) return;
  lbIndex = i; const g = GALLERY[i];
  $('#lb-img').src = g.src; $('#lb-cap').textContent = g.caption || '';
  $('#lightbox').classList.add('show');
}
function lbMove(d) {
  const avail = $$('.g-item.ok').map(f => +f.dataset.i);
  if (!avail.length) return;
  const pos = avail.indexOf(lbIndex);
  openLightbox(avail[(pos + d + avail.length) % avail.length]);
}
function closeLightbox() { $('#lightbox').classList.remove('show'); }
document.addEventListener('keydown', e => {
  if (!$('#lightbox').classList.contains('show')) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowRight') lbMove(1);
  else if (e.key === 'ArrowLeft') lbMove(-1);
});

/* ---------- about summary ---------- */
function summarise() {
  const b = $('#summary-box'); b.style.display = 'block';
  b.innerHTML = `<strong>✨ At a glance</strong><ul>
    <li><strong>Who:</strong> Postdoctoral researcher (UAEU, UAE; previously MSKCC, USA) with a PhD in network meta-analysis of gene expression.</li>
    <li><strong>What:</strong> Multi-omics integration, systems biology, machine learning and drug-target discovery in cancer, infection and immunology.</li>
    <li><strong>Output:</strong> 42+ articles, 770+ citations, h-index 15 (Google Scholar), including <em>Nature Communications</em> and <em>npj Precision Oncology</em>.</li>
    <li><strong>Goal:</strong> Seeking an Assistant Professorship to establish an independent group in multi-omics, computational biology, AI/ML, and network-based translational research.</li></ul>`;
}

/* ---------- modal ---------- */
function showModal(html) { $('#modal-content').innerHTML = html; $('#modal').classList.add('show'); }
function closeModal() { $('#modal').classList.remove('show'); }

/* ---------- contact (mailto, no backend) ---------- */
function sendMail(e) {
  e.preventDefault();
  const body = `${$('#c-message').value}\n\n— ${$('#c-name').value}`;
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent($('#c-subject').value)}&body=${encodeURIComponent(body)}`;
  return false;
}

/* ---------- counters ---------- */
function runCounters() {
  const els = $$('.stat-value');
  els.forEach((el, i) => {
    const target = +el.dataset.target, suf = el.dataset.suffix || '';
    el.textContent = '0' + suf;
    setTimeout(() => {
      const start = performance.now(), dur = 1800;
      const step = now => {
        const p = Math.min((now - start) / dur, 1), e = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.floor(e * target) + suf;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 300 + i * 350);
  });
}

/* ---------- scroll: progress ring, nav spy, rail, back-to-top ---------- */
function initScroll() {
  const ring = $('.progress-ring__circle'), r = ring.r.baseVal.value, C = 2 * Math.PI * r;
  ring.style.strokeDasharray = `${C} ${C}`; ring.style.strokeDashoffset = C;
  const secs = $$('main section[id]'), dots = $$('.rail-dot'), links = $$('.nav-link'), btt = $('#back-to-top');
  let tick = false;
  const update = () => {
    tick = false;
    const total = document.documentElement.scrollHeight - innerHeight;
    ring.style.strokeDashoffset = C - (total > 0 ? scrollY / total : 0) * C;
    btt.classList.toggle('visible', scrollY > 300);
    let cur = '';
    secs.forEach(s => { if (s.getBoundingClientRect().top <= innerHeight / 2) cur = s.id; });
    if (innerHeight + scrollY >= document.body.scrollHeight - 4) cur = secs[secs.length - 1].id;
    if (cur === 'hero') cur = '';
    links.forEach(l => l.classList.toggle('active-section', l.getAttribute('href') === '#' + cur));
    dots.forEach(d => d.classList.toggle('active', d.dataset.target === cur));
  };
  addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(update); } }, { passive: true });
  btt.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  dots.forEach(d => d.addEventListener('click', () => document.getElementById(d.dataset.target).scrollIntoView({ behavior: 'smooth' })));
  update();
}

/* ---------- reveal ---------- */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); io.unobserve(e.target); } }), { threshold: .08 });
  $$('.reveal').forEach(el => io.observe(el));
}

/* ---------- command-palette search (Ctrl/Cmd+K) ---------- */
const Search = (() => {
  let idx = [], results = [], active = -1;
  const build = () => {
    idx = [];
    $$('main section[id]').forEach(sec => {
      const label = ($('h2', sec) || { textContent: sec.id }).textContent.trim();
      $$('h2,h3,.pub-item,.card,.tl-item,.skill,.chip,.stat,.contact-grid p,.lead,.hero-obj', sec).forEach(el => {
        const t = el.querySelector('h3,.pub-title') || el;
        const title = t.textContent.replace(/\s+/g, ' ').trim().slice(0, 110);
        if (title.length < 3) return;
        idx.push({ title, text: el.textContent.replace(/\s+/g, ' ').trim().toLowerCase(), el, section: label });
      });
    });
  };
  const score = (it, q) => {
    const words = q.split(/\s+/).filter(Boolean), tl = it.title.toLowerCase();
    if (!words.every(w => it.text.includes(w))) return 0;
    let s = tl.includes(q) ? 50 : 0; words.forEach(w => s += tl.includes(w) ? 10 : 2); return s;
  };
  const render = q => {
    const b = $('#srch-body');
    if (!q) { b.innerHTML = ''; return; }
    if (!results.length) { b.innerHTML = `<div class="srch-empty">No results for “${esc(q)}”</div>`; return; }
    let html = '', last = '';
    results.forEach((r, i) => {
      if (r.section !== last) { html += `<div class="srch-hd">${esc(r.section)}</div>`; last = r.section; }
      html += `<div class="srch-item${i === active ? ' srch-active' : ''}" data-i="${i}"><div class="srch-title">${esc(r.title).replace(new RegExp('(' + reEsc(esc(q)) + ')', 'gi'), '<mark>$1</mark>')}</div></div>`;
    });
    b.innerHTML = html;
    $$('.srch-item', b).forEach(el => el.addEventListener('click', () => go(+el.dataset.i)));
  };
  const run = q => {
    q = q.trim().toLowerCase(); active = -1;
    results = q ? idx.map(it => ({ ...it, s: score(it, q) })).filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 30)
      .sort((a, b) => a.section.localeCompare(b.section) || b.s - a.s) : [];
    render(q);
  };
  const go = i => {
    const r = results[i]; if (!r) return;
    close();
    let el = r.el;
    /* make sure it is visible if the publication filter hid it */
    if (el.style && el.style.display === 'none') { $('#pub-search').value = ''; setTag('all'); }
    setTimeout(() => { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); el.classList.add('srch-flash'); setTimeout(() => el.classList.remove('srch-flash'), 1700); }, 150);
  };
  const open = () => { if (!idx.length) build(); $('#srch-overlay').classList.add('open'); setTimeout(() => $('#srch-input').focus(), 50); };
  const close = () => { $('#srch-overlay').classList.remove('open'); $('#srch-input').value = ''; $('#srch-body').innerHTML = ''; };
  const move = d => {
    if (!results.length) return; active = Math.max(0, Math.min(results.length - 1, active + d));
    $$('.srch-item').forEach((el, i) => el.classList.toggle('srch-active', i === active));
    const a = $('.srch-active'); if (a) a.scrollIntoView({ block: 'nearest' });
  };
  $('#srch-input').addEventListener('input', debounce(e => { if (!idx.length) build(); run(e.target.value); }, 120));
  $('#srch-input').addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Enter') { e.preventDefault(); go(active >= 0 ? active : 0); }
  });
  return { open, close };
})();
const openSearch = Search.open, closeSearch = Search.close;
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); $('#srch-overlay').classList.contains('open') ? closeSearch() : openSearch(); }
  if (e.key === 'Escape') { closeSearch(); closeModal(); }
});

/* ---------- CV assistant (runs fully in the browser, answers only from the CV) ---------- */
const KB = [
  { k: ['who', 'about', 'introduce', 'summary', 'profile'], a: "Dr. Aftab Alam is a bioinformatician and postdoctoral researcher at the College of Medicine and Health Sciences, UAE University (2023–present). His work covers multi-omics integration, systems biology and precision medicine." },
  { k: ['vision', 'strategy', 'assistant professor', 'professorship', 'independent', 'future', 'plan', 'lab strategy', 'research group', 'faculty', 'position wanted'], a: "Dr. Alam is actively seeking an Assistant Professorship to establish an independent research group focused on multi-omics, computational biology, AI/ML, network-based biomedical research, and collaborative translational research." },
  { k: ['current', 'now', 'position', 'role', 'uaeu', 'emirates'], a: "He is a Postdoctoral Researcher at United Arab Emirates University (UAEU), Al-Ain, since 2023." },
  { k: ['previous', 'msk', 'sloan', 'new york', 'usa', 'postdoc', 'experience', 'training'], a: "Postdoctoral training: UAEU, Al-Ain (2023–present) and Memorial Sloan Kettering Cancer Center (MSKCC), New York City (2022–2023)." },
  { k: ['interest', 'research', 'focus', 'topic'], a: "Research interests: multi-omics data integration, drug design and development, immunoinformatics, next-gen data and metagenomic/microbiome analyses, structure-based bioinformatics, personalised medicine, network and systems biology, and big data analyses." },
  { k: ['skill', 'tool', 'python', 'machine learning', 'ml', 'ai', 'code', 'programming', 'r '], a: "Skills: multi-omics integration and systems biology, machine learning and AI in bioinformatics, metagenomics and microbiome analysis, R/Python scripting, structural bioinformatics, mentoring, grant and manuscript writing, project management, and health informatics." },
  { k: ['education', 'degree', 'phd', 'ph.d', 'thesis', 'qualification', 'study', 'university'], a: "Ph.D. (2021) from the Centre for Interdisciplinary Research in Basic Sciences, JMI University, New Delhi — thesis on network meta-analysis of human gene expression to identify therapeutic targets for tuberculosis. Also M.Phil. (2015), M.Sc. Bioinformatics (2013, Jamia Millia Islamia) and B.Sc. (Hons.) Chemistry (2010, Aligarh Muslim University)." },
  { k: ['grant', 'fellowship', 'award', 'funding', 'icmr', 'dhr', 'young scientist'], a: "Young Scientist Fellowship (PI), Department of Health Research, Govt. of India (04/2019–10/2021, 2.5 years), and Senior Research Fellowship (SRF) from ICMR, awarded in 2019 for 3 years." },
  { k: ['citation', 'h-index', 'index', 'metric', 'cited', 'number of publication', 'how many'], a: "Per Google Scholar: more than 42 journal articles, more than 770 citations, h-index 15 and i10-index 22. He also has 1 book and 3 book chapters." },
  { k: ['publication', 'paper', 'article', 'journal', 'recent', 'latest'], a: "Recent papers include work in npj Precision Oncology (2026), Frontiers in Immunology (2026), Molecular Biomedicine (2026), npj Systems Biology and Applications (2026) and Computational and Structural Biotechnology Journal (2025). See the Publications section — you can search and filter it." },
  { k: ['cancer', 'breast', 'hsp90', 'pancreatic', 'pdac', 'colorectal'], a: "Cancer-related work includes HSP90-associated synthetic lethal targets in breast cancer (npj Precision Oncology, 2026), a pan-cancer systems biology study (CSBJ, 2025), and PDAC and colorectal cancer immunology papers." },
  { k: ['tuberculosis', 'tb', 'infection'], a: "His PhD focused on tuberculosis: network meta-analysis of human gene expression profiles (Infection, Genetics and Evolution, 2021) and an integrative network approach to TB and overlapping non-communicable diseases (Frontiers in Pharmacology, 2022)." },
  { k: ['covid', 'sars', 'vaccine', 'epitope'], a: "He co-designed an epitope-based peptide vaccine against SARS-CoV-2 using a vaccine informatics approach (Briefings in Bioinformatics, 2021)." },
  { k: ['society', 'member'], a: "Life Member of the Bioinformatics and Drug Discovery Society (BIDDS17-133), India." },
  { k: ['contact', 'email', 'phone', 'reach', 'address', 'collaborat'], a: "Email: aftabal@uaeu.ac.ae · Phone: +917 55 599 6324 · College of Medicine and Health Sciences, UAE University, Al Ain, UAE. Use the Contact section to send a message." }
];
const QUICK = ['Current role', 'Research interests', 'Education', 'Grants', 'Citation metrics', 'Contact'];
function chatAdd(t, who) { const d = document.createElement('div'); d.className = 'msg msg-' + who; d.textContent = t; $('#chat-body').appendChild(d); $('#chat-body').scrollTop = 1e6; }
function toggleChat() {
  const w = $('#chat-window'), open = getComputedStyle(w).display === 'none';
  w.style.display = open ? 'flex' : 'none';
  if (open) {
    if (!$('#chat-body').children.length) {
      chatAdd("Hi! I'm Aftab's AI Assistant. Ask me about his research, publications, career, or how to collaborate..", 'bot');
      $('#chat-quick').innerHTML = QUICK.map(q => `<button onclick="quickChat('${q}')">${q}</button>`).join('');
    }
    setTimeout(() => $('#chat-input').focus(), 60);
  }
}
function quickChat(q) { $('#chat-input').value = q; sendChat(); }
function sendChat() {
  const inp = $('#chat-input'), q = inp.value.trim(); if (!q) return;
  chatAdd(q, 'user'); inp.value = '';
  const ql = ' ' + q.toLowerCase() + ' ';
  let best = null, bs = 0;
  KB.forEach(e => { const s = e.k.reduce((n, k) => n + (ql.includes(k) ? k.length : 0), 0); if (s > bs) { bs = s; best = e; } });
  setTimeout(() => chatAdd(best ? best.a : "I'm not sure about that — it isn't covered in the CV. You can email aftabal@uaeu.ac.ae.", 'bot'), 250);
}

/* ---------- light particle background (pauses when hidden / on small screens) ---------- */
function initBg() {
  const c = $('#bg-canvas'), ctx = c.getContext('2d');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let w, h, P = [];
  const size = () => { w = c.width = innerWidth; h = c.height = innerHeight; };
  size(); addEventListener('resize', debounce(size, 200));
  for (let i = 0; i < 60; i++) P.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 });
  const frame = () => {
    if (document.hidden || innerWidth < 900) { requestAnimationFrame(frame); return; }
    ctx.clearRect(0, 0, w, h);
    const dark = document.body.classList.contains('dark');
    const col = dark ? '165,180,252' : '15,118,110';
    P.forEach(p => { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; ctx.fillStyle = `rgba(${col},.35)`; ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 7); ctx.fill(); });
    for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
      const dx = P[i].x - P[j].x, dy = P[i].y - P[j].y, d2 = dx * dx + dy * dy;
      if (d2 < 9025) { ctx.strokeStyle = `rgba(${col},${(1 - Math.sqrt(d2) / 95) * .12})`; ctx.beginPath(); ctx.moveTo(P[i].x, P[i].y); ctx.lineTo(P[j].x, P[j].y); ctx.stroke(); }
    }
    requestAnimationFrame(frame);
  };
  frame();
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  try { if (localStorage.getItem('theme') === 'dark') toggleTheme(); } catch { }
  if ((navigator.hardwareConcurrency || 8) <= 4) document.body.classList.add('low-power');
  renderStatic(); renderPubs(); renderRecent(); renderGallery(); initScroll(); initReveal(); runCounters(); initBg();
});

