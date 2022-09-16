import DarkLightThemeContext from 'contexts/ThemeContext';
import React, { FC, ReactNode, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarLink.module.scss';

type NavbarLinkProps = {
  children: ReactNode;
  onClick: () => void;
  url: string;
};

const NavbarLink: FC<NavbarLinkProps> = ({ children, onClick, url }) => {
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
