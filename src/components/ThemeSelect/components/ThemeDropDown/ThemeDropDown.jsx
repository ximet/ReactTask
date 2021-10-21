import ThemeItem from '../ThemeItem/ThemeItem';
import classes from './ThemeDropDown.module.scss';
import themeConfig from '../../../../config/themeConfig';
import { prepareThemesList } from '../../../../utils/prepareData';
import ThemeContext from '../../../../providers/themeContext';

function ThemeDropDown() {
  const themeList = prepareThemesList(themeConfig);

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
