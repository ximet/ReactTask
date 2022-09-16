import DarkLightThemeContext from 'contexts/ThemeContext';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarLink.module.scss';

const NavbarLink = ({ children, onClick, url }) => {
  const { darkMode } = useContext(DarkLightThemeContext);

  return (
    <NavLink
      to={url}
      className={`${styles.link} ${darkMode ? styles.linkDark : styles.linkLight}`}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

export default NavbarLink;
