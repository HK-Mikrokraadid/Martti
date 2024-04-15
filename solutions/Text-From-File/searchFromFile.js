/*
Harjutus 1
Võta siia lisatud failist Tõde ja Õigus katkend tekst ja kopeeri see oma NodeJS rakenduse faili.
Loo rakendus, mis küsib kasutajalt sõna ja väljastab konsooli, mitu korda see sõna tekstis esineb.
 */

// Kasutame kasutajalt sisendi küsimiseks readline moodulit, kuna see toetab ka täpitähti
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fs = require('fs');

// Loeme failist teksti
const data = fs.readFileSync('text.txt', 'utf8');

// Tükeldame teksti sõnadeks nii tühiku kui ka reavahetuse kohalt
const words = data.split(/\s+/);

// Küsime kasutajalt otsitavat sõna ja salvestame selle muutujasse 'term'
readline.question('Sisesta otsitav sõna: ', (term) => {
  // Kasutame otsingus väiketähti
  const wordCount = words.filter((w) => w.toLowerCase() === term.toLocaleLowerCase()).length;
  // eslint-disable-next-line no-console
  console.log(`Otsitavat sõna esineb tekstis ${wordCount} korda.`);
  readline.close();
});
