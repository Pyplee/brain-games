#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const getProgression = (numbStart, numbPlus) => {
  const numbDel = getRandomInRange(1, 7);
  const result = [numbStart];
  for (let i = 0; i < 7; i += 1) {
    result.push(result[i] + numbPlus);
  }
  const correctAnswer = result[numbDel];
  result[numbDel] = '..';
  return [result.join(' '), correctAnswer];
};

const getPlayProgression = () => {
  const rules = 'What number is missing in the progression?';
  const questions = [];
  const correctAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const numbForProgress = getRandomInRange(0, 20);
    const numbPlus = getRandomInRange(1, 10);
    const [progression, answer] = getProgression(numbForProgress, numbPlus);
    questions.push(progression);
    correctAnswer.push(answer);
  }
  runEngine(rules, [questions, correctAnswer]);
};

export default getPlayProgression;
