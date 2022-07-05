import styles from './City.css';

const City = props => {
  if (props.weather != undefined) {
    return (
      <>
        <div className={styles.city}>
          <img
            className={styles.symbol}
            src={require(`../../assets/img/symbols/${props.weather.symbol}.png`)}
          />
          <div>
            <h4>{props.weather.country}</h4>
            <h2>{props.weather.city}</h2>
            <h3>{props.weather.temperature}°C</h3>
          </div>
          <ul className={styles.list}>
            <li>
              <b>Humidity:</b> {props.weather.relHumidity}%
            </li>
            <li>
              <b>cloudiness:</b> {props.weather.cloudiness}
            </li>
            <li>
              <b>Wind speed:</b> {props.weather.windSpeed} м/с
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    return false;
  }
};

export default City;
