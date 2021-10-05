import React from 'react';

import classes from './NavBar.module.scss';
import { routes } from '../../../constants/router';

import Logo from '../../../components/Logo/Logo';
import Link from '../../../components/Link/Link';

function NavBar() {
  return (
    <div className={classes.navigation}>
      <Logo />
      <Link content={routes.main.content} path={routes.main.path} />
      <Link content={routes.info.content} path={routes.info.path} />
      <Link content={routes.feedback.content} path={routes.feedback.path} />
    </div>
  );
}

export default NavBar;
