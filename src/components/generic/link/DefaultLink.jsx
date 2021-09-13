import React from 'react';
import { Link } from 'react-router-dom';
import classes from './defaultLink.module.css';

function DefaultLink({ link }) {
  return (
    <Link className={classes.link} to={link.path}>
      <p>{link.linkName}</p>
    </Link>
  );
}

export default DefaultLink;
