/* eslint-disable max-len */
// Objekti Elementide Filtreerimine

// Antud on objekt, mis sisaldab erinevate toodete hindu.
// Kirjutage kood, mis loob uue objekti, kuhu kuuluvad ainult need tooted,
// mille hind on väiksem kui `10`.

const prices = {
  book: 15,
  pen: 5,
  notebook: 8,
  pencil: 2,
};

const filteredPrices = {}; // Loob uue tühja objekti
const priceLevel = 10; // Loob muutuja, mis sisaldab hinna piirväärtust

const keysAndValues = Object.entries(prices); // Loob massiivi, kus on kõik objekti võtmed ja väärtused (iga võti ja väärtus on omakorda massiivi sees)

for (let i = 0; i < keysAndValues.length; i += 1) {
  if (keysAndValues[i][1] < priceLevel) { // Kontrollib, kas väärtus on väiksem kui hinna piirväärtus (esimeses massiivi elemendis on võti, teises väärtus)
    // eslint-disable-next-line prefer-destructuring
    filteredPrices[keysAndValues[i][0]] = keysAndValues[i][1]; // Lisab uude objekti võtme ja väärtuse
  }
}
// eslint-disable-next-line no-console
console.log(filteredPrices); // Kuvab uue objekti
