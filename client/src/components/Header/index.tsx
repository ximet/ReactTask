import LocationContext from 'contexts/LocationContext';
import useGetLocation from 'hooks/useGetLocation';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const Header: React.FC = ({ children }) => {
  const { setCoordinates } = useContext(LocationContext);
  const { coords } = useGetLocation();

  const onClick = () => {
    setCoordinates(coords);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.menuNav}>
        <NavLink to="/" className={styles.link} onClick={onClick}>
          Home
        </NavLink>
        <NavLink to="feedback" className={styles.link}>
          Feedback
        </NavLink>
        <NavLink to="info" className={styles.link}>
          Info
        </NavLink>
      </nav>
      <div className={styles.search}>{children}</div>
    </header>
  );
};

export default Header;
