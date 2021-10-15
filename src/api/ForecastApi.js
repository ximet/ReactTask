import axiosInstance from './interseptors';

const ForecastApi = {
  getData: async url => await axiosInstance.get(url)
};

export default ForecastApi;
