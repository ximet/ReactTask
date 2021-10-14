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

  _getData: async function (url, cookies) {
    const accessToken = await this._getAccessToken(cookies);
    const fetchResponse = await ForecastApi.fetchData(url, accessToken);
    const responseData = await fetchResponse.json();

    return responseData;
  },

  getLocationsSearch: async function (locationQueryStr, cookies) {
    let responseData = {};
    const url = `/api/v1/location/search/${locationQueryStr}`;
    try {
      responseData = this._getData(url, cookies);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  },

  getCurrentForecast: async function (locationId, cookies) {
    let responseData = {};
    const url = `/api/v1/current/${locationId}`;
    try {
      responseData = this._getData(url, cookies);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  },

  getLocationInfo: async function (locationId, cookies) {
    let responseData = {};
    const url = `/api/v1/location/${locationId}`;
    try {
      responseData = this._getData(url, cookies);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  },

  getHourlyForecast: async function (locationId, cookies) {
    let responseData = {};
    const url = `/api/v1/forecast/hourly/${locationId}`;
    try {
      responseData = this._getData(url, cookies);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  },

  getDailyForecast: async function (locationId, cookies) {
    let responseData = {};
    const url = `/api/v1/forecast/daily/${locationId}`;
    try {
      responseData = this._getData(url, cookies);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  }
};

export default ApiService;
