import React, { useState } from 'react';
import FilterableList from '../FilterableList/FilterableList';
import Button from '../Button/Button';
import styles from './Header.scss';

function Header() {
  const [visibility, setVisibility] = useState(false);

  const clickHandler = () => {
    setVisibility(!visibility);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Button clickHandler={clickHandler} />
        {visibility && <FilterableList />}
      </nav>
      <div className={styles['header__title-container']}>
        <h2 className={styles.header__title}>React Treaning App</h2>
      </div>
    </header>
  );
}

export default Header;
