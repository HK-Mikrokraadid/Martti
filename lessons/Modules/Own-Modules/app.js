/* eslint-disable no-console */
const usersService = require('./usersService');

const users = usersService.getUsers();

console.log(users);

const user = usersService.getUserByFirstName('John');

console.log(user);
