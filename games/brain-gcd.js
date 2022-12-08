#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';
import generateNumber from '../bin/generate-numbers.js';
import checkAnswer from '../bin/check-answer.js';
import sayCorrectOrUncorrect from '../bin/say-correct.js'; // boolean, userAnswerToQuestion, correctAnswerToQuestion, userName

const userName = helloUser();
console.log('Find the greatest common divisor of given numbers.');

const generateNumbAndKey = () => {
  const singleDigitNumbers = 0;
  const twoDigitNumbers = 1;
  const startArray = [];
  const startNumb = generateNumber(twoDigitNumbers);
  startArray.push(startNumb);
  const keyNumb = generateNumber(singleDigitNumbers);
  startArray.push(keyNumb);
  return startArray;
};

const gcd = () => {
  let resultGamesBoolean = true;
  for (let i = 0; i < 3; i += 1) {
    const arrayWithInitialNumbAndKey = generateNumbAndKey();
    const firstNumbInTheQuestion = arrayWithInitialNumbAndKey[0];
    const secondNumbInTheQuestion = arrayWithInitialNumbAndKey[0] * arrayWithInitialNumbAndKey[1];
    const correctAnswerToQuestion = arrayWithInitialNumbAndKey[1];
    console.log(`Question: ${firstNumbInTheQuestion} ${secondNumbInTheQuestion}`);
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

gcd();
