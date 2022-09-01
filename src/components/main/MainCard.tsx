import React, { FC } from 'react';
import styles from './Main.css';
import { CurrentWeatherType } from 'types/weatherTypes';
import { LocationInfoType } from 'types/cityInfoType';

type MainCardProps = {
  currentWeather: CurrentWeatherType;
  location: LocationInfoType;
};

const convertTime = (timeData: string) => {
  const date = new Date(timeData);

  return {
    date: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    hours: date.getHours(),
    minutes: date.getMinutes()
  };
};

const MainCard: FC<MainCardProps> = ({ currentWeather, location }) => {
  const date = convertTime(currentWeather.current.time);
  return (
    <div className={styles['main-card']}>
      <div className={`${styles['main-card__item']} ${styles['main-card__item_center']}`}>
        <h3 className={styles['main-card__title']}>Location: {location.city}</h3>
        <p>
          {date.date}-{date.month}-{date.year} {date.hours}:{date.minutes}
        </p>
        <img
          src={`https://developer.foreca.com/static/images/symbols/${currentWeather.current.symbol}.png`}
          alt={currentWeather.current.symbolPhrase}
        />
        <p>
          {currentWeather.current.symbolPhrase}, {currentWeather.current.temperature}°C
        </p>
      </div>
      <div className={styles['main-card__item']}>
        <p>Relative humidity: {currentWeather.current.relHumidity}%</p>
        <p>
          Wind speed: {currentWeather.current.windSpeed}m/s ({currentWeather.current.windDirString})
        </p>
        <p>Wind gust: {currentWeather.current.windGust}m/s</p>
        <p>Probability of precipitation: {currentWeather.current.precipProb}%</p>
        <p>Cloudiness: {currentWeather.current.cloudiness}%</p>
        <p>UV index: {currentWeather.current.uvIndex}</p>
        <p>Visibility: hidden :))))</p>
      </div>
    </div>
  );
};

export default MainCard;
