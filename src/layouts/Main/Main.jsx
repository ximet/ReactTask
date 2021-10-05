import React from 'react';
import styles from './Main.module.scss';
import WeatherForecast from '../../views/WeatherForecast/WeatherForecast';

function Main() {
  return (
    <div className={styles.main}>
      <WeatherForecast />
    </div>
  );
}

export default Main;
