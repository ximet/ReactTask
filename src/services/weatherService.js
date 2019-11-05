import { getDayOfTheWeekName, getDateTime } from '../utils/dateUtils';
import { API_KEY } from '../secrets';
import { kelvinToCelsius } from '../utils/weatherUtils';

const convertToCelsiusAndFloor = (t) => Math.floor(kelvinToCelsius(t));

export const getTemperaturesByCityNames = (cityNames) =>
  Promise.all(
    cityNames.map((cityName) =>
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`)
    )
  )
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then((weathers) =>
      weathers.map((weather) => ({
        name: weather.name,
        temperature: convertToCelsiusAndFloor(weather.main.temp),
      }))
    );

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

      const {
        main,
        wind: { speed: windSpeed },
      } = weather;

      const { temp, pressure, humidity } = main;

      return {
        name: `${weather.name}, ${country.name}`,
        temperature: convertToCelsiusAndFloor(temp),
        pressure: pressure * 100,
        humidity,
        windSpeed,
        iconUrl: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
        description,
        time,
      };
    });
