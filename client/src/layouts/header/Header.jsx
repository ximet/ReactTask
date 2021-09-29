import React from 'react';
import classes from './header.module.css';
import NavBar from './navBar/NavBar';
import ThemeSwitcher from '../../components/themeSwitcher/ThemeSwitcher';
import SearchForm from './searchForm/SearchForm';

function Header({ theme, themeToggle }) {
  return (
    <div className={classes.container} data-theme={theme}>
      <SearchForm theme={theme}/>
      <div className={classes.navAndThemeSwitcher}>
        <NavBar theme={theme} />
        <ThemeSwitcher theme={theme} themeToggle={themeToggle} />
      </div>
    </div>
  );
}

export default Header;
