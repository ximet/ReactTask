import React, { useContext, useState } from 'react';
import UserContext from '../../Context/UserContext';
import FilterableList from '../FilterableList/FilterableList';
import Button from '../Button/Button';
import MenuList from '../MenuList/MenuList';
import styles from './Header.scss';

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const { capitals } = useContext(UserContext);

  const handleClick = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Button onClick={handleClick} title="Cities" className={`${styles.menuBtn}`} />
        {isVisible && <FilterableList items={capitals} />}
      </nav>
      <div className={styles.header__titleContainer}>
        <MenuList />
      </div>
    </header>
  );
}

export default Header;
