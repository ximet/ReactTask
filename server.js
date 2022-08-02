const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');

const server = express();
dotenv.config();

server.use(cors(`${process.env.HOST}:${process.env.PORT}`));

const port = process.env.PORT;

const account = {
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  expire_hours: 1
};

async function tokenRequest() {
  try {
    const res = await axios.post('https://pfa.foreca.com/authorize/token', account);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

server.get('/token', async (req, res) => {
  const tokenData = await tokenRequest();
  res.send(tokenData);
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
