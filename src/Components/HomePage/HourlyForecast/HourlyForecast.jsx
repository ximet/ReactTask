import { getWeatherSymbol, formatDate } from '../../../Helpers/functions';
import { opts } from '../../../Helpers/constants';
import { useSelector } from 'react-redux';

import { WiRaindrop, WiStrongWind } from 'react-icons/wi';
import styles from './HourlyForecast.module.scss';

function HourlyForecast({ hourlyWeather }) {
  const theme = useSelector((state) => state.theme);

  const listItems = hourlyWeather.forecast.map((item) => {
    return (
      <div className={styles['container__slider-slide']} key={item.time}>
        <div>
          <strong>{formatDate(opts.time, item.time)}</strong>
        </div>
        <img width="40" src={getWeatherSymbol(item.symbol)} />
        <div className={styles.temperature}>
          <div className={styles['temperature']}>{item.temperature}&deg;</div>
        </div>
        <div className={styles.details}>
          <small className={styles.rain}>
            <WiRaindrop />
            {item.precipProb}%
          </small>
          <small className={styles.wind}>
            <WiStrongWind />
            {item.windSpeed * 3.6} km/h
          </small>
        </div>
      </div>
    );
  });

  return (
    <div className={styles[`${theme}-theme`]}>
      <h2>Hourly</h2>
      <div className={styles.container__slider}>{listItems}</div>
    </div>
  );
}

export default HourlyForecast;
