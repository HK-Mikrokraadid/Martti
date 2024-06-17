const config = {
  jwtSecret: 'secret-password',
  db: {
    database: 'database',
    user: 'user',
    password: 'password',
    port: 3306,
    connectTimeout: 5000, // timeout, kui andmebaasiga ühendust ei saa
  },
};

module.exports = config;
