// A1 · Неделя 1 — Знакомство · Звуки · Алфавит
COURSE.weeks.push({
  n: 1,
  title: 'Знакомство · Звуки · Алфавит',
  tabs: [
    {
      id: 'method', label: '📖 Метод',
      blocks: [
        { t: 'label', text: 'Метод Фейнмана для языков' },
        { t: 'card', color: 'blue', title: 'Главный принцип', html: '<p>Ричард Фейнман учил так: понял — объясни ребёнку. Не можешь объяснить — значит, не понял. Для языка это работает так же: не зубри правило, а <strong>объясни его своими словами</strong> и сразу используй. Пробел в объяснении = следующая тема для изучения.</p>' },
        { t: 'label', text: '4 шага метода' },
        { t: 'steps', items: [
          { num: '①', title: 'Изучи концепт', text: 'Одно явление за раз: звук, слово, конструкция. Послушай, прочитай, найди в контексте.' },
          { num: '②', title: 'Объясни своими словами', text: 'Запиши или проговори вслух, будто учишь друга. Без подсказок. По-английски — с первого дня, хотя бы фразами.' },
          { num: '③', title: 'Найди пробелы', text: 'Где запнулся, где перешёл на русский — это и есть следующая задача.' },
          { num: '④', title: 'Упрости и повтори', text: 'Сократи объяснение до самой ясной формы. Повтори через 1 день, 3 дня и неделю.' },
        ] },
        { t: 'label', text: 'Ежедневная практика' },
        { t: 'card', color: 'gold', title: 'Как заниматься каждый день', html: `<ul>
          <li><strong>15 минут утром:</strong> 5–7 новых слов или одна конструкция</li>
          <li><strong>10 минут днём:</strong> объясните себе вслух — на диктофон или перед зеркалом</li>
          <li><strong>10 минут вечером:</strong> послушайте английскую речь и повторите фразы из диалога</li>
          <li><strong>Запишите пробелы</strong> — что не получилось объяснить, учите завтра</li></ul>` },
        { t: 'label', text: 'Чем английский отличается от русского' },
        { t: 'card', color: 'green', title: 'Пять главных отличий', html: `<ul>
          <li><strong>Порядок слов строгий:</strong> подлежащее → сказуемое → дополнение. <span class="en">I love tea</span>, но не «Tea love I». В русском можно переставлять слова, в английском — почти нельзя.</li>
          <li><strong>Глагол нужен всегда:</strong> «Я врач» = <span class="en">I am a doctor</span>. Связку <span class="en">am / is / are</span> нельзя пропускать.</li>
          <li><strong>Артикли:</strong> <span class="en">a / an</span> — «один, какой-то», <span class="en">the</span> — «тот самый». В русском их нет, поэтому их легко забыть.</li>
          <li><strong>Написание ≠ произношение:</strong> <span class="en">read, bread, great</span> — одно и то же <em>ea</em> читается по-разному. Учите слово вместе со звучанием.</li>
          <li><strong>Нет падежей:</strong> роль слова показывает место в предложении и предлог: <span class="en">I give the book to Anna</span>.</li></ul>` },
        { t: 'card', color: 'blue', title: 'Британский или американский?', html: '<p>Курс построен на <strong>британском английском</strong> (UK): британское произношение в транскрипции, британская орфография (<span class="en">colour, centre</span>) и слова (<span class="en">flat, lift, holiday</span>). Американские варианты указаны в заметках. Озвучка выбирает британский голос, если он есть в системе.</p>' },
      ],
    },
    {
      id: 'sounds', label: '🔊 Звуки',
      blocks: [
        { t: 'label', text: 'Сложные для русскоязычных звуки — нажмите ▶' },
        { t: 'sounds', items: [
          { sym: '[θ]', title: 'Глухое «th»', badge: 'нет в русском', text: 'Кончик языка между зубами, выдуваем воздух. Не «с» и не «ф»!', ex: 'think [θɪŋk] · three [θriː] · thank you', say: 'think, three, thank you' },
          { sym: '[ð]', title: 'Звонкое «th»', badge: 'нет в русском', text: 'То же положение языка, но с голосом. Не «з» и не «д».', ex: 'this [ðɪs] · mother [ˈmʌðə] · the', say: 'this, mother, the' },
          { sym: '[w]', title: '«W» — губы трубочкой', text: 'Губы вытягиваются, как для «у», и резко раскрываются. Не русское «в» — зубы губ не касаются.', ex: 'water [ˈwɔːtə] · what [wɒt] · we', say: 'water, what, we' },
          { sym: '[æ]', title: 'Широкое «э»', text: 'Рот широко открыт, звук между «а» и «э». Отличает <em>bad</em> от <em>bed</em>.', ex: 'cat [kæt] · bad [bæd] · man [mæn]', say: 'cat, bad, man' },
          { sym: '[ə]', title: 'Нейтральный звук — шва', text: 'Самый частый звук английского. Короткий, расслабленный, в безударных слогах.', ex: 'teacher [ˈtiːtʃə] · about [əˈbaʊt] · banana', say: 'teacher, about, banana' },
          { sym: '[iː] / [ɪ]', title: 'Долгое и краткое «и»', text: 'Долгота меняет смысл: <em>sheep</em> — овца, <em>ship</em> — корабль. Краткое [ɪ] ближе к «ы».', ex: 'sheep [ʃiːp] · ship [ʃɪp] · eat · it', say: 'sheep, ship, eat, it' },
          { sym: '[ŋ]', title: 'Носовое «нг»', text: 'Задняя часть языка прижата к нёбу, звук идёт через нос. Звука «г» на конце нет.', ex: 'sing [sɪŋ] · morning [ˈmɔːnɪŋ] · thing', say: 'sing, morning, thing' },
          { sym: '[h]', title: 'Лёгкое «х» — просто выдох', text: 'Не русское хриплое «х», а выдох, как будто греете руки.', ex: 'hello [həˈləʊ] · house [haʊs] · hi', say: 'hello, house, hi' },
          { sym: '[r]', title: 'Английское «r»', text: 'Язык не вибрирует и не касается нёба — кончик слегка загнут назад. В британском после гласной «r» не произносится: <em>car</em> [kɑː].', ex: 'red [red] · very [ˈveri] · car [kɑː]', say: 'red, very, car' },
        ] },
        { t: 'card', color: 'gold', title: 'Упражнение Фейнмана на звуки', html: '<p>Запишите себя на телефон: каждое слово 5 раз, всё медленнее. Сравните с озвучкой здесь или на <strong>Cambridge Dictionary</strong> (dictionary.cambridge.org, кнопка UK). Запишите, что звучит не так, — это ваш пробел на завтра.</p>' },
        { t: 'card', color: 'red', title: 'Оглушение на конце — ошибка', html: '<p>В русском «дуб» звучит как «дуп». В английском так нельзя: <span class="en">bad</span> [bæd] — плохой, <span class="en">bat</span> [bæt] — летучая мышь. Звонкую согласную на конце произносите звонко, а гласную перед ней — чуть длиннее.</p>' },
      ],
    },
    {
      id: 'alphabet', label: '🔤 Алфавит',
      blocks: [
        { t: 'label', text: 'Алфавит — нажмите на букву' },
        { t: 'card', color: 'blue', title: 'Зачем знать названия букв', html: '<p>Чтобы продиктовать имя, адрес или e-mail: <span class="en">How do you spell it?</span> — «Как это пишется?». Ответ — по буквам: <span class="en">A-N-N-A</span>.</p>' },
        { t: 'numbers', items: [
          { n: 'A a', ipa: '[eɪ]', ru: 'эй', say: 'A' },
          { n: 'B b', ipa: '[biː]', ru: 'би', say: 'B' },
          { n: 'C c', ipa: '[siː]', ru: 'си', say: 'C' },
          { n: 'D d', ipa: '[diː]', ru: 'ди', say: 'D' },
          { n: 'E e', ipa: '[iː]', ru: 'и', say: 'E' },
          { n: 'F f', ipa: '[ef]', ru: 'эф', say: 'F' },
          { n: 'G g', ipa: '[dʒiː]', ru: 'джи', say: 'G' },
          { n: 'H h', ipa: '[eɪtʃ]', ru: 'эйч', say: 'H' },
          { n: 'I i', ipa: '[aɪ]', ru: 'ай', say: 'I' },
          { n: 'J j', ipa: '[dʒeɪ]', ru: 'джей', say: 'J' },
          { n: 'K k', ipa: '[keɪ]', ru: 'кей', say: 'K' },
          { n: 'L l', ipa: '[el]', ru: 'эл', say: 'L' },
          { n: 'M m', ipa: '[em]', ru: 'эм', say: 'M' },
          { n: 'N n', ipa: '[en]', ru: 'эн', say: 'N' },
          { n: 'O o', ipa: '[əʊ]', ru: 'оу', say: 'O' },
          { n: 'P p', ipa: '[piː]', ru: 'пи', say: 'P' },
          { n: 'Q q', ipa: '[kjuː]', ru: 'кью', say: 'Q' },
          { n: 'R r', ipa: '[ɑː]', ru: 'а', say: 'R' },
          { n: 'S s', ipa: '[es]', ru: 'эс', say: 'S' },
          { n: 'T t', ipa: '[tiː]', ru: 'ти', say: 'T' },
          { n: 'U u', ipa: '[juː]', ru: 'ю', say: 'U' },
          { n: 'V v', ipa: '[viː]', ru: 'ви', say: 'V' },
          { n: 'W w', ipa: '[ˈdʌbəljuː]', ru: 'дабл-ю', say: 'W' },
          { n: 'X x', ipa: '[eks]', ru: 'экс', say: 'X' },
          { n: 'Y y', ipa: '[waɪ]', ru: 'уай', say: 'Y' },
          { n: 'Z z', ipa: '[zed]', ru: 'зед (в США — зи)', say: 'Z' },
        ] },
        { t: 'card', color: 'gold', title: 'Пары, которые путают', html: `<ul>
          <li><strong>E [iː] и I [aɪ]</strong> — названия «наоборот» по сравнению с русским чтением</li>
          <li><strong>G [dʒiː] и J [dʒeɪ]</strong> — различаются только гласной</li>
          <li><strong>A [eɪ] и R [ɑː]</strong> — русское «а» — это буква R</li>
          <li>Двойные буквы: <span class="en">double L</span>, <span class="en">double S</span> — <span class="en">Russell: R-U-double S-E-double L</span></li>
          <li>В e-mail: <span class="en">@</span> = <span class="en">at</span>, <span class="en">.</span> = <span class="en">dot</span></li></ul>` },
      ],
    },
    {
      id: 'vocab', label: '📝 Словарь',
      blocks: [
        { t: 'label', text: 'Тема 1 — Знакомство и приветствия' },
        { t: 'card', color: 'blue', title: 'Метод Фейнмана для слов', html: '<p>Не зубрите список. <strong>Придумайте ситуацию</strong> для каждой фразы: кому, когда и зачем вы её скажете. Составьте 2 предложения без подсказки.</p>' },
        { t: 'vocab', items: [
          { en: 'Hello / Hi', ipa: '[həˈləʊ] / [haɪ]', ru: 'Здравствуйте / Привет', note: 'Hi — неформально' },
          { en: 'Good morning', ipa: '[ɡʊd ˈmɔːnɪŋ]', ru: 'Доброе утро', note: 'До 12:00' },
          { en: 'Good afternoon', ipa: '[ɡʊd ˌɑːftəˈnuːn]', ru: 'Добрый день', note: '12:00 — ~18:00' },
          { en: 'Good evening', ipa: '[ɡʊd ˈiːvnɪŋ]', ru: 'Добрый вечер', note: 'Приветствие вечером' },
          { en: 'Good night', ipa: '[ɡʊd ˈnaɪt]', ru: 'Спокойной ночи', note: 'Только при прощании!' },
          { en: "What's your name?", ipa: '[wɒts jɔː ˈneɪm]', ru: 'Как тебя / вас зовут?', note: 'Одна форма для «ты» и «вы»' },
          { en: 'My name is… / I’m…', ipa: '[maɪ ˈneɪm ɪz] / [aɪm]', ru: 'Меня зовут… / Я…', note: "I'm = I am" },
          { en: 'Where are you from?', ipa: '[weər ə juː ˈfrɒm]', ru: 'Откуда ты / вы?', note: 'Предлог from — в конце' },
          { en: "I'm from Russia", ipa: '[aɪm frəm ˈrʌʃə]', ru: 'Я из России', note: 'Страны — с заглавной буквы' },
          { en: 'Nice to meet you', ipa: '[naɪs tə ˈmiːt juː]', ru: 'Приятно познакомиться', note: 'Ответ: Nice to meet you too' },
          { en: 'How are you?', ipa: '[haʊ ˈɑː juː]', ru: 'Как дела?', note: 'Ответ: Fine, thanks. And you?' },
          { en: 'Do you speak English?', ipa: '[də juː spiːk ˈɪŋɡlɪʃ]', ru: 'Вы говорите по-английски?', note: 'Языки — с заглавной' },
          { en: 'A little', ipa: '[ə ˈlɪtl]', ru: 'Немного', note: '' },
          { en: 'Can you speak more slowly, please?', ipa: '[kən juː spiːk mɔː ˈsləʊli pliːz]', ru: 'Можете говорить медленнее?', note: 'Фраза-спасалка — выучите наизусть' },
          { en: 'Sorry? / Pardon?', ipa: '[ˈsɒri] / [ˈpɑːdn]', ru: 'Простите, что вы сказали?', note: 'Переспросить вежливо' },
          { en: 'Thank you / Thanks', ipa: '[ˈθæŋk juː] / [θæŋks]', ru: 'Спасибо', note: 'Ответ: You’re welcome' },
          { en: 'Goodbye / Bye / See you', ipa: '[ɡʊdˈbaɪ] / [baɪ] / [ˈsiː juː]', ru: 'До свидания / Пока / Увидимся', note: '' },
        ] },
        { t: 'label', text: 'Карточки — нажмите, чтобы перевернуть', top: true },
        { t: 'flip', items: [
          { en: 'Hello', ipa: '[həˈləʊ]', ru: 'Здравствуйте' },
          { en: 'thank you', ipa: '[ˈθæŋk juː]', ru: 'спасибо' },
          { en: 'please', ipa: '[pliːz]', ru: 'пожалуйста (просьба)' },
          { en: 'yes', ipa: '[jes]', ru: 'да' },
          { en: 'no', ipa: '[nəʊ]', ru: 'нет' },
          { en: 'name', ipa: '[neɪm]', ru: 'имя' },
          { en: 'speak', ipa: '[spiːk]', ru: 'говорить' },
          { en: 'learn', ipa: '[lɜːn]', ru: 'учить, изучать' },
          { en: 'friend', ipa: '[frend]', ru: 'друг' },
          { en: 'country', ipa: '[ˈkʌntri]', ru: 'страна' },
          { en: 'slowly', ipa: '[ˈsləʊli]', ru: 'медленно' },
          { en: 'welcome', ipa: '[ˈwelkəm]', ru: 'добро пожаловать' },
        ] },
        { t: 'label', text: 'Глагол to be — быть', top: true },
        { t: 'table', head: ['Полная форма', 'Краткая', 'Перевод'], rows: [
          ['<span class="conj">I am</span>', '<span class="conj">I’m</span>', 'я (есть)'],
          ['<span class="conj">you are</span>', '<span class="conj">you’re</span>', 'ты / вы'],
          ['<span class="conj">he is</span>', '<span class="conj">he’s</span>', 'он'],
          ['<span class="conj">she is</span>', '<span class="conj">she’s</span>', 'она'],
          ['<span class="conj">it is</span>', '<span class="conj">it’s</span>', 'оно, это'],
          ['<span class="conj">we are</span>', '<span class="conj">we’re</span>', 'мы'],
          ['<span class="conj">they are</span>', '<span class="conj">they’re</span>', 'они'],
        ] },
        { t: 'card', color: 'green', title: 'Фейнман: зачем «быть»?', html: '<p>В русском «Я — Анна» обходится без глагола. В английском у предложения обязательно есть глагол, поэтому на месте тире стоит <span class="en">am / is / are</span>: <span class="en">I am Anna</span>. Объясните себе: какое слово в <span class="en">She is a teacher</span> соответствует русскому тире?</p>' },
      ],
    },
    {
      id: 'dialogue', label: '💬 Диалог',
      blocks: [
        { t: 'label', text: 'Знакомство в Лондоне' },
        { t: 'card', color: 'gold', title: 'Как работать с диалогом', html: '<p>1. Прочитайте весь диалог. 2. Закройте русский текст и поймите из контекста. 3. Нажмите на реплику — услышите произношение. 4. Разыграйте одну роль вслух. 5. Запишите пробелы.</p>' },
        { t: 'dialogue', lines: [
          { en: 'Hello! Good morning!', ipa: '[həˈləʊ | ɡʊd ˈmɔːnɪŋ]', ru: 'Здравствуйте! Доброе утро!' },
          { right: true, en: 'Good morning! How are you?', ipa: '[ɡʊd ˈmɔːnɪŋ | haʊ ˈɑː juː]', ru: 'Доброе утро! Как дела?' },
          { en: "I'm fine, thank you. And you?", ipa: '[aɪm ˈfaɪn | ˈθæŋk juː | ənd ˈjuː]', ru: 'Хорошо, спасибо. А у вас?' },
          { right: true, en: "Very well, thanks. What's your name?", ipa: '[ˈveri ˈwel | θæŋks | wɒts jɔː ˈneɪm]', ru: 'Очень хорошо, спасибо. Как вас зовут?' },
          { en: "My name is Alexei. I'm from Russia. And you?", ipa: '[maɪ ˈneɪm ɪz əˈleksi | aɪm frəm ˈrʌʃə | ənd ˈjuː]', ru: 'Меня зовут Алексей. Я из России. А вы?' },
          { right: true, en: "I'm Emma. I'm from London. Nice to meet you!", ipa: '[aɪm ˈemə | aɪm frəm ˈlʌndən | naɪs tə ˈmiːt juː]', ru: 'Я Эмма. Я из Лондона. Приятно познакомиться!' },
          { en: 'Nice to meet you too! Do you speak Russian?', ipa: '[naɪs tə ˈmiːt juː ˈtuː | də juː spiːk ˈrʌʃn]', ru: 'Мне тоже приятно! Вы говорите по-русски?' },
          { right: true, en: 'No, I don’t. Only English and a little French.', ipa: '[nəʊ aɪ ˈdəʊnt | ˈəʊnli ˈɪŋɡlɪʃ ənd ə ˈlɪtl ˈfrentʃ]', ru: 'Нет. Только по-английски и немного по-французски.' },
          { en: "I'm learning English. Can you speak more slowly, please?", ipa: '[aɪm ˈlɜːnɪŋ ˈɪŋɡlɪʃ | kən juː spiːk mɔː ˈsləʊli pliːz]', ru: 'Я учу английский. Можете говорить помедленнее?' },
          { right: true, en: 'Of course! No problem.', ipa: '[əv ˈkɔːs | nəʊ ˈprɒbləm]', ru: 'Конечно! Без проблем.' },
        ] },
        { t: 'card', color: 'blue', title: 'Грамматика из диалога', html: `<ul>
          <li><strong>I’m from…</strong> — «я из…»: <span class="en">I’m from Moscow</span>. Глагол <em>am</em> обязателен</li>
          <li><strong>I’m learning</strong> — действие прямо сейчас, в этот период (Present Continuous, неделя 7)</li>
          <li><strong>No, I don’t</strong> — краткий ответ: в английском не говорят просто «No, I speak not»</li>
          <li><strong>you</strong> — и «ты», и «вы». Вежливость передают слова <span class="en">please, thank you, sorry</span> и интонация</li></ul>` },
      ],
    },
    {
      id: 'exercise', label: '✏️ Упражнения',
      blocks: [
        { t: 'label', text: 'Упражнения по методу Фейнмана' },
        { t: 'exercise', items: [
          {
            title: '① Объясни концепт — почему «I am», а не просто «I»?',
            prompt: 'Представьте, что объясняете другу: <strong>почему в английском нельзя сказать «I teacher»?</strong> Напишите объяснение своими словами, с примерами.',
            placeholder: 'В английском в каждом предложении должен быть глагол, поэтому…',
            button: 'Проверить понимание',
            keys: ['глагол', 'связк', 'am', 'is', 'are', 'be', 'тире'],
            ok: '✅ Верно! В английском предложении всегда есть глагол. Там, где в русском тире или ничего, стоит форма <em>to be</em>: <em>I am a teacher, She is from Spain, They are friends</em>. Следующий пробел: почему перед <em>teacher</em> стоит <em>a</em>? (Подсказка: профессия — «один из учителей».)',
            tip: '💡 Подсказка: сравните «Я — учитель» и <em>I am a teacher</em>. Какое слово в английском стоит на месте русского тире? Это глагол <em>to be</em>: am, is, are.',
          },
          {
            title: '② Переведи без словаря',
            prompt: 'Переведите: <strong>«Здравствуйте! Меня зовут [имя]. Я из [город]. Я учу английский. Приятно познакомиться!»</strong>',
            placeholder: 'Hello! My name is…',
            button: 'Показать разбор',
            ok: `✅ <strong>Образец:</strong> <em>Hello! My name is [имя]. I’m from [город]. I’m learning English. Nice to meet you!</em><br><br><strong>Разбор:</strong><ul>
              <li><em>My name is</em> или <em>I’m</em> — оба варианта верны</li>
              <li><em>I’m from</em> + город, без артикля: <em>from Moscow</em></li>
              <li><em>I’m learning</em> — учу в этот период (не <em>I learn</em>)</li>
              <li>Названия городов, стран и языков — с заглавной буквы</li></ul>`,
          },
          {
            title: '③ Найди пробел — звуки',
            prompt: 'Произнесите вслух 5 раз: <span class="en">Thank you very much. This is my mother.</span><br><span class="ipa">[ˈθæŋk juː ˈveri ˈmʌtʃ | ðɪs ɪz maɪ ˈmʌðə]</span><br><br>Какой звук вышел труднее всего? Опишите, что именно мешает.',
            placeholder: 'Мне труднее всего звук… потому что…',
            button: 'Получить совет',
            ok: `💡 <strong>Разбор фразы:</strong><ul>
              <li><strong>[θ] в thank</strong> — язык между зубами, без голоса. Частая ошибка — «сэнк» или «фэнк»</li>
              <li><strong>[ð] в this, mother</strong> — то же положение, но с голосом. Не «зис» и не «дис»</li>
              <li><strong>[v] в very</strong> — верхние зубы на нижней губе. Не путайте с [w]</li>
              <li><strong>[ə] в mother</strong> — конечное -er читается как короткий нейтральный звук, без «р»</li></ul>
              Совет: прикусите кончик языка и скажите «с» — получится [θ]; скажите «з» — получится [ð].`,
          },
          {
            title: '④ Аналогия Фейнмана — «you»',
            prompt: 'В английском одно слово <span class="en">you</span> значит и «ты», и «вы». Придумайте аналогию: как тогда англичане показывают вежливость? Чем это похоже или не похоже на русский?',
            placeholder: 'Вежливость в английском передаётся…',
            button: 'Показать анализ',
            keys: ['please', 'sorry', 'thank', 'could', 'интонац', 'слов', 'мистер', 'mr', 'mrs'],
            ok: '✅ Точно! Вместо «ты/вы» вежливость передают слова и формы: <em>please, thank you, sorry, excuse me</em>, обращения <em>Mr / Mrs / Ms + фамилия</em> и мягкие просьбы <em>Could you…?</em> вместо <em>Give me…</em>. Пробел Фейнмана: придумайте 3 вежливые и 3 простые просьбы.',
            tip: '💡 Подумайте: что ещё, кроме «вы», делает фразу вежливой? В английском это слова <em>please, sorry, thank you</em>, обращение <em>Mr Smith</em> и вопросы <em>Could you…?</em>',
          },
        ] },
      ],
    },
    {
      id: 'quiz', label: '🎯 Тест',
      blocks: [
        { t: 'label', text: 'Тест — Неделя 1' },
        { t: 'quiz', items: [
          { q: 'I ___ from Russia.', opts: ['be', 'is', 'are', 'am'], ans: 3, exp: 'С <em>I</em> всегда <em>am</em>: I am (I’m) from Russia.' },
          { q: 'She ___ a teacher.', opts: ['am', 'are', 'is', 'be'], ans: 2, exp: 'He / she / it → <em>is</em>: She is a teacher.' },
          { q: 'They ___ my friends.', opts: ['am', 'are', 'is', 'be'], ans: 1, exp: 'We / you / they → <em>are</em>: They are my friends.' },
          { q: 'Как поздороваться в 15:00?', opts: ['Good afternoon', 'Good morning', 'Good evening', 'Good night'], ans: 0, exp: '<em>Good afternoon</em> — с полудня примерно до 18:00. <em>Good night</em> говорят только при прощании.' },
          { q: '«Приятно познакомиться» — это…', opts: ['See you', 'How are you?', 'Nice to meet you', 'Thank you'], ans: 2, exp: '<em>Nice to meet you</em>. Ответ: <em>Nice to meet you too</em>.' },
          { q: 'Where are you ___?', opts: ['in', 'from', 'of', 'at'], ans: 1, exp: '<em>Where are you from?</em> — «Откуда вы?». Предлог <em>from</em> стоит в конце вопроса.' },
          { q: 'Как называется буква J?', opts: ['[dʒiː]', '[aɪ]', '[jeɪ]', '[dʒeɪ]'], ans: 3, exp: 'J — [dʒeɪ] «джей». [dʒiː] — это G.' },
          { q: 'Какой звук в слове «think»?', opts: ['[θ]', '[f]', '[s]', '[t]'], ans: 0, exp: '<em>th</em> в <em>think</em> — глухой [θ]: кончик языка между зубами.' },
          { q: 'I’m = …', opts: ['I is', 'I are', 'I am', 'I be'], ans: 2, exp: '<em>I’m</em> — краткая форма <em>I am</em>.' },
          { q: 'Как вежливо переспросить?', opts: ['What?', 'Pardon?', 'No!', 'Hi!'], ans: 1, exp: '<em>Pardon?</em> или <em>Sorry?</em> — вежливо. <em>What?</em> звучит грубовато.' },
        ] },
      ],
    },
    {
      id: 'plan', label: '📅 План',
      blocks: [
        { t: 'plan',
          goal: 'Поздороваться, представиться и рассказать, откуда вы. Произнести 9 трудных английских звуков, продиктовать своё имя по буквам. Объяснить, зачем в английском глагол <em>to be</em>. Попросить говорить медленнее.',
          days: [
            { title: 'Звуки английского', tasks: ['Изучить 9 звуков из раздела «Звуки»', 'Отработать [θ] и [ð] перед зеркалом: 10 слов', 'Фейнман: объяснить себе разницу [w] и [v]'] },
            { title: 'Алфавит', tasks: ['Выучить названия букв, особенно E, I, G, J, R', 'Продиктовать вслух своё имя, фамилию и e-mail', 'Записать, какие буквы путаете'] },
            { title: 'Приветствия и знакомство', tasks: ['Выучить 17 фраз из словаря', 'Особое внимание: Nice to meet you, Can you speak more slowly?', 'Каждую фразу — вслух 5 раз'] },
            { title: 'Глагол to be', tasks: ['I am, you are, he/she/it is, we/they are — наизусть', 'Составить 6 предложений о себе и знакомых', 'Краткие формы: I’m, he’s, they’re'] },
            { title: 'Диалог', tasks: ['Прочитать диалог 3 раза, с транскрипцией', 'Разыграть обе роли вслух без текста', 'Сделать 4 упражнения'] },
            { title: 'Слушать английский', tasks: ['20 минут: BBC Learning English или подкаст 6 Minute English', 'Записать 5 слов, которые удалось расслышать', 'Пройти тест недели'] },
            { title: 'Фейнман-урок недели', tasks: ['Запишите 1 минуту аудио: представьтесь по-английски', 'Объясните вслух, зачем нужен глагол to be', 'Список пробелов → план на неделю 2'] },
          ] },
        { t: 'label', text: 'Ресурсы', top: true },
        { t: 'card', color: 'blue', title: '🎧 Слушать', html: `<ul>
          <li><strong>BBC Learning English</strong> (bbc.co.uk/learningenglish) — уроки, подкасты, произношение</li>
          <li><strong>6 Minute English</strong> — короткий подкаст BBC с транскриптом</li>
          <li><strong>Cambridge Dictionary</strong> — британское и американское произношение каждого слова</li>
          <li><strong>YouGlish</strong> — как слово звучит в живой речи (фильтр UK)</li></ul>` },
        { t: 'card', color: 'gold', title: '📖 Учебники и приложения', html: `<ul>
          <li><strong>English File Beginner</strong> (Oxford) или <strong>Headway Beginner</strong> — классика уровня A1</li>
          <li><strong>Essential Grammar in Use</strong> (Murphy, «красный Мёрфи») — грамматика A1–A2</li>
          <li><strong>Anki</strong> — карточки с интервальными повторениями</li>
          <li><strong>Dictionary English</strong> — англо-русский словарь с формами глаголов: vpresweb.github.io/Dictionary_English</li></ul>` },
      ],
    },
  ],
});
