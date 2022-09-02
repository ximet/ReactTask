import React, { FC } from 'react';
import { DailyWeather } from 'types';
import styles from './styles.module.scss';

interface DayForecast {
  dayWeather: DailyWeather;
}

const DailyWeatherCard: FC<DayForecast> = ({ dayWeather }) => {
  return (
    <div className={styles.dayWeatherBox}>
      <h5>{dayWeather.date}</h5>
      <img
        className={styles.symbol}
        src={`https://developer.foreca.com/static/images/symbols/${dayWeather.symbol}.png`}
        alt={dayWeather.symbol}
      />
      <h2 className={styles.temperature}>{dayWeather.maxTemp}&deg;C </h2>
      <h5>{dayWeather.symbolPhrase}</h5>
    </div>
  );
};

export default DailyWeatherCard;
