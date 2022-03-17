import React from 'react';
import WeatherSymbol from '../WeatherSymbol/WeatherSymbol';
import classes from './WeeklyForecastItem.module.scss';

const WeeklyForecastItem = ({ forecastItem }) => {
  const date = new Date(forecastItem.date);
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', options);

  console.log(forecastItem);

  return (
    <div className={classes.weeklyForecastItem}>
      <h2 className={classes.weeklyForecastItem__header}>{dateString}</h2>
      <WeatherSymbol symbol={forecastItem.symbol ?? 'n400'} />
      <div>
        <div>max temp:{forecastItem.maxTemp} °C</div>
        <div>min temp:{forecastItem.minTemp} °C</div>
        <div>accum. precip.:{forecastItem.precipAccum} mm</div>
        <div>wind dir.: {forecastItem.windDir}°</div>
        <div>max wind speed: {forecastItem.maxWindSpeed} m/s</div>
      </div>
    </div>
  );
};

export default WeeklyForecastItem;
