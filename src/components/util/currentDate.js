const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const monthIndex = new Date().getMonth();
const currentMonth = months[monthIndex].toLocaleLowerCase();
const currentYear = new Date().getFullYear();

export const date = {
  currentMonth,
  currentYear,
};
