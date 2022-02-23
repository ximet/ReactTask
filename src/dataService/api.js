const WEATHER_API_URL = 'https://pfa.foreca.com';
const TOKEN_URL = 'http://localhost:5000/token';

const IMAGES_URL = {
  symbol: 'https://developer.foreca.com/static/images/symbols/',
  flag: 'https://flagcdn.com/32x24/'
}

const PATHS = {
  location: '/api/v1/location/',
  weather: '/api/v1/current/',
  daily: '/api/v1/forecast/daily/',
  hourly: '/api/v1/forecast/3hourly/'
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

export async function getCurrentWeatherFromApi(location) {
  const locationData = await getLocationData(location);
  const weatherData = await request(WEATHER_API_URL, PATHS.weather, `${locationData.id}`);

  return [weatherData.current, locationData];
}

export async function getDailyForecastFromApi(location) {
  const dailyData = await request(WEATHER_API_URL, PATHS.daily, `${location}&dataset=full`);

  return dailyData.forecast;
}

export async function getHourlyForecastFromApi(location) {
  const hourlyData = await request(WEATHER_API_URL, PATHS.hourly, `${location}&periods=56`);

  return hourlyData.forecast;
}

export function getImagesURL(type, param) {
  return IMAGES_URL[type] + param + '.png';
}

async function getLocationData(position) {
  const locationData = await request(
    WEATHER_API_URL,
    PATHS.location,
    `${position}`
  );

  return locationData;
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

export async function getCurrentPosition() {
  const geolocation = await getCoordinates();

  return `${geolocation.coords.longitude}, ${geolocation.coords.latitude}`
}

function getCoordinates() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
