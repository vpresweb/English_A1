// A1 · Неделя 9 — Погода · Прошлое
COURSE.weeks.push({
  n: 9,
  title: 'Погода · Прошлое',
  tabs: [
    {
      id: 'plan', label: '📅 План',
      blocks: [
        { t: 'plan',
          goal: 'Поговорить о погоде — любимой британской теме. Называть месяцы, времена года и даты. Рассказать о прошедших выходных: <em>was / were</em>, правильные и 20 самых частых неправильных глаголов в Past Simple.',
          days: [
            { title: 'Погода', tasks: ['It’s sunny / It’s raining / It’s cold', 'What’s the weather like?', 'Фейнман: почему британцы всё время говорят о погоде'] },
            { title: 'Месяцы, сезоны, даты', tasks: ['January… December, spring… winter', 'Дата: the 5th of May / on 5 May', 'Назвать даты дней рождения семьи'] },
            { title: 'Was / were', tasks: ['I was, you were, he was…', 'Was it cold? — Yes, it was', 'Где вы были вчера, в прошлом году?'] },
            { title: 'Правильные глаголы', tasks: ['-ed: worked, lived, stopped, studied', 'Три звука -ed: [t], [d], [ɪd]', '10 предложений о вчерашнем дне'] },
            { title: 'Неправильные глаголы', tasks: ['go → went, have → had, see → saw…', 'Выучить 20 глаголов из таблицы', 'Вопрос и отрицание: did / didn’t + глагол'] },
            { title: 'Диалог и тест', tasks: ['Диалог «Как прошли выходные?»', 'Пройти тест недели', 'Посмотреть прогноз погоды BBC Weather'] },
            { title: 'Фейнман-урок недели', tasks: ['Объясните, почему после did глагол без -ed', 'Расскажите о прошлых выходных — 1 минута', 'Пробелы → план на неделю 10'] },
          ] },
      ],
    },
    {
      id: 'weather', label: '🌤 Погода',
      blocks: [
        { t: 'label', text: "What's the weather like? — Какая погода?" },
        { t: 'grid', items: [
          { icon: '☀️', en: "It's sunny.", ru: 'Солнечно.' },
          { icon: '☁️', en: "It's cloudy.", ru: 'Облачно.' },
          { icon: '🌧', en: "It's raining. / It's rainy.", ru: 'Идёт дождь. / Дождливо.' },
          { icon: '❄️', en: "It's snowing.", ru: 'Идёт снег.' },
          { icon: '💨', en: "It's windy.", ru: 'Ветрено.' },
          { icon: '🌫', en: "It's foggy.", ru: 'Туманно.' },
          { icon: '🔥', en: "It's hot.", ru: 'Жарко.' },
          { icon: '🌡', en: "It's warm.", ru: 'Тепло.' },
          { icon: '🍃', en: "It's cool.", ru: 'Прохладно.' },
          { icon: '🥶', en: "It's cold.", ru: 'Холодно.' },
          { icon: '⛈', en: "There's a storm.", ru: 'Гроза, буря.' },
          { icon: '🌦', en: 'showers', ru: 'кратковременные дожди', ex: 'в прогнозе погоды' },
        ] },
        { t: 'card', color: 'gold', title: 'Фейнман: «оно» идёт дождём', html: '<p>В английском у предложения всегда есть подлежащее, даже если «никто» ничего не делает. Поэтому погоду описывает пустое <span class="en">it</span>: <span class="en">It’s cold. It’s raining. It’s ten degrees.</span> Без <em>it</em> нельзя: ✗ <em>Is cold.</em></p>' },
        { t: 'card', color: 'green', title: 'Small talk о погоде', html: '<p>Для британцев погода — безопасная тема для разговора с незнакомыми: <span class="en">Lovely day, isn’t it?</span> — <span class="en">Yes, beautiful!</span> · <span class="en">Terrible weather today!</span> — <span class="en">I know, it’s freezing.</span> · <span class="en">It’s a bit chilly.</span> — Прохладненько. Температура — в градусах Цельсия: <span class="en">It’s fifteen degrees.</span></p>' },
      ],
    },
    {
      id: 'seasons', label: '🍂 Месяцы и даты',
      blocks: [
        { t: 'label', text: 'Времена года' },
        { t: 'grid', items: [
          { icon: '🌸', en: 'spring', ipa: '[sprɪŋ]', ru: 'весна', ex: 'March, April, May' },
          { icon: '☀️', en: 'summer', ipa: '[ˈsʌmə]', ru: 'лето', ex: 'June, July, August' },
          { icon: '🍂', en: 'autumn', ipa: '[ˈɔːtəm]', ru: 'осень', ex: 'в США — fall; n не читается' },
          { icon: '❄️', en: 'winter', ipa: '[ˈwɪntə]', ru: 'зима', ex: 'December, January, February' },
        ] },
        { t: 'label', text: 'Месяцы — всегда с заглавной буквы', top: true },
        { t: 'grid', items: [
          { en: 'January', ipa: '[ˈdʒænjuəri]', ru: 'январь' },
          { en: 'February', ipa: '[ˈfebruəri]', ru: 'февраль' },
          { en: 'March', ipa: '[mɑːtʃ]', ru: 'март' },
          { en: 'April', ipa: '[ˈeɪprəl]', ru: 'апрель' },
          { en: 'May', ipa: '[meɪ]', ru: 'май' },
          { en: 'June', ipa: '[dʒuːn]', ru: 'июнь' },
          { en: 'July', ipa: '[dʒuˈlaɪ]', ru: 'июль' },
          { en: 'August', ipa: '[ˈɔːɡəst]', ru: 'август' },
          { en: 'September', ipa: '[sepˈtembə]', ru: 'сентябрь' },
          { en: 'October', ipa: '[ɒkˈtəʊbə]', ru: 'октябрь' },
          { en: 'November', ipa: '[nəʊˈvembə]', ru: 'ноябрь' },
          { en: 'December', ipa: '[dɪˈsembə]', ru: 'декабрь' },
        ] },
        { t: 'card', color: 'blue', title: 'Даты по-британски', html: `<ul>
          <li>Пишут: <strong>5 May 2025</strong> или 05/05/2025 (день / месяц / год)</li>
          <li>Говорят: <span class="en">the fifth of May</span> — с порядковым числительным</li>
          <li>Предлоги: <span class="en">in May</span>, <span class="en">in summer</span>, <span class="en">in 2025</span>, но <span class="en">on the fifth of May</span>, <span class="en">on my birthday</span></li>
          <li>В США: May 5 → <span class="en">May fifth</span>, а 05/06 — это 6 мая!</li></ul>` },
        { t: 'card', color: 'gold', title: 'Вопросы о дате', html: '<p><span class="en">What’s the date today?</span> — <span class="en">It’s the twelfth of March.</span><br><span class="en">When’s your birthday?</span> — <span class="en">It’s on the third of October.</span></p>' },
      ],
    },
    {
      id: 'waswere', label: '⏪ Was / were',
      blocks: [
        { t: 'label', text: 'To be в прошедшем времени' },
        { t: 'table', head: ['', 'I / he / she / it', 'you / we / they'], rows: [
          ['Утверждение', '<span class="conj">was</span>', '<span class="conj">were</span>'],
          ['Отрицание', '<span class="conj">wasn’t</span>', '<span class="conj">weren’t</span>'],
          ['Вопрос', '<span class="conj">Was he…?</span>', '<span class="conj">Were you…?</span>'],
          ['Краткий ответ', 'Yes, he was / No, he wasn’t', 'Yes, we were / No, we weren’t'],
        ] },
        { t: 'grid', items: [
          { en: 'It was very cold yesterday.', ru: 'Вчера было очень холодно.' },
          { en: 'I was at home last night.', ru: 'Вчера вечером я был дома.' },
          { en: 'Where were you on Saturday?', ru: 'Где ты был в субботу?' },
          { en: "We weren't tired.", ru: 'Мы не устали.' },
          { en: 'Was the film good? — Yes, it was.', ru: 'Фильм был хороший? — Да.' },
          { en: 'I was born in 1990.', ru: 'Я родился в 1990 году.', ex: 'родиться — be born' },
        ] },
        { t: 'card', color: 'green', title: 'Маркеры прошлого', html: '<p><span class="en">yesterday</span> — вчера · <span class="en">last night / week / year</span> — вчера вечером / на прошлой неделе / в прошлом году · <span class="en">two days ago</span> — два дня назад · <span class="en">in 2010</span> · <span class="en">when I was a child</span> — когда я был ребёнком</p>' },
      ],
    },
    {
      id: 'past', label: '⚙️ Past Simple',
      blocks: [
        { t: 'label', text: 'Past Simple — законченное действие в прошлом' },
        { t: 'card', color: 'gold', title: 'Правильные глаголы: + -ed', html: '<p>Одна форма для всех лиц: <span class="en">I worked, she worked, they worked.</span> Правописание: <span class="en">live → lived</span> (+d), <span class="en">stop → stopped</span> (удвоение), <span class="en">study → studied</span> (y → ied), но <span class="en">play → played</span>.</p>' },
        { t: 'card', color: 'blue', title: 'Три звука -ed', html: '<p>[t] после глухих: <span class="en">worked, watched, stopped</span> · [d] после звонких и гласных: <span class="en">lived, played, cleaned</span> · [ɪd] после t и d: <span class="en">wanted, needed, started</span>. Не говорите «воркед» — только <span class="en">worked</span> [wɜːkt].</p>' },
        { t: 'label', text: 'Вопрос и отрицание — помощник did', top: true },
        { t: 'table', head: ['', 'Форма', 'Пример'], rows: [
          ['Утверждение', 'глагол + -ed / 2-я форма', '<span class="en">She visited her mum. We went to the cinema.</span>'],
          ['Отрицание', '<span class="conj">didn’t</span> + глагол', '<span class="en">I didn’t watch TV. He didn’t go out.</span>'],
          ['Вопрос', '<span class="conj">Did</span> + подлежащее + глагол', '<span class="en">Did you like it? What did you do?</span>'],
          ['Краткий ответ', 'Yes, I did / No, I didn’t', ''],
        ] },
        { t: 'card', color: 'red', title: 'После did — первая форма', html: '<p>Как и с <em>does</em>, «прошлое» переезжает в помощника: ✗ <em>Did you went?</em> → ✓ <span class="en">Did you go?</span> ✗ <em>I didn’t saw</em> → ✓ <span class="en">I didn’t see.</span></p>' },
        { t: 'label', text: '20 самых частых неправильных глаголов', top: true },
        { t: 'table', head: ['Глагол', 'Past Simple', 'Перевод'], rows: [
          ['<span class="conj">be</span>', '<span class="conj">was / were</span>', 'быть'],
          ['<span class="conj">have</span>', '<span class="conj">had</span>', 'иметь'],
          ['<span class="conj">do</span>', '<span class="conj">did</span>', 'делать'],
          ['<span class="conj">go</span>', '<span class="conj">went</span>', 'идти, ехать'],
          ['<span class="conj">come</span>', '<span class="conj">came</span>', 'приходить'],
          ['<span class="conj">get</span>', '<span class="conj">got</span>', 'получать, добираться'],
          ['<span class="conj">make</span>', '<span class="conj">made</span>', 'делать, создавать'],
          ['<span class="conj">see</span>', '<span class="conj">saw</span>', 'видеть'],
          ['<span class="conj">say</span>', '<span class="conj">said</span> [sed]', 'сказать'],
          ['<span class="conj">eat</span>', '<span class="conj">ate</span> [et]', 'есть'],
          ['<span class="conj">drink</span>', '<span class="conj">drank</span>', 'пить'],
          ['<span class="conj">buy</span>', '<span class="conj">bought</span> [bɔːt]', 'покупать'],
          ['<span class="conj">take</span>', '<span class="conj">took</span>', 'брать'],
          ['<span class="conj">give</span>', '<span class="conj">gave</span>', 'давать'],
          ['<span class="conj">meet</span>', '<span class="conj">met</span>', 'встречать'],
          ['<span class="conj">write</span>', '<span class="conj">wrote</span>', 'писать'],
          ['<span class="conj">read</span>', '<span class="conj">read</span> [red]', 'читать'],
          ['<span class="conj">sleep</span>', '<span class="conj">slept</span>', 'спать'],
          ['<span class="conj">leave</span>', '<span class="conj">left</span>', 'уезжать, оставлять'],
          ['<span class="conj">think</span>', '<span class="conj">thought</span> [θɔːt]', 'думать'],
        ] },
        { t: 'card', color: 'green', title: 'Фейнман: как учить неправильные', html: '<p>Группируйте по звучанию: <span class="en">buy — bought, think — thought, bring — brought</span> (все на [ɔːt]); <span class="en">sleep — slept, meet — met, leave — left</span> (долгое [iː] → краткое [e]). Полная таблица форм — в словаре <strong>Dictionary English</strong>, раздел «Тест».</p>' },
      ],
    },
    {
      id: 'dialogue', label: '💬 Диалог',
      blocks: [
        { t: 'label', text: 'Диалог — как прошли выходные?' },
        { t: 'card', color: 'gold', title: 'Как работать', html: '<p>Нажмите на реплику, чтобы услышать её. Выпишите все глаголы в Past Simple и разделите их на правильные и неправильные. Перескажите выходные Сары от третьего лица.</p>' },
        { t: 'dialogue', lines: [
          { en: 'Hi Sarah! How was your weekend?', ru: 'Привет, Сара! Как прошли выходные?' },
          { right: true, en: "It was great, thanks! I went to Brighton with some friends.", ru: 'Отлично, спасибо! Я ездила в Брайтон с друзьями.' },
          { en: 'Lovely! Was the weather OK?', ru: 'Здорово! Погода была нормальная?' },
          { right: true, en: "On Saturday it was sunny and warm. We walked along the beach and ate fish and chips.", ru: 'В субботу было солнечно и тепло. Мы гуляли по пляжу и ели рыбу с картошкой.' },
          { en: 'And on Sunday?', ru: 'А в воскресенье?' },
          { right: true, en: "On Sunday it rained all day! So we visited a museum and had lunch in a little café.", ru: 'В воскресенье весь день шёл дождь! Поэтому мы сходили в музей и пообедали в маленьком кафе.' },
          { en: 'Typical British weather!', ru: 'Типичная британская погода!' },
          { right: true, en: 'Exactly! What did you do?', ru: 'Точно! А ты что делал?' },
          { en: "Nothing special. I stayed at home, cleaned the flat and watched a film. I didn't go out at all.", ru: 'Ничего особенного. Сидел дома, убрал квартиру и посмотрел фильм. Вообще не выходил.' },
          { right: true, en: 'Did you like the film?', ru: 'Фильм понравился?' },
          { en: "No, I didn't. It was really boring! I fell asleep.", ru: 'Нет. Он был ужасно скучный! Я уснул.' },
        ] },
        { t: 'card', color: 'blue', title: 'Разбор диалога', html: `<ul>
          <li><strong>How was your weekend?</strong> — стандартный вопрос в понедельник</li>
          <li><strong>went, ate, had, fell</strong> — неправильные: go, eat, have, fall</li>
          <li><strong>walked, rained, visited, stayed, cleaned, watched</strong> — правильные, -ed</li>
          <li><strong>I didn’t go out at all</strong> — <em>at all</em> = «вообще» в отрицании</li></ul>` },
      ],
    },
    {
      id: 'quiz', label: '🎯 Тест',
      blocks: [
        { t: 'label', text: 'Тест — Неделя 9' },
        { t: 'quiz', items: [
          { q: 'Какая погода? — …', opts: ["What's the weather like?", 'How is weather?', 'What weather is?', 'How the weather?'], ans: 0, exp: '<em>What’s the weather like?</em> — «Какая погода?»' },
          { q: '___ raining.', opts: ['Is', 'This is', 'There is', "It's"], ans: 3, exp: 'Погоду описывает <em>it</em>: <em>It’s raining</em>.' },
          { q: 'My birthday is ___ June.', opts: ['on', 'in', 'at', 'of'], ans: 1, exp: 'Месяц — <em>in</em>: <em>in June</em>. Точная дата — <em>on</em>.' },
          { q: 'We ___ at the cinema last night.', opts: ['was', 'are', 'were', 'did'], ans: 2, exp: '<em>we</em> → <em>were</em>.' },
          { q: 'She ___ in London in 2019.', opts: ['lives', 'lived', 'livved', 'living'], ans: 1, exp: 'Прошлое, правильный глагол: <em>live → lived</em>.' },
          { q: 'I ___ to Paris last year.', opts: ['goed', 'go', 'gone', 'went'], ans: 3, exp: '<em>go → went</em> — неправильный глагол.' },
          { q: 'Did you ___ the new film?', opts: ['see', 'saw', 'seen', 'seeing'], ans: 0, exp: 'После <em>did</em> — первая форма: <em>Did you see…?</em>' },
          { q: 'He ___ come to the party.', opts: ["doesn't", "wasn't", "didn't", 'not'], ans: 2, exp: 'Отрицание в прошлом — <em>didn’t</em> + глагол.' },
          { q: 'Как читается «wanted»?', opts: ['[wɒntd]', '[wɒntt]', '[wɒntɪd]', '[wɒnted]'], ans: 2, exp: 'После <em>t</em> и <em>d</em> окончание -ed читается [ɪd]: <em>wanted, needed</em>.' },
          { q: 'Осень (UK) — …', opts: ['fall', 'autumn', 'spring', 'winter'], ans: 1, exp: 'В британском — <em>autumn</em>, в американском — <em>fall</em>.' },
        ] },
      ],
    },
    {
      id: 'feynman', label: '✍️ Фейнман',
      blocks: [
        { t: 'label', text: 'Дневник Фейнмана — Неделя 9' },
        { t: 'journal', items: [
          {
            label: 'Задание 1 · Объяснение концепта',
            prompt: 'Объясните ребёнку, почему в <span class="en">She went</span> глагол меняется, а в <span class="en">Did she go?</span> — нет. Найдите сходство с <span class="en">does</span> из недели 3.',
            placeholder: 'Did — это помощник, который…',
            keys: ['помощ', 'did', 'does', 'перв', 'забира', 'прошл', 'переход'],
            ok: '✓ Отлично! Схема одна и та же: помощник берёт на себя грамматику. В настоящем <em>does</em> забирает -s, в прошлом <em>did</em> забирает «прошедшесть». Основной глагол остаётся в словарной форме: <em>Does she go? / Did she go?</em><br><br>Пробел для углубления: почему с <em>was / were</em> помощник не нужен?',
            tip: '💡 Подсказка: вспомните <em>She works → Does she work?</em> Окончание -s ушло в <em>does</em>. Что происходит с прошлым временем в <em>She worked → Did she work?</em>',
          },
          {
            label: 'Задание 2 · Производство языка',
            prompt: 'Расскажите о своих прошлых выходных или отпуске (10 предложений): где вы были, какая была погода, что делали. Используйте <em>was / were</em>, минимум 4 правильных и 4 неправильных глагола.',
            placeholder: 'Last weekend I was… The weather was… I went…',
            ok: '✓ Хорошо! Проверьте:<br><br>• Одна форма для всех лиц: <em>I went, she went</em><br>• <em>It was sunny</em> — погода через <em>it</em><br>• После <em>did / didn’t</em> — глагол без -ed<br>• Произношение -ed: <em>walked</em> [t], <em>played</em> [d], <em>visited</em> [ɪd]<br><br>Расскажите эту историю вслух, не глядя в текст.',
          },
          {
            label: 'Задание 3 · Пробелы недели',
            prompt: 'Какие неправильные глаголы не запоминаются? Выпишите их и придумайте для каждого «крючок» — образ или созвучие.',
            placeholder: 'Не запоминаются: bought, thought…',
            ok: '✓ Отлично. Пример крючков: <em>ate</em> звучит почти как <em>eight</em> — «я съел восемь пирожков»; <em>bought</em> и <em>thought</em> рифмуются — «подумал и купил». Абсурдный образ запоминается лучше. Повторяйте по 5 глаголов в день в тесте Dictionary English.',
          },
        ] },
      ],
    },
  ],
});
