import gameEngine from '../index.js';
import { getRandomFromOneToQuarter } from '../randomNumbers.js';

const gameRules = () => 'What number is missing in the progression?';

const createTaskData = () => {
  const randomStartNumber = getRandomFromOneToQuarter();
  const randomStepCount = getRandomFromOneToQuarter();

  const startValue = randomStartNumber;
  const step = randomStepCount;

  const progressionLength = 10;
  const progressionArray = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray.push(startValue + (step * i));
  }

  const randomArrayIndex = Math.floor(Math.random() * progressionArray.length);

  const hiddenElementArray = progressionArray.slice();
  hiddenElementArray[randomArrayIndex] = '..';

  const separator = ' ';
  const hiddenElementString = hiddenElementArray.join(separator);
  const askQuestion = `Question: ${hiddenElementString}`;

  let missingElement;
  for (let i = 0; i < progressionArray.length; i += 1) {
    if (progressionArray[i] !== hiddenElementArray[i]) {
      missingElement = progressionArray[i];
      break;
    }
  }

  const resultStr = missingElement.toString();
  return [askQuestion, resultStr];
};

export default () => gameEngine(gameRules, createTaskData);
