const router = require('express').Router();
const controller = require('./controller');

router.post('/mux', controller.mux);

module.exports = router;
