import readlineSync from 'readline-sync';

const helloUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default helloUser;
