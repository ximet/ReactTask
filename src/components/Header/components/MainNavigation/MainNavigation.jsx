import classes from './MainNavigation.module.scss';

function MainNavigation() {
  return (
    <ul className={classes.navigation}>
      <li className={classes.navItem}>
        <a className={classes.link} href="#">
          Home
        </a>
      </li>
      <li className={classes.navItem}>
        <a className={classes.link} href="#">
          About us
        </a>
      </li>
      <li className={classes.navItem}>
        <a className={classes.link} href="#">
          Contacts
        </a>
      </li>
    </ul>
  );
}

export default MainNavigation;
