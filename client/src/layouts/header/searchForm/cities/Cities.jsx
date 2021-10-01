import React from 'react';
import classes from './Cities.module.css';
import City from './City/City';

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
