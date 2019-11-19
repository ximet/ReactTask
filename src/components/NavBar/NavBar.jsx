import React from 'react';
import NavBarElement from './NavBarElement/NavBarElement.jsx';
import img1 from '../../img/browser.png';
import img2 from '../../img/globe.png';
import img3 from '../../img/mes.png';
import styles from './styles.css';


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
        ImgItems.map(function(item) {
          return <NavBarElement 
                    key={item.key} 
                    title={item.nav_title} 
                    image={item.nav_img}/>;
        })
      }
    </div>
    );
  }
}

export default NavBar;

