const N = 6;
const elements = [];

if (N >= 1) {
  elements.push(0);
}

if (N >= 2) {
  elements.push(1);
}

for (let i = 2; i < N; i++) {
  const sum = elements[i - 2] + elements[i - 1]; // Fibonacci jada järgmine element on kahe eelneva elemendi summa
  elements.push(sum);
}

console.log(elements.join(' ')); // join() meetod tagastab massiivi elemendid stringina, eraldades need parameetriga määratud sümboliga. Kui parameeter puudub, eraldatakse elemendid koma ja tühikuga.
