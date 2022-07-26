const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../', '.env') });

module.exports = {
  basicAuth: {
    username: 'hotel',
    password: process.env.BASIC_AUTH_PASSWORD,
  },
};
