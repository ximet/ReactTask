import React, { FC } from 'react';
import { HourlyWeather } from 'types';
import { getSymbol } from 'utils/getWeatherSymbol';
import styles from './styles.module.scss';

interface HourForecast {
  hourWeather: HourlyWeather;
}

const HourlyWeatherCard: FC<HourForecast> = ({ hourWeather }) => {
  return (
    <div className={styles.dayWeatherBox}>
      <h5>{hourWeather.time}</h5>
      <img className={styles.symbol} src={getSymbol(hourWeather.symbol)} alt={hourWeather.symbol} />
      <h2 className={styles.temperature}>{hourWeather.temperature}&deg;C </h2>
    </div>
  );
};

export default HourlyWeatherCard;
