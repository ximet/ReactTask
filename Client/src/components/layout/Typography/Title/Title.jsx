import React from 'react';
import styles from './Title.modules.css';

function Title(props) {
  return <h1 className={styles.Title}>{props.children}</h1>;
}

export default Title;
