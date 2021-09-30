import React from 'react';
import classes from './cities.module.css';
import City from './city/City';

//temp data, it will be removed later

function Cities({ cities }) {
  return (
    <div className={classes.container}>
      {cities.map((city, index) => (
        <City key={`${city}${index}`} city={city} />
      ))}
    </div>
  );
}

export default Cities;
