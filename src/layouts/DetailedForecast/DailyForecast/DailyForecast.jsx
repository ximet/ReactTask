import React from 'react';
import PropTypes from 'prop-types';

function DailyForecast({ forecast }) {
  console.log(forecast);
  return <div>Daily Forecast</div>;
}

DailyForecast.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      maxTemp: PropTypes.number,
      maxWindSpeed: PropTypes.number,
      minTemp: PropTypes.number,
      precipAccum: PropTypes.number,
      symbol: PropTypes.string,
      windDir: PropTypes.number
    })
  )
};

export default DailyForecast;
