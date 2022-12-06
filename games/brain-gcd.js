import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';
import generateNumber from '../bin/generate-numbers.js';
import checkAnswer from '../bin/check-answer.js';
import sayCorrectOrUncorrect from '../bin/say-correct.js'; // boolean, answerUser, result, userName

const userName = helloUser();
console.log('Find the greatest common divisor of given numbers.');

const generateNumbAndDivider = () => {
  const arrayNumb = [];
  const tempForCheckNumb = generateNumber(1);
  arrayNumb.push(tempForCheckNumb);
  const tempForCheckDivider = generateNumber(0);
  arrayNumb.push(tempForCheckDivider);
  return arrayNumb;
};

const gcd = () => {
  for (let i = 0; i < 3; i += 1) {
    const arrayMain = generateNumbAndDivider();
    const firstNumb = arrayMain[0];
    const secondNumb = arrayMain[0] * arrayMain[1];
    const answerDivider = arrayMain[1];
    console.log(`Question: ${firstNumb} ${secondNumb}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (checkAnswer(answerUser, answerDivider, 1)) {
      sayCorrectOrUncorrect(true);
    } else {
      sayCorrectOrUncorrect(false, answerUser, answerDivider, userName);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

gcd();
