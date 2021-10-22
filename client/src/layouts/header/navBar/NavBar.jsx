import React from 'react';
import NavLink from '../../../components/navLink/NavLink';
import classes from './navbar.module.css';
import { routes } from '../../../routes/routes';

function NavBar() {
  return (
    <div className={classes.container}>
      <NavLink path={routes.info.path}>
        {routes.info.text}
      </NavLink>
      <NavLink path={routes.feedback.path}>
        {routes.feedback.text}
      </NavLink>
    </div>
  );
}

export default NavBar;
