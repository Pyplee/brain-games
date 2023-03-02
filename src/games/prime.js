#!/usr/bin/env node
import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const getPlayPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = [];
  const correctAnswer = [];
  const primeNumb = [2, 3, 5, 7];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInRange(0, 10);
    questions.push(number);
    correctAnswer.push(primeNumb.indexOf(number) !== -1 ? 'yes' : 'no');
  }
  runEngine(rules, [questions, correctAnswer]);
};

export default getPlayPrime;
