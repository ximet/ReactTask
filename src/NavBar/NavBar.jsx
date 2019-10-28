import React from 'react';
import NavBarElement from './NavBarElement/NavBarElement.jsx';
import styles from './styles.css';

import img1 from '../img/weather_1.png';
import img2 from '../img/weather_2.png';
import img3 from '../img/wind_3.png';

class NavBar extends React.Component {
  render() {
    return (
    <div className = {styles.block}>
      <NavBarElement title="Домой" image={img1}></NavBarElement>
      <NavBarElement title="Погода" image={img2}></NavBarElement>
      <NavBarElement title="Погода" image={img3}></NavBarElement>
    </div>
    );
  }
}

export default NavBar;