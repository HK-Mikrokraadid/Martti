/*
Hinded
Kirjuta programm, mis annab hindele kirjelduse. Programm peaks võtma hinnet (nt. 90, 75) ja:

Trükib "Suurepärane" kui hinne on 90 või rohkem.
Trükib "Hea" kui hinne on 80 kuni 89.
Trükib "Rahuldav" kui hinne on 70 kuni 79.
Trükib "Kasin" kui hinne on 60 kuni 69.
Trükib "Ebaõnnestunud" kui hinne on alla 60.
*/
const points = 60;

if (points >= 90) {
  console.log('Suurepärane');
} else if (points >= 80 && points < 90) {
  console.log('Hea');
} else if (points >= 70) {
  console.log('Rahuldav');
} else if (points >= 60) {
  console.log('Kasin');
} else {
  console.log('Ebaõnnestunud');
}

/*
Liiklusfoori Värvid
Kirjuta programm, mis simuleerib liiklusfoori tööd. Kasutaja sisestab värvi ("roheline", "kollane", "punane") ja programm:

Trükib "Mine" kui värv on roheline.
Trükib "Ole valmis" kui värv on kollane.
Trükib "Seisa" kui värv on punane.
*/

const color = 'punane';

if (color === 'roheline') {
  console.log('Mine');
} else if (color === 'kollane') {
  console.log('Ole valmis');
} else {
  console.log('Seisa');
}
