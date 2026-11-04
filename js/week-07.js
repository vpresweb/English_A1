// A1 · Неделя 7 — Одежда · Present Continuous
COURSE.weeks.push({
  n: 7,
  title: 'Одежда · Present Continuous',
  tabs: [
    {
      id: 'plan', label: '📅 План',
      blocks: [
        { t: 'plan',
          goal: 'Описать, во что одеты люди, и купить одежду: размер, цвет, примерка. Рассказать, что происходит прямо сейчас, в Present Continuous, и отличать его от Present Simple.',
          days: [
            { title: 'Одежда', tasks: ['Выучить 22 слова', 'Что на вас сейчас надето — 5 предложений', 'Фейнман: почему trousers всегда во мн. ч.'] },
            { title: 'Цвета и описание', tasks: ['red, blue, dark green…', 'Порядок: a nice blue jacket', 'Описать одежду 3 человек на фото'] },
            { title: 'Present Continuous', tasks: ['am / is / are + -ing', 'Правописание: making, running, lying', '10 предложений: что делают люди вокруг'] },
            { title: 'Simple или Continuous', tasks: ['I usually wear… / Today I’m wearing…', 'Глаголы без -ing: like, want, know', 'Тест на выбор времени'] },
            { title: 'В магазине одежды', tasks: ['Can I try it on? What size are you?', 'It’s too big / It doesn’t fit', 'Разыграть покупку'] },
            { title: 'Диалог и тест', tasks: ['Диалог в магазине — обе роли', 'Пройти тест недели', 'Посмотреть сайт британского магазина: Marks & Spencer, Next'] },
            { title: 'Фейнман-урок недели', tasks: ['Объясните разницу I work и I’m working', 'Опишите, что происходит за окном — 1 минута', 'Пробелы → план на неделю 8'] },
          ] },
      ],
    },
    {
      id: 'clothes', label: '👕 Одежда',
      blocks: [
        { t: 'label', text: 'Clothes — нажмите для произношения' },
        { t: 'grid', items: [
          { icon: '👕', en: 'T-shirt', ipa: '[ˈtiː ʃɜːt]', ru: 'футболка' },
          { icon: '👔', en: 'shirt', ipa: '[ʃɜːt]', ru: 'рубашка' },
          { icon: '👚', en: 'blouse', ipa: '[blaʊz]', ru: 'блузка' },
          { icon: '🧶', en: 'jumper', ipa: '[ˈdʒʌmpə]', ru: 'свитер', ex: 'в США — sweater' },
          { icon: '🧥', en: 'jacket', ipa: '[ˈdʒækɪt]', ru: 'куртка, пиджак' },
          { icon: '🧥', en: 'coat', ipa: '[kəʊt]', ru: 'пальто' },
          { icon: '👖', en: 'trousers', ipa: '[ˈtraʊzəz]', ru: 'брюки', ex: 'в США — pants' },
          { icon: '👖', en: 'jeans', ipa: '[dʒiːnz]', ru: 'джинсы' },
          { icon: '🩳', en: 'shorts', ipa: '[ʃɔːts]', ru: 'шорты' },
          { icon: '👗', en: 'dress', ipa: '[dres]', ru: 'платье' },
          { icon: '👗', en: 'skirt', ipa: '[skɜːt]', ru: 'юбка' },
          { icon: '🤵', en: 'suit', ipa: '[suːt]', ru: 'костюм' },
          { icon: '👟', en: 'trainers', ipa: '[ˈtreɪnəz]', ru: 'кроссовки', ex: 'в США — sneakers' },
          { icon: '👞', en: 'shoes', ipa: '[ʃuːz]', ru: 'туфли, обувь' },
          { icon: '👢', en: 'boots', ipa: '[buːts]', ru: 'ботинки, сапоги' },
          { icon: '🧦', en: 'socks', ipa: '[sɒks]', ru: 'носки' },
          { icon: '🧣', en: 'scarf', ipa: '[skɑːf]', ru: 'шарф' },
          { icon: '🧢', en: 'hat / cap', ipa: '[hæt] / [kæp]', ru: 'шляпа / кепка' },
          { icon: '🧤', en: 'gloves', ipa: '[ɡlʌvz]', ru: 'перчатки' },
          { icon: '👜', en: 'bag', ipa: '[bæɡ]', ru: 'сумка' },
          { icon: '🕶', en: 'sunglasses', ipa: '[ˈsʌnɡlɑːsɪz]', ru: 'солнечные очки' },
          { icon: '☂️', en: 'umbrella', ipa: '[ʌmˈbrelə]', ru: 'зонт', ex: 'в Лондоне — обязательно!' },
        ] },
        { t: 'card', color: 'red', title: 'Trousers — всегда «пара»', html: '<p>Слова из двух половинок всегда во мн. ч.: <span class="en">trousers, jeans, shorts, glasses, scissors</span>. ✓ <span class="en">My jeans are new.</span> ✗ <em>My jeans is new.</em> Одна штука — <span class="en">a pair of jeans</span>, две — <span class="en">two pairs of jeans</span>.</p>' },
        { t: 'card', color: 'blue', title: 'Глаголы для одежды', html: '<p><span class="en">wear</span> — носить, быть одетым · <span class="en">put on</span> — надеть · <span class="en">take off</span> — снять · <span class="en">try on</span> — примерить · <span class="en">get dressed</span> — одеться · <span class="en">fit</span> — подходить по размеру · <span class="en">suit</span> — идти, быть к лицу</p>' },
        { t: 'label', text: 'Цвета', top: true },
        { t: 'grid', items: [
          { icon: '⬛', en: 'black', ru: 'чёрный' },
          { icon: '⬜', en: 'white', ru: 'белый' },
          { icon: '🟥', en: 'red', ru: 'красный' },
          { icon: '🟦', en: 'blue', ru: 'синий, голубой', ex: 'light blue — голубой' },
          { icon: '🟩', en: 'green', ru: 'зелёный' },
          { icon: '🟨', en: 'yellow', ru: 'жёлтый' },
          { icon: '🟧', en: 'orange', ru: 'оранжевый' },
          { icon: '🟪', en: 'purple', ru: 'фиолетовый' },
          { icon: '🩷', en: 'pink', ru: 'розовый' },
          { icon: '🟫', en: 'brown', ru: 'коричневый' },
          { icon: '🩶', en: 'grey', ru: 'серый', ex: 'в США — gray' },
          { icon: '🌑', en: 'dark / light', ru: 'тёмный / светлый', ex: 'dark green, light grey' },
        ] },
        { t: 'card', color: 'gold', title: 'Прилагательное — перед существительным', html: '<p><span class="en">a red dress</span>, <span class="en">black shoes</span> — прилагательное не меняется: нет рода и числа. Мнение идёт перед цветом: <span class="en">a beautiful blue dress</span>, <span class="en">a cheap black coat</span>.</p>' },
      ],
    },
    {
      id: 'continuous', label: '⏳ Continuous',
      blocks: [
        { t: 'label', text: 'Present Continuous — прямо сейчас' },
        { t: 'card', color: 'gold', title: 'Формула: am / is / are + глагол-ing', html: '<p>Действие происходит в момент речи или в этот период: <span class="en">I’m wearing a jumper.</span> — Я (сейчас) в свитере. <span class="en">She’s learning English this year.</span> — Она учит английский в этом году.</p>' },
        { t: 'table', head: ['', 'Форма', 'Пример'], rows: [
          ['Утверждение', '<span class="conj">I’m / he’s / they’re</span> + -ing', '<span class="en">They’re playing football.</span>'],
          ['Отрицание', '<span class="conj">I’m not / he isn’t / they aren’t</span> + -ing', '<span class="en">She isn’t working today.</span>'],
          ['Вопрос', '<span class="conj">Am I / Is he / Are they</span> + -ing?', '<span class="en">Are you listening?</span>'],
          ['С вопр. словом', 'What + are + you + -ing?', '<span class="en">What are you doing?</span>'],
        ] },
        { t: 'card', color: 'blue', title: 'Правописание -ing', html: `<ul>
          <li>Обычно <strong>+ing</strong>: <span class="en">work → working</span>, <span class="en">read → reading</span></li>
          <li>Немая <strong>-e</strong> исчезает: <span class="en">make → making</span>, <span class="en">write → writing</span></li>
          <li>Краткая гласная + согласная → <strong>удвоение</strong>: <span class="en">run → running</span>, <span class="en">sit → sitting</span>, <span class="en">swim → swimming</span></li>
          <li><strong>-ie → -ying</strong>: <span class="en">lie → lying</span>, <span class="en">die → dying</span></li></ul>` },
        { t: 'card', color: 'green', title: 'Маркеры времени', html: '<p><span class="en">now</span> — сейчас · <span class="en">right now</span> — прямо сейчас · <span class="en">at the moment</span> — в данный момент · <span class="en">today</span> — сегодня · <span class="en">this week</span> — на этой неделе · <span class="en">Look!</span> / <span class="en">Listen!</span> — смотри / слушай</p>' },
        { t: 'label', text: 'Что происходит? — нажмите на фразу', top: true },
        { t: 'grid', items: [
          { icon: '☔', en: "It's raining.", ru: 'Идёт дождь.' },
          { icon: '📞', en: "She's talking on the phone.", ru: 'Она говорит по телефону.' },
          { icon: '🏃', en: 'The children are running.', ru: 'Дети бегут.' },
          { icon: '☕', en: "I'm drinking coffee.", ru: 'Я пью кофе.' },
          { icon: '🚌', en: "We're waiting for the bus.", ru: 'Мы ждём автобус.' },
          { icon: '😴', en: "The baby isn't sleeping.", ru: 'Малыш не спит.' },
        ] },
      ],
    },
    {
      id: 'simplecont', label: '⚖️ Simple / Cont.',
      blocks: [
        { t: 'label', text: 'Present Simple или Present Continuous?' },
        { t: 'compare', cols: [
          { title: 'Simple — обычно, всегда', items: ['<span class="en">I usually wear jeans.</span>', '<span class="en">She works in a bank.</span>', '<span class="en">It rains a lot in Manchester.</span>', 'always, usually, every day, on Mondays'] },
          { title: 'Continuous — сейчас, временно', cls: 'gold', items: ['<span class="en">Today I’m wearing a suit.</span>', '<span class="en">She’s working from home this week.</span>', '<span class="en">It’s raining now.</span>', 'now, at the moment, today, this week'] },
        ] },
        { t: 'card', color: 'gold', title: 'Фейнман: фото и фильм', html: '<p>Present Simple — как подпись в профиле: «Я работаю в банке, люблю чай». Это общая картина. Present Continuous — как видео в прямом эфире: «Сейчас я сижу в кафе и пью чай». Спросите себя: <strong>это вообще или сейчас?</strong></p>' },
        { t: 'card', color: 'red', title: 'Глаголы, которые не любят -ing', html: '<p>Глаголы чувств, желаний и мыслей обычно не ставят в Continuous, даже если речь о «сейчас»: <span class="en">like, love, hate, want, need, know, understand, believe, remember</span>.</p><p>✓ <span class="en">I want a coffee now.</span> ✗ <em>I’m wanting</em><br>✓ <span class="en">Do you understand?</span> ✗ <em>Are you understanding?</em></p>' },
        { t: 'table', head: ['Вопрос', 'Значение'], rows: [
          ['<span class="en">What do you do?</span>', 'Кем вы работаете? (вообще)'],
          ['<span class="en">What are you doing?</span>', 'Что вы делаете (сейчас)?'],
          ['<span class="en">Where do you live?</span>', 'Где вы живёте? (постоянно)'],
          ['<span class="en">Where are you staying?</span>', 'Где вы остановились? (временно)'],
        ] },
      ],
    },
    {
      id: 'shop', label: '🛍 В магазине',
      blocks: [
        { t: 'label', text: 'Покупаем одежду' },
        { t: 'grid', items: [
          { en: "Can I help you?", ru: 'Вам помочь?', ex: "I'm just looking, thanks." },
          { en: "I'm looking for a jacket.", ru: 'Я ищу куртку.' },
          { en: 'What size are you?', ru: 'Какой у вас размер?', ex: "I'm a medium / a size 12" },
          { en: 'Can I try it on?', ru: 'Можно примерить?' },
          { en: 'Where are the changing rooms?', ru: 'Где примерочные?', ex: 'в США — fitting rooms' },
          { en: "It's too big.", ru: 'Слишком большой.' },
          { en: "It's too small.", ru: 'Слишком маленький.' },
          { en: "It doesn't fit.", ru: 'Не подходит по размеру.' },
          { en: 'Have you got it in a smaller size?', ru: 'Есть размер поменьше?' },
          { en: 'Have you got it in black?', ru: 'Есть такой чёрного цвета?' },
          { en: "I'll take it.", ru: 'Я беру.' },
          { en: 'Can I return it?', ru: 'Можно вернуть?', ex: 'refund — возврат денег' },
        ] },
        { t: 'card', color: 'blue', title: 'Размеры', html: '<p><span class="en">small (S), medium (M), large (L), extra large (XL)</span>. Британские размеры одежды отличаются от европейских: женский UK 10 ≈ EU 38 ≈ российский 44. Обувь: UK 6 ≈ EU 39.</p>' },
        { t: 'card', color: 'gold', title: 'It или them?', html: '<p>Один предмет — <span class="en">it</span>: <span class="en">Can I try it on?</span> Предметы-пары и мн. ч. — <span class="en">them</span>: <span class="en">These trousers are nice. Can I try them on?</span></p>' },
      ],
    },
    {
      id: 'dialogue', label: '💬 Диалог',
      blocks: [
        { t: 'label', text: 'Диалог — в магазине одежды' },
        { t: 'card', color: 'gold', title: 'Как работать', html: '<p>Нажмите на реплику — услышите произношение. Найдите оба времени: Simple и Continuous. Разыграйте роль покупателя, меняя предмет одежды.</p>' },
        { t: 'dialogue', lines: [
          { right: true, av: '👩‍💼', en: 'Hello! Can I help you?', ru: 'Здравствуйте! Вам помочь?' },
          { en: "Yes, please. I'm looking for a warm jacket. It's getting cold!", ru: 'Да, пожалуйста. Я ищу тёплую куртку. Становится холодно!' },
          { right: true, av: '👩‍💼', en: 'What size are you?', ru: 'Какой у вас размер?' },
          { en: 'I usually wear a medium.', ru: 'Обычно я ношу M.' },
          { right: true, av: '👩‍💼', en: 'How about this one? We have it in black, grey and dark blue.', ru: 'Как вам эта? Есть чёрная, серая и тёмно-синяя.' },
          { en: 'I like the dark blue one. Can I try it on?', ru: 'Мне нравится тёмно-синяя. Можно примерить?' },
          { right: true, av: '👩‍💼', en: 'Of course. The changing rooms are over there.', ru: 'Конечно. Примерочные вон там.' },
          { right: true, av: '👩‍💼', en: 'How is it?', ru: 'Ну как?' },
          { en: "It's a bit too big. Have you got it in a small?", ru: 'Немного великовата. Есть размер S?' },
          { right: true, av: '👩‍💼', en: "Yes, here you are. Oh, that fits perfectly! It really suits you.", ru: 'Да, вот, пожалуйста. О, сидит идеально! Вам очень идёт.' },
          { en: 'Great, I’ll take it. How much is it?', ru: 'Отлично, беру. Сколько стоит?' },
          { right: true, av: '👩‍💼', en: "It's sixty-five pounds. But we're having a sale this week — it's twenty per cent off.", ru: '65 фунтов. Но у нас на этой неделе распродажа — скидка 20 %.' },
        ] },
        { t: 'card', color: 'blue', title: 'Разбор диалога', html: `<ul>
          <li><strong>It’s getting cold</strong> — «становится холодно», процесс → Continuous</li>
          <li><strong>I usually wear a medium</strong> — привычка → Simple</li>
          <li><strong>the dark blue one</strong> — <em>one</em> заменяет повторное <em>jacket</em></li>
          <li><strong>we’re having a sale this week</strong> — временно, на этой неделе → Continuous</li>
          <li><strong>20 per cent off</strong> — скидка 20 %</li></ul>` },
      ],
    },
    {
      id: 'quiz', label: '🎯 Тест',
      blocks: [
        { t: 'label', text: 'Тест — Неделя 7' },
        { t: 'quiz', items: [
          { q: 'Look! It ___.', opts: ['snows', 'snow', 'snowing', 'is snowing'], ans: 3, exp: 'Прямо сейчас → Continuous: <em>It is snowing</em>.' },
          { q: 'I ___ jeans to work every day.', opts: ['am wearing', 'wear', 'wearing', 'wears'], ans: 1, exp: 'Привычка, <em>every day</em> → Present Simple.' },
          { q: 'What ___ you doing?', opts: ['do', 'is', 'are', 'does'], ans: 2, exp: '<em>What are you doing?</em> — что ты сейчас делаешь?' },
          { q: 'She ___ today. She’s at home.', opts: ["isn't working", "doesn't work", "don't working", 'not works'], ans: 0, exp: 'Сегодня, временно → <em>isn’t working</em>.' },
          { q: 'run + ing = …', opts: ['runing', 'runnig', 'runeing', 'running'], ans: 3, exp: 'Краткая гласная + согласная → удвоение: <em>running</em>.' },
          { q: 'I ___ a new phone.', opts: ['wanting', 'am wanting', 'want', 'wants'], ans: 2, exp: '<em>want</em> обычно не ставят в Continuous.' },
          { q: 'My trousers ___ too long.', opts: ['are', 'is', 'am', 'be'], ans: 0, exp: '<em>trousers</em> — всегда мн. ч. → <em>are</em>.' },
          { q: 'Можно примерить? (о юбке) — Can I try ___ on?', opts: ['them', 'it', 'its', 'her'], ans: 1, exp: 'Один предмет — <em>it</em>: <em>Can I try it on?</em>' },
          { q: 'Свитер (UK) — …', opts: ['jumper', 'sweater', 'jacket', 'shirt'], ans: 0, exp: 'Британское <em>jumper</em>, американское <em>sweater</em>.' },
          { q: 'Это слишком маленькое. — It’s ___ small.', opts: ['very', 'too', 'to', 'much'], ans: 1, exp: '<em>too</em> — «слишком»: <em>too small, too expensive</em>.' },
        ] },
      ],
    },
    {
      id: 'feynman', label: '✍️ Фейнман',
      blocks: [
        { t: 'label', text: 'Дневник Фейнмана — Неделя 7' },
        { t: 'journal', items: [
          {
            label: 'Задание 1 · Объяснение концепта',
            prompt: 'Объясните разницу между <span class="en">I work in an office</span> и <span class="en">I’m working at home this week</span>. Придумайте свою аналогию, как «фото и фильм».',
            placeholder: 'Present Simple — это…, а Present Continuous — это…',
            keys: ['обычн', 'всегда', 'сейчас', 'времен', 'момент', 'постоянн', 'привычк'],
            ok: '✓ Отлично! Simple — постоянное и регулярное, Continuous — сейчас или временно. Одна и та же работа может быть и тем, и другим: <em>I work in an office</em> (вообще), <em>but this week I’m working at home</em> (временно).<br><br>Пробел для углубления: почему <em>I’m loving it</em> в рекламе — исключение? (Подсказка: так подчёркивают яркую эмоцию «прямо сейчас».)',
            tip: '💡 Подсказка: задайте себе вопрос «это вообще, обычно — или сейчас, в этот период?». Первое — Simple, второе — Continuous.',
          },
          {
            label: 'Задание 2 · Производство языка',
            prompt: 'Опишите, во что вы обычно одеваетесь на работу или учёбу, и во что одеты сегодня (8 предложений). Затем опишите, что происходит вокруг вас прямо сейчас (5 предложений).',
            placeholder: "I usually wear… Today I'm wearing… Right now my neighbour is…",
            ok: '✓ Хорошо! Проверьте:<br><br>• <em>usually / every day</em> → Simple; <em>today / now</em> → Continuous<br>• <em>am / is / are</em> перед -ing не пропущены?<br>• <em>trousers, jeans</em> — с <em>are</em><br>• Цвет перед существительным: <em>a black coat</em><br><br>Прочитайте вслух, следя за -ing.',
          },
          {
            label: 'Задание 3 · Пробелы недели',
            prompt: 'Где вы сомневаетесь в выборе Simple или Continuous? Запишите 3 предложения, в которых не уверены.',
            placeholder: 'Я не уверен, как сказать…',
            ok: '✓ Хорошо. Метод проверки: попробуйте вставить в предложение <em>usually</em> и <em>right now</em>. Подходит <em>usually</em> — Simple. Подходит <em>right now</em> — Continuous. Если глагол о чувствах или знании (<em>like, know, want</em>) — почти всегда Simple.',
          },
        ] },
      ],
    },
  ],
});
