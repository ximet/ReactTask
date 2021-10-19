import React from 'react';
import classes from './preloader.module.css';
import sun from '../../../public/images/sun.png';
import moon from '../../../public/images/moon.png';

function Preloader() {
  return (
    <div className={classes.container}>
      <img src={moon} className={classes.moon} />
      <img src={sun} className={classes.sunny} />
    </div>
  );
}

export default Preloader;
