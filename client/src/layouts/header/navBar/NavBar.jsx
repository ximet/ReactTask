import React from 'react';
import NavLink from '../../../components/navLink/NavLink';
import classes from './navbar.module.css';
import { routes } from '../../../routes/routes';

function NavBar({ theme }) {
  return (
    <div className={classes.container}>
      <NavLink text={routes.info.text} path={routes.info.path} theme={theme} />
      <NavLink text={routes.feedback.text} path={routes.feedback.path} theme={theme} />
    </div>
  );
}

export default NavBar;
