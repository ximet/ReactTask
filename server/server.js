import express from 'express';
import request from 'request';
import { config } from 'dotenv';

const app = express();
const port = 3001;

config();

app.post('/auth', async (req, res) => {
  console.log('here');
  const url = `https://pfa.foreca.com/authorize/token?user=${process.env.USER}&password=${process.env.PASS}`;
  request(url).pipe(res);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
