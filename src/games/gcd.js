#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../cli.js';
import generateNumber from '../generate-numbers.js';
import checkAnswer from '../check-answer.js';
import sayCorrectOrUncorrect from '../say-correct.js'; // boolean, userAnswerToQuestion, correctAnswerToQuestion, userName

const userName = helloUser();
console.log('Find the greatest common divisor of given numbers.');

const generateNumbAndKey = () => {
  const twoDigitNumbers = 1;
  const startArray = [];
  const firstNumb = generateNumber(twoDigitNumbers);
  startArray.push(firstNumb);
  const secondNumb = generateNumber(twoDigitNumbers);
  startArray.push(secondNumb);
  return startArray;
};

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const playGCD = () => {
  let resultGamesBoolean = true;
  for (let i = 0; i < 3; i += 1) {
    const arrayWithInitialNumbAndKey = generateNumbAndKey();
    const firstNumbInTheQuestion = arrayWithInitialNumbAndKey[0];
    const secondNumbInTheQuestion = arrayWithInitialNumbAndKey[1];
    const correctAnswerToQuestion = gcd(firstNumbInTheQuestion, secondNumbInTheQuestion);
    console.log(`Question: ${secondNumbInTheQuestion} ${firstNumbInTheQuestion}`);
    const userAnswerToQuestion = readlineSync.question('Your answer: ');
    if (checkAnswer(userAnswerToQuestion, correctAnswerToQuestion, 'yes')) {
      sayCorrectOrUncorrect(true);
    } else {
      sayCorrectOrUncorrect(false, userAnswerToQuestion, correctAnswerToQuestion, userName);
      resultGamesBoolean = false;
      break;
    }
  }
  if (resultGamesBoolean === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default playGCD;
