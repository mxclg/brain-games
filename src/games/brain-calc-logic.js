import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRules = () => 'What is the result of the expression?';

const createTaskData = () => {
  const number1 = getRandomNumber(2, 100);
  const number2 = getRandomNumber(2, 25);

  const operations = ['-', '+', '*'];

  const randomIndex = Math.floor(Math.random() * operations.length);
  const randomOperationIndex = operations[randomIndex];

  const askQuestion = `Question: ${number1} ${randomOperationIndex} ${number2}`;

  let result = 0;

  if (randomOperationIndex === '+') {
    result = number1 + number2;
  } else if (randomOperationIndex === '-') {
    result = number1 - number2;
  } else if (randomOperationIndex === '*') {
    result = number1 * number2;
  }

  const resultStr = result.toString();
  return [askQuestion, resultStr];
};

export default () => gameEngine(gameRules, createTaskData);
