const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config');

module.exports = {
  comparePasswords: (passwordInHand, passwordInDBHash) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(passwordInHand, passwordInDBHash, (err, result) => {
        if (result) {
          resolve(result);
        }
        if (err) {
          reject(err);
        }
        reject(new Error('Passwords not matching!'));
      });
    });
  },

  encryptPassword: (password) => {
    if (!password) throw new Error('password is required');

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return { password: hash, salt };
  },

  createJWTToken: (user) => {
    return jwt.sign(user, process.env.JWT_SECRET);
  },

  basic: (req, res, next) => {
    const auth = config.basicAuth;
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [username, password] = Buffer.from(b64auth, 'base64')
      .toString()
      .split(':');

    if (
      username &&
      password &&
      username === auth.username &&
      password === auth.password
    ) {
      return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="junglecat Auth"');
    return res.status(401).send('Authentication required.');
  },
};
