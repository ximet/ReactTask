import React from 'react';
import classes from './dailyForecast.module.css';

function DailyForecast({ forecast }) {
  return (
    <div className={classes.container}>
      <span className={classes.day}>{`${forecast.weekDay} ${forecast.date}`}</span>
      <div className={classes.temperatureAndWeatherIcon}>
        <img src={forecast.icon} className={classes.weatherIcon} alt="weather icon" />
        <span className={classes.temperature}>{`${forecast.temperature}°C`}</span>
      </div>
      <span className={classes.condition}>{forecast.conditions}</span>
    </div>
  );
}

export default DailyForecast;
