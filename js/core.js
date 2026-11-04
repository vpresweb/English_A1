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
  const START_TIMEOUT = 2000;
  let voice = null;
  // Текущая фраза. Ссылка на неё ещё и не даёт сборщику мусора удалить utterance —
  // иначе Chrome не присылает end и считает, что речь продолжается.
  let active = null;

  const supported = () => 'speechSynthesis' in window;
  const langOf = (v) => v.lang.replace('_', '-').toLowerCase();

  function pickVoice() {
    const voices = speechSynthesis.getVoices();
    for (const lang of PREFERRED_LANGS) {
      const found = voices.find((v) => langOf(v) === lang);
      if (found) return found;
    }
    return voices.find((v) => langOf(v).startsWith('en')) || null;
  }

  // retry — повторная попытка после сбоя: сетевые голоса Chrome (Google …) иногда молча
  // не отвечают, тогда синтезатор сбрасывается и фраза отправляется ещё раз.
  window.speak = function speak(text, element, retry) {
    if (!supported() || !text) return;
    voice = voice || pickVoice();
    if (speechSynthesis.speaking || speechSynthesis.pending) speechSynthesis.cancel();
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
      speechSynthesis.cancel();
      speak(text, element, true);
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
    }, START_TIMEOUT);

    speechSynthesis.speak(utterance);
  };

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
