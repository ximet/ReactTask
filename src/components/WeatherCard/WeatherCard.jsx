import React from 'react';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherSymbol from '../WeatherSymbol/WeatherSymbol';
import classes from './WeatherCard.module.scss';

const WeatherCard = ({ weather }) => {
  return (
    <div>
      <WeatherSymbol symbol={weather.symbol ?? 'n400'} symbolPhrase={weather.symbolPhrase} />
      <WeatherInfo weather={weather} />
    </div>
  );
};

export default WeatherCard;
