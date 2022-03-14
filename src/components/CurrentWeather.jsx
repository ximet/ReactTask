import React, { useEffect, useState } from 'react';
import { getCurrentWeatherByCoords, getCurrentWeatherById } from '../api';
import { url } from '../constants';
import LocationHeader from './LocationHeader/LocationHeader';
import WeatherCard from './WeatherCard/WeatherCard';

const CurrentWeather = ({ location }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const isLocationEmpty = Object.keys(location).length === 0;

    if (isLocationEmpty) {
      return;
    }

    console.log(location);
    getCurrentWeatherById(url, location.id).then(currentWeather => {
      setWeather(currentWeather);
    });
  }, [location]);

  return (
    <div>
      <LocationHeader name={location.name} country={location.country} />
      <WeatherCard weather={weather} />
    </div>
  );
};

export default CurrentWeather;
