import { getDayOfTheWeekName, getDateTime } from '../utils/dateUtils';
import { API_KEY } from '../secrets';

export const getWeatherByGeolocation = ({ coords: { latitude, longitude } }) =>
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
  )
    .then((resp) => resp.json())
    .then(async (weather) => {
      const country = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${weather.sys.country}`
      ).then((resp) => resp.json());
      const today = new Date();
      const time = `${getDayOfTheWeekName(today)} ${getDateTime(today)}`;
      const description = `${weather.weather[0].description
        .charAt(0)
        .toUpperCase()}${weather.weather[0].description.slice(1)}`;
      return {
        ...weather,
        ...weather[0],
        description,
        countryName: country.name,
        time,
      };
    });
