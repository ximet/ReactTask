import React from 'react';
import CityForecast from '../../layouts/CityForecast/CityForecast';
import DailyForecasts from '../../layouts/dailyForecasts/Container';
import HourlyForecasts from '../../layouts/hourlyForecasts/Container';
import PropTypes from 'prop-types'

function CityForecastView({ theme }) {
  return (
    <>
      <CityForecast />
      <DailyForecasts theme={theme} />
      <HourlyForecasts theme={theme} />
    </>
  );
}

CityForecastView.propTypes = {
  theme: PropTypes.string.isRequired
};

export default CityForecastView;
