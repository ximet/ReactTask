import LocationContext from 'contexts/LocationContext';
import useGetLocation from 'hooks/useGetLocation';
import React, { useContext } from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import Button, { ButtonStyles } from 'components/Button';
import DarkLightThemeContext from 'contexts/ThemeContext';
import NavbarLink from 'components/NavbarLink/NavbarLink';
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
    <header className={`${styles.header} ${darkMode ? styles.headerDark : styles.headerLight}`}>
      <nav className={styles.menuNav}>
        <NavbarLink onClick={onLinkClick} url="/">
          Home
        </NavbarLink>
        <NavbarLink onClick={onLinkClick} url="feedback">
          Feedback
        </NavbarLink>
        <NavbarLink onClick={onLinkClick} url="about">
          About
        </NavbarLink>
      </nav>
      <div className={styles.searchBox}>
        <div className={styles.search}>{children}</div>
        <Button type="button" className={ButtonStyles.ThemeBtn} onClick={onThemeBtnClick}>
          {icon ? (
            <MdOutlineLightMode
              className={`${styles.icon} ${darkMode ? styles.iconDark : styles.iconLight}`}
            />
          ) : (
            <MdOutlineDarkMode
              className={`${styles.icon} ${darkMode ? styles.iconDark : styles.iconLight}`}
            />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
