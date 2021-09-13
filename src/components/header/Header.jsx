import React from 'react';
import classes from './header.module.css';
import DefaultLink from '../generic/link/DefaultLink';
import { FEEDBACK_ROUTE, HOME_ROUTE, INFO_ROUTE } from '../../utils/consts';

const links = {
  home: {
    linkName: 'Home',
    path: HOME_ROUTE
  },
  info: {
    linkName: 'Info',
    path: INFO_ROUTE
  },
  feedback: {
    linkName: 'Feedback',
    path: FEEDBACK_ROUTE
  }
};

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.headerLeftpart}>
        <DefaultLink link={links.home}></DefaultLink>
      </div>
      <div className={classes.headerRightPart}>
        <DefaultLink link={links.info}></DefaultLink>
        <DefaultLink link={links.feedback}></DefaultLink>
      </div>
    </div>
  );
}

export default Header;
