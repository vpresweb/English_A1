// Проверка данных курса: структура недель, тесты, задания и разметка.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');

const context = { COURSE: { weeks: [] } };
vm.createContext(context);
const weekFiles = readdirSync(new URL('js/', root)).filter((f) => /^week-\d\d\.js$/.test(f)).sort();
for (const file of weekFiles) vm.runInContext(read(`js/${file}`), context, { filename: file });
const weeks = context.COURSE.weeks;

// Типы блоков, которые умеет собирать render.js.
const render = read('js/render.js');
const blockSource = render.slice(render.indexOf('const blocks = {'), render.indexOf('// ── ДАННЫЕ ИНТЕРАКТИВА'));
const BLOCK_TYPES = new Set([...blockSource.matchAll(/^ {4}(\w+): \(/gm)].map((m) => m[1]));

const allBlocks = () => weeks.flatMap((w) => w.tabs.flatMap((t) => t.blocks.map((b) => ({ w, t, b }))));

// Все HTML-фрагменты блока, чтобы проверить парность тегов.
function htmlOf(b) {
  const parts = [];
  const walk = (v) => {
    if (typeof v === 'string') parts.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk(b);
  return parts;
}

test('12 недель по порядку, у каждой есть название и вкладки', () => {
  assert.equal(weekFiles.length, 12);
  assert.deepEqual(weeks.map((w) => w.n), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  for (const w of weeks) {
    assert.ok(w.title, `неделя ${w.n}: нет названия`);
    assert.ok(w.tabs.length >= 5, `неделя ${w.n}: мало вкладок`);
  }
});

test('index.html подключает все недели перед render.js', () => {
  const html = read('index.html');
  for (const file of weekFiles) assert.ok(html.includes(`src="js/${file}"`), `нет ${file}`);
  assert.ok(html.indexOf('js/week-12.js') < html.indexOf('js/render.js'));
  assert.ok(html.indexOf('js/core.js') < html.indexOf('js/week-01.js'));
});

test('id вкладок уникальны и безопасны, блоки известны', () => {
  assert.ok(BLOCK_TYPES.size > 10, 'не удалось прочитать типы блоков');
  for (const w of weeks) {
    const ids = w.tabs.map((t) => t.id);
    assert.equal(new Set(ids).size, ids.length, `неделя ${w.n}: повтор id вкладки`);
    for (const t of w.tabs) {
      assert.match(t.id, /^[a-z][a-z-]*$/, `неделя ${w.n}: id ${t.id}`);
      assert.ok(t.label, `неделя ${w.n}, ${t.id}: нет подписи`);
      for (const b of t.blocks) assert.ok(BLOCK_TYPES.has(b.t), `неделя ${w.n}, ${t.id}: блок ${b.t}`);
    }
  }
});

test('у недель 1–11 есть план на 7 дней и тест на 10 вопросов', () => {
  for (const w of weeks.filter((x) => x.n < 12)) {
    const blocks = w.tabs.flatMap((t) => t.blocks);
    const plan = blocks.find((b) => b.t === 'plan');
    assert.ok(plan, `неделя ${w.n}: нет плана`);
    assert.equal(plan.days.length, 7, `неделя ${w.n}: дней в плане`);
    const quizzes = blocks.filter((b) => b.t === 'quiz');
    assert.equal(quizzes.length, 1, `неделя ${w.n}: тестов`);
    assert.equal(quizzes[0].items.length, 10, `неделя ${w.n}: вопросов`);
  }
});

test('вопросы тестов корректны', () => {
  for (const { w, t, b } of allBlocks().filter((x) => x.b.t === 'quiz')) {
    b.items.forEach((q, i) => {
      const where = `неделя ${w.n}, ${t.id}, вопрос ${i + 1}`;
      assert.ok(q.q && q.exp, `${where}: нет текста или пояснения`);
      assert.equal(q.opts.length, 4, `${where}: вариантов`);
      assert.equal(new Set(q.opts).size, 4, `${where}: повтор варианта`);
      assert.ok(Number.isInteger(q.ans) && q.ans >= 0 && q.ans < 4, `${where}: ответ`);
    });
  }
});

test('правильные ответы распределены по вариантам', () => {
  const counts = [0, 0, 0, 0];
  for (const { b } of allBlocks().filter((x) => x.b.t === 'quiz')) for (const q of b.items) counts[q.ans]++;
  const total = counts.reduce((a, c) => a + c, 0);
  // Ни один вариант не должен быть правильным подавляюще часто — иначе тест угадывается.
  for (const c of counts) assert.ok(c / total < 0.5, `перекос ответов: ${counts}`);
});

test('финальный экзамен: 20 + 10 вопросов, помечены как экзамен', () => {
  const exams = allBlocks().filter((x) => x.b.t === 'quiz' && x.b.exam);
  assert.deepEqual(exams.map((x) => x.b.items.length).sort((a, b) => a - b), [10, 20]);
  assert.ok(exams.every((x) => x.w.n === 12));
  assert.ok(allBlocks().some((x) => x.b.t === 'result'));
});

test('у текстовых заданий есть обратная связь', () => {
  for (const { w, t, b } of allBlocks().filter((x) => ['exercise', 'journal', 'writing'].includes(x.b.t))) {
    b.items.forEach((e, i) => {
      const where = `неделя ${w.n}, ${t.id}, задание ${i + 1}`;
      assert.ok(e.prompt && e.ok, `${where}: нет задания или ответа`);
      if (e.keys) assert.ok(e.tip, `${where}: есть ключевые слова, но нет подсказки`);
    });
  }
});

test('теги в разметке парные', () => {
  for (const { w, t, b } of allBlocks()) {
    for (const html of htmlOf(b)) {
      for (const tag of ['span', 'strong', 'em', 'ul', 'li', 'p']) {
        const open = (html.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length;
        const close = (html.match(new RegExp(`</${tag}>`, 'g')) || []).length;
        assert.equal(open, close, `неделя ${w.n}, ${t.id}: <${tag}> в «${html.slice(0, 60)}…»`);
      }
    }
  }
});

test('диалоги и карточки содержат английский текст и перевод', () => {
  for (const { w, t, b } of allBlocks()) {
    const where = `неделя ${w.n}, ${t.id}`;
    if (b.t === 'dialogue') for (const l of b.lines) assert.ok(l.en && l.ru, `${where}: реплика`);
    if (['grid', 'vocab', 'flip'].includes(b.t)) for (const x of b.items) assert.ok(x.en && x.ru, `${where}: ${x.en}`);
    if (b.t === 'dialogue') for (const l of b.lines) assert.doesNotMatch(l.en, /[А-Яа-яЁё]/, `${where}: кириллица в «${l.en}»`);
  }
});
