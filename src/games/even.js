#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const getPlayEven = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const correctAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const numbers = getRandomInRange(0, 100);
    questions.push(numbers);
    correctAnswer.push(numbers % 2 === 0 ? 'yes' : 'no');
  }
  runEngine(rules, [questions, correctAnswer]);
};

export default getPlayEven;
