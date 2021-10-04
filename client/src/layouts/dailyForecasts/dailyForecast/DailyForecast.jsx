import React from 'react';
import classes from './dailyForecast.module.css'

function DailyForecast({forecast, theme}) {
  return (
    <div className={classes.container}>
      <span className={classes.day} data-theme={theme}>{`${forecast.weekDay} ${forecast.date}`}</span>
      <div className={classes.temperatureAndWeatherIcon}>
        <img src={forecast.icon} className={classes.weatherIcon} alt="weather icon"/>
        <span className={classes.temperature} data-theme={theme}>{`${forecast.temperature}°C`}</span>
      </div>
      <span className={classes.condition} data-theme={theme}>{forecast.conditions}</span>
    </div>
  )
}

export default DailyForecast;
