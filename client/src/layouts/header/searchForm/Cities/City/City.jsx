import React from 'react';
import classes from './City.module.css';
import PropTypes from 'prop-types';

function City({ city, onClick }) {
  return (
    <div className={classes.container} onClick={() => onClick(city)}>
      <div className={classes.textContent}>
        <span>{city.name}</span>
        <span className={classes.country}>{city.country}</span>
      </div>
    </div>
  );
}

City.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default City;
