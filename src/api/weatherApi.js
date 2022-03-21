import request from '../utils/request';

const proxy = 'http://localhost:3000/';
const apiUrl = `${proxy}https://pfa.foreca.com`;
const user = process.env.USER;
const password = process.env.PASSWORD;

const weatherApi = {
  async getToken(expire) {
    const currentUrl = `${apiUrl}/authorize/token?expire_hours=${expire}&user=${user}&password=${password}`;

    const token = await request(currentUrl);
    return token.access_token;
  },

  async getLocationInfo(position) {
    const currentUrl = `${apiUrl}/api/v1/location/:location?location=${position}`;

    const locationInfo = await request(currentUrl, true);
    return locationInfo;
  },

  async getLocationInfoUsingId(id) {
    const currentUrl = `${apiUrl}/api/v1/location/${id}`;

    const locationInfo = await request(currentUrl, true);
    return locationInfo;
  },

  async getLocationSearch(name) {
    const currentUrl = `${apiUrl}/api/v1/location/search/${name}`;

    const locationSearch = await request(currentUrl, true);
    return locationSearch.locations;
  },

  async getCurrentWeather(position) {
    const currentUrl = `${apiUrl}/api/v1/current/:location?location=${position}`;

    const currentWeather = await request(currentUrl, true);
    return currentWeather.current;
  },

  async getTodaysWeather(position) {
    const currentUrl = `${apiUrl}/api/v1/forecast/3hourly/:location?periods=7&location=${position}`;

    const todaysWeather = await request(currentUrl, true);
    return todaysWeather.forecast;
  },

  async getNextWeekWeather(position) {
    const currentUrl = `${apiUrl}/api/v1/forecast/daily/:location?periods=7&location=${position}`;

    const nextWeekWeather = await request(currentUrl, true);
    return nextWeekWeather.forecast;
  },
};

export default weatherApi;
