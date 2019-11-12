import React from 'react';
import styles from './styles.css';
import logo from '../img/umbrella.png';

import Clock from './Clock/Clock.jsx';

class Header extends React.Component {
  render() {
    return (
    <div className = {styles.head}>
        <header> <div className = {styles.circle}> <img src={logo} alt=""/></div> <span>Weather</span> </header>
        <Clock></Clock>
    </div>
    );
  }
}

export default Header;