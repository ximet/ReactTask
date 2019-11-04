import React from 'react';
import styles from 'assets/css/styles.css';

import SideMenu from 'components/menues/SideMenu/SideMenu';

import locationIcon from 'assets/images/icons/location.svg';
import worldIcon from 'assets/images/icons/world.svg';

const Navigation = [
    {
        name:'location',
        iconPath: locationIcon
    },
    {
        name:'world',
        iconPath: worldIcon
    }
]

class Side extends React.Component {
    render() {
      return (          
        <aside className={styles.appAside}>
            <SideMenu Navigation={Navigation} />
        </aside>   
      );
    }
  }
  
export default Side;