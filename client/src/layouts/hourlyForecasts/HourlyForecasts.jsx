import React from 'react';
import Slider from '../../components/slider/Slider';
import classes from './hourlyForecasts.module.css';
import HourlyForecast from './hourlyForecast/HourlyForecast';
import { hourlyForecasts } from '../../mock/mock';

function HourlyForecasts({ theme }) {
  const slides = hourlyForecasts.map(forecast => <HourlyForecast forecast={forecast} />);

  return (
    <div className={classes.container} data-theme={theme}>
      <div className={classes.content}>
        <h5 className={classes.title}>Hours</h5>
        <Slider slides={slides} slidesToShow={10} />
      </div>
    </div>
  );
}

export default HourlyForecasts;
