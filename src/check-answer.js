const checkAnswer = (userAnswer, correctAnswer) => {
  if (typeof (correctAnswer) === 'string') {
    return userAnswer === correctAnswer;
  }
  return -(-userAnswer) === -(-correctAnswer);
};

export default checkAnswer;
