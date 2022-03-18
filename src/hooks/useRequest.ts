import { useEffect, useState } from 'react';

const useRequest = <T>(request: Function, location: string): [T, string] => {
  const [data, setData] = useState<T| null>(null);
  const [error, setError] = useState<string| null>(null);

  useEffect(() => {
    if (location) {
      request(location).then((response: any) => (
        response?.name === 'Error'
          ? setError(response.message)
          : setData(response)
      ));
    }
  }, [location]);

  return [data, error];
};

export default useRequest;
