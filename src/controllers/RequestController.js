import ApiService from '../services/ForecastApiService';

const RequestController = {
  getWarnings: async locationId => {
    let responseData = {};
    try {
      const { data } = await ApiService.getWarnings(locationId);
      responseData = data.warnings;
    } catch (error) {
      console.error(error);
    }
    return responseData;
  }
};

export default RequestController;
