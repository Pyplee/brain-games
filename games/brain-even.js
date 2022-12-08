#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';
import generateNumber from '../bin/generate-numbers.js';
import checkAnswer from '../bin/check-answer.js';
import sayCorrectOrUncorrect from '../bin/say-correct.js'; // boolean, userAnswerToQuestion, correctAnswerToQuestion, userName

const userName = helloUser();
console.log("Answer 'yes' if number even otherwise answer 'no'.");

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

playEven();
