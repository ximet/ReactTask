import React from 'react';
import PropTypes from 'prop-types';

const WeatherPreviewRow = ({ cityName, temperature }) => (
  <div>
    <h3>{cityName}</h3>
    <span>{temperature}</span>
  </div>
);
  
WeatherPreviewRow.propTypes = {
  cityName: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
};

export default WeatherPreviewRow;
