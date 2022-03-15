import React, { useEffect, useState, useCallback } from 'react';
import { getCurrentWeatherByCoords } from '../../api';
import { url } from '../../constants';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherSymbol from '../WeatherSymbol/WeatherSymbol';

const CurrentWeather = ({ location }) => {
  const [weather, setWeather] = useState({});

  const getCurrentWeather = useCallback(async () => {
    const currentWeather = await getCurrentWeatherByCoords(url, location.id);
    setWeather(currentWeather);
  }, [location]);

  useEffect(() => {
    const isLocationEmpty = Object.keys(location).length === 0;

    if (isLocationEmpty) {
      return;
    }

    getCurrentWeather();
  }, [location, getCurrentWeather]);

  return (
    <>
      <WeatherSymbol symbol={weather.symbol ?? 'n400'} symbolPhrase={weather.symbolPhrase} />
      <WeatherInfo weather={weather} />
    </>
  );
};

export default CurrentWeather;
