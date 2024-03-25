// Leia Kõige Pikem Sõna Stringis

// Kirjuta kood, mis võtab sisendiks stringi ja tagastab selles stringis leiduva kõige pikema sõna.
// Kui on mitu sama pikkusega kõige pikemat sõna, tagasta esimene selline sõna.

function findLongestWord(sentence) {
    const words = sentence.split(' ');

    let longestWord = words[0];

    for (let i = 1; i < words.length; i ++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

const sentence = "JavaScript on väga võimas programmeerimiskeel";

console.log(findLongestWord(sentence));
