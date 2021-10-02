import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import './Header.css';

function Header({ themeMode, toggleThemeMode }) {
  return (
    <div className="header">
      <Logo />
      <NavMenu />
      <ThemeSwitcher themeMode={themeMode} toggleThemeMode={toggleThemeMode} />
    </div>
  );
}

export default Header;
