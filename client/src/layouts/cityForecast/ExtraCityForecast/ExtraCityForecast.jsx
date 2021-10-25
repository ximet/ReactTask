import React from 'react';
import classes from './ExtraCityForecast.module.css';
import { temperatureUnits } from '../../../globalConsts';
import PropTypes from 'prop-types';

function ExtraCityForecast({ weather }) {
  return (
    <div className={classes.container}>
      <span className={classes.weatherItem}>{`wind ${weather.windSpeed}m/h`}</span>
      <span className={classes.weatherItem}>{`humidity ${weather.relHumidity}%`}</span>
      <span
        className={classes.weatherItem}
      >{`feels like ${weather.feelsLikeTemp}${temperatureUnits}`}</span>
      <span className={classes.weatherItem}>{`pressure ${weather.pressure}mm`}</span>
    </div>
  );
}

ExtraCityForecast.propTypes = {
  weather: PropTypes.shape({
    windSpeed: PropTypes.number.isRequired,
    relHumidity: PropTypes.number.isRequired,
    feelsLikeTemp: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired
  })
};

export default ExtraCityForecast;
