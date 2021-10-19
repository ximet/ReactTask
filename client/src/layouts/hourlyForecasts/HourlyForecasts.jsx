import React from 'react';
import Slider from '../../components/slider/Slider';
import classes from './hourlyForecasts.module.css';
import HourlyForecast from './hourlyForecast/HourlyForecast';
import { v4 as uuidv4 } from 'uuid';
import { hourlyForecastsHourlyForecastsTypes } from './types';
import { themeType } from '../../types/types';

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
  hourlyForecasts: hourlyForecastsHourlyForecastsTypes
};

export default HourlyForecasts;
