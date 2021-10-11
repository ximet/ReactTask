import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
  const [dbValue, setDbValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDbValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return dbValue;
}
