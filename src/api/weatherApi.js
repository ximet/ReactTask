import { user, password } from '../../env';

const proxy = 'https://morning-cove-62020.herokuapp.com/';
const url = `${proxy}https://pfa.foreca.com`;

const weatherApi = {
  async getToken(expire) {
    const currentUrl = `${url}/authorize/token?expire_hours=${expire}&user=${user}&password=${password}`;

    return fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => data.access_token);
  },

  async getLocationInfo(position, token) {
    const currentUrl = `${url}/api/v1/location/:location?location=${position.lon},${position.lat}&token=${token}`;

    return fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => data);
  },

  async getCurrentWeather(position, token) {
    const currentUrl = `${url}/api/v1/current/:location?location=${position.lon},${position.lat}&token=${token}`;
    return fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => data.current);
  },
};

export default weatherApi;
