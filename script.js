const SCENTS = {
  lavender: {
    id: 'lavender',
    name: 'Лавандовый сон',
    icon: '💜',
    illClass: 'scent-ill-lavender',
    desc: 'Расслабление, покой, сон',
    pills: ['Уютный', 'Цветочный'],
    mood: 'calm',
  },
  vanilla: {
    id: 'vanilla',
    name: 'Ванильный уют',
    icon: '🍦',
    illClass: 'scent-ill-vanilla',
    desc: 'Тепло, нежность, дом',
    pills: ['Сладкий', 'Тёплый'],
    mood: 'cozy',
  },
  firMandarin: {
    id: 'firMandarin',
    name: 'Зимний лес',
    icon: '🎄',
    illClass: 'scent-ill-fir',
    desc: 'Праздник, свежесть, зима',
    pills: ['Свежий', 'Хвойный'],
    mood: 'festive',
  },
  grapefruitVetiver: {
    id: 'grapefruitVetiver',
    name: 'Цитрусовый заряд',
    icon: '🍊',
    illClass: 'scent-ill-citrus',
    desc: 'Энергия, бодрость, позитив',
    pills: ['Свежий', 'Цитрусовый'],
    mood: 'energy',
  },
  bakedQuince: {
    id: 'bakedQuince',
    name: 'Печёная айва',
    icon: '🍯',
    illClass: 'scent-ill-quince',
    desc: 'Осень, дом, чай, тепло',
    pills: ['Пряный', 'Тёплый'],
    mood: 'cozy',
  },
  cedarRose: {
    id: 'cedarRose',
    name: 'Кедр и роза',
    icon: '🌹',
    illClass: 'scent-ill-rose',
    desc: 'Элегантность, женственность',
    pills: ['Цветочный', 'Древесный'],
    mood: 'elegant',
  },
  mango: {
    id: 'mango',
    name: 'Солнечное манго',
    icon: '🥭',
    illClass: 'scent-ill-mango',
    desc: 'Яркость, лето, настроение',
    pills: ['Фруктовый', 'Яркий'],
    mood: 'bright',
  },
  morningDew: {
    id: 'morningDew',
    name: 'Утренняя роса',
    icon: '💧',
    illClass: 'scent-ill-dew',
    desc: 'Чистота, свежесть, лёгкость',
    pills: ['Свежий', 'Лёгкий'],
    mood: 'fresh',
  },
};

const ALL_CLIENTS = [
  {
    name: 'Алина', avatar: '👩', tag: 'Усталая',
    request: 'Не могу уснуть уже третью ночь... Хочу что-то, что поможет расслабиться и погрузиться в сон.',
    correct: 'lavender',
    explanation: 'Лаванда — классический аромат для сна и глубокого расслабления.',
    feedbackHappy: 'Как же приятно... Уже чувствую, как напряжение уходит. Спасибо!',
    feedbackSad: 'Хм, это не совсем то... Мне нужно было что-то для сна.',
  },
  {
    name: 'Марина', avatar: '👩‍🦰', tag: 'Мечтательная',
    request: 'Сегодня так холодно за окном. Хочется домашнего тепла и уюта, как у бабушки на кухне.',
    correct: 'vanilla',
    explanation: 'Ваниль создаёт ощущение тепла, нежности и домашнего уюта.',
    feedbackHappy: 'Мmmm... Пахнет детством и печеньками. Идеально!',
    feedbackSad: 'Нет, мне хотелось именно тепла и уюта...',
  },
  {
    name: 'Дмитрий', avatar: '👨', tag: 'Праздничный',
    request: 'Скоро Новый год! Ищу аромат для праздничного настроения — свежий, но с зимней ноткой.',
    correct: 'firMandarin',
    explanation: 'Хвоя и мандарин — идеальное сочетание для праздника и зимней свежести.',
    feedbackHappy: 'Вау! Прямо как ёлка и мандарины под окном. Беру!',
    feedbackSad: 'Не то настроение... Мне нужен был праздничный зимний аромат.',
  },
  {
    name: 'Софья', avatar: '👩‍💼', tag: 'Деловая',
    request: 'Завтра важная презентация. Нужен аромат, который даст энергию и поможет собраться.',
    correct: 'grapefruitVetiver',
    explanation: 'Грейпфрут бодрит, а ветивер помогает сосредоточиться и обрести уверенность.',
    feedbackHappy: 'Чувствую прилив сил! Завтра я буду на высоте.',
    feedbackSad: 'Это слишком мягко... Мне нужна была энергия и собранность.',
  },
  {
    name: 'Бабушка Нина', avatar: '👵', tag: 'Осенняя',
    request: 'Осень на дворе, хочется согреться чаем у окна. Посоветуйте что-нибудь с осенним настроением.',
    correct: 'bakedQuince',
    explanation: 'Печёная айва с пряностями — аромат осени, домашнего чая и тепла.',
    feedbackHappy: 'Ох, доченька, это же сама осень в баночке! Благодарю!',
    feedbackSad: 'Нет-нет, мне хотелось осеннего тепла и пряностей...',
  },
  {
    name: 'Виктория', avatar: '💃', tag: 'Романтичная',
    request: 'Иду на свидание. Хочу аромат элегантный, женственный — чтобы чувствовать себя особенной.',
    correct: 'cedarRose',
    explanation: 'Белый кедр и роза — утончённый, женственный аромат для особых моментов.',
    feedbackHappy: 'Именно то, что нужно! Я буду сиять этим вечером.',
    feedbackSad: 'Слишком просто... Мне нужна была элегантность и женственность.',
  },
  {
    name: 'Кирилл', avatar: '🧑', tag: 'Солнечный',
    request: 'Только вернулся из отпуска, но уже скучаю по лету и солнцу. Есть что-то яркое и жизнерадостное?',
    correct: 'mango',
    explanation: 'Манго — яркий, солнечный аромат, который дарит летнее настроение.',
    feedbackHappy: 'Будто снова на пляже! Отличный выбор, спасибо!',
    feedbackSad: 'Не хватает яркости... Хотелось чего-то по-летнему.',
  },
  {
    name: 'Елена', avatar: '👩‍🦱', tag: 'Сонная',
    request: 'Утро понедельника, голова тяжёлая. Хочу что-то лёгкое и свежее, чтобы проснуться.',
    correct: 'morningDew',
    explanation: 'Утренняя роса — чистый, свежий аромат для лёгкого пробуждения.',
    feedbackHappy: 'Как глоток свежего воздуха! День начинается хорошо.',
    feedbackSad: 'Это слишком тяжело... Нужна была свежесть и лёгкость.',
  },
  {
    name: 'Полина', avatar: '🧘‍♀️', tag: 'Спокойная',
    request: 'После йоги хочу сохранить это спокойствие дома. Что-то умиротворяющее, пожалуйста.',
    correct: 'lavender',
    explanation: 'Лаванда идеально поддерживает состояние спокойствия и гармонии.',
    feedbackHappy: 'Намасте... Этот аромат продлит мой покой.',
    feedbackSad: 'Не чувствую того спокойствия, которое искала...',
  },
  {
    name: 'Артём', avatar: '👨‍🎨', tag: 'Творческий',
    request: 'Работаю над картиной, нужен аромат, который не отвлекает, но вдохновляет — свежий и чистый.',
    correct: 'morningDew',
    explanation: 'Утренняя роса даёт чистоту и лёгкость, не перегружая воображение.',
    feedbackHappy: 'Идеальный фон для творчества. Кисть сама летит!',
    feedbackSad: 'Слишком насыщенно... Нужна была чистота и лёгкость.',
  },
  {
    name: 'Ирина', avatar: '👩‍❤️‍👨', tag: 'Влюблённая',
    request: 'Готовлю романтический ужин дома. Хочу, чтобы в доме пахло тепло и нежно.',
    correct: 'vanilla',
    explanation: 'Ваниль создаёт атмосферу нежности и домашнего тепла — идеально для романтики.',
    feedbackHappy: 'Муж уже спрашивает, что я пеку! Аромат волшебный.',
    feedbackSad: 'Не совсем то настроение для романтического вечера...',
  },
  {
    name: 'Ольга', avatar: '👩‍🏫', tag: 'Собранная',
    request: 'Каникулы закончились, нужно взять себя в руки. Посоветуйте что-то бодрящее и собранное.',
    correct: 'grapefruitVetiver',
    explanation: 'Грейпфрут и ветивер помогают включиться в рабочий ритм с энергией.',
    feedbackHappy: 'Теперь точно готова к новому учебному году!',
    feedbackSad: 'Мало бодрости... Нужен был более энергичный аромат.',
  },
];

const CLIENTS_PER_DAY = 5;
const GAUGE_CIRC = 314.16;

const MOOD_LABELS = [
  { min: 0, label: 'Грустное' },
  { min: 25, label: 'Тревожное' },
  { min: 45, label: 'Спокойное' },
  { min: 65, label: 'Уютное' },
  { min: 85, label: 'Сказочное' },
];

const REP_TITLES = [
  { minSales: 0, level: 1, title: 'Начинающий парфюмер' },
  { minSales: 3, level: 2, title: 'Уютный ароматер' },
  { minSales: 8, level: 3, title: 'Мастер настроений' },
  { minSales: 15, level: 4, title: 'Волшебница ароматов' },
];

const state = {
  sales: 0,
  happyClients: 0,
  shopMood: 50,
  currentClientIndex: 0,
  dayClients: [],
  answered: false,
  energyTaskProgress: 0,
  streak: 0,
  bonusHearts: 3,
  totalSales: 0,
};

let screens = {};
let els = {};

function initDOM() {
  screens = {
    start: document.getElementById('screen-start'),
    game: document.getElementById('screen-game'),
    summary: document.getElementById('screen-summary'),
  };

  els = {
    statSales: document.getElementById('stat-sales'),
    statHappy: document.getElementById('stat-happy'),
    moodFill: document.getElementById('mood-fill'),
    gaugeArc: document.getElementById('gauge-arc'),
    gaugePercent: document.getElementById('gauge-percent'),
    clientNum: document.getElementById('client-num'),
    clientAvatar: document.getElementById('client-avatar'),
    clientName: document.getElementById('client-name'),
    clientTag: document.getElementById('client-tag'),
    clientRequest: document.getElementById('client-request'),
    scentsGrid: document.getElementById('scents-grid'),
    scentsPanel: document.getElementById('scents-panel'),
    resultPanel: document.getElementById('result-panel'),
    resultBadge: document.getElementById('result-badge'),
    resultExplanation: document.getElementById('result-explanation'),
    resultFeedback: document.getElementById('result-feedback'),
    taskFill: document.getElementById('task-fill'),
    taskCount: document.getElementById('task-count'),
    repLevel: document.getElementById('rep-level'),
    repTitle: document.getElementById('rep-title'),
    streakDays: document.getElementById('streak-days'),
    bonusHearts: document.getElementById('bonus-hearts'),
    summarySales: document.getElementById('summary-sales'),
    summaryHappy: document.getElementById('summary-happy'),
    summaryMood: document.getElementById('summary-mood'),
    summaryMessage: document.getElementById('summary-message'),
  };
}

function showScreen(name) {
  Object.values(screens).forEach((s) => s && s.classList.remove('active'));
  if (screens[name]) screens[name].classList.add('active');
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

function getReputation(totalSales) {
  let rep = REP_TITLES[0];
  for (const r of REP_TITLES) {
    if (totalSales >= r.minSales) rep = r;
  }
  return rep;
}

function getWrongScents(correctId) {
  const others = Object.keys(SCENTS).filter((id) => id !== correctId);
  return shuffle(others).slice(0, 3);
}

function pluralDays(n) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 19) return 'дней';
  if (mod10 === 1) return 'день';
  if (mod10 >= 2 && mod10 <= 4) return 'дня';
  return 'дней';
}

function updateStats() {
  if (els.statSales) els.statSales.textContent = state.sales;
  if (els.statHappy) els.statHappy.textContent = state.happyClients;
  if (els.moodFill) els.moodFill.style.width = `${state.shopMood}%`;

  if (els.gaugePercent) els.gaugePercent.textContent = `${state.shopMood}%`;
  if (els.gaugeArc) {
    els.gaugeArc.style.strokeDashoffset = String(GAUGE_CIRC * (1 - state.shopMood / 100));
  }

  if (els.taskCount) els.taskCount.textContent = `${state.energyTaskProgress}/3`;
  if (els.taskFill) els.taskFill.style.width = `${(state.energyTaskProgress / 3) * 100}%`;

  const rep = getReputation(state.totalSales);
  if (els.repLevel) els.repLevel.textContent = rep.level;
  if (els.repTitle) els.repTitle.textContent = rep.title;
  if (els.streakDays) els.streakDays.textContent = `${state.streak} ${pluralDays(state.streak)} подряд`;
  if (els.bonusHearts) els.bonusHearts.textContent = state.bonusHearts;
}

function resetDayState() {
  state.sales = 0;
  state.happyClients = 0;
  state.shopMood = 50;
  state.currentClientIndex = 0;
  state.dayClients = pickDayClients();
  state.answered = false;
  state.energyTaskProgress = 0;
  updateStats();
}

function renderClient() {
  const client = state.dayClients[state.currentClientIndex];
  if (!client) return;

  if (els.clientNum) els.clientNum.textContent = state.currentClientIndex + 1;
  if (els.clientAvatar) els.clientAvatar.textContent = client.avatar;
  if (els.clientName) els.clientName.textContent = client.name;
  if (els.clientTag) els.clientTag.textContent = client.tag;
  if (els.clientRequest) els.clientRequest.textContent = `"${client.request}"`;

  if (els.resultPanel) els.resultPanel.classList.add('hidden');
  if (els.scentsPanel) els.scentsPanel.style.display = 'block';
  state.answered = false;

  const wrongIds = getWrongScents(client.correct);
  const optionIds = shuffle([client.correct, ...wrongIds]);

  if (!els.scentsGrid) return;
  els.scentsGrid.innerHTML = '';

  optionIds.forEach((scentId) => {
    const scent = SCENTS[scentId];
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'scent-card';
    card.dataset.scentId = scentId;
    card.innerHTML = `
      <div class="scent-illustration ${scent.illClass}">
        <span>${scent.icon}</span>
      </div>
      <div class="scent-body">
        <span class="scent-name">${scent.name}</span>
        <span class="scent-desc">${scent.desc}</span>
        <div class="scent-pills">
          ${scent.pills.map((p) => `<span class="scent-pill">${p}</span>`).join('')}
        </div>
      </div>
    `;
    card.addEventListener('click', () => handleScentChoice(scentId, card));
    els.scentsGrid.appendChild(card);
  });
}

function handleScentChoice(chosenId, chosenCard) {
  if (state.answered) return;
  state.answered = true;

  const client = state.dayClients[state.currentClientIndex];
  const isCorrect = chosenId === client.correct;
  const cards = els.scentsGrid.querySelectorAll('.scent-card');

  cards.forEach((card) => {
    card.classList.add('disabled');
    const id = card.dataset.scentId;
    if (id === client.correct) card.classList.add('highlight-correct');
    if (card === chosenCard) {
      card.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
    }
  });

  if (isCorrect) {
    state.sales += 1;
    state.happyClients += 1;
    state.totalSales += 1;
    state.shopMood = Math.min(100, state.shopMood + 12);

    const chosenScent = SCENTS[chosenId];
    if (chosenScent.mood === 'energy' && state.energyTaskProgress < 3) {
      state.energyTaskProgress += 1;
    }

    if (els.resultBadge) {
      els.resultBadge.textContent = '✨ Идеальный выбор!';
      els.resultBadge.className = 'result-badge success';
    }
    if (els.resultFeedback) els.resultFeedback.textContent = client.feedbackHappy;
  } else {
    state.shopMood = Math.max(0, state.shopMood - 8);
    if (els.resultBadge) {
      els.resultBadge.textContent = '💭 Не совсем то...';
      els.resultBadge.className = 'result-badge fail';
    }
    if (els.resultFeedback) els.resultFeedback.textContent = client.feedbackSad;
  }

  if (els.resultExplanation) els.resultExplanation.textContent = client.explanation;
  updateStats();

  if (els.scentsPanel) els.scentsPanel.style.display = 'none';
  if (els.resultPanel) els.resultPanel.classList.remove('hidden');
}

function nextClient() {
  state.currentClientIndex += 1;
  if (state.currentClientIndex >= CLIENTS_PER_DAY) {
    showDaySummary();
  } else {
    renderClient();
  }
}

function showDaySummary() {
  if (state.happyClients >= 3) {
    state.streak += 1;
  } else {
    state.streak = 0;
  }

  if (els.summarySales) els.summarySales.textContent = state.sales;
  if (els.summaryHappy) els.summaryHappy.textContent = state.happyClients;
  if (els.summaryMood) els.summaryMood.textContent = getMoodLabel(state.shopMood);

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
  if (els.summaryMessage) els.summaryMessage.textContent = message;

  updateStats();
  showScreen('summary');
}

function bindEvents() {
  const btnStart = document.getElementById('btn-start');
  const btnNext = document.getElementById('btn-next');
  const btnRestart = document.getElementById('btn-restart');
  const btnSettings = document.getElementById('btn-settings');

  if (btnStart) {
    btnStart.addEventListener('click', () => {
      resetDayState();
      showScreen('game');
      renderClient();
    });
  }

  if (btnNext) btnNext.addEventListener('click', nextClient);

  if (btnRestart) {
    btnRestart.addEventListener('click', () => {
      resetDayState();
      showScreen('game');
      renderClient();
    });
  }

  if (btnSettings) {
    btnSettings.addEventListener('click', () => {
      alert('Настройки скоро появятся! А пока наслаждайтесь ароматами 🕯️');
    });
  }
}

function init() {
  initDOM();
  bindEvents();

  if (els.gaugeArc) {
    els.gaugeArc.style.strokeDasharray = String(GAUGE_CIRC);
  }

  updateStats();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
