import React, { useEffect, useState, useCallback } from 'react';
import { getCurrentWeatherById } from '../../api';
import { url } from '../../constants';
import CurrentWeatherInfo from '../CurrentWeatherInfo/CurrentWeatherInfo';
import WeatherSymbol from '../WeatherSymbol/WeatherSymbol';
import Timepiece from '../Timepiece/Timepiece';
import classes from './CurrentWeather.scss';

const CurrentWeather = ({ location }) => {
  const [weather, setWeather] = useState({});

  const updateCurrentWeather = useCallback(async () => {
    const currentWeather = await getCurrentWeatherById(url, location.id);
    setWeather(currentWeather);
  }, [location]);

  useEffect(() => {
    const isLocationEmpty = Object.keys(location).length === 0;

    if (isLocationEmpty) {
      return;
    }

    updateCurrentWeather();
  }, [location, updateCurrentWeather]);

  return (
    <div className={classes.currentWeather}>
      <Timepiece />
      <WeatherSymbol symbol={weather.symbol ?? 'n400'} symbolPhrase={weather.symbolPhrase} />
      <CurrentWeatherInfo weather={weather} />
    </div>
  );
};

export default CurrentWeather;
