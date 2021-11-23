import React from 'react';
import styles from './Nav.modules.css';
function Nav(props) {
  return <li className={styles.nav}>{props.children}</li>;
}

export default Nav;
