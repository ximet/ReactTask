import React from 'react';
import classes from './Footer.module.css';

function Footer({ theme }) {
  return (
    <div className={classes.footer} data-theme={theme}>
      <div className={classes.footer_container}>
        <p className={classes.footer_text}>Website Design By: Maria M.</p>
      </div>
    </div>
  );
}

export default Footer;
