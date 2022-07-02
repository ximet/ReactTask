import { useEffect, useState } from 'react';

export const useDebounce = (value: any) => {
  const [debouncedValue, setDebouncedValue] = useState<any>();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue
};
