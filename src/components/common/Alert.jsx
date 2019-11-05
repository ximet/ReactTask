import React from 'react';
import PropTypes from 'prop-types';

const stylesByType = {
  error: {
    color: '#721c24',
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
  warning: {
    color: '#856404',
    backgroundColor: '#fff3cd',
    borderColor: '#ffeeba',
  },
  info: {
    color: '#0c5460',
    backgroundColor: '#d1ecf1',
    borderColor: '#bee5eb',
  },
};

export default function Alert({ children, type }) {
  return (
    <div
      style={{
        padding: '.75rem 1.25rem',
        marginBottom: '1rem',
        border: '1px solid transparent',
        borderRadius: '.25rem',
        ...stylesByType[type],
      }}
    >
      {children}
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['error', 'warning', 'info']),
  children: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  type: 'error',
};
