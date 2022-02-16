import React from 'react';
import classes from './LocationHeader.module.scss';

const LocationHeader = ({ name, country }) => {
  return (
    <header className={classes.header}>
      <h2 className={classes.header__location}>{name}</h2>
      <h3 className={classes.header__country}>{country}</h3>
    </header>
  );
};

export default LocationHeader;
