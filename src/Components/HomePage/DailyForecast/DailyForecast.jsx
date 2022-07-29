import { getWeatherSymbol, formatDate } from '../../../Helpers/functions';
import { opts } from '../../../Helpers/constants';
import { useSelector } from 'react-redux';

import { WiStrongWind } from 'react-icons/wi';
import styles from './DailyForecast.module.scss';

function DailyForecast({ dailyWeather }) {
  const theme = useSelector((state) => state.theme);

  const listItems = dailyWeather.forecast.map((item) => {
    return (
      <div className={styles['container__items-item']} key={item.date}>
        <div>{formatDate(opts.dateShort, item.date).split(',').join('')}</div>
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
    <div className={styles[`${theme}-theme`]}>
      <h2>Daily</h2>
      <div className={styles.container__items}>{listItems}</div>
    </div>
  );
}

export default DailyForecast;
