import axiosInstance from './interseptors';

const ForecastApi = {
  getData: async (url, accessToken) => {
    return await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  },

  fetchData: async (url, accessToken) => {
    return await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }
};

export default ForecastApi;
