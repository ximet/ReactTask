import React from 'react';
import classes from './cities.module.css';
import City from './city/City';

function Cities() {
  return (
    <div className={classes.container}>
      <City />
    </div>
  );
}

export default Cities;
