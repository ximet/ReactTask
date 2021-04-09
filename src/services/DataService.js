import axios from '../common/axios-config';
import { BASE_URL } from '../common/constants';

const Api = http => ({
  get: url => http.get(`${BASE_URL}${url}`)
});

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

const api = Api(axios);
export default DataService(api);
