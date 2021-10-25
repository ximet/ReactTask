import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './WeatherCard/WeatherCard';

function DailyForecast({ forecast }) {
  console.log(forecast);
  return (
    <div>
      {forecast.map(weatherInfo => (
        <WeatherCard key={weatherInfo.date} weatherInfo={weatherInfo} />
      ))}
    </div>
  );
}

DailyForecast.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      maxTemp: PropTypes.number.isRequired,
      maxWindSpeed: PropTypes.number.isRequired,
      minTemp: PropTypes.number.isRequired,
      precipAccum: PropTypes.number.isRequired,
      symbol: PropTypes.string.isRequired,
      windDir: PropTypes.number.isRequired
    })
  )
};

export default DailyForecast;
