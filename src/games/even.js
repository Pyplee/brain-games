#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const getPlayEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const correctAnswer = [];
  const rateGenNumMin = 0;
  const rateGenNumMax = 100;
  for (let i = 0; i < 3; i += 1) {
    const numbers = getRandomInRange(rateGenNumMin, rateGenNumMax);
    questions.push(numbers);
    correctAnswer.push(numbers % 2 === 0 ? 'yes' : 'no');
  }
  runEngine(rules, [questions, correctAnswer]);
};

export default getPlayEven;
