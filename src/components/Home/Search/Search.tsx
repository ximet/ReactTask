import { SearchResults } from 'components';
import { ENDPOINTS } from 'consts';
import { useDebounce, useGetRequest } from 'hooks';
import React, { ChangeEvent, useContext, useState } from 'react';
import { Theme, ThemeContext, ThemeContextConfig } from 'store';
import { LocationSearch, RequestDataConfig } from 'types/interfaces';
import styles from './Search.module.scss';

const Search: React.FunctionComponent = () => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm: string = useDebounce(searchTerm);
  const {
    data: searchResults = { locations: [] },
    loading: searchLoading = true,
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
      <SearchResults
        searchResults={searchResults}
        searchLoading={searchLoading}
        setSearchTerm={setSearchTerm}
        setDisplaySearchResults={setDisplaySearchResults}
        displaySearchResults={displaySearchResults}
      />
    </section>
  );
};

export default Search;
