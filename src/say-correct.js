/* eslint-disable max-len */
const sayCorrectOrUncorrect = (boolean, userAnswerToQuestion, correctAnswerToQuestion, userName) => {
  if (boolean === true) {
    console.log('Correct!');
  } else if (boolean === false) {
    console.log(`'${userAnswerToQuestion}' is wrong answer ;(. Correct answer was '${correctAnswerToQuestion}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};

export default sayCorrectOrUncorrect;
