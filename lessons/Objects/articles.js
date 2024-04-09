const articles = [
  {
    title: 'Pealkiri 1',
    content: 'See on tähtis artikkel',
    author: 'John Doe',
    isReaded: true,
    keywords: ['Kool', 'Õpetaja'],
    countOfLetters: 1500,
  },
  {
    title: 'Pealkiri 2',
    content: 'See on veel tähtsam artikkel',
    author: 'Jane Doe',
    isReaded: true,
    keywords: ['Õpilane', 'Kool'],
    countOfLetters: 1000,
  },
  {
    title: 'Pealkiri 3',
    content: 'See on vähetähtis artikkel',
    author: 'John Doe',
    isReaded: false,
    keywords: ['Loodus'],
    countOfLetters: 3000,
  },
];

// Lisa omadus tähemärkide arv
// Väljasta tähemärkide arv kokku mingi teema artiklite kohta

const keyword = 'Kool';
let sum = 0;

for (let i = 0; i < articles.length; i += 1) {
  if (articles[i].keywords.includes(keyword)) {
    // console.log(articles[i].title, articles[i].countOfLetters);
    sum += articles[i].content.length;
  }
}
// eslint-disable-next-line no-console
console.log(sum);

/* for (let i = 0; i < articles.length; i++) {
  for (let j = 0; j < articles[i].keywords.length; j++){
    if (articles[i].keywords[j] === keyword) {
      console.log(articles[i].title);
      console.log(articles[i].content);
    }
  }
}
 */

/* for (let i = 0; i < articles.length; i++) {
  if (articles[i].author === 'John Doe') {
    console.log(articles[i].title);
  }
} */

// Ülesanne
// Lisa artiklite objektidele omadus, mis kirjeldab, kas artikkel on loetud või mitte
// Kuva ainult loetud artiklid

/* for (let i = 0; i < articles.length; i++) {
  if (articles[i].isReaded) {
    console.log(articles[i].title);
    console.log(articles[i].content);
  }
} */
