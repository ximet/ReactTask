import React from 'react';
import classes from './Cities.module.css';
import City from './City/City';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function Cities({ cities, setWeather, setLocation }) {
  const handleClick = city => {
    setWeather(city);
    setLocation(city);
  };

  return (
    <div className={classes.container}>
      {cities.map(city => (
        <City key={uuidv4()} city={city} onClick={handleClick} />
      ))}
    </div>
  );
}

Cities.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    })
  ).isRequired,
  setWeather: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired
};

export default Cities;
