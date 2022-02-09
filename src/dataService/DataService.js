const WEATHER_API_URL = 'https://pfa.foreca.com';
const TOKEN_URL = 'http://localhost:5000/token';
const SYMBOL_URL = 'https://developer.foreca.com/static/images/symbols/';

const PATHS = {
  location: '/api/v1/location/',
  weather: '/api/v1/current/',
  daily: '/api/v1/forecast/daily/',
};

export default {
  getCurrentWeather,
  getSymbolUrl,
  getDailyForecast,
};

async function getAccessTokenFromAPI() {
  const res = await fetch(TOKEN_URL);
  const data = await res.json();

  return data.access_token;
}

async function getAccessToken() {
  const accessToken = getCookie('token');

  if (accessToken) return accessToken;

  await setAccessToken();
  return getCookie('token');
}

async function setAccessToken() {
  const token = await getAccessTokenFromAPI();
  setCookie('token', token);
}

function getSymbolUrl(symbolCode) {
  return SYMBOL_URL + symbolCode + '.png';
}

async function getCurrentWeather() {
  const locationData = await getLocationData();
  const weatherData = await request(WEATHER_API_URL, PATHS.weather, `${locationData.id}`);

  weatherData.current.location = {
    adminArea: locationData.adminArea,
    country: locationData.country
  };

  return weatherData.current;
}

async function getDailyForecast() {
  const locationData = await getLocationData();
  const dailyData = await request(WEATHER_API_URL, PATHS.daily, `${locationData.id}&dataset=full`);

  return dailyData.forecast;
}

async function getLocationData() {
  const locationData = getCookie('location');

  if (locationData) return JSON.parse(locationData);

  await setLocationData();
  return JSON.parse(getCookie('location'));
}

async function setLocationData() {
  const position = await getCurrentPosition();
  const locationData = await request(
    WEATHER_API_URL,
    PATHS.location,
    `${position.longitude},${position.latitude}`
  );

  setCookie('location', JSON.stringify(locationData));
}

async function request(url, path, params) {
  const accessToken = await getAccessToken();
  const res = await fetch(url + `${path}${params}?token=${accessToken}`);
  const data = await res.json();

  return data;
}

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/; max-age=3600`;
}

function getCookie(name) {
  const cookies = document.cookie;
  const regExp = new RegExp(
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  );
  const matches = cookies.match(regExp);

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

async function getCurrentPosition() {
  const geolocation = await getCoordinates();
  const position = {
    latitude: geolocation.coords.latitude,
    longitude: geolocation.coords.longitude
  };

  return position;
}

function getCoordinates() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
