// A1 · Неделя 2 — Числа · Время · Семья
COURSE.weeks.push({
  n: 2,
  title: 'Числа · Время · Семья',
  tabs: [
    {
      id: 'plan', label: '📅 План',
      blocks: [
        { t: 'plan',
          goal: 'Считать до 1000, называть время и возраст, рассказывать о семье. Задавать вопросы и отвечать с <em>to be</em> и <em>have got</em>. Знать 8 вопросительных слов.',
          days: [
            { title: 'Числа 1–100', tasks: ['Числа 1–20 вслух 3 раза', 'Десятки и сочетания: 21, 35, 47, 99', 'Фейнман: объяснить разницу thirteen и thirty'] },
            { title: 'Который час', tasks: ['It’s + время: It’s five o’clock', 'past / to, quarter, half', 'Назвать вслух 10 случайных времён'] },
            { title: 'Семья', tasks: ['Слова: mother, father, brother, sister, son, daughter…', 'Притяжательный ’s: my sister’s name', 'Описать свою семью — 5 предложений'] },
            { title: 'To be: вопрос и отрицание', tasks: ['Are you…? Is she…? — I’m not, he isn’t', 'Краткие ответы: Yes, I am / No, she isn’t', 'Возраст: I’m 30 (years old)'] },
            { title: 'Have got', tasks: ['I have got / she has got', 'Have you got…? — Yes, I have', '6 предложений о том, что у вас есть'] },
            { title: 'Вопросительные слова', tasks: ['What, Where, When, Who, How, Why, Which, How many', '8 вопросов воображаемому собеседнику', 'Пройти тест недели'] },
            { title: 'Фейнман-урок недели', tasks: ['Объясните вслух, чем to be отличается от have got', 'Расскажите о семье — 1 минута', 'Пробелы недели → план на неделю 3'] },
          ] },
      ],
    },
    {
      id: 'numbers', label: '🔢 Числа',
      blocks: [
        { t: 'label', text: 'Числа 1–20 — нажмите, чтобы услышать и увидеть перевод' },
        { t: 'numbers', items: [
          { n: 1, en: 'one', ipa: '[wʌn]', ru: 'один' },
          { n: 2, en: 'two', ipa: '[tuː]', ru: 'два' },
          { n: 3, en: 'three', ipa: '[θriː]', ru: 'три' },
          { n: 4, en: 'four', ipa: '[fɔː]', ru: 'четыре' },
          { n: 5, en: 'five', ipa: '[faɪv]', ru: 'пять' },
          { n: 6, en: 'six', ipa: '[sɪks]', ru: 'шесть' },
          { n: 7, en: 'seven', ipa: '[ˈsevn]', ru: 'семь' },
          { n: 8, en: 'eight', ipa: '[eɪt]', ru: 'восемь' },
          { n: 9, en: 'nine', ipa: '[naɪn]', ru: 'девять' },
          { n: 10, en: 'ten', ipa: '[ten]', ru: 'десять' },
          { n: 11, en: 'eleven', ipa: '[ɪˈlevn]', ru: 'одиннадцать' },
          { n: 12, en: 'twelve', ipa: '[twelv]', ru: 'двенадцать' },
          { n: 13, en: 'thirteen', ipa: '[ˌθɜːˈtiːn]', ru: 'тринадцать' },
          { n: 14, en: 'fourteen', ipa: '[ˌfɔːˈtiːn]', ru: 'четырнадцать' },
          { n: 15, en: 'fifteen', ipa: '[ˌfɪfˈtiːn]', ru: 'пятнадцать' },
          { n: 16, en: 'sixteen', ipa: '[ˌsɪksˈtiːn]', ru: 'шестнадцать' },
          { n: 17, en: 'seventeen', ipa: '[ˌsevnˈtiːn]', ru: 'семнадцать' },
          { n: 18, en: 'eighteen', ipa: '[ˌeɪˈtiːn]', ru: 'восемнадцать' },
          { n: 19, en: 'nineteen', ipa: '[ˌnaɪnˈtiːn]', ru: 'девятнадцать' },
          { n: 20, en: 'twenty', ipa: '[ˈtwenti]', ru: 'двадцать' },
        ] },
        { t: 'label', text: 'Десятки, сотни, тысячи', top: true },
        { t: 'numbers', items: [
          { n: 30, en: 'thirty', ipa: '[ˈθɜːti]', ru: 'тридцать' },
          { n: 40, en: 'forty', ipa: '[ˈfɔːti]', ru: 'сорок' },
          { n: 50, en: 'fifty', ipa: '[ˈfɪfti]', ru: 'пятьдесят' },
          { n: 60, en: 'sixty', ipa: '[ˈsɪksti]', ru: 'шестьдесят' },
          { n: 70, en: 'seventy', ipa: '[ˈsevnti]', ru: 'семьдесят' },
          { n: 80, en: 'eighty', ipa: '[ˈeɪti]', ru: 'восемьдесят' },
          { n: 90, en: 'ninety', ipa: '[ˈnaɪnti]', ru: 'девяносто' },
          { n: 100, en: 'a hundred', ipa: '[ə ˈhʌndrəd]', ru: 'сто' },
          { n: 1000, en: 'a thousand', ipa: '[ə ˈθaʊznd]', ru: 'тысяча' },
        ] },
        { t: 'card', color: 'gold', title: 'Как строятся составные числа', html: `<ul>
          <li><strong>21–99:</strong> десяток + дефис + единицы: <span class="en">twenty-one</span>, <span class="en">forty-seven</span>, <span class="en">ninety-nine</span></li>
          <li><strong>Сотни:</strong> в британском английском после hundred ставится <strong>and</strong>: <span class="en">a hundred and five</span>, <span class="en">three hundred and sixty</span></li>
          <li><strong>Без -s:</strong> <span class="en">two hundred</span>, <span class="en">five thousand</span> — не «hundreds»</li>
          <li><strong>Годы</strong> читаются парами: 1995 — <span class="en">nineteen ninety-five</span>, 2025 — <span class="en">twenty twenty-five</span></li>
          <li><strong>Телефон</strong> — по одной цифре, 0 = <span class="en">oh</span>: <span class="en">oh seven nine one…</span></li></ul>` },
        { t: 'card', color: 'red', title: '-teen или -ty? Ударение решает', html: '<p><span class="en">thirteen</span> [ˌθɜːˈtiːn] — ударение на конце, долгое [iː]. <span class="en">thirty</span> [ˈθɜːti] — ударение в начале, короткое «-ти». Если путаете на слух, переспросите: <span class="en">One three or three oh?</span></p>' },
        { t: 'label', text: 'Порядковые числа — для дат', top: true },
        { t: 'grid', items: [
          { en: 'first', ipa: '[fɜːst]', ru: '1-й', ex: 'the first of May' },
          { en: 'second', ipa: '[ˈsekənd]', ru: '2-й', ex: 'my second name' },
          { en: 'third', ipa: '[θɜːd]', ru: '3-й', ex: 'the third floor' },
          { en: 'fourth', ipa: '[fɔːθ]', ru: '4-й', ex: 'далее + th' },
          { en: 'fifth', ipa: '[fɪfθ]', ru: '5-й', ex: 'five → fifth' },
          { en: 'twelfth', ipa: '[twelfθ]', ru: '12-й', ex: 'twelve → twelfth' },
          { en: 'twentieth', ipa: '[ˈtwentiəθ]', ru: '20-й', ex: 'y → ie + th' },
          { en: 'twenty-first', ipa: '[ˌtwenti ˈfɜːst]', ru: '21-й', ex: 'the 21st of June' },
        ] },
      ],
    },
    {
      id: 'time', label: '🕐 Время',
      blocks: [
        { t: 'label', text: 'What time is it? — Который час?' },
        { t: 'grid', items: [
          { icon: '🕐', en: "It's one o'clock", ru: '01:00 — час', ex: 'o’clock — только для ровного часа' },
          { icon: '🕑', en: "It's five past two", ru: '02:05 — пять минут третьего', ex: 'past — после' },
          { icon: '🕒', en: "It's quarter past three", ru: '03:15 — четверть четвёртого', ex: 'quarter — четверть' },
          { icon: '🕡', en: "It's half past six", ru: '06:30 — половина седьмого', ex: 'half past — половина' },
          { icon: '🕗', en: "It's quarter to eight", ru: '07:45 — без четверти восемь', ex: 'to — до (следующего часа)' },
          { icon: '🕘', en: "It's ten to nine", ru: '08:50 — без десяти девять', ex: '' },
          { icon: '🕛', en: "It's midday", ru: '12:00 — полдень', ex: 'midnight — полночь' },
          { icon: '🕖', en: "It's seven fifteen", ru: '07:15 — цифрами', ex: 'Так говорят на вокзалах' },
        ] },
        { t: 'card', color: 'blue', title: 'Логика past и to', html: '<p>Циферблат делится пополам. Правая половина (1–30 минут) — <span class="en">past</span> «после» прошедшего часа. Левая (31–59) — <span class="en">to</span> «до» следующего часа. Русское «половина седьмого» смотрит вперёд, английское <span class="en">half past six</span> — назад.</p>' },
        { t: 'card', color: 'gold', title: 'a.m. / p.m. и предлоги времени', html: `<ul>
          <li><span class="en">9 a.m.</span> — утра (до полудня), <span class="en">9 p.m.</span> — вечера. 24-часовой формат — в расписаниях</li>
          <li><span class="en">at</span> + время: <span class="en">at seven o’clock</span>, <span class="en">at midnight</span></li>
          <li><span class="en">in the morning / in the afternoon / in the evening</span>, но <span class="en">at night</span></li>
          <li><span class="en">on</span> + день: <span class="en">on Monday</span>, <span class="en">on the fifth of May</span></li></ul>` },
        { t: 'label', text: 'Дни недели', top: true },
        { t: 'grid', items: [
          { en: 'Monday', ipa: '[ˈmʌndeɪ]', ru: 'понедельник' },
          { en: 'Tuesday', ipa: '[ˈtjuːzdeɪ]', ru: 'вторник' },
          { en: 'Wednesday', ipa: '[ˈwenzdeɪ]', ru: 'среда', ex: 'первая d не читается' },
          { en: 'Thursday', ipa: '[ˈθɜːzdeɪ]', ru: 'четверг' },
          { en: 'Friday', ipa: '[ˈfraɪdeɪ]', ru: 'пятница' },
          { en: 'Saturday', ipa: '[ˈsætədeɪ]', ru: 'суббота' },
          { en: 'Sunday', ipa: '[ˈsʌndeɪ]', ru: 'воскресенье' },
          { en: 'the weekend', ipa: '[ðə ˌwiːkˈend]', ru: 'выходные', ex: 'at the weekend (UK)' },
        ] },
      ],
    },
    {
      id: 'family', label: '👨‍👩‍👧 Семья',
      blocks: [
        { t: 'label', text: 'My family — Моя семья' },
        { t: 'grid', items: [
          { icon: '👨', en: 'father / dad', ipa: '[ˈfɑːðə] / [dæd]', ru: 'отец / папа' },
          { icon: '👩', en: 'mother / mum', ipa: '[ˈmʌðə] / [mʌm]', ru: 'мать / мама', ex: 'в США — mom' },
          { icon: '👦', en: 'son', ipa: '[sʌn]', ru: 'сын', ex: 'звучит как sun' },
          { icon: '👧', en: 'daughter', ipa: '[ˈdɔːtə]', ru: 'дочь', ex: 'gh не читается' },
          { icon: '👱‍♂️', en: 'brother', ipa: '[ˈbrʌðə]', ru: 'брат' },
          { icon: '👱‍♀️', en: 'sister', ipa: '[ˈsɪstə]', ru: 'сестра' },
          { icon: '👴', en: 'grandfather / grandpa', ipa: '[ˈɡrænfɑːðə]', ru: 'дедушка' },
          { icon: '👵', en: 'grandmother / grandma', ipa: '[ˈɡrænmʌðə]', ru: 'бабушка' },
          { icon: '🤵', en: 'husband', ipa: '[ˈhʌzbənd]', ru: 'муж' },
          { icon: '👰', en: 'wife', ipa: '[waɪf]', ru: 'жена', ex: 'мн. ч. wives' },
          { icon: '👶', en: 'baby', ipa: '[ˈbeɪbi]', ru: 'малыш' },
          { icon: '🧒', en: 'child / children', ipa: '[tʃaɪld] / [ˈtʃɪldrən]', ru: 'ребёнок / дети', ex: 'неправильное мн. ч.' },
          { icon: '👨‍👩‍👧', en: 'parents', ipa: '[ˈpeərənts]', ru: 'родители', ex: 'не «родственники»!' },
          { icon: '🧑', en: 'cousin', ipa: '[ˈkʌzn]', ru: 'двоюродный брат / сестра' },
          { icon: '👨‍🦳', en: 'uncle', ipa: '[ˈʌŋkl]', ru: 'дядя' },
          { icon: '👩‍🦳', en: 'aunt', ipa: '[ɑːnt]', ru: 'тётя' },
        ] },
        { t: 'card', color: 'blue', title: 'Притяжательный ’s — «чей?»', html: `<p>В английском нет родительного падежа. Вместо «сестра Анны» говорят <strong>Anna’s sister</strong> — владелец + <strong>’s</strong> + предмет.</p><ul>
          <li><span class="en">my brother’s wife</span> — жена моего брата</li>
          <li><span class="en">my parents’ house</span> — дом моих родителей (после -s только апостроф)</li>
          <li><span class="en">the children’s room</span> — детская комната (children без -s, поэтому ’s)</li></ul>` },
        { t: 'label', text: 'Притяжательные местоимения', top: true },
        { t: 'table', head: ['Кто', 'Чей', 'Пример'], rows: [
          ['<span class="pronoun">I</span>', '<span class="conj">my</span> — мой', '<span class="en">my name</span>'],
          ['<span class="pronoun">you</span>', '<span class="conj">your</span> — твой, ваш', '<span class="en">your phone</span>'],
          ['<span class="pronoun">he</span>', '<span class="conj">his</span> — его', '<span class="en">his car</span>'],
          ['<span class="pronoun">she</span>', '<span class="conj">her</span> — её', '<span class="en">her son</span>'],
          ['<span class="pronoun">it</span>', '<span class="conj">its</span> — его, её (о предмете)', '<span class="en">its colour</span>'],
          ['<span class="pronoun">we</span>', '<span class="conj">our</span> — наш', '<span class="en">our flat</span>'],
          ['<span class="pronoun">they</span>', '<span class="conj">their</span> — их', '<span class="en">their children</span>'],
        ] },
        { t: 'card', color: 'red', title: 'Своё — тоже my, his, her', html: '<p>Русское «свой» в английском передаётся обычным притяжательным: «Я люблю свою маму» — <span class="en">I love my mum</span>; «Она звонит своему брату» — <span class="en">She calls her brother</span>.</p>' },
      ],
    },
    {
      id: 'tobe', label: '⚙️ To be',
      blocks: [
        { t: 'label', text: 'To be — вопрос, отрицание, краткий ответ' },
        { t: 'table', head: ['Утверждение', 'Отрицание', 'Вопрос', 'Краткий ответ'], rows: [
          ['<span class="conj">I am (I’m)</span>', '<span class="conj">I’m not</span>', '<span class="conj">Am I…?</span>', 'Yes, you are / No, you aren’t'],
          ['<span class="conj">you are</span>', '<span class="conj">you aren’t</span>', '<span class="conj">Are you…?</span>', 'Yes, I am / No, I’m not'],
          ['<span class="conj">he / she / it is</span>', '<span class="conj">he isn’t</span>', '<span class="conj">Is she…?</span>', 'Yes, she is / No, she isn’t'],
          ['<span class="conj">we / they are</span>', '<span class="conj">they aren’t</span>', '<span class="conj">Are they…?</span>', 'Yes, they are / No, they aren’t'],
        ] },
        { t: 'card', color: 'gold', title: 'Вопрос = глагол вперёд', html: '<p>Чтобы задать вопрос, <span class="en">am / is / are</span> переставляют в начало: <span class="en">She is a doctor.</span> → <span class="en">Is she a doctor?</span> Интонации, как в русском, мало — нужен порядок слов.</p><p>Краткий ответ повторяет глагол: <span class="en">Are you married? — Yes, I am.</span> Просто <span class="en">Yes</span> звучит резковато. В утвердительном кратком ответе сокращать нельзя: не «Yes, I’m».</p>' },
        { t: 'card', color: 'blue', title: 'Возраст и состояния — через to be', html: `<ul>
          <li><span class="en">I’m thirty (years old).</span> — Мне 30 лет. Не «I have 30 years»!</li>
          <li><span class="en">How old are you?</span> — Сколько тебе лет?</li>
          <li><span class="en">I’m hungry / cold / tired / late.</span> — Я голоден / мне холодно / я устал / я опаздываю</li>
          <li><span class="en">I’m married / single.</span> — Я женат (замужем) / не женат</li></ul>` },
      ],
    },
    {
      id: 'havegot', label: '🎒 Have got',
      blocks: [
        { t: 'label', text: 'Have got — «у меня есть»' },
        { t: 'table', head: ['Утверждение', 'Отрицание', 'Вопрос', 'Краткий ответ'], rows: [
          ['<span class="conj">I / you / we / they have got (’ve got)</span>', '<span class="conj">haven’t got</span>', '<span class="conj">Have you got…?</span>', 'Yes, I have / No, I haven’t'],
          ['<span class="conj">he / she / it has got (’s got)</span>', '<span class="conj">hasn’t got</span>', '<span class="conj">Has she got…?</span>', 'Yes, she has / No, she hasn’t'],
        ] },
        { t: 'card', color: 'gold', title: 'Фейнман: «у меня есть» = «я имею»', html: '<p>Русское «у меня есть брат» в английском звучит как «я имею брата»: <span class="en">I’ve got a brother.</span> Подлежащее — владелец. В британском разговорном английском чаще говорят <span class="en">have got</span>, в американском и в официальной речи — просто <span class="en">have</span>: <span class="en">I have a brother.</span> Оба варианта верны.</p>' },
        { t: 'grid', items: [
          { en: "I've got two sisters.", ru: 'У меня две сестры.' },
          { en: "She's got blue eyes.", ru: 'У неё голубые глаза.', ex: '’s = has (а не is!)' },
          { en: "We haven't got a car.", ru: 'У нас нет машины.' },
          { en: 'Have you got any children?', ru: 'У вас есть дети?' },
          { en: "Has he got a dog? — Yes, he has.", ru: 'У него есть собака? — Да.' },
          { en: "They've got a big flat.", ru: 'У них большая квартира.' },
        ] },
        { t: 'card', color: 'red', title: 'Ловушка: he’s = he is или he has', html: '<p><span class="en">He’s tired</span> — он устал (is). <span class="en">He’s got a cat</span> — у него есть кошка (has). Подсказка — слово <span class="en">got</span>: если оно есть, значит <em>has</em>.</p>' },
      ],
    },
    {
      id: 'questions', label: '❓ Вопросы',
      blocks: [
        { t: 'label', text: 'Вопросительные слова' },
        { t: 'grid', items: [
          { en: 'What', ipa: '[wɒt]', ru: 'Что / Какой', ex: "What's your phone number?" },
          { en: 'Where', ipa: '[weə]', ru: 'Где / Куда', ex: 'Where do you live?' },
          { en: 'When', ipa: '[wen]', ru: 'Когда', ex: 'When is your birthday?' },
          { en: 'Who', ipa: '[huː]', ru: 'Кто', ex: 'Who is that man?' },
          { en: 'How', ipa: '[haʊ]', ru: 'Как', ex: 'How are you?' },
          { en: 'Why', ipa: '[waɪ]', ru: 'Почему / Зачем', ex: 'Why are you late?' },
          { en: 'Which', ipa: '[wɪtʃ]', ru: 'Который (из)', ex: 'Which bus goes to the centre?' },
          { en: 'How many / How much', ru: 'Сколько', ex: 'How many brothers have you got?' },
          { en: 'How old', ru: 'Сколько лет', ex: 'How old is your son?' },
          { en: 'Whose', ipa: '[huːz]', ru: 'Чей', ex: 'Whose bag is this?' },
        ] },
        { t: 'card', color: 'blue', title: 'Порядок слов в вопросе', html: '<p><strong>Вопросительное слово + глагол + подлежащее:</strong> <span class="en">Where is the station?</span>, <span class="en">How old are you?</span>, <span class="en">What’s your name?</span></p><p><strong>How many</strong> — с исчисляемыми (<span class="en">How many children?</span>), <strong>How much</strong> — с неисчисляемыми и ценой (<span class="en">How much is it?</span>). Подробнее — в неделе 4.</p>' },
        { t: 'label', text: 'Диалог — анкета в языковой школе', top: true },
        { t: 'dialogue', lines: [
          { right: true, av: '👩‍💼', en: "Hello. What's your full name, please?", ru: 'Здравствуйте. Ваше полное имя, пожалуйста?' },
          { av: '🧑', en: 'Olga Smirnova.', ru: 'Ольга Смирнова.' },
          { right: true, av: '👩‍💼', en: 'How do you spell your surname?', ru: 'Как пишется ваша фамилия?' },
          { av: '🧑', en: 'S-M-I-R-N-O-V-A.', ru: 'С-М-И-Р-Н-О-В-А.', },
          { right: true, av: '👩‍💼', en: 'Thank you. How old are you?', ru: 'Спасибо. Сколько вам лет?' },
          { av: '🧑', en: "I'm thirty-four.", ru: 'Мне тридцать четыре.' },
          { right: true, av: '👩‍💼', en: 'Are you married?', ru: 'Вы замужем?' },
          { av: '🧑', en: "Yes, I am. I've got a husband and two children.", ru: 'Да. У меня муж и двое детей.' },
          { right: true, av: '👩‍💼', en: "And what's your phone number?", ru: 'А ваш номер телефона?' },
          { av: '🧑', en: "It's oh seven nine four, double six one, three eight two.", ru: 'Ноль семь девять четыре, шесть-шесть-один, три восемь два.' },
          { right: true, av: '👩‍💼', en: 'Great. Your class is on Tuesday at half past six.', ru: 'Отлично. Ваше занятие во вторник в половине седьмого.' },
        ] },
      ],
    },
    {
      id: 'quiz', label: '🎯 Тест',
      blocks: [
        { t: 'label', text: 'Тест — Неделя 2' },
        { t: 'quiz', items: [
          { q: '___ you a student? — Yes, I am.', opts: ['Is', 'Do', 'Am', 'Are'], ans: 3, exp: 'С <em>you</em> — <em>are</em>, а в вопросе глагол идёт вперёд: <em>Are you a student?</em>' },
          { q: 'Мне 25 лет — …', opts: ["I'm 25.", 'I have 25 years.', 'I has 25.', 'My age 25.'], ans: 0, exp: 'Возраст — через <em>to be</em>: <em>I’m 25</em> или <em>I’m 25 years old</em>.' },
          { q: 'She ___ got two brothers.', opts: ['have', 'is', 'has', 'are'], ans: 2, exp: 'He / she / it → <em>has got</em>.' },
          { q: '___ got a car? — No, we haven’t.', opts: ['Has we', 'Have we', 'Are we', 'Do we'], ans: 1, exp: 'Вопрос с have got: <em>Have</em> + подлежащее + <em>got</em>.' },
          { q: '7:45 — It’s…', opts: ['quarter to eight', 'quarter past seven', 'half past seven', 'quarter to seven'], ans: 0, exp: '45 минут — это 15 минут <em>до</em> восьми: <em>quarter to eight</em>.' },
          { q: 'Сестра Анны — …', opts: ['sister of Anna', 'Annas sister', "sister's Anna", "Anna's sister"], ans: 3, exp: 'Владелец + <em>’s</em> + предмет: <em>Anna’s sister</em>.' },
          { q: '___ is your birthday? — In May.', opts: ['Where', 'When', 'Who', 'Why'], ans: 1, exp: '<em>When</em> — когда.' },
          { q: '13 — это…', opts: ['thirteen', 'thirty', 'three', 'third'], ans: 0, exp: '<em>thirteen</em> (13), ударение на -teen. <em>thirty</em> — 30.' },
          { q: 'He ___ a doctor. He’s a nurse.', opts: ["don't", "aren't", "hasn't", "isn't"], ans: 3, exp: 'Отрицание с <em>he</em>: <em>he isn’t</em> (is not).' },
          { q: 'Tom and Kate have got a son. ___ son is five.', opts: ['His', 'Her', 'Their', 'Our'], ans: 2, exp: 'Двое владельцев → <em>their</em> — их.' },
        ] },
      ],
    },
    {
      id: 'feynman', label: '✍️ Фейнман',
      blocks: [
        { t: 'label', text: 'Дневник Фейнмана — Неделя 2' },
        { t: 'journal', items: [
          {
            label: 'Задание 1 · Объяснение концепта',
            prompt: 'Объясните, чем <span class="en">I am</span> отличается от <span class="en">I have got</span> — так, чтобы понял ребёнок. Почему по-английски «мне 30 лет» говорят через <em>am</em>, а «у меня есть брат» — через <em>have</em>?',
            placeholder: 'To be — это когда… Have got — это когда… Например…',
            keys: ['быть', 'есть', 'облада', 'име', 'состоя', 'возраст', 'кто', 'принадлеж', 'have', 'am'],
            ok: '✓ Хорошо! Главное: <em>to be</em> отвечает на вопрос «кто / какой я?» (имя, возраст, профессия, состояние), а <em>have got</em> — «что у меня есть?» (семья, вещи, внешность).<br><br>• <em>I’m tall</em> — я высокий (какой я)<br>• <em>I’ve got long hair</em> — у меня длинные волосы (что у меня есть)<br><br>Пробел для углубления: как сказать «у меня болит голова»? (Подсказка — неделя 8: <em>I’ve got a headache</em>.)',
            tip: '💡 Попробуйте ещё раз. Ключевая мысль: <em>to be</em> описывает, кто или какой человек, а <em>have got</em> — чем он владеет. Придумайте по одному предложению про себя с каждым глаголом.',
          },
          {
            label: 'Задание 2 · Производство языка',
            prompt: 'Напишите 8–10 предложений о своей семье по-английски. Используйте <em>to be</em>, <em>have got</em>, притяжательный <em>’s</em> и минимум 3 числа. Думайте сразу по-английски.',
            placeholder: "I've got a big family. My mother's name is… She is…",
            ok: '✓ Отлично, вы тренируете речь! Частые ошибки русскоязычных:<br><br>• Не пропускайте глагол: <em>My brother <strong>is</strong> a doctor</em><br>• Артикль перед профессией: <em>She is <strong>a</strong> teacher</em><br>• «Свой» = <em>my / his / her</em>: <em>He loves <strong>his</strong> wife</em><br>• <em>parents</em> — только мама и папа; родственники — <em>relatives</em><br><br>Прочитайте текст вслух — это важнее, чем писать.',
          },
          {
            label: 'Задание 3 · Пробелы недели',
            prompt: 'Что было труднее всего на этой неделе? Запишите конкретно: какое слово, конструкция, звук. Это программа недели 3.',
            placeholder: 'Мне сложнее всего даётся…',
            ok: '✓ Отличная рефлексия — так и работает метод Фейнмана!<br><br>• <strong>Звуки:</strong> запишите себя → сравните с Cambridge Dictionary → повторите 10 раз<br>• <strong>Грамматика:</strong> найдите 5 примеров конструкции в живом тексте<br>• <strong>Слова:</strong> добавьте в Anki с аудио<br>• <strong>На слух:</strong> BBC 6 Minute English с транскриптом<br><br>Пробел — это не слабость, а карта следующего шага.',
          },
        ] },
      ],
    },
  ],
});
