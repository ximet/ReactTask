import React from 'react';
import classes from './hourlyForecast.module.css';
import moonAndCloudsIcon from '../../../../public/images/weatherIcon/moonAndCloudsIcon.png';
import dropsIcon from '../../../../public/images/dropsIcon.png';
import windIcon from '../../../../public/images/windIcon.png';
import { formatDate } from '../../../services/dateService';

function HourlyForecast({ forecast }) {
  const time = formatDate(forecast.time).time

  return (
    <div className={classes.container}>
      <span className={classes.time}>{time}</span>
      <span className={classes.temperature}>{`${forecast.temperature}°C`}</span>
      <div>
        <img className={classes.weatherIcon} src={moonAndCloudsIcon} alt="weather-icon" />
      </div>
      <div className={classes.conditions}>
        <img className={classes.conditionsIcon} src={windIcon} alt="wind" />
        <span className={classes.conditionsText}>{`${forecast.windSpeed}m/h`}</span>
      </div>
      <div className={classes.conditions}>
        <img className={classes.conditionsIcon} src={dropsIcon} alt="humidity" />
        <span className={classes.conditionsText}>{`${forecast.relHumidity}%`}</span>
      </div>
    </div>
  );
}

export default HourlyForecast;
