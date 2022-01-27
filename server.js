const express = require('express');
const axios = require('axios');
const cors = require('cors');
const env = require('dotenv').config();
const app = express();
const port = 5000;

const API_URL = 'https://pfa.foreca.com';
const AUTHORIZATION_URL = API_URL + '/authorize/token';

const AUTH_DATA = {
  user: process.env.AUTH_LOGIN,
  password: process.env.AUTH_PASSWORD
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/token', cors(), (req, res) => {
  axios.post(AUTHORIZATION_URL, AUTH_DATA).then(
    ({ data }) => res.json(data),
    err => res.send(err)
  );
});