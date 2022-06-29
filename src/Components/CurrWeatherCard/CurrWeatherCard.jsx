import styles from './CurrWeatherCard.module.scss';
import { endpoints } from '../../Helpers/constants';

export default function CurrWeatherCard({ locationData, currWeather }) {
  function formatDate() {
    const selectedDate = new Date(currWeather.current.time);

    let date = selectedDate.toLocaleString('en-GB', {
      day: 'numeric',
      weekday: 'long',
      month: 'long'
    });
    let year = selectedDate.toLocaleString('en-GB', {
      year: 'numeric'
    });

    return `${date} ${year}`;
  }

  function formatTime() {
    const selectedDate = new Date(currWeather.current.time);

    let hour = selectedDate.toLocaleString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    return `${hour}`;
  }

  function getWeatherSymbol(symbol) {
    return endpoints.SYMBOL(symbol);
  }

  return (
    <div className={styles.container}>
      <div className={styles['container__location']}>
        <p className={styles['location-name']}>{locationData.name}</p>
        <p className={styles['country-name']}>{locationData.country}</p>
        <small>{formatDate()}</small>
      </div>
      <div className={styles['container__weather']}>
        <img width="120" src={getWeatherSymbol(currWeather.current.symbol)} />
        <div className={styles['container__weather-details']}>
          <p className={styles['temperature']}>{currWeather.current.temperature}&deg;</p>
          <p>
            {currWeather.current.symbolPhrase.charAt(0).toUpperCase() +
              currWeather.current.symbolPhrase.slice(1)}
          </p>
          <p>Feels like {currWeather.current.feelsLikeTemp}&deg;</p>
        </div>
      </div>
      <div>
        <small>
          <strong>Updated as of {formatTime()}</strong>
        </small>
      </div>

      <div className={styles.container__grid}>
        <div className={styles['grid-item']}>
          <small>Rain Chance: {currWeather.current.precipProb}%</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Cloudiness: {currWeather.current.cloudiness}%</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Humidity: {currWeather.current.relHumidity}%</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Wind Speed: {currWeather.current.windSpeed * 3.6} km/h</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Visibility: {currWeather.current.visibility / 1000} km</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Pressure: {parseFloat(currWeather.current.pressure / 1000).toFixed(3)} bar</small>
        </div>
      </div>
    </div>
  );
}
