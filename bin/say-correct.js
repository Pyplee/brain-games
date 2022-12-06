const sayCorrectOrUncorrect = (boolean, answerUser, result, userName) => {
  if (boolean === true) {
    console.log('Correct!');
  } else if (boolean === false) {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};

export default sayCorrectOrUncorrect;
