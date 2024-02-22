import readlineSync from 'readline-sync';

/*

Внутри движка должен быть цикл (именно в движке, а не в играх),
внутри которого мы вызываем функцию, которая генерирует нам вопрос и правильный ответ,
а также задаем вопрос пользователю и далее сравниваем его ответ с правильным ответом.

*/

const app = () => {
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
  // задаём вопрос
    const askQuestion = createQuestion();
    console.log(askQuestion);

    // получаем ответ от пользователя
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = resultOfExpression();

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

export default app;
