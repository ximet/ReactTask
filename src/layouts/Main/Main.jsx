import React from 'react';
import style from './Main.module.scss';

import WeatherForecast from '../../views/WeatherForecast/WeatherForecast';

function Main() {
  return (
    <div className={style.main}>
      <WeatherForecast />
    </div>
  );
}

export default Main;
