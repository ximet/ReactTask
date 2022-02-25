import { useTheme } from '../../hooks/useTheme';
import classes from './themeSwitchButton.scss';
import { ThemeTypes } from '../../context/ThemeContext';

function ThemeSwitch() {
    const theme = useTheme();

    function switchTheme() {
        theme.changeTheme(theme.theme === ThemeTypes.dark ? ThemeTypes.light : ThemeTypes.dark);
    }

    return (
        <div>
            <input className={classes.themeSwitch} type="checkbox" onChange={switchTheme} checked={theme.theme === ThemeTypes.dark}></input>
        </div>
    );
}

export default ThemeSwitch;