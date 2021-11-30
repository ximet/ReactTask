import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormElement.modules.css';
import Label from './Label/Label';

function FormElement({ children, labelName }) {
  return (
    <div className={styles.formElement}>
      <Label>{labelName}</Label>
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
