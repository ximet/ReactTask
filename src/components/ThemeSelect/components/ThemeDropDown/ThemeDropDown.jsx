import ThemeItem from '../ThemeItem/ThemeItem';
import classes from './ThemeDropDown.module.scss';
import themeConfig from '../../../../config/themeConfig';
import { prepareThemesList } from '../../../../utils/prepareData';

function ThemeDropDown() {
  const themeList = prepareThemesList(themeConfig);

  return (
    <ul className={classes.themesDropdown}>
      {themeList.map(theme => (
        <ThemeItem theme={theme} key={theme.code} />
      ))}
    </ul>
  );
}

export default ThemeDropDown;
