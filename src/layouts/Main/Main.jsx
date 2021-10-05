import React from 'react';
import styles from './Main.module.scss';
import { Route } from 'react-router-dom';

import WeatherForecast from '../../views/WeatherForecast/WeatherForecast';
import Info from '../../views/Info/Info';
import Feedback from '../../views/Feedback/Feedback';

function Main() {
  return (
    <div className={styles.main}>
      <Route exact path="/" component={WeatherForecast} />
      <Route path="/info" component={Info} />
      <Route path="/feedback" component={Feedback} />
    </div>
  );
}

export default Main;
