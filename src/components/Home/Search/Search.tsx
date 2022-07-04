import React, { FormEvent, useState } from 'react';
import { ENDPOINTS } from '../../../helpers/api';
import { LocationSearch } from '../../../helpers/Interfaces';
import { useDebounce } from './../../../hooks/useDebounce';
import { useGetRequest } from './../../../hooks/useGetRequest';
import SearchResults from './SearchResults/SearchResults';


const Search: React.FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm: string = useDebounce(searchTerm);
  const {
    data: searchResults = { locations: [] },
    loading = true,
    error = null
  }: { data: LocationSearch; loading: boolean; error: string | null } = useGetRequest(
    ENDPOINTS.locationSearch,
    debouncedSearchTerm
  );

  const inputChangeHandler = (event: FormEvent<HTMLInputElement>): void => {
    setSearchTerm(event.currentTarget.value);
  };

  return (
    <>
      <input
        placeholder="Search for location"
        type="text"
        onChange={inputChangeHandler}
        value={searchTerm}
      />
      {searchTerm.length < 3 && <p>Enter at least 3 letters</p>}
      {searchResults.locations.length > 0 && (
        <SearchResults searchResults={searchResults} />
      )}
    </>
  );
};

export default Search;
