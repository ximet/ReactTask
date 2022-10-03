import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { config } from 'dotenv';

const app = express();

app.use(cors());
config();

const PORT = process.env.PORT || 3030;

const url = `https://pfa.foreca.com/authorize/token?user=${process.env.USER}&password=${process.env.PASSWORD}`;

app.get('/auth', async (req, res) => {
  try {
    const response = await fetch(url);

    if (response.status >= 400) {
      return res.status(response.status).send({ error: response.statusText });
    }

    const tokenInfo = await response.json();
    return res.status(200).send(tokenInfo);
  } catch (error) {
    res.send({ error: error });
  }
});

app.listen(PORT, () => console.log(`The server is running on http://localhost:${PORT}`));
