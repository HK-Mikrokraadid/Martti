/* eslint-disable no-console */
const fs = require('fs');

/* fs.readFile('data.txt', 'utf-8', function (error, data) {
    if (error) {
        console.log('Tekkis viga faili lugemisel');
    } else {
        console.log(data);
    }
}); */

/* try {
   const data = fs.readFileSync('data1.txt', 'utf-8');
   console.log(data);
} catch (error) {
    console.log('Tekkis viga faili lugemisel.');
} */

const todos = [
  {
    id: 1,
    todo: 'Mine poodi',
  },
  {
    id: 2,
    todo: 'Käi jala',
  },
];

try {
  fs.writeFileSync('data.txt', JSON.stringify(todos));
} catch (error) {
  console.log('Tekkis viga faili kirjutamisel:');
  console.log(error.message);
}

try {
  const data = fs.readFileSync('data.txt', 'utf-8');
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  console.log(typeof parsedData);
} catch (error) {
  console.log('Tekkis viga faili lugemisel.');
}

console.log('Töö lõpp!');
