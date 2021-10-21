import React from 'react';

import classes from './DetailedForecast.module.scss';
import FavoriteCities from './FavoriteCities/FavoriteCities';
import DailyForecast from './DailyForecast/DailyForecast';
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
