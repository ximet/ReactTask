import styles from './CurrWeatherCard.module.scss';
import endpoints from '../../Helpers/endpoints';

export default function CurrWeatherCard(props) {
  let locationData = props.locationData;
  let currWeather = props.currWeather;

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
    let hour = selectedDate.toLocaleString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    return `${date} ${year} ${hour}`;
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
          <small>Feels like: {currWeather.current.feelsLikeTemp}&deg;</small>
          <small>{currWeather.current.symbolPhrase}</small>
        </div>
      </div>
    </div>
  );
}
