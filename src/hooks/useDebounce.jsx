import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
  const [dbValue, setDbValue] = useState('');

  useEffect(() => {
    const dbTimeout = setTimeout(() => {
      setDbValue(value);
    }, delay);
    return () => {
      clearTimeout(dbTimeout);
    };
  }, [value]);

  return dbValue;
}
