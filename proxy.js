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

const app = express();
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

app.post('/a', (req, res) => {
  let token2 = getApiKey();
  let token = { Authorization: `Bearer ${token2}` };

  axios({
    method: 'get',
    headers: token,
    url: `https://pfa.foreca.com/api/v1/location/102810135`,
    data: {}
  })
    .then(response => {
      console.log('API call succeeded: ', response.data);
      res.json(response.data);
    })
    .catch(error => {
      if (error) console.log('API call returned an error:', error);
    });
});

app.listen(3000, 'localhost', () => console.log('working backend !!!'));
