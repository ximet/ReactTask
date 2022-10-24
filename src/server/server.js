require('dotenv').config();
const proxy = require('express-http-proxy');
const app = require('express')();
const cors = require('cors');
const path = require('path');

app.use(cors());

let token;

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function auth() {
  if (token) return token;

  let raw = JSON.stringify({
    user: process.env.FORECA_LOGIN,
    password: process.env.FORECA_PASSWORD
  });

  let requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
  };

  return fetch('https://pfa.foreca.com/authorize/token?expire_hours=2', requestOptions)
    .then(response => response.json())
    .then(result => (token = result.access_token))
    .catch(error => console.log('error', error));
}

app.use('/:toUrl', (req, res, next) =>
  proxy(req.params.toUrl, {
    proxyReqOptDecorator: async function (proxyReqOpts, srcReq) {
      const token = await auth();
      proxyReqOpts.headers['Authorization'] = `Bearer ${token}`;
      return proxyReqOpts;
    }
  })(req, res, next)
);

app.listen(3333, () => {
  console.log('Listening on port 3333');
});
