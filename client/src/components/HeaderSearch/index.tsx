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
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    const locationData = await getLocationByQuery(e.target[0].value);
    if (locationData.locations.length === 0) {
      setStatusMsg('Sorry, your entered location does not exists');
      setCoordinates(null);
    } else {
      const coords = {
        lat: locationData.locations[0].lat,
        lon: locationData.locations[0].lon
      };
      setCoordinates(coords);
      setStatusMsg(null);
      e.target[0].value = '';
      navigate(`/details/${locationData.locations[0].name}`);
    }
  };
  return (
    <Header>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input className={styles.input} type="text" placeholder="Search" />
        <Button type="submit" className="searchBtn">
          <VscSearch className={styles.icon} />
        </Button>
      </form>
    </Header>
  );
};

export default HeaderSearch;
