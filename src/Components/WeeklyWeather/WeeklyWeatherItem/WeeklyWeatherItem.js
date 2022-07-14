import styles from './WeeklyWeatherItem.css';

const WeeklyWeatherItem = props => {
  const change = id => {
    let classLarge = '',
      date = props.item.date;
    if (id == 0) {
      classLarge = styles.cityLarge;
      date = 'Today';
    } else if (id == 1) {
      classLarge = styles.cityLarge;
      date = 'Tommorow';
    }
    return { classLarge, date };
  };

  return (
    <div key={props.item.date} className={styles.city + ' ' + change(props.id).classLarge}>
      <img
        className={styles.symbol}
        src={`https://developer.foreca.com/static/images/symbols/${props.item.symbol}.png`}
      />
      <div>
        <h3 className={styles.h3}>{change(props.id).date}</h3>
        <h4 className={styles.h4}>
          {props.item.minTemp}-{props.item.maxTemp}°C
        </h4>
      </div>
      <ul className={styles.list}>
        <li>
          <b>Humidity:</b> {props.item.minRelHumidity}-{props.item.maxRelHumidity}%
        </li>
        <li>
          <b>Cloudiness:</b> {props.item.cloudiness}
        </li>
        <li>
          <b>Wind speed:</b> {props.item.windSpeed} м/с
        </li>
      </ul>
    </div>
  );
};

export default WeeklyWeatherItem;
