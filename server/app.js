const { join } = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { createStream } = require('rotating-file-stream');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(express.static(join(__dirname, '..', 'public')));
app.use(cookieParser());

app.set('PORT', process.env.PORT || 8080);

// log all requests in the Apache combined format to the file access.log.
// create a write stream (in append mode)
const accessLogStream = createStream('access.log', {
  interval: '1d',
  size: '2M',
  path: join(__dirname, 'log'),
});

// setup looger
app.use(morgan('combined', { stream: accessLogStream }));

// Enable CORS with various options.
app.use(cors());

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
