const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const expressValidator = require('express-validator');
const cors = require('cors');
const authService = require('./routes/auth/auth.service')();

const app = express();
const auth = require('./utils/auth');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ limit: '2000mb', extended: true }));
app.use(expressValidator());
app.use(authService.initialize());
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// coverage static display
app.use('/docs', auth.basic, express.static(path.join(__dirname, './apidocs')));

require('./routes')(app);

module.exports = app;
