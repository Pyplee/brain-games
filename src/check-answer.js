const checkAnswer = (answerVerifiable, answerCorrect, errorType = 'no') => {
  if (errorType === 'yes') {
    if (-(-answerVerifiable) === answerCorrect) {
      return true;
    }
  } else if (answerVerifiable === answerCorrect) {
    return true;
  }
  return false;
};

export default checkAnswer;
