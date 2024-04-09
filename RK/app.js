const axios = require('axios');

async function getData() {
  const response = await axios.get('https://api.riigikogu.ee/api/plenary-members');
  console.log(response.data[0]);
}

getData();
