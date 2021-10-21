import React from 'react';
import classes from './City.module.css';
import PropTypes from 'prop-types';

function City({ city, onClickHandle }) {
  return (
    <div className={classes.container} onClick={() => onClickHandle(city)}>
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
  onClickHandle: PropTypes.func.isRequired
};

export default City;
