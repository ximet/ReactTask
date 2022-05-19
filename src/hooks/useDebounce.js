import { useState, useEffect, useCallback } from 'react';

const useDebounce = debounceTime => {
  const [timer, setTimer] = useState();
  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  }, [timer]);

  const debounce = useCallback(
    functionToCall => {
      setTimer(
        setTimeout(() => {
          functionToCall();
        }, debounceTime)
      );
    },
    [debounceTime]
  );
  return debounce;
};

export default useDebounce;
