import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = helloUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const brainEven = () => {
  let result = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random(0) * 100);
    let integrity = 0;
    let correctAnswer = '';
    if (randomNumber % 2 === 0) {
      integrity = true;
      correctAnswer = 'yes';
    } else {
      integrity = false;
      correctAnswer = 'no';
    }
    console.log(`Question: ${randomNumber}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (integrity === true && answerUser === 'yes') {
      console.log('Correct!');
      result += 1;
    } else if (integrity === false && answerUser === 'no') {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (result === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

brainEven();
