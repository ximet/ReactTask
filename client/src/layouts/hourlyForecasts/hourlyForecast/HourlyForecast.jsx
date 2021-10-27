import React from 'react';
import classes from './hourlyForecast.module.css';
import dropsIcon from '../../../../public/images/dropsIcon.png';
import windIcon from '../../../../public/images/windIcon.png';
import { formatDate } from '../../../services/dateService';
import { temperatureUnits } from '../../../globalConsts';
import PropTypes from 'prop-types';
import { getWeatherIcon } from '../../../services/weatherIconService';

function HourlyForecast({ forecast }) {
  const { time } = formatDate(forecast.time);
  const weatherIcon = getWeatherIcon(forecast.symbol);

  return (
    <div className={classes.container}>
      <span className={classes.time}>{time}</span>
      <span className={classes.temperature}>{`${forecast.temperature}${temperatureUnits}`}</span>
      <div>
        <img className={classes.weatherIcon} src={weatherIcon} alt="weather-icon" />
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

HourlyForecast.propTypes = {
  forecast: PropTypes.shape({
    time: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    relHumidity: PropTypes.number.isRequired
  })
};

export default HourlyForecast;
