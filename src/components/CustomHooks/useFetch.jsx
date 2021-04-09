import { useState, useEffect } from 'react';
import { ERRORS } from '../../common/constants';
import { cancelRequest, areRequestsCanceled } from '../../common/axios-config';

const useFetch = (loadFunction, urlParam) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await loadFunction(urlParam);
        setData(data);
      } catch (error) {
        if (!areRequestsCanceled(error)) {
          alert(ERRORS.DEFAULT.message);
        }
      }
    })();

    return () => cancelRequest();
  }, [loadFunction, urlParam]);

  return data;
};

export default useFetch;
