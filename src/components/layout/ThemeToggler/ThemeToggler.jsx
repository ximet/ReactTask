import React from 'react';
import styles from './ThemeToggler.modules.css';

function ThemeToggler(props) {
  return (
    <div className={styles.ThemeToggler}>
      <button className={styles.ThemeTogglerButton} onClick={props.click}>
        Toggle theme
      </button>
    </div>
  );
}

export default ThemeToggler;
