const router = require('express').Router();
const auth = require('../auth/auth.service')();
const profile = require('./profile');

router.get('/get', auth.authenticate, profile.getProfile);
router.get('/organisation', auth.authenticate, profile.getOrganisation);


module.exports = router;
