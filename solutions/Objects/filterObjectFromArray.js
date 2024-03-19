// Objektide Massiivis Otsimine

// Antud on massiiv, mis sisaldab objekte, igaüks esindab ühte isikut,
// kellel on `name` ja `age` omadused.
// Kirjutage kood, mis otsib massiivist kõige vanema inimese ja väljastab tema nime.

const people = [
  { name: 'John', age: 25 },
  { name: 'Mary', age: 31 },
  { name: 'Chris', age: 16 }
];

let oldestPerson = people[0]; // Loob muutuja, kuhu salvestatakse kõige vanema inimese objekt

for (let i = 1; i < people.length; i++) {
  if (people[i].age > oldestPerson.age) { // Kontrollib, kas inimese vanus on suurem kui kõige vanema inimese vanus
    oldestPerson = people[i]; // Kui on, siis asendab kõige vanema inimese objekti uue objektiga
  }
}

console.log(`Kõige vanem inimene on: ${ oldestPerson.name }`); // Kuvab kõige vanema inimese nime