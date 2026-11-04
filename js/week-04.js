// A1 · Неделя 4 — Еда · Покупки
COURSE.weeks.push({
  n: 4,
  title: 'Еда · Покупки',
  tabs: [
    {
      id: 'plan', label: '📅 План',
      blocks: [
        { t: 'plan',
          goal: 'Заказать еду в кафе, купить продукты, спросить цену и понять ответ в фунтах. Различать исчисляемые и неисчисляемые существительные, правильно ставить <em>a / an / some / any</em>.',
          days: [
            { title: 'Еда и напитки', tasks: ['Выучить 24 слова о еде', 'Разделить их на исчисляемые и неисчисляемые', 'Фейнман: почему нельзя сказать «two breads»'] },
            { title: 'a / an / some / any', tasks: ['a apple или an apple? — правило звука', 'some в утверждении, any в вопросе и отрицании', '10 предложений о холодильнике'] },
            { title: 'Much / many / a lot of', tasks: ['How much water? How many eggs?', 'Упаковки: a bottle of, a packet of…', 'Составить список покупок'] },
            { title: 'В кафе', tasks: ['I’d like…, Can I have…?', 'Eat in or take away?', 'Разыграть заказ — вслух'] },
            { title: 'Деньги и цены', tasks: ['£1.50 = one pound fifty', 'How much is it? How much are they?', 'Назвать 10 цен вслух'] },
            { title: 'Диалог и тест', tasks: ['Диалог в кафе — обе роли', 'Пройти тест недели', 'Посмотреть меню британского кафе онлайн'] },
            { title: 'Фейнман-урок недели', tasks: ['Объясните вслух разницу some / any', 'Закажите воображаемый обед — 1 минута', 'Пробелы → план на неделю 5'] },
          ] },
      ],
    },
    {
      id: 'food', label: '🍞 Еда',
      blocks: [
        { t: 'label', text: 'Food and drink — нажмите для произношения' },
        { t: 'grid', items: [
          { icon: '🍞', en: 'bread', ipa: '[bred]', ru: 'хлеб', ex: 'неисч.: a loaf of bread' },
          { icon: '🧈', en: 'butter', ipa: '[ˈbʌtə]', ru: 'сливочное масло' },
          { icon: '🧀', en: 'cheese', ipa: '[tʃiːz]', ru: 'сыр' },
          { icon: '🥚', en: 'egg', ipa: '[eɡ]', ru: 'яйцо', ex: 'an egg, two eggs' },
          { icon: '🥛', en: 'milk', ipa: '[mɪlk]', ru: 'молоко' },
          { icon: '☕', en: 'coffee', ipa: '[ˈkɒfi]', ru: 'кофе' },
          { icon: '🍵', en: 'tea', ipa: '[tiː]', ru: 'чай', ex: 'tea with milk — по-британски' },
          { icon: '💧', en: 'water', ipa: '[ˈwɔːtə]', ru: 'вода', ex: 'still / sparkling' },
          { icon: '🧃', en: 'juice', ipa: '[dʒuːs]', ru: 'сок' },
          { icon: '🍎', en: 'apple', ipa: '[ˈæpl]', ru: 'яблоко' },
          { icon: '🍌', en: 'banana', ipa: '[bəˈnɑːnə]', ru: 'банан' },
          { icon: '🍊', en: 'orange', ipa: '[ˈɒrɪndʒ]', ru: 'апельсин' },
          { icon: '🥔', en: 'potato', ipa: '[pəˈteɪtəʊ]', ru: 'картофель', ex: 'мн. ч. potatoes' },
          { icon: '🍅', en: 'tomato', ipa: '[təˈmɑːtəʊ]', ru: 'помидор', ex: 'в США [təˈmeɪtoʊ]' },
          { icon: '🥕', en: 'carrot', ipa: '[ˈkærət]', ru: 'морковь' },
          { icon: '🧅', en: 'onion', ipa: '[ˈʌnjən]', ru: 'лук' },
          { icon: '🍗', en: 'chicken', ipa: '[ˈtʃɪkɪn]', ru: 'курица' },
          { icon: '🥩', en: 'meat', ipa: '[miːt]', ru: 'мясо', ex: 'beef, pork, lamb' },
          { icon: '🐟', en: 'fish', ipa: '[fɪʃ]', ru: 'рыба', ex: 'fish and chips' },
          { icon: '🍚', en: 'rice', ipa: '[raɪs]', ru: 'рис' },
          { icon: '🍝', en: 'pasta', ipa: '[ˈpæstə]', ru: 'макароны' },
          { icon: '🍟', en: 'chips', ipa: '[tʃɪps]', ru: 'картофель фри (UK)', ex: 'в США — fries' },
          { icon: '🥔', en: 'crisps', ipa: '[krɪsps]', ru: 'чипсы (UK)', ex: 'в США — chips' },
          { icon: '🍰', en: 'cake', ipa: '[keɪk]', ru: 'торт, пирожное' },
          { icon: '🍫', en: 'chocolate', ipa: '[ˈtʃɒklət]', ru: 'шоколад' },
          { icon: '🧂', en: 'salt / sugar', ipa: '[sɔːlt] / [ˈʃʊɡə]', ru: 'соль / сахар' },
        ] },
        { t: 'card', color: 'green', title: 'Британская еда', html: `<ul>
          <li><strong>Full English breakfast</strong> — яичница, бекон, сосиски, фасоль в томате, тост, грибы</li>
          <li><strong>Fish and chips</strong> — рыба в кляре с картофелем фри, классика навынос</li>
          <li><strong>Sunday roast</strong> — воскресное жаркое с картофелем и овощами</li>
          <li><strong>Afternoon tea</strong> — чай с сэндвичами, сконами и пирожными</li>
          <li><strong>A cuppa</strong> — разговорное «чашка чая»: <span class="en">Fancy a cuppa?</span></li></ul>` },
        { t: 'label', text: 'Приёмы пищи', top: true },
        { t: 'grid', items: [
          { en: 'breakfast', ipa: '[ˈbrekfəst]', ru: 'завтрак' },
          { en: 'lunch', ipa: '[lʌntʃ]', ru: 'обед (днём)' },
          { en: 'dinner', ipa: '[ˈdɪnə]', ru: 'ужин', ex: 'на севере Англии dinner — обед, tea — ужин' },
          { en: 'a snack', ipa: '[snæk]', ru: 'перекус' },
        ] },
      ],
    },
    {
      id: 'countable', label: '🔢 a / some / any',
      blocks: [
        { t: 'label', text: 'Исчисляемые и неисчисляемые' },
        { t: 'compare', cols: [
          { title: 'Исчисляемые — можно посчитать', items: ['<span class="en">an apple — two apples</span>', '<span class="en">an egg — six eggs</span>', '<span class="en">a sandwich — three sandwiches</span>', 'Есть мн. ч., с ними <strong>a / an</strong> и <strong>many</strong>'] },
          { title: 'Неисчисляемые — масса, вещество', cls: 'gold', items: ['<span class="en">water, milk, bread</span>', '<span class="en">rice, cheese, money</span>', '<span class="en">information, advice</span>', 'Нет мн. ч., нет <strong>a / an</strong>, с ними <strong>much</strong>'] },
        ] },
        { t: 'card', color: 'red', title: 'Ловушки для русскоязычных', html: '<p>Неисчисляемые в английском, но исчисляемые в русском: <span class="en">bread</span> (не «a bread» → <span class="en">a loaf of bread</span>), <span class="en">advice</span> (совет → <span class="en">a piece of advice</span>), <span class="en">information</span>, <span class="en">news</span>, <span class="en">furniture</span> (мебель), <span class="en">money</span> (деньги — с глаголом в ед. ч.: <span class="en">Money is…</span>).</p>' },
        { t: 'label', text: 'a или an?', top: true },
        { t: 'card', color: 'blue', title: 'Решает звук, а не буква', html: '<p><span class="en">an</span> — перед гласным <strong>звуком</strong>: <span class="en">an apple, an egg, an hour</span> (h не читается). <span class="en">a</span> — перед согласным звуком: <span class="en">a banana, a university</span> (звучит [juː]), <span class="en">a European city</span>.</p>' },
        { t: 'label', text: 'some и any', top: true },
        { t: 'table', head: ['', 'Исчисляемые (мн. ч.)', 'Неисчисляемые'], rows: [
          ['Утверждение', '<span class="en">There are some eggs.</span>', '<span class="en">There is some milk.</span>'],
          ['Отрицание', '<span class="en">There aren’t any eggs.</span>', '<span class="en">There isn’t any milk.</span>'],
          ['Вопрос', '<span class="en">Are there any eggs?</span>', '<span class="en">Is there any milk?</span>'],
          ['Просьба, предложение', '<span class="en">Can I have some grapes?</span>', '<span class="en">Would you like some tea?</span>'],
        ] },
        { t: 'card', color: 'gold', title: 'Фейнман: some = «немного, сколько-то»', html: '<p><span class="en">some</span> — «какое-то количество», когда оно есть. <span class="en">any</span> — «хоть сколько-нибудь», когда мы не знаем или его нет. В просьбах и предложениях — <span class="en">some</span>, потому что мы ждём ответа «да».</p>' },
        { t: 'label', text: 'Сколько? Much, many, a lot of', top: true },
        { t: 'compare', cols: [
          { title: 'many — исчисляемые', items: ['<span class="en">How many apples?</span>', '<span class="en">I haven’t got many friends here.</span>'] },
          { title: 'much — неисчисляемые', cls: 'gold', items: ['<span class="en">How much sugar?</span>', '<span class="en">I don’t drink much coffee.</span>'] },
        ] },
        { t: 'card', color: 'green', title: 'a lot of — универсально', html: '<p>В утверждениях естественнее <span class="en">a lot of</span> — с любыми существительными: <span class="en">She eats a lot of fruit.</span> <span class="en">They’ve got a lot of children.</span></p>' },
        { t: 'label', text: 'Упаковки и количество', top: true },
        { t: 'grid', items: [
          { en: 'a bottle of water', ru: 'бутылка воды' },
          { en: 'a carton of milk', ru: 'пакет молока' },
          { en: 'a packet of biscuits', ru: 'пачка печенья' },
          { en: 'a tin of beans', ru: 'банка фасоли', ex: 'в США — a can' },
          { en: 'a loaf of bread', ru: 'буханка хлеба' },
          { en: 'a slice of cake', ru: 'кусок торта' },
          { en: 'a kilo of potatoes', ru: 'килограмм картофеля' },
          { en: 'a cup of tea', ru: 'чашка чая' },
        ] },
      ],
    },
    {
      id: 'cafe', label: '☕ В кафе',
      blocks: [
        { t: 'label', text: 'Как заказать' },
        { t: 'grid', items: [
          { en: "I'd like a coffee, please.", ru: 'Я бы хотел(а) кофе.', ex: "I'd like = I would like — вежливо" },
          { en: 'Can I have a tea, please?', ru: 'Можно мне чай?' },
          { en: "What would you like?", ru: 'Что желаете?', ex: 'вопрос официанта' },
          { en: 'Anything else?', ru: 'Что-нибудь ещё?' },
          { en: "That's all, thanks.", ru: 'Это всё, спасибо.' },
          { en: 'Eat in or take away?', ru: 'Здесь или с собой?', ex: 'в США — for here or to go' },
          { en: 'Can I pay by card?', ru: 'Можно оплатить картой?', ex: 'in cash — наличными' },
          { en: 'Could we have the bill, please?', ru: 'Можно счёт?', ex: 'в США — the check' },
          { en: "I'm vegetarian.", ru: 'Я вегетарианец.' },
          { en: "I'm allergic to nuts.", ru: 'У меня аллергия на орехи.' },
        ] },
        { t: 'card', color: 'red', title: '«Дайте мне…» звучит грубо', html: '<p>Русское «Дайте кофе» в прямом переводе — <em>Give me a coffee</em> — звучит как приказ. Британцы смягчают просьбу: <span class="en">Could I have…?</span>, <span class="en">I’d like…, please</span>, <span class="en">Can I get…?</span> И почти всегда добавляют <span class="en">please</span> и <span class="en">thank you</span>.</p>' },
        { t: 'card', color: 'gold', title: 'Would you like…? и Do you like…?', html: '<p><span class="en">Would you like a biscuit?</span> — Хотите печенье? (предложение сейчас) — <span class="en">Yes, please / No, thank you.</span><br><span class="en">Do you like biscuits?</span> — Вы любите печенье? (вообще) — <span class="en">Yes, I do / No, I don’t.</span></p>' },
      ],
    },
    {
      id: 'prices', label: '💷 Цены',
      blocks: [
        { t: 'label', text: 'Британские деньги' },
        { t: 'card', color: 'blue', title: 'Pounds and pence', html: '<p>£1 = 100p. <span class="en">pound</span> [paʊnd] — фунт, <span class="en">penny</span> — пенни (мн. ч. <span class="en">pence</span>, в речи часто просто «p» [piː]). Цену читают без слов pound и pence в середине: £3.50 — <span class="en">three pounds fifty</span> или просто <span class="en">three fifty</span>.</p>' },
        { t: 'grid', items: [
          { en: '£1', say: 'one pound', ru: 'one pound' },
          { en: '£2.99', say: 'two pounds ninety-nine', ru: 'two pounds ninety-nine' },
          { en: '75p', say: 'seventy-five p', ru: 'seventy-five p / pence' },
          { en: '£4.50', say: 'four fifty', ru: 'four fifty' },
          { en: '£12', say: 'twelve pounds', ru: 'twelve pounds' },
          { en: '£150', say: 'a hundred and fifty pounds', ru: 'a hundred and fifty pounds' },
        ] },
        { t: 'label', text: 'Как спросить цену', top: true },
        { t: 'compare', cols: [
          { title: 'Один предмет', items: ['<span class="en">How much is this?</span>', '<span class="en">How much is the cake?</span>', '<span class="en">It’s two pounds.</span>'] },
          { title: 'Несколько', cls: 'gold', items: ['<span class="en">How much are these?</span>', '<span class="en">How much are the apples?</span>', '<span class="en">They’re 80p each.</span>'] },
        ] },
        { t: 'label', text: 'В магазине', top: true },
        { t: 'grid', items: [
          { en: "I'm just looking, thanks.", ru: 'Я просто смотрю, спасибо.' },
          { en: 'Have you got any bread?', ru: 'У вас есть хлеб?' },
          { en: 'Where can I find the milk?', ru: 'Где найти молоко?' },
          { en: 'Do you need a bag?', ru: 'Вам нужен пакет?', ex: 'пакеты в UK платные' },
          { en: "Here's your change.", ru: 'Вот ваша сдача.' },
          { en: 'Can I have a receipt?', ru: 'Можно чек?' },
        ] },
        { t: 'card', color: 'green', title: 'Магазины', html: '<p><span class="en">supermarket</span> — супермаркет · <span class="en">corner shop</span> — магазинчик у дома · <span class="en">bakery</span> — пекарня · <span class="en">butcher’s</span> — мясная лавка · <span class="en">market</span> — рынок · <span class="en">chemist’s</span> — аптека (в США — drugstore)</p>' },
      ],
    },
    {
      id: 'dialogue', label: '💬 Диалог',
      blocks: [
        { t: 'label', text: 'Диалог — в кафе на вокзале' },
        { t: 'card', color: 'gold', title: 'Как работать', html: '<p>Нажмите на реплику — услышите произношение. Разыграйте роль покупателя без текста. Обратите внимание на <em>I’d like</em>, <em>some</em> и <em>How much</em>.</p>' },
        { t: 'dialogue', lines: [
          { right: true, av: '🧑‍🍳', en: 'Hi there! What would you like?', ru: 'Здравствуйте! Что желаете?' },
          { en: "Hello. I'd like a cup of tea, please.", ru: 'Здравствуйте. Чашку чая, пожалуйста.' },
          { right: true, av: '🧑‍🍳', en: 'With milk?', ru: 'С молоком?' },
          { en: 'Yes, please. And no sugar.', ru: 'Да, пожалуйста. И без сахара.' },
          { right: true, av: '🧑‍🍳', en: 'Anything to eat?', ru: 'Что-нибудь поесть?' },
          { en: 'Have you got any sandwiches?', ru: 'У вас есть сэндвичи?' },
          { right: true, av: '🧑‍🍳', en: "Yes, we've got cheese and tomato, chicken, or egg.", ru: 'Да, есть с сыром и помидором, с курицей или с яйцом.' },
          { en: "A chicken sandwich, please. How much is that?", ru: 'Сэндвич с курицей, пожалуйста. Сколько с меня?' },
          { right: true, av: '🧑‍🍳', en: "That's six pounds twenty. Eat in or take away?", ru: 'Шесть фунтов двадцать. Здесь или с собой?' },
          { en: 'Take away, please. Can I pay by card?', ru: 'С собой, пожалуйста. Можно картой?' },
          { right: true, av: '🧑‍🍳', en: "Of course. Just tap here. Here's your receipt.", ru: 'Конечно. Просто приложите сюда. Вот ваш чек.' },
          { en: 'Thanks a lot. Bye!', ru: 'Большое спасибо. До свидания!' },
        ] },
        { t: 'card', color: 'blue', title: 'Разбор диалога', html: `<ul>
          <li><strong>Hi there!</strong> — дружеское приветствие продавца</li>
          <li><strong>Have you got any sandwiches?</strong> — вопрос, поэтому <em>any</em></li>
          <li><strong>How much is that?</strong> — «сколько с меня?», про всю покупку</li>
          <li><strong>Just tap here</strong> — бесконтактная оплата: <em>tap</em> — приложить</li></ul>` },
      ],
    },
    {
      id: 'quiz', label: '🎯 Тест',
      blocks: [
        { t: 'label', text: 'Тест — Неделя 4' },
        { t: 'quiz', items: [
          { q: 'I’d like ___ apple, please.', opts: ['an', 'a', 'some', 'any'], ans: 0, exp: '<em>apple</em> начинается с гласного звука → <em>an apple</em>.' },
          { q: 'Is there ___ milk in the fridge?', opts: ['some', 'many', 'a', 'any'], ans: 3, exp: 'В вопросе — <em>any</em>: Is there any milk?' },
          { q: 'There are ___ eggs on the table.', opts: ['some', 'any', 'a', 'much'], ans: 0, exp: 'В утверждении — <em>some</em>.' },
          { q: 'How ___ sugar do you want?', opts: ['many', 'lot', 'much', 'any'], ans: 2, exp: '<em>sugar</em> — неисчисляемое → <em>How much</em>.' },
          { q: 'How ___ bananas have we got?', opts: ['much', 'some', 'lot', 'many'], ans: 3, exp: '<em>bananas</em> — исчисляемое мн. ч. → <em>How many</em>.' },
          { q: 'Какое слово неисчисляемое?', opts: ['egg', 'bread', 'sandwich', 'apple'], ans: 1, exp: '<em>bread</em> неисчисляемое: <em>some bread</em>, <em>a loaf of bread</em>.' },
          { q: 'Вежливо заказать: …', opts: ["I'd like a coffee, please.", 'Give me a coffee.', 'I want coffee now.', 'Coffee!'], ans: 0, exp: '<em>I’d like… please</em> — вежливая форма.' },
          { q: '___ are these shoes?', opts: ['What much', 'How many', 'How much', 'How price'], ans: 2, exp: 'Цена — <em>How much</em>, с мн. ч. — <em>are</em>: How much are these?' },
          { q: '£2.40 читается…', opts: ['two pound forty', 'two and forty', 'two forty pounds', 'two pounds forty'], ans: 3, exp: '<em>two pounds forty</em> или коротко <em>two forty</em>.' },
          { q: 'Would you like some cake? — …', opts: ['Yes, I do.', 'Yes, please.', 'Yes, I like.', 'Yes, I would like.'], ans: 1, exp: 'На предложение отвечают <em>Yes, please</em> / <em>No, thank you</em>.' },
        ] },
      ],
    },
    {
      id: 'feynman', label: '✍️ Фейнман',
      blocks: [
        { t: 'label', text: 'Дневник Фейнмана — Неделя 4' },
        { t: 'journal', items: [
          {
            label: 'Задание 1 · Объяснение концепта',
            prompt: 'Объясните ребёнку разницу между исчисляемыми и неисчисляемыми существительными. Почему <span class="en">two breads</span> — ошибка, а <span class="en">two loaves of bread</span> — нет?',
            placeholder: 'Исчисляемые — это то, что…, а неисчисляемые…',
            keys: ['посчит', 'счит', 'масс', 'вещест', 'штук', 'порц', 'упаков', 'loaf'],
            ok: '✓ Хорошо! Неисчисляемое — это «масса», которую нельзя пересчитать штуками: вода, хлеб, деньги. Чтобы посчитать, нужна «упаковка»: <em>a glass of water, a loaf of bread, a piece of advice</em>.<br><br>Пробел для углубления: почему <em>money</em> неисчисляемое, а <em>coins</em> и <em>pounds</em> — исчисляемые?',
            tip: '💡 Подсказка: попробуйте посчитать «одна вода, две воды». Получается, только если добавить «бутылка» или «стакан». Это и есть признак неисчисляемого.',
          },
          {
            label: 'Задание 2 · Производство языка',
            prompt: 'Напишите, что есть у вас дома из еды и чего нет (6–8 предложений), а потом диалог заказа в кафе (6 реплик). Используйте <em>some, any, a lot of, How much</em>.',
            placeholder: "In my fridge there is some milk, but there aren't any eggs…",
            ok: '✓ Отлично! Проверьте:<br><br>• <em>some</em> в утверждении, <em>any</em> в вопросе и отрицании<br>• Нет <em>a</em> перед неисчисляемыми: <em>some bread</em>, не <em>a bread</em><br>• <em>There is</em> + неисчисляемое, <em>There are</em> + мн. ч.<br>• В кафе: <em>I’d like…, please</em><br><br>Прочитайте диалог вслух по ролям.',
          },
          {
            label: 'Задание 3 · Пробелы недели',
            prompt: 'Что было труднее всего: a / an, some / any, much / many, цены? Запишите конкретно.',
            placeholder: 'Я путаю…',
            ok: '✓ Хорошо. Мини-план для пробелов:<br><br>• <strong>a / an:</strong> произносите слово вслух — слышите гласный звук? тогда <em>an</em><br>• <strong>some / any:</strong> «есть — some, нет или не знаю — any»<br>• <strong>much / many:</strong> можно посчитать штуками? тогда <em>many</em><br>• <strong>Цены:</strong> читайте вслух ценники в любом магазине по-английски',
          },
        ] },
      ],
    },
  ],
});
