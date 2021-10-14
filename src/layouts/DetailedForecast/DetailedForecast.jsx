import React from 'react';

import classes from './DetailedForecast.module.scss';
import { HourlyCityForecastTypes, DailyCityForecastTypes } from '../../types/WeatherDataTypes';
import Slider from '../../components/Slider/Slider';

function DetailedForecast({ hourlyCityForecast, dailyCityForecast }) {
  return (
    <div className={classes.detailedForecast}>
      <Slider />
    </div>
  );
}

DetailedForecast.propTypes = {
  hourlyCityForecast: HourlyCityForecastTypes,
  dailyCityForecast: DailyCityForecastTypes
};

export default DetailedForecast;
