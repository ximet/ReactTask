import React from 'react';
import classes from './Footer.module.css';

function Footer() {
  return (
    <div className="footer">
      <div className={classes.footer_container}>
        <p className={classes.footer_text}>Website Design By: Maria M.</p>
      </div>
    </div>
  );
}

export default Footer;
