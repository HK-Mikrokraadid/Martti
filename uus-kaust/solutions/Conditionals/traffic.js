const distance = 15;
const traffic = 'ummik';

let speed;

if (traffic === 'normaalne'){
  speed = 50;
} else if (traffic ==='väga tihe'){
  speed = 30;
} else if (traffic ==='ummik'){
  speed = 10;
}

let time = distance / speed;

console.log('Umbkaudseks ajaks kulub ' + time + ' tundi.');
