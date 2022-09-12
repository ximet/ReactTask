import { LayoutIcon } from 'components/LayoutIcon';
import React, { FC } from 'react';
import { DailyWeather } from 'types';
import { getSymbol } from 'utils/getImages';
import styles from './styles.module.scss';

interface DayForecast {
  dayWeather: DailyWeather;
  onClick: () => void;
  className: string;
}

const DailyWeatherCard: FC<DayForecast> = ({ dayWeather, onClick, className }) => {
  return (
    <div className={`${styles.dayWeatherBox} ${className}`} onClick={onClick} onKeyDown={onClick}>
      {className.split('_')[0] === 'active' && (
        <div className={styles.div}>
          <LayoutIcon className={`${styles.div}`} />
        </div>
      )}
      <h5>{dayWeather.date}</h5>
      <img className={styles.symbol} src={getSymbol(dayWeather.symbol)} alt={dayWeather.symbol} />
      <h2 className={styles.temperature}>{dayWeather.maxTemp}&deg;C </h2>
      <h5>{dayWeather.symbolPhrase}</h5>
    </div>
  );
};

export default DailyWeatherCard;
