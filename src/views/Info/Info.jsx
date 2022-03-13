import React from 'react';
import classes from './Info.module.css';
import { BG_IMAGE } from '../../helpers/toggleTheme';
import Image from '../../atomic-components/Image/Image';

function Info({ theme }) {
  const bgImage = BG_IMAGE[theme];

  return (
    <div>
      <Image image={bgImage} />
      <div className={classes.info_wrapper}>
        <div className={classes.info_item}>
          <h2 className={classes.info_title}>About Us</h2>
          <span className={classes.info_subtitle}>
            This website presents weather observations according to{' '}
            <a
              href="https://developer.foreca.com/"
              target="_blank"
              className={classes.foreca_link}
              rel="noreferrer"
            >
              Foreca API
            </a>
            , weather forecasts and climatological information for selected cities.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info;
