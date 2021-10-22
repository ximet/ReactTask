import React from 'react';
import classes from './preloader.module.css';
import PropTypes from 'prop-types';
import sun from '../../../public/images/sun.png';
import moon from '../../../public/images/moon.png';

function Preloader({ theme }) {
  return (
    <div className={classes.container} data-theme={theme}>
      <img src={moon} className={classes.staticImage} alt="cental obj" />
      <img src={sun} className={classes.animatedImage} alt="rotating obj" />
    </div>
  );
}

Preloader.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Preloader;
