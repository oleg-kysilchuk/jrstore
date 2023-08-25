import generateId from "./IDGenerator";

const clients = [
  {
    src: "/src/assets/eso-icons/card-big-icon1.png",
    title: "Для тих, хто лише приглядається",
    text: "Якщо ви плануєте вивчати якийсь езотеричний напрямок, ви зможете одразу дізнатися, як організувати свою майбутню роботу",
  },
  {
    src: "/src/assets/eso-icons/card-big-icon2.png",
    title: "Для початківців",
    text: "Якщо ви нещодавно закінчили езотеричне навчання, ви зможете зрозуміти, як наважитися почати практику",
  },
  {
    src: "/src/assets/eso-icons/card-big-icon3.png",
    title: "Для досвідчених практиків",
    text: "Якщо ви вже давно практикуєте, але хочете збільшити кількість клієнтів та додати роботі більшої структурності і організованості",
  },
];

const esoteric = [
  {
    src: "/src/assets/eso-icons/card-sm-icon1.png",
    title: "Подкаст-база",
    text: "Матеріали будуть виходити в аудіо-форматі, ви зможете прослухати їх в зручний для себе час",
  },
  {
    src: "/src/assets/eso-icons/card-sm-icon2.png",
    title: "Бонусні лекції",
    text: "Лекції від залучених до проєкту експертів",
  },
];

const experts = [
  {
    src: "/src/assets/eso-icons/card-sm-icon3.png",
    title: "SMM-спеціаліст",
    text: 'Лекція на тему "Ази аудиту власного профілю, на які цифри та метрики звертати увагу, де їх шукати. Таргет"',
  },
  {
    src: "/src/assets/eso-icons/card-sm-icon4.png",
    title: "Вчитель Цигун",
    text: 'Лекція на тему "Енергетичний захист в роботі"',
  },
];

const bonuses = [
  {
    src: "/src/assets/eso-icons/card-sm-icon5.png",
    title: "Файл для розпаковки особистості",
    text: 'Завдяки розпаковці ви зрозумієте, про що розповідати в блозі, що знімати і чим вам хочеться ділитися',
  },
  {
    src: "/src/assets/eso-icons/card-sm-icon6.png",
    title: "Запис вебінару 'Карма. Клієнти. Гроші'",
    text: 'Ви зрозумієте, як працює карма грошей, та які помилки ви несвідомо робите',
  },
];

const products = [
  {
    title: 'Лише слухати',
    text: 'Доступ лише до подкаст-бази',
    price: '3000',
    buttonText: 'Замовити'
  },
  {
    title: 'Слухати і Практикувати',
    text: 'Подкаст-база + МастерМайнди + Робота з кармічним партнером',
    price: '4800',
    buttonText: 'Продано!'
  }
]

const workplan = [
  {
    title: 'Блок "Професійний"',
    items: [],
  },
  {
    title: 'Блок "Кармічний"',
    items: [],
  },
  {
    title: 'Блок "Езотеричний"',
    items: [],
  },
  {
    title: 'Блок "Технічний"',
    items: [],
  },
  {
    title: 'Блок "Грошовий"',
    items: [],
  },
  {
    title: 'Блок "Особистісний"',
    items: [],
  }
]

export const clientsData = clients.map((item) => ({
  ...item,
  id: generateId(),
}));

export const esotericData = esoteric.map((item) => ({
  ...item,
  id: generateId(),
}))

export const expertsData = experts.map((item) => ({
  ...item,
  id: generateId(),
}));

export const bonusesData = bonuses.map((item) => ({
  ...item,
  id: generateId(),
}));

export const productsData = products.map((item) => ({
  ...item,
  id: generateId(),
}));
