import React, { useEffect, useState } from 'react';
import styles from '../styles.scss';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import ModalCountries from './modals/modalCountries';

const { mainPage, search, buttons } = styles;
export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [isModalOpen, setModal] = useState(false);
  function inpuHandler(e) {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    fetch(`https://pfa.foreca.com/api/v1/location/search/${searchQuery}`, {
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTY2MzM2MTk2NywiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2NjMzNjE5NjcsImp0aSI6IjUxNDc0OTI0Yjc3NTQxMDkiLCJzdWIiOiJpZ29yaW9oYTk1IiwiZm10IjoiWERjT2hqQzQwK0FMamxZVHRqYk9pQT09In0.fZfEoqlYCWc4qs6-muuStu-ZCITDxeN5Qpg2705Sb00'
      }
    })
      .then(res => res.json())
      .then(data => {
        setItems(data.locations);
      });
  }, [searchQuery]);

  const filteredItems = Boolean(items.length) ? items : [];
  return (
    <div className={mainPage}>
      <ModalCountries
        modal={isModalOpen}
        onModalClose={() => setModal(false)}
        content={filteredItems}
      />
      <div className={search}>
        <p>Find the right location</p>
        <Input
          value={searchQuery}
          onChangeInput={e => inpuHandler(e)}
          placeholder="write here"
        ></Input>
        <Button text="show countries" onClick={() => setModal(true)} />
      </div>
    </div>
  );
}
