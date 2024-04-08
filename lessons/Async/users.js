const axios = require('axios');

async function getData() {
    const usersData = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(usersData);
}

getData();
console.log('Töö lõpp');