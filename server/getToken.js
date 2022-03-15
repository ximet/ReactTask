const axios = require('axios');
require('dotenv').config();

const getToken = async url => {
  const authData = {
    user: process.env.API_USERNAME,
    password: process.env.API_PASSWORD
  };

  const res = await axios.post(url + '/authorize/token', authData);

  return 'Bearer ' + res.data.access_token;
};

module.exports = getToken;
