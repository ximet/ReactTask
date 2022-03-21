import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { connect } from 'react-redux';
import { themes } from '../../contexts/themes';
import { setTheme as setThemeAction } from '../../store/actions';
import { setCSSVariables } from '../../utils';
import { setLocalStorageItem } from '../../utils/localStorage';
import classes from './ThemeSwitcher.module.scss';

class ThemeSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { theme, setTheme } = this.props;
    const themeName = theme === 'light' ? 'dark' : 'light';

    setTheme(themeName);
    setCSSVariables(themes[themeName]);
    setLocalStorageItem('theme', themeName);
  }

  render() {
    return (
      <div className={classes.themeSwitcher} onClick={this.handleClick}>
        {this.props.theme === 'dark' ? <FaSun /> : <FaMoon />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ setTheme: theme => dispatch(setThemeAction(theme)) });
const mapStateToProps = state => ({ theme: state.theme });

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
