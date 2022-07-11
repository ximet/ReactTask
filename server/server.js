const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();

dotenv.config();
const port = process.env.PORT;
const user = process.env.USER;
const password = process.env.PASSWORD;

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:9020' }));
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:9020');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});

app.get('/auth', async (req, res) => {
  try {
    const body = { user, password, expire_hours: 2 };
    const url = 'https://pfa.foreca.com/api/v1/authorize/token';
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(url, options);
    const json = await response.json();
    const token = json.access_token;
    const expTime = json.expires_in*1000 + Date.now();
    res
      .cookie('token', token, {
        sameSite: 'strict',
        secure: true,
        expires: new Date(expTime),
      })
      .send('cookie here');
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
