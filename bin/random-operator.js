const randomOperator = () => {
  let result = 0;
  const randomNumber = Math.random(0);
  if (randomNumber > 0 && randomNumber <= 0.33) {
    result = '+';
  } if (randomNumber > 0.33 && randomNumber <= 0.66) {
    result = '-';
  } if (randomNumber > 0.66 && randomNumber <= 0.99) {
    result = '*';
  }
  return result;
};

export default randomOperator;
