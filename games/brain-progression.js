import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';
import generateNumber from '../bin/generate-numbers.js';
import checkAnswer from '../bin/check-answer.js';
import sayCorrectOrUncorrect from '../bin/say-correct.js';

const userName = helloUser();
console.log('What number is missing in the progression?');

const generateStartNumber = () => {
  let startNumberLocal = 0;
  const maxNumberForGenerate = 20;
  for (let j = 0; j < 11; j += 1) {
    const startNumberTemp = generateNumber(1);
    if (startNumberTemp <= maxNumberForGenerate) {
      startNumberLocal = startNumberTemp;
      break;
    }
  }
  return startNumberLocal;
};

const generateKeyNumber = () => {
  const maxKeyForGenerate = 8;
  let keyNumberLocal = 0;
  for (let o = 0; o < 11; o += 1) {
    const keyNumberTemp = generateNumber(0);
    if (keyNumberTemp <= maxKeyForGenerate && keyNumberTemp > 0) {
      keyNumberLocal = keyNumberTemp;
      break;
    }
  }
  return keyNumberLocal;
};

const generateNumbHide = () => {
  let hideNumbLocal = 0;
  for (let i = 0; i < 11; i += 1) {
    const hideNumbTemp = generateNumber(0);
    if (hideNumbTemp > 1 && hideNumbLocal < 11) {
      hideNumbLocal = hideNumbTemp;
      break;
    }
  }
  return hideNumbLocal;
};

const progression = () => {
  for (let j = 0; j < 3; j += 1) {
    const resultArray = [];
    const keyNumber = generateKeyNumber();
    const startNumber = generateStartNumber();
    resultArray.push('Question:');
    resultArray.push(startNumber);
    for (let i = 1; i < 10; i += 1) {
      const calc = resultArray[i] + keyNumber;
      resultArray.push(calc);
    }
    const hideNumber = generateNumbHide();
    const answerCorrect = resultArray[hideNumber];
    resultArray[hideNumber] = '..';
    console.log(...resultArray);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkAnswer(userAnswer, answerCorrect, 1)) {
      sayCorrectOrUncorrect(true);
    } else {
      sayCorrectOrUncorrect(false, userAnswer, answerCorrect, userName);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

progression();
