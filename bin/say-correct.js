const sayCorrectOrUncorrect = (boolean, answerUser, answerCorrect, userName) => {
  if (boolean === true) {
    console.log('Correct!');
  } else if (boolean === false) {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};

export default sayCorrectOrUncorrect;
