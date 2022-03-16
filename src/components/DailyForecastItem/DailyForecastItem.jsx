import React from 'react';
import WeatherSymbol from '../WeatherSymbol/WeatherSymbol';
import classes from './DailyForecastItem.module.scss';

const DailyForecastItem = ({ forecastItem }) => {
  const forecastTime = forecastItem.time.match(/\d\d:\d\d/);

  return (
    <div className={classes.dailyForecastItem}>
      <h2 className={classes.dailyForecastItem__header}>{forecastTime}</h2>
      <WeatherSymbol symbol={forecastItem.symbol ?? 'n400'} />
      <span>{forecastItem.temperature} °C</span>
    </div>
  );
};

export default DailyForecastItem;
