import React, { FC } from 'react';
import styles from './Main.css';
import { HourlyWeatherType } from '../../types/weatherTypes';
import { convertTime, getImgURL } from '../../utils/helpers';

type HourlyCardProps = {
  hourlyWeather: HourlyWeatherType;
};

const MainHourlyCard: FC<HourlyCardProps> = React.memo(({ hourlyWeather }) => {
  const {
    time,
    temperature,
    feelsLikeTemp,
    symbol,
    windSpeed,
    windDirString,
    relHumidity,
    precipProb,
    cloudiness,
    pressure,
    visibility
  } = hourlyWeather;

  const date = convertTime(time);

  return (
    <div className={styles['hourly-card']}>
      <h4 className={styles['hourly-card__title']}>{`${date.hours}:${date.minutes}`}</h4>
      <img src={getImgURL(symbol)} alt={symbol} className={styles['hourly-card__img']} />
      <div className={styles['hourly-columns']}>
        <p className={styles['hourly-column']}>
          Temperature: {temperature}°C
          <br />
          Feels like temperature: {feelsLikeTemp}°C
          <br />
          Probability of precipitation: {precipProb}%<br />
          Relative humidity: {relHumidity}%
        </p>
        <p className={styles['hourly-column']}>
          Wind speed: {windSpeed}m/s ({windDirString})<br />
          Cloudiness: {cloudiness}%<br />
          Pressure: {pressure}hPa
          <br />
          Visibility: {visibility}m
        </p>
      </div>
    </div>
  );
});

export default MainHourlyCard;
