const checkAnswer = (answerIn, correctAnswer, errorType = 0) => {
  if (errorType === 1) {
    if (-(-answerIn) === correctAnswer) {
      return true;
    }
  }
  if (answerIn === correctAnswer) {
    return true;
  }
  return false;
};

export default checkAnswer;
