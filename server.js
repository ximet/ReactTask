const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const AUTH_DATA = {
  user: 'shchernast00',
  password: 'HO7ckpCuhHdj'
};

const WEATHER_API_URL = 'https://pfa.foreca.com';
const AUTHORIZATION_URL = WEATHER_API_URL + '/authorize/token';

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9020');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/weather', (req, res) => {
  axios.post(AUTHORIZATION_URL, AUTH_DATA).then(
    ({ data }) => res.json(data),
    err => res.send(err)
  );
});
