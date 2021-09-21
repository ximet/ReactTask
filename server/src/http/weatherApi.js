const $host = require('./index')
require('dotenv').config()

const user = process.env.WE_API_USER;
const password = process.env.WE_API_PASSWORD;

class WeatherApi {
    async getAccessToken() {
        try {
            const {data} = await $host.post('authorize/token', {user, password});
            return data
        } catch(e) {
            console.log(e);
        }
    }
}


module.exports = new WeatherApi();