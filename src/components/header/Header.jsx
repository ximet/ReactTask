import ThemeSwitchButton from '../themeSwitchButton/ThemeSwitchButton';
import classes from './header.scss';

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>Logo</div>
      <ThemeSwitchButton />
    </div>
  );
}

export default Header;
