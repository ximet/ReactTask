const ServiceForecastAPI = require('../services/ForecastApiService');

const TokenController = {
  getToken: (request, response) => {
    ServiceForecastAPI.getToken(response);
  }
};

module.exports = TokenController;
