import React, { FC } from 'react';
import styles from './Main.css';
import { DailyWeatherType } from 'types/weatherTypes';
import { convertTime } from '../../helpers';

type HourlyCardProps = {
  dailyWeather: DailyWeatherType;
};

const MainDailyCard: FC<HourlyCardProps> = ({ dailyWeather }) => {
  const { date: dateInfo, symbol, symbolPhrase, maxTemp, minTemp, sunrise, sunset } = dailyWeather;

  const date = convertTime(dateInfo);

  return (
    <div className={styles['daily-card']}>
      <div>
        <span>{`${date.date}-${date.month}`}, </span>
        <span>{symbolPhrase}</span>
      </div>
      <img
        src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`}
        alt={symbolPhrase}
      />
      <p>
        Temperature: {minTemp}°C - {maxTemp}°C
      </p>
      <div className={styles['sun-group']}>
        <div>
          <img src={require('../../pictures/sunrise.png')} alt="" className={styles['sun-icon']} />
          <p>{sunrise}</p>
        </div>
        <div>
          <img src={require('../../pictures/sunset.png')} alt="" className={styles['sun-icon']} />
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default MainDailyCard;
