import React from 'react';
import NavBarElement from './NavBarElement/NavBarElement.jsx';
import { map } from 'lodash';
import styles from './styles.css';

import img1 from '../img/weather_1.png';
import img2 from '../img/weather_2.png';
import img3 from '../img/wind_3.png';


 const ImgItems = [
    {
      nav_img: img1,
      nav_title: "Дом"
    },
    {
      nav_img: img2,
      nav_title: "Погода"
    },
    {
      nav_img: img3,
      nav_title: "Прогнозы"
    },
  ];

class NavBar extends React.Component {
  render() {
    return (
    <div className = {styles.nav}>
      {
        map(ImgItems, item => (
          <NavBarElement title={item.nav_title} image={item.nav_img}></NavBarElement>
        ))
      }
    </div>
    );
  }
}

export default NavBar;

