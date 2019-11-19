import React from 'react';
import Clock from './Clock/Clock.jsx';
import logo from '../img/umbrella.png';
import styles from './styles.css';

class Header extends React.Component {
  render() {
    return (
    <div className = {styles.head}>
        <header> <div className = {styles.circle}> <img src={logo} alt=""/></div> <span>Weather</span> </header>
        <Clock/>
    </div>
    );
  }
}

export default Header;