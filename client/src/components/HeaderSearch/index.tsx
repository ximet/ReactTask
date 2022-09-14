import { getLocationByQuery } from 'API/get';
import Button from 'components/Button';
import Header from 'components/Header';
import LocationContext from 'contexts/LocationContext';
import React, { useContext, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const HeaderSearch = () => {
  const { setCoordinates, setStatusMsg } = useContext(LocationContext);
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = event => {
    if (/(^[A-Za-z]\s{1}}[A-Za-z])*$/.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (inputValue) {
      const locationData = await getLocationByQuery(inputValue);
      if (!locationData.locations.length) {
        setCoordinates(null);
        setStatusMsg(`Sorry, your entered location "${inputValue}" does not exists`);
        setInputValue('');
      } else {
        setCoordinates(null);
        setStatusMsg(null);
        setInputValue('');
        navigate(`/details/${locationData.locations[0].name.replace(/\s+/g, '')}`);
      }
    } else {
      setStatusMsg('Please, enter the name of the city. The input cannot be empty');
      setCoordinates(null);
    }
  };

  return (
    <Header>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleChange}
        />
        <Button type="submit">
          <VscSearch className={styles.icon} />
        </Button>
      </form>
    </Header>
  );
};

export default HeaderSearch;
