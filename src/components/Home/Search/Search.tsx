import React, { ChangeEvent, useContext, useState } from 'react';
import { ENDPOINTS } from '../../../helpers/api';
import { LocationSearch, RequestDataConfig } from '../../../helpers/Interfaces';
import { ThemeContext, ThemeContextConfig, Theme } from '../../../store/theme-context';
import { useDebounce } from './../../../hooks/useDebounce';
import { useGetRequest } from './../../../hooks/useGetRequest';
import styles from './Search.module.scss';
import SearchResults from './SearchResults/SearchResults';

const Search: React.FunctionComponent = () => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
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
  const inputFocusHandler = (): void => setDisplaySearchResults(true);
  const inputBlurHandler = (): void => setDisplaySearchResults(false);

  return (
    <section className={styles.container}>
      <input
        className={`${styles.input} ${theme === Theme.DARK && styles[theme]}`}
        placeholder="Search for location"
        type="text"
        onChange={inputChangeHandler}
        onFocus={inputFocusHandler}
        onBlur={inputBlurHandler}
        value={searchTerm}
      />
      {displaySearchResults && (
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
