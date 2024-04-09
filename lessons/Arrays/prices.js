const prices = [1, 10, 3, 4, 5];

let biggestNumber = 0;

for (let index = 0; index < prices.length; index += 1) {
  const element = prices[index];
  if (element > biggestNumber) {
    biggestNumber = element;
  }
}
// eslint-disable-next-line no-console
console.log(biggestNumber);
