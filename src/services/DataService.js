import ApiService from './ForecastApiService';

const DataService = {
  getWarnings: async (locationId, cookies) => {
    let responseData = {
      status: false
    };

    try {
      const accessToken = await ApiService.getAccessToken(cookies);
      const url = `/api/v1/warning/${locationId}`;

      console.log(locationId);
      console.log(accessToken);
      responseData = await ApiService.getWarnings(url, accessToken);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  }
};

export default DataService;
