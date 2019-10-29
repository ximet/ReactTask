import React from 'react';
import styles from './styles.css';

import logo from '../img/umbrella.png';

class Header extends React.Component {
  render() {
    return (
    <div className = {styles.head}>
        <div> <img src={logo} alt=""/></div> <span>Weather</span>
    </div>
    );
  }
}

export default Header;