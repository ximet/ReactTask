import React from 'react';
import AppLogo from 'components/reusable/AppLogo/AppLogo';
import Clock from 'components/reusable/Clock/Clock';
import TempUnitsSwitcher from 'components/reusable/TempUnitsSwitcher/TempUnitsSwitcher';
import styles from 'assets/css/styles.scss';
import logoPath from 'assets/images/logo192.png';

const logoProps = {
    imgSrc: logoPath,
    text: 'yzWeather°',
};

function Header(){

  return (
    <header className={styles.appHeader}>
      <AppLogo {...logoProps} />
      <Clock />
      <TempUnitsSwitcher />
    </header>
  );
}
  
export default Header;
