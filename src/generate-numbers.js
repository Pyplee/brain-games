const generateNumber = (param = 0) => { // "0" range 0 for 9 | "1" range 0 for 99
  let forDigit = 0;
  if (param === 0) {
    forDigit = 10;
  } else if (param === 1) {
    forDigit = 100;
  } else {
    return false;
  }
  const randomNumber = Math.round(Math.random(0) * forDigit);
  return randomNumber;
};

export default generateNumber;
