import ForecastApi from '../api/ForecastApi';

const ApiService = {
  getAccessToken: async function (cookies) {
    let resultToken = '';

    if (!cookies.token) {
      const getTokenResult = await ForecastApi.fetchAccessToken();

      const tokenData = await getTokenResult.json();

      resultToken = tokenData.access_token;
    } else {
      resultToken = cookies.token;
    }

    return resultToken;
  },

  getLocationsSearch: async function (url, accessToken) {
    const fetchResponse = await ForecastApi.fetchLocationSearch(url, accessToken);

    const responseData = await fetchResponse.json();

    return responseData;
  }
};

export default ApiService;
