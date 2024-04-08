const prompt = require('prompt-sync')();
const fs = require('fs');

let todo = '';

while (todo != 'quit') {
  todo = prompt('Sisesta tegevus: ');
  try {
    fs.appendFileSync('todos.txt', `${todo}\n`);
  } catch (error) {
    console.log('Tekkis viga faili salvestamisel.');
  }
}

