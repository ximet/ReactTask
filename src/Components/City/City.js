import styles from './City.css';
import { useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { prevPageActions } from '../../Store/reducers/PrevPageSlice/index';

const City = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    dispatch(prevPageActions.setPrevPage(location.pathname));
  }, [location]);

  const viewDetails = () => {
    navigate(`/city&city=${props.weather.city}`);
  };

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
            <b>Cloudiness:</b> {props.weather.cloudiness}
          </li>
          <li>
            <b>Wind speed:</b> {props.weather.windSpeed} м/с
          </li>
        </ul>
        <div className={styles.more} onClick={viewDetails}>
          Details
        </div>
      </div>
    </>
  );
};

export default City;
