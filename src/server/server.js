import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { config } from 'dotenv';

const app = express();
const port = 5020;

app.use(cors());

config();
const url = `https://pfa.foreca.com/authorize/token?expire_hours=-1&user=${process.env.USERNAME}&password=${process.env.PASSWORD}`;

app.get('/auth', async (_, res) => {
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

app.all('*', (_, res) => res.status(400).send({ message: 'Resourse not found' }));

app.listen(port, () => console.log(`https://localhost:${port}`));
