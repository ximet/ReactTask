const path = require('path');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const proxy = require('express-http-proxy'),
  app = require('express')(),
  cors = require('cors');

let token;

async function auth() {
  if (token) return token;

  let raw = JSON.stringify({
    user: 'igorioha95',
    password: 'Va1mXa610o7v'
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

app.use(cors());

app.use('/:toUrl', (req, res, next) =>
  proxy(req.params.toUrl, {
    proxyReqOptDecorator: async function (proxyReqOpts, srcReq) {
      const token = await auth();
      console.log('token: ', token);
      proxyReqOpts.headers['Authorization'] = `Bearer ${token}`;
      return proxyReqOpts;
    }
  })(req, res, next)
);

app.listen(3333, () => {
  console.log('Listening on port 3333');
});
