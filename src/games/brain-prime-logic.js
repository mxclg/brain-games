import gameEngine from '../index.js';

// правила игры
const gameRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

// определяем является ли число простым
const isPrime = (number) => {
  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

// создание данных для игры
const createTaskData = () => {
  // генерируем случайное число от 2 до 100
  const randomNumber = Math.floor((Math.random() * 99) + 2);

  // формируем вопрос для пользователя
  const askQuestion = `Question: ${randomNumber}`;

  /* проверяем, является ли случайное число простым
  затем сохраняем результат в переменную */
  let result = '';
  if (isPrime(randomNumber) === true) {
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
