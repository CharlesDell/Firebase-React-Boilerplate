const express = require('express');

const bodyParser = require('body-parser');
const morgan = require('morgan');

const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Logging Middleware
app.use(morgan('dev'));

// Static Middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// Parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./api'));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
