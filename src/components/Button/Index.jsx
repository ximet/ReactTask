import React from 'react';

import styles from './Index.module.scss';

// eslint-disable-next-line react/prop-types
function Button({ clickHandler }) {
  return (
    <button type="button" className={styles['menu-btn']} onClick={clickHandler}>Menu</button>
  );
}

export default Button;
