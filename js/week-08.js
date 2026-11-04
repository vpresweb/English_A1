// A1 · Неделя 8 — Тело · Здоровье
COURSE.weeks.push({
  n: 8,
  title: 'Тело · Здоровье',
  tabs: [
    {
      id: 'plan', label: '📅 План',
      blocks: [
        { t: 'plan',
          goal: 'Назвать части тела, объяснить врачу или фармацевту, что болит, понять простые советы. Использовать <em>should / shouldn’t</em>, объектные местоимения и конструкцию <em>I’ve got a headache</em>.',
          days: [
            { title: 'Части тела', tasks: ['head, arm, leg, back, stomach…', 'Неправильное мн. ч.: foot → feet, tooth → teeth', 'Показать и назвать — 15 частей тела'] },
            { title: 'Что болит', tasks: ['I’ve got a headache / a cold', 'My back hurts / My leg is sore', 'Фейнман: три способа сказать «болит»'] },
            { title: 'У врача', tasks: ['make an appointment, GP, prescription', 'Вопросы врача и ответы', 'Разыграть приём'] },
            { title: 'Should / shouldn’t', tasks: ['You should rest. You shouldn’t smoke.', 'Дать 6 советов другу с простудой', 'Should I…? — спросить совета'] },
            { title: 'Местоимения', tasks: ['I → me, he → him, she → her…', 'Call me! Help them!', '10 предложений с объектными местоимениями'] },
            { title: 'Диалог и тест', tasks: ['Диалог в аптеке — обе роли', 'Пройти тест недели', 'Почитать о NHS на nhs.uk'] },
            { title: 'Фейнман-урок недели', tasks: ['Объясните, когда нужно me, а когда I', 'Опишите воображаемую болезнь — 1 минута', 'Пробелы → план на неделю 9'] },
          ] },
      ],
    },
    {
      id: 'body', label: '🫀 Тело',
      blocks: [
        { t: 'label', text: 'The body — нажмите для произношения' },
        { t: 'grid', items: [
          { icon: '🗣', en: 'head', ipa: '[hed]', ru: 'голова' },
          { icon: '👁', en: 'eye / eyes', ipa: '[aɪ]', ru: 'глаз / глаза' },
          { icon: '👂', en: 'ear', ipa: '[ɪə]', ru: 'ухо' },
          { icon: '👃', en: 'nose', ipa: '[nəʊz]', ru: 'нос' },
          { icon: '👄', en: 'mouth', ipa: '[maʊθ]', ru: 'рот' },
          { icon: '🦷', en: 'tooth / teeth', ipa: '[tuːθ] / [tiːθ]', ru: 'зуб / зубы' },
          { icon: '💇', en: 'hair', ipa: '[heə]', ru: 'волосы', ex: 'неисч.: my hair is long' },
          { icon: '🧣', en: 'neck', ipa: '[nek]', ru: 'шея' },
          { icon: '🗿', en: 'face', ipa: '[feɪs]', ru: 'лицо' },
          { icon: '🤷', en: 'shoulder', ipa: '[ˈʃəʊldə]', ru: 'плечо' },
          { icon: '💪', en: 'arm', ipa: '[ɑːm]', ru: 'рука (от плеча)' },
          { icon: '✋', en: 'hand', ipa: '[hænd]', ru: 'кисть руки' },
          { icon: '☝️', en: 'finger', ipa: '[ˈfɪŋɡə]', ru: 'палец (руки)', ex: 'на ноге — toe' },
          { icon: '🫁', en: 'chest', ipa: '[tʃest]', ru: 'грудь, грудная клетка' },
          { icon: '🫃', en: 'stomach', ipa: '[ˈstʌmək]', ru: 'живот, желудок', ex: 'ch = [k]' },
          { icon: '🔙', en: 'back', ipa: '[bæk]', ru: 'спина' },
          { icon: '🦵', en: 'leg', ipa: '[leɡ]', ru: 'нога (целиком)' },
          { icon: '🦵', en: 'knee', ipa: '[niː]', ru: 'колено', ex: 'k не читается' },
          { icon: '🦶', en: 'foot / feet', ipa: '[fʊt] / [fiːt]', ru: 'ступня / ступни' },
          { icon: '❤️', en: 'heart', ipa: '[hɑːt]', ru: 'сердце' },
        ] },
        { t: 'card', color: 'blue', title: 'Рука и нога — по два слова', html: '<p>В русском «рука» и «нога» — целиком. В английском различают: <span class="en">arm</span> — рука от плеча до кисти, <span class="en">hand</span> — кисть; <span class="en">leg</span> — нога, <span class="en">foot</span> — ступня. «Пожать руку» — <span class="en">shake hands</span>, «сломать ногу» (голень) — <span class="en">break a leg</span>.</p>' },
        { t: 'card', color: 'red', title: 'Неправильное множественное число', html: '<p><span class="en">foot → feet</span>, <span class="en">tooth → teeth</span>, <span class="en">man → men</span>, <span class="en">woman → women</span> [ˈwɪmɪn], <span class="en">child → children</span>, <span class="en">person → people</span>, <span class="en">mouse → mice</span>.</p>' },
        { t: 'label', text: 'Внешность', top: true },
        { t: 'grid', items: [
          { en: 'tall / short', ru: 'высокий / низкий' },
          { en: 'slim / overweight', ru: 'стройный / полный', ex: 'fat — грубо' },
          { en: 'long / short hair', ru: 'длинные / короткие волосы' },
          { en: 'fair / dark hair', ru: 'светлые / тёмные волосы', ex: 'blonde — блондинка' },
          { en: 'blue / brown eyes', ru: 'голубые / карие глаза' },
          { en: 'a beard / a moustache', ru: 'борода / усы' },
        ] },
        { t: 'card', color: 'gold', title: 'Описание человека', html: '<p><span class="en">What does she look like?</span> — Как она выглядит? — <span class="en">She’s tall and slim. She’s got long dark hair and brown eyes.</span> Рост и фигура — с <span class="en">is</span>, волосы и глаза — с <span class="en">has got</span>.</p>' },
      ],
    },
    {
      id: 'health', label: '🤒 Здоровье',
      blocks: [
        { t: 'label', text: 'What’s the matter? — Что случилось?' },
        { t: 'grid', items: [
          { icon: '🤕', en: "I've got a headache.", ru: 'У меня болит голова.' },
          { icon: '🦷', en: "I've got toothache.", ru: 'У меня болит зуб.' },
          { icon: '🤢', en: "I've got stomach ache.", ru: 'У меня болит живот.' },
          { icon: '👂', en: "I've got earache.", ru: 'У меня болит ухо.' },
          { icon: '🗣', en: "I've got a sore throat.", ru: 'У меня болит горло.' },
          { icon: '🤧', en: "I've got a cold.", ru: 'Я простыл.' },
          { icon: '😷', en: "I've got a cough.", ru: 'У меня кашель.' },
          { icon: '🌡', en: "I've got a temperature.", ru: 'У меня температура.', ex: 'также a fever' },
          { icon: '🤒', en: "I've got flu.", ru: 'У меня грипп.' },
          { icon: '🔙', en: 'My back hurts.', ru: 'У меня болит спина.' },
          { icon: '😵', en: 'I feel sick.', ru: 'Меня тошнит.', ex: 'UK: sick = тошнота' },
          { icon: '😴', en: "I'm tired. / I feel ill.", ru: 'Я устал. / Мне плохо.' },
        ] },
        { t: 'card', color: 'gold', title: 'Фейнман: три способа сказать «болит»', html: `<ul>
          <li><strong>I’ve got a … ache</strong> — для головы, зуба, живота, уха, спины: <span class="en">I’ve got a headache / backache</span></li>
          <li><strong>My … hurts</strong> — для любой части тела: <span class="en">My knee hurts. My eyes hurt.</span></li>
          <li><strong>I’ve got a sore …</strong> — «воспалённое, саднит»: <span class="en">a sore throat, sore eyes</span></li></ul>
          <p>Общая модель: «у меня есть боль» — <em>have got</em>, как и в неделе 2.</p>` },
        { t: 'card', color: 'red', title: 'Ill или sick?', html: '<p><span class="en">I’m ill</span> — я болен. <span class="en">I feel sick</span> — в британском «меня тошнит». <span class="en">I’m off sick</span> — я на больничном. В американском <span class="en">sick</span> = просто «больной».</p>' },
      ],
    },
    {
      id: 'doctor', label: '👨‍⚕️ У врача',
      blocks: [
        { t: 'label', text: 'At the doctor’s и at the chemist’s' },
        { t: 'grid', items: [
          { en: "I'd like to make an appointment.", ru: 'Я хотел бы записаться на приём.' },
          { en: 'What seems to be the problem?', ru: 'На что жалуетесь?', ex: 'вопрос врача' },
          { en: 'How long have you had it?', ru: 'Как долго это у вас?' },
          { en: 'For three days.', ru: 'Три дня.' },
          { en: 'Are you taking any medicine?', ru: 'Вы принимаете какие-нибудь лекарства?' },
          { en: "I'm allergic to penicillin.", ru: 'У меня аллергия на пенициллин.' },
          { en: 'Take two tablets three times a day.', ru: 'Принимайте по две таблетки три раза в день.' },
          { en: 'Here is your prescription.', ru: 'Вот ваш рецепт.' },
          { en: 'Can you recommend something for a cough?', ru: 'Посоветуете что-нибудь от кашля?', ex: 'в аптеке' },
          { en: 'Get well soon!', ru: 'Поправляйтесь!' },
        ] },
        { t: 'card', color: 'green', title: 'Медицина в Британии', html: '<p><strong>NHS</strong> — государственная система здравоохранения. <strong>GP</strong> (general practitioner) — семейный врач, к нему идут сначала. <strong>A&E</strong> (Accident and Emergency) — травмпункт и приёмный покой. Экстренный номер — <strong>999</strong>, несрочная медпомощь — <strong>111</strong>.</p>' },
        { t: 'label', text: 'Should — совет', top: true },
        { t: 'table', head: ['', 'Форма', 'Пример'], rows: [
          ['Совет', '<span class="conj">should</span> + глагол', '<span class="en">You should drink a lot of water.</span>'],
          ['Не советую', '<span class="conj">shouldn’t</span> + глагол', '<span class="en">You shouldn’t go to work.</span>'],
          ['Вопрос', '<span class="conj">Should I…?</span>', '<span class="en">Should I see a doctor?</span>'],
        ] },
        { t: 'card', color: 'blue', title: 'Should — тоже «ленивый»', html: '<p>Как и <span class="en">can</span>: без -s (<span class="en">he should</span>), без <em>do</em> (<span class="en">Should I…?</span>), после него глагол без <em>to</em>. <span class="en">should</span> — мягкий совет «стоит, следует». Строже — <span class="en">must</span> «должен» (неделя 10).</p>' },
        { t: 'grid', items: [
          { en: 'You should stay in bed.', ru: 'Тебе стоит полежать в постели.' },
          { en: 'You should take some paracetamol.', ru: 'Тебе стоит принять парацетамол.' },
          { en: "You shouldn't eat sweets.", ru: 'Тебе не стоит есть сладкое.' },
          { en: 'You should see a dentist.', ru: 'Тебе нужно к стоматологу.' },
        ] },
      ],
    },
    {
      id: 'pronouns', label: '🔤 Местоимения',
      blocks: [
        { t: 'label', text: 'Объектные местоимения — «меня, тебя, его»' },
        { t: 'table', head: ['Подлежащее', 'Объект', 'Притяжательное', 'Пример'], rows: [
          ['<span class="conj">I</span>', '<span class="conj">me</span>', 'my', '<span class="en">Call me tomorrow.</span>'],
          ['<span class="conj">you</span>', '<span class="conj">you</span>', 'your', '<span class="en">I can help you.</span>'],
          ['<span class="conj">he</span>', '<span class="conj">him</span>', 'his', '<span class="en">I know him.</span>'],
          ['<span class="conj">she</span>', '<span class="conj">her</span>', 'her', '<span class="en">Ask her.</span>'],
          ['<span class="conj">it</span>', '<span class="conj">it</span>', 'its', '<span class="en">Take it twice a day.</span>'],
          ['<span class="conj">we</span>', '<span class="conj">us</span>', 'our', '<span class="en">Join us!</span>'],
          ['<span class="conj">they</span>', '<span class="conj">them</span>', 'their', '<span class="en">I like them.</span>'],
        ] },
        { t: 'card', color: 'gold', title: 'Фейнман: падежи — через место в предложении', html: '<p>В русском «я» превращается в «меня, мне, мной». В английском у местоимения всего две формы: <strong>до глагола</strong> — <span class="en">I, he, she</span>, <strong>после глагола или предлога</strong> — <span class="en">me, him, her</span>: <span class="en">She loves him. He loves her. Come with me. This is for them.</span></p>' },
        { t: 'card', color: 'red', title: 'Частая ошибка', html: '<p>✗ <em>Help I!</em> → ✓ <span class="en">Help me!</span><br>✗ <em>Me and my friend go…</em> → ✓ <span class="en">My friend and I go…</span> (подлежащее — <em>I</em>, и вежливо ставить себя вторым)</p>' },
      ],
    },
    {
      id: 'dialogue', label: '💬 Диалог',
      blocks: [
        { t: 'label', text: 'Диалог — в аптеке' },
        { t: 'card', color: 'gold', title: 'Как работать', html: '<p>Нажмите на реплику, чтобы услышать её. Найдите конструкции «болит» и все <em>should</em>. Разыграйте ту же сцену с другим симптомом.</p>' },
        { t: 'dialogue', lines: [
          { right: true, av: '👩‍⚕️', en: 'Good morning. How can I help you?', ru: 'Доброе утро. Чем могу помочь?' },
          { en: "Hello. I don't feel very well. I've got a sore throat and a headache.", ru: 'Здравствуйте. Мне нехорошо. У меня болит горло и голова.' },
          { right: true, av: '👩‍⚕️', en: "I'm sorry to hear that. Have you got a temperature?", ru: 'Сочувствую. У вас есть температура?' },
          { en: "I think so. I feel hot, and my whole body hurts.", ru: 'Думаю, да. Мне жарко, и всё тело болит.' },
          { right: true, av: '👩‍⚕️', en: 'How long have you felt like this?', ru: 'Сколько вы себя так чувствуете?' },
          { en: 'Since yesterday evening.', ru: 'Со вчерашнего вечера.' },
          { right: true, av: '👩‍⚕️', en: 'It sounds like a cold or flu. You should take these tablets — two every four hours.', ru: 'Похоже на простуду или грипп. Вам стоит принимать эти таблетки — по две каждые четыре часа.' },
          { en: 'Should I go to work?', ru: 'Мне идти на работу?' },
          { right: true, av: '👩‍⚕️', en: "No, you shouldn't. Stay at home, rest and drink a lot of water. If it gets worse, call your GP.", ru: 'Нет, не стоит. Оставайтесь дома, отдыхайте и пейте много воды. Если станет хуже, позвоните врачу.' },
          { en: 'Thank you. How much are they?', ru: 'Спасибо. Сколько они стоят?' },
          { right: true, av: '👩‍⚕️', en: "Three pounds forty. Get well soon!", ru: 'Три фунта сорок. Поправляйтесь!' },
        ] },
        { t: 'card', color: 'blue', title: 'Разбор диалога', html: `<ul>
          <li><strong>I don’t feel very well</strong> — мягкое «мне нехорошо»</li>
          <li><strong>I’m sorry to hear that</strong> — сочувствие в ответ на плохую новость</li>
          <li><strong>It sounds like…</strong> — «похоже на…»</li>
          <li><strong>If it gets worse</strong> — если станет хуже; <em>get</em> = становиться</li></ul>` },
      ],
    },
    {
      id: 'quiz', label: '🎯 Тест',
      blocks: [
        { t: 'label', text: 'Тест — Неделя 8' },
        { t: 'quiz', items: [
          { q: 'У меня болит голова. — I’ve got a ___.', opts: ['head pain', 'head hurt', 'sore head', 'headache'], ans: 3, exp: '<em>I’ve got a headache</em>.' },
          { q: 'My back ___.', opts: ['hurt', 'is hurt', 'hurts', 'aches me'], ans: 2, exp: '<em>my back</em> = it → <em>hurts</em>.' },
          { q: 'Мн. ч. от foot — …', opts: ['foots', 'footes', 'feets', 'feet'], ans: 3, exp: '<em>foot → feet</em>, как <em>tooth → teeth</em>.' },
          { q: 'You ___ see a doctor.', opts: ['shoulds', 'should to', 'should', 'are should'], ans: 2, exp: '<em>should</em> + глагол без <em>to</em>.' },
          { q: 'You ___ smoke. It’s bad for you.', opts: ["shouldn't", "don't should", 'not should', "doesn't should"], ans: 0, exp: 'Отрицание — <em>shouldn’t</em>.' },
          { q: 'Can you help ___?', opts: ['I', 'me', 'my', 'mine'], ans: 1, exp: 'После глагола — объектная форма: <em>help me</em>.' },
          { q: 'I know Tom. I see ___ every day.', opts: ['he', 'him', 'his', 'them'], ans: 1, exp: '<em>he</em> → <em>him</em> после глагола.' },
          { q: 'This present is for my parents. I hope they like ___.', opts: ['they', 'them', 'its', 'it'], ans: 3, exp: 'Подарок — один предмет → <em>it</em>.' },
          { q: 'Как описать внешность: She ___ long hair.', opts: ['is', 'have', 'has got', 'are'], ans: 2, exp: 'Волосы, глаза — <em>has got</em>: <em>She has got long hair</em>.' },
          { q: 'Семейный врач в Британии — …', opts: ['GP', 'NHS', 'A&E', 'chemist'], ans: 0, exp: '<em>GP</em> — general practitioner. <em>NHS</em> — система здравоохранения, <em>A&E</em> — приёмный покой.' },
        ] },
      ],
    },
    {
      id: 'feynman', label: '✍️ Фейнман',
      blocks: [
        { t: 'label', text: 'Дневник Фейнмана — Неделя 8' },
        { t: 'journal', items: [
          {
            label: 'Задание 1 · Объяснение концепта',
            prompt: 'Объясните, почему по-английски говорят <span class="en">She loves him</span>, но <span class="en">He loves her</span>. Как английский обходится без падежей?',
            placeholder: 'В английском форма местоимения зависит от…',
            keys: ['мест', 'порядок', 'после', 'до', 'перед', 'объект', 'подлежащ'],
            ok: '✓ Верно! Роль слова показывает его место: перед глаголом — тот, кто действует (<em>I, he, she, we, they</em>), после глагола или предлога — на кого направлено действие (<em>me, him, her, us, them</em>). Порядок слов заменяет падежи.<br><br>Пробел для углубления: почему <em>you</em> и <em>it</em> не меняются?',
            tip: '💡 Подсказка: посмотрите, где стоит местоимение — до глагола или после. Сравните: <em>He</em> calls <em>her</em> / <em>She</em> calls <em>him</em>.',
          },
          {
            label: 'Задание 2 · Производство языка',
            prompt: 'Напишите диалог с врачом или фармацевтом (8–10 реплик): опишите симптомы, ответьте на вопросы и получите советы с <em>should / shouldn’t</em>.',
            placeholder: "Doctor: What seems to be the problem?\nMe: I've got…",
            ok: '✓ Хорошо! Проверьте:<br><br>• <em>I’ve got a headache / a cold / a sore throat</em><br>• <em>My … hurts</em> — с -s для одной части тела<br>• <em>You should + глагол</em>, без <em>to</em><br>• Вежливые формулы: <em>I’m sorry to hear that, Get well soon</em><br><br>Разыграйте диалог вслух — это пригодится в поездке.',
          },
          {
            label: 'Задание 3 · Пробелы недели',
            prompt: 'Каких слов или фраз вам не хватит, если вы заболеете в Британии? Составьте список.',
            placeholder: 'Мне не хватает слов…',
            ok: '✓ Отлично — это практичный список. Добавьте каждое слово в карточки и придумайте с ним предложение о себе. Полезно знать: <em>allergy, prescription, appointment, painkiller, plaster</em> (пластырь), <em>emergency</em>.',
          },
        ] },
      ],
    },
  ],
});
