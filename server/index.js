const express = require('express');
require('dotenv').config({ path: '.env' });
const axios = require('axios');
const applyMiddlewares = require('./middlewares');

const server = express();
const PORT = process.env.PORT || 5000;

applyMiddlewares(server);

server.get('/', (req, res) => {
  res.send('server running');
});

server.post(':endpoint([\\/\\w\\.-]*)', (req, res) => {
  const endpoint = `https://pfa.foreca.com${req.params.endpoint}`;
  const params = {
    user: process.env.USER,
    password: process.env.PASSWORD
  };

  axios
    .get(endpoint, { params })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.json(error);
    });
});

server.listen(PORT);
