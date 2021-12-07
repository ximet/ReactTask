import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getCitiesFromLS from '../../../services/getCitiesFromLS';
import SearchResult from '../../layout/Search/SearchResult';
import styles from './PreviousCities.modules.css';
function PreviousCities() {
  const [lastCities, setLastCities] = useState();

  useEffect(async () => {
    setLastCities(await getCitiesFromLS());
  }, []);

  const LastCities = () => {
    if (lastCities) {
      return lastCities.map(city => {
        return (
          <div key={city.cityId} className={styles.cityItem}>
            <Link to={`/cityweather/${city.city}/${city.cityId}`}>{city.city}</Link>
          </div>
        );
      });
    } else {
      return <p>loading...</p>;
    }
  };

  return (
    <div className={styles.lastCitiesContainer}>
      <LastCities />
    </div>
  );
}

export default PreviousCities;
