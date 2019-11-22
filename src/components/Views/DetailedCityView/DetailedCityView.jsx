import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import WeatherIcon from '../../../config/weatherIcons';
import styles from './DetailedCityView.scss';

const DetailedCityView = ({ history, cities, currentCity }) => {
  const { id } = useParams();
  const city = (id) ? cities[id] : currentCity;
  return (
    <>
      <div className={styles.cityBlock}>
        <div className={styles.cityInfo}>
          <h1 className={styles.name}>
            {city.name}
          </h1>
          <h2 className={styles.temperature}>
            {Math.round(city.temp)}
            <span> &#8451;</span>
          </h2>
        </div>
        <div className={styles.icon}>
          {city.weatherIcon && <img src={`/${WeatherIcon[city.weatherIcon]}`} className={styles.weatherIcon} alt={city.name} />}
        </div>
      </div>

      <Button
        onClick={() => history.push('/cities')}
      >
        More...
      </Button>
    </>
  );
};

DetailedCityView.propTypes = {
  currentCity: PropTypes.shape({
    name: PropTypes.string,
    temp: PropTypes.string,
    weatherIcon: PropTypes.string,
  }),
  history: PropTypes.func,
  cities: PropTypes.arrayOf,
};

const mapStateToProps = ({ currentCity, cities }) => ({
  currentCity,
  cities,
});

export default connect(mapStateToProps)(withRouter(DetailedCityView));
