import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

function Error({ errors }) {
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

Error.propTypes = { errors: PropTypes.arrayOf(PropTypes.string).isRequired };

export default Error;
