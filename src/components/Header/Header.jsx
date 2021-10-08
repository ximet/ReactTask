import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import './Header.css';

function Header({ theme, onToggleTheme }) {
  return (
    <div className="header">
      <Logo />
      <NavMenu />
      <ThemeSwitcher theme={theme} onToggleTheme={onToggleTheme} />
    </div>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired
};

export default Header;
