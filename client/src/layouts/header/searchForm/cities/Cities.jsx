import React from 'react';
import classes from './cities.module.css';
import City from './city/City';

function Cities({ cities }) {
  return (
    <div className={classes.container}>
      {cities.map(city => (
        <City key={city.name} city={city} />
      ))}
    </div>
  );
}

export default Cities;
