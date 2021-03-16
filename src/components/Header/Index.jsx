import React, { useState } from 'react';
import List from '../List/Index';
import Button from '../Button/Index';
import styles from './Index.module.scss';

function Header() {
  const [visibility, setVisibility] = useState(false);

  const clickHandler = () => {
    setVisibility(!visibility);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Button clickHandler={clickHandler} />
        {visibility && <List />}
      </nav>
      <div className={styles['header__title-container']}>
        <h2 className={styles.header__title}>
          React Treaning App
        </h2>
      </div>
    </header>
  );
}

export default Header;
