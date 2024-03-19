// Objektide ja Massiivide Kombineerimine

// Antud on massiiv, mis sisaldab mitmeid objekte, iga objekt esindab ühte raamatut,
// millel on `title`, `author` ja `read` (boolean, mis näitab, kas raamat on loetud või mitte) omadused.
// Kirjutage kood, mis loendab, mitu raamatut on juba loetud ja mitu on veel lugemata.

const books = [
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

console.log(`${isRead} loetud, ${books.length - isRead} lugemata.`);