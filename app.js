// 6. loeng

// Kirjeldus: Antud on massiiv, mis sisaldab mitmeid objekte,
// iga objekt esindab ühte raamatut, millel on title, author ja
// read (boolean, mis näitab, kas raamat on loetud või mitte) omadused.
// Kirjutage kood, mis loendab, mitu raamatut on juba loetud ja mitu on veel lugemata.

/* const books = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        read: true
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        read: false
    },
    {
        title: '1984',
        author: 'George Orwell',
        read: true
    },
];

let isRead = 0;

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if(book.read) {
        isRead = isRead + 1;
    }
}

console.log('Loetud: ', isRead);
console.log('Lugemata: ', books.length - isRead);
 */

// Kirjeldus: Kirjuta funktsioon circleArea, mis arvutab ringi pindala raadiuse põhjal.
// Ringi pindala arvutamise valem on πr². Kasuta Math.PI väärtust π jaoks.

/* function circleArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
}

const result = circleArea(143);
console.log(result); */

// Kirjeldus: Kirjuta kood, mis võtab sisendiks stringi ja
// tagastab selles stringis leiduva kõige pikema sõna.
// Kui on mitu sama pikkusega kõige pikemat sõna, tagasta esimene selline sõna.

/* const sentence = "JavaScript on väga võimas programmeerimiskeel";

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    console.log(words);

    let longestWord = words[0];

    for (let i = 1; i < words.length; i ++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(findLongestWord(sentence)); */

/* // Kirjeldus: Kirjuta kood, mis võtab sisendiks stringi
ja tagastab selles stringis leiduva kõige pikema sõna.
    Kui on mitu sama pikkusega kõige pikemat sõna, tagasta esimene selline sõna.
const str = "JavaScript on väga võimas programmeerimiskeel.";
const longestWord = pikimSona(str);
function pikimSona(str) {

    const words = str.split(' ');

    // Leiame sõnade pikkuste massiivi
    const wordLengths = words.map(word => word.length);

    // Leiame pikima sõna pikkuse
    const maxWordLength = Math.max(...wordLengths);

    // Leiame esimese esinemisjuhu, kus sõna pikkus on maksimaalne
    const longestWordIndex = wordLengths.findIndex(length => length === maxWordLength);

    // Tagastame pikima sõna
    return words[longestWordIndex];
  }

  // Näide
  console.log(`Pikim sõna stringis on: "${longestWord}"`);
 */

/* const usernames = ['Martti', 'Ain', 'Toomas', 'Aili'];

const username = 'Martti';

if (usernames.includes(username.trim())) {
    console.log('Oled sisse logitud');
} else {
    console.log('Tundmatu kasutaja');
} */

/* function test() {
    return {
      javascript: "fantastic"
    };
  }

  const r = test();
  try {
    console.log(r.javascript);
  } catch (e) {
    console.log('no - it broke: ' + typeof r);
  }

  console.log(`
  Rida 1,
  Rida 2,
  Rida 3,
  `); */

/*   function cube(number) {
    return Math.pow(number, 3);
  } */

/* const first = 'kivi';
const second = 'käärid';

if (first === second) {
    console.log('viik');
} else if (
    first === 'kivi' && second === 'käärid' ||
    first === 'käärid' && second === 'paber' ||
    first === 'paber' && second === 'kivi') {
    fistPoints ++;
} else {
    secondPoints ++;
} */

/* console.log('esimene rida,\nteine rida,\nkolmas rida'); */

/* console.log(`
esimene rida,
teine rida,
kolmas rida
`); */

/* function test() {
    return {
            javascript: "fantastic"
        };
}

const r = test();

console.log(r); */

// console.log(r.javascript);

/* function helloWorld() {
    return 'Hello World!';
}

console.log(helloWorld());

 */

/* const age = 20;

console.log('Vanus on ' + age);
console.log('Vanus on', age);
console.log(`Vanus on ${age}`);

const string = 'midagi';
 */

// eslint-disable-next-line no-unused-vars
function callbackExample() {
  // eslint-disable-next-line no-console
  console.log('Callback function has been called!');
}

function greet(name, callback) {
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
  callback();
}

greet('Martti', () => {
  // eslint-disable-next-line no-console
  console.log('Hello from callback function!');
});
