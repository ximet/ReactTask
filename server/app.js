const express = require('express');
const port = 8080;
const app = express();
const axios = require('axios');

const auth_Data = {
  user: 'kseniatulikova',
  password: 'cDxqPhAlr5Rr'
};

const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'YOUR-DOMAIN.TLD');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => console.log(`App started on port ${port}`));

app.get('/token', async (req, res) => {
  try {
    if (!app.locals.token) {
      const response = await axios({
        url: 'https://pfa.foreca.com/authorize/token',
        method: 'post',
        data: {
          ...auth_Data,
          expire_hours: -1
        }
      });
      app.locals.token = response.data;
    }

    res.status(200).json(app.locals.token);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
