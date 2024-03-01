import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const createTaskData = () => {
  const randomNumber = getRandomNumber();

  const askQuestion = `Question: ${randomNumber}`;

  let result = '';
  if (isEven(randomNumber) === true) {
    result = 'yes';
  } else {
    result = 'no';
  }

  const resultStr = result.toString();
  return [askQuestion, resultStr];
};

const brainEven = () => {
  gameEngine(gameRules, createTaskData);
};

export default brainEven;
