import React from 'react';
import NavBarElement from './NavBarElement/NavBarElement.jsx';
import { map } from 'lodash';
import styles from './styles.css';

import img1 from '../img/browser.png';
import img2 from '../img/globe.png';
import img3 from '../img/mes.png';


 const ImgItems = [
    {
      key: 1,
      nav_img: img1,
      nav_title: "Дом"
    },
    {
      key: 2,
      nav_img: img2,
      nav_title: "Погода"
    },
    {
      key: 3,
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
          <NavBarElement key={item.key} title={item.nav_title} image={item.nav_img}></NavBarElement>
        ))
      }
    </div>
    );
  }
}

export default NavBar;

