import gameEngine from '../index.js';

// правила игры
const gameRules = () => 'Find the greatest common divisor of given numbers.';

// создание данных для игры
const createTaskData = () => {
  // генерируем случайные числа для выражений
  let number1 = Math.floor(Math.random() * 100);
  let number2 = Math.floor(Math.random() * 100);

  // формируем вопрос со сгенерированными числами
  const askQuestion = `Question: ${number1} ${number2}`;

  let remainderOfDivide = number1 % number2;
  let result = 0;

  /* условная конструкция помогает определить, какое число больше,
  чтобы правильно сформировать деление */
  if (number1 > number2) {
  /* вычисляем НОД по методу Евклида – сначала делим большее на меньшее,
  потом делим меньшее число на остаток от деления,
  пока остаток от дедления не станет равен 0 */
    while (remainderOfDivide !== 0) {
      number1 = number2;
      number2 = remainderOfDivide;
      remainderOfDivide = number1 % number2;
    }
    result = number2;
  } else {
    remainderOfDivide = number2 % number1;
    while (remainderOfDivide !== 0) {
      number2 = number1;
      number1 = remainderOfDivide;
      remainderOfDivide = number2 % number1;
    }
    result = number1;
  }
  /* делаем числовой результат строкой,
  чтобы корректно сравнивать его с ответом пользователя */
  const resultStr = result.toString();
  return [askQuestion, resultStr];
};

export default () => gameEngine(gameRules, createTaskData);
