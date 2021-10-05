import React from 'react';
import Slider from '../../components/slider/Slider';
import classes from './dailyForecasts.module.css';
import DailyForecast from './dailyForecast/DailyForecast.jsx';
import { dailyForecasts } from '../../mock/mock';

function DailyForecasts({ theme }) {
  const slides = dailyForecasts.map(forecast => (
    <DailyForecast theme={theme} forecast={forecast} />
  ));

  return (
    <div className={classes.container} data-theme={theme}>
      <div className={classes.content}>
        <h5 className={classes.title}>Days</h5>
        <Slider slides={slides} slidesToShow={7} />
      </div>
    </div>
  );
}

export default DailyForecasts;
