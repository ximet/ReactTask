import ForecastApi from '../api/ForecastApi';

const ApiService = {
  getAccessToken: async function (cookies) {
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

  getLocationsSearch: async function (url, accessToken) {
    let responseData = {
      status: false
    };

    try {
      const fetchResponse = await ForecastApi.fetchData(url, accessToken);
      responseData = await fetchResponse.json();
    } catch (error) {
      console.error(error);
    }

    return responseData;
  },

  getWarnings: async function (url, accessToken) {
    let responseData = {
      status: false
    };

    try {
      const fetchResponse = await ForecastApi.fetchData(url, accessToken);
      console.log(fetchResponse);
      responseData = await fetchResponse.json();
    } catch (error) {
      console.error(error);
    }

    return responseData;
  }
};

export default ApiService;
