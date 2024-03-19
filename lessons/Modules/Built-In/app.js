const fs = require('fs');

const objs = [
  {
    name: 'John',
    age: 25
  },
  {
    name: 'Jane',
    age: 24
  }
];

const newFile = 'users.json';
const content = JSON.stringify(objs, null, 2);
fs.writeFileSync(newFile, content, 'utf-8');

const file = fs.readFileSync(newFile, 'utf-8');

console.log(JSON.parse(file));