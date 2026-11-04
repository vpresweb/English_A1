// A1 · Неделя 3 — Present Simple · Распорядок дня
COURSE.weeks.push({
  n: 3,
  title: 'Present Simple · Распорядок дня',
  tabs: [
    {
      id: 'plan', label: '📅 План',
      blocks: [
        { t: 'plan',
          goal: 'Рассказать о своём обычном дне и привычках. Строить утверждения, вопросы и отрицания в Present Simple, не забывая окончание <em>-s</em> у he / she / it. Говорить, как часто вы что-то делаете.',
          days: [
            { title: 'Present Simple: утверждение', tasks: ['I work, she works — правило -s', 'Правописание: watches, studies, goes', 'Фейнман: объяснить, зачем нужно -s'] },
            { title: 'Отрицание и вопрос', tasks: ['don’t / doesn’t + глагол', 'Do you…? Does she…? — краткие ответы', '10 вопросов о жизни друга'] },
            { title: 'Распорядок дня', tasks: ['get up, have breakfast, go to work…', 'Описать свой будний день — 8 предложений', 'Произнести вслух с правильным -s'] },
            { title: 'Наречия частоты', tasks: ['always, usually, often, sometimes, never', 'Место наречия: до глагола, после to be', 'Как часто вы…? — 6 ответов о себе'] },
            { title: 'Время и предлоги', tasks: ['at 7 o’clock, in the morning, on Sundays', 'every day, once a week, twice a month', 'Расписание вашей недели по-английски'] },
            { title: 'Диалог и тест', tasks: ['Диалог «Обычный день» — обе роли', 'Пройти тест недели', 'Слушать: BBC 6 Minute English, 1 выпуск'] },
            { title: 'Фейнман-урок недели', tasks: ['Объясните вслух, когда нужен does', 'Расскажите о своём дне — 1 минута', 'Пробелы → план на неделю 4'] },
          ] },
      ],
    },
    {
      id: 'present', label: '⚙️ Present Simple',
      blocks: [
        { t: 'label', text: 'Present Simple — регулярные действия и факты' },
        { t: 'card', color: 'gold', title: 'Когда используется', html: `<ul>
          <li><strong>Привычки и регулярные действия:</strong> <span class="en">I drink coffee every morning.</span></li>
          <li><strong>Факты:</strong> <span class="en">Water boils at 100 degrees.</span></li>
          <li><strong>Постоянное положение дел:</strong> <span class="en">She lives in Manchester.</span></li>
          <li><strong>Расписания:</strong> <span class="en">The train leaves at 8.</span></li></ul>` },
        { t: 'table', head: ['Лицо', 'work (работать)', 'live (жить)', 'have (иметь)'], rows: [
          ['<span class="pronoun">I / you / we / they</span>', '<span class="conj">work</span>', '<span class="conj">live</span>', '<span class="conj">have</span>'],
          ['<span class="pronoun">he / she / it</span>', '<span class="conj">works</span>', '<span class="conj">lives</span>', '<span class="conj">has</span> (неправильно!)'],
        ] },
        { t: 'card', color: 'blue', title: 'Правописание -s', html: `<ul>
          <li>Обычно <strong>+s</strong>: <span class="en">work → works</span>, <span class="en">play → plays</span></li>
          <li>После <strong>s, ss, sh, ch, x, o</strong> → <strong>+es</strong>: <span class="en">watch → watches</span>, <span class="en">go → goes</span>, <span class="en">do → does</span></li>
          <li>Согласная + <strong>y</strong> → <strong>ies</strong>: <span class="en">study → studies</span>, но <span class="en">play → plays</span></li>
          <li>Исключение: <span class="en">have → has</span></li></ul>` },
        { t: 'card', color: 'green', title: 'Три звука окончания -s', html: '<p>[s] после глухих: <span class="en">works, eats</span> · [z] после звонких и гласных: <span class="en">lives, plays</span> · [ɪz] после шипящих: <span class="en">watches, washes</span>. Произносите -s чётко — без него носитель не поймёт, о ком речь.</p>' },
        { t: 'label', text: 'Отрицание и вопрос — помощник do / does', top: true },
        { t: 'table', head: ['', 'I / you / we / they', 'he / she / it'], rows: [
          ['Отрицание', '<span class="conj">I don’t work</span>', '<span class="conj">She doesn’t work</span>'],
          ['Вопрос', '<span class="conj">Do you work?</span>', '<span class="conj">Does she work?</span>'],
          ['Краткий ответ', 'Yes, I do / No, I don’t', 'Yes, she does / No, she doesn’t'],
          ['С вопр. словом', '<span class="conj">Where do you work?</span>', '<span class="conj">Where does she work?</span>'],
        ] },
        { t: 'card', color: 'red', title: 'Главная ошибка: -s дважды', html: '<p>Если в предложении есть <span class="en">does</span> или <span class="en">doesn’t</span>, окончание -s «переезжает» в помощника, а основной глагол остаётся без него:</p><p>✗ <em>She doesn’t works</em> → ✓ <span class="en">She doesn’t work.</span><br>✗ <em>Does he lives here?</em> → ✓ <span class="en">Does he live here?</span></p>' },
      ],
    },
    {
      id: 'routine', label: '🕗 Распорядок',
      blocks: [
        { t: 'label', text: 'Daily routine — нажмите для произношения' },
        { t: 'grid', items: [
          { icon: '⏰', en: 'wake up', ipa: '[weɪk ʌp]', ru: 'просыпаться', ex: 'I wake up at 7.' },
          { icon: '🛏', en: 'get up', ipa: '[ɡet ʌp]', ru: 'вставать', ex: 'She gets up early.' },
          { icon: '🚿', en: 'have a shower', ru: 'принимать душ', ex: 'I have a shower.' },
          { icon: '🪥', en: 'brush my teeth', ru: 'чистить зубы', ex: 'teeth — мн. ч. от tooth' },
          { icon: '👔', en: 'get dressed', ru: 'одеваться', ex: 'He gets dressed quickly.' },
          { icon: '🍳', en: 'have breakfast', ru: 'завтракать', ex: 'have lunch / have dinner' },
          { icon: '🚌', en: 'go to work', ru: 'идти / ехать на работу', ex: 'go to school / university' },
          { icon: '💻', en: 'start work', ru: 'начинать работу', ex: 'I start work at 9.' },
          { icon: '🏠', en: 'get home', ru: 'приходить домой', ex: 'without «to»!' },
          { icon: '🍝', en: 'cook dinner', ru: 'готовить ужин', ex: '' },
          { icon: '📺', en: 'watch TV', ru: 'смотреть телевизор', ex: 'She watches TV.' },
          { icon: '📖', en: 'read a book', ru: 'читать книгу', ex: '' },
          { icon: '🌙', en: 'go to bed', ru: 'ложиться спать', ex: 'I go to bed at 11.' },
          { icon: '😴', en: 'fall asleep', ru: 'засыпать', ex: '' },
        ] },
        { t: 'card', color: 'blue', title: 'Have — не только «иметь»', html: '<p>С едой и действиями <span class="en">have</span> значит «делать»: <span class="en">have breakfast</span> — завтракать, <span class="en">have a shower</span> — принять душ, <span class="en">have a rest</span> — отдохнуть, <span class="en">have a good time</span> — хорошо провести время. Здесь <em>have got</em> не используется!</p>' },
        { t: 'card', color: 'gold', title: 'Предлоги времени — повторение', html: '<p><span class="en">at</span> 7 o’clock · <span class="en">in</span> the morning / afternoon / evening · <span class="en">at</span> night · <span class="en">on</span> Monday · <span class="en">on</span> weekdays · <span class="en">at</span> the weekend · <span class="en">every</span> day (без предлога!)</p>' },
      ],
    },
    {
      id: 'frequency', label: '⏰ Как часто',
      blocks: [
        { t: 'label', text: 'Наречия частоты' },
        { t: 'table', head: ['%', 'Наречие', 'Перевод', 'Пример'], rows: [
          ['100%', '<span class="conj">always</span>', 'всегда', '<span class="en">I always get up at seven.</span>'],
          ['90%', '<span class="conj">usually</span>', 'обычно', '<span class="en">She usually walks to work.</span>'],
          ['70%', '<span class="conj">often</span>', 'часто', '<span class="en">We often eat out.</span>'],
          ['50%', '<span class="conj">sometimes</span>', 'иногда', '<span class="en">I sometimes cook.</span>'],
          ['10%', '<span class="conj">rarely</span>', 'редко', '<span class="en">He rarely watches TV.</span>'],
          ['0%', '<span class="conj">never</span>', 'никогда', '<span class="en">I never drink coffee.</span>'],
        ] },
        { t: 'compare', cols: [
          { title: 'Перед обычным глаголом', items: ['<span class="en">I often read.</span>', '<span class="en">She never eats meat.</span>', '<span class="en">Do you usually walk?</span>'] },
          { title: 'После to be', cls: 'gold', items: ['<span class="en">I am always tired.</span>', '<span class="en">He is never late.</span>', '<span class="en">Are you often busy?</span>'] },
        ] },
        { t: 'card', color: 'red', title: 'Never — уже отрицание', html: '<p>В русском «я никогда <strong>не</strong> пью кофе» — двойное отрицание. В английском одного <span class="en">never</span> достаточно: ✓ <span class="en">I never drink coffee.</span> ✗ <em>I don’t never drink</em>.</p>' },
        { t: 'label', text: 'Выражения частоты — в конце предложения', top: true },
        { t: 'grid', items: [
          { en: 'every day', ru: 'каждый день' },
          { en: 'every morning', ru: 'каждое утро' },
          { en: 'once a week', ru: 'раз в неделю' },
          { en: 'twice a month', ru: 'два раза в месяц' },
          { en: 'three times a year', ru: 'три раза в год' },
          { en: 'on Sundays', ru: 'по воскресеньям' },
        ] },
        { t: 'card', color: 'blue', title: 'Вопрос «как часто?»', html: '<p><span class="en">How often do you go to the gym?</span> — <span class="en">Twice a week.</span> / <span class="en">I never go to the gym.</span></p>' },
      ],
    },
    {
      id: 'dialogue', label: '💬 Диалог',
      blocks: [
        { t: 'label', text: 'Обычный день — разговор коллег' },
        { t: 'card', color: 'gold', title: 'Как работать', html: '<p>Нажмите на реплику, чтобы услышать её. Найдите в диалоге все глаголы с окончанием -s и все наречия частоты. Затем расскажите о дне Тома от третьего лица.</p>' },
        { t: 'dialogue', lines: [
          { en: 'You look tired, Tom. What time do you get up?', ru: 'Ты выглядишь усталым, Том. Во сколько ты встаёшь?' },
          { right: true, av: '🧔', en: 'At half past five. I always get up very early.', ru: 'В полшестого. Я всегда встаю очень рано.' },
          { en: 'Why? Does your work start early?', ru: 'Почему? У тебя рано начинается работа?' },
          { right: true, av: '🧔', en: "No, it doesn't. I go to the gym before work.", ru: 'Нет. Я хожу в спортзал перед работой.' },
          { en: 'Every day?', ru: 'Каждый день?' },
          { right: true, av: '🧔', en: 'Usually three times a week. And you? What do you do in the morning?', ru: 'Обычно три раза в неделю. А ты? Что ты делаешь утром?' },
          { en: 'I have a coffee and read the news. I never do sport in the morning!', ru: 'Пью кофе и читаю новости. Я никогда не занимаюсь спортом утром!' },
          { right: true, av: '🧔', en: 'When do you go to bed?', ru: 'Когда ты ложишься спать?' },
          { en: 'Quite late, at about midnight. My husband works in the evenings.', ru: 'Довольно поздно, около полуночи. Мой муж работает по вечерам.' },
          { right: true, av: '🧔', en: 'I go to bed at ten. I sometimes fall asleep in front of the TV!', ru: 'Я ложусь в десять. Иногда засыпаю перед телевизором!' },
        ] },
        { t: 'card', color: 'blue', title: 'Разбор диалога', html: `<ul>
          <li><strong>What time do you get up?</strong> — вопрос «во сколько?»: <em>What time</em> + do + подлежащее + глагол</li>
          <li><strong>Does your work start…? — No, it doesn’t.</strong> — work = it, поэтому does</li>
          <li><strong>My husband works</strong> — he → окончание -s</li>
          <li><strong>at about midnight</strong> — <em>about</em> = «около, примерно»</li></ul>` },
      ],
    },
    {
      id: 'quiz', label: '🎯 Тест',
      blocks: [
        { t: 'label', text: 'Тест — Неделя 3' },
        { t: 'quiz', items: [
          { q: 'She ___ in a bank.', opts: ['work', 'working', 'works', 'is work'], ans: 2, exp: 'He / she / it → глагол + <em>-s</em>: <em>She works</em>.' },
          { q: 'My son ___ TV every evening.', opts: ['watches', 'watchs', 'watch', 'watchies'], ans: 0, exp: 'После <em>ch</em> → <em>-es</em>: <em>watches</em>.' },
          { q: 'I ___ like fish.', opts: ["doesn't", "isn't", 'not', "don't"], ans: 3, exp: 'С <em>I</em> отрицание — <em>don’t</em> + глагол.' },
          { q: '___ he speak French?', opts: ['Do', 'Does', 'Is', 'Has'], ans: 1, exp: 'С <em>he</em> вопрос строится с <em>does</em>.' },
          { q: 'Does she ___ near here?', opts: ['lives', 'to live', 'living', 'live'], ans: 3, exp: 'После <em>does</em> глагол без -s: <em>Does she live…?</em>' },
          { q: 'Правильный порядок слов:', opts: ['I go always to bed late.', 'Always I go to bed late.', 'I always go to bed late.', 'I go to bed always late.'], ans: 2, exp: 'Наречие частоты — перед основным глаголом: <em>I always go…</em>' },
          { q: 'He is ___ late.', opts: ['never', 'nevers', "don't never", 'not never'], ans: 0, exp: 'После <em>to be</em> наречие стоит после глагола: <em>He is never late</em>. Одного <em>never</em> достаточно.' },
          { q: 'Раз в неделю — …', opts: ['one a week', 'once a week', 'one time week', 'once of week'], ans: 1, exp: '<em>once a week</em>, <em>twice a week</em>, <em>three times a week</em>.' },
          { q: 'We have lunch ___ one o’clock.', opts: ['in', 'on', 'at', 'to'], ans: 2, exp: 'Время на часах — <em>at</em>.' },
          { q: 'Do you drink tea? — Yes, I ___.', opts: ['drink', 'do', 'am', 'does'], ans: 1, exp: 'Краткий ответ повторяет помощника: <em>Yes, I do</em>.' },
        ] },
      ],
    },
    {
      id: 'feynman', label: '✍️ Фейнман',
      blocks: [
        { t: 'label', text: 'Дневник Фейнмана — Неделя 3' },
        { t: 'journal', items: [
          {
            label: 'Задание 1 · Объяснение концепта',
            prompt: 'Объясните ребёнку, что такое <span class="en">do / does</span> в вопросах и отрицаниях. Почему по-английски нельзя спросить просто «You work?» и почему в <span class="en">Does she work?</span> у <em>work</em> нет -s?',
            placeholder: 'Do и does — это помощники, которые…',
            keys: ['помощ', 'вспомогат', 'does', 'окончан', '-s', 'переход', 'забира'],
            ok: '✓ Хорошо! Точная модель: <em>do / does</em> — «помощник», который ставится вперёд для вопроса и берёт на себя <em>not</em> в отрицании. Окончание <em>-s</em> «переезжает» в помощника: she work<strong>s</strong> → <strong>does</strong> she work?<br><br>Пробел для углубления: почему с <em>to be</em> помощник не нужен (<em>Are you…?</em>, а не <em>Do you are…?</em>)?',
            tip: '💡 Подсказка: представьте, что у глагола есть «помощник» <em>do</em>. В вопросе помощник выходит вперёд, а в отрицании берёт на себя <em>not</em>. А -s у he / she / it кто забирает себе?',
          },
          {
            label: 'Задание 2 · Производство языка',
            prompt: 'Опишите свой обычный будний день (8–10 предложений), а потом день друга или родственника от третьего лица — с <em>he / she</em>. Используйте минимум 4 наречия частоты.',
            placeholder: 'I usually get up at… My sister gets up at…',
            ok: '✓ Отлично! Проверьте себя:<br><br>• У he / she везде ли есть <em>-s</em>? (<em>She gets up, has breakfast, goes…</em>)<br>• Наречие перед глаголом: <em>I usually have…</em><br>• <em>go home</em>, <em>get home</em> — без <em>to</em><br>• <em>have breakfast</em> — без артикля<br><br>Прочитайте вслух, чётко произнося окончания.',
          },
          {
            label: 'Задание 3 · Пробелы недели',
            prompt: 'Что было труднее всего: -s, вопросы с do / does, место наречий? Запишите конкретно и придумайте, как это отработать.',
            placeholder: 'Я забываю…',
            ok: '✓ Точная формулировка пробела — уже половина решения.<br><br>• <strong>Забываете -s:</strong> выпишите 10 предложений о подруге и подчеркните все -s<br>• <strong>Путаете do / does:</strong> задайте 10 вопросов о членах семьи<br>• <strong>Наречия:</strong> правило «до глагола, но после am / is / are»<br><br>Через 3 дня проверьте, остался ли пробел.',
          },
        ] },
      ],
    },
  ],
});
