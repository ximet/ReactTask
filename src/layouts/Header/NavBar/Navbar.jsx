import React from 'react';

import classes from './NavBar.module.scss';
import { ROUTES } from '../../../constants/router';

import Logo from '../../../components/Logo/Logo';
import Link from '../../../components/Link/Link';

function NavBar() {
  return (
    <div className={classes.navigation}>
      <Logo />
      <Link content={ROUTES.main.content} path={ROUTES.main.path} />
      <Link content={ROUTES.info.content} path={ROUTES.info.path} />
      <Link content={ROUTES.feedback.content} path={ROUTES.feedback.path} />
    </div>
  );
}

export default NavBar;
