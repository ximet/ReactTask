import React, { useState } from 'react';
import FilterableList from '../FilterableList/FilterableList';
import Button from '../Button/Button';
import styles from './Header.scss';
import capitals from '../../common/data';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Button onClick={handleClick} />
        {isVisible && <FilterableList items={capitals} />}
      </nav>
      <div className={styles.header__titleContainer}>
        <h2 className={styles.header__title}>
          React Training App
        </h2>
      </div>
    </header>
  );
}

export default Header;
