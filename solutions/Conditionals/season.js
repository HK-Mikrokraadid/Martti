/* eslint-disable no-console */
const numberOfMonth = 5;

if (numberOfMonth === 12 || numberOfMonth === 1 || numberOfMonth === 2) {
  console.log('Talv');
} else if (numberOfMonth >= 3 && numberOfMonth <= 5) {
  console.log('Kevad');
} else if (numberOfMonth >= 6 && numberOfMonth <= 8) {
  console.log('Suvi');
} else if (numberOfMonth >= 9 && numberOfMonth <= 11) {
  console.log('Sügis');
} else {
  console.log('Vigane kuu number');
}
