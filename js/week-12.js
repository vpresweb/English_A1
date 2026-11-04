// A1 · Неделя 12 — Финал A1: экзамен, итоги, дорожная карта
COURSE.weeks.push({
  n: 12,
  title: 'Финал A1 · Экзамен',
  tabs: [
    {
      id: 'overview', label: '📋 Итоги',
      blocks: [
        { t: 'label', text: 'Что пройдено за 3 месяца' },
        { t: 'card', color: 'green', title: '🎉 Поздравляем — вы прошли курс A1!', html: '<p>12 недель · около 1000 слов и фраз · 11 диалогов · 110 тестовых вопросов · 34 задания Фейнмана. Теперь — финальный экзамен и дорожная карта до A2. Неделя, тест которой пройден на 60% и выше, отмечена зелёным.</p>' },
        { t: 'summary', items: [
          { title: 'Знакомство и звуки', topics: 'Звуки [θ] [ð] [w] · Алфавит · to be · Hello, I’m…' },
          { title: 'Числа, время, семья', topics: 'Числа до 1000 · Который час · have got · ’s' },
          { title: 'Распорядок дня', topics: 'Present Simple · do / does · always, never' },
          { title: 'Еда и покупки', topics: 'a / an / some / any · much / many · £ · I’d like' },
          { title: 'Дом и мебель', topics: 'there is / are · Предлоги места · this / these' },
          { title: 'Город и транспорт', topics: 'Как пройти · Повелительное · by bus · can' },
          { title: 'Одежда', topics: 'Present Continuous · Simple vs Continuous · размеры' },
          { title: 'Тело и здоровье', topics: 'I’ve got a headache · should · me, him, her' },
          { title: 'Погода и прошлое', topics: 'was / were · Past Simple · 20 неправильных глаголов' },
          { title: 'Работа и планы', topics: 'must / have to · going to / will · собеседование' },
          { title: 'Хобби и сравнения', topics: 'like + -ing · -er / more · the best · I agree' },
          { title: 'Финал A1', topics: 'Экзамен · Итоги · Дорожная карта до A2' },
        ] },
        { t: 'card', color: 'blue', title: 'Структура финального экзамена', html: `<ul>
          <li><strong>Часть 1 — Грамматика:</strong> 20 вопросов по всем темам курса</li>
          <li><strong>Часть 2 — Лексика:</strong> 10 ситуативных вопросов</li>
          <li><strong>Часть 3 — Письмо:</strong> 3 задания — о себе, письмо другу, описание места</li>
          <li><strong>Часть 4 — Говорение:</strong> ролевая игра с самооценкой по 8 критериям</li></ul>
          <p>Проходной балл: <strong>60%</strong> по тестам — уровень A1 подтверждён, <strong>80%</strong> — можно смело переходить к A2.</p>` },
      ],
    },
    {
      id: 'exam-grammar', label: '📝 Грамматика',
      blocks: [
        { t: 'label', text: 'Часть 1 — Грамматика (20 вопросов)' },
        { t: 'quiz', id: 'grammar', exam: true, items: [
          { q: 'My sister ___ a nurse.', opts: ['am', 'are', 'is', 'be'], ans: 2, exp: 'he / she / it → <em>is</em>. Неделя 1.' },
          { q: 'How old ___ your children?', opts: ['is', 'do', 'have', 'are'], ans: 3, exp: 'Возраст — через <em>to be</em>, <em>children</em> — мн. ч. → <em>are</em>. Неделя 2.' },
          { q: 'They ___ got a dog.', opts: ['has', 'do', 'are', 'have'], ans: 3, exp: '<em>they have got</em>. Неделя 2.' },
          { q: 'He ___ to work by train.', opts: ['go', 'goes', 'going', 'is go'], ans: 1, exp: 'Present Simple, he → <em>goes</em>. Неделя 3.' },
          { q: '___ she like coffee?', opts: ['Does', 'Is', 'Do', 'Has'], ans: 0, exp: 'Вопрос с she в Present Simple — <em>Does</em>. Неделя 3.' },
          { q: 'I ___ eat meat. I’m vegetarian.', opts: ['not', "don't never", 'never', 'no'], ans: 2, exp: '<em>never</em> уже отрицание. Неделя 3.' },
          { q: 'Is there ___ bread?', opts: ['a', 'some', 'many', 'any'], ans: 3, exp: 'Вопрос, неисчисляемое → <em>any</em>. Неделя 4.' },
          { q: 'How ___ people live here?', opts: ['much', 'lot', 'many', 'more'], ans: 2, exp: '<em>people</em> — исчисляемое → <em>many</em>. Неделя 4.' },
          { q: '___ two bathrooms in the flat.', opts: ['There is', 'There are', 'It is', 'They are'], ans: 1, exp: 'Мн. ч. → <em>There are</em>. Неделя 5.' },
          { q: 'The keys are ___ the table.', opts: ['on', 'in', 'at', 'between'], ans: 0, exp: 'На поверхности — <em>on</em>. Неделя 5.' },
          { q: '___ park here. It’s not allowed.', opts: ["Don't", 'Not', 'No', "Doesn't"], ans: 0, exp: 'Запрет — <em>Don’t</em> + глагол. Неделя 6.' },
          { q: 'I ___ swim, but I can ride a bike.', opts: ["don't can", "cann't", 'not can', "can't"], ans: 3, exp: 'Отрицание — <em>can’t</em>. Неделя 6.' },
          { q: 'Shh! The baby ___.', opts: ['sleeps', 'is sleeping', 'sleep', 'sleeping'], ans: 1, exp: 'Прямо сейчас → Present Continuous. Неделя 7.' },
          { q: 'I ___ the answer.', opts: ['knowing', 'am knowing', 'know', 'knows'], ans: 2, exp: '<em>know</em> не ставят в Continuous. Неделя 7.' },
          { q: 'You look ill. You ___ go home.', opts: ['should', 'should to', 'shoulds', 'are should'], ans: 0, exp: 'Совет — <em>should</em> + глагол. Неделя 8.' },
          { q: 'This is Anna. Do you know ___?', opts: ['she', 'her', 'hers', 'him'], ans: 1, exp: 'После глагола — <em>her</em>. Неделя 8.' },
          { q: 'Where ___ you last night?', opts: ['was', 'did', 'were', 'are'], ans: 2, exp: '<em>you</em> → <em>were</em>. Неделя 9.' },
          { q: 'We ___ a great film yesterday.', opts: ['see', 'seen', 'seed', 'saw'], ans: 3, exp: '<em>see → saw</em>. Неделя 9.' },
          { q: 'Next summer we ___ visit Wales.', opts: ['will to', 'going to', 'are going to', 'go'], ans: 2, exp: 'План → <em>are going to</em>. Неделя 10.' },
          { q: 'Cars are ___ than bikes.', opts: ['fast', 'faster', 'more fast', 'fastest'], ans: 1, exp: '<em>fast → faster</em>. Неделя 11.' },
        ] },
      ],
    },
    {
      id: 'exam-vocab', label: '📝 Лексика',
      blocks: [
        { t: 'label', text: 'Часть 2 — Лексика и ситуации (10 вопросов)' },
        { t: 'quiz', id: 'vocab', exam: true, items: [
          { q: 'Вы не расслышали собеседника. Что сказать?', opts: ['What?', 'No.', 'Repeat!', 'Sorry, can you say that again?'], ans: 3, exp: 'Вежливо: <em>Sorry, can you say that again?</em> или <em>Pardon?</em>' },
          { q: 'Официант спрашивает: «Eat in or take away?» Он хочет знать…', opts: ['здесь вы поедите или с собой', 'будете ли вы платить картой', 'нужен ли пакет', 'хотите ли десерт'], ans: 0, exp: '<em>Eat in</em> — здесь, <em>take away</em> — с собой.' },
          { q: 'Вы на 2-м этаже по-русски. По-британски это…', opts: ['first floor', 'ground floor', 'second floor', 'upstairs'], ans: 0, exp: 'Британский <em>ground floor</em> — наш первый, <em>first floor</em> — второй.' },
          { q: 'Нужен билет туда и обратно:', opts: ['A single, please.', 'A back, please.', 'A double, please.', 'A return, please.'], ans: 3, exp: '<em>A return</em> — туда и обратно.' },
          { q: 'Что значит «I feel sick» в Британии?', opts: ['Мне скучно', 'Меня тошнит', 'Я устал', 'Мне холодно'], ans: 1, exp: 'В британском <em>feel sick</em> — тошнота.' },
          { q: '12:30 — It’s…', opts: ['twelve and half', 'half to one', 'half past twelve', 'thirty past half'], ans: 2, exp: '<em>half past twelve</em> — половина первого.' },
          { q: 'Как спросить о профессии?', opts: ['What are you doing?', 'What do you do?', 'What is your work doing?', 'Who are you?'], ans: 1, exp: '<em>What do you do?</em> — кем вы работаете.' },
          { q: 'Брюки (UK) — …', opts: ['pants', 'shorts', 'trousers', 'jeans'], ans: 2, exp: 'В британском <em>trousers</em>; <em>pants</em> в UK — трусы!' },
          { q: 'Ответ на «Would you like to come to my party?»', opts: ["I'd love to!", 'Yes, I like.', 'Yes, I do.', 'I would like.'], ans: 0, exp: 'Принять приглашение — <em>I’d love to!</em>' },
          { q: 'Lovely day, isn’t it? — лучший ответ:', opts: ['No.', 'It is Monday.', 'I am fine.', 'Yes, beautiful!'], ans: 3, exp: 'Small talk о погоде: соглашаемся — <em>Yes, beautiful!</em>' },
        ] },
      ],
    },
    {
      id: 'exam-writing', label: '✍️ Письмо',
      blocks: [
        { t: 'label', text: 'Часть 3 — Письмо' },
        { t: 'writing', items: [
          {
            title: 'Задание 1 — About me',
            prompt: 'Напишите текст о себе (8–10 предложений): имя, откуда вы, где живёте, работа, семья, хобби, обычный день, планы на будущее.',
            placeholder: "My name is… I'm from… I live in… I work as… I've got… I usually… Next year I'm going to…",
            criteria: 'to be · have got · Present Simple с -s · наречия частоты · going to · минимум 80 слов',
            min: 200,
            keys: ['am', 'got', 'usually', 'going to', 'like'],
            ok: '✓ Отличный текст! Перечитайте его и проверьте окончание <em>-s</em> у he / she, артикль перед профессией и <em>going to</em> с <em>am / is / are</em>. Затем прочитайте вслух — это ваш рассказ о себе на любом собеседовании и экзамене.',
            tip: '💡 Добавьте больше конструкций курса: <em>I’ve got…</em>, <em>I usually…</em>, <em>I like + -ing</em>, <em>I’m going to…</em>. Чем разнообразнее грамматика, тем выше оценка.',
          },
          {
            title: 'Задание 2 — Письмо другу',
            prompt: 'Напишите короткое неформальное письмо другу (8 предложений). Расскажите о прошлых выходных: где были, какая была погода, что делали. В конце — планы на следующие выходные и приглашение.',
            placeholder: 'Hi Tom,\nHow are you? Last weekend I…\n\nBest wishes,\n[Name]',
            criteria: 'Past Simple: правильные и неправильные · was / were · погода через it · going to · Would you like to…?',
            min: 180,
            keys: ['was', 'went', 'weather', 'going to', 'would you like'],
            ok: '✓ Хорошее письмо! Проверьте: неправильные глаголы (<em>went, saw, had</em>), после <em>did / didn’t</em> — первая форма, приглашение <em>Would you like to…?</em> и неформальное окончание <em>Best wishes / Love / See you soon</em>.',
            tip: '💡 Добавьте: погоду (<em>It was sunny</em>), минимум 3 глагола в прошедшем, планы (<em>I’m going to…</em>) и приглашение (<em>Would you like to come?</em>).',
          },
          {
            title: 'Задание 3 — Описание места',
            prompt: 'Опишите своё любимое место — город, район или комнату (6–8 предложений). Используйте <em>there is / are</em>, предлоги места, прилагательные и хотя бы одно сравнение.',
            placeholder: 'My favourite place is… There is… It’s next to… It’s bigger than… It’s the most…',
            criteria: 'there is / are · предлоги места · прилагательные перед существительным · сравнительная или превосходная степень',
            min: 150,
            keys: ['there is', 'there are', 'than', 'the most', 'next to', 'opposite'],
            ok: '✓ Отлично! Проверьте <em>there is</em> + ед. ч., <em>there are</em> + мн. ч., <em>than</em> после сравнительной степени и <em>the</em> перед превосходной.',
            tip: '💡 Добавьте <em>there is / there are</em>, предлоги (<em>next to, opposite, in front of</em>) и сравнение (<em>bigger than</em>, <em>the most beautiful</em>).',
          },
        ] },
      ],
    },
    {
      id: 'exam-speaking', label: '🎭 Говорение',
      blocks: [
        { t: 'label', text: 'Часть 4 — Говорение' },
        { t: 'card', color: 'gold', title: 'Как проходить', html: '<p>Выберите одну ситуацию и разыграйте её вслух — с партнёром или запишите себя на диктофон (минимум 2 минуты). Затем прослушайте запись и честно отметьте критерии ниже.</p>' },
        { t: 'grid', items: [
          { icon: '☕', en: 'In a café', ru: 'Закажите обед, спросите о блюдах, оплатите картой' },
          { icon: '🗺', en: 'Asking the way', ru: 'Спросите дорогу к вокзалу и купите билет' },
          { icon: '🏥', en: 'At the chemist’s', ru: 'Опишите симптомы и получите совет' },
          { icon: '🤝', en: 'Meeting a new colleague', ru: 'Познакомьтесь, расскажите о себе, работе и хобби' },
        ] },
        { t: 'label', text: 'Самооценка', top: true },
        { t: 'selfcheck', items: [
          'Я поздоровался и попрощался уместно (Hello / Good morning / Bye)',
          'Я говорил без долгих пауз и не переходил на русский',
          'Я использовал вежливые формы: please, thank you, Could I…?, I’d like…',
          'Я задал минимум 3 вопроса собеседнику',
          'Я не забывал -s у he / she / it и глагол to be',
          'Я использовал хотя бы одно прошедшее время (was, went, had…)',
          'Я переспросил или попросил говорить медленнее, когда было нужно',
          'Звуки [θ], [ð] и [w] звучали отчётливо',
        ] },
      ],
    },
    {
      id: 'result', label: '🏆 Результат',
      blocks: [
        { t: 'label', text: 'Итоговый результат' },
        { t: 'card', color: 'blue', title: 'Как считается итог', html: '<p>Пройдите оба теста — «Грамматика» и «Лексика». Результат обновится автоматически. Ниже — ваши результаты тестов по неделям: темы с низким баллом стоит повторить.</p>' },
        { t: 'result' },
      ],
    },
    {
      id: 'roadmap', label: '🗺 До A2',
      blocks: [
        { t: 'label', text: 'Дорожная карта от A1 до A2' },
        { t: 'card', color: 'gold', title: 'Cambridge A2 Key (KET)', html: '<p><strong>A2 Key</strong> — первый международный экзамен Cambridge English. Четыре части: чтение и письмо, аудирование, говорение (с партнёром). Сдаётся в авторизованных центрах; для школьников есть версия <strong>A2 Key for Schools</strong>. Для взрослых также подходят <strong>Trinity GESE Grade 3–4</strong> и <strong>LanguageCert A2</strong>.</p>' },
        { t: 'roadmap', items: [
          { level: 'A1 ✓', title: 'Уже есть — пройденный курс', text: 'to be, have got, Present Simple и Continuous, Past Simple, going to / will, can / must / should, степени сравнения, около 1000 слов, бытовые диалоги.', time: 'Недели 1–12 завершены ✓' },
          { level: 'A2·1', title: 'Past Continuous', text: 'Фон и процесс в прошлом: I was walking home when it started to rain. While she was cooking, the phone rang.', time: '~2 недели' },
          { level: 'A2·2', title: 'Present Perfect', text: 'Опыт и результат: I have been to London. She has just finished. Have you ever…? — главная новая тема A2.', time: '~3 недели' },
          { level: 'A2·3', title: 'Первое условное', text: 'If it rains, we will stay at home. Реальные условия в будущем и when / as soon as.', time: '~2 недели' },
          { level: 'A2·4', title: 'Фразовые глаголы и предлоги', text: 'get up, look for, give up, turn on / off — 50 самых частых. Предлоги после глаголов и прилагательных: interested in, afraid of.', time: '~2 недели' },
          { level: 'A2·5', title: 'Чтение и аудирование', text: 'Адаптированные книги уровня A2 (Oxford Bookworms, Penguin Readers), подкасты BBC Learning English, сериалы с английскими субтитрами.', time: 'постоянно' },
          { level: 'A2 ✓', title: 'Экзамен A2 Key', text: 'Словарь ~1500–2000 слов. Понимание простых текстов, объявлений и разговоров. Простое письмо и разговор на знакомые темы.', time: '~3–4 месяца после A1' },
        ] },
        { t: 'card', color: 'blue', title: '📚 Ресурсы для A2', html: `<ul>
          <li><strong>English File Elementary / Pre-Intermediate</strong> (Oxford) — продолжение курса</li>
          <li><strong>Essential Grammar in Use</strong> (Murphy) — разделы A2</li>
          <li><strong>BBC Learning English</strong> — курс «English You Need», 6 Minute English</li>
          <li><strong>Cambridge English</strong> (cambridgeenglish.org) — бесплатные образцы экзамена A2 Key</li>
          <li><strong>italki / Preply</strong> — разговорная практика с преподавателями из Британии</li></ul>` },
        { t: 'card', color: 'green', title: 'Метод Фейнмана — дальше', html: '<p>Продолжайте главный цикл: изучи → объясни своими словами → найди пробел → упрости и повтори. Раз в две недели записывайте короткое видео, где объясняете новую тему по-английски, — и вы удивитесь, как быстро растёт уровень.</p>' },
      ],
    },
  ],
});
