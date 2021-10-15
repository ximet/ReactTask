import React from 'react';

import styles from './CityCard.module.scss';
import ExampleCityImg from '../../../../assets/images/city-example-img.png';

function CityCard({ info }) {
  return (
    <div className={styles.cityCard}>
      <img src={ExampleCityImg} alt="city card" className={styles.cityImg} />
      <span className={styles.cityName}>{info.name}</span>
    </div>
  );
}

export default CityCard;
