import React from 'react';
import classes from '../../App.module.css';
import { BG_IMAGE } from '../../helpers/toggleTheme';
import Image from '../../atomic-components/Image/Image';

function Info({ theme }) {
  const bgImage = BG_IMAGE[theme];

  return (
    <div>
      <Image image={bgImage} />
      <h1 className={classes.info}>Info</h1>
    </div>
  );
}

export default Info;
