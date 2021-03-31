import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterableList.scss';

function FilterableList({ items, onChange, inputValue }) {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <input type="text" className={styles.searchBox} onChange={onChange} />
      </li>
      {items
        .filter(({ name }) => name.includes(inputValue))
        .sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name))
        .map(({ name, country, id }) => (
          <li className={styles.listItem} key={id}>
            {`${name}, ${country}`}
          </li>
        ))}
    </ul>
  );
}

FilterableList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf)
};

export default FilterableList;
