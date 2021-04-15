import React from 'react';
import MenuList from '../MenuList/MenuList';
import styles from './Header.scss';

function Header() {
  //Button removed
  //FilterableList moved to HomePage as Aside bar and always be shown
  return (
    <header className={styles.header}>
      <div className={styles.header__titleContainer}>Simple Wheather App</div>
      <nav className={styles.container}>
        <MenuList />
      </nav>
    </header>
  );
}

export default Header;
