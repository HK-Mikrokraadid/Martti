/* eslint-disable no-console */
// Maksimaalse Arvu Leidmine

// Kirjuta funktsioon `findMax`, mis võtab parameetrina arvude massiivi
// ja tagastab nende seast suurima.

function findMax(numbersArray) {
  let max = numbersArray[0];
  for (let i = 1; i < numbersArray.length; i += 1) {
    if (numbersArray[i] > max) {
      max = numbersArray[i];
    }
  }
  return max;
}

console.log(findMax([5, -2, 10])); // 10

console.log(findMax([5, 2, 7, 1, 6])); // 7

console.log(findMax([17, 15, 20, 19, 18])); // 20
