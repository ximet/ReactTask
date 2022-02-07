const proxy = 'http://localhost:3000/';
const url = `${proxy}https://pfa.foreca.com`;
const user = process.env.USER;
const password = process.env.PASSWORD;

const weatherApi = {
  async getToken(expire) {
    const currentUrl = `${url}/authorize/token?expire_hours=${expire}&user=${user}&password=${password}`;

    return fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => data.access_token);
  },

  async getLocationInfo(position, token) {
    const currentUrl = `${url}/api/v1/location/:location?location=${position}&token=${token}`;

    return fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => data);
  },

  async getCurrentWeather(position, token) {
    const currentUrl = `${url}/api/v1/current/:location?location=${position}&token=${token}`;
    return fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => data.current);
  },

  async getTodaysWeather(position, token) {
    const currentUrl = `${url}/api/v1/forecast/3hourly/:location?periods=7&location=${position}&token=${token}`;
    return fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => data.forecast);
  },

  async getNextWeekWeather(position, token) {
    const currentUrl = `${url}/api/v1/forecast/daily/:location?periods=7&location=${position}&token=${token}`;
    return fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => data.forecast);
  },
};

export default weatherApi;
