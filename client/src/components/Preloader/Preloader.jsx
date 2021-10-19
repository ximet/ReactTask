import React from 'react';
import classes from './preloader.module.css';
import sun from '../../../public/images/sun.png';
import moon from '../../../public/images/moon.png';
import { string } from 'prop-types'

function Preloader({ centralObj, rotatingObj }) {
  return (
    <div className={classes.container}>
      <img src={centralObj} className={classes.centralObj} alt='cental obj'/>
      <img src={rotatingObj} className={classes.rotatingObj} alt ='rotating obj'/>
    </div>
  );
}

Preloader.defaultProps = {
    centralObj: moon,
    rotatingObj: sun
}

Preloader.propTypes = {
    centralObj: string,
    rotatingObj: string
}

export default Preloader;
