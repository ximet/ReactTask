import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import styles from '../styles.scss';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import { API_EDPOIONTS, STORAGE } from '../helper/variables';
import ModalCountries from '../components/modals/modalCountries';

const { mainPage, search, buttons } = styles;
function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const { isLoading, data, error } = useFetch(API_EDPOIONTS.SEARCH, searchQuery);
  function inpuHandler(e) {
    setSearchQuery(e.target.value);
  }

  const checkedItems = Boolean(data.length) ? data : [];
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

export default MainPage;
