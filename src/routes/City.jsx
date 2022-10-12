import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_EDPOIONTS } from '../helper/variables';
import useFetch from '../hooks/useFetch';
import styles from '../styles.scss';

function City() {
  const cityId = useParams().id;
  const [cityTemperature, setCityTemperature] = useState('');
  const [cityName, setCityName] = useState('');
  const cityInfoFetch = useFetch(API_EDPOIONTS.CURRENT, cityId).data;
  const cityNameFetch = useFetch(API_EDPOIONTS.LOCATION, cityId).data;
  useEffect(() => {
    setCityTemperature(cityInfoFetch.current?.temperature);
    setCityName(cityNameFetch?.name);
  }, [cityInfoFetch, cityNameFetch]);
  return (
    <div className={styles.cityPage}>
      <p>
        the current weather in {cityName} is <span>{cityTemperature}</span> deg
      </p>
    </div>
  );
}
export default City;
