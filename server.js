const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const whiteList = { methods: ['POST'], origin: true };
app.use(express.json());
app.use(cors(whiteList));

const AUTH_CREDENTIALS = {
  user: process.env.AUTH_LOGIN,
  password: process.env.AUTH_PASSWORD
};

app.get(process.env.TOKEN_ENDPOINT, (req, res) => {
  axios.post(process.env.API_URL, AUTH_CREDENTIALS).then(
    ({ data }) => res.json(data),
    err => res.status(500).send(err)
  );
});

app.all('*', (req, res) => res.status(404).send({ msg: 'Page not found' }));
app.listen(process.env.SERVER_PORT, () => console.log(`Working on ${process.env.SERVER_PORT}`));
