import classes from './header.scss';
import ThemeSwitchButton from '../themeSwitchButton/ThemeSwitchButton';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header_container}>
        <Logo />
        <ThemeSwitchButton />
      </div>
      <div className={classes.navigation}>
        <Navbar style={'topNavigation'} />
      </div>
    </div>
  );
}

export default Header;
