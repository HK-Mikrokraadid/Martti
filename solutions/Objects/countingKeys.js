
// Ülesanne 1: Objekti Loendamine

// Looge objekt, mis sisaldab erinevaid puuvilju ja nende koguseid.
// Seejärel kirjutage kood, mis loeb kokku, mitu erinevat tüüpi puuvilju on objektis.


const fruits = {
  apple: 5,
  banana: 2,
  orange: 7
};

const keysArray = Object.keys(fruits); // Tekitab massiivi, kus on kõik objekti võtmed
console.log(keysArray.length); // Kuvab massiivi pikkuse, mis on võrdne objekti võtmete arvuga