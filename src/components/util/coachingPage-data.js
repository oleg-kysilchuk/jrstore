import generateId from "./IDGenerator";

const listItems = [
  {
    text: "Отримання додаткових джерел доходу завдяки монетизації ідей, до яких не доходили руки",
  },
  {
    text: "Реалізація творчих проєктів завдяки розумінню що і за чим робити",
  },
  {
    text: "Підвищення загального рівня вмотивованості завдяки стану ясності і спокою",
  },
];

const faqQuestions = [
  {
    question: "На який мінімальний термін можна отримати супровід?",
    answer:
      "Супровід - наша тривала взаємодія, і її термін складає від 3 місяців.",
    open: false,
  },
];

const testimonials = [
  {
    src: "/src/assets/slides-coaching/slide-1.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-coaching/slide-2.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-coaching/slide-3.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-coaching/slide-4.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-coaching/slide-5.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-coaching/slide-6.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-coaching/slide-7.jpg",
    alt: "review",
  },
  {
    src: "/src/assets/slides-coaching/slide-8.jpg",
    alt: "review",
  },
];

export const listItemsData = listItems.map((item) => ({
  ...item,
  id: generateId,
}));

export const faqQuestionsData = faqQuestions.map((item) => ({
  ...item,
  id: generateId,
}));
export const testimonialsData = testimonials.map((item) => ({
  ...item,
  id: generateId,
}));
