/* ===== Данные ароматов ===== */
const SCENTS = {
  lavender: {
    id: 'lavender',
    name: 'Лаванда',
    icon: '💜',
    tags: 'расслабление, сон, спокойствие',
  },
  vanilla: {
    id: 'vanilla',
    name: 'Ваниль',
    icon: '🍦',
    tags: 'уют, тепло, нежность',
  },
  firMandarin: {
    id: 'firMandarin',
    name: 'Хвоя и мандарин',
    icon: '🎄',
    tags: 'праздник, Новый год, свежесть',
  },
  grapefruitVetiver: {
    id: 'grapefruitVetiver',
    name: 'Грейпфрут и ветивер',
    icon: '🍊',
    tags: 'энергия, собранность, уверенность',
  },
  bakedQuince: {
    id: 'bakedQuince',
    name: 'Печёная айва с пряностями',
    icon: '🍯',
    tags: 'осень, дом, чай, тепло',
  },
  cedarRose: {
    id: 'cedarRose',
    name: 'Белый кедр и роза',
    icon: '🌹',
    tags: 'элегантность, женственность',
  },
  mango: {
    id: 'mango',
    name: 'Манго',
    icon: '🥭',
    tags: 'яркость, лето, настроение',
  },
  morningDew: {
    id: 'morningDew',
    name: 'Утренняя роса',
    icon: '💧',
    tags: 'чистота, свежесть, лёгкость',
  },
};

/* ===== Клиенты (12 уникальных) ===== */
const ALL_CLIENTS = [
  {
    name: 'Алина',
    avatar: '👩',
    request: 'Не могу уснуть уже третью ночь... Хочу что-то, что поможет расслабиться и погрузиться в сон.',
    correct: 'lavender',
    explanation: 'Лаванда — классический аромат для сна и глубокого расслабления.',
    feedbackHappy: 'Как же приятно... Уже чувствую, как напряжение уходит. Спасибо!',
    feedbackSad: 'Хм, это не совсем то... Мне нужно было что-то для сна.',
  },
  {
    name: 'Марина',
    avatar: '👩‍🦰',
    request: 'Сегодня так холодно за окном. Хочется домашнего тепла и уюта, как у бабушки на кухне.',
    correct: 'vanilla',
    explanation: 'Ваниль создаёт ощущение тепла, нежности и домашнего уюта.',
    feedbackHappy: 'Мmmm... Пахнет детством и печеньками. Идеально!',
    feedbackSad: 'Нет, мне хотелось именно тепла и уюта...',
  },
  {
    name: 'Дмитрий',
    avatar: '👨',
    request: 'Скоро Новый год! Ищу аромат для праздничного настроения — свежий, но с зимней ноткой.',
    correct: 'firMandarin',
    explanation: 'Хвоя и мандарин — идеальное сочетание для праздника и зимней свежести.',
    feedbackHappy: 'Вау! Прямо как ёлка и мандарины под окном. Беру!',
    feedbackSad: 'Не то настроение... Мне нужен был праздничный зимний аромат.',
  },
  {
    name: 'Софья',
    avatar: '👩‍💼',
    request: 'Завтра важная презентация. Нужен аромат, который даст энергию и поможет собраться.',
    correct: 'grapefruitVetiver',
    explanation: 'Грейпфрут бодрит, а ветивер помогает сосредоточиться и обрести уверенность.',
    feedbackHappy: 'Чувствую прилив сил! Завтра я буду на высоте.',
    feedbackSad: 'Это слишком мягко... Мне нужна была энергия и собранность.',
  },
  {
    name: 'Бабушка Нина',
    avatar: '👵',
    request: 'Осень на дворе, хочется согреться чаем у окна. Посоветуйте что-нибудь с осенним настроением.',
    correct: 'bakedQuince',
    explanation: 'Печёная айва с пряностями — аромат осени, домашнего чая и тепла.',
    feedbackHappy: 'Ох, доченька, это же сама осень в баночке! Благодарю!',
    feedbackSad: 'Нет-нет, мне хотелось осеннего тепла и пряностей...',
  },
  {
    name: 'Виктория',
    avatar: '💃',
    request: 'Иду на свидание. Хочу аромат элегантный, женственный — чтобы чувствовать себя особенной.',
    correct: 'cedarRose',
    explanation: 'Белый кедр и роза — утончённый, женственный аромат для особых моментов.',
    feedbackHappy: 'Именно то, что нужно! Я буду сиять этим вечером.',
    feedbackSad: 'Слишком просто... Мне нужна была элегантность и женственность.',
  },
  {
    name: 'Кирилл',
    avatar: '🧑',
    request: 'Только вернулся из отпуска, но уже скучаю по лету и солнцу. Есть что-то яркое и жизнерадостное?',
    correct: 'mango',
    explanation: 'Манго — яркий, солнечный аромат, который дарит летнее настроение.',
    feedbackHappy: 'Будто снова на пляже! Отличный выбор, спасибо!',
    feedbackSad: 'Не хватает яркости... Хотелось чего-то по-летнему.',
  },
  {
    name: 'Елена',
    avatar: '👩‍🦱',
    request: 'Утро понедельника, голова тяжёлая. Хочу что-то лёгкое и свежее, чтобы проснуться.',
    correct: 'morningDew',
    explanation: 'Утренняя роса — чистый, свежий аромат для лёгкого пробуждения.',
    feedbackHappy: 'Как глоток свежего воздуха! День начинается хорошо.',
    feedbackSad: 'Это слишком тяжело... Нужна была свежесть и лёгкость.',
  },
  {
    name: 'Полина',
    avatar: '🧘‍♀️',
    request: 'После йоги хочу сохранить это спокойствие дома. Что-то умиротворяющее, пожалуйста.',
    correct: 'lavender',
    explanation: 'Лаванда идеально поддерживает состояние спокойствия и гармонии.',
    feedbackHappy: 'Намасте... Этот аромат продлит мой покой.',
    feedbackSad: 'Не чувствую того спокойствия, которое искала...',
  },
  {
    name: 'Артём',
    avatar: '👨‍🎨',
    request: 'Работаю над картиной, нужен аромат, который не отвлекает, но вдохновляет — свежий и чистый.',
    correct: 'morningDew',
    explanation: 'Утренняя роса даёт чистоту и лёгкость, не перегружая воображение.',
    feedbackHappy: 'Идеальный фон для творчества. Кисть сама летит!',
    feedbackSad: 'Слишком насыщенно... Нужна была чистота и лёгкость.',
  },
  {
    name: 'Ирина',
    avatar: '👩‍❤️‍👨',
    request: 'Готовлю романтический ужин дома. Хочу, чтобы в доме пахло тепло и нежно.',
    correct: 'vanilla',
    explanation: 'Ваниль создаёт атмосферу нежности и домашнего тепла — идеально для романтики.',
    feedbackHappy: 'Муж уже спрашивает, что я пеку! Аромат волшебный.',
    feedbackSad: 'Не совсем то настроение для романтического вечера...',
  },
  {
    name: 'Ольга',
    avatar: '👩‍🏫',
    request: 'Каникулы закончились, нужно взять себя в руки. Посоветуйте что-то бодрящее и собранное.',
    correct: 'grapefruitVetiver',
    explanation: 'Грейпфрут и ветивер помогают включиться в рабочий ритм с энергией.',
    feedbackHappy: 'Теперь точно готова к новому учебному году!',
    feedbackSad: 'Мало бодрости... Нужен был более энергичный аромат.',
  },
];

const CLIENTS_PER_DAY = 5;
const MOOD_LABELS = [
  { min: 0, label: 'Грустное' },
  { min: 25, label: 'Тревожное' },
  { min: 45, label: 'Спокойное' },
  { min: 65, label: 'Уютное' },
  { min: 85, label: 'Сказочное' },
];

/* ===== Состояние игры ===== */
const state = {
  sales: 0,
  happyClients: 0,
  shopMood: 50,
  currentClientIndex: 0,
  dayClients: [],
  answered: false,
};

/* ===== DOM ===== */
const screens = {
  start: document.getElementById('screen-start'),
  game: document.getElementById('screen-game'),
  summary: document.getElementById('screen-summary'),
};

const els = {
  statSales: document.getElementById('stat-sales'),
  statHappy: document.getElementById('stat-happy'),
  moodFill: document.getElementById('mood-fill'),
  clientNum: document.getElementById('client-num'),
  clientAvatar: document.getElementById('client-avatar'),
  clientName: document.getElementById('client-name'),
  clientRequest: document.getElementById('client-request'),
  scentsGrid: document.getElementById('scents-grid'),
  scentsPanel: document.getElementById('scents-panel'),
  resultPanel: document.getElementById('result-panel'),
  resultBadge: document.getElementById('result-badge'),
  resultExplanation: document.getElementById('result-explanation'),
  resultFeedback: document.getElementById('result-feedback'),
  summarySales: document.getElementById('summary-sales'),
  summaryHappy: document.getElementById('summary-happy'),
  summaryMood: document.getElementById('summary-mood'),
  summaryMessage: document.getElementById('summary-message'),
};

/* ===== Утилиты ===== */
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickDayClients() {
  return shuffle(ALL_CLIENTS).slice(0, CLIENTS_PER_DAY);
}

function getMoodLabel(mood) {
  let label = MOOD_LABELS[0].label;
  for (const entry of MOOD_LABELS) {
    if (mood >= entry.min) label = entry.label;
  }
  return label;
}

function getWrongScents(correctId) {
  const others = Object.keys(SCENTS).filter((id) => id !== correctId);
  return shuffle(others).slice(0, 3);
}

function updateStats() {
  els.statSales.textContent = state.sales;
  els.statHappy.textContent = state.happyClients;
  els.moodFill.style.width = `${state.shopMood}%`;
}

function resetState() {
  state.sales = 0;
  state.happyClients = 0;
  state.shopMood = 50;
  state.currentClientIndex = 0;
  state.dayClients = pickDayClients();
  state.answered = false;
  updateStats();
}

/* ===== Отрисовка клиента ===== */
function renderClient() {
  const client = state.dayClients[state.currentClientIndex];
  els.clientNum.textContent = state.currentClientIndex + 1;
  els.clientAvatar.textContent = client.avatar;
  els.clientName.textContent = client.name;
  els.clientRequest.textContent = `"${client.request}"`;

  els.resultPanel.classList.add('hidden');
  els.scentsPanel.style.display = 'block';
  state.answered = false;

  const wrongIds = getWrongScents(client.correct);
  const optionIds = shuffle([client.correct, ...wrongIds]);

  els.scentsGrid.innerHTML = '';
  optionIds.forEach((scentId) => {
    const scent = SCENTS[scentId];
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'scent-card';
    card.dataset.scentId = scentId;
    card.innerHTML = `
      <span class="scent-icon">${scent.icon}</span>
      <span class="scent-name">${scent.name}</span>
      <span class="scent-tags">${scent.tags}</span>
    `;
    card.addEventListener('click', () => handleScentChoice(scentId, card));
    els.scentsGrid.appendChild(card);
  });
}

/* ===== Выбор аромата ===== */
function handleScentChoice(chosenId, chosenCard) {
  if (state.answered) return;
  state.answered = true;

  const client = state.dayClients[state.currentClientIndex];
  const isCorrect = chosenId === client.correct;
  const cards = els.scentsGrid.querySelectorAll('.scent-card');

  cards.forEach((card) => {
    card.classList.add('disabled');
    const id = card.dataset.scentId;
    if (id === client.correct) {
      card.classList.add('highlight-correct');
    }
    if (card === chosenCard) {
      card.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
    }
  });

  if (isCorrect) {
    state.sales += 1;
    state.happyClients += 1;
    state.shopMood = Math.min(100, state.shopMood + 12);
    els.resultBadge.textContent = '✨ Идеальный выбор!';
    els.resultBadge.className = 'result-badge success';
    els.resultFeedback.textContent = client.feedbackHappy;
  } else {
    state.shopMood = Math.max(0, state.shopMood - 8);
    els.resultBadge.textContent = '💭 Не совсем то...';
    els.resultBadge.className = 'result-badge fail';
    els.resultFeedback.textContent = client.feedbackSad;
  }

  els.resultExplanation.textContent = client.explanation;
  updateStats();

  els.scentsPanel.style.display = 'none';
  els.resultPanel.classList.remove('hidden');
}

/* ===== Следующий клиент / итог дня ===== */
function nextClient() {
  state.currentClientIndex += 1;

  if (state.currentClientIndex >= CLIENTS_PER_DAY) {
    showDaySummary();
  } else {
    renderClient();
  }
}

function showDaySummary() {
  els.summarySales.textContent = state.sales;
  els.summaryHappy.textContent = state.happyClients;
  els.summaryMood.textContent = getMoodLabel(state.shopMood);

  let message;
  if (state.happyClients === CLIENTS_PER_DAY) {
    message = 'Превосходный день! Каждый гость ушёл с улыбкой. Лавка сияет от счастья.';
  } else if (state.happyClients >= 3) {
    message = 'Хороший день! Большинство гостей довольны. Лавка наполнена теплом.';
  } else if (state.happyClients >= 1) {
    message = 'Неплохо, но есть над чем поработать. Завтра — новый шанс угадать настроение каждого гостя.';
  } else {
    message = 'Сегодня было непросто... Отдохните, заварите чай с лавандой и начните заново.';
  }
  els.summaryMessage.textContent = message;

  showScreen('summary');
}

/* ===== События ===== */
document.getElementById('btn-start').addEventListener('click', () => {
  resetState();
  showScreen('game');
  renderClient();
});

document.getElementById('btn-next').addEventListener('click', nextClient);

document.getElementById('btn-restart').addEventListener('click', () => {
  resetState();
  showScreen('game');
  renderClient();
});
