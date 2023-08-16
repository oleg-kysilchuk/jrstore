import generateId from "./IDGenerator";

const listItems = [
  {
    text: "Набуття стану ясності та розслаблення через розуміння себе та тих процесів, що відбуваються в житті",
  },
  {
    text: "Усвідомлення того, куди рухатися далі, та віра, що все вийде",
  },
  {
    text: "Збільшення доходу в кілька разів, покращення якості життя",
  },
  {
    text: "Поліпшення відносин із партнером, перезавантаження сфери відносин",
  },
  {
    text: "Прийняття себе, налагодження контакту з собою, усвідомлення своєї сили та «тіні»",
  },
  {
    text: "Набуття улюбленої справи, нової професії",
  },
  {
    text: "Поліпшення стосунків з батьками, відпускання образ",
  },
  {
    text: "Набуття впевненості та зцілення самооцінки",
  },
];

const guides = [
  {
    title: 'Ґайд "Значення точок Матриці"',
    price: 300,
  },
  {
    title: 'Методичка "22 Енергії"',
    price: 600,
  },
  {
    title: 'Канал "Матриціологія"',
    price: 1000,
  },
];

const corrections = [
  {
    title: "Аромакорекція 3 енергії",
    description: "Мікс 3: Імператриця",
    price: 280,
  },
  {
    title: "Аромакорекція 6 енергії",
    description: "Мікс 6: Любов",
    price: 300,
  },
  {
    title: "Аромакорекція 7 енергії",
    description: "Мікс 7: Воїн",
    price: 290,
  },
  {
    title: "Аромакорекція 10 енергії",
    description: "Мікс 10: Фортуна",
    price: 290,
  },
  {
    title: "Аромакорекція 12 енергії",
    description: "Мікс 12: Служіння",
    price: 300,
  },
  {
    title: "Аромакорекція 15 енергії",
    description: "Мікс 15: Темний Ангел",
    price: 310,
  },
  {
    title: "Аромакорекція 18 енергії",
    description: "Мікс 18: Місяць",
    price: 320,
  },
  {
    title: "Настройка-медитація",
    description: "на енергію",
    price: 550,
  },
];

const testimonials = [
  {
    src: "/src/assets/slides-matrix/slide-1.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-2.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-3.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-4.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-5.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-6.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-7.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-8.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-9.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-10.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-11.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-12.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-13.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-14.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-15.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-16.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-17.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-18.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-19.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-20.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-21.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-22.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-23.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-24.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-25.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-26.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-27.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-28.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-29.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-30.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-31.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-32.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-33.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-34.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-35.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-36.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-37.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-38.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-39.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-40.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-41.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-42.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-43.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-44.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-45.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-46.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-47.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-48.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-49.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-50.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-51.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-52.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-53.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-54.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-55.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-56.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-57.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-58.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-59.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-matrix/slide-60.jpg",
    alt: "review",
  },
];

const achievements = [
  {
    numbers: 334,
    text: "проведено консультацій",
  },
  {
    numbers: 339,
    text: "зроблено експрес-розборів в рамках Be My Sister",
  },
  {
    numbers: "2+",
    text: "років досвіду консультування",
  },
];

const faqQuestions = [
  {
    question: "Як я можу бути впевненим, що метод працює?",
    answer:
      "Консультації за методом Матриця Долі пройшли вже сотні тисяч, а то й мільйони людей у всьому світі. Метод підтверджений статистично. Щодо моєї практики, 100% клієнтів, які приходили до мене на консультацію, підтверджували, що інформація, яку ми обговорювали, має підтвердження у їхньому житті. Я не пропоную мені повірити на слово. Я пропоную перевірити це на практиці.",
    open: false,
  },
  {
    question: "Чи змінить консультація моє життя на краще?",
    answer:
      "Консультація здатна підсвітити ваші точки росту, діагностувати проблемні місця. Знаючи, з чим ви маєте працювати і на що звернути увагу, ви зможете поступово трансформувати свої програми самостійно або за допомогою інших фахівців. Сама по собі консультація не працює, працюєте ви.",
    open: false,
  },
  {
    question:
      "Чи можна отримати консультацію через текст чи аудіо, без дзвінка?",
    answer:
      "Протестувавши всі можливі варіанти консультування (текст, аудіо, відео-дзвінок), я дійшла висновку, що найефективнішим є формат спілкування. І оскільки для мене дуже важливим є результат кожного мого клієнта, консультації у форматі аудіо або тексту без діалогу (у тому числі спілкування через дзвінок) я наразі не проводжу.",
    open: false,
  },
  {
    question: "А що якщо у мене не буде результатів?",
    answer:
      "На консультації ми засіємо зерно, і рано чи пізно воно проросте. Ви інвестуєте у вивчення себе, своїх кармічних завдань час та гроші, і це так чи інакше дасть свої величезні плоди. Залежно від того, наскільки ви будете усвідомлені, включені в роботу після консультації, і який ваш поточний рівень, швидкість отримання результатів може бути різною. Але якщо робити доступний мінімум – все буде добре.",
    open: false,
  },
  {
    question:
      "Що робити, якщо у мене виникнуть питання через деякий час після консультації?",
    answer:
      "Якщо у вас виникнуть запитання щодо тих сфер, які ми обговорювали на консультації, ви зможете задавати їх безлімітно у часі та кількості. Якщо обговорення сфери, в рамках якої у вас виникли питання, не входило до вашої попередньої консультації, ви можете замовити консультацію «Рішення», і ми обговоримо те, що вас турбує.",
    open: false,
  },
];

export const listItemsData = listItems.map((item) => ({
  ...item,
  id: generateId(),
}));

export const guidesData = guides.map((item) => ({
  ...item,
  id: generateId(),
}));

export const correctionsData = corrections.map((item) => ({
  ...item,
  id: generateId(),
}));

export const testimonialsData = testimonials.map((item) => ({
  ...item,
  id: generateId(),
}));

export const achievementsData = achievements.map((item) => ({
  ...item,
  id: generateId(),
}));

export const faqQuestionsData = faqQuestions.map((item) => ({
  ...item,
  id: generateId(),
}));
