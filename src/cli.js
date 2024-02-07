import readlineSync from 'readline-sync';

const greetings = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hi, ${userName}!`);
};
export default greetings;
