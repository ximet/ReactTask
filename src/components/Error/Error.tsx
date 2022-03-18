import React from 'react';

import './Error.scss';

interface IErrorProps {
  errors: Array<string>;
}

function Error({ errors }: IErrorProps) {
  return (
    <div className="server-errors">
      <div className="server-errors-title">Something went wrong :</div>
      {
        [...(new Set(errors))].map((errorMessage) => (
          <div className="server-errors-item" key={errorMessage}>{errorMessage}</div>
        ))
      }
    </div>
  );
}

export default Error;
