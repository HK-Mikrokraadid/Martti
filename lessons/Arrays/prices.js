const prices = [1, 10, 3, 4, 5];

let biggestNumber = 0;

for (let i = 0; i < prices.length; i ++) {
    if (prices[i] > biggestNumber) {
        biggestNumber = prices[i];
    }
}

console.log(biggestNumber);
