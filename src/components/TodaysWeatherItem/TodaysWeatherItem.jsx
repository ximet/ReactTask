import React from 'react';
import PropTypes from 'prop-types';

import './TodaysWeatherItem.scss';

function TodaysWeatherItem({ time, img, temperature }) {
  return (
    <div className="todays__card">
      <div className="todays__card-title">{time}</div>
      <img className="todays__card-img" src={img} alt="weather" />
      <div className="todays__card-temperature">{temperature}</div>
    </div>
  );
}

TodaysWeatherItem.propTypes = {
  time: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
};

export default TodaysWeatherItem;
