import ForecastApi from '../api/ForecastApi';

const ApiService = {
  _getAccessToken: async function (cookies) {
    let resultToken = '';

    if (!cookies.token) {
      try {
        const getTokenResult = await ForecastApi.fetchAccessToken();
        const tokenData = await getTokenResult.json();

        resultToken = tokenData.access_token;
      } catch (error) {
        console.error(error);
      }
    } else {
      resultToken = cookies.token;
    }

    return resultToken;
  },

  _getData: async function (url, accessToken) {
    let responseData = {
      status: false
    };

    try {
      const fetchResponse = await ForecastApi.fetchData(url, accessToken);
      responseData = await fetchResponse.json();
      responseData.status = true;
    } catch (error) {
      console.error(error);
    }

    return responseData;
  },

  getLocationsSearch: async function (locationQueryStr, cookies) {
    let responseData = {
      status: false,
      locations: []
    };

    try {
      const accessToken = await ApiService.getAccessToken(cookies);
      const url = `/api/v1/location/search/${locationQueryStr}`;

      responseData = await ApiService.getLocationsSearch(url, accessToken);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  },

  getCurrentForecast: async function (locationId, cookies) {
    let responseData = {
      status: false
    };

    try {
      const accessToken = await this._getAccessToken(cookies);
      const url = `/api/v1/current/${locationId}`;

      responseData = await this._getData(url, accessToken);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  },

  getLocationInfo: async function (locationId, cookies) {
    let responseData = {
      status: false
    };

    try {
      const accessToken = await this._getAccessToken(cookies);
      const url = `/api/v1/location/${locationId}`;

      responseData = await this._getData(url, accessToken);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  },

  getHourlyForecast: async function (locationId, cookies) {
    let responseData = {
      status: false
    };

    try {
      const accessToken = await this._getAccessToken(cookies);
      const url = `/api/v1/forecast/hourly/${locationId}`;

      responseData = await this._getData(url, accessToken);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  },

  getDailyForecast: async function (locationId, cookies) {
    let responseData = {
      status: false
    };

    try {
      const accessToken = await this._getAccessToken(cookies);
      const url = `/api/v1/forecast/daily/${locationId}`;

      responseData = await this._getData(url, accessToken);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  }
};

export default ApiService;
