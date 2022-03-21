import React from 'react';
import classes from './WeatherSymbol.module.scss';

const WeatherSymbol = ({ symbol, symbolPhrase }) => {
  return (
    <img
      className={classes.symbol}
      src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`}
      alt={symbolPhrase}
    />
  );
};

export default WeatherSymbol;
