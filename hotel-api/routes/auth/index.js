const { check } = require('express-validator/check');

const router = require('express').Router();
const controller = require('./auth.controller');
const auth = require('./auth.service')();

router.post(
  '/login',
  [check('us_password').not().isEmpty(), check('us_email').not().isEmpty()],
  controller.login
);

// sends email for resetting password.
router.post(
  '/forgot-password',
  [check('us_email').not().isEmpty()],
  controller.forgotPassword
);

// resets old pw with new one.
router.post(
  '/password-reset',
  [check('password').not().isEmpty(), check('c_password').not().isEmpty()],
  controller.resetPassword
);
router.get('/findUserByToken', controller.findUserByToken);



// register the org-admin.
router.post(
  '/register/org-admin',
  [
    check('email').not().isEmpty(),
    check('full_name').not().isEmpty(),
    check('restaurant_name').not().isEmpty(),
    check('password').not().isEmpty(),
  ],
  controller.registerOrgAdmin
);
router.post('/register/findOrgName', controller.findOrgName);

// verify the org-admin.
router.get('/verify-user/:userId', controller.verifyUser);

module.exports = router;
