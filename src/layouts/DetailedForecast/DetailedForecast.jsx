import React from 'react';
import DailyForecast from './DailyForecast/DailyForecast';
import { HourlyCityForecastTypes, DailyCityForecastTypes } from '../../types/WeatherDataTypes';

import classes from './DetailedForecast.module.scss';
import Slider from '../../components/Slider/Slider';
import FavoriteCities from './FavoriteCities/FavoriteCities';
import HourlyForecast from './HourlyForecast/HourlyForecast';

const favCitiesSliderOptions = {
  sliderWidth: 400,
  slideWidth: 200
};

function DetailedForecast({ hourlyCityForecast, dailyCityForecast }) {
  return (
    <div className={classes.detailedForecast}>
      <Slider {...favCitiesSliderOptions} />
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
