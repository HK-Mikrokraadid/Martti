const mysql = require('mysql2');
const config = require('./config');
console.log(config);

const pool = mysql.createPool(config.db).promise();

module.exports = pool;
