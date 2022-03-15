const url = require('url');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const getToken = require('./getToken');

const PORT = process.env.PORT || 4200;
const API_URL = 'https://pfa.foreca.com';

const app = express();

getToken(API_URL).then(token => (axios.defaults.headers.common['Authorization'] = token));

app.use(cors());

app.get('*', handleGetRequest);

app.listen(PORT, () => {
  console.log('Server started on port:', PORT);
});

function handleGetRequest(req, res) {
  const { path } = url.parse(req.originalUrl, true);
  axios
    .get(API_URL + path)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => res.status(500).send(res.status));
}

function registerControllers() {}
