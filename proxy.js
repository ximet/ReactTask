const express = require('express');
const axios = require('axios').default;
const cors = require('cors');
require('dotenv').config();

let getApiKey;

function keyHolder(userSecret) {
  let apiKey;

  for (let i in userSecret) {
    if (i === 'access_token') apiKey = userSecret[i];
  }

  function displayApiKey() {
    return apiKey;
  }
  return displayApiKey;
}

function getHeaders() {
  const apiKeyCopy = getApiKey();
  return { Authorization: `Bearer ${apiKeyCopy}` };
}

const app = express();
app.use(express.json());

app.use(cors());

app.get('/login', (req, res) => {
  axios({
    method: 'post',
    url: `https://pfa.foreca.com/api/authorize/token`,
    data: {
      user: process.env.REACT_APP_AUTH_USERNAME,
      password: process.env.REACT_APP_AUTH_PASSWORD
    }
  })
    .then(response => {
      getApiKey = keyHolder(response.data);
      res.send({ data: 'Logged in' });
    })
    .catch(error => {
      if (error) console.log('API call returned an error: ', error);
    });
});

app.post('/get-location-current-weather-by-id', (req, res) => {
  const hdrs = getHeaders();
  const optionalTemperature = req.body.temp === 'F' ? '&tempunit=' + req.body.temp : '';

  axios({
    method: 'get',
    headers: hdrs,
    url: `https://pfa.foreca.com/api/v1/current/${req.body.id}${optionalTemperature}`
  })
    .then(response => {
      res.json(response.data.current);
    })
    .catch(error => {
      if (error) console.log('API call returned an error:');
    });
});

app.post('/get-location-daily-weather-by-id', (req, res) => {
  const hdrs = getHeaders();

  axios({
    method: 'get',
    headers: hdrs,
    url: `https://pfa.foreca.com/api/v1/current/${req.body.id}`
  })
    .then(response => {
      res.json(response.data.current);
    })
    .catch(error => {
      if (error) console.log('API call returned an error:');
    });
});

app.post('/get-current-location-params', (req, res) => {
  const hdrs = getHeaders();
  const userCoordinates = req.body.latLon;

  axios({
    method: 'get',
    headers: hdrs,
    url: 'https://pfa.foreca.com/api/v1/location/' + userCoordinates, //current
    data: {}
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      if (error) console.log('API call returned an error:', error);
    });
});

app.post('/search', (req, res) => {
  const searchedLocation = req.query.location;
  const hdrs = getHeaders();

  function transformObj(resObj) {
    const updatedResults = Object.entries(resObj.data).shift();
    return updatedResults;
  }

  axios({
    method: 'get',
    headers: hdrs,
    url: 'https://pfa.foreca.com/api/v1/location/search/' + searchedLocation
  })
    .then(response => transformObj(response))
    .then(response => res.send(response))
    .catch(error => console.log('error', error));
});

app.listen(3000, 'localhost', () => console.log('working backend !!!'));
