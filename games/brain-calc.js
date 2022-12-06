import readlineSync from 'readline-sync';
import randomOperator from '../bin/random-operator.js';
import helloUser from '../src/cli.js';
import generateNumber from '../bin/generate-numbers.js';
import checkAnswer from '../bin/check-answer.js';
import sayCorrectOrUncorrect from '../bin/say-correct.js'; // boolean, answerUser, result, userName

const userName = helloUser();
console.log('What is the result of the expression?');

const calc = () => {
  for (let i = 0; i < 3; i += 1) {
    let result = 0;
    const randomOperatorFunc = randomOperator();
    if (randomOperatorFunc === '+') {
      const randomNumbFirst = generateNumber(1);
      const randomNumbSecond = generateNumber(1);
      result = randomNumbFirst - (-randomNumbSecond);
      console.log(`Question: ${randomNumbFirst} + ${randomNumbSecond}`);
      const answerUser = readlineSync.question('Your answer: ');
      if (checkAnswer(answerUser, result, 1)) {
        sayCorrectOrUncorrect(true);
      } else {
        sayCorrectOrUncorrect(false, answerUser, result, userName);
        break;
      }
    }
    if (randomOperatorFunc === '-') {
      const randomNumbFirst = generateNumber(1);
      const randomNumbSecond = generateNumber(1);
      result = randomNumbFirst - randomNumbSecond;
      console.log(`Question: ${randomNumbFirst} - ${randomNumbSecond}`);
      const answerUser = readlineSync.question('Your answer: ');
      if (checkAnswer(answerUser, result, 1)) {
        sayCorrectOrUncorrect(true);
      } else {
        sayCorrectOrUncorrect(false, answerUser, result, userName);
        break;
      }
    }
    if (randomOperatorFunc === '*') {
      const randomNumbFirst = generateNumber(0);
      const randomNumbSecond = generateNumber(0);
      result = randomNumbFirst * randomNumbSecond;
      console.log(`Question: ${randomNumbFirst} * ${randomNumbSecond}`);
      const answerUser = readlineSync.question('Your answer: ');
      if (checkAnswer(answerUser, result, 1)) {
        sayCorrectOrUncorrect(true);
      } else {
        sayCorrectOrUncorrect(false, answerUser, result, userName);
        break;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

calc();
