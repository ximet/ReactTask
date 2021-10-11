import React from 'react';
import styles from './Main.module.scss';
import { Route } from 'react-router-dom';

import WeatherForecast from '../../views/WeatherForecast/WeatherForecast';
import Info from '../../views/Info/Info';
import Feedback from '../../views/Feedback/Feedback';

function Main({ theme }) {
  return (
    <div className={styles.main}>
      <Route exact path="/">
        <WeatherForecast theme={theme} />
      </Route>
      <Route path="/info">
        <Info />
      </Route>
      <Route path="/feedback">
        <Feedback />
      </Route>
    </div>
  );
}

export default Main;
