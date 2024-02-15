#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as welcomeStrAndAskName from './brain-games.js';

welcomeStrAndAskName;
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = (randomNumber) => randomNumber % 2 === 0;
const isEvenGameLogic = () => {
	let correctAnswersCount = 0;
	for (let i = 0; i < 3; i += 1) {
		const randomNumber = Math.floor(Math.random() * 100);
		console.log(`Question: ${randomNumber}`);
		const userAnswer = readlineSync.question('Your answer: ');
		if (
			(isEven(randomNumber) && userAnswer.toLowerCase() === 'yes') ||
			(!isEven(randomNumber) && userAnswer.toLowerCase() === 'no')
		) {
			correctAnswersCount += correctAnswersCount + 1;
			console.log('Correct!');
		} else {
			console.log(
				`${userAnswer} is wrong answer ;(. Correct answer was ${
					isEven(randomNumber) ? 'yes' : 'no'
				}.`
			);
			return console.log("Let's try again UserName");
		}
	}
	return console.log('Congratulations, UserName!');
};

isEvenGameLogic();
