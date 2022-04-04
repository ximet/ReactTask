import React, { useContext } from 'react';
import { BG_IMAGE } from '../../helpers/toggleTheme';
import { ThemeContext } from '../../providers/themeContext';
import classes from './BackgroundImage.module.css';

function BackgroundImage() {
  const { theme } = useContext(ThemeContext);
  const bgImage = BG_IMAGE[theme];

  return (
    <div className={classes.container}>
      <img src={bgImage} alt="" className={classes.image_container} />
    </div>
  );
}

export default BackgroundImage;
