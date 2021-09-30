import React from 'react';
import classes from './backgroundImage.module.css'

function BackgroundImage({ bgImage }) {

  return (
    <div className={classes.container}>
      <img src={bgImage} alt='background image' className={classes.bgImage}/>
    </div>
  )
}

export default BackgroundImage;
