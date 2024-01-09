const express = require('express');
const https = require('https');
const fs = require('fs');
const helmet = require('helmet');
const morgan = require('morgan');
const Brute = require('express-brute');

const app = require('./app');
const port = 3000;

app.use(helmet());
app.use(morgan('dev'));

const bruteForce = new Brute(new Brute.MemoryStore(), {
  freeRetries: 5,
  minWait: 60 * 1000,
  lifetime: 60,
});

const server = https.createServer(
  {
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem'),
  },
  app
);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
