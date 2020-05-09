require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const router = require('../router/main')(app);

app.all('/*', (req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    process.env.NODE_ENV === 'production' ? process.env.ORIGIN : '*',
  );
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.set('views', path.resolve(__dirname, '..', 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.listen(port);