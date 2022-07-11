import React, { ChangeEvent, useState } from 'react';
import { ENDPOINTS } from '../../../helpers/api';
import { LocationSearch, RequestDataConfig } from '../../../helpers/Interfaces';
import { useDebounce } from './../../../hooks/useDebounce';
import { useGetRequest } from './../../../hooks/useGetRequest';
import styles from './Search.module.scss';
import SearchResults from './SearchResults/SearchResults';

const Search: React.FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm: string = useDebounce(searchTerm);
  const {
    data: searchResults = { locations: [] },
    loading = true,
    error = null
  }: RequestDataConfig<LocationSearch> = useGetRequest(
    ENDPOINTS.locationSearch,
    debouncedSearchTerm
  );
  const [displaySearchResults, setDisplaySearchResults] = useState<boolean>(false);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setDisplaySearchResults(true);
    setSearchTerm(event.target.value);
  };
  const minLetter = 3;

  return (
    <section className={styles.container}>
      <input
        className={styles.input}
        placeholder="Search for location"
        type="text"
        onChange={inputChangeHandler}
        value={searchTerm}
      />
      {searchTerm.length < minLetter && <p>Enter at least {minLetter} letters</p>}
      {!!searchResults.locations.length && displaySearchResults && (
        <SearchResults
          searchResults={searchResults}
          setSearchTerm={setSearchTerm}
          setDisplaySearchResults={setDisplaySearchResults}
        />
      )}
    </section>
  );
};

export default Search;
