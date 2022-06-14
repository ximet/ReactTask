import { port, user, password } from './config.js';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});

app.post('/auth', async (req, res) => {
  try {
    const body = { user: user, password: password, expire_hours: -1 };
    const url = 'https://pfa.foreca.com/api/v1/authorize/token';
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(url, options);
    const json = await response.json();
    res.json(json);
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
