#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomOperator from '../bin/random-operator.js';
import helloUser from '../src/cli.js';
import generateNumber from '../bin/generate-numbers.js';
import checkAnswer from '../bin/check-answer.js';
import sayCorrectOrUncorrect from '../bin/say-correct.js'; // boolean, userAnswerToQuestion, correctAnswerToQuestion, userName

const userName = helloUser();
console.log('What is the result of the expression?');

const playCalculate = () => {
  let resultGamesBoolean = true;
  const singDigitNumbers = 0;
  const twoDigitNumbers = 1;
  for (let i = 0; i < 3; i += 1) {
    let resultOpearation = true;
    const resultRandomOperator = randomOperator();
    if (resultRandomOperator === '+') {
      const randomNumbFirst = generateNumber(twoDigitNumbers);
      const randomNumbSecond = generateNumber(twoDigitNumbers);
      resultOpearation = randomNumbFirst - (-randomNumbSecond);
      console.log(`Question: ${randomNumbFirst} + ${randomNumbSecond}`);
      const userAnswerToQuestion = readlineSync.question('Your answer: ');
      if (checkAnswer(userAnswerToQuestion, resultOpearation, 'yes')) {
        sayCorrectOrUncorrect(true);
      } else {
        sayCorrectOrUncorrect(false, userAnswerToQuestion, resultOpearation, userName);
        resultGamesBoolean = false;
        break;
      }
    }
    if (resultRandomOperator === '-') {
      const randomNumbFirst = generateNumber(twoDigitNumbers);
      const randomNumbSecond = generateNumber(twoDigitNumbers);
      resultOpearation = randomNumbFirst - randomNumbSecond;
      console.log(`Question: ${randomNumbFirst} - ${randomNumbSecond}`);
      const userAnswerToQuestion = readlineSync.question('Your answer: ');
      if (checkAnswer(userAnswerToQuestion, resultOpearation, 'yes')) {
        sayCorrectOrUncorrect(true);
      } else {
        sayCorrectOrUncorrect(false, userAnswerToQuestion, resultOpearation, userName);
        resultGamesBoolean = false;
        break;
      }
    }
    if (resultRandomOperator === '*') {
      const randomNumbFirst = generateNumber(singDigitNumbers);
      const randomNumbSecond = generateNumber(singDigitNumbers);
      resultOpearation = randomNumbFirst * randomNumbSecond;
      console.log(`Question: ${randomNumbFirst} * ${randomNumbSecond}`);
      const userAnswerToQuestion = readlineSync.question('Your answer: ');
      if (checkAnswer(userAnswerToQuestion, resultOpearation, 'yes')) {
        sayCorrectOrUncorrect(true);
      } else {
        sayCorrectOrUncorrect(false, userAnswerToQuestion, resultOpearation, userName);
        resultGamesBoolean = false;
        break;
      }
    }
  }
  if (resultGamesBoolean === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

playCalculate();
