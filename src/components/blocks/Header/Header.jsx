import React from 'react';
import Logo from 'components/reusable/Logo/Logo';
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import { header, headerContent, divider, avatarWrapper } from './Header.scss';
import avatartSrc from 'assets/images/DG.png';

const logoProps = {
  text: 'D&G (Dima & Goman)'
}

const Header = () => (
    <header className={ header }>
      <div className={ headerContent }>
        <IconButton >
          <HomeIcon fontSize="large"/>
        </IconButton>
        <div className={ divider }></div>
        <Logo logoContent={ logoProps }/>
      </div>
      <div className={ avatarWrapper }>
        <Avatar alt="avatar" src={ avatartSrc } />
      </div>
    </header>    
);

export default Header; 