import ThemeSwitcherContainer from '../../containers/ThemeSwitcherContainer';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavMenu />
      <ThemeSwitcherContainer />
    </div>
  );
}

export default Header;
