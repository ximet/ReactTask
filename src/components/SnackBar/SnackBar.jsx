import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { SnackbarContext } from '../../core/contexts';

import './SnackBar.scss';

function SnackBar({ duration }) {
  const [snackbar, setSnackbar] = useContext(SnackbarContext);

  useEffect(() => {
    if (snackbar.isOpen) {
      setTimeout(() => setSnackbar({ isOpen: false, message: '' }), duration);
    }
  }, [snackbar.isOpen]);

  const template = snackbar.isOpen
    ? (
      <div className="snackbar">
        {snackbar.message}
        <span>&#10004;</span>
      </div>
    )
    : <span />;

  return (
    ReactDOM.createPortal(
      template,
      document.getElementById('modal-root'),
    )
  );
}

SnackBar.propTypes = { duration: PropTypes.number };
SnackBar.defaultProps = { duration: 3000 };

export default SnackBar;
