import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/themeContext';
import classes from './Footer.module.css';

function Footer() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={classes.footer} data-theme={theme}>
      <div className={classes.footer_container}>
        <p className={classes.footer_text}>Website Design By: Maria M.</p>
      </div>
    </div>
  );
}

export default Footer;
