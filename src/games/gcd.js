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
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const correctAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const x = getRandomInRange(1, 50);
    const y = getRandomInRange(1, 50);
    questions.push(`${x} ${y}`);
    correctAnswer.push(gcd(x, y));
  }
  runEngine(rules, [questions, correctAnswer]);
};

export default getPlayGcd;
