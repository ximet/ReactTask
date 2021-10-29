import React from 'react';

import classes from './NavBar.module.scss';
import { ROUTES } from '../../../constants/router';

import Logo from '../../../components/Logo/Logo';
import NavLink from '../../../components/NavLink/NavLink';

function NavBar() {
  return (
    <div className={classes.navigation}>
      <Logo />
      <NavLink content={ROUTES.main.content} path={ROUTES.main.path} />
      <NavLink content={ROUTES.info.content} path={ROUTES.info.path} />
      <NavLink content={ROUTES.feedback.content} path={ROUTES.feedback.path} />
    </div>
  );
}

export default NavBar;
