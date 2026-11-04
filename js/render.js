// Сборка страниц курса из данных недель (js/week-XX.js) и интерактив: тесты, дневник, план, прогресс.
// Английский текст в разметке помечается <span class="en">…</span> — такие элементы озвучиваются по нажатию.
(function () {
  'use strict';

  const PASS = 0.6;
  const DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const say = (text) => `data-say="${attr(cleanSpeech(text))}"`;

  // ── БЛОКИ ──
  // Каждый блок — { t: тип, ... }. Функция получает блок и контекст { n, tab, key } и возвращает HTML.
  const blocks = {
    label: (b) => `<div class="section-label"${b.top ? ' style="margin-top:1.5rem"' : ''}>${b.text}</div>`,

    card: (b) => `<div class="card${b.color ? ' card-' + b.color : ''}">${b.title ? `<h3>${b.title}</h3>` : ''}${b.html}</div>`,

    steps: (b) => `<div class="steps-grid">${b.items.map((s) => `
      <div class="step-card"><div class="step-num">${s.num}</div><h3>${s.title}</h3><p>${s.text}</p></div>`).join('')}</div>`,

    sounds: (b) => b.items.map((s) => `
      <div class="sound-card">
        <div class="sound-symbol">${s.sym}</div>
        <div class="sound-info">
          <h4>${s.title}${s.badge ? ` <span class="ep-badge">${s.badge}</span>` : ''}</h4>
          <p>${s.text}</p>
          <span class="sound-example say" ${say(s.say || s.ex)}>${s.ex}</span>
        </div>
        <button class="listen-btn" type="button" ${say(s.say || s.ex)} aria-label="Прослушать">▶</button>
      </div>`).join(''),

    vocab: (b) => `<div class="table-wrap"><table class="vocab-table">
      <thead><tr><th>English</th><th>IPA (UK)</th><th>Русский</th><th>Заметка</th></tr></thead>
      <tbody>${b.items.map((w) => `<tr>
        <td><span class="pt-word say">${w.en}</span></td>
        <td><span class="ipa-cell">${w.ipa || ''}</span></td>
        <td class="ru-cell">${w.ru}</td>
        <td class="note-cell">${w.note || ''}</td></tr>`).join('')}</tbody></table></div>`,

    grid: (b) => `<div class="vocab-grid">${b.items.map((w) => `
      <div class="vocab-card say" ${say(w.say || w.en)}>
        ${w.icon ? `<span class="vc-icon">${w.icon}</span>` : ''}
        <span class="vc-pt">${w.en}</span>
        ${w.ipa ? `<span class="vc-ipa">${w.ipa}</span>` : ''}
        <span class="vc-ru">${w.ru}</span>
        ${w.ex ? `<span class="vc-ex">${w.ex}</span>` : ''}
      </div>`).join('')}</div>`,

    flip: (b) => `<div class="cards-row">${b.items.map((c) => `
      <div class="flip-card" ${say(c.en)}><div class="flip-inner">
        <div class="flip-front">${c.en}<small>${c.ipa || ''}</small></div>
        <div class="flip-back"><strong>${c.ru}</strong></div>
      </div></div>`).join('')}</div>`,

    numbers: (b) => `<div class="numbers-grid">${b.items.map((d) => `
      <div class="num-cell" ${say(d.say || d.en)}><span class="n">${d.n}</span>${d.en ? `<span class="pt-n">${d.en}</span>` : ''}
        <span class="ipa-n">${d.ipa || ''}</span><span class="ru-n">${d.ru}</span></div>`).join('')}</div>`,

    dialogue: (b) => `<div class="dialogue-box">${b.lines.map((l) => `
      <div class="d-line${l.right ? ' right' : ''}">
        <div class="d-avatar">${l.av || (l.right ? '👩' : '🧑')}</div>
        <div class="d-bubble say" ${say(l.en)}>
          <span class="d-pt">${l.en}</span>
          ${l.ipa ? `<span class="d-ipa">${l.ipa}</span>` : ''}
          <span class="d-ru">${l.ru}</span>
        </div>
      </div>`).join('')}</div>`,

    table: (b) => `<div class="table-wrap"><table class="${b.cls || 'verb-table'}">
      <thead><tr>${b.head.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`,

    compare: (b) => `<div class="comparison">${b.cols.map((c) => `
      <div class="comp-col${c.cls ? ' ' + c.cls : ''}"><h4>${c.title}</h4><ul>${c.items.map((i) => `<li>${i}</li>`).join('')}</ul></div>`).join('')}</div>`,

    exercise: (b, ctx) => b.items.map((e, i) => {
      const id = `${ctx.key}-ex${i}`;
      return `<div class="exercise-box">
        <h3>${e.title}</h3>
        <div class="exercise-prompt">${e.prompt}</div>
        <textarea class="exercise-input" data-text="${id}" placeholder="${attr(e.placeholder || '')}"></textarea>
        <br><button class="btn btn-blue" type="button" data-check="${id}">${e.button || 'Проверить'}</button>
        <div class="feedback" id="fb-${id}"></div>
      </div>`;
    }).join(''),

    journal: (b, ctx) => b.items.map((e, i) => {
      const id = `${ctx.key}-j${i}`;
      return `<div class="journal-prompt">
        <span class="label">${e.label}</span>
        <p>${e.prompt}</p>
        <textarea class="journal-area" data-text="${id}" placeholder="${attr(e.placeholder || '')}"></textarea>
        <br><button class="btn btn-gold" type="button" data-check="${id}">${e.button || 'Получить обратную связь'}</button>
        <div class="response-box" id="fb-${id}"></div>
      </div>`;
    }).join(''),

    writing: (b, ctx) => b.items.map((e, i) => {
      const id = `${ctx.key}-w${i}`;
      return `<div class="writing-box">
        <h3>${e.title}</h3>
        <div class="writing-prompt">${e.prompt}</div>
        <textarea class="writing-area" data-text="${id}" placeholder="${attr(e.placeholder || '')}"></textarea>
        <div class="criteria"><strong>Критерии:</strong> ${e.criteria}</div>
        <br><button class="btn btn-gold" type="button" data-check="${id}">Проверить</button>
        <div class="quiz-feedback" id="fb-${id}"></div>
      </div>`;
    }).join(''),

    quiz: (b, ctx) => {
      const id = `${ctx.key}-${b.id || 'quiz'}`;
      return `<div class="quiz-score" id="score-${id}"></div>
        <div class="quiz" data-quiz="${id}"></div>
        <button class="btn btn-outline" type="button" data-reset="${id}" hidden>↺ Начать заново</button>`;
    },

    plan: (b, ctx) => `
      <div class="card card-gold"><h3>Цель недели</h3><p>${b.goal}</p></div>
      <div class="section-label">Программа по дням · нажмите на день, чтобы отметить его</div>
      <div class="day-plan">${b.days.map((d, i) => `
        <div class="day-line" data-day="${ctx.n}-${i}">
          <div class="day-dot-col"><div class="day-dot"></div>${i < b.days.length - 1 ? '<div class="day-dot-line"></div>' : ''}</div>
          <div class="day-content">
            <div class="day-header"><span class="day-name">${DAY_NAMES[i]}</span><span class="day-title">${d.title}</span></div>
            <ul class="day-tasks">${d.tasks.map((t) => `<li>${t}</li>`).join('')}</ul>
          </div>
        </div>`).join('')}</div>
      <div class="section-label" style="margin-top:1rem">Прогресс недели</div>
      <div class="card" data-progress="${ctx.n}"></div>`,

    summary: (b) => `<div class="summary-grid">${b.items.map((s, i) => `
      <div class="summary-card" data-summary="${i + 1}"><span class="summary-week">Неделя ${i + 1}</span>
        <span class="summary-title">${s.title}</span><span class="summary-topics">${s.topics}</span></div>`).join('')}</div>`,

    roadmap: (b) => `<div class="roadmap">${b.items.map((r) => `
      <div class="road-item"><span class="road-level">${r.level}</span>
        <div class="road-content"><h4>${r.title}</h4><p>${r.text}</p><span class="road-time">${r.time}</span></div></div>`).join('')}</div>`,

    selfcheck: (b, ctx) => `<div class="card selfcheck">${b.items.map((c, i) => `
      <label class="check-row"><input type="checkbox" data-check-item="${ctx.key}-sc${i}"> <span>${c}</span></label>`).join('')}
      <p class="check-total" id="sc-${ctx.key}"></p></div>`,

    result: () => `<div class="result-box show">
        <div class="result-score" id="res-score">–</div>
        <div class="result-label" id="res-label">Правильных ответов</div>
        <div class="result-level" id="res-level">Пройдите оба теста</div>
        <p class="result-comment" id="res-comment"></p>
      </div>
      <div class="section-label" style="margin-top:1.5rem">Тесты по неделям</div>
      <div class="card" id="res-weeks"></div>`,
  };

  // ── ДАННЫЕ ИНТЕРАКТИВА ──
  const quizzes = {};   // id → { items, week }
  const checks = {};    // id → { item, kind, week }

  function collect(week) {
    week.tabs.forEach((tab) => tab.blocks.forEach((b) => {
      const key = `W${week.n}-${tab.id}`;
      if (b.t === 'quiz') quizzes[`${key}-${b.id || 'quiz'}`] = { items: b.items, week: week.n, exam: b.exam };
      if (b.t === 'exercise') b.items.forEach((e, i) => { checks[`${key}-ex${i}`] = { item: e, kind: 'exercise', week: week.n }; });
      if (b.t === 'journal') b.items.forEach((e, i) => { checks[`${key}-j${i}`] = { item: e, kind: 'journal', week: week.n }; });
      if (b.t === 'writing') b.items.forEach((e, i) => { checks[`${key}-w${i}`] = { item: e, kind: 'writing', week: week.n }; });
    }));
  }

  // ── ТЕСТЫ ──
  function renderQuiz(id) {
    const quiz = quizzes[id];
    const box = document.querySelector(`[data-quiz="${id}"]`);
    const answers = store.get('quiz.' + id, null) || new Array(quiz.items.length).fill(null);
    box.innerHTML = quiz.items.map((q, i) => `
      <div class="quiz-box">
        <div class="q">${i + 1}. ${q.q}</div>
        <div class="options">${q.opts.map((o, j) => `<button class="opt" type="button" data-answer="${id}" data-q="${i}" data-o="${j}">${o}</button>`).join('')}</div>
        <div class="quiz-feedback"></div>
      </div>`).join('');
    answers.forEach((a, i) => { if (a !== null) showAnswer(id, i, a); });
    updateScore(id, answers);
  }

  function showAnswer(id, qi, oi) {
    const q = quizzes[id].items[qi];
    const box = document.querySelector(`[data-quiz="${id}"]`).children[qi];
    box.querySelectorAll('.opt').forEach((o, j) => {
      o.classList.add('disabled');
      o.disabled = true;
      if (j === q.ans) o.classList.add('correct');
      else if (j === oi) o.classList.add('wrong');
    });
    const fb = box.querySelector('.quiz-feedback');
    fb.innerHTML = (oi === q.ans ? '✓ Верно! ' : '✗ Неверно. ') + q.exp;
    fb.className = 'quiz-feedback show ' + (oi === q.ans ? 'ok' : 'no');
  }

  function quizResult(id) {
    const quiz = quizzes[id];
    const answers = store.get('quiz.' + id, null);
    if (!answers) return { done: 0, correct: 0, total: quiz.items.length };
    return {
      done: answers.filter((a) => a !== null).length,
      correct: answers.filter((a, i) => a === quiz.items[i].ans).length,
      total: quiz.items.length,
    };
  }

  function updateScore(id) {
    const r = quizResult(id);
    document.getElementById('score-' + id).textContent = `Отвечено: ${r.done} / ${r.total} · Правильно: ${r.correct}`;
    document.querySelector(`[data-reset="${id}"]`).hidden = r.done === 0;
    refresh(quizzes[id].week);
  }

  function answer(id, qi, oi) {
    const quiz = quizzes[id];
    const answers = store.get('quiz.' + id, null) || new Array(quiz.items.length).fill(null);
    if (answers[qi] !== null) return;
    answers[qi] = oi;
    store.set('quiz.' + id, answers);
    showAnswer(id, qi, oi);
    const q = quiz.items[qi];
    if (oi === q.ans) speak(cleanSpeech(q.say || q.q.replace(/_{2,}/, q.opts[q.ans])));
    updateScore(id);
  }

  // ── ПРОВЕРКА ТЕКСТОВ (упражнения, дневник, письмо) ──
  // Обратная связь по ключевым словам: ok — если найдено хотя бы одно, иначе tip.
  function check(id) {
    const { item, kind } = checks[id];
    const text = document.querySelector(`[data-text="${id}"]`).value.trim();
    const fb = document.getElementById('fb-' + id);
    const min = item.min || 20;
    const classes = {
      exercise: ['feedback show', 'good', 'tip'],
      journal: ['response-box show', 'ok', 'info'],
      writing: ['quiz-feedback show', 'ok', 'no'],
    }[kind];
    if (text.length < min) {
      fb.innerHTML = '⚠️ Напишите подробнее — хотя бы 2–3 предложения.';
      fb.className = `${classes[0]} ${classes[2]}`;
      return;
    }
    const lower = text.toLowerCase();
    const hit = !item.keys || item.keys.some((k) => lower.includes(k.toLowerCase()));
    let html = hit ? item.ok : item.tip;
    if (kind === 'writing') {
      const found = (item.keys || []).filter((k) => lower.includes(k.toLowerCase()));
      const words = text.split(/\s+/).filter(Boolean).length;
      html = `Слов: <strong>${words}</strong>${item.keys ? ` · использовано конструкций: <strong>${found.length} из ${item.keys.length}</strong>` : ''}.<br><br>${hit ? item.ok : item.tip}`;
    }
    fb.innerHTML = html;
    fb.className = `${classes[0]} ${hit ? classes[1] : classes[2]}`;
    const done = store.get('done', {});
    done[id] = true;
    store.set('done', done);
    refresh(checks[id].week);
  }

  // ── ПРОГРЕСС ──
  function weekStats(n) {
    const week = COURSE.weeks.find((w) => w.n === n);
    const days = store.get('days', {});
    const plan = week.tabs.flatMap((t) => t.blocks).find((b) => b.t === 'plan');
    const dayCount = plan ? plan.days.length : 0;
    const daysDone = plan ? plan.days.filter((d, i) => days[`${n}-${i}`]).length : 0;
    const quizIds = Object.keys(quizzes).filter((id) => quizzes[id].week === n);
    const q = quizIds.map(quizResult).reduce((a, r) => ({ done: a.done + r.done, correct: a.correct + r.correct, total: a.total + r.total }), { done: 0, correct: 0, total: 0 });
    const checkIds = Object.keys(checks).filter((id) => checks[id].week === n);
    const done = store.get('done', {});
    return { dayCount, daysDone, quiz: q, checks: checkIds.length, checksDone: checkIds.filter((id) => done[id]).length };
  }

  const row = (label, value, total) => {
    const pct = total ? Math.round((value / total) * 100) : 0;
    return `<div class="prog-row"><span class="prog-label">${label}</span><div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div><span class="prog-pct">${total ? value + '/' + total : '–'}</span></div>`;
  };

  function refresh(n) {
    const s = weekStats(n);
    const box = document.querySelector(`[data-progress="${n}"]`);
    if (box) {
      box.innerHTML = row('Дни плана', s.daysDone, s.dayCount)
        + row('Тест: правильно', s.quiz.correct, s.quiz.total)
        + row('Задания Фейнмана', s.checksDone, s.checks)
        + '<p class="prog-note">Прогресс сохраняется в этом браузере.</p>';
    }
    const passed = s.quiz.total && s.quiz.done === s.quiz.total && s.quiz.correct / s.quiz.total >= PASS;
    const btn = document.getElementById('wbtn' + n);
    if (btn) btn.classList.toggle('done', Boolean(passed));
    const summary = document.querySelector(`[data-summary="${n}"]`);
    if (summary) summary.classList.toggle('done', Boolean(passed));
    if (n === 12 || document.getElementById('res-weeks')) refreshResult();
  }

  function refreshResult() {
    const scoreEl = document.getElementById('res-score');
    if (!scoreEl) return;
    const exams = Object.keys(quizzes).filter((id) => quizzes[id].exam);
    const r = exams.map(quizResult).reduce((a, x) => ({ done: a.done + x.done, correct: a.correct + x.correct, total: a.total + x.total }), { done: 0, correct: 0, total: 0 });
    const level = document.getElementById('res-level');
    const comment = document.getElementById('res-comment');
    document.getElementById('res-label').textContent = `Правильных ответов из ${r.total}`;
    if (r.done < r.total) {
      scoreEl.textContent = r.done ? r.correct : '–';
      level.textContent = `Пройдите оба теста · отвечено ${r.done} из ${r.total}`;
      level.className = 'result-level';
      comment.textContent = '';
    } else {
      const pct = r.correct / r.total;
      scoreEl.textContent = r.correct;
      if (pct >= 0.8) {
        level.textContent = 'A1 подтверждён ✓';
        level.className = 'result-level level-pass';
        comment.innerHTML = 'Отличный результат. Можно переходить к A2: Past Continuous, Present Perfect, первое условное. Цель — экзамен <strong>Cambridge A2 Key</strong>.';
      } else if (pct >= PASS) {
        level.textContent = 'A1 пройден';
        level.className = 'result-level level-partial';
        comment.innerHTML = 'Уровень A1 есть, но есть и пробелы. Посмотрите, в каких вопросах ошибки, и повторите эти недели — затем пройдите экзамен заново.';
      } else {
        level.textContent = 'Нужно повторение';
        level.className = 'result-level level-retry';
        comment.innerHTML = 'Пока меньше 60%. Это не провал, а карта пробелов: повторите недели с низким результатом теста и вернитесь к экзамену через неделю.';
      }
    }
    document.getElementById('res-weeks').innerHTML = COURSE.weeks.filter((w) => w.n < 12).map((w) => {
      const s = weekStats(w.n);
      return row(`${w.n}. ${w.title}`, s.quiz.correct, s.quiz.total);
    }).join('');
  }

  function refreshSelfcheck(key) {
    const items = document.querySelectorAll(`[data-check-item^="${key}-sc"]`);
    const checked = [...items].filter((i) => i.checked).length;
    const total = document.getElementById('sc-' + key);
    if (total) total.textContent = `Отмечено: ${checked} из ${items.length}${checked >= Math.ceil(items.length * 0.75) ? ' — говорение на уровне A1 ✓' : ''}`;
  }

  // ── СБОРКА СТРАНИЦЫ ──
  function build() {
    const weeks = COURSE.weeks.sort((a, b) => a.n - b.n);
    weeks.forEach(collect);

    document.getElementById('week-bar').innerHTML = weeks.map((w) =>
      `<button class="wbtn" type="button" id="wbtn${w.n}" title="${attr(w.title)}" onclick="showWeek(${w.n})">Нед.${w.n}</button>`).join('');

    document.getElementById('weeks').innerHTML = weeks.map((w) => `
      <div class="week-panel" id="wpanel${w.n}">
        <nav class="week-inner-nav">${w.tabs.map((t, i) =>
          `<button type="button" class="${i ? '' : 'active'}" data-tab="${t.id}" onclick="goW(${w.n},'${t.id}')">${t.label}</button>`).join('')}</nav>
        <div class="week-main">
          <div class="week-heading"><span class="week-badge">Неделя ${w.n}</span><h2>${w.title}</h2></div>
          ${w.tabs.map((t, i) => `<div class="tab${i ? '' : ' active'}" id="W${w.n}tab-${t.id}">
            ${t.blocks.map((b) => {
              const fn = blocks[b.t];
              if (!fn) throw new Error(`Неделя ${w.n}, вкладка ${t.id}: неизвестный блок ${b.t}`);
              return fn(b, { n: w.n, tab: t.id, key: `W${w.n}-${t.id}` });
            }).join('')}</div>`).join('')}
        </div>
      </div>`).join('');

    // Английский текст в карточках и таблицах — озвучивается.
    document.querySelectorAll('#weeks .en, #weeks .conj, #weeks .pt').forEach((el) => {
      if (cleanSpeech(el.textContent)) el.classList.add('say');
    });

    Object.keys(quizzes).forEach(renderQuiz);

    document.querySelectorAll('[data-text]').forEach((area) => {
      area.value = store.get('text.' + area.dataset.text, '');
      area.addEventListener('input', () => store.set('text.' + area.dataset.text, area.value));
    });

    const days = store.get('days', {});
    document.querySelectorAll('[data-day]').forEach((line) => {
      line.querySelector('.day-dot').classList.toggle('done', Boolean(days[line.dataset.day]));
    });

    document.querySelectorAll('[data-check-item]').forEach((box) => {
      box.checked = Boolean(store.get('sc', {})[box.dataset.checkItem]);
    });
    document.querySelectorAll('.selfcheck').forEach((card) => {
      const first = card.querySelector('[data-check-item]');
      if (first) refreshSelfcheck(first.dataset.checkItem.replace(/-sc\d+$/, ''));
    });

    weeks.forEach((w) => refresh(w.n));

    document.addEventListener('click', (event) => {
      const t = event.target;
      const opt = t.closest('[data-answer]');
      if (opt) return answer(opt.dataset.answer, Number(opt.dataset.q), Number(opt.dataset.o));
      const btn = t.closest('[data-check]');
      if (btn) return check(btn.dataset.check);
      const reset = t.closest('[data-reset]');
      if (reset) {
        store.set('quiz.' + reset.dataset.reset, null);
        renderQuiz(reset.dataset.reset);
        return;
      }
      const flip = t.closest('.flip-card');
      if (flip) {
        flip.classList.toggle('flipped');
        speak(flip.dataset.say, flip);
        return;
      }
      const num = t.closest('.num-cell');
      if (num) {
        num.classList.toggle('revealed');
        speak(num.dataset.say, num);
        return;
      }
      const listen = t.closest('.listen-btn');
      if (listen) return speak(listen.dataset.say, listen.previousElementSibling.querySelector('.sound-example'));
      const day = t.closest('[data-day]');
      if (day) {
        const all = store.get('days', {});
        all[day.dataset.day] = !all[day.dataset.day];
        store.set('days', all);
        day.querySelector('.day-dot').classList.toggle('done', all[day.dataset.day]);
        refresh(Number(day.dataset.day.split('-')[0]));
      }
    });

    document.addEventListener('change', (event) => {
      const box = event.target.closest('[data-check-item]');
      if (!box) return;
      const all = store.get('sc', {});
      all[box.dataset.checkItem] = box.checked;
      store.set('sc', all);
      refreshSelfcheck(box.dataset.checkItem.replace(/-sc\d+$/, ''));
    });

    const fromHash = Number((location.hash.match(/^#week-(\d+)$/) || [])[1]);
    const start = weeks.some((w) => w.n === fromHash) ? fromHash : store.get('week', 1);
    showWeek(weeks.some((w) => w.n === start) ? start : 1);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
