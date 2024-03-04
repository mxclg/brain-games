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

const isPrimeResult = (randomNumber) => (isPrime(randomNumber) === true ? 'yes' : 'no');

const createTaskData = () => {
  const randomNumber = getRandomNumber(2, 100);

  const askQuestion = `Question: ${randomNumber}`;

  const resultStr = isPrimeResult(randomNumber).toString();
  return [askQuestion, resultStr];
};

const brainPrime = () => {
  gameEngine(gameRules, createTaskData);
};

export default brainPrime;
