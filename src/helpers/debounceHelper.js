import { useState, useEffect } from 'react';

export function debounce(value, delay) {
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
