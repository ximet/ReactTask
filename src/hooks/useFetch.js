import { useEffect, useState } from 'react';
import { API_EDPOIONTS, STORAGE_TOKEN } from '../helper/variables';

function useFetch(endpoint, searchQuery, id) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const URL = id
    ? `http://localhost:3333/pfa.foreca.com/api/v1/${endpoint}/${id}`
    : `http://localhost:3333/pfa.foreca.com/api/v1/location/${endpoint}/${searchQuery}`;
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(URL);
        const reqData = await response.json();
        if (endpoint === API_EDPOIONTS.SEARCH) {
          setData(reqData.locations);
        } else if (endpoint === API_EDPOIONTS.CURRENT) {
          setData(reqData.current);
        } else if (endpoint === API_EDPOIONTS.LOCATION) {
          setData(reqData.name);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchQuery, endpoint]);

  return { isLoading, data, error };
}

export default useFetch;
