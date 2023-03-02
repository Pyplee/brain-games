#!/usr/bin/env node
import helloUser from '../src/cli.js';

const makeWelcome = () => {
  helloUser();
};

export default makeWelcome;
