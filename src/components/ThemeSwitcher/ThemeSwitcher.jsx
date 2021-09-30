import './ThemeSwitcher.css';

function ThemeSwitcher({ themeMode, toggleThemeMode }) {
  return (
    <div className="theme-switcher" onClick={() => toggleThemeMode()}>
      <div className={`theme-switcher__indicator theme-switcher__indicator_${themeMode}`}></div>
    </div>
  );
}

export default ThemeSwitcher;
