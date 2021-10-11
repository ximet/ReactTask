import React from 'react';

import classes from './DetailedForecast.module.scss';
import { HourlyCityForecastTypes, DailyCityForecastTypes } from '../../types/WeatherDataTypes';

function DetailedForecast({ hourlyCityForecast, dailyCityForecast }) {
  return <div className={classes.detailedForecast}>Detailed forecast</div>;
}

DetailedForecast.propTypes = {
  hourlyCityForecast: HourlyCityForecastTypes,
  dailyCityForecast: DailyCityForecastTypes
};

export default DetailedForecast;
