import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import './Header.css';

function Header({ themeMode, toggleThemeMode }) {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <ThemeSwitcher themeMode={themeMode} toggleThemeMode={toggleThemeMode} />
    </div>
  );
}

export default Header;
