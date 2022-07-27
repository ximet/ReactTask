import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getData } from '../helpers/api';
import { CombinedState } from '../store/index-redux';

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
  }, [param]);

  return {
    data,
    loading,
    error
  };
};
