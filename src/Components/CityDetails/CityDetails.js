import styles from './CityDetails.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CityDetails = props => {
  const navigate = useNavigate();
  const { prevPage } = useSelector(state => state.prevPage);
  const onPrevPage = () => {
    navigate(prevPage);
  };

  const WeeklyWeather = props.weather.map(item => {
    let classLarge = '';
    if (item.id == 1) {
      classLarge = ' ' + styles.cityLarge;
      item.date = 'Today';
    } else if (item.id == 2) {
      classLarge = ' ' + styles.cityLarge;
      item.date = 'Tommorow';
    }
    return (
      <div key={item.id} className={styles.city + classLarge}>
        <img
          className={styles.symbol}
          src={require(`../../assets/img/symbols/${item.symbol}.png`)}
        />
        <div>
          <h2>{item.date}</h2>
          <h3>
            {item.minTemp}-{item.maxTemp}°C
          </h3>
        </div>
        <ul className={styles.list}>
          <li>
            <b>Humidity:</b> {item.minRelHumidity}-{item.maxRelHumidity}%
          </li>
          <li>
            <b>Cloudiness:</b> {item.cloudiness}
          </li>
          <li>
            <b>Wind speed:</b> {item.windSpeed} м/с
          </li>
        </ul>
      </div>
    );
  });
  return (
    <>
      {prevPage && (
        <div className={styles.prevPage} onClick={onPrevPage}>
          Previus page
        </div>
      )}
      <div className={styles.CityDetailsWrap}>{WeeklyWeather}</div>
    </>
  );
};

export default CityDetails;
