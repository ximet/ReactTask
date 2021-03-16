/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import menuItem from '../../common/data';
import styles from './Index.module.scss';

function List() {
  const [items, setItems] = useState(menuItem);
  const [inputValue, setInputValue] = useState('');

  const listItem = (arrayOfItems) => {
    return arrayOfItems.map((item, i) => {
      // eslint-disable-next-line react/no-array-index-key
      return (<li className={styles['list-item']} key={i}>{item}</li>);
    });
  };

  useEffect(() => {
    const result = menuItem.filter((x) => x.toLowerCase().includes(inputValue.toLowerCase()));
    setItems(result);
  }, [inputValue]);

  return (
    <ul className={styles.list}>
      <li className={styles['list-item']}>
        <input type="text" className={styles.searchbox} onChange={(e) => setInputValue(e.target.value)} />
      </li>
      {listItem(items)}
    </ul>
  );
}

export default List;
