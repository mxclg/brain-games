import app from '../index.js';

/*
Сами же игры по сути должны только генерировать данные
и запускать движок с общей логикой, передавая в него свои данные,
и уже потом обрабатывать эти данные

*/

// правила игры
const gameRules = () => 'What is the result of the expression?';

const createQuestion = () => {
  // генерируем случаные числа для выражений
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(randomNumber1 / 10);

  const operations = ['+', '-', '*'];

  for (let i = 0; i < operations.length; i += 1) {}
};

const resultOfExpression = () => {};

export default () => app(gameRules, createQuestion, resultOfExpression);
