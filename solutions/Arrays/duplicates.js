// Lahendus 1

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (!uniqueNumbers.includes(numbers[i])) {
    uniqueNumbers.push(numbers[i]);
  }
}
// eslint-disable-next-line no-console
console.log(uniqueNumbers);
