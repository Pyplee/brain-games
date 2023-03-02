#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';
import generateNumber from '../bin/generate-numbers.js';
import checkAnswer from '../bin/check-answer.js';
import sayCorrectOrUncorrect from '../bin/say-correct.js'; // boolean, userAnswerToQuestion, correctAnswerToQuestion, userName

const userName = helloUser();
console.log('What number is missing in the progression?');

const singleDigitNumbers = 0;
const twoDigitNumbers = 1;

const generateStartNumber = () => {
  let startNumberLocal = 0;
  const maxNumberForGenerate = 20;
  for (let j = 0; j < 11; j += 1) {
    const startNumberTemp = generateNumber(twoDigitNumbers);
    if (startNumberTemp <= maxNumberForGenerate) {
      startNumberLocal = startNumberTemp;
      break;
    }
  }
  return startNumberLocal;
};

const generateKeyNumber = () => {
  const maxKeyForGenerate = 8; // max start number-20, max key-8, repeats-10
  // progression-[1....10] => 8*10=80 max numb if start numb - 1, if start numb 20,
  // max 10th index - 100. Restriction - 100. (20 + 8 + 8 + 8... | 20 + 8*10 = 100)
  let keyNumber = 0;
  for (let o = 0; o < 11; o += 1) {
    const keyNumberForCheck = generateNumber(singleDigitNumbers);
    if (keyNumberForCheck <= maxKeyForGenerate && keyNumberForCheck > 0) {
      keyNumber = keyNumberForCheck;
      break;
    }
  }
  return keyNumber;
};

const generateIndexNumbForbHide = () => {
  let hideNumbLocal = 0;
  for (let i = 0; i < 11; i += 1) {
    const hideNumbForCheck = generateNumber(0);
    if (hideNumbForCheck > 1 && hideNumbLocal < 11) {
      hideNumbLocal = hideNumbForCheck;
      break;
    }
  }
  return hideNumbLocal;
};

const playProgression = () => {
  let resultGamesBoolean = true;
  for (let j = 0; j < 3; j += 1) {
    const resultArray = [];
    const keyNumber = generateKeyNumber();
    const startNumber = generateStartNumber();
    resultArray.push('Question:');
    resultArray.push(startNumber);
    for (let i = 1; i < 10; i += 1) {
      const calcProgression = resultArray[i] + keyNumber;
      resultArray.push(calcProgression);
    }
    const indexForHideNumb = generateIndexNumbForbHide();
    const correctAnswerToQuestion = resultArray[indexForHideNumb];
    resultArray[indexForHideNumb] = '..';
    console.log(...resultArray);
    const userAnswerToQuestion = readlineSync.question('Your answer: ');
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

playProgression();
