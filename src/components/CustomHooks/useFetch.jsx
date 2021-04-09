import { useEffect } from 'react';
import { cancelRequest } from '../../common/axios-config';

const useFetch = (loadFunction, urlParam) => {
  useEffect(() => {
    (async () => {
      await loadFunction(urlParam);
    })();

    return () => cancelRequest();
  }, [loadFunction, urlParam]);
};

export default useFetch;
