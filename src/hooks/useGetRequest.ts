import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { getData } from 'helpers';

//param - location or id
export const useGetRequest = (endpoint: string, param: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const accessToken: string = document.cookie.slice(6);

  useEffect(() => {
    setError(null);
    if (param && accessToken.length > 10) {
      setLoading(true);
      getData(endpoint, param)
        .then(data => setData(data))
        .catch((err: Error | AxiosError) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [param, accessToken]);

  return {
    data,
    loading,
    error
  };
};
