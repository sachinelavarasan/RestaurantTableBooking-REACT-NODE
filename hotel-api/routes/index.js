const auth = require('./auth');
const webhook = require('./webhook');

const profile = require('./profile');

const user = require('./api/user');
const hotel = require('./api/hotel');
// const comments = require('./api/comments');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('JungleCat');
  });
  app.use('/auth', auth);
  app.use('/webhook', webhook);

  app.use('/profile', profile);

  app.use('/api/user', user);
  app.use('/api/hotel', hotel);
};
