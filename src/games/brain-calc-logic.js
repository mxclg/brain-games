import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRules = 'What is the result of the expression?';

const calculateExpression = (number1, number2, randomOperationIndex) => {
  switch (randomOperationIndex) {
    case '+': return number1 + number2;

    case '-': return number1 - number2;

    case '*': return number1 * number2;

    default: return null;
  }
};

const createTaskData = () => {
  const number1 = getRandomNumber(2, 100);
  const number2 = getRandomNumber(2, 25);

  const operations = ['-', '+', '*'];

  const randomIndex = getRandomNumber(0, operations.length - 1);
  const randomOperationIndex = operations[randomIndex];

  const askQuestion = `Question: ${number1} ${randomOperationIndex} ${number2}`;

  const resultStr = calculateExpression(number1, number2, randomOperationIndex).toString();
  return [askQuestion, resultStr];
};

const brainCalc = () => {
  gameEngine(gameRules, createTaskData);
};

export default brainCalc;
