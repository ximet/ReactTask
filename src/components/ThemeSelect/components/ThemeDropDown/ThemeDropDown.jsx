import ThemeItem from '../ThemeItem/ThemeItem';
import classes from './ThemeDropDown.module.scss';
import { getThemesList } from '../../../../config/themeConfig';
import ThemeContext from '../../../../providers/themeContext';

const themeList = getThemesList();

function ThemeDropDown({ currentTheme, selectTheme }) {
  return (
    <ul className={classes.themesDropdown}>
      {themeList.map(theme => (
        <ThemeItem
          theme={theme}
          currentTheme={currentTheme}
          selectTheme={selectTheme}
          key={theme.code}
        />
      ))}
    </ul>
  );
}

export default ThemeDropDown;
