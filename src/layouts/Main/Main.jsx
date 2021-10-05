import React from 'react';
import { Route } from 'react-router-dom';

import WeatherForecast from '../../views/WeatherForecast/WeatherForecast';
import Info from '../../views/Info/Info';
import Feedback from '../../views/Feedback/Feedback';

import classes from './Main.module.scss';

function Main() {
  return (
    <div className={classes.main}>
      <Route exact path="/" component={WeatherForecast} />
      <Route path="/info" component={Info} />
      <Route path="/feedback" component={Feedback} />
    </div>
  );
}

export default Main;
