import React, { FC } from 'react';
import styles from './Main.css';
import { HourlyWeatherType } from '../../types/weatherTypes';
import { convertTime } from '../../helpers';

type HourlyCardProps = {
  hourlyWeather: HourlyWeatherType;
};

const MainHourlyCard: FC<HourlyCardProps> = ({ hourlyWeather }) => {
  const { time, temperature, symbol, windSpeed, windDirString } = hourlyWeather;

  const date = convertTime(time);

  return (
    <div className={styles['hourly-card']}>
      <div>
        <span>{`${date.hours}:${date.minutes}0`}</span>, <span>{temperature}°C</span>
      </div>
      <img
        src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`}
        alt={symbol}
        className={styles['hourly-card__img']}
      />
      <span>
        Wind: {windSpeed}({windDirString})
      </span>
    </div>
  );
};

export default MainHourlyCard;
