const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

const match = async (password, hash) => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};

module.exports = { hashPassword, match };
