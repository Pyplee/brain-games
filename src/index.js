import readlineSync from 'readline-sync';
import checkAnswer from './check-answer.js';

// eslint-disable-next-line consistent-return
const runEngine = (rules, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const [questions, correctAnswers] = makeRound; // [[25 - 11, 5 - 15, x..], [14, -10, x..]]
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!checkAnswer(userAnswer, correctAnswers[i])) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return null;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
