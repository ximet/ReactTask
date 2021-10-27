import React from 'react';
import classes from './infoView.module.css';

function InfoView({ theme }) {
  return (
    <div className={classes.container} data-theme={theme}>
      <h3 className={classes.infoTitle}>Info</h3>
      <div className={classes.content}>
        <span className={classes.mainText}>
          This app is used to see the weather in any part of the world. The app provides users an
          opportunity to see the detailed weather such as degrees, wind speed, humidity, etc. f or
          the current day and also for the next two weeks. In case if you have some questions or
          some points for improving it, please provide your feedback
        </span>
      </div>
    </div>
  );
}

export default InfoView;
