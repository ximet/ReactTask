import mainLogo from '../../assets/img/logo.png';
import classes from './Header.module.scss';

import LocationSearch from './components/LocationSearch/LocationSearch';
import MainNavigation from './components/MainNavigation/MainNavigation';
import CurrentTime from '../CurrentTime/CurrentTime';
import ThemeSelect from '../ThemeSelect/ThemeSelect';

function Header() {
  return (
    <header className={classes.header}>
      <a className={classes.logo} href="/">
        <img src={mainLogo} alt="Logo" title="Logo" />
      </a>
      <MainNavigation />
      <LocationSearch />
      <ThemeSelect />
      <CurrentTime />
    </header>
  );
}

export default Header;
