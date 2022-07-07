const express = require('express');
const axios = require('axios').default;
const cors = require('cors');
const { json } = require('express');
require('dotenv').config();

let getApiKey = null;

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
  let apiKeyCopy = getApiKey();
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
      console.log('API call succeeded!');
      getApiKey = keyHolder(response.data);
      res.send({ data: 'Logged in' });
    })
    .catch(error => {
      if (error) console.log('API call returned an error: ', error);
    });
});

app.post('/test-url', (req, res) => {
  const hdrs = getHeaders();

  axios({
    method: 'get',
    headers: hdrs,
    url: `https://pfa.foreca.com/api/v1/location/102810135`,
    data: {}
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      if (error) console.log('API call returned an error:', error);
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
  function changeObj(oobj) {
    const updatedResults = Object.entries(oobj.data).shift();
    console.log('aha ', updatedResults);
    return updatedResults;
  }

  axios({
    method: 'get',
    url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchedLocation}&format=json&apiKey=${process.env.REACT_APP_SEARCH_AUTOCOMPLETE_KEY}`
  })
    .then(response => changeObj(response))
    .then(response => res.send(response))
    .catch(error => console.log('error', error)); //

  // .then(response => {
  //   console.log('SEARCH call succeeded!');
  //   res.send({ data: 'Search done' });
  // })
  // .catch(error => {
  //   if (error) console.log('API call returned an error: ', error);
  // });
});

app.listen(3000, 'localhost', () => console.log('working backend !!!'));
