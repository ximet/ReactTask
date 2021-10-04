import React from 'react';
import classes from './Main.module.scss';
import WeatherForecast from '../../views/WeatherForecast/WeatherForecast';

function Main() {
  return (
    <div className={classes.main}>
      <WeatherForecast />
    </div>
  );
}

export default Main;
