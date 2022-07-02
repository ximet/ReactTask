import React, { FormEvent, useEffect, useState } from 'react';
import { ENDPOINTS, getData } from '../../../helpers/api';
import { Locations, LocationSearch } from '../../../helpers/Interfaces';
import { useDebounce } from './../../../hooks/useDebounce';

const Search: React.FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm: string = useDebounce(searchTerm);
  const [searchResults, setSearchResults] = useState<Locations | null>(null);

  const inputChangeHandler = (event: FormEvent<HTMLInputElement>): void => {
    setSearchTerm(event.currentTarget.value);
  };

  useEffect(() => {
    getData(ENDPOINTS.locationSearch, debouncedSearchTerm).then(({ locations }: LocationSearch) =>
      setSearchResults(locations)
    );
  }, [debouncedSearchTerm]);

  return (
    <>
      <input
        placeholder="Search for location"
        type="text"
        onChange={inputChangeHandler}
        value={searchTerm}
      />
      <p>{searchTerm}</p>
      <p>{debouncedSearchTerm}</p>
      <p>{JSON.stringify(searchResults)}</p>
    </>
  );
};

export default Search;
