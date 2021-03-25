/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FilterableList.scss';

function FilterableList({ items }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <input
          type="text"
          className={styles.searchBox}
          onChange={event => setInputValue(event.target.value.toLowerCase())}
        />
      </li>
      {items
        .filter(({ name }) => name.includes(inputValue))
        .map(({ name, id }) => (
          <li className={styles.listItem} key={id}>
            {name}
          </li>
        ))}
    </ul>
  );
}

FilterableList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf)
};

export default FilterableList;
