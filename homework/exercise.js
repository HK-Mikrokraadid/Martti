const letter = "Hello!"; 

for (let c = 0; c < letter.length; c++) {
    console.log(letter.charAt(c).repeat(c + 1)); // Ilma tühikuta ei loe H!
}