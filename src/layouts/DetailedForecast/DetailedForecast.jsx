import React from 'react';

import classes from './DetailedForecast.module.scss';
import { hourlyCityForecastTypes, dailyCityForecastTypes } from '../../types/weatherDataTypes';

function DetailedForecast({ hourlyCityForecast, dailyCityForecast }) {
  return <div className={classes.detailedForecast}>Detailed forecast</div>;
}

DetailedForecast.propTypes = {
  hourlyCityForecast: hourlyCityForecastTypes,
  dailyCityForecast: dailyCityForecastTypes
};

export default DetailedForecast;
