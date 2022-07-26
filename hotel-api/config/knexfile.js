const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../.env'),
});
const knexOptions = {
  client: 'mysql',
  connection: {
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    timezone: 'utc',
    user: process.env.DB_USER,
  },
  debug: false,
  migrations: {
    directory: path.join(__dirname, '../migrations'),
    tableName: 'migrations',
  },
  seeds: {
    directory: path.join(__dirname, '../seeds'),
  },
};

module.exports = knexOptions;
