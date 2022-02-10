import React from 'react';
import PropTypes from 'prop-types';

import './TodaysWeatherItem.scss';

function TodaysWeatherItem({ data: { time, temperature, symbol } }) {
  const dateOptions = { hour: 'numeric' };
  const date = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(time));

  return (
    <div className="todays__card">
      <div className="todays__card-title">{date}</div>
      <img className="todays__card-img" src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`} alt="weather" />
      <div className="todays__card-temperature">{`${temperature}°C`}</div>
    </div>
  );
}

TodaysWeatherItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TodaysWeatherItem;
