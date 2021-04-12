import api from '../data/ApiData';

const DataService = api => ({
  getLocationData: async location => {
    const {
      data: { locations }
    } = await api.get(`/location/search/${location}`);
    return locations;
  },
  getCurrentWeatherData: async cityId => {
    const {
      data: { current }
    } = await api.get(`/current/${cityId}`);
    return current;
  }
});

export default DataService(api);
