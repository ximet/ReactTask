import { useEffect } from 'react';
import { connect } from 'react-redux';

import { THEMES } from '../../../constants/themes';
import { setCurrentTheme } from '../../../redux/actions/themeActions';
import ThemeSwitcher from './ThemeSwitcher';

const ThemeSwitcherContainer = ({ theme, switchTheme }) => {
  function changeTheme() {
    const currentTheme = theme === THEMES.light ? THEMES.dark : THEMES.light;

    switchTheme(currentTheme);
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeSwitcher theme={theme} onSwitch={changeTheme} />;
};

const mapStateToProps = state => ({
  theme: state.theme.currentTheme
});

const mapDispatchToProps = dispatch => {
  return {
    switchTheme: theme => dispatch(setCurrentTheme(theme))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcherContainer);
