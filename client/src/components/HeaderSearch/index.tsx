import { getLocationByQuery } from 'API/get';
import Button, { ButtonStyles } from 'components/Button';
import Header from 'components/Header';
import SearchResultslist from 'components/SearchResultsList/SearchResultsList';
import LocationContext from 'contexts/LocationContext';
import React, { ChangeEvent, FC, useContext, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { formatNameForUrl, isInputValid } from 'utils/stringCorrections';
import styles from './styles.module.scss';

const HeaderSearch: FC = () => {
  const { setCoordinates, setStatusMsg } = useContext(LocationContext);
  const [inputValue, setInputValue] = useState<string>('');
  const [displaySearchResults, setDisplaySearchResults] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isInputValid(event.target.value)) {
      setInputValue(event.target.value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue) {
      const locationData = await getLocationByQuery(inputValue);
      if (!locationData?.locations.length) {
        setCoordinates(null);
        setStatusMsg(`Sorry, your entered location "${inputValue}" does not exists`);
        setInputValue('');
      } else {
        setCoordinates(null);
        setStatusMsg(null);
        setInputValue('');
        const urlLocationName = formatNameForUrl(
          `${locationData.locations[0].name}-${locationData.locations[0].country}`
        );
        navigate(`/details/${urlLocationName}`);
      }
    } else {
      setStatusMsg('Please, enter the name of the city. The input cannot be empty');
      setCoordinates(null);
    }
  };
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
    setInputValue('');
    setDisplaySearchResults(false);
  };

  return (
    <Header>
      {/* <form onSubmit={handleSubmit} className={styles.form}> */}
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={inputValue}
        // onChange={handleChange}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <SearchResultslist
        inputValue={inputValue}
        display={displaySearchResults}
        resultSelected={handleResultSelected}
      />
      {/* <Button type="submit" className={ButtonStyles.IconBtn}>
        <VscSearch className={styles.icon} />
      </Button> */}
      {/* </form> */}
    </Header>
  );
};

export default HeaderSearch;
