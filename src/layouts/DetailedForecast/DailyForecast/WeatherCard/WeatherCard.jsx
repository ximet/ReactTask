import React from 'react';
import PropTypes from 'prop-types';

import { getFormattedDate } from '../../../../utils/getFormattedDate';

function WeatherCard({ weatherInfo }) {
  const date = getFormattedDate(weatherInfo.date)
  console.log(date.dayOfWeek);
  return <div>Weather Card</div>;
}

WeatherCard.prototypes = {
  weatherInfo: PropTypes.shape({
    date: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    maxWindSpeed: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    precipAccum: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    windDir: PropTypes.number.isRequired,
  })
}

export default WeatherCard;
