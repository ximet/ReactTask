import React from 'react';
import PropTypes from 'prop-types';
import { enterCityName } from '../../common/constants';
import styles from './FilterableList.scss';

function FilterableList({ items, onChange, getCurrentCityData, setCurrentCityName }) {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <input
          type="text"
          className={styles.searchBox}
          onChange={onChange}
          placeholder={enterCityName}
        />
      </li>
      {items
        .sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name))
        .map(({ name, country, id }) => (
          <li
            className={styles.listItem}
            key={id}
            id={id}
            onClick={() => {
              getCurrentCityData(id);
              setCurrentCityName(name);
            }}
          >
            {`${name}, ${country}`}
          </li>
        ))}
    </ul>
  );
}

FilterableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  onChange: PropTypes.func.isRequired,
  getCurrentCityData: PropTypes.func.isRequired,
  setCurrentCityName: PropTypes.func.isRequired
};

export default FilterableList;
