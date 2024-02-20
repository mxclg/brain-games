import readlineSync from 'readline-sync';

// Рассказываем правила и задаём вопрос для игры
// Получаем ответ
// Сравниваем ответ пользователя с настоящим ответом

const greeting = () => {
	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hi, ${userName}!`);
};

const app = () => {
	// Приветствуем, запрашиваем имя и здороваемся по имени
	console.log('Welcome to the Brain Games!');
};

export default app;
