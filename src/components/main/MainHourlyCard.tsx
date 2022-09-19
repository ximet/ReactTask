import React, { FC } from 'react';
import styles from './Main.css';
import { HourlyWeatherType } from '../../types/weatherTypes';
import { convertTime, getImgURL } from '../../helpers';

type HourlyCardProps = {
  hourlyWeather: HourlyWeatherType;
};

const MainHourlyCard: FC<HourlyCardProps> = React.memo(({ hourlyWeather }) => {
  const { time, temperature, symbol, windSpeed, windDirString } = hourlyWeather;

  const date = convertTime(time);

  return (
    <div className={styles['hourly-card']}>
      <h4 className={styles['hourly-card__title']}>
        {`${date.hours}:${date.minutes}0`}: {temperature}°C
      </h4>
      <img src={getImgURL(symbol)} alt={symbol} className={styles['hourly-card__img']} />
      <span>
        Wind: {windSpeed}m/s ({windDirString})
      </span>
    </div>
  );
});

export default MainHourlyCard;
