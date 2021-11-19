const express = require('express');
const port = 8080;
const app = express();

const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'YOUR-DOMAIN.TLD'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => console.log(`App started on port ${port}`));
