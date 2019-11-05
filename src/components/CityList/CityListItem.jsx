import React from 'react';
import PropTypes from 'prop-types';

export default function CityListItem({ cityName, temperature }) {
  return (
    <>
      <div>{cityName}</div>
      <div>{temperature} °C</div>
    </>
  );
}

CityListItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};
