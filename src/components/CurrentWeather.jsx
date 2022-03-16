import React, { useEffect, useState } from 'react';
import { getCurrentWeatherByCoords, getCurrentWeatherById } from '../api';
import { url } from '../constants';
import LocationHeader from './LocationHeader/LocationHeader';
import WeatherCard from './WeatherCard/WeatherCard';

const CurrentWeather = ({ token, location }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const isLocationEmpty = Object.keys(location).length === 0;

    if (isLocationEmpty) {
      return;
    }

    if (token) {
      console.log(location);
      getCurrentWeatherById(url, token, location.id).then(currentWeather => {
        setWeather(currentWeather);
      });
    }
  }, [location, token]);

  return (
    <div>
      <LocationHeader name={location.name} country={location.country} />
      <WeatherCard weather={weather} />
    </div>
  );
};

export default CurrentWeather;
