import React from 'react';
import CityForecast from '../../layouts/CityForecast/CityForecast';
import DailyForecasts from '../../layouts/dailyForecasts/Container';
import HourlyForecasts from '../../layouts/hourlyForecasts/Container';
import { themeType } from '../../types/types';

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
  theme: themeType
}

export default CityForecastView;
