import React from 'react';
import NavBarElement from './NavBarElement/NavBarElement.jsx';
import { map } from 'lodash';
import styles from './styles.css';

import img1 from '../img/weather_1.png';
import img2 from '../img/weather_2.png';
import img3 from '../img/wind_3.png';


 const ImgItems = [
    {
      img: img1,
      title: "Дом"
    },
    {
      img: img2,
      title: "Погода"
    },
    {
      img: img3,
      title: "Прогнозы"
    },
  ];

class NavBar extends React.Component {
  render() {
    return (
    <div className = {styles.nav}>
      {
        map(ImgItems, item => (
          <NavBarElement title={item.title} image={item.img}></NavBarElement>
        ))
      }
    </div>
    );
  }
}

export default NavBar;

