import styles from './CurrWeatherCard.module.scss';
import { formatDate, getWeatherSymbol } from '../../Helpers/functions';
import { optsDate, optsYear, optsTime } from '../../Helpers/constants';

export default function CurrWeatherCard({ locationData, currWeather }) {
  return (
    <div className={styles.container}>
      <div className={styles['container__location']}>
        <p className={styles['location-name']}>{locationData.name}</p>
        <p className={styles['country-name']}>{locationData.country}</p>
        <small>
          {`${formatDate(optsDate, currWeather.time)} ${formatDate(optsYear, currWeather.time)}`}
        </small>
      </div>
      <div className={styles['container__weather']}>
        <img width="120" src={getWeatherSymbol(currWeather.symbol)} />
        <div className={styles['container__weather-details']}>
          <p className={styles['temperature']}>{currWeather.temperature}&deg;</p>
          <p>
            {currWeather.symbolPhrase.charAt(0).toUpperCase() + currWeather.symbolPhrase.slice(1)}
          </p>
          <p>Feels like {currWeather.feelsLikeTemp}&deg;</p>
        </div>
      </div>
      <div>
        <small>
          <strong>Updated as of {formatDate(optsTime, currWeather.time)}</strong>
        </small>
      </div>

      <div className={styles.container__grid}>
        <div className={styles['grid-item']}>
          <small>Rain Chance: {currWeather.precipProb}%</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Cloudiness: {currWeather.cloudiness}%</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Humidity: {currWeather.relHumidity}%</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Wind Speed: {currWeather.windSpeed * 3.6} km/h</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Visibility: {currWeather.visibility / 1000} km</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Pressure: {parseFloat(currWeather.pressure / 1000).toFixed(3)} bar</small>
        </div>
      </div>
    </div>
  );
}
