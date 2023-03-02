#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';
import generateNumber from '../bin/generate-numbers.js';
import checkAnswer from '../bin/check-answer.js';
import sayCorrectOrUncorrect from '../bin/say-correct.js'; // boolean, userAnswerToQuestion, correctAnswerToQuestion, userName

const userName = helloUser();
console.log('What is the result of the expression?');

const randomOperator = () => {
  let result = '';
  const randomNumber = Math.random(0);
  if (randomNumber > 0 && randomNumber <= 0.33) {
    result = '+';
  } if (randomNumber > 0.33 && randomNumber <= 0.66) {
    result = '-';
  } if (randomNumber > 0.66 && randomNumber <= 0.99) {
    result = '*';
  }
  return result;
};

const calcResult = (resultRandomOperator, firstNumb, secondNumb) => {
  let resultCalculate = 0;
  if (resultRandomOperator === '+') {
    resultCalculate = firstNumb + secondNumb;
  } if (resultRandomOperator === '-') {
    resultCalculate = firstNumb - secondNumb;
  } else if (resultRandomOperator === '*') {
    resultCalculate = firstNumb * secondNumb;
  }
  return resultCalculate;
};

const playCalculate = () => {
  let resultGamesBoolean = true;
  for (let i = 0; i < 3; i += 1) {
    const resultRandomOperator = randomOperator();
    let firstNumb = generateNumber(1);
    let secondNumb = generateNumber(1);
    if (resultRandomOperator === '*') {
      firstNumb = Math.round(firstNumb / 10);
      secondNumb = Math.round(secondNumb / 10);
    }
    const arrayResult = calcResult(resultRandomOperator, firstNumb, secondNumb);
    const correctAnswerToQuestion = arrayResult;
    console.log(`Question: ${firstNumb} ${resultRandomOperator} ${secondNumb}`);
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

playCalculate();
