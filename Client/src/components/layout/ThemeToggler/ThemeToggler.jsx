import React from 'react';
import styles from './ThemeToggler.modules.css';

function ThemeToggler(props) {
  return (
    <div className={styles['theme-toggler']}>
      <button className={styles['theme-toggler-button']} onClick={props.click}>
        Toggle theme
      </button>
    </div>
  );
}

export default ThemeToggler;
