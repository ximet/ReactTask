import React, { useEffect, useState } from 'react';
import * as styles from '../../../styles/DropdownMenu.module.css';
import { getCities } from '../../../api/weatherApi.js';

function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const [searchedCity, setSearchedCity] = useState({});

  useEffect(() => {
    getCities(searchedCity.name)
      .then(res => {
        setCities(res.locations);
      })
      .catch(err => console.log(err));
  }, [searchedCity.name]);

  const showCities = ev => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const onSearch = ev => {
    setSearchedCity({ name: ev.target.value });
  };

  const filteredCities = searchedCity.name
    ? cities.filter(city => city.name.includes(searchedCity.name))
    : cities;

  const citiesList = filteredCities.map(city => (
    <a key={city.id} href="#">
      {city.name}
    </a>
  ));

  const dropdownContent = isOpen ? (
    <div className={styles.dropdownContent}>
      <input
        className={styles.citySearch}
        onChange={onSearch}
        type="text"
        placeholder="Search for a city"
      />
      {citiesList}
    </div>
  ) : null;

  return (
    <div className={styles.dropdown}>
      <button className={props.navBtnClassName} onClick={showCities}>
        Cities
      </button>
      {dropdownContent}
    </div>
  );
}

export { DropdownMenu };
