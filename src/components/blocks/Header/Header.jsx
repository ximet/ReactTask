import React from 'react';
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import Logo from 'components/reusable/Logo/Logo';
import styles from './Header.scss';
import avatartSrc from 'assets/images/DG.png';

const logoProps = {
  text: 'D&G (Dima & Goman)'
}

const Header = () => (
  <header className={ styles.header }>
    <div className={ styles.headerContent }>
      <IconButton >
        <HomeIcon fontSize="large"/>
      </IconButton>
      <div className={ styles.divider }></div>
      <Logo logoContent={ logoProps }/>
    </div>
    <div className={ styles.avatarWrapper }>
      <Avatar alt="avatar" src={ avatartSrc } />
    </div>
  </header>    
);

export default Header; 