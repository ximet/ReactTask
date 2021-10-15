import axiosInstance from './interseptors';

const ForecastApi = {
  getData: async url => {
    return await axiosInstance.get(url);
  }
};

export default ForecastApi;
