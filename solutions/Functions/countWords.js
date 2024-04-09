// Sõnade Arvu Loendamine

// Kirjuta funktsioon `countWords`, mis võtab parameetrina sõne
// ja tagastab sõnade arvu selles sõnes.
// Eeldame, et sõnad on eraldatud tühikutega.

function countWords(sentence) {
  const words = sentence.split(' ');
  return words.length;
}
// eslint-disable-next-line no-console
console.log(countWords('Tere tulemast JavaScripti maailma')); // 4
