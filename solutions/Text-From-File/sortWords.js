/*
Harjutus 3
Kirjuta rakendus, mis loeb tekstifaili text.txt,
sorteerib sõnad tähestikulises järjekorras ja kirjutab need uude faili sorted.txt.

Kasuta esimeses harjutuses kasutatud teksti.

Vihje: kasuta sort meetodit, et sorteerida sõnu tähestikulises järjekorras.
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
// Sorteerime sõnad
const sortedWords = words.sort();

// Lisame igale sõnale reavahetuse
const sortedWordsFile = sortedWords.join('\n');

// Kirjutame sõnad faili
fs.writeFileSync('sorted.txt', sortedWordsFile);

console.log('Sõnad on faili kirjutatud.');
