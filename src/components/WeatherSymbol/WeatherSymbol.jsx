import React from 'react';
import classes from './WeatherSymbol.module.scss';

const WeatherSymbol = ({ symbol, symbolPhrase }) => {
  return (
    <div className={classes.wrapper}>
      <img src={require(`../../assets/${symbol}.png`)} alt={symbolPhrase} />
      {/* <h4 className={classes.status}>Status: {symbolPhrase}</h4> */}
    </div>
  );
};

export default WeatherSymbol;
