const endpointHost = 'https://pfa.foreca.com';
const WEATHER_ENDPOINT = {
  token: '/authorize/token',
  locationInfo: '/api/v1/location/',
  currentWeather: '/api/v1/current/'
};
const EXPIRATION_OFFSET = 10;
const AUTH_DATA = {
  user: process.env.API_USER,
  password: process.env.API_PASSWORD,
  expire_hours: EXPIRATION_OFFSET
};

const weatherApi = {
  async getToken() {
    const currentUrl = `${endpointHost}${WEATHER_ENDPOINT.token}?user=${AUTH_DATA.user}&password=${AUTH_DATA.password}&expire_hours=${AUTH_DATA.expire_hours}`;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    return fetch(currentUrl, requestOptions)
      .then(response => response.json())
      .then(data => data.access_token)
      .catch(error => console.log('error', error));
  },

  async getLocationInfo(position, token) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const currentUrl = `${endpointHost}${WEATHER_ENDPOINT.locationInfo}/:location?location=${position.lon},${position.lat}`;

    return fetch(currentUrl, requestOptions)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log('error', error));
  },

  async getCurrentWeather(position, token) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const currentUrl = `${endpointHost}${WEATHER_ENDPOINT.currentWeather}/:location=${position.lon},${position.lat}`;

    return fetch(currentUrl, requestOptions)
      .then(response => response.json())
      .then(data => data.current)
      .catch(error => console.log('error', error));
  }
};

export default weatherApi;
