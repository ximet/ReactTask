import React from 'react';
import styles from './ErrorMessage.css';

const Error = () => (
  <h3 className={styles['error-title']}>
    Oops ¯\_(ツ)_/¯ <br /> something went wrong
  </h3>
);

export default Error;
