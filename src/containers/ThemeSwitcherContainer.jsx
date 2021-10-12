import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';
import { setTheme } from '../actions/ThemeActions';
import { THEME_DARK, THEME_LIGHT } from '../constants/constants';

function ThemeSwitcherContainer({ theme, setTheme }) {
  function switchTheme() {
    setTheme(theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
  }

  return <ThemeSwitcher theme={theme} onToggleTheme={switchTheme} />;
}

ThemeSwitcherContainer.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    theme: state.theme.name
  };
};

export default connect(mapStateToProps, { setTheme })(ThemeSwitcherContainer);
