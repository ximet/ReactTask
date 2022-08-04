import { SearchResults } from 'components';
import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { Theme, ThemeContext, ThemeContextConfig } from 'store';
import styles from './Search.module.scss';

const Search: React.FunctionComponent = () => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [displaySearchResults, setDisplaySearchResults] = useState<boolean>(false);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setDisplaySearchResults(true);
    setSearchTerm(event.target.value);
  };
  const inputFocusHandler = (): void => setDisplaySearchResults(true);
  const inputBlurHandler = (): void => setDisplaySearchResults(false);
  const resultSelectedHandler = useCallback((): void => {
    setSearchTerm('');
    setDisplaySearchResults(false);
  }, []);

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
        searchTerm={searchTerm}
        displaySearchResults={displaySearchResults}
        onResultSelected={resultSelectedHandler}
      />
    </section>
  );
};

export default Search;
