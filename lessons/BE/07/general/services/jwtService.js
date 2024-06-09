const jwt = require('jsonwebtoken');

// eslint-disable-next-line import/extensions
const config = require('../../config');

const sign = (user) => {
  const payload = {
    id: user.id,
    role: user.role,
  };
  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
  return token;
};

const verify = (token) => {
  try {
    const payload = jwt.verify(token, config.jwtSecret);
    return payload;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    return false;
  }
};

module.exports = { sign, verify };
