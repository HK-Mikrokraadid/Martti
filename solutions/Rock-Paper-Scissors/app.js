const prompt = require('prompt-sync')();
const colors = require('colors');
const messages = require('./messages');

console.log(messages.gameMessage.bgGreen.black);

function line(length) {
  return '-'.repeat(length);
}

const availableChoices = [
  {
    choice: '1',
    name: 'Kivi',
  },
  {
    choice: '2',
    name: 'Paber',
  },
  {
    choice: '3',
    name: 'Käärid',
  },
  {
    choice: 'q',
    name: 'Lõpeta mäng',
  },
];

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

// function to check if choice is valid
function isValidChoice(choice) {
  return availableChoices.some((item) => item.choice === choice);
}

function getChoiceName(choice) {
  return availableChoices.find((item) => item.choice === choice).name;
}

const pointsToWin = Number(prompt(messages.pointsToWin));

while (points.playerOne < pointsToWin && points.playerTwo < pointsToWin) {
  console.log(line(40));
  const userOneChoice = prompt(messages.playerOneChoice, { echo: '*'});
  const userTwoChoice = prompt(messages.playerTwoChoice, { echo: '*'});
  console.log(line(40));

  if (!isValidChoice(userOneChoice) || !isValidChoice(userTwoChoice)) {
    console.log('Vigane valik!'.red);
    continue;
  }

  console.log(line(40));
  console.log(userOneChoice, userTwoChoice);
  console.log(`Esimene mängija valis: ${getChoiceName(userOneChoice)}`);
  console.log(`Teine mängija valis: ${getChoiceName(userTwoChoice)}`);

  console.log(detectWinner(userOneChoice, userTwoChoice));

  if (userOneChoice === 'q' || userTwoChoice === 'q') {
    console.log('Mäng lõpetatud!'.bgRed.white);
    break;
  }
  
  displayPoints();
}

if (points.playerOne > points.playerTwo) {
  console.log(messages.playerOneWin.green);
} else if (points.playerOne === points.playerTwo){
  console.log(messages.draw.green);
} else {
  console.log(messages.playerTwoWin.green);
}

