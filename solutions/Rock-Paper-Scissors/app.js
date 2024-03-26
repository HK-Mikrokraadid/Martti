const prompt = require('prompt-sync')();
const colors = require('colors');
const messages = require('./messages');

console.log(messages.gameMessage.bgGreen.black);
console.log('-'.repeat(messages.playerOneChoice.length));

const userOneChoice = prompt(messages.playerOneChoice, { echo: '*'});
const userTwoChoice = prompt(messages.playerTwoChoice, { echo: '*'});

if (userOneChoice === userTwoChoice) {
  console.log(messages.draw.green);
} else if (userOneChoice === '1' && userTwoChoice === '3' || userOneChoice === '2' && userTwoChoice === '1' || userOneChoice === '3' && userTwoChoice === '2') {
  console.log(messages.playerOneWin.green);
} else {
  console.log(messages.playerTwoWin.green);
}