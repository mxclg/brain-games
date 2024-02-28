import gameEngine from '../index.js';

// правила игры
const gameRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

// определяем является ли число четным
const isEven = (randomNumber) => randomNumber % 2 === 0;

// создание данных для игры
const createTaskData = () => {
  // генерируем случайное число от 1 до 100
  const randomNumber = Math.floor((Math.random() * 100) + 1);

  // формируем вопрос для пользователя
  const askQuestion = `Question: ${randomNumber}`;

  /* проверяем, является ли случайное число простым
 затем сохраняем результат в переменную */
  let result = '';
  if (isEven(randomNumber) === true) {
    result = 'yes';
  } else {
    result = 'no';
  }

  /* делаем числовой результат строкой,
 чтобы корректно сравнивать его с ответом пользователя */
  const resultStr = result.toString();
  return [askQuestion, resultStr];
};

export default () => gameEngine(gameRules, createTaskData);
