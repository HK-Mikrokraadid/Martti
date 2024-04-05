const usersService = require("./usersService");

const users = usersService.getUsers();

const user = usersService.getUserByFirstName("John");
