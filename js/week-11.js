// A1 · Неделя 11 — Хобби · Сравнения · Мнения
COURSE.weeks.push({
  n: 11,
  title: 'Хобби · Сравнения · Мнения',
  tabs: [
    {
      id: 'plan', label: '📅 План',
      blocks: [
        { t: 'plan',
          goal: 'Рассказать о хобби и свободном времени, сравнить города, фильмы и людей. Использовать <em>like / love / hate + -ing</em>, сравнительную и превосходную степень, высказать мнение и согласиться или возразить.',
          days: [
            { title: 'Хобби и спорт', tasks: ['play football, go swimming, do yoga', 'I like / love / hate + -ing', 'Фейнман: play, go или do?'] },
            { title: 'Умения и интересы', tasks: ['be good at, be interested in', 'Would you like to…? — приглашение', '6 предложений о своих увлечениях'] },
            { title: 'Сравнительная степень', tasks: ['bigger, more interesting, better', 'than: London is bigger than Paris', 'Сравнить два города — 8 предложений'] },
            { title: 'Превосходная степень', tasks: ['the biggest, the most expensive, the best', 'Самые-самые факты о вашей стране', 'as … as: She’s as tall as me'] },
            { title: 'Мнения', tasks: ['I think… / In my opinion…', 'I agree / I don’t agree', 'Обсудить фильм или книгу'] },
            { title: 'Диалог и тест', tasks: ['Диалог «Чем займёмся в выходные?»', 'Пройти тест недели', 'Посмотреть отрывок британского сериала с субтитрами'] },
            { title: 'Фейнман-урок недели', tasks: ['Объясните, когда -er, а когда more', 'Сравните две страны — 1 минута', 'Пробелы → план на неделю 12'] },
          ] },
      ],
    },
    {
      id: 'hobbies', label: '🎨 Хобби',
      blocks: [
        { t: 'label', text: 'Free time — нажмите для произношения' },
        { t: 'grid', items: [
          { icon: '⚽', en: 'play football', ru: 'играть в футбол', ex: 'в США — soccer' },
          { icon: '🎾', en: 'play tennis', ru: 'играть в теннис' },
          { icon: '🎸', en: 'play the guitar', ru: 'играть на гитаре', ex: 'инструмент — с the' },
          { icon: '🎮', en: 'play computer games', ru: 'играть в компьютерные игры' },
          { icon: '🏊', en: 'go swimming', ru: 'плавать', ex: 'go + -ing' },
          { icon: '🚴', en: 'go cycling', ru: 'кататься на велосипеде' },
          { icon: '🏃', en: 'go running', ru: 'бегать' },
          { icon: '🛍', en: 'go shopping', ru: 'ходить по магазинам' },
          { icon: '🧘', en: 'do yoga', ru: 'заниматься йогой' },
          { icon: '🏋️', en: 'do exercise', ru: 'делать зарядку, заниматься спортом' },
          { icon: '📸', en: 'take photos', ru: 'фотографировать' },
          { icon: '🍳', en: 'cooking', ru: 'готовка' },
          { icon: '📚', en: 'reading', ru: 'чтение' },
          { icon: '🎨', en: 'painting / drawing', ru: 'живопись / рисование' },
          { icon: '🌱', en: 'gardening', ru: 'садоводство', ex: 'любимое хобби британцев' },
          { icon: '🥾', en: 'hiking', ru: 'пешие походы' },
          { icon: '🎵', en: 'listen to music', ru: 'слушать музыку', ex: 'listen to — всегда с to' },
          { icon: '🍿', en: 'watch films', ru: 'смотреть фильмы', ex: 'в США — movies' },
        ] },
        { t: 'card', color: 'gold', title: 'Фейнман: play, go или do?', html: `<ul>
          <li><span class="en">play</span> — игры с мячом и соперником, музыкальные инструменты: <span class="en">play chess, play the piano</span></li>
          <li><span class="en">go</span> + <strong>-ing</strong> — занятия, куда «идёшь»: <span class="en">go swimming, go skiing, go dancing</span></li>
          <li><span class="en">do</span> — индивидуальные занятия без мяча: <span class="en">do yoga, do karate, do exercise</span></li></ul>` },
        { t: 'label', text: 'Like, love, hate + -ing', top: true },
        { t: 'table', head: ['', 'Пример', 'Перевод'], rows: [
          ['😍 <span class="conj">love</span>', '<span class="en">I love cooking.</span>', 'Обожаю готовить.'],
          ['🙂 <span class="conj">like / enjoy</span>', '<span class="en">She likes reading. We enjoy walking.</span>', 'Ей нравится читать. Нам нравится гулять.'],
          ['😐 <span class="conj">don’t mind</span>', '<span class="en">I don’t mind waiting.</span>', 'Я не против подождать.'],
          ['🙁 <span class="conj">don’t like</span>', '<span class="en">He doesn’t like flying.</span>', 'Он не любит летать.'],
          ['😖 <span class="conj">hate</span>', '<span class="en">I hate getting up early.</span>', 'Ненавижу рано вставать.'],
        ] },
        { t: 'card', color: 'red', title: 'Like и would like', html: '<p><span class="en">I like dancing</span> — мне нравится танцевать (вообще). <span class="en">I’d like to dance</span> — я хотел бы потанцевать (сейчас). <span class="en">Would you like to come to the cinema?</span> — приглашение. Ответ: <span class="en">I’d love to!</span> / <span class="en">Sorry, I can’t.</span></p>' },
        { t: 'card', color: 'blue', title: 'Интересы и умения', html: '<p><span class="en">I’m good at cooking.</span> — Я хорошо готовлю. · <span class="en">I’m bad at maths.</span> — У меня плохо с математикой. · <span class="en">I’m interested in history.</span> — Мне интересна история. · <span class="en">I’m into jazz.</span> — Я увлекаюсь джазом (разг.). После предлога — <strong>-ing</strong>: <span class="en">good at swimming</span>.</p>' },
      ],
    },
    {
      id: 'comparative', label: '📊 Сравнение',
      blocks: [
        { t: 'label', text: 'Сравнительная степень — «больше, чем»' },
        { t: 'table', head: ['Прилагательное', 'Правило', 'Сравнительная'], rows: [
          ['<span class="conj">small, cheap, old</span>', 'короткое: + -er', '<span class="conj">smaller, cheaper, older</span>'],
          ['<span class="conj">nice, large</span>', 'на -e: + -r', '<span class="conj">nicer, larger</span>'],
          ['<span class="conj">big, hot, thin</span>', 'гласная + согласная: удвоение', '<span class="conj">bigger, hotter, thinner</span>'],
          ['<span class="conj">happy, easy, busy</span>', 'на -y: → -ier', '<span class="conj">happier, easier, busier</span>'],
          ['<span class="conj">expensive, interesting</span>', 'длинное: more + …', '<span class="conj">more expensive, more interesting</span>'],
          ['<span class="conj">good / bad / far</span>', 'неправильные', '<span class="conj">better / worse / further</span>'],
        ] },
        { t: 'card', color: 'gold', title: 'Than — «чем»', html: '<p><span class="en">London is bigger than Manchester.</span> · <span class="en">Trains are more comfortable than buses.</span> · <span class="en">My English is better than last year.</span> После <span class="en">than</span> местоимение — объектное: <span class="en">She’s taller than me.</span></p>' },
        { t: 'card', color: 'blue', title: 'Фейнман: короткое или длинное?', html: '<p>Правило о длине слова: один слог (<em>big, cheap</em>) — <strong>-er</strong>; два слога на -y (<em>happy</em>) — <strong>-ier</strong>; два и больше слогов (<em>modern, expensive</em>) — <strong>more</strong>. Сравните: <span class="en">cheaper</span>, но <span class="en">more expensive</span>.</p>' },
        { t: 'label', text: 'as … as — «такой же, как»', top: true },
        { t: 'grid', items: [
          { en: "She's as tall as her mother.", ru: 'Она такая же высокая, как её мама.' },
          { en: "This flat isn't as big as our old one.", ru: 'Эта квартира не такая большая, как наша старая.' },
          { en: "It's not as cold as yesterday.", ru: 'Не так холодно, как вчера.' },
          { en: 'a bit cheaper / much better', ru: 'немного дешевле / намного лучше' },
        ] },
      ],
    },
    {
      id: 'superlative', label: '🏆 Самый',
      blocks: [
        { t: 'label', text: 'Превосходная степень — «самый»' },
        { t: 'table', head: ['Прилагательное', 'Сравнительная', 'Превосходная'], rows: [
          ['<span class="conj">cheap</span>', '<span class="conj">cheaper</span>', '<span class="conj">the cheapest</span>'],
          ['<span class="conj">big</span>', '<span class="conj">bigger</span>', '<span class="conj">the biggest</span>'],
          ['<span class="conj">happy</span>', '<span class="conj">happier</span>', '<span class="conj">the happiest</span>'],
          ['<span class="conj">beautiful</span>', '<span class="conj">more beautiful</span>', '<span class="conj">the most beautiful</span>'],
          ['<span class="conj">good</span>', '<span class="conj">better</span>', '<span class="conj">the best</span>'],
          ['<span class="conj">bad</span>', '<span class="conj">worse</span>', '<span class="conj">the worst</span>'],
          ['<span class="conj">far</span>', '<span class="conj">further</span>', '<span class="conj">the furthest</span>'],
        ] },
        { t: 'card', color: 'gold', title: 'Всегда с the', html: '<p>«Самый» — единственный в своём роде, поэтому артикль <span class="en">the</span>: <span class="en">the tallest building</span>, <span class="en">the best day of my life</span>. Место — с <span class="en">in</span>: <span class="en">the biggest city in the UK</span>; группа — с <span class="en">of</span>: <span class="en">the youngest of three children</span>.</p>' },
        { t: 'label', text: 'Факты о Британии — нажмите', top: true },
        { t: 'grid', items: [
          { icon: '🏙', en: 'London is the biggest city in the UK.', ru: 'Лондон — самый большой город Великобритании.' },
          { icon: '⛰', en: 'Ben Nevis is the highest mountain in Britain.', ru: 'Бен-Невис — самая высокая гора Британии.' },
          { icon: '🌊', en: 'The Severn is the longest river in the UK.', ru: 'Северн — самая длинная река Великобритании.' },
          { icon: '🎓', en: 'Oxford is the oldest university in England.', ru: 'Оксфорд — старейший университет Англии.' },
        ] },
      ],
    },
    {
      id: 'opinions', label: '💭 Мнения',
      blocks: [
        { t: 'label', text: 'Как высказать мнение' },
        { t: 'grid', items: [
          { en: 'I think (that)…', ru: 'Я думаю, что…' },
          { en: "I don't think…", ru: 'Я не думаю, что…', ex: "I don't think it's true." },
          { en: 'In my opinion…', ru: 'По-моему…' },
          { en: 'For me…', ru: 'Для меня…' },
          { en: 'What do you think about…?', ru: 'Что ты думаешь о…?' },
          { en: 'What about you?', ru: 'А ты?' },
        ] },
        { t: 'label', text: 'Согласие и несогласие', top: true },
        { t: 'compare', cols: [
          { title: 'Согласен', cls: 'green', items: ['<span class="en">I agree.</span>', '<span class="en">You’re right.</span>', '<span class="en">Me too. / Me neither.</span>', '<span class="en">Exactly!</span>'] },
          { title: 'Не согласен', cls: 'red', items: ['<span class="en">I don’t agree.</span>', '<span class="en">I’m not sure.</span>', '<span class="en">I see what you mean, but…</span>', '<span class="en">Really? I think…</span>'] },
        ] },
        { t: 'card', color: 'red', title: 'I agree — без am', html: '<p>✗ <em>I am agree</em> — частая ошибка русскоязычных. <span class="en">agree</span> — глагол: <span class="en">I agree</span>, <span class="en">She doesn’t agree</span>, <span class="en">Do you agree?</span></p>' },
        { t: 'card', color: 'gold', title: 'Британская вежливость', html: '<p>Британцы редко возражают прямо. Вместо <span class="en">No, you’re wrong</span> скажут <span class="en">I’m not sure about that</span> или <span class="en">That’s an interesting idea, but…</span> А <span class="en">Not bad</span> часто значит «очень хорошо».</p>' },
        { t: 'label', text: 'Прилагательные для мнения', top: true },
        { t: 'grid', items: [
          { en: 'interesting / boring', ru: 'интересный / скучный' },
          { en: 'funny', ru: 'смешной', ex: 'не «весёлый» — fun' },
          { en: 'exciting', ru: 'захватывающий' },
          { en: 'amazing / brilliant', ru: 'потрясающий / блестящий', ex: 'brilliant — очень британское' },
          { en: 'awful / terrible', ru: 'ужасный' },
          { en: 'scary', ru: 'страшный' },
        ] },
      ],
    },
    {
      id: 'dialogue', label: '💬 Диалог',
      blocks: [
        { t: 'label', text: 'Диалог — чем займёмся в субботу?' },
        { t: 'card', color: 'gold', title: 'Как работать', html: '<p>Нажмите на реплику, чтобы услышать её. Найдите все сравнения и выражения мнения. Разыграйте диалог, предложив другие занятия.</p>' },
        { t: 'dialogue', lines: [
          { en: 'What would you like to do on Saturday?', ru: 'Чем бы ты хотела заняться в субботу?' },
          { right: true, en: "I'd love to go to the cinema. There's a new comedy.", ru: 'Я бы с удовольствием сходила в кино. Вышла новая комедия.' },
          { en: "Hmm, I don't really like comedies. I think action films are more exciting.", ru: 'Хм, я не очень люблю комедии. По-моему, боевики интереснее.' },
          { right: true, en: "Really? I find them boring. Action films are all the same!", ru: 'Правда? Мне они скучны. Боевики все одинаковые!' },
          { en: "OK, what about going hiking? The weather's going to be lovely.", ru: 'Ладно, а что насчёт похода? Погода обещает быть чудесной.' },
          { right: true, en: "That's a good idea! But not too far. I'm not as fit as you.", ru: 'Хорошая идея! Но не слишком далеко. Я не в такой форме, как ты.' },
          { en: "Let's go to the Lake District. It's the most beautiful place in England.", ru: 'Поехали в Озёрный край. Это самое красивое место в Англии.' },
          { right: true, en: "I agree! But it's further than the Peak District.", ru: 'Согласна! Но он дальше, чем Пик-Дистрикт.' },
          { en: "True. The Peak District is closer and cheaper. Let's go there!", ru: 'Верно. Пик-Дистрикт ближе и дешевле. Поехали туда!' },
          { right: true, en: "Perfect. And in the evening we can watch my comedy!", ru: 'Отлично. А вечером можем посмотреть мою комедию!' },
        ] },
        { t: 'card', color: 'blue', title: 'Разбор диалога', html: `<ul>
          <li><strong>What about going…?</strong> — «как насчёт…?», после about — <em>-ing</em></li>
          <li><strong>more exciting, further, closer, cheaper</strong> — сравнительная степень</li>
          <li><strong>the most beautiful place in England</strong> — превосходная с <em>in</em></li>
          <li><strong>I’m not as fit as you</strong> — <em>as … as</em> в отрицании</li></ul>` },
      ],
    },
    {
      id: 'quiz', label: '🎯 Тест',
      blocks: [
        { t: 'label', text: 'Тест — Неделя 11' },
        { t: 'quiz', items: [
          { q: 'I love ___.', opts: ['cook', 'to cooking', 'cooking', 'cooks'], ans: 2, exp: 'После <em>love / like / hate</em> о хобби — <em>-ing</em>.' },
          { q: 'She ___ yoga twice a week.', opts: ['plays', 'does', 'goes', 'makes'], ans: 1, exp: 'Индивидуальные занятия без мяча — <em>do</em>: <em>do yoga</em>.' },
          { q: 'We often go ___ in the sea.', opts: ['swimming', 'swim', 'to swim', 'swimmed'], ans: 0, exp: '<em>go + -ing</em>: <em>go swimming</em>.' },
          { q: 'London is ___ than Oxford.', opts: ['big', 'biggest', 'more big', 'bigger'], ans: 3, exp: 'Короткое прилагательное: <em>big → bigger</em> (удвоение).' },
          { q: 'This hotel is ___ than that one.', opts: ['expensiver', 'more expensive', 'most expensive', 'expensive'], ans: 1, exp: 'Длинное прилагательное → <em>more expensive</em>.' },
          { q: 'My English is ___ now.', opts: ['better', 'more good', 'gooder', 'best'], ans: 0, exp: '<em>good → better → the best</em>.' },
          { q: 'It’s ___ day of the year!', opts: ['the hotter', 'hottest', 'most hot', 'the hottest'], ans: 3, exp: 'Превосходная — с <em>the</em>: <em>the hottest</em>.' },
          { q: 'He’s as tall ___ his father.', opts: ['than', 'like', 'as', 'that'], ans: 2, exp: '<em>as … as</em> — «такой же, как».' },
          { q: 'Я согласен. — …', opts: ['I am agree.', 'I agree.', 'I agreed am.', 'Me agree.'], ans: 1, exp: '<em>agree</em> — глагол, без <em>am</em>: <em>I agree</em>.' },
          { q: 'I’m good ___ drawing.', opts: ['at', 'on', 'in', 'for'], ans: 0, exp: '<em>be good at</em> + -ing.' },
        ] },
      ],
    },
    {
      id: 'feynman', label: '✍️ Фейнман',
      blocks: [
        { t: 'label', text: 'Дневник Фейнмана — Неделя 11' },
        { t: 'journal', items: [
          {
            label: 'Задание 1 · Объяснение концепта',
            prompt: 'Объясните ребёнку, почему говорят <span class="en">cheaper</span>, но <span class="en">more expensive</span>, и почему <span class="en">good</span> превращается в <span class="en">better</span>.',
            placeholder: 'Короткие слова получают -er, а длинные…',
            keys: ['коротк', 'длинн', 'слог', 'more', '-er', 'исключ', 'неправильн'],
            ok: '✓ Отлично! Длина слова определяет способ: короткому слову легко добавить окончание (<em>cheap-er</em>), а длинное с окончанием звучало бы тяжело (<em>expensiv-er</em>), поэтому ставят <em>more</em>. <em>good / bad / far</em> — древние исключения, их просто запоминают.<br><br>Пробел для углубления: как сказать «чем больше, тем лучше»? (<em>The more, the better.</em>)',
            tip: '💡 Подсказка: посчитайте слоги в <em>cheap</em> и <em>ex-pen-sive</em>. Как связано число слогов со способом сравнения?',
          },
          {
            label: 'Задание 2 · Производство языка',
            prompt: 'Сравните свой город с другим городом или страной (8–10 предложений): размер, погода, цены, люди. Используйте сравнительную и превосходную степень, <em>as … as</em> и выражения мнения.',
            placeholder: 'Moscow is bigger than London, but I think London is more…',
            ok: '✓ Хорошо! Проверьте:<br><br>• <em>than</em>, а не <em>that</em>: <em>bigger than</em><br>• Не удваивайте сравнение: ✗ <em>more bigger</em><br>• <em>the</em> перед превосходной: <em>the best</em><br>• <em>I think</em> + полное предложение<br><br>Это готовый текст для устной части экзамена — прочитайте вслух.',
          },
          {
            label: 'Задание 3 · Пробелы недели',
            prompt: 'Что из недели было труднее: play / go / do, -ing после like, степени сравнения, мнения? Опишите конкретно.',
            placeholder: 'Мне сложнее всего…',
            ok: '✓ Хорошо. Следующая неделя — финальная: экзамен по всему курсу. Перед ним повторите темы, которые сейчас записали как пробелы, и пройдите заново тесты недель, где результат ниже 70%.',
          },
        ] },
      ],
    },
  ],
});
