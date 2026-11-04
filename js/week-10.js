// A1 · Неделя 10 — Работа · Модальные · Планы
COURSE.weeks.push({
  n: 10,
  title: 'Работа · Модальные · Планы',
  tabs: [
    {
      id: 'plan', label: '📅 План',
      blocks: [
        { t: 'plan',
          goal: 'Рассказать о своей работе и обязанностях, пройти простое собеседование. Использовать <em>must / have to / don’t have to</em> и говорить о планах и будущем с <em>going to</em> и <em>will</em>.',
          days: [
            { title: 'Профессии', tasks: ['doctor, engineer, shop assistant…', 'What do you do? — I’m a… / I work as…', 'Фейнман: зачем a перед профессией'] },
            { title: 'Обязанности', tasks: ['have to / don’t have to', 'must / mustn’t — правила и запреты', '6 предложений о том, что вы должны делать на работе'] },
            { title: 'Going to — планы', tasks: ['I’m going to + глагол', 'Планы на выходные, год, жизнь', '8 предложений о своих планах'] },
            { title: 'Will — решения и прогнозы', tasks: ['I’ll help you! — решение сейчас', 'It will rain — прогноз', 'Going to или will — тест'] },
            { title: 'На работе', tasks: ['телефон и e-mail: Could I speak to…?', 'Dear…, Best regards', 'Написать короткое письмо коллеге'] },
            { title: 'Собеседование', tasks: ['Диалог — обе роли', 'Пройти тест недели', 'Подготовить рассказ о себе на 1 минуту'] },
            { title: 'Фейнман-урок недели', tasks: ['Объясните разницу mustn’t и don’t have to', 'Расскажите о планах на год — 1 минута', 'Пробелы → план на неделю 11'] },
          ] },
      ],
    },
    {
      id: 'jobs', label: '👔 Профессии',
      blocks: [
        { t: 'label', text: 'Jobs — нажмите для произношения' },
        { t: 'grid', items: [
          { icon: '👨‍⚕️', en: 'doctor', ipa: '[ˈdɒktə]', ru: 'врач' },
          { icon: '👩‍⚕️', en: 'nurse', ipa: '[nɜːs]', ru: 'медсестра, медбрат' },
          { icon: '👩‍🏫', en: 'teacher', ipa: '[ˈtiːtʃə]', ru: 'учитель' },
          { icon: '👷', en: 'engineer', ipa: '[ˌendʒɪˈnɪə]', ru: 'инженер' },
          { icon: '💻', en: 'programmer / developer', ru: 'программист' },
          { icon: '🧑‍💼', en: 'manager', ipa: '[ˈmænɪdʒə]', ru: 'менеджер, руководитель' },
          { icon: '📊', en: 'accountant', ipa: '[əˈkaʊntənt]', ru: 'бухгалтер' },
          { icon: '⚖️', en: 'lawyer', ipa: '[ˈlɔːjə]', ru: 'юрист' },
          { icon: '🛒', en: 'shop assistant', ru: 'продавец', ex: 'в США — sales clerk' },
          { icon: '🍽', en: 'waiter / waitress', ru: 'официант / официантка' },
          { icon: '👨‍🍳', en: 'chef / cook', ipa: '[ʃef]', ru: 'шеф-повар / повар' },
          { icon: '🚗', en: 'driver', ipa: '[ˈdraɪvə]', ru: 'водитель' },
          { icon: '👮', en: 'police officer', ru: 'полицейский' },
          { icon: '🔧', en: 'mechanic', ipa: '[məˈkænɪk]', ru: 'механик' },
          { icon: '🏗', en: 'builder', ipa: '[ˈbɪldə]', ru: 'строитель' },
          { icon: '🎓', en: 'student', ipa: '[ˈstjuːdnt]', ru: 'студент' },
          { icon: '🏡', en: 'retired', ipa: '[rɪˈtaɪəd]', ru: 'на пенсии', ex: "I'm retired." },
          { icon: '🔍', en: 'unemployed', ru: 'безработный', ex: "I'm looking for a job." },
        ] },
        { t: 'card', color: 'blue', title: 'Как рассказать о работе', html: `<ul>
          <li><span class="en">What do you do?</span> — Кем вы работаете? (не «Что вы делаете?»)</li>
          <li><span class="en">I’m an engineer.</span> — с артиклем <strong>a / an</strong>: «я один из инженеров»</li>
          <li><span class="en">I work as a manager.</span> — работаю менеджером</li>
          <li><span class="en">I work for Google / in a bank / from home.</span> — на компанию / в банке / из дома</li>
          <li><span class="en">I’m responsible for…</span> — я отвечаю за…</li></ul>` },
        { t: 'card', color: 'red', title: 'Ложные друзья', html: '<p><span class="en">a director</span> — член правления, а не всегда «директор»; руководитель — чаще <span class="en">manager</span> или <span class="en">head of…</span> · <span class="en">a specialist</span> — узкий специалист (врач-специалист) · <span class="en">a career</span> — карьера, а не «карьер»</p>' },
        { t: 'label', text: 'Работа: полезные слова', top: true },
        { t: 'grid', items: [
          { en: 'office', ru: 'офис' },
          { en: 'colleague', ipa: '[ˈkɒliːɡ]', ru: 'коллега' },
          { en: 'boss', ru: 'начальник' },
          { en: 'salary', ipa: '[ˈsæləri]', ru: 'зарплата' },
          { en: 'meeting', ru: 'встреча, совещание' },
          { en: 'full-time / part-time', ru: 'полный / неполный день' },
          { en: 'day off', ru: 'выходной' },
          { en: 'holiday', ru: 'отпуск', ex: 'в США — vacation' },
        ] },
      ],
    },
    {
      id: 'modals', label: '⚙️ Must / have to',
      blocks: [
        { t: 'label', text: 'Обязанность, запрет, отсутствие необходимости' },
        { t: 'table', head: ['Форма', 'Значение', 'Пример'], rows: [
          ['<span class="conj">must</span> + глагол', 'должен (сам считаю нужным, правило)', '<span class="en">I must call my mum. You must wear a seat belt.</span>'],
          ['<span class="conj">have to / has to</span>', 'приходится, обязан (так требуют)', '<span class="en">I have to start work at 8. She has to wear a uniform.</span>'],
          ['<span class="conj">mustn’t</span>', 'нельзя, запрещено', '<span class="en">You mustn’t smoke here.</span>'],
          ['<span class="conj">don’t have to</span>', 'не обязательно, не нужно', '<span class="en">You don’t have to come. It’s optional.</span>'],
          ['<span class="conj">can’t</span>', 'нельзя (не разрешено)', '<span class="en">You can’t park here.</span>'],
        ] },
        { t: 'card', color: 'red', title: 'mustn’t ≠ don’t have to', html: '<p>Это самая важная пара недели. <span class="en">You mustn’t tell him</span> — тебе нельзя ему говорить (запрет). <span class="en">You don’t have to tell him</span> — тебе не обязательно ему говорить (можешь, но не нужно). Ошибка меняет смысл на противоположный!</p>' },
        { t: 'card', color: 'gold', title: 'Фейнман: have to — обычный глагол', html: '<p><span class="en">must</span> — модальный, как <em>can</em>: без -s и без <em>do</em>. А <span class="en">have to</span> ведёт себя как обычный глагол: <span class="en">she has to</span>, <span class="en">Do you have to…?</span>, <span class="en">I didn’t have to…</span>. Поэтому в прошлом времени используют только его: <span class="en">I had to work late yesterday.</span></p>' },
        { t: 'grid', items: [
          { en: 'Do you have to work at weekends?', ru: 'Вам приходится работать по выходным?' },
          { en: "I don't have to wear a suit.", ru: 'Мне не обязательно носить костюм.' },
          { en: 'He has to travel a lot.', ru: 'Ему приходится много ездить.' },
          { en: 'You must be on time.', ru: 'Ты должен приходить вовремя.' },
          { en: "You mustn't use your phone in the exam.", ru: 'На экзамене нельзя пользоваться телефоном.' },
          { en: 'I had to stay late yesterday.', ru: 'Вчера мне пришлось задержаться.' },
        ] },
      ],
    },
    {
      id: 'future', label: '🔮 Будущее',
      blocks: [
        { t: 'label', text: 'Going to и will' },
        { t: 'compare', cols: [
          { title: 'Going to — план, намерение', items: ['Решили заранее:', '<span class="en">I’m going to look for a new job.</span>', '<span class="en">We’re going to visit Scotland in July.</span>', 'Видим признаки: <span class="en">Look at those clouds! It’s going to rain.</span>'] },
          { title: 'Will — решение сейчас, прогноз', cls: 'gold', items: ['Решили в момент речи:', '<span class="en">The phone is ringing. — I’ll answer it!</span>', 'Предложения и обещания: <span class="en">I’ll help you.</span>', 'Мнение о будущем: <span class="en">I think it will be a good year.</span>'] },
        ] },
        { t: 'table', head: ['', 'Going to', 'Will'], rows: [
          ['Утверждение', '<span class="conj">I’m / she’s / they’re going to</span> + глагол', '<span class="conj">I’ll / she’ll / they’ll</span> + глагол'],
          ['Отрицание', '<span class="conj">I’m not going to…</span>', '<span class="conj">I won’t</span> (will not)'],
          ['Вопрос', '<span class="conj">Are you going to…?</span>', '<span class="conj">Will you…?</span>'],
        ] },
        { t: 'card', color: 'blue', title: 'Фейнман: календарь и импульс', html: '<p><span class="en">going to</span> — то, что уже записано в вашем «календаре» (план). <span class="en">will</span> — импульс «здесь и сейчас»: <span class="en">I’m hungry. — I’ll make you a sandwich!</span> Если план уже есть и договорились — можно и Present Continuous: <span class="en">I’m meeting Tom at 6.</span></p>' },
        { t: 'card', color: 'red', title: 'Won’t и want', html: '<p><span class="en">won’t</span> [wəʊnt] — «не буду», <span class="en">want</span> [wɒnt] — «хочу». Звучат похоже — следите за гласной: <span class="en">I won’t go.</span> / <span class="en">I want to go.</span></p>' },
        { t: 'label', text: 'Маркеры будущего', top: true },
        { t: 'grid', items: [
          { en: 'tomorrow', ru: 'завтра' },
          { en: 'next week / month / year', ru: 'на следующей неделе / в следующем месяце / году' },
          { en: 'in two days', ru: 'через два дня' },
          { en: 'soon', ru: 'скоро' },
          { en: 'one day', ru: 'однажды, когда-нибудь' },
          { en: 'this evening', ru: 'сегодня вечером' },
        ] },
      ],
    },
    {
      id: 'workplace', label: '🏢 На работе',
      blocks: [
        { t: 'label', text: 'Телефон' },
        { t: 'grid', items: [
          { en: 'Hello, this is Anna from Smith & Co.', ru: 'Здравствуйте, это Анна из Smith & Co.', ex: 'по телефону — this is, а не I am' },
          { en: 'Could I speak to Mr Brown, please?', ru: 'Могу я поговорить с мистером Брауном?' },
          { en: 'Hold on, please.', ru: 'Подождите, пожалуйста.' },
          { en: "I'm afraid he's in a meeting.", ru: 'К сожалению, он на совещании.' },
          { en: 'Can I take a message?', ru: 'Ему что-нибудь передать?' },
          { en: "I'll call back later.", ru: 'Я перезвоню позже.' },
        ] },
        { t: 'label', text: 'E-mail', top: true },
        { t: 'card', color: 'blue', title: 'Структура делового письма', html: `<p><span class="en">Dear Mr Brown,</span> — официально (знаете фамилию) · <span class="en">Hi Tom,</span> — коллеге</p>
          <p><span class="en">I’m writing to ask about…</span> — Пишу, чтобы узнать о… · <span class="en">Thank you for your e-mail.</span> — Спасибо за письмо. · <span class="en">Please find attached…</span> — Во вложении…</p>
          <p><span class="en">I look forward to hearing from you.</span> — Жду ответа. · <span class="en">Best regards,</span> / <span class="en">Kind regards,</span> — С уважением</p>` },
        { t: 'card', color: 'gold', title: 'Mr, Mrs, Ms', html: '<p><span class="en">Mr</span> [ˈmɪstə] — мужчине · <span class="en">Mrs</span> [ˈmɪsɪz] — замужней женщине · <span class="en">Ms</span> [mɪz] — женщине, нейтрально (в деловой переписке лучше это) · <span class="en">Miss</span> — девушке. В британском без точки: <span class="en">Mr Smith</span>, в американском — Mr. Smith.</p>' },
      ],
    },
    {
      id: 'dialogue', label: '💬 Диалог',
      blocks: [
        { t: 'label', text: 'Диалог — собеседование' },
        { t: 'card', color: 'gold', title: 'Как работать', html: '<p>Нажмите на реплику, чтобы услышать её. Найдите <em>have to</em>, <em>going to</em> и <em>will</em>. Подготовьте свои ответы на вопросы интервьюера.</p>' },
        { t: 'dialogue', lines: [
          { right: true, av: '👩‍💼', en: 'Good morning. Please, take a seat. So, tell me about yourself.', ru: 'Доброе утро. Присаживайтесь. Расскажите о себе.' },
          { en: "Good morning. My name is Ivan. I'm a software developer, and I've got five years' experience.", ru: 'Доброе утро. Меня зовут Иван. Я разработчик, у меня пять лет опыта.' },
          { right: true, av: '👩‍💼', en: 'Where do you work now?', ru: 'Где вы сейчас работаете?' },
          { en: 'I work for a small company in Manchester. I make mobile apps.', ru: 'В небольшой компании в Манчестере. Делаю мобильные приложения.' },
          { right: true, av: '👩‍💼', en: 'Why do you want to change your job?', ru: 'Почему вы хотите сменить работу?' },
          { en: "I want to work in a bigger team. And I'm going to move to London next month.", ru: 'Хочу работать в большей команде. И в следующем месяце я переезжаю в Лондон.' },
          { right: true, av: '👩‍💼', en: "In this job you have to work in the office three days a week. Is that OK?", ru: 'На этой должности нужно работать в офисе три дня в неделю. Вас устраивает?' },
          { en: "Yes, that's fine. Do I have to work at weekends?", ru: 'Да, хорошо. А по выходным работать нужно?' },
          { right: true, av: '👩‍💼', en: "No, you don't have to. But sometimes you must be available for urgent problems.", ru: 'Нет, не нужно. Но иногда вы должны быть на связи из-за срочных проблем.' },
          { en: 'I understand. When can I start?', ru: 'Понятно. Когда я смогу начать?' },
          { right: true, av: '👩‍💼', en: "We'll let you know by Friday. Thank you for coming!", ru: 'Мы сообщим вам до пятницы. Спасибо, что пришли!' },
        ] },
        { t: 'card', color: 'blue', title: 'Разбор диалога', html: `<ul>
          <li><strong>Tell me about yourself</strong> — первый вопрос почти любого собеседования</li>
          <li><strong>five years’ experience</strong> — пять лет опыта, апостроф после years</li>
          <li><strong>I’m going to move</strong> — план уже решён</li>
          <li><strong>We’ll let you know</strong> — обещание: сообщим</li></ul>` },
      ],
    },
    {
      id: 'quiz', label: '🎯 Тест',
      blocks: [
        { t: 'label', text: 'Тест — Неделя 10' },
        { t: 'quiz', items: [
          { q: 'What do you do? — …', opts: ["I'm a doctor.", "I'm doctor.", 'I do doctor.', 'I am the doctor work.'], ans: 0, exp: 'Профессия — с артиклем: <em>I’m a doctor</em>.' },
          { q: 'She ___ wear a uniform at work.', opts: ['have to', 'haves to', 'must to', 'has to'], ans: 3, exp: 'he / she → <em>has to</em>.' },
          { q: 'Курить здесь запрещено. — You ___ smoke here.', opts: ["mustn't", "don't have to", "haven't", "won't"], ans: 0, exp: 'Запрет — <em>mustn’t</em>.' },
          { q: 'Тебе не обязательно приходить. — You ___ come.', opts: ["mustn't", "can't", "don't have to", "shouldn't to"], ans: 2, exp: 'Нет необходимости — <em>don’t have to</em>.' },
          { q: 'Yesterday I ___ work late.', opts: ['must', 'musted', 'have to', 'had to'], ans: 3, exp: 'У <em>must</em> нет прошедшего времени → <em>had to</em>.' },
          { q: 'Мы собираемся в Шотландию летом. — We ___ visit Scotland.', opts: ['will', 'are going to', 'going to', 'go to'], ans: 1, exp: 'Заранее решённый план → <em>are going to</em>.' },
          { q: 'The phone is ringing. — I ___ get it!', opts: ['am going to', 'go to', 'will to', "'ll"], ans: 3, exp: 'Решение в момент речи → <em>I’ll</em>.' },
          { q: 'Look at the sky! It ___ rain.', opts: ['will', 'goes to', 'is going to', 'must'], ans: 2, exp: 'Видим признаки → <em>is going to</em>.' },
          { q: '«I won’t» значит…', opts: ['я не буду', 'я хочу', 'я не хочу', 'я не могу'], ans: 0, exp: '<em>won’t = will not</em> — «не буду». «Хочу» — <em>want</em>.' },
          { q: 'По телефону: «Это Анна». — …', opts: ['I am Anna.', 'This is Anna.', 'Here Anna.', 'It Anna.'], ans: 1, exp: 'По телефону говорят <em>This is Anna</em>.' },
        ] },
      ],
    },
    {
      id: 'feynman', label: '✍️ Фейнман',
      blocks: [
        { t: 'label', text: 'Дневник Фейнмана — Неделя 10' },
        { t: 'journal', items: [
          {
            label: 'Задание 1 · Объяснение концепта',
            prompt: 'Объясните разницу между <span class="en">You mustn’t</span> и <span class="en">You don’t have to</span> так, чтобы понял ребёнок. Придумайте пример, где перепутать их опасно.',
            placeholder: 'Mustn’t — это…, а don’t have to — это…',
            keys: ['запрет', 'нельзя', 'не обязат', 'не нужно', 'можно', 'выбор'],
            ok: '✓ Точно! <em>mustn’t</em> — запрет («нельзя»), <em>don’t have to</em> — свобода выбора («не обязательно, но можно»). Пример: <em>You mustn’t touch the cable</em> (опасно!) и <em>You don’t have to touch it</em> (не нужно, но можно).<br><br>Пробел для углубления: как спросить разрешения вежливо? (<em>Can I…? / Could I…? / May I…?</em>)',
            tip: '💡 Подсказка: представьте знак «STOP» и надпись «по желанию». Какое выражение какому соответствует?',
          },
          {
            label: 'Задание 2 · Производство языка',
            prompt: 'Опишите свою работу или учёбу (6–8 предложений): что вы делаете, что вам приходится и не приходится делать. Затем напишите 5 планов на год с <em>going to</em> и 3 обещания себе с <em>will</em>.',
            placeholder: "I'm a… I have to… I don't have to… Next year I'm going to…",
            ok: '✓ Отлично! Проверьте:<br><br>• Профессия с артиклем: <em>I’m a / an…</em><br>• <em>has to</em> для he / she<br>• <em>going to</em> — всегда с <em>am / is / are</em><br>• <em>will</em> + глагол без <em>to</em><br><br>Расскажите о планах вслух — это хороший рассказ для собеседования.',
          },
          {
            label: 'Задание 3 · Пробелы недели',
            prompt: 'Какой вопрос на собеседовании поставил бы вас в тупик? Запишите его и попробуйте ответить.',
            placeholder: 'Мне было бы трудно ответить на вопрос…',
            ok: '✓ Хорошо. Совет: подготовьте 5 «заготовок» — рассказ о себе, опыт, сильные стороны, причины смены работы, вопросы работодателю. Произнесите каждую вслух 3 раза — на собеседовании они «всплывут» сами.',
          },
        ] },
      ],
    },
  ],
});
