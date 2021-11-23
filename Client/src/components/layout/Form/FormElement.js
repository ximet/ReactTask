import React from 'react';
import styles from './FormElement.modules.css'
function FormElement(props) {
  return (
    <div className={styles['form-element']}>
      <label>{props.labelName}</label>
      {props.children}
    </div>
  );
}

export default FormElement;
