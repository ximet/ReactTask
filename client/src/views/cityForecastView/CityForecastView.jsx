import React from 'react';
import CityForecast from '../../layouts/CityForecast/CityForecast';
import DailyForecasts from '../../layouts/dailyForecasts/Container';
import HourlyForecasts from '../../layouts/hourlyForecasts/Container';

function CityForecastView({ theme }) {
  return (
    <>
      <CityForecast />
      <DailyForecasts theme={theme} />
      <HourlyForecasts theme={theme} />
    </>
  );
}

export default CityForecastView;
