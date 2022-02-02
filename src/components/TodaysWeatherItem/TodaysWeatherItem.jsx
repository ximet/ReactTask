import React from 'react';
import PropTypes from 'prop-types';

import img from '../../assets/images/d000.png';

import './TodaysWeatherItem.scss';

function TodaysWeatherItem({ data: { time, temperature } }) {
  const dateOptions = { hour: 'numeric' };
  const date = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(time));

  return (
    <div className="todays__card">
      <div className="todays__card-title">{date}</div>
      <img className="todays__card-img" src={img} alt="weather" />
      <div className="todays__card-temperature">{`${temperature}°C`}</div>
    </div>
  );
}

TodaysWeatherItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TodaysWeatherItem;
