import React from 'react';
import DailyForecast from './DailyForecast/DailyForecast';
import { HourlyCityForecastTypes, DailyCityForecastTypes } from '../../types/WeatherDataTypes';

import classes from './DetailedForecast.module.scss';
import FavoriteCities from './FavoriteCities/Container';
import HourlyForecast from './HourlyForecast/HourlyForecast';

function DetailedForecast({ hourlyCityForecast, dailyCityForecast }) {
  return (
    <div className={classes.detailedForecast}>
      <FavoriteCities />
      <DailyForecast />
      <HourlyForecast hourlyForecast={hourlyCityForecast} />
    </div>
  );
}

DetailedForecast.propTypes = {
  hourlyCityForecast: HourlyCityForecastTypes,
  dailyCityForecast: DailyCityForecastTypes
};

export default DetailedForecast;
