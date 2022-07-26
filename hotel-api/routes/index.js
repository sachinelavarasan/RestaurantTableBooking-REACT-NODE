const auth = require('./auth');

const profile = require('./profile');

const user = require('./api/user');
const hotel = require('./api/hotel');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Hotel');
  });
  app.use('/auth', auth);

  app.use('/profile', profile);

  app.use('/api/user', user);
  app.use('/api/hotel', hotel);
};
