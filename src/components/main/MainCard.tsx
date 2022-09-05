import React, { FC } from 'react';
import styles from './Main.css';
import { CurrentWeatherType } from 'types/weatherTypes';
import { LocationInfoType } from 'types/cityInfoType';
import { convertTime, getImgURL } from '../../helpers';

type MainCardProps = {
  currentWeather: CurrentWeatherType;
  location: LocationInfoType;
};

const MainCard: FC<MainCardProps> = ({ currentWeather, location }) => {
  const {
    time,
    symbol,
    symbolPhrase,
    temperature,
    relHumidity,
    windSpeed,
    windDirString,
    windGust,
    precipProb,
    cloudiness,
    uvIndex
  } = currentWeather;

  const date = convertTime(time);

  return (
    <div className={styles['main-card']}>
      <div className={`${styles['main-card__item']} ${styles['main-card__item_center']}`}>
        <h3 className={styles['main-card__title']}>Location: {location.city}</h3>
        <p>
          {date.date}-{date.month}-{date.year} {date.hours}:{date.minutes}
        </p>
        <img src={getImgURL(symbol)} alt={symbolPhrase} />
        <p>
          {symbolPhrase}, {temperature}°C
        </p>
      </div>
      <div className={styles['main-card__item']}>
        <p>Relative humidity: {relHumidity}%</p>
        <p>
          Wind speed: {windSpeed}m/s ({windDirString})
        </p>
        <p>Wind gust: {windGust}m/s</p>
        <p>Probability of precipitation: {precipProb}%</p>
        <p>Cloudiness: {cloudiness}%</p>
        <p>UV index: {uvIndex}</p>
        <p>Visibility: hidden :))))</p>
      </div>
    </div>
  );
};

export default MainCard;
