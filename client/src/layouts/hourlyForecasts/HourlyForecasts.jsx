import React from 'react';
import Slider from '../../components/slider/Slider';
import classes from './hourlyForecasts.module.css';
import HourlyForecast from './hourlyForecast/HourlyForecast';
import { v4 as uuidv4 } from 'uuid';
import { themeType } from '../../types/types';
import PropTypes from 'prop-types';

function HourlyForecasts({ theme, hourlyForecasts }) {
  const slides = hourlyForecasts.map(forecast => ({
    id: uuidv4(),
    component: <HourlyForecast theme={theme} forecast={forecast} />
  }));

  return (
    <div className={classes.container} data-theme={theme}>
      <div className={classes.content}>
        <h5 className={classes.title}>Hours</h5>
        {slides.length > 0 && <Slider slides={slides} slidesToShow={10} />}
      </div>
    </div>
  );
}

HourlyForecasts.propTypes = {
  theme: themeType,
  hourlyForecasts: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      windSpeed: PropTypes.number.isRequired,
      relHumidity: PropTypes.number.isRequired
    })
  )
};

export default HourlyForecasts;
