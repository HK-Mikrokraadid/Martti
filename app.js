// 6. loeng

// Kirjeldus: Antud on massiiv, mis sisaldab mitmeid objekte, iga objekt esindab ühte raamatut, millel on title, author ja read (boolean, mis näitab, kas raamat on loetud või mitte) omadused. Kirjutage kood, mis loendab, mitu raamatut on juba loetud ja mitu on veel lugemata.


/* let books = [
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

// Kirjeldus: Kirjuta funktsioon circleArea, mis arvutab ringi pindala raadiuse põhjal. Ringi pindala arvutamise valem on πr². Kasuta Math.PI väärtust π jaoks.

/* function circleArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
}

const result = circleArea(143);
console.log(result); */

// Kirjeldus: Kirjuta kood, mis võtab sisendiks stringi ja tagastab selles stringis leiduva kõige pikema sõna. Kui on mitu sama pikkusega kõige pikemat sõna, tagasta esimene selline sõna.

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


/* // Kirjeldus: Kirjuta kood, mis võtab sisendiks stringi ja tagastab selles stringis leiduva kõige pikema sõna. Kui on mitu sama pikkusega kõige pikemat sõna, tagasta esimene selline sõna.
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

const usernames = ['Martti', 'Ain', 'Toomas', 'Aili'];

const username = 'Martti';

if (usernames.includes(username.trim())) {
    console.log('Oled sisse logitud');
} else {
    console.log('Tundmatu kasutaja');
}