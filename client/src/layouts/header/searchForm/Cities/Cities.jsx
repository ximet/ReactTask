import React from 'react';
import classes from './Cities.module.css';
import City from './City/City';
import { v4 as uuidv4 } from 'uuid';

function Cities({ cities, setWeather, setLocation}) {

  const onClickHandle = (city) => {
    setWeather(city);
    setLocation(city)
  }

  return (
    <div className={classes.container}>
      {cities.map(city => (
        <City key={uuidv4()} city={city} onClickHandle={onClickHandle}/>
      ))}
    </div>
  );
}

export default Cities;
