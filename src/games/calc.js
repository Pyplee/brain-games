#!/usr/bin/env node
import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const playCalculate = () => {
  const rules = 'What is the result of the expression?';
  const questions = [];
  const correctAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const randomOperator = getRandomInRange(1, 3);
    if (randomOperator === 1) { // -
      const x = getRandomInRange(0, 50);
      const y = getRandomInRange(0, 50);
      questions.push(`${x} - ${y}`);
      correctAnswer.push((x - y));
    }
    if (randomOperator === 2) { // +
      const x = getRandomInRange(0, 50);
      const y = getRandomInRange(0, 50);
      questions.push(`${x} + ${y}`);
      correctAnswer.push((x + y));
    }
    if (randomOperator === 3) { // *
      const x = getRandomInRange(0, 20);
      const y = getRandomInRange(0, 10);
      questions.push(`${x} * ${y}`);
      correctAnswer.push((x * y));
    }
  }
  runEngine(rules, [questions, correctAnswer]);
};

export default playCalculate;
