const WEATHER_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather?q=';
const APPID = '&APPID=58f18d52abc8b8aedd92747199c9ba88';

class WeatherService {
  // eslint-disable-next-line class-methods-use-this
  async getCurrentWeatherByCity(city) {
    const url = `${WEATHER_ENDPOINT}${city}${APPID}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed, HTTP status ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
}

export default new WeatherService();
