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

app.post('/auth', async (req, res) => {
  try {
    const response = await axios.post(
      'https://pfa.foreca.com/api/v1/authorize/token',
      req.body
    );
    const { access_token: token, expires_in: expiresIn } = response.data;

    res
      .cookie('token', token, {
        expires: new Date(Date.now() + expiresIn * 1000),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
      })
      .json({ status: 'success', token });
  } catch (err) {
    res.json({ status: 'fail', error: err });
  }
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}...`)
);
