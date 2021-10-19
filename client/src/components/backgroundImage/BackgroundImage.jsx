import React from 'react';
import classes from './backgroundImage.module.css';
import { backgroundImageBgImageType } from './types';

function BackgroundImage({ bgImage }) {
  return (
    <div className={classes.container}>
      <img src={bgImage} alt="background image" className={classes.bgImage} />
    </div>
  );
}

BackgroundImage.propTypes = {
  bgImage: backgroundImageBgImageType
};

export default BackgroundImage;
