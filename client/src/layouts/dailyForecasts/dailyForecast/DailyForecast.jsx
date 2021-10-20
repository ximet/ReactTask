import React from 'react';
import classes from './dailyForecast.module.css';
import weatherIcon from '../../../../public/images/weatherIcon/sunAndCloudsIcon.png';
import { formatDate } from '../../../services/dateService';
import { dailyWeatherDateOptions, temperatureUnits } from '../../../globalConsts';
import PropTypes from 'prop-types';

//later will add weatherIconService and icons will depend on symbolPhrase

function DailyForecast({ forecast }) {
  const date = formatDate(forecast.date, dailyWeatherDateOptions).date;

  return (
    <div className={classes.container}>
      <span className={classes.day}>{`${date}`}</span>
      <div className={classes.temperatureAndWeatherIcon}>
        <img src={weatherIcon} className={classes.weatherIcon} alt="weather icon" />
        <span className={classes.temperature}>{`${forecast.maxTemp}${temperatureUnits}`}</span>
      </div>
      <span className={classes.condition}>{forecast.symbolPhrase}</span>
    </div>
  );
}

DailyForecast.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    symbolPhrase: PropTypes.string.isRequired
  })
};

export default DailyForecast;
