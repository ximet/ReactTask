import styles from './CityDetails.css';
import { useNavigate } from 'react-router-dom';
import WeeklyWeather from '../WeeklyWeather/WeeklyWeather';

const CityDetails = props => {
  const navigate = useNavigate();
  const onPrevPage = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={styles.prevPage} onClick={onPrevPage}>
        Previus page
      </div>
      <h2 className={styles.h2}>{props.city}</h2>
      <div className={styles.CityDetailsWrap}>
        <WeeklyWeather weather={props.weather} />
      </div>
    </>
  );
};

export default CityDetails;
