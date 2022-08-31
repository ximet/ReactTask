const express = require('express');
const cors = require('cors');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

require('dotenv').config();

const app = express();

app.use(cors());

async function getToken() {
  const userData = {
    user: process.env.USER,
    password: process.env.PASSWORD
  };

  const request = await fetch('https://pfa.foreca.com/authorize/token?expire_hours=-1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  const res = await request.json();
  return res;
}

app.get('/token', (_, res) => {
  getToken()
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

app.listen(8081, () => {
  console.log('server start');
});
