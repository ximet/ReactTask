import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getRecentCities from '../../../services/getRecentCities';
import SearchResult from '../../layout/Search/SearchResult';
import styles from './PreviousCities.modules.css';
function PreviousCities() {
  const [recentCities, setRecentCities] = useState();

  useEffect(async () => {
    // setLastCities(await getCitiesFromLS());
    const recentCities = await getRecentCities();
    setRecentCities(recentCities);
  }, []);

  return (
    <div className={styles.lastCitiesContainer}>
      {recentCities ? (
        recentCities.map(city => {
          return (
            <div key={city.cityId} className={styles.cityItem}>
              <Link to={`/cityweather/${city.city}/${city.cityId}`}>{city.city}</Link>
            </div>
          );
        })
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default PreviousCities;
