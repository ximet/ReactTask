import { getLocationByQuery } from 'API/get';
import React, { useState, useEffect, useCallback } from 'react';
import { LocationByQuery } from 'types';

const useGetSearchRequest = (inputValue: string) => {
  const [searchData, setSearchData] = useState<LocationByQuery>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const getLocations = useCallback(async () => {
    try {
      const locationData = await getLocationByQuery(inputValue);
      setSearchData(locationData);
      setIsLoading(false);
    } catch (error) {
      setErrorMsg((error as Error).message);
    }
  }, [inputValue]);

  useEffect(() => {
    setIsLoading(true);
    if (inputValue) {
      getLocations();
    }
  }, [getLocations, inputValue]);

  return {
    searchData,
    isLoading,
    errorMsg
  };
};

export default useGetSearchRequest;
