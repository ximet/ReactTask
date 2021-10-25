import React from 'react';

import styles from './WithError.module.scss';
import { FETCHING_ERROR_TEXT } from '../../constants/forecaApi';
import ErrorImage from '../../assets/images/error-img.png';

const Error = WrappedComponent => {
  const ErrorMessage = ({ error, ...otherProps }) => {
    return error ? (
      <div className={styles.error}>
        <img src={ErrorImage} alt="error" />
        <span className={styles.errorInfo}>{`${error.message} ${FETCHING_ERROR_TEXT}`}</span>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return ErrorMessage;
};

export default Error;
