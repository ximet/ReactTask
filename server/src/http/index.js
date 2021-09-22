const axios = require('axios');
require('dotenv').config();

const WEATHER_API_URL = process.env.WEATHER_API_URL;

const $host = axios.create({
    baseURL: WEATHER_API_URL
});

module.exports = $host