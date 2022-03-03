import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { setTheme as setThemeAction } from '../../store/actions';
import changeCssRootVariables from '../../utils/changeCssRootVariables';
import { setLocalstorageItem } from '../../utils/localStorage';

import moonIcon from '../../assets/images/moon.png';
import sunIcon from '../../assets/images/sun.png';

import './ThemeSwitcher.scss';

class SwitcherTheme extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { theme, setTheme } = this.props;
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    changeCssRootVariables(newTheme);
    setLocalstorageItem('theme', newTheme);
  }

  render() {
    return (
      <button className="switcher" onClick={this.handleClick} type="button">
        <img
          className="switcher-icon"
          src={this.theme === 'light' ? moonIcon : sunIcon}
          alt="theme"
          style={{ width: '40px' }}
        />
      </button>
    );
  }
}

SwitcherTheme.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};
SwitcherTheme.defaultProps = { theme: '', setTheme: () => {} };

const mapStateToProps = (state) => ({ theme: state.theme });
const mapDispatchToProps = (dispatch) => ({ setTheme: (theme) => dispatch(setThemeAction(theme)) });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SwitcherTheme);
