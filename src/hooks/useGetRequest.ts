import { useState, useEffect } from 'react';
import { getData } from '../helpers/api';
import { AxiosError } from 'axios';

//param - location or id
export const useGetRequest = (endpoint: string, param: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    setLoading(true);
    getData(endpoint, param)
      .then(data => setData(data))
      .catch((err: Error | AxiosError) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
    error
  };
};
