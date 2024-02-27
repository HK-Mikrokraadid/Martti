let arr = [1, 3, 5, 7, 9];
let target = 5;
let foundIndex = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        foundIndex = i;
        break;
    }
}

console.log(foundIndex);