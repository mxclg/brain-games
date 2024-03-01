import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

const createTaskData = () => {
  const randomNumber = getRandomNumber(2, 100);

  const askQuestion = `Question: ${randomNumber}`;

  let result = '';
  if (isPrime(randomNumber) === true) {
    result = 'yes';
  } else {
    result = 'no';
  }

  const resultStr = result.toString();
  return [askQuestion, resultStr];
};

const brainPrime = () => {
  gameEngine(gameRules, createTaskData);
};

export default brainPrime;
