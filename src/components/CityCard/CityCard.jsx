import React from 'react';
import PropTypes from 'prop-types';

import LocationIcon from '../../assets/images/color-location-icon.png';
import styles from './CityCard.module.scss';

function CityCard({ info }) {
  return (
    <div className={styles.cityCard}>
      <img src={LocationIcon} alt="location icon" />
      <span className={styles.cityName}>{`${info.country}, ${info.name}`}</span>
    </div>
  );
}

CityCard.propTypes = {
  info: PropTypes.shape({
    country: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default CityCard;
