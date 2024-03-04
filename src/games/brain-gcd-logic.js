import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return calculateGcd(number2, number1 % number2);
};

const createTaskData = () => {
  const number1 = getRandomNumber(2, 100);
  const number2 = getRandomNumber(2, 100);

  const askQuestion = `Question: ${number1} ${number2}`;

  const resultStr = calculateGcd(number1, number2).toString();
  return [askQuestion, resultStr];
};

const brainGcd = () => {
  gameEngine(gameRules, createTaskData);
};

export default brainGcd;
