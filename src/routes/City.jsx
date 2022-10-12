import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_EDPOIONTS } from '../helper/variables';
import useFetch from '../hooks/useFetch';
import styles from '../styles.scss';

function City() {
  const cityId = useParams().id;
  const [cityInfo, setCityInfo] = useState([]);
  const [cityName, setCityName] = useState('');
  const cityInfoFetch = useFetch(API_EDPOIONTS.CURRENT, null, cityId).data;
  const cityNameFetch = useFetch(API_EDPOIONTS.LOCATION, null, cityId).data;

  useEffect(() => {
    setCityInfo(cityInfoFetch);
    setCityName(cityNameFetch);
  }, [cityInfoFetch, cityNameFetch]);
  return (
    <div className={styles.cityPage}>
      <p>
        the current weather in {cityName} is <span>{cityInfo.temperature}</span> deg
      </p>
    </div>
  );
}
export default City;
