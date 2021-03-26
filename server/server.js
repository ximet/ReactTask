import express from 'express';
import axios from 'axios';
import { config } from 'dotenv';

const app = express();
const port = 3001;

config();

app.post('/auth', async (req, res) => {
  try {
    const url = `https://pfa.foreca.com/authorize/token?user=${process.env.USER}&password=${process.env.PASS}`;
    const { data } = await axios.post(url);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => console.log(`http://localhost:${port}`));
