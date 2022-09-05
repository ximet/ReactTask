const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const axios = require('axios').default;

dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT;

app.use(cors({ credentials: true, origin: 'http://localhost:9020' }));

app.use(express.json());
app.use(cookieParser());

app.post('/authorize', async (req, res) => {
  try {
    const response = await axios.post(
      'https://pfa.foreca.com/api/v1/authorize/token',
      req.body
    );
    const { access_token, expires_in } = response.data;

    res
      .status(200)
      .cookie('token', access_token, {
        expires: new Date(Date.now() + expires_in * 1000),
        httpOnly: true,
        sameSite: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
      })
      .json({ status: 'success' });
  } catch (err) {
    res.status(401).json({ status: 'fail', error: err });
  }
});

app.get('/authenticate', function (req, res) {
  const { token } = req.cookies;

  res.status(200).json({ status: 'success', token });
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}...`)
);
