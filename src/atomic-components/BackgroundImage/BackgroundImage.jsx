import React from 'react';
import { BG_IMAGE } from '../../helpers/toggleTheme';
import classes from './BackgroundImage.module.css';

function BackgroundImage({ theme }) {
  const bgImage = BG_IMAGE[theme];

  return (
    <div className={classes.container}>
      <img src={bgImage} alt="" className={classes.image_container} />
    </div>
  );
}

export default BackgroundImage;
