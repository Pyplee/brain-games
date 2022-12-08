#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';
import generateNumber from '../bin/generate-numbers.js';
import checkAnswer from '../bin/check-answer.js';
import sayCorrectOrUncorrect from '../bin/say-correct.js'; // boolean, userAnswerToQuestion, correctAnswerToQuestion, userName

const userName = helloUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const playPrime = () => {
  const singleDigitNumbers = 0;
  let resultGamesBoolean = true;
  for (let i = 0; i < 3; i += 1) {
    const arrayWithPrimeNumb = [2, 3, 5, 7];
    const randomNumberForGame = generateNumber(singleDigitNumbers);
    console.log(`Question: ${randomNumberForGame}`);
    const userAnswerToQuestion = readlineSync.question('Your answer: ');
    let correctAnswerToQuestion = '';
    if ((arrayWithPrimeNumb.indexOf(randomNumberForGame)) === -1) { // NO
      correctAnswerToQuestion = 'no';
    } else if ((arrayWithPrimeNumb.indexOf(randomNumberForGame)) !== -1) { // YES
      correctAnswerToQuestion = 'yes';
    }
    if (checkAnswer(userAnswerToQuestion, correctAnswerToQuestion)) {
      sayCorrectOrUncorrect(true);
    } else if (checkAnswer(userAnswerToQuestion, correctAnswerToQuestion) === false) {
      sayCorrectOrUncorrect(false, userAnswerToQuestion, correctAnswerToQuestion, userName);
      resultGamesBoolean = false;
      break;
    }
  }
  if (resultGamesBoolean === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

playPrime();
