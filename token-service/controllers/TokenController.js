const ForecastApiService = require('../services/ForecastApiService');

const TokenController = {
  getToken: (request, response) => {
    ForecastApiService.getToken(response);
  }
};

module.exports = TokenController;
