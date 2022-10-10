import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_EDPOIONTS } from '../helper/variables';
import useFetch from '../hooks/useFetch';
import styles from '../styles.scss';

function City() {
  const [cityInfo, setCityInfo] = useState([]);
  const [cityName, setCityName] = useState('');

  const cityId = useParams().id;
  useEffect(() => {
    (async () => {
      const responseName = await fetch(
        `http://localhost:3333/pfa.foreca.com/api/v1/location/${cityId}`
      );
      const reqDataName = await responseName.json();
      setCityName(reqDataName.name);
      const responseInfo = await fetch(
        `http://localhost:3333/pfa.foreca.com/api/v1/current/${cityId}`
      );
      const reqDataInfo = await responseInfo.json();
      setCityInfo(reqDataInfo.current);
    })();
  }, [cityId]);
  return (
    <div className={styles.cityPage}>
      <p>
        the current weather in {cityName} is <span>{cityInfo.temperature}</span> deg
      </p>
    </div>
  );
}
export default City;
