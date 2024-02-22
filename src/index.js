import readlineSync from 'readline-sync';

const gameEngine = (gameRules, createTaskData) => {
  // приветствуем пользователя и заправшиваем его имя
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);

  // объясняем правила игры
  const explainGameRules = gameRules();
  console.log(explainGameRules);

  // создаём счётчик правильных ответов и запускаем цикл
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
  // задаём вопрос, используя функцию из логики игры
    const [askQuestion, resultStr] = createTaskData();
    const rightAnswer = resultStr;
    console.log(askQuestion);

    // получаем ответ от пользователя
    const userAnswer = readlineSync.question('Your answer: ');

    // сравниваем ответы
    if (userAnswer === rightAnswer) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${rightAnswer}.`);

      // заканчиваем игру, если ответ неправильный
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  // заканчиваем игру после трёх правильных ответов
  return console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
