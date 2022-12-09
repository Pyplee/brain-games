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

const calcResult = (resultRandomOperator) => {
  const result = [];
  const firstNumb = generateNumber(1);
  const secondNumb = generateNumber(1);
  let resultCalculate = 0;
  if (resultRandomOperator === '+') {
    resultCalculate = firstNumb + secondNumb;
    result.push(resultCalculate, firstNumb, secondNumb, resultRandomOperator);
  } if (resultRandomOperator === '-') {
    resultCalculate = firstNumb - secondNumb;
    result.push(resultCalculate, firstNumb, secondNumb, resultRandomOperator);
  } else if (resultRandomOperator === '*') {
    const firstNumbForStar = generateNumber(0); // "0" single numb
    const secondNumbForStar = generateNumber(0); // "0" single numb
    resultCalculate = firstNumbForStar * secondNumbForStar;
    result.push(resultCalculate, firstNumbForStar, secondNumbForStar, resultRandomOperator);
  }
  return result;
};

const playCalculate = () => {
  let resultGamesBoolean = true;
  for (let i = 0; i < 3; i += 1) {
    const resultRandomOperator = randomOperator();
    const arrayResult = calcResult(resultRandomOperator); // [resultCalc, first, second, operator]
    console.log(`Question: ${arrayResult[1]} ${arrayResult[3]} ${arrayResult[2]}`);
    const userAnswerToQuestion = readlineSync.question('Your answer: ');
    const correctAnswerToQuestion = arrayResult[0];
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
