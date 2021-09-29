import mainLogo from '../../assets/img/logo.png';
import classes from './Header.module.scss';

import LocationSearch from './components/LocationSearch/LocationSearch';
import MainNavigation from './components/MainNavigation/MainNavigation';
import CurrentTime from '../CurrentTime/CurrentTime';

function Header() {
  return (
    <header className={classes.header}>
      <a className={classes.logo} href="/">
        <img src={mainLogo} alt="Logo" title="Logo" />
      </a>
      <MainNavigation />
      <LocationSearch />
      <CurrentTime />
    </header>
  );
}

export default Header;
