import React from 'react';
import classes from './preloader.module.css';
import sun from '../../../public/images/sun.png';
import moon from '../../../public/images/moon.png';
import PropTypes from 'prop-types'

function Preloader({ staticImage, rotatingImage }) {
  return (
    <div className={classes.container}>
      <img src={staticImage} className={classes.staticImage} alt='cental obj'/>
      <img src={rotatingImage} className={classes.rotatingImage} alt ='rotating obj'/>
    </div>
  );
}

Preloader.defaultProps = {
    staticImage: moon,
    rotatingImage: sun
}

Preloader.propTypes = {
  staticImage: PropTypes.string,
  rotatingImage: PropTypes.string
}

export default Preloader;
