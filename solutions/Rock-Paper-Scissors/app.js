const prompt = require('prompt-sync')();
const colors = require('colors');
const messages = require('./messages');

console.log(messages.gameMessage.bgGreen.black);

function line(length) {
  return '-'.repeat(length);
}

const availableChoices = ['1', '2', '3', 'q'];

const points = {
  playerOne: 0,
  playerTwo: 0,
};

function displayPoints() {
  console.log('------ Hetke seis -------');
  console.log('| Mängija 1 | Mängija 2 |');
  console.log('|' + line(23) + '|');
  console.log('|     ' + points.playerOne + '     |     ' + points.playerTwo + '     |');
  console.log(line(25));
}

function detectWinner(userOneChoice, userTwoChoice) {
  if (userOneChoice === userTwoChoice) {
    return messages.draw.green;
  } else if (userOneChoice === '1' && userTwoChoice === '3' || userOneChoice === '2' && userTwoChoice === '1' || userOneChoice === '3' && userTwoChoice === '2') {
    points.playerOne++;
    return messages.playerOneWin.green;
  } else {
    points.playerTwo++;
    return messages.playerTwoWin.green;
  }
}

const pointsToWin = Number(prompt(messages.pointsToWin));

while (points.playerOne < pointsToWin && points.playerTwo < pointsToWin) {
  console.log(line(40));
  const userOneChoice = prompt(messages.playerOneChoice, { echo: '*'});
  const userTwoChoice = prompt(messages.playerTwoChoice, { echo: '*'});
  console.log(line(40));

  if (!availableChoices.includes(userOneChoice) || !availableChoices.includes(userTwoChoice)) {
    console.log('Vigane valik!'.red);
    continue;
  }

  if (userOneChoice === 'q' || userTwoChoice === 'q') {
    console.log('Mäng lõpetatud!'.bgRed.white);
    break;
  }

  console.log(detectWinner(userOneChoice, userTwoChoice));
  displayPoints();
}

if (points.playerOne > points.playerTwo) {
  console.log(messages.playerOneWin.green);
} else if (points.playerOne === points.playerTwo){
  console.log(messages.draw.green);
} else {
  console.log(messages.playerTwoWin.green);
}

