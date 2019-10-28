import React from 'react';
// import NavBarElement from './NavBarElement/NavBarElement.jsx';
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