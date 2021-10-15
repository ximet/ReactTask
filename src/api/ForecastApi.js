import axiosInstance from './interseptors';

const ForecastApi = {
  getData: async (url, accessToken) => {
    return await axiosInstance.get(url);
  }
};

export default ForecastApi;
