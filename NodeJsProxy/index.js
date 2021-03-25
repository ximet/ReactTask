const express = require('express');
const cors = require('cors');
const request = require('request');
require('dotenv').config();

// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = 'localhost';

app.use(cors());

app.get('/auth', function (req, res) {
  var url = `https://pfa.foreca.com/authorize/token?user=${process.env.USER}&password=${process.env.PASS}&expire_hours=${process.env.EXPIRE_HOURS}`;
  request(url).pipe(res);
});

// Start Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
