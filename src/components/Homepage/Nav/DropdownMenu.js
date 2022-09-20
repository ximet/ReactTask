import React, { useState } from 'react';
import * as styles from '../../../styles/DropdownMenu.module.css';

const initialCitiesState = [
  { name: 'Sofia', id: Math.random() },
  { name: 'Athens', id: Math.random() },
  { name: 'Istanbul', id: Math.random() }
];

function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState(initialCitiesState);

  const showCities = ev => {
    const dropdownContent = [...document.getElementsByClassName(styles.dropdownContent)][0];
    if (isOpen) {
      setIsOpen(false);
      dropdownContent.style.display = 'none';
    } else {
      setIsOpen(true);
      dropdownContent.style.display = 'inline-block';
    }
  };

  const citiesList = cities.map(city => <a key={city.id} href="#">{city.name}</a>);

  return (
    <div className={styles.dropdown}>
      <button id={styles.dropdownBtn} className={props.className} onClick={showCities}>Cities</button>
      <div className={styles.dropdownContent}>{citiesList}</div>
    </div>
  );
}

export { DropdownMenu };
