// Lahendus 1

const numbers = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = numbers.length - 1; i >= 0; i -= 1) {
  reversed.push(numbers[i]);
}
// eslint-disable-next-line no-console
console.log(reversed);

// Lahendus 2

const numbers1 = [1, 2, 3, 4, 5];

const reversed1 = numbers1.reverse();
// eslint-disable-next-line no-console
console.log(reversed1);
