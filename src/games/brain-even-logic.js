import readlineSync from 'readline-sync';

const isEvenGameLogic = () => {
	console.log('Welcome to the Brain Games!');

	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hi, ${userName}!`);

	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	const isEven = (randomNumber) => randomNumber % 2 === 0;

	let correctAnswersCount = 0;

	for (let i = 0; i < 3; i += 1) {
		const randomNumber = Math.floor(Math.random() * 100);

		console.log(`Question: ${randomNumber}`);
		const userAnswer = readlineSync.question('Your answer: ');
		if (
			(isEven(randomNumber) && userAnswer.toLowerCase() === 'yes') ||
			// eslint-disable-next-line no-tabs
			(!isEven(randomNumber) && userAnswer.toLowerCase() === 'no')
		) {
			correctAnswersCount += correctAnswersCount + 1;
			console.log('Correct!');
		} else {
			console.log(
				`'${userAnswer}' is wrong answer ;(. Correct answer was ${
					isEven(randomNumber) ? 'yes' : 'no'
				}.`
			);
			return console.log(`Let's try again, ${userName}!`);
		}
	}
	return console.log(`Congratulations, ${userName}!`);
};
export default isEvenGameLogic;
