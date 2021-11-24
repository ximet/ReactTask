import React from 'react';
import PropTypes from 'prop-types';
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

ThemeToggler.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default ThemeToggler;
