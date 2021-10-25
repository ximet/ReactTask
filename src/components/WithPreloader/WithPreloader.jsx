import React from 'react';
import PropTypes from 'prop-types';

import styles from './WithPreloader.module.scss';

const Preloader = WrappedComponent => {
  const Spinner = props => {
    return props.isFetching ? (
      <div className={styles.spinnerOverlay}>
        <div className={styles.spinnerContainer}></div>
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  Spinner.propTypes = {
    isFetching: PropTypes.bool.isRequired
  };

  return Spinner;
};

Preloader.propTypes = {
  WrappedComponent: PropTypes.element
};

export default Preloader;
