#!/usr/bin/env node
import helloUser from '../src/cli.js';

const makeWelcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${helloUser()}!`);
};

makeWelcome();
