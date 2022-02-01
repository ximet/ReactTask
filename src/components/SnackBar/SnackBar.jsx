import React, { useContext, useEffect } from 'react';
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

  return (
    snackbar.isOpen
      ? (
        <div className="snackbar">
          {snackbar.message}
          <span>&#10004;</span>
        </div>
      )
      : <span />
  );
}

SnackBar.propTypes = { duration: PropTypes.number };
SnackBar.defaultProps = { duration: 3000 };

export default SnackBar;
