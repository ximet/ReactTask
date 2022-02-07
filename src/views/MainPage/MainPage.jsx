import React from 'react';
import classes from './MainPage.module.scss';

const MainPage = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default MainPage;
