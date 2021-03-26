import React from 'react';

import styles from './Button.scss';

function Button({ clickHandler }) {
  return (
    <button type="button" className={styles['menu-btn']} onClick={clickHandler}>
      Menu
    </button>
  );
}

export default Button;
