// Tähestiku Sagedus Massiivis

// Kirjuta kood, mis loeb etteantud sõnede massiivist, kui mitu korda iga täht esineb kõikides sõnades kokku.
// Tagasta objekt, kus võtmed on tähed ja väärtused on vastavad esinemiskorrad.

function countLetters(wordsArray) {
  let result = {}; // Loob tühja objekti
  for (let i = 0; i < wordsArray.length; i++) { // Loob tsükli, mis käib läbi kõik sõnad
    for (let j = 0; j < wordsArray[i].length; j++) { // Loob tsükli, mis käib läbi kõik tähed sõnas
      if (result[wordsArray[i][j]]) { // Kontrollib, kas tähel on juba vastav võti objektis
        result[wordsArray[i][j]]++; // Kui on, siis suurendab selle väärtust ühe võrra
      } else {
        result[wordsArray[i][j]] = 1; // Kui ei ole, siis loob uue võtme ja annab sellele väärtuseks 1
      }
    }
  }
  return result;
}

const words = ['hello', 'world', 'javascript'];

console.log(countLetters(words)); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 2, d: 1, j: 1, a: 2, v: 1, s: 1, c: 1, p: 1, t: 1 }
