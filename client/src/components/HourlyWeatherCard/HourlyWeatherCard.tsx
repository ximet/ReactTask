import React, { FC } from 'react';
import { HourlyWeather } from 'types';
import { getSymbol } from 'utils/getImages';
import styles from './HourlyWeatherCard.module.scss';

interface HourForecast {
  hourWeather: HourlyWeather;
}

const HourlyWeatherCard: FC<HourForecast> = ({ hourWeather }) => {
  return (
    <div className={styles.dayWeatherBox}>
      <h4>{hourWeather.time.match(/\d\d:\d\d/)}</h4>
      <img className={styles.symbol} src={getSymbol(hourWeather.symbol)} alt={hourWeather.symbol} />
      <h2 className={styles.temperature}>{hourWeather.temperature}&deg;C </h2>
      <h5>{hourWeather.symbolPhrase}</h5>
    </div>
  );
};

export default HourlyWeatherCard;
