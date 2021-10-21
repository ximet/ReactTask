import classes from './ThemeItem.module.scss';

function ThemeItem({ theme, currentTheme, selectTheme }) {
  return (
    <li
      className={[classes.theme, currentTheme.code === theme.code ? classes.active : ''].join(' ')}
      onClick={() => selectTheme(theme)}
    >
      {theme.name}
    </li>
  );
}

export default ThemeItem;
