const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
// eslint-disable-next-line no-console
console.log(sum);
