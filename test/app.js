const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What\'s your name?', (name) => {
  // eslint-disable-next-line no-console
  console.log(`Hi ${name}!`);
  rl.close();
});
