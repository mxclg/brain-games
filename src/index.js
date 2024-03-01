import readlineSync from 'readline-sync';

const gameEngine = (gameRules, createTaskData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const explainGameRules = gameRules();
  console.log(explainGameRules);

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const [askQuestion, resultStr] = createTaskData();
    const rightAnswer = resultStr;
    console.log(askQuestion);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === rightAnswer) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${rightAnswer}.`);

      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
