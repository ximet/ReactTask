import React, { FC } from 'react';
import styles from './Main.css';
import { DailyWeatherType } from 'types/weatherTypes';
import { convertTime, getImgURL } from '../../utils/helpers';
import sunRise from '../../pictures/sunrise.png';
import sunSet from '../../pictures/sunset.png';

type HourlyCardProps = {
  dailyWeather: DailyWeatherType;
};

const MainDailyCard: FC<HourlyCardProps> = ({ dailyWeather }) => {
  const { date: dateInfo, symbol, symbolPhrase, maxTemp, minTemp, sunrise, sunset } = dailyWeather;

  const date = convertTime(dateInfo);

  return (
    <div className={styles['daily-card']}>
      <h4 className={styles['daily-card__title']}>
        {`${date.date}-${date.month}`}: {symbolPhrase}
      </h4>
      <img src={getImgURL(symbol)} alt={symbolPhrase} />
      <p>
        Temperature: {minTemp}°C - {maxTemp}°C
      </p>
      <div className={styles['sun-group']}>
        <div>
          <img src={sunRise} alt="" className={styles['sun-icon']} />
          <p>{sunrise.slice(0, 5)}</p>
        </div>
        <div>
          <img src={sunSet} alt="" className={styles['sun-icon']} />
          <p>{sunset.slice(0, 5)}</p>
        </div>
      </div>
    </div>
  );
};

export default MainDailyCard;
