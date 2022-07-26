/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable prefer-destructuring */
const passport = require('passport');
const passportJWT = require('passport-jwt');
const User = require('../models/user.model');

const { ExtractJwt, Strategy: JwtStrategy } = passportJWT;

const jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET;

module.exports = () => {
  const strategy = new JwtStrategy(jwtOptions, async (jwtPayload, next) => {
    const userId = jwtPayload.user_id;

    try {
      const user = await User.findByCond({ user_id: userId });
      user.loggedAs = user ? true : false;

      return next(null, user);
    } catch (err) {
      return next(null, false);
    }
  });

  passport.use(strategy);

  return {
    initialize: () => passport.initialize(),
    // checks token and if valid add a user instance to req object , else throws error
    authenticate: (req, res, next) =>
      passport.authenticate('jwt', (err, user) => {
        const loggedUser = user;

        req.user = loggedUser;

        if (!user) {
          return res.status(401).send('Unauthorized');
        }
        return next(null, user);
      })(req, res, next),

    isAdmin: (req, res, next) => {
      if (req.user) {
        return next();
      }
      return res.status(401).send('Unauthorized');
    },
  };
};
