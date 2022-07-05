import React, { FormEvent, useState } from 'react';
import { ENDPOINTS } from '../../../helpers/api';
import { LocationSearch } from '../../../helpers/Interfaces';
import { useDebounce } from './../../../hooks/useDebounce';
import { useGetRequest } from './../../../hooks/useGetRequest';
import SearchResults from './SearchResults/SearchResults';
import styles from './Search.module.scss';

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
  const [displaySearchResults, setDisplaySearchResults] = useState<boolean>(false);

  const inputChangeHandler = (event: FormEvent<HTMLInputElement>): void => {
    setDisplaySearchResults(true);
    setSearchTerm(event.currentTarget.value);
  };

  return (
    <section className={styles.container}>
      <input
        className={styles.input}
        placeholder="Search for location"
        type="text"
        onChange={inputChangeHandler}
        value={searchTerm}
      />
      {searchTerm.length < 3 && <p>Enter at least 3 letters</p>}
      {searchResults.locations.length > 0 && displaySearchResults && (
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
