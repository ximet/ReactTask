import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorComponentProps {
  message: string;
  button: 'HOME' | 'TRY_AGAIN';
}

const ErrorComponent: React.FunctionComponent<ErrorComponentProps> = ({ message, button }) => {
  return (
    <>
      <div>{message}</div>
      {button === 'HOME' && (
        <Link to="/">
          <button>Go back to Home Page</button>
        </Link>
      )}
      {button === 'TRY_AGAIN' && <button onClick={() => location.reload()}>Try again</button>}
    </>
  );
};

export default ErrorComponent;
