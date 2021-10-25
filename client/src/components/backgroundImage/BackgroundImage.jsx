import React from 'react';
import classes from './backgroundImage.module.css';
import PropTypes from 'prop-types';

function BackgroundImage({ src }) {
  return (
    <div className={classes.container}>
      <img src={src} alt="background image" className={classes.bgImage} />
    </div>
  );
}

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default BackgroundImage;
