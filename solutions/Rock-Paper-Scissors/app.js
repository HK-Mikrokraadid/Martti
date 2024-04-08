/* eslint-disable no-console */
const prompt = require('prompt-sync')();
// eslint-disable-next-line no-unused-vars
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
  computer: 0,
};

function displayPoints() {
  console.log('------ Hetke seis -------');
  console.log('| Mängija 1 | Arvuti |');
  console.log(`|${line(23)}|`);
  console.log(`|     ${points.playerOne}     |     ${points.computer}     |`);
  console.log(line(25));
}

function detectWinner(userOneChoice, computerChoice) {
  if (userOneChoice === computerChoice) {
    return messages.draw.green;
  } if ((userOneChoice === '1' && computerChoice === '3')
        || (userOneChoice === '2' && computerChoice === '1')
        || (userOneChoice === '3' && computerChoice === '2')) {
    points.playerOne += 1;
    return messages.playerOneWin.green;
  }
  points.computer += 1;
  return messages.computerWin.green;
}

function randomComputerChoice() {
  const choicesCount = availableChoices.length - 2; // -2 because we don't want to include 'q'
  const randomChoice = Math.floor(Math.random() * choicesCount) + 1;
  return availableChoices[randomChoice].choice;
}

function isValidChoice(choice) {
  return availableChoices.some((item) => item.choice === choice);
}

function getChoiceName(choice) {
  return availableChoices.find((item) => item.choice === choice).name;
}

const pointsToWin = Number(prompt(messages.pointsToWin));

while (points.playerOne < pointsToWin && points.computer < pointsToWin) {
  console.log(line(40));
  const userOneChoice = prompt(messages.playerOneChoice, { echo: '*' });
  const computerChoice = randomComputerChoice();
  console.log(line(40));

  if (!isValidChoice(userOneChoice)) {
    console.log('Vigane valik!'.red);
  }

  console.log(line(40));
  console.log(userOneChoice, computerChoice);
  console.log(`Esimene mängija valis: ${getChoiceName(userOneChoice)}`);
  console.log(`Arvuti valis: ${getChoiceName(computerChoice)}`);

  console.log(detectWinner(userOneChoice, computerChoice));

  if (userOneChoice === 'q') {
    console.log('Mäng lõpetatud!'.bgRed.white);
    break;
  }

  displayPoints();
}

if (points.playerOne > points.computer) {
  console.log(messages.playerOneWin.green);
} else if (points.playerOne === points.computer) {
  console.log(messages.draw.green);
} else {
  console.log(messages.computerWin.green);
}
