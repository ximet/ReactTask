import { useEffect, useState } from 'react';

function useFetch(endpoint, searchQuery) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://pfa.foreca.com/api/v1/location/${endpoint}/${searchQuery}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
            }
          }
        );
        const reqData = await response.json();
        setData(reqData.locations);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchQuery, endpoint]);

  return { isLoading, data, error };
}

export default useFetch;
