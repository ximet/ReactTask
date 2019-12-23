import React from 'react';
import { Link } from "react-router-dom";
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
      <Link to="/">
        <IconButton >
          <HomeIcon fontSize="large"/>
        </IconButton>
      </Link>
      <div className={ styles.divider }></div>
      <Logo logoContent={ logoProps }/>
    </div>
    <div className={ styles.avatarWrapper }>
      <Avatar alt="avatar" src={ avatartSrc } />
    </div>
  </header>    
);

export default Header;