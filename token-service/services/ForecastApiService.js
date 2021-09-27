const axios = require('axios');

const ForecastApiService = {
  createRequestInstance: async function () {
    return await axios.create({
      baseURL: process.env.FORECAST_API_DOMAIN
    });
  },

  getToken: async function (response) {
    let resonseData = {
      status: false
    };

    try {
      const requestInstance = await this.createRequestInstance();

      const { data } = await requestInstance.post('/authorize/token', {
        user: process.env.FORECAST_API_USER,
        password: process.env.FORECAST_API_PSWD
      });

      const { access_token, expires_in } = data;

      response.cookie('token', access_token, {
        maxAge: expires_in * 1000
      });

      resonseData.status = true;
    } catch (error) {
      console.error(error);
    }

    response.send(JSON.stringify(resonseData));
  }
};

module.exports = ForecastApiService;
