import React, { useEffect, useState } from 'react';
import menuItem from '../../common/data';
import styles from './FilterableList.scss';

function List() {
  const [items, setItems] = useState(menuItem);
  const [inputValue, setInputValue] = useState('');

  const listItem = arrayOfItems => {
    return arrayOfItems.map((item, i) => {
      return (
        <li className={styles['list-item']} key={i}>
          {item.name}
        </li>
      );
    });
  };

  useEffect(() => {
    const result = menuItem.filter(x => x.name.toLowerCase().includes(inputValue.toLowerCase()));
    setItems(result);
  }, [inputValue]);

  return (
    <ul className={styles.list}>
      <li className={styles['list-item']}>
        <input
          type="text"
          className={styles.searchbox}
          onChange={e => setInputValue(e.target.value)}
        />
      </li>
      {listItem(items)}
    </ul>
  );
}

export default List;
