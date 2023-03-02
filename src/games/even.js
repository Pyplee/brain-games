#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../cli.js';
import generateNumber from '../generate-numbers.js';
import checkAnswer from '../check-answer.js';
import sayCorrectOrUncorrect from '../say-correct.js'; // boolean, userAnswerToQuestion, correctAnswerToQuestion, userName

const userName = helloUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const playEven = () => {
  let resultGamesBoolean = true;
  for (let i = 0; i < 3; i += 1) {
    const randomNumberForGame = generateNumber(0);
    console.log(`Question: ${randomNumberForGame}`);
    const userAnswerToQuestion = readlineSync.question('Your answer: ');
    let correctAnswerToQuestion = '';
    if (randomNumberForGame % 2 === 0) {
      correctAnswerToQuestion = 'yes';
    } else if (!(randomNumberForGame % 2 === 0)) {
      correctAnswerToQuestion = 'no';
    }
    if (checkAnswer(userAnswerToQuestion, correctAnswerToQuestion)) {
      sayCorrectOrUncorrect(true, userAnswerToQuestion, correctAnswerToQuestion);
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

export default playEven;
