import React from 'react';
import PropTypes from 'prop-types';

import styles from './WithError.module.scss';
import { FETCHING_ERROR_TEXT } from '../../constants/forecaApi';
import ErrorImage from '../../assets/images/error-img.png';

const WithError = WrappedComponent => {
  const ErrorMessage = props => {
    return props.error ? (
      <div className={styles.error}>
        <img src={ErrorImage} alt="error" />
        <span className={styles.errorInfo}>{`${props.error.message} ${FETCHING_ERROR_TEXT}`}</span>
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  ErrorMessage.defaultProps = {
    error: null
  };

  ErrorMessage.propTypes = {
    error: PropTypes.instanceOf(Error)
  };

  return ErrorMessage;
};

WithError.propTypes = {
  WrappedComponent: PropTypes.element
};

export default WithError;
