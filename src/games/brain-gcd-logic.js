import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const createTaskData = () => {
  let number1 = getRandomNumber(2, 100);
  let number2 = getRandomNumber(2, 100);

  const askQuestion = `Question: ${number1} ${number2}`;

  let remainderOfDivide = number1 % number2;
  let result = 0;

  if (number1 > number2) {
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

  const resultStr = result.toString();
  return [askQuestion, resultStr];
};

const brainGcd = () => {
  gameEngine(gameRules, createTaskData);
};

export default brainGcd;
