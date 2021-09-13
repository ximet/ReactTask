import React from 'react';
import backgroundVideo from '../../../../public/static/videos/background.mp4';
import classes from './backgroundVideo.module.css';

function BackgroundVideo() {
  return (
    <div>
      <video autoPlay loop muted className={classes.backgroundVideo}>
        <source src={backgroundVideo} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default BackgroundVideo;
