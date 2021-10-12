import PropTypes from 'prop-types';
import './ThemeSwitcher.css';

function ThemeSwitcher({ theme, onToggleTheme }) {
  return (
    <div className="theme-switcher" onClick={() => onToggleTheme()}>
      <div className={`theme-switcher__indicator theme-switcher__indicator_${theme}`}></div>
    </div>
  );
}

ThemeSwitcher.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired
};

export default ThemeSwitcher;
