import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const isEvenResult = (randomNumber) => (isEven(randomNumber) === true ? 'yes' : 'no');

const createTaskData = () => {
  const randomNumber = getRandomNumber();

  const askQuestion = `Question: ${randomNumber}`;

  const resultStr = isEvenResult(randomNumber).toString();
  return [askQuestion, resultStr];
};

const brainEven = () => {
  gameEngine(gameRules, createTaskData);
};

export default brainEven;
