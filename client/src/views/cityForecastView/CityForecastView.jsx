import React from 'react';
import CityForecast from '../../layouts/CityForecast/CityForecast';
import DailyForecasts from '../../layouts/dailyForecasts/DailyForecasts';
import HourlyForecasts from '../../layouts/hourlyForecasts/HourlyForecasts';

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
