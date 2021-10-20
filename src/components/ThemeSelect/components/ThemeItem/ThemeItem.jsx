import classes from './ThemeItem.module.scss';
import ThemeContext from '../../../../providers/themeContext';

function ThemeItem({ theme }) {
  return (
    <ThemeContext.Consumer>
      {({ theme: currentTheme, selectTheme }) => (
        <li
          className={[classes.theme, currentTheme.code === theme.code ? classes.active : ''].join(
            ' '
          )}
          onClick={() => selectTheme(theme)}
        >
          {theme.name}
        </li>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeItem;
