require('dotenv').config();
const url = require('url');
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const PORT = process.env.PORT || 4200;
const API_URL = 'https://pfa.foreca.com';

const app = express();

// app.use(express.json());
app.use(cors());

app.get('/authorize/token', sendAuthorizationToken);
app.get('*', handleGetRequest);

app.listen(PORT, () => {
  console.log('Server started on port:', PORT);
});

function sendAuthorizationToken(req, res) {

  const authData = {
    user: process.env.API_USERNAME,
    password: process.env.API_PASSWORD
  };

  axios
    .post(API_URL + req.path, authData)
    .then(response => {
      const token = response.data.access_token;
      res.status(200).send(token);
    })
    .catch(error => res.status(500).send(res.status));
}

function handleGetRequest(req, res) {
  const token = req.get('Authorization');
  const { path } = url.parse(req.originalUrl, true);
  axios
    .get(API_URL + path, { headers: { Authorization: token } })
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => res.status(500).send(res.status));
}
