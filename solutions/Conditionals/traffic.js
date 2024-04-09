const distance = 15;
const traffic = 'ummik';

let speed;

if (traffic === 'normaalne') {
  speed = 50;
} else if (traffic === 'väga tihe') {
  speed = 30;
} else if (traffic === 'ummik') {
  speed = 10;
}

const time = distance / speed;

// eslint-disable-next-line no-console
console.log(`Umbkaudseks ajaks kulub ${time} tundi.`);
