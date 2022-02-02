import React from 'react';
import PropTypes from 'prop-types';

import './CurrentWeatherItem.scss';

function CurrentWeatherItem({ name, data }) {
  return (
    <div className="current__weather-item">
      <span className="current__weather-item-bold">{data}</span>
      <span>{name}</span>
    </div>
  );
}

CurrentWeatherItem.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CurrentWeatherItem;
