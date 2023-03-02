import readlineSync from 'readline-sync';

const helloUser = () => readlineSync.question('May I have your name? ');

export default helloUser;
