import React, { useState } from 'react';
import styles from '../styles.scss';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import { allItems } from '../helper/variables';

const { mainPage, search, buttons } = styles;
export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState(allItems);
  const filteredItems = items.filter(item =>
    item.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  return (
    <div className={mainPage}>
      <div className={search}>
        <p>Find the right location</p>
        <Input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="write here"
        ></Input>
      </div>
      <div className={buttons}>
        {filteredItems.map(item => (
          <Button text={item} key={item}></Button>
        ))}
      </div>
    </div>
  );
}
