import React from 'react';
import DailyForecast from './DailyForecast/DailyForecast';

import classes from './DetailedForecast.module.scss';
import FavoriteCities from './FavoriteCities/FavoriteCities';
import HourlyForecast from './HourlyForecast/HourlyForecast';

function DetailedForecast({ hourlyCityForecast }) {
  return (
    <div className={classes.detailedForecast}>
      <FavoriteCities />
      <DailyForecast />
      <HourlyForecast hourlyForecast={hourlyCityForecast}/>
    </div>
  );
}

export default DetailedForecast;
