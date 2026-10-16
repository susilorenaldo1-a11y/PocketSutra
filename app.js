const SUTRAS = {
  heart: {
    id: 'heart',
    short: 'Heart',
    title: '般若波羅蜜多心經',
    titlePinyin: 'bō rě bō luó mì duō xīn jīng',
    titleMeaning: 'Sutra Hati Prajnaparamita',
    verses: [
      { h: '觀自在菩薩 行深般若波羅蜜多時', p: 'guān zì zài pú sà, xíng shēn bō rě bō luó mì duō shí', l: 'Kuan Ce Cai Phu Sa, Heng Cim Po Jia Po Lo Mit To Si', m: 'Ketika Yang Mulia Bodhisattva Avalokitesvara mempraktikkan Prajna Paramita secara tekun dan mendalam.' },
      { h: '照見五蘊皆空 度一切苦厄 舍利子', p: 'zhào jiàn wǔ yùn jiē kōng, dù yī qiè kǔ è, shè lì zǐ', l: '', m: 'Beliau mengerti secara hakiki bahwa panca skandha manusia senantiasa berubah. Dengan pencerahan demikian Beliau dapat mengatasi semua penderitaan. Oh, Sariputra!' },
      { h: '色不異空 空不異色 色即是空 空即是色', p: 'sè bù yì kōng, kōng bù yì sè, sè jí shì kōng, kōng jí shì sè', l: '', m: 'Setiap benda/rupa adalah identik dengan sifat kesunyataan. Sebaliknya sifat kesunyataan ini identik dengan benda/rupa yang relevan dengannya. Semua benda/rupa adalah perwujudan dari sifat kesunyataan, sifat kesunyataan senantiasa menyertai benda/rupanya.' },
      { h: '受想行識 亦復如是 舍利子 是諸法空相', p: 'shòu xiǎng xíng shí, yì fù rú shì, shè lì zǐ, shì zhū fǎ kōng xiàng', l: '', m: 'Demikian pula yang terjadi dengan vedana (perasaan), samjna (pikiran), samskara (karsa), dan vijnana (kesadaran). Oh, Sariputra! Kesunyataan dari seisi alam semesta' },
      { h: '不生不滅 不垢不淨 不增不減', p: 'bù shēng bù miè, bù gòu bù jìng, bù zēng bù jiǎn', l: '', m: 'adalah tiada kelahiran dan kematian, tiada pertentangan yang awam dan suci, tiada penambahan dan pengurangan dalam kondisi apa pun.' },
      { h: '是故空中無色 無受想行識', p: 'shì gù kōng zhōng wú sè, wú shòu xiǎng xíng shí', l: '', m: 'Oleh karena itu, di dalam kesunyataan tiada perwujudan, tiada permainan perasaan, percerapan, tindakan, alam bawah kesadaran' },
      { h: '無眼耳鼻舌身意 無色聲香味觸法', p: 'wú yǎn ěr bí shé shēn yì, wú sè shēng xiāng wèi chù fǎ', l: '', m: 'tiada godaan mata, telinga, hidung, lidah, jasmani, dan pikiran. Tiada terpikat oleh objek penglihatan, pendengaran, penciuman, cita rasa, sentuhan.' },
      { h: '無眼界 乃至無意識界', p: 'wú yǎn jiè, nǎi zhì wú yì shí jiè', l: '', m: 'Tiada batas pandangan, tiada batas alam bawah kesadaran.' },
      { h: '無無明 亦無無明盡 乃至無老死 亦無老死盡', p: 'wú wú míng, yì wú wú míng jìn, nǎi zhì wú lǎo sǐ, yì wú lǎo sǐ jìn', l: '', m: 'Tiada avidya/kegelapan batin, tiada lenyapnya kegelapan batin, tiada usia tua dan kematian, sampai akhir dari usia tua dan kematian.' },
      { h: '無苦集滅道 無智亦無得', p: 'wú kǔ jí miè dào, wú zhì yì wú dé', l: '', m: 'Tiada derita, asal mula derita, akhir derita, dan jalan pencerahan; tiada kebijaksanaan, tiada pencapaian.' },
      { h: '以無所得故 菩提薩埵 依般若波羅蜜多故', p: 'yǐ wú suǒ dé gù, pú tí sà duǒ, yī bō rě bō luó mì duō gù', l: '', m: 'Sesungguhnya, tiada sesuatu yang dicapai, oleh karena pengertian ini, maka Sang Bodhisattva melatih dirinya mengikuti Prajna Paramita.' },
      { h: '心無罣礙 無罣礙故 無有恐怖 遠離顛倒夢想', p: 'xīn wú guà ài, wú guà ài gù, wú yǒu kǒng bù, yuǎn lí diān dǎo mèng xiǎng', l: '', m: 'Jika hati terbebas, tiada beban pikiran, maka tidak akan rasa ketakutan, menjauhi cara berpikir irasional atau berkhayalan' },
      { h: '究竟涅槃 三世諸佛 依般若波羅蜜多故', p: 'jiū jìng niè pán, sān shì zhū fó, yī bō rě bō luó mì duō gù', l: '', m: 'dan berakhir mencapai nirvana. Semua Hyang Buddha pada waktu dahulu, sekarang dan mendatang, karena telah mempraktikkan Prajna Paramita,' },
      { h: '得阿耨多羅三藐三菩提 故知般若波羅蜜多', p: 'dé ā nòu duō luó sān miǎo sān pú tí, gù zhī bō rě bō luó mì duō', l: '', m: 'maka mencapai Anuttara Samyaksambuddha (pencerahan sempurna). Karena itu, Prajna Paramita sudah jelas merupakan maha mantra sakti,' },
      { h: '是大神咒 是大明咒 是無上咒 是無等等咒', p: 'shì dà shén zhòu, shì dà míng zhòu, shì wú shàng zhòu, shì wú děng děng zhòu', l: '', m: 'maha mantra pencerahan, mantra yang teragung, mantra tanpa bandingan' },
      { h: '能除一切苦 真實不虛 故說般若波羅蜜多咒', p: 'néng chú yī qiè kǔ, zhēn shí bù xū, gù shuō bō rě bō luó mì duō zhòu', l: '', m: 'yang dapat melenyapkan segala penderitaan; sungguh benar dan tidak palsu. Karenanya, mari kita melafal dan mengamalkan mantra Prajna Paramita' },
      { h: '即說咒曰 揭諦揭諦 波羅揭諦', p: 'jí shuō zhòu yuē, jiē dì jiē dì, bō luó jiē dì', l: '', m: 'seperti ini; Pergilah pergilah, melewati semua dukkha,' },
      { h: '波羅僧揭諦 菩提薩婆訶', p: 'bō luó sēng jiē dì, pú tí sà pó hē', l: '', m: 'bersama-sama menyeberangi mencapai pencerahan.' },
      { h: '般若波羅蜜多心經', p: 'bō rě bō luó mì duō xīn jīng', l: '', m: 'Sutra Hati Prajnaparamita.' }
    ]
  },
  mile: {
    id: 'mile',
    short: 'Mi Le',
    title: '彌勒救苦真經',
    titlePinyin: 'mí lè jiù kǔ zhēn jīng',
    titleMeaning: 'Sutra Keselamatan Maitreya',
    verses: [
      { h: '〔Ayat 1 — teks akan diisi〕', p: '(pinyin)', l: '(lafal)', m: 'PLACEHOLDER — isi dengan teks 彌勒救苦真經 ayat 1.' },
      { h: '〔Ayat 2 — teks akan diisi〕', p: '(pinyin)', l: '(lafal)', m: 'PLACEHOLDER — isi dengan teks 彌勒救苦真經 ayat 2.' },
      { h: '〔Ayat 3 — teks akan diisi〕', p: '(pinyin)', l: '(lafal)', m: 'PLACEHOLDER — isi dengan teks 彌勒救苦真經 ayat 3.' }
    ]
  },
  baixiao: {
    id: 'baixiao',
    short: 'Bai Xiao',
    title: '百孝經',
    titlePinyin: 'bǎi xiào jīng',
    titleMeaning: 'Sutra Seratus Bakti',
    verses: [
      { h: '〔Ayat 1 — teks akan diisi〕', p: '(pinyin)', l: '(lafal)', m: 'PLACEHOLDER — isi dengan teks 百孝經 ayat 1.' },
      { h: '〔Ayat 2 — teks akan diisi〕', p: '(pinyin)', l: '(lafal)', m: 'PLACEHOLDER — isi dengan teks 百孝經 ayat 2.' },
      { h: '〔Ayat 3 — teks akan diisi〕', p: '(pinyin)', l: '(lafal)', m: 'PLACEHOLDER — isi dengan teks 百孝經 ayat 3.' }
    ]
  }
};

const I18N = {
  en: {
    allTime: 'All-time Recitations',
    view: 'View',
    show: 'Show',
    hanzi: 'Hanzi',
    pinyin: 'Pinyin',
    lafal: 'Lafal',
    meaning: 'Meaning',
    scrollSpeed: 'Auto-scroll speed',
    haptics: 'Haptic feedback',
    autoScroll: 'Auto-Scroll',
    counter: 'Counter',
    save: 'Save Session',
    log: 'Session Log',
    undo: 'Undo',
    reset: 'Reset',
    tap: 'Tap',
    install: '⬇ Add to Home Screen',
    saveTitle: 'Save Session',
    saveSummary: 'This session',
    cancel: 'Cancel',
    saveConfirm: 'Save',
    clearAll: 'Clear All',
    close: 'Close',
    emptyLog: 'No sessions logged yet.'
  },
  id: {
    allTime: 'Jumlah Semua Waktu',
    view: 'Tampilan',
    show: 'Tampilkan',
    hanzi: 'Hanzi',
    pinyin: 'Pinyin',
    lafal: 'Lafal',
    meaning: 'Arti',
    scrollSpeed: 'Kecepatan Auto-Scroll',
    haptics: 'Getaran (haptic)',
    autoScroll: 'Auto-Scroll',
    counter: 'Hitung',
    save: 'Simpan Sesi',
    log: 'Riwayat',
    undo: 'Undo',
    reset: 'Reset',
    tap: 'Ketuk',
    install: '⬇ Tambah ke Layar Utama',
    saveTitle: 'Simpan Sesi',
    saveSummary: 'Sesi ini',
    cancel: 'Batal',
    saveConfirm: 'Simpan',
    clearAll: 'Hapus Semua',
    close: 'Tutup',
    emptyLog: 'Belum ada sesi tersimpan.'
  }
};

const STORAGE_KEY = 'pocket_sutra_data_v1';

const DEFAULT_STATE = {
  sutra: 'heart',
  lang: 'id',
  theme: 'dark',
  fontSize: 20,
  showHanzi: true,
  showPinyin: true,
  showLafal: true,
  showMeaning: true,
  autoScroll: false,
  scrollSpeed: 2,
  haptics: true,
  sessions: { heart: 0, mile: 0, baixiao: 0 },
  cumulativeTotal: 0,
  logs: []
};

const SPEED_STEPS = [0.4, 0.8, 1.4, 2.2, 3.2];

let state = loadState();
let scrollTimer = null;

function loadState() {
  const s = Object.assign({}, DEFAULT_STATE, { sessions: Object.assign({}, DEFAULT_STATE.sessions) });
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      Object.assign(s, parsed);
      s.sessions = Object.assign({}, DEFAULT_STATE.sessions, parsed.sessions || {});
    }
  } catch (e) {
    console.warn('Failed to load state', e);
  }
  return s;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save state', e);
  }
}

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
}

function currentCount() {
  return state.sessions[state.sutra] || 0;
}

function setCount(n) {
  state.sessions[state.sutra] = n;
}

function pad3(n) {
  return String(Math.max(0, n)).padStart(3, '0');
}

function vibrate(ms) {
  if (state.haptics && navigator.vibrate) {
    try { navigator.vibrate(ms); } catch (e) { /* ignore */ }
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) +
    ' ' + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  const langBtn = document.getElementById('langBtn');
  langBtn.textContent = state.lang === 'id' ? 'ID' : 'EN';
}

function applyTheme() {
  document.querySelector('.app').dataset.theme = state.theme;
  document.getElementById('themeBtn').textContent = state.theme === 'dark' ? '🌙' : '☀️';
}

function renderCounter() {
  const n = currentCount();
  document.getElementById('tapCount').textContent = n;
  document.getElementById('counterValue').textContent = pad3(n);
  document.getElementById('cumulativeTotal').textContent = state.cumulativeTotal;
}

function renderTabs() {
  document.querySelectorAll('.sutra-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.sutra === state.sutra);
  });
}

function renderViewPanel() {
  document.querySelectorAll('.chip').forEach((chip) => {
    const line = chip.dataset.line;
    const on = {
      hanzi: state.showHanzi,
      pinyin: state.showPinyin,
      lafal: state.showLafal,
      meaning: state.showMeaning
    }[line];
    chip.classList.toggle('active', on);
  });
  document.getElementById('speedRange').value = state.scrollSpeed;
  document.getElementById('speedValue').textContent = state.scrollSpeed;
  document.getElementById('hapticToggle').checked = state.haptics;
}

function renderSutra() {
  const data = SUTRAS[state.sutra];
  document.getElementById('sutraTitle').textContent = data.title;
  document.getElementById('sutraSubtitle').textContent = data.titlePinyin + ' — ' + data.titleMeaning;

  const body = document.getElementById('sutraBody');
  body.style.fontSize = state.fontSize + 'px';

  body.innerHTML = data.verses.map((v) => {
    const hanzi = state.showHanzi && v.h ? `<div class="ln hanzi"><span class="lbl">${t('hanzi')}</span>${escapeHtml(v.h)}</div>` : '';
    const pinyin = state.showPinyin && v.p ? `<div class="ln pinyin"><span class="lbl">${t('pinyin')}</span>${escapeHtml(v.p)}</div>` : '';
    const lafal = state.showLafal && v.l ? `<div class="ln lafal"><span class="lbl">${t('lafal')}</span>${escapeHtml(v.l)}</div>` : '';
    const meaning = state.showMeaning && v.m ? `<div class="ln meaning"><span class="lbl">${t('meaning')}</span>${escapeHtml(v.m)}</div>` : '';
    return `<div class="verse">${hanzi}${pinyin}${lafal}${meaning}</div>`;
  }).join('');
}

function renderAll() {
  renderTabs();
  renderCounter();
  renderViewPanel();
  renderSutra();
}

function renderLog() {
  const list = document.getElementById('logList');
  if (state.logs.length === 0) {
    list.innerHTML = `<div class="log-empty">${t('emptyLog')}</div>`;
    return;
  }
  list.innerHTML = state.logs.map((log, i) => {
    const sutra = SUTRAS[log.sutra];
    const sutraLabel = sutra ? sutra.short : (log.sutra || '?');
    const note = log.note ? `<div class="log-note">${escapeHtml(log.note)}</div>` : '';
    return `
      <div class="log-entry">
        <div class="log-top">
          <span class="log-count">${log.count}</span>
          <span class="log-sutra">${escapeHtml(sutraLabel)}</span>
          <span class="log-date">${formatDate(log.date)}</span>
          <button class="log-del" data-index="${i}" title="Delete">🗑</button>
        </div>
        ${note}
      </div>`;
  }).join('');

  list.querySelectorAll('.log-del').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index, 10);
      state.cumulativeTotal = Math.max(0, state.cumulativeTotal - state.logs[idx].count);
      state.logs.splice(idx, 1);
      saveState();
      renderCounter();
      renderLog();
    });
  });
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

/* Auto-scroll */
function startAutoScroll() {
  if (scrollTimer) return;
  state.autoScroll = true;
  saveState();
  scrollTimer = setInterval(() => {
    const r = document.getElementById('reader');
    r.scrollTop += SPEED_STEPS[state.scrollSpeed - 1] || 0.8;
    if (r.scrollTop + r.clientHeight >= r.scrollHeight - 4) {
      stopAutoScroll();
    }
  }, 40);
  updateAutoScrollBtn();
}

function stopAutoScroll() {
  if (scrollTimer) {
    clearInterval(scrollTimer);
    scrollTimer = null;
  }
  state.autoScroll = false;
  saveState();
  updateAutoScrollBtn();
}

function updateAutoScrollBtn() {
  const btn = document.getElementById('autoScrollBtn');
  const icon = document.getElementById('autoScrollIcon');
  btn.classList.toggle('running', state.autoScroll);
  icon.textContent = state.autoScroll ? '⏸' : '▶';
}

function init() {
  applyI18n();
  applyTheme();
  renderAll();
  updateAutoScrollBtn();

  document.getElementById('tapBtn').addEventListener('click', () => {
    setCount(currentCount() + 1);
    vibrate(15);
    saveState();
    renderCounter();
  });

  document.getElementById('undoBtn').addEventListener('click', () => {
    if (currentCount() > 0) {
      setCount(currentCount() - 1);
      saveState();
      renderCounter();
    }
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    setCount(0);
    saveState();
    renderCounter();
  });

  document.querySelectorAll('.sutra-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      state.sutra = tab.dataset.sutra;
      stopAutoScroll();
      const reader = document.getElementById('reader');
      reader.scrollTop = 0;
      saveState();
      renderAll();
    });
  });

  document.getElementById('fontMinus').addEventListener('click', () => {
    state.fontSize = Math.max(14, state.fontSize - 2);
    saveState();
    renderSutra();
  });

  document.getElementById('fontPlus').addEventListener('click', () => {
    state.fontSize = Math.min(40, state.fontSize + 2);
    saveState();
    renderSutra();
  });

  document.getElementById('themeBtn').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    saveState();
    applyTheme();
  });

  document.getElementById('langBtn').addEventListener('click', () => {
    state.lang = state.lang === 'id' ? 'en' : 'id';
    saveState();
    applyI18n();
    renderSutra();
    renderLog();
  });

  document.getElementById('viewBtn').addEventListener('click', () => {
    const panel = document.getElementById('viewPanel');
    panel.hidden = !panel.hidden;
  });

  document.querySelectorAll('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const line = chip.dataset.line;
      if (line === 'hanzi') state.showHanzi = !state.showHanzi;
      else if (line === 'pinyin') state.showPinyin = !state.showPinyin;
      else if (line === 'lafal') state.showLafal = !state.showLafal;
      else if (line === 'meaning') state.showMeaning = !state.showMeaning;
      saveState();
      renderViewPanel();
      renderSutra();
    });
  });

  document.getElementById('speedRange').addEventListener('input', (e) => {
    state.scrollSpeed = parseInt(e.target.value, 10);
    document.getElementById('speedValue').textContent = state.scrollSpeed;
    saveState();
  });

  document.getElementById('hapticToggle').addEventListener('change', (e) => {
    state.haptics = e.target.checked;
    saveState();
  });

  document.getElementById('autoScrollBtn').addEventListener('click', () => {
    if (state.autoScroll) stopAutoScroll();
    else startAutoScroll();
  });

  document.getElementById('saveSessionBtn').addEventListener('click', () => {
    if (currentCount() === 0) return;
    document.getElementById('saveValue').textContent = currentCount();
    document.getElementById('noteInput').value = '';
    openModal('saveModal');
  });

  document.getElementById('confirmSaveBtn').addEventListener('click', () => {
    const note = document.getElementById('noteInput').value.trim();
    state.logs.push({
      count: currentCount(),
      sutra: state.sutra,
      note: note || null,
      date: Date.now()
    });
    state.cumulativeTotal += currentCount();
    setCount(0);
    saveState();
    renderCounter();
    closeModal('saveModal');
  });

  document.getElementById('cancelSaveBtn').addEventListener('click', () => closeModal('saveModal'));
  document.getElementById('closeSaveBtn').addEventListener('click', () => closeModal('saveModal'));

  document.getElementById('viewLogBtn').addEventListener('click', () => {
    renderLog();
    openModal('logModal');
  });

  document.getElementById('closeLogBtn').addEventListener('click', () => closeModal('logModal'));
  document.getElementById('closeLogBtn2').addEventListener('click', () => closeModal('logModal'));

  document.getElementById('clearLogBtn').addEventListener('click', () => {
    state.logs = [];
    state.cumulativeTotal = 0;
    saveState();
    renderCounter();
    renderLog();
  });

  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });
}

document.addEventListener('DOMContentLoaded', init);

/* PWA: service worker registration */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((err) => {
      console.warn('Service worker registration failed', err);
    });
  });
}

/* PWA: install prompt */
let deferredPrompt = null;
const installBtn = document.getElementById('installBtn');

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.textContent = t('install');
  installBtn.style.display = 'inline-block';
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.style.display = 'none';
  } else if (isIOS()) {
    alert('To install on iPhone/iPad:\n1. Tap the Share button\n2. Choose "Add to Home Screen"');
  } else {
    alert('Use your browser menu and choose "Install app" or "Add to Home Screen".');
  }
});

window.addEventListener('appinstalled', () => {
  installBtn.style.display = 'none';
});

if (isIOS() && !isStandalone()) {
  installBtn.textContent = t('install');
  installBtn.style.display = 'inline-block';
}
