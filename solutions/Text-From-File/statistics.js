/*
Harjutus 2
Kirjuta rakendus, mis väljastab konsooli:

- tekstis olevate sõnade arvu
- tekstis olevate tähtede arvu
- tesktis olevate unikaalsete sõnade arvu
- kõige sagedamini esinevad 10 sõna

Kasuta eelmises harjutuses kasutatud teksti.

Võid kasutada objekti või massiivi, et hoida sõnade ja nende esinemiste arvu.
*/

/* eslint-disable no-console */
const fs = require('fs');

const data = fs.readFileSync('text.txt', 'utf8');

// Tükeldame teksti sõnadeks nii tühiku kui ka reavahetuse kohalt
const words = data.split(/\s+/);

// Teisendame kõik tähed väiketähtedeks
for (let i = 0; i < words.length; i += 1) {
  words[i] = words[i].toLowerCase();
}

// Loome unikaalsete sõnade hulga (Set - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
const uniqueWords = new Set(words);

// Loome sõnade esinemiste arvu mapi (Map - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
const wordCount = new Map();

// Leiame iga sõna esinemiste arvu
// (kasutame selleks unikaalsete sõnade hulka, sest me ei taha sama sõna mitu korda üle lugeda)
for (let i = 0; i < uniqueWords.size; i += 1) {
  wordCount.set(words[i], words.filter((w) => w === words[i]).length);
}

// Teisendame mapi massiiviks, et saaksime selle sorteerida
const wordCountArray = Array.from(wordCount);

// Sorteerime massiivi sõnade esinemiste arvu järgi
const sortedWordCount = wordCountArray.sort((a, b) => b[1] - a[1]);

// Väljastame statistika
console.log(`Sõnade arv failis: ${words.length}`);
console.log(`Tähtede arv failis (ilma tühikuteta): ${data.replace(/\s+/g, '').length}`);
console.log(`Unikaalsete sõnade arv failis: ${uniqueWords.size}`);
console.log('Kõige sagedamini esinevad 10 sõna:');
for (let i = 0; i < 10; i += 1) {
  console.log(`${sortedWordCount[i][0]}: ${sortedWordCount[i][1]}`);
}
