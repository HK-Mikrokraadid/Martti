const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);

console.log(sum);

/* let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum = sum + numbers[i];
}

console.log(sum); */
