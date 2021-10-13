import classes from './MainNavigation.module.scss';

import Link from '../../../Link/Link';

function MainNavigation() {
  return (
    <ul className={classes.navigation}>
      <li className={classes.navItem}>
        <Link className={classes.link} href="#">
          Home
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link className={classes.link} href="#">
          About us
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link className={classes.link} href="#">
          Contacts
        </Link>
      </li>
    </ul>
  );
}

export default MainNavigation;
