import React, { useState } from 'react';
import styles from '../styles.scss';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import { allItems } from '../helper/variables';

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState(allItems);
  const filteredItems = items.filter(item =>
    item.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  return (
    <div className={styles.mainPage}>
      <div className={styles.search}>
        <p>Find the right location</p>
        <Input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="write here"
        ></Input>
      </div>
      <div className={styles.items}>
        {filteredItems.map(item => (
          <Button text={item} key={item}></Button>
        ))}
      </div>
    </div>
  );
}
