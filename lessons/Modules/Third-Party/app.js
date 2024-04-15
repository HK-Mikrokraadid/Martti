/* eslint-disable no-console */
const prompts = require('prompt-sync');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');

const prompt = prompts();

const username = prompt('Palun sisesta oma kasutajanimi: ');
const password = prompt('Palun sisesta oma parool: ');

if (username === 'admin' && password === '1234') {
  console.log('Tere tulemast!');
} else {
  console.log('Vale kasutajanimi või parool!');
}
