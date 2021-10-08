import * as localStorageConstants from 'constants/localStorage';
import React, { useState, useEffect } from 'react';
import { UtilTypes } from 'types';

const useLocalStorage = <TValue>(
  localStorageKey: UtilTypes.ObjectValues<typeof localStorageConstants>,
  defaultValue: TValue | null = null,
): [TValue, React.Dispatch<React.SetStateAction<TValue>>] => {
  const [value, setValue] = useState<TValue>(() => {
    try {
      const storageValue = localStorage.getItem(localStorageKey);
      return storageValue ? JSON.parse(storageValue) : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
