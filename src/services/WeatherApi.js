const endpointHost = 'https://pfa.foreca.com';
const WEATHER_ENDPOINT = {
  token: '/authorize/token',
  currentWeather: '/api/v1/current/',
  dailyForecast: '/api/v1/forecast/daily/',
  locationInfo: '/api/v1/location/',
  searchLocation: '/api/v1/location/search/'
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

    const token = await fetch(currentUrl, requestOptions)
      .then(response => response.json())
      .then(data => data.access_token)
      .catch(error => error);

    return token;
  },

  async getLocationInfo(position, token) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const currentUrl = `${endpointHost}${WEATHER_ENDPOINT.locationInfo}${position.lon},${position.lat}`;

    const locationInfo = await fetch(currentUrl, requestOptions)
      .then(response => response.json())
      .then(data => data)
      .catch(error => error);

    return locationInfo;
  },

  async getCurrentWeather(position, token) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const currentUrl = `${endpointHost}${WEATHER_ENDPOINT.currentWeather}${position.lon},${position.lat}`;

    const currentWeather = fetch(currentUrl, requestOptions)
      .then(response => response.json())
      .then(data => data.current)
      .catch(error => error);

    return currentWeather;
  },

  async getDailyForecast(position, token) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const currentUrl = `${endpointHost}${WEATHER_ENDPOINT.dailyForecast}${position.lon},${position.lat}`;

    const dailyForecast = await fetch(currentUrl, requestOptions)
      .then(response => response.json())
      .then(data => data.forecast)
      .catch(error => error);

    return dailyForecast;
  },

  async searchLocation(city, token) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const currentUrl = `${endpointHost}${WEATHER_ENDPOINT.searchLocation}${city}`;

    const citySearchResult = await fetch(currentUrl, requestOptions)
      .then(response => response.json())
      .then(data => data.locations)
      .catch(error => error);

    return citySearchResult;
  }
};

export default weatherApi;
