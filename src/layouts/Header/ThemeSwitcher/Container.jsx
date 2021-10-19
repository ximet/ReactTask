import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { THEMES } from '../../../constants/themes';
import { localStorageService } from '../../../services/localStorageService';
import { setCurrentTheme } from '../../../redux/actions/themeActions';
import ThemeSwitcher from './ThemeSwitcher';

const ThemeSwitcherContainer = ({ theme, switchTheme }) => {
  function changeTheme() {
    const currentTheme = theme === THEMES.light ? THEMES.dark : THEMES.light;
    localStorageService.setCurrentTheme(currentTheme);

    switchTheme(currentTheme);
  }

  return <ThemeSwitcher theme={theme} onSwitch={changeTheme} />;
};

ThemeSwitcherContainer.propTypes = {
  theme: PropTypes.string.isRequired,
  switchTheme: PropTypes.func.isRequired
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
