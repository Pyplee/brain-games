#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const getPlayGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const correctAnswer = [];
  const rateGenNumMin = 1;
  const rateGenNumMax = 50;
  for (let i = 0; i < 3; i += 1) {
    const x = getRandomInRange(rateGenNumMin, rateGenNumMax);
    const y = getRandomInRange(rateGenNumMin, rateGenNumMax);
    questions.push(`${x} ${y}`);
    correctAnswer.push(gcd(x, y));
  }
  runEngine(rules, [questions, correctAnswer]);
};

export default getPlayGcd;
