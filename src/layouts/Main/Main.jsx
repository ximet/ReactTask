import React from 'react';
import { Route } from 'react-router-dom';

import styles from './Main.module.scss';

import WeatherForecast from '../../views/WeatherForecast/Container';
import Info from '../../views/Info/Info';
import Feedback from '../../views/Feedback/Feedback';

function Main() {
  return (
    <div className={styles.main}>
      <Route exact path="/">
        <WeatherForecast />
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
