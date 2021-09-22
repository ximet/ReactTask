const axios = require('axios');
require('dotenv').config();

const WE_API_URL = process.env.WEATHER_API_URL;

const $host = axios.create({
    baseURL: WE_API_URL
});

module.exports = $host