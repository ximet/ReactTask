const axios = require('axios');
require('dotenv').config()

const user = process.env.WEATHER_API_USER;
const password = process.env.WEATHER_API_PASSWORD;
const WEATHER_API_URL = process.env.WEATHER_API_URL;

class WeatherApi {
    async getAccessToken() {
        const {data} = await axios.post(WEATHER_API_URL + '/authorize/token', {user, password});
        return data;
    }
}

module.exports = new WeatherApi();