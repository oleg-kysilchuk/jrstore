import generateId from "./IDGenerator";

const readProducts = [
  {
    title: 'Запис вебінару "Карма. Клієнти. Гроші"',
    price: 300,
  },
  {
    title: 'Подкаст-база "Езотерикиня. 1.0"',
    price: 3000,
  },
];

export const readProductsData = readProducts.map((item) => ({
  ...item,
  id: generateId(),
}));
