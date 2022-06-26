import styles from './City.css';

const City = props => {
  return (
    <div className={styles.city}>
      <img
        className={styles.symbol}
        src={require(`../../Api/symbols/${props.currentWeather.symbol}.png`)}
      />
      <div>
        <h2>Батуми</h2>
        <h3>{props.currentWeather.temperature}°C</h3>
      </div>
      <ul className={styles.list}>
        <li>
          <b>Влажность:</b> {props.currentWeather.humidity}%
        </li>
        <li>
          <b>Облачность:</b> {props.currentWeather.cloudiness}
        </li>
        <li>
          <b>Скорость ветра:</b> {props.currentWeather.windSpeed} м/с
        </li>
      </ul>
    </div>
  );
};

export default City;
