// Objekti Väärtuste Summa

// Antud on objekt, mis sisaldab erinevate inimeste vanuseid. Kirjutage kood,
// mis arvutab ja väljastab kõikide inimeste vanuste summa.

const ages = {
  John: 25,
  Mary: 31,
  Chris: 16
};

const valuesArray = Object.values(ages); // Tekitab massiivi, kus on kõik objekti väärtused

let sum = 0; // Loob muutuja, kuhu salvestatakse väärtuste summa

for (let i = 0; i < valuesArray.length; i++) {
  sum += valuesArray[i]; // Liidab kokku kõik massiivi väärtused
}

console.log(sum); // Kuvab väärtuste summa