import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';
import generateNumber from '../bin/generate-numbers.js';
import checkAnswer from '../bin/check-answer.js';
import sayCorrectOrUncorrect from '../bin/say-correct.js'; // boolean, answerUser, result, userName

const userName = helloUser();
console.log("Answer 'yes' if number even otherwise answer 'no'.");

const even = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateNumber(0);
    console.log(`Question: ${randomNumber}`);
    const answerUser = readlineSync.question('Your answer: ');
    let result = 0;
    if (randomNumber % 2 === 0) {
      result = 'yes';
    } else if (!(randomNumber % 2 === 0)) {
      result = 'no';
    }
    if (checkAnswer(result, answerUser)) {
      sayCorrectOrUncorrect(true);
    } else {
      sayCorrectOrUncorrect(false, answerUser, result, userName);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

even();
