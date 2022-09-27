import { useEffect, useState } from 'react';
import { STORAGE_TOKEN } from '../helper/variables';

function useFetch(endpoint, searchQuery) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        // const res = await fetch(
        //   `http://localhost:3333/https://pfa.foreca.com/api/v1/location/${endpoint}/lon`,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem(STORAGE_TOKEN)}`
        //     }
        //   }
        // );
        // console.log(res);
        const response = await fetch(
          `http://localhost:3333/pfa.foreca.com/api/v1/location/${endpoint}/${searchQuery}`
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
