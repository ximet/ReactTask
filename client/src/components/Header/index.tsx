import LocationContext from 'contexts/LocationContext';
import useGetLocation from 'hooks/useGetLocation';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import Button from 'components/Button';
import DarkLightThemeContext from 'contexts/ThemeContext';
import styles from './styles.module.scss';

const Header: React.FC = ({ children }) => {
  const { setCoordinates, setStatusMsg } = useContext(LocationContext);
  const { darkMode, setDarkMode, icon, setIcon } = useContext(DarkLightThemeContext);
  const { coords } = useGetLocation();

  const onLinkClick = () => {
    setStatusMsg(null);
    setCoordinates(coords);
  };

  const onThemeBtnClick = () => {
    setIcon(!icon);
    setDarkMode(!darkMode);
  };

  return (
    <header className={darkMode ? styles.headerDark : styles.header}>
      <nav className={styles.menuNav}>
        <NavLink to="/" className={darkMode ? styles.linkDark : styles.link} onClick={onLinkClick}>
          Home
        </NavLink>
        <NavLink to="feedback" className={darkMode ? styles.linkDark : styles.link}>
          Feedback
        </NavLink>
        <NavLink to="info" className={darkMode ? styles.linkDark : styles.link}>
          Info
        </NavLink>
      </nav>
      <div className={styles.searchBox}>
        <div className={styles.search}>{children}</div>
        <Button type="button" className="themeBtn" onClick={onThemeBtnClick}>
          {icon ? (
            <MdOutlineLightMode className={darkMode ? styles.iconDark : styles.icon} />
          ) : (
            <MdOutlineDarkMode className={styles.icon} />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
