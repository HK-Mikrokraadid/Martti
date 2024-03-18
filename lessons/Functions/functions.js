/* function greet(name) {
    const greeting = 'Hello ' + name + '!';
    return greeting;
}

const result = greet('Martti');

console.log(result); */

/* function greet(name, language) {
    if (language === 'ee') {
        const greeting = 'Tere ' + name + '!';
        return greeting;
    } else {
        const greeting = 'Hello ' + name + '!';
        return greeting;
    }
    
}

const result = greet('Martti', 'te');

console.log(result);
 */

/* function calculator(number1, number2, operator) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        return 'Vähemalt üks argumentidest ei ole number'
    }
    if (operator === '+') {
        const result = number1 + number2;
        return result;
    }
    if (operator === '-') {
        const result = number1 - number2;
        return result;
    }
    if (operator === '*') {
        const result = number1 * number2;
        return result;
    }
    if (operator === '/') {
        if (number2 !== 0) {
            const result = number1 / number2;
            return result;
        } 
        
        return 'Nulliga ei saa jagada';
    }
    return 'Tundmatu tehe';
}

const result1 = calculator('a', 0, '+');
console.log(result1);
 */

function randomNumber(max) {
    const random = Math.random() * max;
    const rounded = Math.ceil(random);
    return rounded;
}

const results = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 1000000; i++) {
    const result = randomNumber(6);
    results[result - 1] = results[result - 1] + 1;
}

console.log(results);
