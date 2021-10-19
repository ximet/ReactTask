import React from 'react';
import classes from './Cities.module.css';
import City from './City/City';
import {v4 as uuidv4} from 'uuid'

function Cities({ cities }) {
  return (
    <div className={classes.container}>
      {cities.map(city => (
        <City key={uuidv4()} city={city} />
      ))}
    </div>
  );
}

export default Cities;
