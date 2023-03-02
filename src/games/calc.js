#!/usr/bin/env node
import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const getXY = (rate1, rate2) => {
  const x = getRandomInRange(rate1, rate2);
  const y = getRandomInRange(rate1, rate2);
  return [x, y];
};

const getCalcAnswer = (x, y, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    default:
      result = x * y;
      break;
  }
  return result;
};

const getPlayCalculate = () => {
  const rules = 'What is the result of the expression?';
  const questions = [];
  const correctAnswer = [];
  const operators = ['+', '-', '*'];
  const rateGenNumMinOperator = 0;
  const rateGenNumMaxOperator = 2;
  const rateGenNumMin = 0;
  let rateGenNumMax = 90;
  for (let i = 0; i < 3; i += 1) {
    const operator = operators[getRandomInRange(rateGenNumMinOperator, rateGenNumMaxOperator)];
    if (operator === '*') {
      rateGenNumMax = 10;
    }
    const [x, y] = getXY(rateGenNumMin, rateGenNumMax);
    questions.push(`${x} ${operator} ${y}`);
    correctAnswer.push(getCalcAnswer(x, y, operator));
  }
  runEngine(rules, [questions, correctAnswer]);
};

export default getPlayCalculate;
