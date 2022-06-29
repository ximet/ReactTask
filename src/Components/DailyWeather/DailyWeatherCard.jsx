import { getWeatherSymbol } from '../../Helpers/functions';
import { WiStrongWind } from 'react-icons/wi';

import styles from './DailyWeatherCard.module.scss';

export default function DailyWeatherCard({ dailyWeather }) {
  const formatDate = (dateStr) => {
    let selectedDate = new Date(dateStr);

    let date = selectedDate
      .toLocaleString('en-GB', {
        day: 'numeric',
        weekday: 'short',
        month: 'numeric'
      })
      .split(',')
      .join('');

    return `${date}`;
  };

  const listItems = dailyWeather.forecast.map((item) => {
    return (
      <div className={styles['container__items-item']} key={item.date}>
        <div>{formatDate(item.date)}</div>
        <img width="60" src={getWeatherSymbol(item.symbol)} />
        <div className={styles.temperature}>
          <div className={styles['temperature--max']}>{item.maxTemp}&deg;</div>
          <div>{item.minTemp}&deg;</div>
        </div>
        <div className={styles.wind}>
          <WiStrongWind />
          {item.maxWindSpeed * 3.6} km/h
        </div>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <h2>Daily</h2>
      <div className={styles.container__items}>{listItems}</div>
    </div>
  );
}
