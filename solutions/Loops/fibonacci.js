const N = 6;
const elements = [];
let lastElement = 0;
let result = 0;

if (N >= 1) {
  elements.push(0);
}

if (N >= 2) {
  elements.push(1);
}

for (let i = 2; i < N; i++) {
  console.log(elements);
  const sum = elements[i - 2] + elements[i - 1];
  elements.push(sum);
}

console.log(elements);
