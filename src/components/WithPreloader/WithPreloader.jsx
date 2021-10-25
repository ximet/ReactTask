import React from 'react';

import styles from './WithPreloader.module.scss';

const Preloader = WrappedComponent => {
  const Spinner = ({ isPageLoading, ...otherProps }) => {
    return isPageLoading ? (
      <div className={styles.spinnerOverlay}>
        <div className={styles.spinnerContainer}></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default Preloader;
