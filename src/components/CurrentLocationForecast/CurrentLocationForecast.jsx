import React from 'react';
import Card from '../../atomic-components/Card/Card';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyForecast from '../DailyForecast/DailyForecast';

function CurrentLocationForecast({ locationInfo, currentWeather, currentDate, dailyForecast }) {
  return (
    <Card>
      <CurrentWeather
        locationInfo={locationInfo}
        currentWeather={currentWeather}
        currentDate={currentDate}
      />
      <DailyForecast dailyForecast={dailyForecast} />
    </Card>
  );
}

export default CurrentLocationForecast;
