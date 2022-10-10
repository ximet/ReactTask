import React from 'react';
import styles from '../styles.scss';

function City() {
  const city = JSON.parse(localStorage.getItem('currentCity'));
  return <div className={styles.cityPage}>Now you are loocking on information of {city.name}</div>;
}
export default City;
