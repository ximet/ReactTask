import axiosInstance from './interseptors';

const ForecastApi = {
  getData: async (url, accessToken) => {
    return await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }
};

export default ForecastApi;
