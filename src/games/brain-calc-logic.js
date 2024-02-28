import gameEngine from '../index.js';
import { getRandomFromOneToHundred, getRandomFromOneToQuarter } from '../randomNumbers.js';

// правила игры
const gameRules = () => 'What is the result of the expression?';

// создание данных для игры
const createTaskData = () => {
  // генерируем случаные числа для выражений
  const number1 = getRandomFromOneToHundred();
  const number2 = getRandomFromOneToQuarter();

  // массив со знаками для выражений
  const operations = ['-', '+', '*'];

  // генерируем выбор случайного элемента массива
  const randomIndex = Math.floor(Math.random() * operations.length);
  const randomOperationIndex = operations[randomIndex];

  // формируем вопрос со сгенерированным варажением
  const askQuestion = `Question: ${number1} ${randomOperationIndex} ${number2}`;

  // считаем результат выражения
  let result = 0;

  if (randomOperationIndex === '+') {
    result = number1 + number2;
  } else if (randomOperationIndex === '-') {
    result = number1 - number2;
  } else if (randomOperationIndex === '*') {
    result = number1 * number2;
  }

  /* делаем числовой результат строкой,
  чтобы корректно сравнивать его с ответом пользователя */
  const resultStr = result.toString();
  return [askQuestion, resultStr];
};

export default () => gameEngine(gameRules, createTaskData);
