require('dotenv').config();
const { join } = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static(join(__dirname, '..', 'client', 'public')));
app.use(cookieParser());

const middleware = [
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(),
  express.static(join(__dirname, '..', 'public')),
  morgan('dev'),
];

app.use(middleware);

app.set('PORT', process.env.PORT || 8080);

// test route
app.get('/', (req, res) => {
  res
    .status(200)
    .json({ success: true, status: 200, message: 'The server is running.' });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
