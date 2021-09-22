const { Curl } = require('node-libcurl');

const ForecastApiService = {
  getToken: function (response) {
    const curlRequest = new Curl();
    const terminate = curlRequest.close.bind(curlRequest);
    const context = this;

    const domainApi = process.env.FORECAST_API_DOMAIN;

    curlRequest.setOpt(Curl.option.URL, `${domainApi}/authorize/token`);
    curlRequest.setOpt(Curl.option.POST, true);
    curlRequest.setOpt(Curl.option.VERBOSE, true);
    curlRequest.setOpt(Curl.option.SSL_VERIFYPEER, false);
    curlRequest.setOpt(
      Curl.option.POSTFIELDS,
      JSON.stringify({
        user: process.env.FORECAST_API_USER,
        password: process.env.FORECAST_API_PSWD
      })
    );

    curlRequest.on('end', function (statusCode, data, headers) {
      console.log('headers: ', headers);
      context.curlRequestEnd(data, response);
      this.close();
    });

    curlRequest.on('error', error => {
      context.curlRequestError(error, response, terminate);
    });

    curlRequest.perform();
  },

  curlRequestEnd: (data, response) => {
    console.info('response: ' + data);
    try {
      const accessData = JSON.parse(data);
      const { access_token } = accessData;

      response.cookie('token', access_token, {
        maxAge: accessData.expires_in * 1000
      });
    } catch (error) {
      console.error('test', error);
    }

    response.send(
      JSON.stringify({
        status: true
      })
    );
  },

  curlRequestError: (error, response, terminate) => {
    console.error('error: ', error);

    terminate();
    response.send(
      JSON.stringify({
        status: true
      })
    );
  }
};

module.exports = ForecastApiService;
