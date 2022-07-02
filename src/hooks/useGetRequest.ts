import { useState, useEffect } from 'react';
import { getData } from '../helpers/api';
import { AxiosError } from 'axios';

//param - location or id
export const useGetRequest = (endpoint: string, param: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isSubscribed = true;
    setError(null);
    setLoading(true);
    getData(endpoint, param)
      .then(data => isSubscribed && setData(data))
      .catch((err: Error | AxiosError) => isSubscribed && setError(err.message))
      .finally(() => setLoading(false));

    return () => {
      isSubscribed = false;
    };
  }, [param]);

  return {
    data,
    loading,
    error
  };
};
