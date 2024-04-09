const arr = [1, 3, 5, 7, 9];
const target = 5;
let foundIndex = -1;

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] === target) {
    foundIndex = i;
    break;
  }
}
// eslint-disable-next-line no-console
console.log(foundIndex);
