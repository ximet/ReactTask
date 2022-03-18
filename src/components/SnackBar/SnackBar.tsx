import React, { useContext, useEffect } from 'react';

import { SnackbarContext, SnackbarContextInterface } from '../../core/contexts';

import './SnackBar.scss';

interface SnackBarInterface {
  duration: number;
}

function SnackBar({ duration = 3000 }: SnackBarInterface) {
  const { snackbar, setSnackbar } = useContext<SnackbarContextInterface>(SnackbarContext);

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

export default SnackBar;
