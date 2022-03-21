import { useEffect, useState } from 'react';

const useRequest = (request, location) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location) {
      request(location).then((response) => (
        response?.name === 'Error'
          ? setError(response.message)
          : setData(response)
      ));
    }
  }, [location]);

  return [data, error];
};

export default useRequest;
