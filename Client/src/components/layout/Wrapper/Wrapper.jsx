import React from 'react';
import styles from './Wrapper.modules.css';

function Wrapper(props) {
  return <div className={styles.Wrapper}>{props.children}</div>;
}

export default Wrapper;
