import classes from './MainNavigation.module.scss';
import { Link as RouterLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <ul className={classes.navigation}>
      <li className={classes.navItem}>
        <RouterLink className={classes.link} to="/">
          Home
        </RouterLink>
      </li>
      <li className={classes.navItem}>
        <RouterLink className={classes.link} to="/about">
          About us
        </RouterLink>
      </li>
      <li className={classes.navItem}>
        <RouterLink className={classes.link} to="/contacts">
          Contacts
        </RouterLink>
      </li>
    </ul>
  );
}

export default MainNavigation;
