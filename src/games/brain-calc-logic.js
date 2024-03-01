import gameEngine from '../index.js';
import { getRandomFromOneToHundred, getRandomFromOneToQuarter } from '../randomNumbers.js';

const gameRules = () => 'What is the result of the expression?';

const createTaskData = () => {
  const number1 = getRandomFromOneToHundred();
  const number2 = getRandomFromOneToQuarter();

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
