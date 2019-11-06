import React from 'react';
import AppLogo from 'components/reusable/AppLogo/AppLogo';
import Clock from 'components/reusable/Clock/Clock';
import TempUnitsSwitcher from 'components/reusable/TempUnitsSwitcher/TempUnitsSwitcher';

import styles from 'assets/css/styles.css';

const logoProps = {
    imgSrc: require('assets/images/logo192.png'),
    text: 'yzWeather°'
}

class Header extends React.Component {
    render() {
      return (
          <header className={styles.appHeader}>
            <AppLogo logoProps={logoProps}/>
            <Clock />
            <TempUnitsSwitcher />
          </header>    
      );
    }
  }
  
export default Header;
