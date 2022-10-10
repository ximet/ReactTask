import React, { useEffect, useState } from 'react';
import styles from '../styles.scss';

function City() {
  const [cityInfo, setCityInfo] = useState([]);
  const city = JSON.parse(localStorage.getItem('currentCity'));
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:3333/pfa.foreca.com/api/v1/current/${city.id}`
      );
      const reqData = await response.json();
      setCityInfo(reqData.current);
    })();
  }, []);
  return (
    <div className={styles.cityPage}>
      <p>
        the current weather in {city.name} is <span>{cityInfo.temperature}</span> deg
      </p>
    </div>
  );
}
export default City;
