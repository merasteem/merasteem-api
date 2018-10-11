const steem = require('steem');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('./public'));
app.use(helmet());

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running On Port ${port}`));
