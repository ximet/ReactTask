import { useEffect, useState } from 'react';

function useFetch(endpoint, param) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const URL = `http://localhost:3333/pfa.foreca.com/api/v1/${endpoint}/${param}`;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(URL);
        const reqData = await response.json();
        setData(reqData);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [endpoint, param]);

  return { isLoading, data, error };
}

export default useFetch;
