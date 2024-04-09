/* eslint-disable no-console */
const prompt = require('prompt-sync');
const showLine = require('./showLine');

const pr = prompt();

const menuItems = [
  {
    id: 1,
    title: 'List',
  },
  {
    id: 2,
    title: 'Lisa',
  },
  {
    id: 3,
    title: 'Muuda olekut',
  },
  {
    id: 4,
    title: 'Kustuta',
  },
  {
    id: 5,
    title: 'Lõpeta',
  },
];

function createMainMenu() {
  let menuString = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const item of menuItems) {
    menuString += `| ${item.id} - ${item.title} `;
  }
  menuString += '|';
  return menuString;
}

function showMainMenu() {
  const menu = createMainMenu(menuItems);
  console.log('TODO rakendus'.bgBlue.yellow);
  showLine(menu.length);
  console.log(menu);
  showLine(menu.length);
  const choice = pr('Vali tegevus: ');
  return choice;
}

module.exports = showMainMenu;
