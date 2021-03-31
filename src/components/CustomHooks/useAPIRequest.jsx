import { useState, useEffect } from 'react';
import { ERRORS, REQUEST_TYPES } from '../../common/constants';
import { getLocationData, getCurrentWeatherData } from '../../services/weatherService';
import { cancelRequest, areRequestsCanceled } from '../../common/axios-config';

const typeMap = new Map([
  [REQUEST_TYPES.location, getLocationData],
  [REQUEST_TYPES.current, getCurrentWeatherData]
]);

const useAPIRequest = (type, urlParam) => {
  const [data, setData] = useState([]);

  if (!typeMap.has(type)) {
    return [];
  }

  useEffect(() => {
    typeMap
      .get(type)(urlParam)
      .then(data => setData(data))
      .catch(error => {
        areRequestsCanceled(error) || alert(ERRORS.DEFAULT.message);
      });

    return () => cancelRequest();
  }, []);

  return data;
};

export default useAPIRequest;
