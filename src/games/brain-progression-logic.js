import gameEngine from '../index.js';
import { getRandomFromOneToQuarter } from '../randomNumbers.js';

// правила игры
const gameRules = () => 'What number is missing in the progression?';

// создание данных для игры
const createTaskData = () => {
  // генерируем случаные числа для первого числа и шага в прогрессии
  const randomStartNumber = getRandomFromOneToQuarter();
  const randomStepCount = getRandomFromOneToQuarter();

  // опеределяем начало и шаг прогрессии
  const startValue = randomStartNumber;
  const step = randomStepCount;

  // создаём массив с прогрессией из 10 элементов
  const progressionLength = 10;
  const progressionArray = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray.push(startValue + (step * i));
  }

  // генерируем индекс для выбора случайного элемента в массиве
  const randomArrayIndex = Math.floor(Math.random() * progressionArray.length);

  // копируем сгенерированный массив с прогрессией и заменяем в нём случайный элемент
  const hiddenElementArray = progressionArray.slice();
  hiddenElementArray[randomArrayIndex] = '..';

  // преобразуем массив с прогрессией, где скрыт один элемент, в строку и формируем вопрос
  const separator = ' ';
  const hiddenElementString = hiddenElementArray.join(separator);
  const askQuestion = `Question: ${hiddenElementString}`;

  /* опеределяем скрытый элемент в массиве с прогрессией и выносим его в переменную,
  чтобы потом использовать это значение для проверки верного ответа */
  let missingElement;
  for (let i = 0; i < progressionArray.length; i += 1) {
    if (progressionArray[i] !== hiddenElementArray[i]) {
      missingElement = progressionArray[i];
      break;
    }
  }

  /* делаем числовой результат строкой,
  чтобы корректно сравнивать его с ответом пользователя */
  const resultStr = missingElement.toString();
  return [askQuestion, resultStr];
};

export default () => gameEngine(gameRules, createTaskData);
