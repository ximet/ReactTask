import ThemeItem from '../ThemeItem/ThemeItem';
import classes from './ThemeDropDown.module.scss';
import { getThemesList } from '../../../../config/themeConfig';
import ThemeContext from '../../../../providers/themeContext';

function ThemeDropDown() {
  const themeList = getThemesList();

  return (
    <ThemeContext.Consumer>
      {({ theme: currentTheme, selectTheme }) => (
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
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeDropDown;
