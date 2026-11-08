// Общие функции курса: хранилище прогресса, переключение недель и вкладок, озвучка.
// Скрипты подключаются обычными <script>, без модулей, чтобы index.html открывался и двойным кликом.
(function () {
  'use strict';

  window.COURSE = { weeks: [] };

  // ── ХРАНИЛИЩЕ ──
  // localStorage может быть недоступен (приватный режим, file://), тогда прогресс живёт до перезагрузки.
  const PREFIX = 'englishA1.';
  const memory = {};
  window.store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(PREFIX + key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) {
        return key in memory ? memory[key] : fallback;
      }
    },
    set(key, value) {
      memory[key] = value;
      try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch (e) { /* без сохранения */ }
    },
  };

  // ── НАВИГАЦИЯ ──
  window.showWeek = function (n) {
    document.querySelectorAll('.week-panel').forEach((p) => p.classList.toggle('active', p.id === 'wpanel' + n));
    document.querySelectorAll('.wbtn').forEach((b) => b.classList.toggle('active', b.id === 'wbtn' + n));
    const btn = document.getElementById('wbtn' + n);
    if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    store.set('week', n);
    if (location.hash !== '#week-' + n) history.replaceState(null, '', '#week-' + n);
  };

  window.goW = function (n, tabId) {
    const panel = document.getElementById('wpanel' + n);
    if (!panel) return;
    panel.querySelectorAll('.tab').forEach((t) => t.classList.toggle('active', t.id === `W${n}tab-${tabId}`));
    panel.querySelectorAll('.week-inner-nav button').forEach((b) => b.classList.toggle('active', b.dataset.tab === tabId));
  };

  // ── ОЗВУЧКА ──
  // Голос выбирается в порядке en-GB → en-US → любой английский.
  const PREFERRED_LANGS = ['en-gb', 'en-us'];
  // Если фраза не начала звучать за это время, синтезатор считается зависшим.
  // Сетевым голосам (Google …) нужно больше: первый запрос к серверу идёт 2–4 секунды.
  const START_TIMEOUT_LOCAL = 2000;
  const START_TIMEOUT_NETWORK = 5000;
  // Chrome молча теряет фразу, отправленную сразу после cancel() (проверено с голосами Google):
  // новая фраза уходит с небольшой паузой.
  const CANCEL_GAP = 120;
  let voice = null;
  // Текущая фраза. Ссылка на неё ещё и не даёт сборщику мусора удалить utterance —
  // иначе Chrome не присылает end и считает, что речь продолжается.
  let active = null;
  let pendingTimer = null;

  const supported = () => 'speechSynthesis' in window;
  const langOf = (v) => v.lang.replace('_', '-').toLowerCase();

  // Локальный голос надёжнее сетевого: отвечает сразу и без интернета.
  function pickVoice() {
    const voices = speechSynthesis.getVoices();
    const candidates = PREFERRED_LANGS.map((lang) => (v) => langOf(v) === lang).concat((v) => langOf(v).startsWith('en'));
    for (const local of [true, false]) {
      for (const matches of candidates) {
        const found = voices.find((v) => matches(v) && Boolean(v.localService) === local);
        if (found) return found;
      }
    }
    return null;
  }

  // Если синтезатор занят, прерываем его и отправляем фразу после паузы CANCEL_GAP.
  // При быстрых нажатиях прозвучит последняя фраза.
  function cancelThen(run) {
    clearTimeout(pendingTimer);
    if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.cancel();
      pendingTimer = setTimeout(run, CANCEL_GAP);
    } else {
      run();
    }
  }

  // retry — повторная попытка после сбоя: сетевые голоса Chrome (Google …) иногда молча
  // не отвечают, тогда синтезатор сбрасывается и фраза отправляется ещё раз.
  window.speak = function speak(text, element) {
    if (!supported() || !text) return;
    voice = voice || pickVoice();
    cancelThen(() => say(text, element, false));
  };

  function say(text, element, retry) {
    // resume() снимает «залипшую» паузу синтезатора после простоя.
    speechSynthesis.resume();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voice ? voice.lang : 'en-GB';
    if (voice) utterance.voice = voice;
    utterance.rate = 0.85;

    const state = { text, element, utterance, started: false, ended: false };
    active = state;
    if (element) element.classList.add('saying');
    const finish = () => {
      state.ended = true;
      // Подсветку не снимаем, если тот же элемент уже озвучивается новой фразой.
      if (element && (active === state || active.element !== element)) element.classList.remove('saying');
    };
    const again = () => {
      if (retry || active !== state) return;
      active = null;
      clearTimeout(pendingTimer);
      speechSynthesis.cancel();
      pendingTimer = setTimeout(() => say(text, element, true), CANCEL_GAP);
    };

    utterance.addEventListener('start', () => { state.started = true; });
    utterance.addEventListener('end', finish);
    utterance.addEventListener('error', (event) => {
      finish();
      // interrupted и canceled — это наш собственный cancel(), а не сбой.
      if (event.error !== 'interrupted' && event.error !== 'canceled') again();
    });
    setTimeout(() => {
      if (state.started || state.ended) return;
      finish();
      again();
    }, voice && !voice.localService ? START_TIMEOUT_NETWORK : START_TIMEOUT_LOCAL);

    speechSynthesis.speak(utterance);
  }

  // Текст для озвучки: без транскрипции [..], русских пояснений и служебных знаков.
  const CYR = /[А-Яа-яЁё]/;
  window.cleanSpeech = function (t) {
    t = (t || '')
      .replace(/\[[^\]]*\]/g, ' ')
      .replace(/\([^)]*[А-Яа-яЁё][^)]*\)/g, ' ')
      .replace(/[«»“”"]/g, '')
      .replace(/_{2,}/g, ' … ')
      .replace(/\s*[·/→=+|]\s*/g, ', ')
      .replace(/^\s*\d+[.)]\s+/, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (!t || CYR.test(t) || !/[A-Za-z]/.test(t)) return '';
    return t;
  };

  // ── НАЖАТИЕ — ОЗВУЧКА ──
  // Озвучивается любой элемент с классом .say; текст берётся из data-say или из содержимого.
  document.addEventListener('click', (event) => {
    const el = event.target.closest('.say');
    if (!el || event.target.closest('button, a, input, textarea, select, label')) return;
    if (window.getSelection && String(window.getSelection()).length > 1) return;
    const text = el.dataset.say || cleanSpeech(el.textContent);
    if (text) speak(text, el);
  });

  if (supported()) {
    const check = () => {
      if (!speechSynthesis.getVoices().length) return;
      voice = pickVoice();
      const note = document.getElementById('speech-note');
      if (note) note.hidden = Boolean(voice);
    };
    check();
    speechSynthesis.addEventListener('voiceschanged', check);
  }
})();
