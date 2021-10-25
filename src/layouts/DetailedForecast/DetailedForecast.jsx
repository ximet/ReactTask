import React from 'react';

import classes from './DetailedForecast.module.scss';
import FavoriteCities from './FavoriteCities/Container';
import DailyForecast from './DailyForecast/Container';
import HourlyForecast from './HourlyForecast/Container';

function DetailedForecast() {
  return (
    <div className={classes.detailedForecast}>
      <FavoriteCities />
      <DailyForecast />
      <HourlyForecast />
    </div>
  );
}

export default DetailedForecast;
