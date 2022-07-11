import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorComponent.module.scss';

interface ErrorComponentProps {
  message: string;
  button: 'HOME' | 'TRY_AGAIN';
}

const ErrorComponent: React.FunctionComponent<ErrorComponentProps> = ({ message, button }) => {
  return (
    <div className={styles.container}>
      <div>{message}</div>
      {button === 'HOME' && (
        <Link to="/">
          <button className={styles.button}>Go back to Home Page</button>
        </Link>
      )}
      {button === 'TRY_AGAIN' && (
        <button onClick={() => location.reload()} className={styles.button}>
          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorComponent;
