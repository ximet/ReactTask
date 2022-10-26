import Button, { ButtonStyles } from 'components/Button';
import Header from 'components/Header';
import SearchResultslist from 'components/SearchResultsList/SearchResultsList';
import LocationContext from 'contexts/LocationContext';
import React, { ChangeEvent, FC, useContext, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import styles from './styles.module.scss';

const HeaderSearch: FC = () => {
  const { setCoordinates } = useContext(LocationContext);
  const [inputValue, setInputValue] = useState<string>('');
  const [displaySearchResults, setDisplaySearchResults] = useState<boolean>(false);

  const handleInputFocus = (): void => {
    return setDisplaySearchResults(true);
  };
  const handleInputBlur = (): void => {
    return setDisplaySearchResults(false);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDisplaySearchResults(true);
    setInputValue(event.target.value);
  };
  const handleResultSelected = () => {
    setCoordinates(null);
    setInputValue('');
    setDisplaySearchResults(false);
  };

  return (
    <Header>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <SearchResultslist
        inputValue={inputValue}
        display={displaySearchResults}
        resultSelected={handleResultSelected}
      />
      <Button type="submit" className={ButtonStyles.IconBtn}>
        <VscSearch className={styles.icon} />
      </Button>
    </Header>
  );
};

export default HeaderSearch;
