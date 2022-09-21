import React, { useEffect, useState } from 'react';
import useSearch from '../hooks/useSearch';
import styles from '../styles.scss';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import ModalCountries from './modals/modalCountries';

const { mainPage, search, buttons } = styles;
export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);
  function inpuHandler(e) {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    useSearch(searchQuery)
      .then(res => res.json())
      .then(cityes => setItems(cityes.locations))
      .catch(error => {
        console.log(error);
        setError(error);
      });
  }, [searchQuery]);

  const checkedItems = Boolean(items.length) ? items : [];
  return (
    <div className={mainPage}>
      <ModalCountries
        modal={isModalOpen}
        onModalClose={() => setModalOpen(false)}
        content={checkedItems}
      />
      <div className={search}>
        <p>Find the right location</p>
        <p>{error}</p>
        <Input
          value={searchQuery}
          onChangeInput={e => inpuHandler(e)}
          placeholder="write here"
        ></Input>
        <Button text="show countries" onClick={() => setModalOpen(true)} />
      </div>
    </div>
  );
}
