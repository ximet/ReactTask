import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormElement.modules.css';

function FormElement({ children, labelName }) {
  return (
    <div className={styles['input-element']}>
      <label>{labelName}</label>
      {children}
    </div>
  );
}

FormElement.propTypes = {
  className: PropTypes.string,
  labelName: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default FormElement;
